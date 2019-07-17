/**
 * @file src/swanjs/commonFunc.js
 * @author lijia30@baidu.com
 * @description common function
 */
import $ from '../utils/_core';
import {global, globalNative, hasNoGlobal} from '../utils/global';
import {executeByTryCatch, getParamsCBName, createInvokePromise, executeCallback} from '../invoker/funcs';
import {swanjsNative} from './container';

export const postMessage = message => {
    let data = {};
    let webviewid = 'master';
    if ($.isAndroid) {
        return globalNative.Bdbox_aiapps_jsbridge.setData(webviewid, JSON.stringify(message));
    } else {
        data = {
            webviewid: webviewid,
            message: JSON.stringify(message)
        };
    }
    swanjsNative.invoke('postMessage', data);
};

export const callShareFunc = (params, mediaType) => {
    if (mediaType) {
        params.mediaType = mediaType;
    }

    const message = {
        type: 'webviewOpenShare',
        params: $.isAndroid ? params : escape(JSON.stringify(params))
    };
    postMessage(message);
};
