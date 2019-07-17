/**
 * @file utils/global.js
 * @author lijia30@baidu.com
 * @description 判断当前代码运行环境 返回运行全局变量
 */
/* global swanGlobal */
/* global _naSwan */

export const hasNoGlobal = typeof swanGlobal === 'undefined';

export const global = typeof swanGlobal === 'undefined' ? window : swanGlobal;

export const globalNative = typeof swanGlobal === 'undefined' ? window : _naSwan;