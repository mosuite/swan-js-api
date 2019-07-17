/**
 * @file WebSocket(NA 实现)
 * @author wuxiaopan(wuxiaopan@baidu.com)
 *         xiongyang(xiongyang@baidu.com)
 * 文档请参照 http://agroup.baidu.com/swandocuments/md/article/1012404
 */
/* globals Map */

import {swanNative} from '../../container';
import {getParamsCBName, executeCallback, createInvokePromise} from '../../../invoker/funcs';
import {arrayBufferToBase64} from '../../../utils/filter';
import {base64ToArrayBuffer} from '../../../utils/parser';
import {noop} from '../../../utils/constant';
import {global} from '../../../utils/global';
import {events} from '../../../utils/event';

const listeners = ['onOpen', 'onClose', 'onError', 'onMessage'];
// 存储通过 swan.onxxx 方法传递的监听函数
const swanListeners = {};
// 存储当前所有处于 OPEN 状态的 socketTask
const socketTaskMap = new Map();
// 用于代理 swan.sendSocketMessage 等操作的 socketTask
let socketTaskInstance;

class SocketTask {
    constructor() {
        this.__handlers = {};

        this.CONNECTING = 0;
        this.OPEN = 1;
        this.CLOSING = 2;
        this.CLOSED = 3;
        this.readyState = this.CONNECTING;

        listeners.forEach(listenerName => {
            this.__handlers[listenerName] = [];
        });

        // readyState 状态管理
        this.__handlers.onOpen.push(() => (this.readyState = this.OPEN));
        this.__handlers.onError.push(() => (this.readyState = this.CLOSED));
        this.__handlers.onClose.push(() => (this.readyState = this.CLOSED));
    }

    send(opt = {}) {
        if (this.readyState !== this.OPEN) {
            opt.fail && opt.fail({
                errMsg: 'SocketTask.readyState is not OPEN'
            });
            return;
        }
        opt.taskID = this.socketTaskId + '';
        if (typeof opt.data === 'string') {
            opt.dataType = 'string';
        }
        else if (Object.prototype.toString.call(opt.data) === '[object ArrayBuffer]') {
            opt.dataType = 'arrayBuffer';
            opt.data = arrayBufferToBase64(opt.data);
        }

        let callbackPromise = createInvokePromise(swanNative, 'sendSocketMessage', opt);

        executeCallback({
            promise: callbackPromise,
            apiName: 'sendSocketMessage'
        }, opt);
    }

    close(opt = {}) {
        opt.taskID = this.socketTaskId;

        let callbackPromise = createInvokePromise(swanNative, 'closeSocket', opt).then(res => {
            socketTaskMap.delete(opt.taskID);
        });

        executeCallback({
            promise: callbackPromise,
            apiName: 'closeSocket'
        }, opt);
    }
}

listeners.forEach(listenerName => {
    SocketTask.prototype[listenerName] = function (callback) {
        typeof callback === 'function' && this.__handlers[listenerName].push(callback);
    };
    swanListeners[listenerName] = noop;
});

/**
 * connectSocket
 * 连接 socket
 *
 * @param  {Object} opt {url...}
 * @return {Object}     socketTask
 */
export function connectSocket(opt = {}) {
    opt.cb = {};

    // 每调起一次API均录入打点
    events.emit('addTimesLog', {
        apiName: 'connectSocket',
        success: 2
    });

    let socketTask = new SocketTask();

    let cbName;
    listeners.forEach(listenerName => {
        cbName = getParamsCBName();
        global[cbName] = function (res) {
            let result;
            res = JSON.parse(res);
            if (+res.status === 0) {
                result = res.data;
                if (listenerName === 'onMessage'
                    && result.dataType === 'arrayBuffer') {
                    result.data = base64ToArrayBuffer(res.data.data);
                }
            }
            socketTask.__handlers[listenerName].forEach(handlerName => {
                handlerName(result);
            });
            // 触发通过 swan.onxxx 增加的监听
            if (socketTask === socketTaskInstance) {
                swanListeners[listenerName](result);
            }
        };
        opt.cb[listenerName] = cbName;
    });

    createInvokePromise(swanNative, 'connectSocket', opt)
    .then(res => {
        let task = res.task;
        if (task) {
            events.emit('addTimesLog', {
                apiName: 'connectSocket',
                success: 1
            });
            socketTask.socketTaskId = task.id;

            socketTaskMap.set(task.id, socketTask);

            opt.success && opt.success({
                socketTaskId: task.id
            });
        }
        else {
            events.emit('addTimesLog', {
                apiName: 'connectSocket',
                success: 0
            });
            socketTask.readyState = socketTask.CLOSED;
            opt.fail && opt.fail(res);
        }
    }).catch(function (err) {
        socketTask.readyState = socketTask.CLOSED;
        events.emit('addTimesLog', {
            apiName: 'connectSocket',
            success: 0
        });
        opt.fail && opt.fail(err);
    }).then(opt.complete);


    if (!socketTaskInstance || socketTaskInstance.readyState === socketTaskInstance.CLOSED) {
        socketTaskInstance = socketTask;
    }

    return socketTask;
}

/**
 * 监听连接打开事件
 *
 * @param  {Function} callback 回调函数
 * @return {undefined}         undefined
 */
export function onSocketOpen(callback) {
    swanListeners.onOpen = callback;
}

/**
 * 监听错误事件
 *
 * @param  {Function} callback 回调函数
 * @return {undefined}         undefined
 */
export function onSocketError(callback) {
    swanListeners.onError = callback;
}

/**
 * 向服务器发送数据
 *
 * @param  {Object} params {data}
 * @return {undefined}     undefined
 */
export function sendSocketMessage(params) {
    socketTaskInstance.send(params);
}

/**
 * 监听消息事件
 *
 * @param  {Function} callback 回调函数
 * @return {undefined}         undefined
 */
export function onSocketMessage(callback) {
    swanListeners.onMessage = callback;
}

/**
 * 关闭所有 socket 连接
 *
 * @param  {Object} params {code, reason}
 * @return {undefined}      undefined
 */
export function closeSocket(params) {
    // todo: success/fail 只执行一次

    socketTaskMap.forEach(item => {
        item.close(params);
    });
}

/**
 * 监听连接关闭事件
 *
 * @param  {Function} callback 回调函数
 * @return {undefined}         undefined
 */
export function onSocketClose(callback) {
    swanListeners.onClose = callback;
}
