/**
 * @file 将开发者的参数处理后，传给客户端
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

/* globals Uint8Array */
import {globalNative} from './global';
import {PROGRAM_LAUNCH_SCENE, IMAGE_RECOGNIZE_MAP, SUPPORT_IMAGE_RECOGNIZE_TIP} from './constant';
import {getSlaveId} from './common';
import {componentsMap, getComponentId} from './component-operator';
import getAppInfo from './get-app-info';
import $ from './_core';

/**
 * 创建将开发者传递的 domId 转化为 sanId 的 filter 函数
 *
 * @param  {string} options.componentName  组件名称
 * @param  {string} options.idKey     id key
 * @return {Function}                  filter 函数
 */
const createIdConvertFilter = (componentName = 'canvas', idKey = 'canvasId') => {
    return params => {
        const slaveId = getSlaveId();
        const domId = params[idKey];

        if (!$.isString(domId)) {
            return params;
        }

        const componentId = getComponentId({slaveId, componentName, domId});

        return {
            ...params,
            [idKey]: componentsMap.get(componentId)
        };
    };
};

export const convertCanvasIdToSanId = createIdConvertFilter();

/**
 * 获取开发者入参中的回调函数
 *
 * @param  {Function} options.success  success
 * @param  {Function} options.fail     fail
 * @param  {Function} options.complete complete
 * @return {Object}                  {success, fail, complete}
 */
export const getCallbacks = ({success, fail, complete}) => {
    return {
        success,
        fail,
        complete
    };
};

/**
 * 小程序跳转的参数处理
 *
 * @param  {Object} params 开发者入参
 * @return {Object}
 */
export const navigateToProgramFilter = params => {
    params.appKey = params.appKey || params.appid || params.appId;
    params.from = params.from || PROGRAM_LAUNCH_SCENE;

    const appInfo = getAppInfo();
    /* eslint-disable fecs-camelcase */
    params.ubc = {
        pre_source: appInfo.rootSource,
        pre_appid: appInfo.appid
    };


    if (params.envVersion === 'develop') {
        params.appKey += '_dev';
    }
    else if (params.envVersion === 'trial') {
        params.appKey += '_trial';
    }

    delete params.appid;
    delete params.appId;
    return params;
};

/**
 * 返回上一小程序的参数处理
 *
 * @param  {[type]} params 开发者入参
 * @return {Object}
 */
export const navigateBackProgramFilter = params => {
    let appInfo = getAppInfo();
    params.appKey = appInfo.srcAppId;
    params.path = appInfo.srcAppPage;
    params.ubc = {
        pre_source: appInfo.rootSource,
        pre_appid: appInfo.appid
    };
    params.from = params.from || PROGRAM_LAUNCH_SCENE;
    return params;
};

/**
 * 将 ArrayBuffter 转换为 base64
 *
 * @param  {ArrayBuffter} buffer  ArrayBuffer 源数据
 * @return {string}               转换后的 base64 字符串
 */
export const arrayBufferToBase64 = buffer => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return globalNative.btoa(binary);
};


/**
 * 将 uint8ClampedArray 转换为 base64
 *
 * @param  {uint8ClampedArray}  uint8  uint8Clampedarray 源数据
 * @return {string}                   转换后的 base64 字符串
 */

export const uint8ToBase64 = uint8 => {
    let binary = '';
    let len = uint8.length;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(uint8[i]);
    }
    return globalNative.btoa(binary);
};

const numTostr = data => {
    for (let i in data) {
        if (typeof data[i] === 'number') {
            data[i] = '' + data[i];
        } else if (typeof data[i] === 'object') {
            data[i] = numTostr(data[i]);
        }
    }
    return data;
};

export const convertNumberToString = (params = {}) => {
    let funcCloned = {};
    let dataCloned = '';

    for (let i in params) {
        if (typeof params[i] === 'function') {
            funcCloned[i] = params[i];
        }
    }

    dataCloned = JSON.parse(JSON.stringify(params));
    Object.assign(dataCloned, funcCloned);

    return numTostr(dataCloned);
};

/**
 * 调起的其它参数(一般用于有多个参数情况)
 *
 * @param  {}  args   源数据
 * @return {object}     转换成Object的数据
 */

export const moreParamsKey = (args, moreParamsKey) => {
    let allParams = {};
    moreParamsKey.forEach((key, index) => {
        allParams[key] = args[index];
    });
    return allParams;
};

/**
 * 多模相机识图参数校验
 *
 * @param  {[type]} params 开发者入参
 * @return {Object}
 */
export const recoginzeImageParamsCheck = params => {
    if (params.showTitle && !$.isBoolean(params.showTitle)) {
        return '[jsNative Argument Error]: showTitle should be type of Boolean';
    }
    let categoryListLen = params.categoryList && $.isArray(params.categoryList) && params.categoryList.length;
    if (!categoryListLen) {
        return 'categoryList should be an Array which length larger than 0';
    }
    if (params.index < 0 || params.index >= categoryListLen) {
        return `index should be within the range between [0, ${categoryListLen})`;
    }
    let notSupportCategory = params.categoryList.find(item => !Object.keys(IMAGE_RECOGNIZE_MAP).includes(item));
    if (notSupportCategory) {
        return `category should be oneof ${Object.keys(IMAGE_RECOGNIZE_MAP)}`;
    }
    if (params.customTips && $.isObject(params.customTips)) {
        for (let key in params.customTips) {
            if (!SUPPORT_IMAGE_RECOGNIZE_TIP.includes(key)) {
                delete params.customTips[key];
            } else {
                let topTipLen = params.customTips[key].topTip && params.customTips[key].topTip.length;
                let bottomTipLen = params.customTips[key].bottomTip && params.customTips[key].bottomTip.length;
                if ((topTipLen && topTipLen > 16) || (bottomTipLen && bottomTipLen > 16)) {
                    return `customTips.${key}'s tips length should not larger than 16`;
                }
            }
        }
    }
};
