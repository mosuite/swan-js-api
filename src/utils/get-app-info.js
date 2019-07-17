/**
 * @file utils/get-app-info.js
 * @author renzhonghua@baidu.com
 * @description 缓存appinfo
 */

import $ from './_core';
import {boxjsNative} from '../boxjs/container';
import {callbackResHandler} from '../invoker/funcs';
import {syncScheme, INVOKE_LIST} from '../description/desc-info';
import {schema} from './scheme-info';

/**
 * 获取 appInfo
 *
 * @return {Object} {appid: '', cuid: '', ...}
 */

let appInfo = {};

let getAppInfoSyncDesc = {
    ...syncScheme,
    invoke: INVOKE_LIST[syncScheme.invoke],
    scheme: schema,
    'name': 'getAppInfoSync',
    'authority': 'swanAPI',
    'path': '/getAppInfoSync',
    'args': []
};

boxjsNative.add(getAppInfoSyncDesc);

export default () => {
    if (!appInfo.appid) {
        try {
            appInfo = callbackResHandler(boxjsNative.invoke('getAppInfoSync', []));
        }
        catch (e) {
            appInfo = {};
        }
    }
    return appInfo;
};
