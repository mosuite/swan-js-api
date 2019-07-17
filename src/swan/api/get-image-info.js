/**
 * @file api/getImageInfo.js
 * @author wulinfei@baidu.com
 * @description getImageInfo
 */

import {
    swanNative
} from '../container';
import {
    getProgramPath
} from '../../utils/common';
import {
    executeCallback,
    createInvokePromise,
    executeByTryCatch
} from '../../invoker/funcs';
import {
    downloadFile
} from './network/index';
import $ from '../../utils/_core';

export default function (params) {
    if (!params.src || !$.isString(params.src)) {
        const ERROR_MSG = {
            fail: 'at api getImageInfo fail callback function',
            complete: 'at api getImageInfo com callback function'
        };
        let sentData = {
            errCode: 904,
            errMsg: 'src is required and must be "string"'
        };
        executeByTryCatch(params.fail, ERROR_MSG.fail, sentData);
        executeByTryCatch(params.complete, ERROR_MSG.complete, sentData);
    } else {
        new Promise((resolve, reject) => {
            let src = params.src;
            if (/^(http|https):\/\//.test(src)) {
                downloadFile({
                    url: src,
                    success(res) {
                        resolve(res.tempFilePath);
                    },
                    fail(err) {
                        console.error(`download image ${src} fail`, err);
                    }
                }, 'downloadFile');
            } else if (/^bdfile:\/\//.test(src)) {
                resolve(src);
            } else {
                resolve(getProgramPath(src));
            }
        }).then(res => {
            let callbackPromise = createInvokePromise(swanNative, 'getImageInfo', {
                ...params,
                src: res
            });
            executeCallback({
                promise: callbackPromise,
                apiName: 'getImageInfo'
            }, params);
        });
    }
}