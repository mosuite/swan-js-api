/**
 * @file createLivePlayerContext
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

import {swanNative} from '../container';
import {createInvokePromise, executeCallback} from '../../invoker/funcs';
import {getSlaveId, getParamType} from '../../utils/common';
import {componentsMap, getComponentId, nativeOperateMethod} from '../../utils/component-operator';

class LivePlayerContext {
    constructor(slaveId, liveId) {
        let paramType = getParamType(liveId);
        if (paramType !== 'String') {
            console.error(`createLivePlayerContext Parameter error: domId should be String instead of ${paramType}`);
        }

        this.slaveId = slaveId;
        this.liveId = liveId;
        this.componentId = getComponentId({
            slaveId,
            domId: liveId,
            componentName: 'live'
        });
    }

    play(params = {}) {
        this._invokeMethod('play', params);
    }

    pause(params = {}) {
        this._invokeMethod('pause', params);
    }

    resume(params = {}) {
        this._invokeMethod('resume', params);
    }

    stop(params = {}) {
        this._invokeMethod('stop', params);
    }

    mute(params = {}) {
        this._invokeMethod('mute', {
            muted: true,
            ...params
        });
    }

    requestFullScreen(params = {}) {
        this._invokeMethod('fullScreen', {
            direction: 0,
            ...params,
            fullScreen: true
        });
    }

    exitFullScreen(params = {}) {
        this._invokeMethod('fullScreen', {
            fullScreen: false,
            ...params
        });
    }

    _invokeMethod(type, data) {
        function invokeBoxJs() {
            data = {
                slaveId: this.slaveId,
                liveId: componentsMap.get(this.componentId),
                ...data
            };
            const apiName = `live.${type}`;
            const promise = createInvokePromise(swanNative, apiName, data);

            executeCallback({promise, apiName}, data);
        }

        nativeOperateMethod(this.componentId, invokeBoxJs, this);
    }
}

export default liveId => new LivePlayerContext(getSlaveId(), liveId);
