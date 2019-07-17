/**
 * @file InnerAudioContext
 * @author lijiahui(lijiahui02@baidu.com)
 */

import $ from '../../../utils/_core';
import {swanNative} from '../../container';
import {getParamType} from '../../../utils/common';
import {events} from '../../../utils/event';
import {createCallback, createInvokePromise} from '../../../invoker/funcs';
import {resNeedDecode} from '../../../utils/parser';

/**
 * InnerAudioContext 的方法列表
 * @type {Array}
 */
const listenerList = [
    'Canplay', 'Play', 'Pause',
    'Stop', 'Ended', 'TimeUpdate',
    'Error', 'Waiting', 'Seeking', 'Seeked'
];

/**
 * 音频相关的端能力调用
 *
 * @param  {string} operationType 操作类型
 * @param  {Object} data          调用参数
 */
function nativeOperate(operationType, data) {
    createInvokePromise(swanNative, `audio.${operationType}`, {
        slaveId: this.__slaveId,
        audioId: this.__audioId,
        ...data
    });
}

/**
 * 获取音频相关事件操作的 Id
 *
 * @param  {string} listenerName 监听类型
 * @param  {string} audioId      音频 Id
 * @return {string}              操作 Id
 */
function getEventId(listenerName, audioId) {
    return `${listenerName}_audioId_${audioId}`;
}

/**
 * 创建二级回调参数
 *
 * @return {Object} 二级回调函数名 {onPlay: 'xxx'...}
 */
function createCallbackParams() {
    let self = this;
    return listenerList.reduce((cb, listenerName) => {
        cb[`on${listenerName}`] = createCallback(res => {
            let listenerKey = getEventId(listenerName, self.__audioId);
            events.emit(listenerKey, res);
        }, resNeedDecode);
        return cb;
    }, {});
}

/**
 * 挂载监听 && 取消监听的方法
 *
 */
function extendListenerMethod() {
    listenerList.forEach(listenerName => {
        let listenerKey = getEventId(listenerName, this.__audioId);
        // 监听方法
        this[`on${listenerName}`] = cb => {
            events.onMessage(listenerKey, cb);
        };
        // 取消监听方法
        this[`off${listenerName}`] = cb => {
            events.delHandler(listenerKey, cb);
        };
    });
}

/**
 * 监听属性变化 && 更新之
 *
 * @param  {string} attr  属性名称
 */
function watchAttrChange(attr) {
    const innerAttrKey = `__${attr}`;
    Object.defineProperty(this, attr, {
        set(val) {
            if (val === this[attr]) {
                return;
            }

            this[innerAttrKey] = val;
            $.isBoolean(val) && (val += '');

            let data = {
                slaveId: this.__slaveId,
                audioId: this.__audioId,
                [attr]: val
            };
            nativeOperate.call(this, 'renew', data);
        },
        get() {
            return this[innerAttrKey];
        }
    });
}

/**
 * 在回调中处理属性值的更新
 *
 */
function addAttrHandler() {
    events.on(getEventId('Play', this.__audioId), () => {
        this.paused = false;
    });

    ['Pause', 'Stop', 'Error'].forEach(listenerName => {
        events.on(getEventId(listenerName, this.__audioId), () => {
            this.paused = true;
        });
    });

    events.on(getEventId('Ended', this.__audioId), () => {
        // 不是循环的正常停止
        if (!this.loop) {
            this.paused = true;
        }
    });

    events.on(getEventId('TimeUpdate', this.__audioId), res => {
        // 非暂停状态时更新进度
        if (!this.paused) {
            this.duration = res.duration;
            this.currentTime = res.currentTime;
        }
    });
}

export default class InnerAudioContext {
    constructor(audioId, slaveId) {
        this.__audioId = audioId;
        this.__slaveId = slaveId;

        addAttrHandler.call(this);

        let self = this;
        ['startTime', 'loop', 'obeyMuteSwitch', 'volume'].forEach(attr => {
            watchAttrChange.call(self, attr);
        });

        extendListenerMethod.call(this);

        Object.assign(this, {
            __src: '',
            __startTime: 0,
            __loop: false,
            __obeyMuteSwitch: true,
            __volume: 1,
            autoplay: false,

            paused: true,
            currentTime: 0,
            duration: 0,
            buffered: 0
        });
    }

    play() {
        nativeOperate.call(this, 'play');
    }

    pause() {
        nativeOperate.call(this, 'pause');
    }

    stop() {
        nativeOperate.call(this, 'stop');
    }

    seek(position) {
        $.isObject(position) && (position = position.position);
        nativeOperate.call(this, 'seek', {position});
    }

    destroy() {
        nativeOperate.call(this, 'close');
    }

    get src() {
        return this.__src;
    }
    set src(src) {
        if (getParamType(src) !== 'String') {
            console.error(`Failed to set src, the src " ${src} " is invalid.`);
            return;
        }
        if (src === this.src) {
            return;
        }

        if (!this.__openState) {
            let data = {
                src,
                startTime: this.startTime,
                loop: this.loop + '',
                obeyMuteSwitch: this.obeyMuteSwitch + '',
                volume: this.volume,

                audioId: this.__audioId,
                slaveId: this.__slaveId,
                cb: createCallbackParams.call(this)
            };

            createInvokePromise(swanNative, 'audio.open', data)
            .then(res => {
                this.__openState = true;
                this.buffered = res.buffered;
                this.volume = res.volume;

                if (this.autoplay) {
                    this.play();
                }
            }).catch(err => {
                console.error('audio open fail', err);
            });
        }
        else {
            nativeOperate.call(this, 'renew', {src});
        }

        this.__src = src;
    }
}
