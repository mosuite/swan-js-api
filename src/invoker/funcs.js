/**
 * @file invoker/funcs.js
 * @author renzhonghua@baidu.com
 * @description 通用调起逻辑的一些方法
 */

import $ from '../utils/_core';
import {global} from '../utils/global';
import {DURATION_LOG_LIST, CANCEL_CONVERT_LIST} from '../utils/constant';
import {convertNumberToString} from '../utils/filter';
import {events} from '../utils/event';
import {startTimeMap} from '../utils/ubclog';
import {jsonParse} from '../utils/parser';

/**
 * 获取二级回调函数名 getId 递增保证唯一性
 *
 * @return {string}   需要挂载的函数名
 */
export const getParamsCBName = () => `_bdbox_pjs_${$.getId()}`;

/**
 * 挂载二级回调
 *
 * @param  {Function} callback 回调函数
 * @param  {Function} parser 解析函数
 * @return {string}
 */
export const createCallback = (callback, parser) => {
    let fnName = getParamsCBName();

    global[fnName] = res => {
        let data = parser(res);
        callback && callback(data.data);
    };
    return fnName;
};

/**
 * 一级回调的处理函数
 *
 * @param  {Object} res   [description]
 * @param  {Function} thunk [description]
 * @return {Object}       [description]
 */
export const callbackResHandler = (res, thunk) => {
    res = $.isString(res) ? JSON.parse(res) : res;
    let result = {};
    if (+res.status === 0) {
        result = !thunk ? res.data || {} : thunk(res).data;
    } else {
        result.errCode = res.status;
        result.errMsg = res.message;
    }

    return result;
};



export const paramsInOrder = (jsNative, apiName, params) => {
    return jsNative.apis[jsNative.apiIndex[apiName]].args.map(arg => params[arg.name]);
};


/**
 * 创建一级 Promise 挂载给客户端的回调函数
 *
 * @param  {Object} jsNative  [description]
 * @param  {string} apiName  [description]
 * @param  {Object} params  [description]
 * @param  {Object} thunk  [description]
 * @return {Object}  Promise [description]
 */
export const createInvokePromise = (jsNative, apiName, params = {}, thunk) => {
    return new Promise(function (resolve, reject) {
        if (params.success && typeof params.success !== 'function'
            || params.fail && typeof params.fail !== 'function') {
            reject(callbackResHandler({
                status: 904,
                message: 'params type error'
            }));
            return false;
        }

        params = JSON.parse(JSON.stringify(params));

        // number => string
        params = CANCEL_CONVERT_LIST.some(item => {
            return apiName.match(item);
        }) ? params : convertNumberToString(params);

        params = Object.assign(params, {
            innerCallback(res) {
                if (+res.status === 0) {
                    resolve(callbackResHandler(res, thunk));
                } else {
                    reject(callbackResHandler(res, thunk));
                }
            }
        });
        jsNative.invoke(apiName, paramsInOrder(jsNative, apiName, params));
    });
};

/**
 * 创建二级 Promise && 挂载给客户端的回调函数
 *
 * @param  {Object} params   需要挂载二级回调的参数对象
 * @param  {Function} parser 收到客户端回调后的解析方法
 * @return {Promise}         promise
 */
export const createLevel2Promise = (params, parser) => {
    params.cb = getParamsCBName();

    return new Promise((resolve, reject) => {
        global[params.cb] = res => {
            res = parser ? parser(res) : jsonParse(res);

            if (+res.status === 0) {
                resolve(callbackResHandler(res));
            } else {
                reject(callbackResHandler(res));
            }
        };
    });
};

/**
 * 执行函数并捕获异常
 *
 * @param  {Function} fn     需要执行的函数
 * @param  {string}   errMsg 错误信息
 * @param  {Object}   params 函数执行的参数
 * @return {undefined}       undefined
 */
export const executeByTryCatch = (fn, errMsg, params) => {
    try {
        fn && fn(params);
    }
    catch (error) {
        errMsg = error.message + ';' + errMsg;
        console.error(`thirdScriptError\n${errMsg}\n${error.stack}`);
    }
};

