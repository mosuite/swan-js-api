/**
 * @file src/boxjs/map/index.js
 * @author renzhonghua@baidu.com
 * @description boxjs上的外部case使用的端能力
 */

import $ from '../../utils/_core';
import queryToJson from '../../utils/queryToJson';
import jsonToQuery from '../../utils/jsonToQuery';
import {boxjsDescription} from '../../description';
import {hostName} from '../../utils/common';
/**
 * 有特殊 filter 或 parser 的 API
 *
 * @type {Object}
 */
const normalMap = boxjsDescription.reduce((result, item) => {
    // 直接挂boxjs上的名字规则是：
    // 1、宿主，例如：baidu.xxx
    // 2、名字中没有点，例如：getRegionData

    // 需要循环挂在boxjs上的名字规则是：
    // 1、.insert|.update|.remove|webView. 带有这些前、后缀的名字

    if (!~item.name.indexOf(hostName) && ~item.name.indexOf('.')) {
        let nameArr = item.name.split('.');
        if (!result[nameArr[0]]) {
            result[nameArr[0]] = {};
        }
        result[nameArr[0]][nameArr[1]] = {};
    } else {
        result[item.name] = {};
    }

    return result;
}, {});

const specialMap = {
    navigateTo: {
        filter(data) {
            if (data.url && data.url.indexOf('?') > -1) {
                let path = data.url.split('?')[0];
                let urlParams = queryToJson(data.url);
                Object.keys(urlParams).forEach(function (key) {
                    urlParams[key] = encodeURIComponent(urlParams[key]);
                });
                let urlQuery = jsonToQuery(urlParams);
                data.url = path + '?' + urlQuery;
            }
            return data;
        }
    },
    ubcReport: {
        filter(params) {
            if ($.isIOS) {
                params.minver = '7.3.0.0';
            } else {
                /* eslint-disable fecs-camelcase */
                params['min_v'] = '16789504';
                /* eslint-enable fecs-camelcase */
            }
            return params;
        }
    }
};


export const boxjsMap = Object.assign({}, normalMap, specialMap);
