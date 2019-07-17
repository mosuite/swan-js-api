/**
 * @file utils/andr-setdata.js
 * @author haoran@baidu.com
 * @description 对Android的数据传输逻辑进行封装
 */

 /* global _naSwan swanGlobal masterManager */
import {isAndroid} from '../platform';
import {globalNative} from './global';
import $ from './_core';

const isV8TransportWV = false;

const isV8TransportV8 = false;

/**
 * Android端setdata方法抽象，包含对新内核方法和旧jsbinding方法兼容
 *
 * @param {string} webviewId -- 发送消息的webviewId
 * @param {Object} message -- 发送消息的对象
 * @return {string} {status: xxx, message: xxx}
 *
 */
export function andrSetData(webviewId, message) {
    return globalNative.Bdbox_aiapps_jsbridge.setData(webviewId, JSON.stringify(message));
}

/**
 * Android端bindMessage方法抽象，包含新内核方法
 *
 * @param {callback} msgCb -- 消息接收绑定方法回调
 * @return {boolean}  是否使用内核bindId方法
 *
 */
export function andrBindMessage(bindId, msgCb) {
    return false;
}
