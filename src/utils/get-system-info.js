/**
 * @file utils/get-system-info.js
 * @author lijia(lijia30@baidu.com)
 * @description 获取systeminfo
 */

import {swanNative} from '../swan/container';
import {callbackResHandler} from '../invoker/funcs';
import {syncScheme, INVOKE_LIST} from '../description/desc-info';
import {schema} from './scheme-info';
/**
 * 获取 systemInfo
 *
 * @return {Object}
 */

let systemInfo = {};

let getSystemInfoSyncDesc = {
    ...syncScheme,
    invoke: INVOKE_LIST[syncScheme.invoke],
    scheme: schema,
    'name': 'getSystemInfoSync',
    'authority': 'utils',
    'path': '/getSystemInfoSync',
    'args': []
};

swanNative.add(getSystemInfoSyncDesc);

export default () => {
    try {
        systemInfo = callbackResHandler(swanNative.invoke('getSystemInfoSync', []));
    }
    catch (e) {
        systemInfo = {};
    }
    return systemInfo;
};
