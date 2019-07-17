/**
 * @file src/utils/scheme-info.js
 * @author renzhonghua@baidu.com
 * @description 端能力协议信息
 */

import {hasNoGlobal} from './global';
import $ from './_core';
// 获取宿主协议头
/* global _naSwan*/
let ENV_VARIABLES = {};


try {
    ENV_VARIABLES = Object.assign({}, JSON.parse(_naSwan.getEnvVariables()));
} catch (e) {
    ENV_VARIABLES.scheme = 'baiduboxapp';
}

export const schema = ENV_VARIABLES.scheme;



/**
 * 获取当前环境信息
 */

export const getEnvInfo = () => {
    let context = '';
    if (!hasNoGlobal && $.isIOS) {
        context = 'ios.jsc';
    } else if (!hasNoGlobal && !$.isIOS) {
        context = 'android.v8';
    } else if ($.isIOS) {
        context = 'ios.webview';
    } else {
        context = 'android.webview';
    }
    return context;
};




