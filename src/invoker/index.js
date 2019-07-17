/**
 * @file invoker/index.js
 * @author renzhonghua@baidu.com
 * @description 通用调起逻辑
 */

import $ from '../utils/_core';
import {
    createInvokePromise,
    executeCallback,
    callFailAndComplete,
    createLevel2Promise,
    callbackResHandler,
    paramsInOrder
} from './funcs';
import {convertNumberToString} from '../utils/filter';
import {events} from '../utils/event';
import {startTimeMap} from '../utils/ubclog';
import {DURATION_LOG_LIST} from '../utils/constant';
import {global} from '../utils/global';
import {supportLevel2Callback} from '../utils/common';

/**
 * 调起 jsnative
 * 发送 Schema 到客户端
 *
 * @param  {string} jsNative  jsNative
 * @param  {string} apiName  map: key
 * @param  {Function|Object} apiConfig map: item
 * @param  {Object|string} apiConfig.specialCheck  一些特殊的校验逻辑
 * @param  {Function} apiConfig.filter  处理开发者的参数
 * @param  {Array} apiConfig.moreParamsKey  调起的其它参数
 * @param  {Function} apiConfig.paramsCBName  二级回调
 * @param  {Function} apiConfig.proxyHandler  不走通用调起的 API, 调用定义的 proxyHandler 函数
 * @param  {Function} apiConfig.parser  处理客户端返回的数据
 * @param  {Function} apiConfig.thunk  处理客户端一级回调返回的数据
 * @param  {Function} apiConfig.isSync 同步方法的标记
 * @param  {...<Object|string>} args  开发者的参数
 * @return {Object|undefined}  同步方法: Object 异步方法: undefined
 */
export const invokeMaker = (jsNative, apiName, apiConfig, supportPromise, ...args) => {

    if ($.isFunction(apiConfig)) {
        return apiConfig(...args);
    }
    let {
        specialCheck,
        filter,
        moreParamsKey,
        paramsCBName,
        proxyHandler,
        parser,
        thunk,
        isSync
    } = apiConfig;

    // 参数类型校验
    let errMsg = '';
    if (specialCheck) {
        errMsg = specialCheck(args[0]);
        if (errMsg) {
            callFailAndComplete(args[0], apiName, `parameter error: ${errMsg}`);
            return;
        }
    }

    // 参数处理
    let params = filter ? filter(...args) : args[0];
    if (params && params.callback && !params.cb) {
        supportLevel2Callback(params);
    }

    if (moreParamsKey) {
        let allParams = {};
        moreParamsKey.forEach((key, index) => {
            allParams[key] = args[index];
        });
        params = allParams;
    }

    // 处理有上下文逻辑的api
    if (proxyHandler) {
        return proxyHandler(params);
    }

    // 处理单一型api
    let invokeResult = '';
    // 同步方法
    if (apiName.match('Sync') || isSync) {
        // 每调起一次API均录入打点
        events.emit('addTimesLog', {
            apiName,
            success: 2
        });
        try {
            params = paramsInOrder(jsNative, apiName, convertNumberToString(params));
            invokeResult = jsNative.invoke(apiName, params);

            events.emit('addTimesLog', {
                apiName,
                success: 1
            });

            return callbackResHandler(invokeResult, thunk);
        }
        catch (error) {
            events.emit('addTimesLog', {
                apiName,
                success: 0
            });
            console.error(error.message);
        }
    }

    // 二级 promise
    let cbPromise;
    if (paramsCBName) {
        cbPromise = createLevel2Promise(params, parser);
    }

    const callbacks = args[0];

    DURATION_LOG_LIST.indexOf(apiName) !== -1 && startTimeMap.set(callbacks, Date.now());

    // 一级 promise
    invokeResult = createInvokePromise(jsNative, apiName, params, thunk);

    // boxjs上的api，直接返回promise
    if (supportPromise) {
        return invokeResult;
    }

    // swan上的api，继续执行回调
    const promise = paramsCBName ? [invokeResult, cbPromise] : invokeResult;
    executeCallback({
        apiName,
        promise
    }, callbacks);
};
