/**
 * @file 下载文件
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

/* global WeakMap */
import {swanNative} from '../container';
import {jsonParse} from '../../utils/parser';
import {
    createCallback,
    createInvokePromise,
    createLevel2Promise,
    executeCallback
} from '../../invoker/funcs';
import {events} from '../../utils/event';

/**
 * 每个请求的进度标识
 * 用于收到进度回调时派发
 * @type {WeakMap}
 */
const progressUpdateMap = new WeakMap();

let reqId = 1;

export class AppInstallManager {
    constructor() {
        this._reqId = `DownloadAppTask__${reqId++}`;
        this.url = '';
        this.appId = '';
        this.name = '';
        progressUpdateMap.set(this, `${this._reqId}__progress`);
    }

    onProgressUpdate(callback) {
        events.on(progressUpdateMap.get(this), data => {
            callback.call(this, data);
        });
    }

    start(params) {
        this._invoke(params);
    }

    pause(params) {
        invoker.call(this, params, 'pauseDownload');
    }

    resume(params) {
        invoker.call(this, params, 'resumeDownload');
    }

    cancel(params) {
        invoker.call(this, params, 'cancelDownload');
    }

    install(params) {
        invoker.call(this, params, 'installApp');
    }

    queryState(params) {
        invoker.call(this, params, 'queryStatus');
    }

    _invoke(params = {}) {
        params.onProgressUpdate = createCallback(data => {
            events.emit(progressUpdateMap.get(this), data);
        }, jsonParse);
        invoker.call(this, params, 'startDownload');
    }
}
function invoker(params, type) {
    let data  = {
        url: this.url,
        appId: this.appId,
        name: this.name,
        type: type
    };
    let paramsCombine = Object.assign(data, params);

    const cbPromise = createLevel2Promise(paramsCombine, jsonParse);
    const callbackPromise = createInvokePromise(swanNative, 'appInstallManager.install', paramsCombine);

    executeCallback({
        promise: [callbackPromise, cbPromise],
        apiName: 'installApp'
    }, paramsCombine);
}
export const createAppInstallManager = (params = {}) => {
    return new AppInstallManager(params);
};

