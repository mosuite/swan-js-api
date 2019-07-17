/**
 * @file api/add-phone-contact.js
 * @author wuxiaopan@baidu.com
 * @description addPhoneContact
 */

import {swanNative} from '../container';
import {createInvokePromise, createLevel2Promise, executeCallback} from '../../invoker/funcs';
import {jsonParse} from '../../utils/parser';

export default function (params) {
    createInvokePromise(swanNative, 'showActionSheet', {
        itemList: ['创建新联系人', '添加到已有联系人']
    })
    .then(function (res) {
        params.action = +res.tapIndex === 0 ? 'insert' : 'edit';

        let cbPromise = createLevel2Promise(params, jsonParse);

        let callbackPromise = createInvokePromise(swanNative, 'addPhoneContact', params);

        executeCallback({
            promise: [callbackPromise, cbPromise],
            apiName: 'addPhoneContact'
        }, params);
    });
}
