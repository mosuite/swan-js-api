/**
* @file core/map.js
* @author renzhonghua@baidu.com
* @description createMapContext
*/

import {swanNative} from '../container';
import $ from '../../utils/_core';
import {getSlaveId, getParamType} from '../../utils/common';
import {executeCallback, createInvokePromise} from '../../invoker/funcs';
import {supportLevel2Callback} from '../../utils/common';
import {componentsMap, getComponentId, nativeOperateMethod} from '../../utils/component-operator';

class MapContext {
    constructor(slaveId, mapId) {
        let paramType = getParamType(mapId);
        if (paramType !== 'String') {
            console.error(`createMapContext Parameter error: domId should be String instead of ${paramType}`);
        }

        this.mapId = mapId;
        this.slaveId = slaveId;
        this.componentId = getComponentId({
            slaveId,
            domId: mapId,
            componentName: 'map'
        });
    }

    getCenterLocation(params = {}) {
        this._invokeMethod('getCenterLocation', params);
    }

    moveToLocation() {
        this._invokeMethod('moveToLocation');
    }

    translateMarker(params = {}) {
        params.callback = function (res) {
            $.isFunction(params.animationEnd) && params.animationEnd(res);
        };

        this._invokeMethod('translateMarker', supportLevel2Callback(params));
    }

    includePoints(params = {}) {
        const padding = params.padding;
        if (padding) {
            params.padding = [0, 0, 0, 0].reduce((result, cur, index) => {
                result[index] = Number(padding[index]) || 0;
                return result;
            }, []);
        }
        this._invokeMethod('includePoints', params);
    }

    getRegion(params = {}) {

        this._invokeMethod('getRegion', params);
    }

    getScale(params = {}) {
        this._invokeMethod('getScale', params);
    }

    _invokeMethod(type, data) {
        function invokeBoxJs() {
            let params = {
                slaveId: this.slaveId,
                mapId: componentsMap.get(this.componentId),
                ...data
            };
            const apiName = `map.${type}`;
            const promise = createInvokePromise(swanNative, apiName, params);

            executeCallback({promise, apiName}, params);
        }

        nativeOperateMethod(this.componentId, invokeBoxJs, this);
    }
}

export default mapId => new MapContext(getSlaveId(), mapId);
