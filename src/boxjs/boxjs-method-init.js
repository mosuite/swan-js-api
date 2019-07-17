/**
 * @file Boxjs
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */


import {boxjsMap} from './map';
import {invokeMaker} from '../invoker';
import {boxjsNative} from './container';


const boxjsMethodInit = (descriptionName, params) => {
    let config = boxjsMap[descriptionName];
    if (~descriptionName.indexOf('.')) {
        try {
            config = boxjsMap[descriptionName.split('.')[0]][descriptionName.split('.')[1]];
        } catch (e) {
            console.error('boxjsMethodInit err', e);
        }
    }
    return invokeMaker(boxjsNative, descriptionName, config, true, params);
};


// ui上的3个方法，在input、textarea、3种picker、button组件中使用。
export const ui = ['open', 'update', 'close'].reduce((result, item) => {
    const BOXJS_METHOD_DESCNAME_MAP = {
        open: 'insert',
        update: 'update',
        close: 'remove'
    };
    result[item] = ({name, data}) => {
        let descriptionName = `${name.split('-')[1]}.${BOXJS_METHOD_DESCNAME_MAP[item]}`;
        if (name === 'swan-setting') {
            descriptionName = 'openSetting';
        }
        if (name === 'swan-adWebPage') {
            descriptionName = 'openAdWebPage';
        }
        return boxjsMethodInit(descriptionName, data);
    };
    return result;
}, {});


// cache上的2个方法，分别有同步异步2种使用方法。
export const cache = {
    get({type, key}) {
        const item = type === 'sync' ? 'getStorageSync' : 'getStorage';
        return boxjsMethodInit(item, {key: encodeURIComponent(key)});
    },
    set(key, value, type) {
        const item = type === 'sync' ? 'setStorageSync' : 'setStorage';
        const data = {
            key: encodeURIComponent(key),
            data: encodeURIComponent(JSON.stringify(value))
        };
        return boxjsMethodInit(item, data);
    }
};


// cover的3个方法，在coverview、coverimage、animView组件中使用。
export const cover = ['insert', 'update', 'remove'].reduce((result, item) => {
    result[item] = ({name, data}) => {
        return boxjsMethodInit(`${name.split('-')[1]}.${item}`, data);
    };
    return result;
}, {});


// canvas的3个方法，在canvas组件中使用。
export const canvas = ['insert', 'update', 'remove'].reduce((result, item) => {
    result[item] = args => boxjsMethodInit(`canvas.${item}`, args);
    return result;
}, {});


// data
export const data = ['get', 'set', 'delete', 'toggle'].reduce((result, item) => {
    result[item] = ({name, data}) => {
        name = name.split('-')[1];
        let descriptionName = name.replace(/(\w+\.)?(\w)/, (all, prefix, initial) => {
            return (prefix || '') + item + initial.toUpperCase();
        });

        return boxjsMethodInit(descriptionName, data || {});
    };
    return result;
}, {});


// 各种log能力
export const log = ({name, data}) => boxjsMethodInit(name, data);


export const net = ['request', 'onSwanJSLoaded'].reduce((result, item) => {
    result[item] = data => boxjsMethodInit(item, data || {});
    return result;
}, {});


// device方法
export const device = ['vibrateShort', 'networkType', 'systemInfo'].reduce((result, item) => {
    const ITEM_MAP = {
        systemInfo: 'getSystemInfo',
        networkType: 'getNetworkType'
    };
    result[item] = data => {
        let apiName = ITEM_MAP[item] || item;
        if (data && data.type === 'sync') {
            apiName = `${apiName}Sync`;
        }
        return boxjsMethodInit(apiName, data);
    };
    return result;
}, {});


// map组件
export const map = ['insert', 'update', 'remove'].reduce((result, item) => {
    result[item] = args => boxjsMethodInit(`map.${item}`, args);
    return result;
}, {});


// media上的4个方法
export const media = ['video', 'live', 'camera', 'ARCamera'].reduce((result, item) => {
    result[item] = ({type, data}) => {
        return boxjsMethodInit(`${item}.${type}`, data);
    };
    return result;
}, {});


// webView上的方法
export const webView = [
    'insert', 'update', 'remove',
    'navigateBack', 'navigateTo', 'redirectTo',
    'reLaunch', 'switchTab', 'launch', 'exit'
].reduce((result, item) => {
    result[item] = args => boxjsMethodInit(`webView.${item}`, args);
    return result;
}, {});
