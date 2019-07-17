/**
* @file core/video-context.js
* @author renzhonghua@baidu.com
* @description createVideoContext api
*/

import {swanNative} from '../container';
import {createInvokePromise, executeCallback} from '../../invoker/funcs';
import $ from '../../utils/_core';
import {getSlaveId, getParamType} from '../../utils/common';
import {componentsMap, getComponentId, nativeOperateMethod} from '../../utils/component-operator';

class VideoContext {
    constructor(slaveId, videoId) {
        let paramType = getParamType(videoId);
        if (paramType !== 'String') {
            console.error(`createVideoContext Parameter error: domId should be String instead of ${paramType}`);
        }

        this.videoId = videoId;
        this.slaveId = slaveId;
        this.componentId = getComponentId({
            slaveId,
            domId: videoId,
            componentName: 'video'
        });
    }

    play() {
        this._invokeMethod('play');
    }

    pause() {
        this._invokeMethod('pause');
    }

    seek(position) {
        $.isObject(position) && (position = position.position);

        this._invokeMethod('seek', {position});
    }

    sendDanmu(params) {
        this._invokeMethod('sendDanmu', params);
    }

    requestFullScreen() {
        this._invokeMethod('fullScreen', {fullScreen: true});
    }

    exitFullScreen() {
        this._invokeMethod('fullScreen', {fullScreen: false});
    }

    showStatusBar() {
        this._invokeMethod('showStatusBar');
    }

    hideStatusBar() {
        this._invokeMethod('hideStatusBar');
    }

    _invokeMethod(type, data) {
        function invokeBoxJs() {
            data = {
                slaveId: this.slaveId,
                videoId: componentsMap.get(this.componentId),
                ...data
            };

            const apiName = `video.${type}`;
            const promise = createInvokePromise(swanNative, `video.${type}`, data);

            executeCallback({promise, apiName}, data);
        }
        nativeOperateMethod(this.componentId, invokeBoxJs, this);
    }
}

export default videoId => new VideoContext(getSlaveId(), videoId);
