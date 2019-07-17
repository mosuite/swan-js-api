/**
 * @file api/getTTSManager.js
 * @author  wuxiaopan@baidu.com
 * @description tts API
 */

import {swanNative} from '../container';
import {getParamsCBName, createInvokePromise, executeCallback} from '../../invoker/funcs';
import {events} from '../../utils/event';
import {jsonParse} from '../../utils/parser';
import {global} from '../../utils/global';

/**
 * tts 相关的端能力调用
 *
 * @param  {string} operationType 操作类型
 * @param  {Object} data          调用参数
 */
function nativeOperate(operationType, data) {
    createInvokePromise(swanNative, `tts.${operationType}`, {});
}

/**
 * 根据 status 派发事件
 *
 * @param  {Object} res 客户端返回
 */
function dispatchEvent(res) {
    let eventType;
    switch (res.status) {
        case 0:
            eventType = 'onSpeak';
            break;
        case 1:
        case 4:
            eventType = 'onError';
            res.data = {
                errCode: res.status,
                errMsg: res.message
            };
            break;
        case 2:
            eventType = 'onEnded';
            break;
        case 3:
            eventType = 'onStop';
            break;
        case 5:
            eventType = 'onPause';
            break;
    }
    events.emit(`ttsStateChange__${eventType}`, res.data);
}

/**
 * 获取全局唯一的录音管理器
 *
 * @type {Object}
 */
const ttsManager = {

    /**
     * 开始播报
     *
     * @param  {Object} params 配置参数
     * @return {undefined}
     */
    speak(params = {}) {
        params.cb = getParamsCBName();
        global[params.cb] = res => {
            let result = jsonParse(res);
            dispatchEvent(result);
        };

        executeCallback({
            promise: createInvokePromise(swanNative, 'tts.speak', params),
            apiName: 'tts.speak'
        }, params);
    },

    pause() {
        nativeOperate('suspend');
    },

    resume() {
        nativeOperate('resume');
    },

    stop() {
        nativeOperate('stop');
    }
};

/**
 * 扩展监听方法
 *
 * @param  {string} listenerName 监听方法名
 */
['onSpeak', 'onStop', 'onPause', 'onEnded', 'onError'].forEach(listenerName => {
    ttsManager[listenerName] = callback => {
        const eventId = `ttsStateChange__${listenerName}`;
        // 清除之前的监听
        events.handlerQueueSet.has(eventId) && events.delHandler(eventId);
        typeof callback === 'function' && events.on(eventId, callback);
    };
});

export default () => ttsManager;
