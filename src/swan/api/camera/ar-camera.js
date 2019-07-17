/**
 * @file createARCameraContext
 * @author jiamiao(jiamiao@baidu.com)
           wuxiaopan(wuxiaopan@baidu.com)
 */

import {swanNative} from '../../container';
import CameraContext from './camera';
import {createCallback, executeByTryCatch, executeCallback, createInvokePromise} from '../../../invoker/funcs';
import {resNeedDecode} from '../../../utils/parser';

export default class ARCameraContext extends CameraContext {
    constructor(slaveId) {
        super(slaveId);
        this.ARCameraId = `ARCamera${this.slaveId}`;
    }

    get componentName() {
        return 'ARCamera';
    }

    /**
     * 开始录制
     *
     * @param  {Object} params 开发者入参
     * @param  {Object} params.timeout 超时回调
     * @param  {Object} params.stopCallback 等同于 timeout
     * @param  {Object} params.progress 进度回调
     * @param  {Object} params.onProgressUpdate 等同于 progress
     * @return {undefined}
     */
    startRecord(params = {}) {
        const stopCallback = createCallback(res => {
            executeByTryCatch(params.stopCallback, 'at stopCallback function', res);
            executeByTryCatch(params.timeout, 'at timeout function', res);
        }, resNeedDecode);

        const onProgressUpdate = createCallback(res => {
            executeByTryCatch(params.onProgressUpdate, 'at onProgressUpdate function', res);
            executeByTryCatch(params.progress, 'at progress function', res);
        }, resNeedDecode);

        this._invokeMethod('startRecord', {
            ...params,
            stopCallback,
            onProgressUpdate
        });
    }

    reTake(params = {}) {
        params.reset = true;
        this._invokeMethod('retake', params);
    }

    /**
     * 重置相机
     *
     * @param  {Object} params 开发者入参
     * @return {undefined}
     */
    reset(params) {
        this.reTake(params);
    }

    _invokeBoxJs(type, data) {
        data = {
            slaveId: this.slaveId,
            ARCameraId: this.ARCameraId,
            ...data
        };

        const apiName = `ARCamera.${type}`;
        const promise = createInvokePromise(swanNative, apiName, data);

        executeCallback({promise, apiName}, data);
    }
}
