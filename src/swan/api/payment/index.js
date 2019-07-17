/**
 * @file 支付 API
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

import jsonToQuery from '../../../utils/jsonToQuery';
import {getSlaveId} from '../../../utils/common';
import {getParamsCBName, createLevel2Promise, createInvokePromise, executeCallback} from '../../../invoker/funcs';

import {jsonParse, base64Parser, base64Decode} from '../../../utils/parser';
import {startTimeMap} from '../../../utils/ubclog';
import {swanNative} from '../../container';

let paymentApiConfig = {
    // 聚合支付
    requestPolymerPayment: {
        parser: base64Parser,
        filter(params) {
            params.from = 'swan';
            return params;
        }
    },
    // 支付宝
    requestAliPayment: {
        parser: base64Parser,
        filter(params) {
            params.from = 'swan';
            return params;
        }
    },
    // 百度钱包
    requestPayment: {
        parser: base64Parser,
        filter(params) {
            params.orderInfo = jsonToQuery(params.orderInfo);
            params.from = 'swan';
            return params;
        }
    },
    // 微信 H5 直连
    requestWeChatPayment: {
        filter(params) {
            let src = `${params.url}?prepay_id=${params.prepayId}`;
            for (let key in params.extraData) {
                src += `&${key}=${encodeURIComponent(params.extraData[key])}`;
            }
            return {
                slaveId: getSlaveId(),
                src,
                from: 'swan',
                ...params
            };
        }
    }
};

/**
 * 客户端 11.0 增加支付消息后的解析
 *
 * @param  {Object} res 客户端返回值 {status, message, data: {payId, payResult}}
 * @return {Object}
 */
const jsonParseAndBase64Decode = res => {
    let result = jsonParse(res);

    // 对 data.payResult 做 base64 解码
    if (+result.status === 0) {
        result.data.payResult = result.data && result.data.payResult ? base64Decode(result.data.payResult) : '';
        result.data.payResult = decodeURIComponent(result.data.payResult);
    }
    return result;
};

/**
 * version 和解析方法的映射关系
 * @type {Object}
 */
const parserMap = {'2.0': jsonParseAndBase64Decode};

Object.keys(paymentApiConfig).forEach(apiName => {
    let apiItem = paymentApiConfig[apiName];

    apiItem.proxyHandler = params => {
        // version 处理
        if (params.version && !parserMap[params.version]) {
            console.warn(`parameter.version "${params.version}" is invalid`);
            delete params.version;
        }

        /**
         * 是否不需要二级回调
         *
         * @type {boolean}
         */
        const deleteCb = apiName === 'requestWeChatPayment' && !params.version;

        let cbPromise = !deleteCb && createLevel2Promise(params, parserMap[params.version] || apiItem.parser);

        // 时长起点
        startTimeMap.set(params, Date.now());

        const callbackPromise = createInvokePromise(swanNative, apiName, params);

        executeCallback({
            apiName,
            promise: deleteCb ? callbackPromise : [callbackPromise, cbPromise]
        }, params);
    };
});

export default paymentApiConfig;
