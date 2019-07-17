/**
 * @file 注册消息监听
 * @author liwanfeng@baidu.com
 *         wuxiaopan(wuxiaopan@baidu.com)
 */

import {swanNative} from '../../container';
import {createCallback, executeByTryCatch, executeCallback, createInvokePromise} from '../../../invoker/funcs';
import {jsonParse} from '../../../utils/parser';

export const register = (params = {}) => {
    // 接受客户端二级回调，执行 success（用事件也许更合理，历史遗留问题）
    params.cb = createCallback(res => {
        executeByTryCatch(params.success, 'at success function', res);
    }, jsonParse);

    const apiName = 'register';
    const promise = createInvokePromise(swanNative, apiName, params);

    executeCallback({promise, apiName}, params);
};
