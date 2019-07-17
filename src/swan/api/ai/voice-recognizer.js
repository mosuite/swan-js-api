/**
 * @file ai/voice-recognizer.js
 * @author wulinfei(wulinfei@baidu.com)
 */

import {swanNative} from '../../container';
import {events} from '../../../utils/event';
import {createCallback, executeCallback, createInvokePromise} from '../../../invoker/funcs';
import {PID_MAP} from '../../../utils/constant';
import {jsonParse} from '../../../utils/parser';

/**
 * 监听方法列表
 *
 * @type {Array}
 */
const listenerList = ['onStart', 'onRecognize', 'onFinish', 'onError'];

/**
 * 语音识别相关端能力调用
 *
 * @param  {string} operationType 操作类型
 * @param  {Object} data          调用参数
 * @return {Promise}
 */
function nativeOperate(operationType, data = {}) {
    return createInvokePromise(swanNative, `voiceRecognizer.${operationType}`, data);
}

/**
 * 全局唯一的语音识别器
 *
 * @type {Object}
 */
const voiceRecognizer = {
    /**
     * 开始语音识别
     *
     * @param  {Object} params 参数
     * @return {undefined}
     */
    start(params = {}) {
        params.vad = params.mode || 'dnn';
        delete params.mode;

        params.isLongSpeech = params.longSpeech || false;
        delete params.longSpeech;

        params.context = params.context ? params.context : 'input';
        params.pid = PID_MAP[params.context];
        delete params.context;

        params.voiceServerPath = 'https://vop.baidu.com/v2';

        params.cb = listenerList.reduce((cb, listenerName) => {
            cb[listenerName] = createCallback(res => {
                events.handlerQueueSet.get(`voiceRecognizerStateChange__${listenerName}`).queue
                .forEach(item => {
                    item.handler.call(voiceRecognizer, res);
                });
            }, jsonParse);
            return cb;
        }, {});

        executeCallback({
            promise: nativeOperate('start', params),
            apiName: 'voiceRecognizer.start'
        }, params);
    },

    /**
     * 取消语音识别
     *
     * @return {undefined}
     */
    cancel() {
        nativeOperate('cancel');
    },

    /**
     * 停止语音识别
     *
     * @return {undefined}
     */
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
    voiceRecognizer[listenerName] = callback => {
        const eventId = `voiceRecognizerStateChange__${listenerName}`;
        // 清除之前的监听
        events.handlerQueueSet.has(eventId) && events.delHandler(eventId);
        typeof callback === 'function' && events.onMessage(eventId, callback);
    };
});

export default () => voiceRecognizer;
