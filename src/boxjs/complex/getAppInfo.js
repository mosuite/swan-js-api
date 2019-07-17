/**
 * @file getAppInfo
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */
/* globals masterManager */

import {boxjs} from '../index';
import postMessage from '../../utils/post-message';
import {events} from '../../utils/event';

/**
 * slave 中异步获取 appInfo
 *
 * @return {Promise} Promise
 */
export const getAppInfo = () => {
    if (typeof masterManager !== 'undefined') {
        return Promise.resolve(boxjs.data.get({name: 'swan-appInfoSync'}));
    }

    return new Promise((resolve, reject) => {
        events.once('responseGetAppInfo', event => {
            resolve(event.value.appInfo);
        });

        postMessage('master', {
            type: 'getAppInfo'
        });
    });
};
