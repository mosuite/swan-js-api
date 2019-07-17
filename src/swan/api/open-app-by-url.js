/**
 * @file openAppByURL
 * @author wuxiaopan@baidu.com
 */

import {boxjs} from '../../boxjs/index';
import {executeCallback, callFailAndComplete} from '../../invoker/funcs';
import {getParamType} from '../../utils/common';
import {jsonParse} from '../../utils/parser';

const LAUNCH_APP_INFO_FAIL_MSG = '打开APP失败，获取最低使用要求数据失败';
const LAUNCH_APP_FAIL_MSG = '打开APP失败，用户未达到最低使用要求';

/**
 * 调起 App
 *
 * @param  {Object} params 调起参数
 * @param  {Object} params.url 需要调起的 App 的 URL Scheme。如 全民小视频 -> bdminivideo://
 * @return {undefined}
 */
export default (params = {}) => {
    const url = params.url;

    if (getParamType(url) !== 'String') {
        callFailAndComplete(params, 'openAppByURL', `parameter error: invalid url "${params.url}"`);
        return;
    }

    const promise = new Promise((resolve, reject) => {
        boxjs.data.get({
            name: 'swan-launchAppInfo',
            data: {
                callback(res) {
                    let jsonRes = jsonParse(res);
                    let {ext = [], forbidden, visitDuration, launchCount} = jsonRes.data || {};
                    if (!ext.length) {
                        reject({errMsg: LAUNCH_APP_INFO_FAIL_MSG});
                        return false;
                    }
                    const extObj = ext.map(item => JSON.parse(item))
                        .reduce((r, v) => Object.assign(r, v), {});
                    for (let key in extObj) {
                        let val = extObj[key];
                        if (val.daily_duration === '' || val.launch_count === '') {
                            reject({errMsg: LAUNCH_APP_INFO_FAIL_MSG});
                            return false;
                        }

                        let schemeChecked = false;
                        switch (key) {
                            case 'strategy':
                                if (forbidden) {
                                    if (visitDuration < ~~val.daily_duration * 60000
                                        && launchCount < ~~val.launch_count) {
                                        reject({errMsg: LAUNCH_APP_FAIL_MSG});
                                        return false;
                                    }
                                }
                                break;
                            case 'package_name':
                                for (let i = 0; i < val.length; i++) {
                                    const value = val[i];
                                    const reg = new RegExp(`^${value}`, 'gi');
                                    if (reg.test(url)) {
                                        schemeChecked = true;
                                        break;
                                    }
                                }
                                if (!schemeChecked) {
                                    reject({errMsg: LAUNCH_APP_FAIL_MSG});
                                    return false;
                                }
                                break;
                        }
                    }
                    Object.keys(extObj).length && boxjs.ui.open({
                        name: 'swan-app',
                        data: {
                            open: encodeURIComponent(url),
                            download: {},
                            isNeedDownload: false,
                            invokAnyWay: true
                        }
                    }).then(resolve).catch(() => {
                        reject({errMsg: '小程序打开 App 失败，本地没有安装 App'});
                    });
                }
            }
        }).catch(reject);
    });

    executeCallback({
        promise,
        apiName: 'openApp'
    }, params);
};
