/**
 * @file 发起网络请求
 * @author wuxiaopan@baidu.com
 */

import {swanNative} from '../../container';
import $ from '../../../utils/_core';
import {
    createInvokePromise,
    createLevel2Promise,
    executeCallback,
    callFailAndComplete
} from '../../../invoker/funcs';
import {
    getParamType,
    validateUrl,
    convertObjectValueToString
} from '../../../utils/common';
import {resNeedDecode, base64ToArrayBuffer} from '../../../utils/parser';
import {globalNative} from '../../../utils/global';
import {events} from '../../../utils/event';

let reqId = 1;

class RequestTask {
    constructor() {
        this._requestState = false;
        this._reqId = `requestTask__${reqId++}`;
    }

    abort() {
        const cancelRequest = () => {
            executeCallback({
                apiName: 'cancelRequest',
                promise: createInvokePromise(swanNative, 'request.cancel', this._requestId)
            });
        };

        // 客户端一级回调返回前调用 abort 时的处理
        if (!this._requestState) {
            events.once(this._reqId, event => {
                cancelRequest();
            });
        }
        else {
            cancelRequest();
        }
    }
}

function toArrayBuffer(result, ping) {
    result = resNeedDecode(result, ping);
    if ($.isObject(result.data.data)) {
        result.data.data = globalNative.btoa(result.data.data);
    }
    result.data.data = base64ToArrayBuffer(result.data.data);
    return result;
}

export const request = (params = {}) => {
    if (!validateUrl(params.url)) {
        callFailAndComplete(params, 'request', `parameter error: invalid url "${params.url}"`);
        return;
    }
    let task = new RequestTask();

    // header 的处理
    const headerType = getParamType(params.header);
    if (headerType !== 'Undefined' && headerType !== 'Object') {
        console.warn('swan.request: header must be an object');
        params.header = {};
    }
    params.header = convertObjectValueToString(params.header);
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
    // const parser = responseType && responseType.toLowerCase() === 'arraybuffer' ? toArrayBuffer : resNeedDecode;
    let ping = params.ping;
    const parser = res=> {
        return responseType && responseType.toLowerCase() === 'arraybuffer'
            ? toArrayBuffer(res, ping)
            : resNeedDecode(res, ping);
    };
    const cbPromise = createLevel2Promise(params, parser);

    // 发起请求
    const callbackPromise = createInvokePromise(swanNative, 'request', params).then(res => {
        task._requestId = res;
        task._requestState = true;
        events.emit(task._reqId);
    });

    executeCallback({
        promise: [callbackPromise, cbPromise],
        apiName: 'request'
    }, params);

    return task;
};
