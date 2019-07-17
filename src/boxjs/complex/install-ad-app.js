/**
 * @file 下载文件
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

/* global WeakMap */
import {boxjsNative} from '../container';
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

export class AdAppInstallManager {
    constructor(params) {
        this._reqId = `InstallAdAppTask${reqId++}`;
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
        invokeBoxJs.call(this, params, 'pauseDownload');
    }

    resume(params) {
        invokeBoxJs.call(this, params, 'resumeDownload');
    }

    cancel(params) {
        invokeBoxJs.call(this, params, 'cancelDownload');
    }

    install(params) {
        invokeBoxJs.call(this, params, 'installApp');
    }

    queryState(params) {
        invokeBoxJs.call(this, params, 'queryStatus');
    }

    _invoke(params) {
        let self = this;
        params.onProgressUpdate = createCallback(data => {
            events.emit(progressUpdateMap.get(self), data);
        }, jsonParse);
        invokeBoxJs.call(this, params, 'startDownload');
        return this;
    }
}
function invokeBoxJs(params, type) {
    let data  = {
        url: this.url,
        appId: this.appId,
        name: this.name,
        type: type
    };
    let paramsCombine = Object.assign(data, params);
    const cbPromise = createLevel2Promise(paramsCombine, jsonParse);
    const callbackPromise = createInvokePromise(boxjsNative, 'installApp4Ad', paramsCombine);

    executeCallback({
        promise: [callbackPromise, cbPromise],
        apiName: 'installApp4Ad'
    }, paramsCombine);
}
export const createAdAppInstallManager = (params = {}) => {
    return new AdAppInstallManager(params);
};

