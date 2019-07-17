/**
 * @file utils/ubclog.js
 * @author renzhonghua@baidu.com
 * @description ubclog
 */

/* globals Map */
import {boxjs} from '../boxjs';
import getAppInfo from './get-app-info';
import getSystemInfo from './get-system-info';

// 每间隔 LOG_INTERVAL 上报一次
const LOG_INTERVAL = 60 * 1000;
setTimeout(function log() {
    ubcReport();
    setTimeout(log, LOG_INTERVAL);
}, LOG_INTERVAL);

/**
 * 记录 API 调用
 * 当达到 MAX_LOG_COUNT 次调用时上报
 *
 * @param {Object} logInfo {apiName, success, statusCode}
 */
let logList = [];
const MAX_LOG_COUNT = 70;
export function addTimesLog(logInfo) {
    logList.push(logInfo);
    logList.length >= MAX_LOG_COUNT && ubcReport();
}

/**
 * API 调用结果日志上报
 *
 * @param  {string} options.apiName     API 名称
 * @param  {string} options.success     0: 失败 1: 成功
 * @param  {string} options.statusCode  网络相关接口: statusCode
 * @return {undefined}                  undefined
 */
export const ubcReport = () => {
    if (!logList.length || !getAppInfo().appid) {
        return;
    }
    // 计数
    let countMap = {};
    for (let i = 0, len = logList.length; i < len; i++) {
        let tempKey = JSON.stringify(logList[i]);
        if (!countMap[tempKey]) {
            countMap[tempKey] = 0;
        }
        countMap[tempKey]++;
    }

    let extList = [];
    for (let key in countMap) {
        let tempLog = JSON.parse(key);
        tempLog.count = countMap[key];
        extList.push(tempLog);
    }

    let params = {
        actionId: '786',
        /* eslint-disable fecs-camelcase */
        min_v: '16789504',
        /* eslint-enable fecs-camelcase */
        value: {
            from: 'swan',
            type: 'call',
            ext: {
                appKey: getAppInfo().appid,
                swan: getSystemInfo().SDKVersion,
                list: extList
            }
        }
    };
    let logParams = {
        groupId: '12',
        bizId: '38',
        swanType: 'swan',
        eventName: 'call',
        smartAppId: getAppInfo().appid,
        /* eslint-disable fecs-camelcase */
        min_v: '16789504',
        /* eslint-enable fecs-camelcase */
        content: {
            ext: {
                list: extList
            }
        }
    };
    logList = [];
    boxjs.log({
        name: 'ubcReport',
        data: params
    });
    boxjs.log({
        name: 'statisticEvent',
        data: logParams
    });
}

/**
 * 存储调用时长起点
 * @type {Map}
 */
export const startTimeMap = new Map();

/**
 * 调用时长打点
 *
 * @param {Object} logInfo {apiName, success, start, end}
 */
export function addDurationLog(logInfo) {
    logInfo.duration = logInfo.end - logInfo.start;
    let params = {
        actionId: '855',
        /* eslint-disable fecs-camelcase */
        min_v: '16789504',
        /* eslint-enable fecs-camelcase */
        value: {
            from: 'swan',
            type: 'duration',
            ext: {
                appKey: getAppInfo().appid,
                list: [logInfo]
            }
        }
    };

    boxjs.log({
        name: 'ubcReport',
        data: params
    });
}
