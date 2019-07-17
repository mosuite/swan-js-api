/**
 * @file 下载文件
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

/* global WeakMap */
import {swanNative} from '../../container';
import {resNeedDecode} from '../../../utils/parser';
import {
    createCallback,
    createInvokePromise,
    createLevel2Promise,
    executeCallback
} from '../../../invoker/funcs';
import {events} from '../../../utils/event';

/**
 * 每个请求的进度标识
 * 用于收到进度回调时派发
 * @type {WeakMap}
 */
const progressUpdateMap = new WeakMap();

let reqId = 1;

export class DownloadTask {
    constructor() {
        this._requestState = false;
        this._reqId = `${this._module}Task__${reqId++}`;

        progressUpdateMap.set(this, `${this._reqId}__progress`);
    }

    get _module() {
        return 'downloadFile';
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

    onProgressUpdate(callback) {
        events.on(progressUpdateMap.get(this), data => {
            callback.call(this, data);
        });
    }

    _invokeBoxJs(params) {
        let self = this;
        params.onProgressUpdate = createCallback(data => {
            events.emit(progressUpdateMap.get(self), data);
        }, resNeedDecode);

        const cbPromise = createLevel2Promise(params, resNeedDecode);
        const callbackPromise = createInvokePromise(swanNative, this._module, params);

        callbackPromise.then(res => {
            this._requestId = res;
            this._requestState = true;

            events.emit(this._reqId);
        });

        executeCallback({
            promise: [callbackPromise, cbPromise],
            apiName: this._module
        }, params);
        return this;
    }
}

export const downloadFile = (params = {}) => {
    let task = new DownloadTask();
    return task._invokeBoxJs(params);
};
