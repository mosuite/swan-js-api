/**
 * @file getExtConfig
 *       getExtConfigSync
 * @author wulinfei(wulinfei@baidu.com)
 */

import {executeCallback} from '../../invoker/funcs';
import {global} from '../../utils/global';
import {addTimesLog} from '../../utils/ubclog';
import {events} from '../../utils/event';

export function getExtConfig(params) {
    let callbackPromise = new Promise((resolve, reject) => {
        try {
            resolve({
                extConfig: JSON.parse(global.appConfig).ext || {}
            });
        } catch (err) {
            reject({
                errMsg: err.message
            });
        }
    });
    executeCallback({
        promise: callbackPromise,
        apiName: 'getExtConfig'
    }, params);
}

export function getExtConfigSync() {
    events.emit('addTimesLog', {
        apiName: 'getExtConfigSync',
        success: 2
    });
    events.emit('addTimesLog', {
        apiName: 'getExtConfigSync',
        success: 1
    });
    return {
        extConfig: JSON.parse(global.appConfig).ext || {}
    };
}
