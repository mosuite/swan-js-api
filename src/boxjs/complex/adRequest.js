/**
 * @file 发起网络请求
 * @author wuxiaopan@baidu.com
 */

import {boxjsNative} from '../container';
import $ from '../../utils/_core';
import {
    createInvokePromise,
    createLevel2Promise,
    executeCallback,
    callFailAndComplete
} from '../../invoker/funcs';
import {
    getParamType,
    validateUrl,
    convertObjectValueToString,
    checkDomain
} from '../../utils/common';
import {resNeedDecode, base64ToArrayBuffer} from '../../utils/parser';
import {globalNative} from '../../utils/global';
import {events} from '../../utils/event';

let reqId = 1;

class AdRequestTask {
    constructor() {
        this._adRequestState = false;
        this._adReqId = `adRequestTask__${reqId++}`;
    }

    abort() {
        const cancelRequest = () => {
            executeCallback({
                apiName: 'cancelRequest',
                promise: createInvokePromise(boxjsNative, 'cancelRequest', this._adRequestId)
            });
        };

        // 客户端一级回调返回前调用 abort 时的处理
        if (!this._adRequestState) {
            events.once(this._adReqId, event => {
                cancelRequest();
            });
        }
        else {
            cancelRequest();
        }
    }
}

function toArrayBuffer(result) {
    result = resNeedDecode(result);
    if ($.isObject(result.data.data)) {
        result.data.data = globalNative.btoa(result.data.data);
    }
    result.data.data = base64ToArrayBuffer(result.data.data);
    return result;
}

export const adRequest = (params = {}) => {
    if (!validateUrl(params.url) || !checkDomain(params.url)) {
        callFailAndComplete(params, 'AdRequest', `parameter error: invalid url "${params.url}"`);
        return;
    }
    let task = new AdRequestTask();

    // header 的处理
    const headerType = getParamType(params.header);
    if (headerType !== 'Undefined' && headerType !== 'Object') {
        console.warn('boxjs.adRequest: header must be an object');
        params.header = {};
    }
    params.header = convertObjectValueToString(params.header);
    console.log(params.header);
    // content-type 处理
    params.header = Object.keys(params.header).reduce((result, key) => {
        if (key.toLowerCase() === 'content-type') {
            result['content-type'] = params.header[key];
        }
        else {
            result[key] = params.header[key];
        }
        return result;
    }, {});

    // method 处理
    if (getParamType(params.method) === 'String') {
        params.method = params.method.toUpperCase();
    }
    else {
        params.method = 'GET';
    }

    // responseType 处理
    const responseType = params.responseType;
    const parser = responseType && responseType.toLowerCase() === 'arraybuffer' ? toArrayBuffer : resNeedDecode;
    const cbPromise = createLevel2Promise(params, parser);

    // 发起请求
    const callbackPromise = createInvokePromise(boxjsNative, 'adRequest', params).then(res => {
        task._adRequestId = res;
        task._adRequestState = true;
        events.emit(task._adReqId);
    });

    executeCallback({
        promise: [callbackPromise, cbPromise],
        apiName: 'adRequest'
    }, params);

    return task;
};
