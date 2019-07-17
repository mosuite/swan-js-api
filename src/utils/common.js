/**
 * @file utils/common.js
 * @author renzhonghua@baidu.com
 * @description 公共方法|变量
 */
/* globals masterManager */

import $ from './_core';
import {QueueSet} from './events-emitter';
import {schema} from './scheme-info';
import {asyncScheme, syncScheme, INVOKE_LIST} from '../description/desc-info';
import {global} from './global';
import {HOST_NAME_LIST} from './constant';


export const hostName =  HOST_NAME_LIST[$.getHost()];





/**
 * 存储开发者监听函数的对象
 * 用法参照 http://icode.baidu.com/repos/baidu/hpbfe/events-emitter/blob/master:src/queue-set.js
 * @type {QueueSet}
 */
export const handlerSet = new QueueSet();

/**
 * 校验 url 是否合法
 *
 * @param  {string} url     url
 * @param  {string} urlType 校验类型(http or websocket)
 * @return {boolean}
 */
export function validateUrl(url, urlType = 'http') {
    return urlType === 'http'
        ? /^(http|https):\/\/.*/i.test(url)
        : 'websocket' === urlType
            ? /^(ws|wss):\/\/.*/i.test(url)
            : false;
}

/**
 * 校验 url 是否是百度域
 *
 * @param  {string} url url
 * @return {boolean}
 */
export function checkDomain(url) {
    let urlArr = url.split('/');
    let domainArr = urlArr[2].split('?');
    let reg = /^.+(\.baidu\.com)$/;
    return reg.test(domainArr[0]);
}

/**
 * 把对象值转为字符串类型
 *
 * @param  {Object} params 需要处理的对象
 * @return {Object}        处理后的对象
 */
export function convertObjectValueToString(params = {}) {
    return Object.keys(params).reduce((result, key) => {
        if (typeof params[key] === 'string') {
            result[key] = params[key];
        }
        else if (typeof params[key] === 'number') {
            result[key] = params[key] + '';
        }
        else {
            result[key] = Object.prototype.toString.apply(params[key]);
        }
        return result;
    }, {});
}

/**
 * 获取参数类型
 *
 * @param  {Object|Array} param 参数
 * @return {string}             参数类型: Object|Array|Undefined...
 */
export const getParamType = param => Object.prototype.toString.call(param).split(' ')[1].split(']')[0];

/**
 * 获取当前 slave 的 path && query
 *
 * @return {string} accessUri
 */
export function getCurrentAccessUri() {
    let accessUri;
    try {
        accessUri = masterManager.navigator.history.getTopSlaves()[0].getCurrentChildren().accessUri;
    } catch (e) {
        accessUri = '';
    }
    return accessUri;
}

/**
 * 获取顶层 slaveId
 *
 * @return {string} slaveId
 */
export function getSlaveId() {
    let slaveId;
    try {
        slaveId = masterManager.navigator.history.getTopSlaves()[0].getSlaveId();
    } catch (e) {
        slaveId = 1;
    }
    return slaveId;
}

/**
 * 将相对路径转为相对于小程序包的绝对路径
 *
 * @param  {Function} fn     需要执行的函数
 * @param  {string}   path   开发者传入的相对路径
 * @return {string}          相对于小程序包的绝对路径
 */

export function getProgramPath(path) {
    // 获取小程序具体页面地址
    let programPath = masterManager.navigator.history.getTopSlaves()[0].getFrontUri();
    const pageRoute = /^\//.test(path) ? '' : programPath.replace(/[^/]*$/g, '');
    const segs = (pageRoute + '/' + path).split('/');
    let pathResolver = segs.reduce(function (resStack, seg) {
        if (seg !== '' && seg !== '.') {
            if (seg === '..') {
                resStack.pop();
            }
            else {
                resStack.push(seg);
            }
        }
        return resStack;
    }, []);
    return pathResolver.join('/');
}

export function argCombine(syncList, asyncList) {
    let syncListCombined = syncList.map(item => {
        item = {
            scheme: schema,
            ...syncScheme,
            invoke: INVOKE_LIST[syncScheme.invoke],
            ...item
        };
        if (item.path.substring(0, 1) !== '/') {
            item.path = '/' + item.path;
        }
        return item;
    });

    let asyncListCombined = asyncList.map(item => {
        item = {
            scheme: schema,
            ...asyncScheme,
            invoke: INVOKE_LIST[asyncScheme.invoke],
            ...item
        };

        if (item.path.substring(0, 1) !== '/') {
            item.path = '/' + item.path;
        }
        item.args = item.args || [];
        item.args = item.args.concat({name: 'innerCallback', value: 'function'});

        return item;
    });

    return syncListCombined.concat(asyncListCombined);
}

export function supportLevel2Callback(data) {
    if (data.cb) {
        return data;
    }
    if ($.isFunction(data.callback)) {
        var funcName = '_bdbox_pjs_' + $.getId();
        data.cb = funcName;
        global[funcName] = function (...args) {
            data.callback.apply(global, args);
        };
    } else if ($.isString(data.callback)) {
        data.cb = data.callback;
        delete data.callback;
    }

    return data;
}

export function getMap(arr, map) {
    let result = {};
    arr.forEach(api => {
        if (map[api]) {
            result[api] = map[api];
        }
    });
    return result;
}

export function getDescription(arr, description) {
    let result = [];
    arr.forEach(api => {
        description.forEach(item => {
            if (item.name === api) {
                result.push(item);
            }
        });
    });
    return result;
}

// 小游戏需要
let eventEmitter;

/**
 * 存储 eventEmitter
 *
 * @param  {[type]} options.emitter [description]
 *
 */
export function setEventEmitterHandle(emitter) {
    eventEmitter = emitter;
}

/**
 * 获取 eventEmitter
 *
 * @return {[type]}  [description]
 *
 */
export function getEventEmitterHandle() {
    return eventEmitter;
}

/**
 * 判断是否支持老桥
 *
 * @return {boolean} 是否支持
 *
 */
export function isSupportIosMessageHandlers() {
    return $.isIOS && window.webkit && window.webkit.messageHandlers;
}

