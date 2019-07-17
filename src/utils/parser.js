/**
 * @file utils/parser.js
 * @author wuxiaopan@baidu.com
 * @description 将客户端返回的数据处理后，传给开发者
 */

import {SCOPE_MAP} from './constant';
import {isAndroid} from '../platform';
import $ from './_core';
import {globalNative} from './global';

/**
 * 解析 master 和 slave 通信的 message 事件的参数
 *
 * @param  {string} message event.message
 * @return {Object} {type: 'xxx'...}
 */
export function parseMessage(message) {
    if ($.isObject(message)) {
        return message;
    }
    try {
        if (isAndroid()) {
            message = JSON.parse(message);
        }
        else {
            message = JSON.parse(unescape(message));
        }
    }
    catch (err) {
        console.warn('message parse fail', err);
    }
    return message;
}

/**
 * AI 接口返回值处理
 * 解析 body => data
 *
 * @param  {Object} res 客户端返回值
 * @return {Object} {statusCode, header, data}
 */
export function aiParser(res) {
    const {statusCode, header} = res.data;
    const data = JSON.parse(res.data.body);
    return {
        statusCode,
        header,
        data
    };
}

/**
 * JSON String => Object
 *
 * @param  {string} res 源字符串
 * @return {Object}     解析结果: {status, message, data}
 */
export function jsonParse(res) {
    let data = {};
    try {
        data = JSON.parse(res);
        data.status = +data.status;
    } catch (e) {
        data = res;
    }
    return data;
}

/**
 * 解析字符串
 * 会对 data 字段做 decode
 *
 * @param  {string} res 源字符串
 * @return {Object}     解析结果: {status, message, data}
 */
export function resNeedDecode(res, ping) {
    let result = jsonParse(res);
    let data = result.data || {};

    if (result.status === 0
        && result.data
        && typeof result.data === 'string') {
        data = decodeURIComponent(result.data);
    }

    try {
        result.data = JSON.parse(data);
    } catch (e) {
        result.data = data;
    }
    let pingResult = {
        tips: 'this is a ping request',
        'Set-Cookie': result.data.header && result.data.header['Set-Cookie'] || ''
    };
    if (ping) {
        result.data = pingResult;
    }

    return result;
}

/**
 * base64解码
 *
 * @param  {string} str 解码前的字符串
 * @return {string}     解码后的字符串
 */
export function base64Decode(str) {
    try {
        str = decodeURIComponent(escape(globalNative.atob(str)));
    } catch (e) {
        console.warn('base64 decode fail', e);
    }
    return str;
}

/**
 * 解析字符串
 * 会对 data 字段做 base64 解码
 * 目前只有支付接口使用
 *
 * @param  {Object} res 源字符串
 * @return {Object}     {status, message, data}
 */
export function base64Parser(res) {
    res = jsonParse(res);

    res.data && (res.data = base64Decode(res.data));

    return resNeedDecode(res);
}

/**
 * 将 base64 转换为 ArrayBuffter
 *
 * @param  {string}               base64 字符串
 * @return {ArrayBuffter} buffer  ArrayBuffter 数据
 */
export function base64ToArrayBuffer(base64) {
    let binaryString = globalNative.atob(base64);
    let len = binaryString.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

/**
 * openSetting、getSetting 的返回值处理函数
 *
 * @param  {string} res  客户端返回的字符串
 * @return {Object} {authSetting: {'scope.userInfo': true}}
 */
export function settingThunkHandle(res) {
    let result = jsonParse(res);

    if (result.status !== 0) {
        return result;
    }

    let authSetting = {};
    for (let scope in SCOPE_MAP) {
        let mapScope = SCOPE_MAP[scope];
        (result.data[mapScope] === '1' || result.data[mapScope] === true) && (authSetting[scope] = true);
        (result.data[mapScope] === '0' || result.data[mapScope] === false) && (authSetting[scope] = false);
    }

    result.data = {
        authSetting
    };
    return result;
}

export function getStorageAllThunkHandler(res) {
    let result = {};
    try {
        result = JSON.parse(res);
    } catch (e) {
        result = res;
    }
    if (+result.status === 0) {
        let k = [];
        for (let i in result.data.keys) {
            let item = result.data.keys[i];
            try {
                item = JSON.parse(decodeURIComponent(item));
            } catch (e) {
                item = decodeURIComponent(item);
            }
            k.push(item);
        }
        result.data.keys = k;
    }
    return result;
}

/**
 * 将 base64 转换为 uint8Clampedarray
 *
 * @param  {string}               base64 字符串
 * @return {uint8Clampedarray} uint8  uint8Clampedarray 数据
 */
export function base64ToUint8(base64) {
    let uint8String = globalNative.atob(base64);
    let len = uint8String.length;
    let bytes = new Uint8ClampedArray(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = uint8String.charCodeAt(i);
    }
    return bytes;
}
