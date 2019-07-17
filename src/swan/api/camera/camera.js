/**
 * @file createCameraContext
 * @author lijiahui(lijiahui02@baidu.com)
           wuxiaopan(wuxiaopan@baidu.com)
 */

import {swanNative} from '../../container';
import {createCallback, executeCallback, createInvokePromise} from '../../../invoker/funcs';
import {resNeedDecode} from '../../../utils/parser';
import {getComponentId, nativeOperateMethod} from '../../../utils/component-operator';

export default class CameraContext {

    constructor(slaveId) {
        this.slaveId = slaveId;
        this.componentId = getComponentId({
            slaveId,
            componentName: this.componentName
        });
    }

    get componentName() {
        return 'camera';
    }

    takePhoto(params = {}) {
        params.quality = params.quality || 'normal';
        this._invokeMethod('takePhoto', params);
    }

    startRecord(params = {}) {
        params.timeoutCallback = createCallback(params.timeoutCallback, resNeedDecode);
        this._invokeMethod('startRecord', params);
    }

    stopRecord(params) {
        this._invokeMethod('stopRecord', params);
    }

    _invokeMethod(type, data) {
        function invokeBoxJs() {
            this._invokeBoxJs(type, data);
        }
        nativeOperateMethod(this.componentId, invokeBoxJs, this);
    }

    _invokeBoxJs(type, data) {
        data = {
            slaveId: this.slaveId,
            ...data
        };

        const apiName = `camera.${type}`;
        const promise = createInvokePromise(swanNative, apiName, data);

        executeCallback({promise, apiName}, data);
    }
}
