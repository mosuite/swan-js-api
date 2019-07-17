/**
* @file api/launch-cloud-game.js
* @author renzhonghua@baidu.com
* @description launch-cloud-game
*/


import $ from '../../utils/_core';

import {swanNative} from '../container';
import {
    createInvokePromise,
    executeCallback,
    executeByTryCatch,
    createLevel2Promise
} from '../../invoker/funcs';
import {jsonParse} from '../../utils/parser';


export default (params = {}) => {
    if ($.isAndroid) {
        const cbPromise = createLevel2Promise(params, jsonParse);
        const callbackPromise = createInvokePromise(swanNative, 'launchCloudGame', params);
        executeCallback({
            promise: [callbackPromise, cbPromise],
            apiName: 'launchCloudGame'
        }, params);
    } else {
        let res = {
            errCode: 1,
            errMsg: 'ios暂不支持打开云游戏'
        };
        executeByTryCatch(params.fail, '', res);
        executeByTryCatch(params.complete, '', res);
    }
};
