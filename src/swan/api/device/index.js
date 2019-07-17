/**
 * @file 设备相关接口
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

import {swanNative} from '../../container';
import {events} from '../../../utils/event';
import {createCallback, executeCallback, createInvokePromise} from '../../../invoker/funcs';
import {jsonParse, resNeedDecode} from '../../../utils/parser';

/**
 * 监听加速度数据事件
 *
 * @param  {Function} callback 回调函数
 */
export function onAccelerometerChange(callback) {
    callback && events.on('onAccelerometerChange', callback);
    startAccelerometer();
}

/**
 * 开始监听加速度数据
 *
 * @param  {Object} params 参数
 * @param  {string} params.interval 监听加速度数据回调函数的执行频率
 */
export function startAccelerometer(params = {}) {
    params.cb = createCallback(data => {
        events.emit('onAccelerometerChange', data);
    }, jsonParse);

    executeCallback({
        apiName: 'startAccelerometer',
        promise: createInvokePromise(swanNative, 'startAccelerometer', params)
    }, params);
}

/**
 * 监听罗盘数据变化事件
 *
 * @param  {Function} callback 回调函数
 */
export function onCompassChange(callback) {
    callback && events.on('onCompassChange', callback);
    startCompass();
}

/**
 * 开始监听罗盘数据
 *
 * @param  {Object} params 参数
 */
export function startCompass(params = {}) {
    params.cb = createCallback(data => {
        events.emit('onCompassChange', data);
    }, jsonParse);

    executeCallback({
        apiName: 'startCompass',
        promise: createInvokePromise(swanNative, 'startCompass', params)
    }, params);
}


// 监听状态存储
const listenState = {};

/**
 * 监听内存不足告警事件
 *
 * @param  {Function} callback 回调函数
 */
export function onMemoryWarning(callback) {
    const apiName = 'onMemoryWarning';

    callback && events.on(apiName, callback);

    if (!listenState[apiName]) {
        listenState[apiName] = true;
        const cb = createCallback(data => {
            events.emit(apiName, data);
        }, jsonParse);

        let promise = createInvokePromise(swanNative, apiName, {cb})
        .then(() => {
            listenState[apiName] = true;
        });

        executeCallback({
            apiName,
            promise
        });
    }
}

/**
 * 监听网络状态变化事件
 *
 * @param  {Function} callback 回调函数
 */
export function onNetworkStatusChange(callback) {
    const apiName = 'onNetworkStatusChange';

    callback && events.on(apiName, callback);

    if (!listenState[apiName]) {
        const cb = createCallback(data => {
            events.emit(apiName, data);
        }, resNeedDecode);

        let promise = createInvokePromise(swanNative, apiName, {cb})
        .then(() => {
            listenState[apiName] = true;
        });

        executeCallback({
            apiName,
            promise
        });
    }
}

/**
 * 监听设备方向变化事件
 *
 * @param  {Function} callback 回调函数
 */
export function onDeviceMotionChange(callback) {
    callback && events.on('onDeviceMotionChange', callback);
    startDeviceMotionListening();
}

/**
 * 开始监听设备方向的变化
 *
 * @param  {Object} params 参数
 * @param  {string} params.interval 监听设备方向的变化回调函数的执行频率
 */
export function startDeviceMotionListening(params = {}) {
    params.cb = createCallback(data => {
        events.emit('onDeviceMotionChange', data);
    }, jsonParse);

    executeCallback({
        apiName: 'startDeviceMotionListening',
        promise: createInvokePromise(swanNative, 'startDeviceMotionListening', params)
    }, params);
}