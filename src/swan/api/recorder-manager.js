/**
 * @file api/recorder-manager.js
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

import {swanNative} from '../container';
import {createInvokePromise, createCallback, executeCallback} from '../../invoker/funcs';
import {events} from '../../utils/event';
import {jsonParse} from '../../utils/parser';

/**
 * 录音相关的端能力调用
 *
 * @param  {string} operationType 操作类型
 * @param  {Object} data          调用参数
 */
function nativeOperate(operationType, data) {
    createInvokePromise(swanNative, `recorder.${operationType}`, {});
}

/**
 * 监听方法列表
 *
 * @type {Array}
 */
const listenerList = ['onStart', 'onPause', 'onStop', 'onError'];

/**
 * 全局唯一的录音管理器
 *
 * @type {Object}
 */
const recorderManager = {

    /**
     * 开始录音
     *
     * @param  {Object} params 配置参数
     * @return {undefined}
     */
    start(params = {}) {
        params.cb = listenerList.reduce((cb, listenerName) => {
            cb[listenerName] = createCallback(res => {
                events.handlerQueueSet.get(`recorderStateChange__${listenerName}`).queue
                .forEach(item => {
                    item.handler.call(recorderManager, res);
                });
            }, jsonParse);
            return cb;
        }, {});

        executeCallback({
            promise: createInvokePromise(swanNative, 'recorder.start', params),
            apiName: 'recorder.start'
        }, params);
    },

    pause() {
        nativeOperate('pause');
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
listenerList.forEach(listenerName => {
    recorderManager[listenerName] = callback => {
        const eventId = `recorderStateChange__${listenerName}`;
        // 清除之前的监听
        events.handlerQueueSet.has(eventId) && events.delHandler(eventId);
        typeof callback === 'function' && events.onMessage(eventId, callback);
    };
});

export default () => recorderManager;