/**
 * 执行开发者的 success/fail、complete 回调
 *
 * @param  {Object|Array} options.promise   等待端上结果的 promise 对象
 * @param  {string}       options.apiName   API 名称
 * @param  {Object}       params            开发者的参数
 * @return {undefined}
 */
export const executeCallback = ({promise, apiName}, params = {}) => {

    const ERROR_PREFIX = 'at api';
    const ERROR_SUFFIX = 'callback function';
    const ERROR_MSG = {
        success: `${ERROR_PREFIX} ${apiName} success ${ERROR_SUFFIX}`,
        fail: `${ERROR_PREFIX} ${apiName} fail ${ERROR_SUFFIX}`,
        complete: `${ERROR_PREFIX} ${apiName} complete ${ERROR_SUFFIX}`
    };

    // 每调起一次API均录入打点
    events.emit('addTimesLog', {
        apiName,
        success: 2
    });

    if ($.isArray(promise)) {
        Promise.all(promise)
        .then(function ([callbackRes, cbRes]) {
            // 时长打点
            DURATION_LOG_LIST.indexOf(apiName) !== -1 && events.emit('addDurationLog', {
                apiName,
                success: 1,
                start: startTimeMap.get(params),
                end: Date.now()
            });

            // 次数打点
            events.emit('addTimesLog', {
                apiName,
                success: 1,
                statusCode: cbRes.statusCode
            });

            executeByTryCatch(params.success, ERROR_MSG.success, cbRes);
            executeByTryCatch(params.complete, ERROR_MSG.complete, cbRes);
        }).catch(err => {
            DURATION_LOG_LIST.indexOf(apiName) !== -1 && events.emit('addDurationLog', {
                apiName,
                success: 0,
                start: startTimeMap.get(params),
                end: Date.now()
            });

            const result = $.isError(err) ? {errCode: 904, errMsg: err.message} : err;

            // errCode 202:开发者调用api参数不正确用户行为层失败，而非调用端能力失败。
            if (result.errCode && +result.errCode === 202) {
                events.emit('addTimesLog', {
                    apiName,
                    success: 1
                });
            } else {
                events.emit('addTimesLog', {
                    apiName,
                    success: 0
                });
            }
            executeByTryCatch(params.fail, ERROR_MSG.fail, result);
            executeByTryCatch(params.complete, ERROR_MSG.complete, result);
        });
    } else {
        promise
        .then(res => {
            events.emit('addTimesLog', {
                apiName,
                success: 1
            });
            executeByTryCatch(params.success, ERROR_MSG.success, res);
            executeByTryCatch(params.complete, ERROR_MSG.complete, res);
        }).catch(err => {
            const result = $.isError(err) ? {errCode: 904, errMsg: err.message} : err;

            // errCode 202:开发者调用api参数不正确用户行为层失败，而非调用端能力失败
            if (result.errCode && +result.errCode === 202) {
                events.emit('addTimesLog', {
                    apiName,
                    success: 1
                });
            } else {
                events.emit('addTimesLog', {
                    apiName,
                    success: 0
                });
            }
            executeByTryCatch(params.fail, ERROR_MSG.fail, result);
            executeByTryCatch(params.complete, ERROR_MSG.complete, result);
        });
    }
};

/**
 * 执行 fail && complete 回调
 *
 * @param  {Object} params  参数
 * @param  {string} apiName apiName
 * @param  {string} errMsg  错误信息
 * @return {undefined}
 */
export const callFailAndComplete = (params, apiName, errMsg) => {
    errMsg = `${apiName}:fail ${errMsg}`;
    let errCode = 904;
    console.error(errMsg);
    if ($.isObject(params)) {
        executeByTryCatch(params.fail, 'at api ' + apiName + ' fail callback function', {errCode, errMsg});
        executeByTryCatch(params.complete, 'at api ' + apiName + ' complete callback function', {errCode, errMsg});
    }
};
