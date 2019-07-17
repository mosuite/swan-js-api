/**
 * @file BackgroundAudioManager
 * @author lijiahui(lijiahui02@baidu.com)
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

import {swanNative} from '../../container';
import $ from '../../../utils/_core';
import {getSlaveId, getParamType, handlerSet} from '../../../utils/common';
import {getParamsCBName, createInvokePromise, paramsInOrder} from '../../../invoker/funcs';
import {resNeedDecode} from '../../../utils/parser';
import {global} from '../../../utils/global';

/**
 * BGAudioManager 的属性列表
 * @type {Array}
 */
const attrList = [
    'paused', 'startTime', 'buffered',
    'title', 'epname', 'singer',
    'coverImgUrl', 'webUrl', 'protocol', 'lrcURL'
];

/**
 * BGAudioManager 的可写属性列表(不包括 src)
 * @type {Array}
 */
const writableAttr = [
    'startTime', 'title', 'epname', 'singer',
    'coverImgUrl', 'webUrl', 'protocol', 'lrcURL'
];

/**
 * BGAudioManager 的方法列表
 * @type {Array}
 */
const listenerList = [
    'onCanplay', 'onPlay', 'onPause',
    'onStop', 'onEnded', 'onTimeUpdate',
    'onPrev', 'onNext', 'onError', 'onWaiting', 'onSeeking', 'onSeeked'
];

/**
 * BGAudioManager 的属性缓存
 * 当 src 改变时，取其中值调用 update
 * @type {Object}
 */
const attrStorage = {
    src: '',
    currentTime: 0,
    duration: 0,
    paused: true,
    buffered: 0,

    startTime: 0,
    title: '',
    epname: '',
    singer: '',
    coverImgUrl: '',
    lrcURL: ''
};

/**
 * 音频相关的端能力调用
 *
 * @param  {string} operationType 操作类型
 * @param  {Object} data          调用参数
 */
function nativeOperate(operationType, data) {
    createInvokePromise(swanNative, `backgroundAudio.${operationType}`, {
        slaveId: this.__slaveId,
        ...data
    });
}

/**
 * 全局唯一的 BackgroundAudioManager
 * @type {Object}
 */
const BGAudioManager = {
    __openState: false,

    get __slaveId() {
        return getSlaveId();
    },

    get src() {
        return getAttr('src');
    },
    set src(val) {
        // 非空字符串校验
        if (getParamType(val) !== 'String' || !val) {
            console.error(`Failed to set src, the src " ${val} " is invalid.`);
            return;
        }

        attrStorage.src = val;

        if (!this.__openState) {
            openBGAudioManager();
        }
        else {
            // update src
            nativeOperate.call(BGAudioManager, 'renew', {
                src: attrStorage.src
            });
        }
    },

    get duration() {
        return attrStorage.duration;
    },

    get currentTime() {
        return attrStorage.currentTime;
    },

    play() {
        nativeOperate.call(this, 'play');
    },
    pause() {
        nativeOperate.call(this, 'pause');
    },
    stop() {
        nativeOperate.call(this, 'stop');
    },
    seek(position) {
        $.isObject(position) && (position = position.position);
        nativeOperate.call(this, 'seek', {position});
    }
};

/**
 * 创建 NA BackgroundAudio 实例
 *
 * @return {undefined}
 */
function openBGAudioManager() {
    // 挂载二级回调
    let cb = {};
    listenerList.forEach(listenerName => {
        let cbName = getParamsCBName();
        global[cbName] = res => {
            let data = resNeedDecode(res).data;
            if (listenerName === 'onTimeUpdate') {
                attrStorage.currentTime = data.currentTime;
                attrStorage.duration = data.duration;
            }
            let listenerKey = `${listenerName}_BGAudio`;
            handlerSet.get(listenerKey).queue.forEach(cb => {
                cb.call(BGAudioManager, data);
            });
        };
        cb[listenerName] = cbName;
    });

    let data = {
        slaveId: BGAudioManager.__slaveId,
        src: attrStorage.src,
        cb
    };
    writableAttr.forEach(attr => {
        data[attr] = attrStorage[attr];
    });

    createInvokePromise(swanNative, 'backgroundAudio.open', data).then(res => {
        BGAudioManager.__openState = true;
    }).catch(err => {
        console.warn('backgroundAudio open invoke fail', err);
    });
}

/**
 * 挂载监听方法
 *
 * @param  {string} listenerName 方法名 onPlay...
 */
listenerList.forEach(listenerName => {
    BGAudioManager[listenerName] = cb => {
        let listenerKey = `${listenerName}_BGAudio`;
        handlerSet.get(listenerKey).clear();
        typeof cb === 'function' && handlerSet.pushTo(listenerKey, cb);
    };
});

/**
 * 获取 BGAudioManager 的某个属性值
 *
 * @param  {string} attr 属性名称
 * @return {string|number}  属性值
 */
function getAttr(attr) {
    if (!BGAudioManager.__openState) {
        return attrStorage[attr];
    }
    const apiName = 'backgroundAudio.getParamsSync';
    const result = swanNative.invoke(apiName, paramsInOrder(swanNative, apiName, {
        slaveId: BGAudioManager.__slaveId + '',
        param: attr
    }));
    return $.isUndefined(result[attr]) ? attrStorage[attr] : result[attr];
}

/**
 * 定义 BGAudioManager 属性的 getter、setter
 *
 * @param  {string} attr 属性名
 */
attrList.forEach(attr => {
    Object.defineProperty(BGAudioManager, attr, {
        get() {
            return getAttr(attr);
        },
        set(val) {
            if (writableAttr.indexOf(attr) > -1) {
                attrStorage[attr] = val;
                nativeOperate.call(BGAudioManager, 'renew', {[attr]: val});
            }
        }
    });
});

export default BGAudioManager;
