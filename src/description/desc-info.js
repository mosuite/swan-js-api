/**
 * @file src/description/desc-info.js
 * @author renzhonghua@baidu.com
 * @description
 */

import {getEnvInfo, schema} from '../utils/scheme-info';
import {openSourceDebugList, synclist, asynclist} from './common';
import {androidSpecialMap} from './android';
import {iosSpecialMap} from './ios';


export const INVOKE_LIST = {
    // ios下webview的异步
    'swan.message.url':
    ['ArgCheck', 'ArgFuncArgDecode:JSON', 'ArgFuncEncode', 'ArgCombine:Object', 'SchemeCombine:URL',
    'CallMessage'],

    // ios下webview的同步
    'swan.prompt':
    ['ArgCheck', 'ArgFuncArgDecode:JSON', 'ArgFuncEncode', 'ArgCombine:Object',
    'SchemeCombine:URLArrayString', 'CallPrompt'],

    // ios下jsc的同步
    'swan.method.urlArray':
    ['ArgCheck', 'ArgFuncArgDecode:JSON', 'ArgFuncEncode', 'ArgCombine:Object',
    'SchemeCombine:URLArrayString', 'CallMethodAdpter'],

    // 安卓下webview和v8的同/异步。ios下jsc的异步
    'swan.method.url':
    ['ArgCheck', 'ArgFuncArgDecode:JSON', 'ArgFuncEncode', 'ArgCombine:Object',
    'SchemeCombine:URLArray', 'CallMethodAdpter'],

    // 安卓下webview和v8的ubc
    'swan.method.ubc':
    ['ArgCheck', 'ArgFuncArgDecode:JSON', 'ArgFuncEncode', 'ArgCombine:JSONString',
    'SchemeCombine:argArray', 'CallMethodAdpter']
};

const envMap = {
    ios: {
        webview: {
            async: {
                invoke: 'swan.message.url',
                handler: 'bridge'
            },
            sync: {
                invoke: 'swan.prompt'
            },
            ubc: {
                name: 'ubcReport',
                authority: 'utils',
                path: 'ubcReport',
                handler: 'bridge',
                invoke: 'swan.message.url',
                args: [
                    {name: 'actionId', value: 'string'},
                    {name: 'value', value: 'Object'},
                    {name: 'minver', value: 'string='},
                    {name: 'min_v', value: 'string='}
                ]
            }
        },
        jsc: {
            async: {
                invoke: 'swan.method.url',
                method: '_naSwan.bridge.postMessage'
            },
            sync: {
                invoke: 'swan.method.urlArray',
                method: '_naSwan.bridge.prompt'
            },
            ubc: {
                name: 'ubcReport',
                authority: 'utils',
                path: 'ubcReport',
                method: '_naSwan.bridge.postMessage',
                invoke: 'swan.method.url',
                args: [
                    {name: 'actionId', value: 'string'},
                    {name: 'value', value: 'Object'},
                    {name: 'minver', value: 'string='},
                    {name: 'min_v', value: 'string='}
                ]
            }
        }
    },
    android: {
        webview: {
            async: {
                invoke: 'swan.method.url',
                method: 'Bdbox_android_jsbridge.dispatch'
            },
            sync: {
                invoke: 'swan.method.url',
                method: 'Bdbox_aiapps_jsbridge.dispatch'
            },
            ubc: {
                name: 'ubcReport',
                authority: 'utils',
                path: 'ubcEvent',
                invoke: 'swan.method.ubc',
                method: 'Bdbox_android_utils.ubcEvent',
                args: [
                    {name: 'actionId', value: 'string'},
                    {name: 'value', value: 'Object'},
                    {name: 'minver', value: 'string='},
                    {name: 'min_v', value: 'string='}
                ]
            }
        },
        v8: {
            async: {
                invoke: 'swan.method.url',
                method: '_naSwan.Bdbox_android_jsbridge.dispatch'
            },
            sync: {
                invoke: 'swan.method.url',
                method: '_naSwan.Bdbox_aiapps_jsbridge.dispatch'
            },
            ubc: {
                name: 'ubcReport',
                authority: 'utils',
                path: 'ubcEvent',
                invoke: 'swan.method.ubc',
                method: '_naSwan.Bdbox_android_utils.ubcEvent',
                args: [
                    {name: 'actionId', value: 'string'},
                    {name: 'value', value: 'Object'},
                    {name: 'minver', value: 'string='},
                    {name: 'min_v', value: 'string='}
                ]
            }
        }
    }
};


const envInfo = getEnvInfo();
const osInfo = envInfo.split('.')[0];
const frameInfo = envInfo.split('.')[1];

export const syncScheme = envMap[osInfo][frameInfo].sync;

export const asyncScheme = envMap[osInfo][frameInfo].async;


export const getLocalDescList = () => {

    synclist.forEach(function (item) {
        Object.assign(item, syncScheme);
        item.authority = item.authority.replace(/v\d+\//, '');
        item.authority = item.authority.replace(/swan/, 'swanAPI');
        if (item.args.length) {
            item.args.forEach(function (item) {
                if (typeof item.value === 'string') {
                    item.value = item.value.indexOf('=') > -1 ? item.value.split('=')[0] : item.value + '=';
                }
            });
        }
    });


    let async = asynclist.concat(openSourceDebugList, iosSpecialMap, androidSpecialMap);
    async.forEach(function (item) {
        Object.assign(item, asyncScheme);
        item.authority = item.authority.replace(/v\d+\//, '');
        item.authority = item.authority.replace(/swan/, 'swanAPI');
        if (item.args.length) {
            item.args.forEach(function (item) {
                if (typeof item.value === 'string') {
                    item.value = item.value.indexOf('=') > -1 ? item.value.split('=')[0] : item.value + '=';
                }
            });
        }
    });

    let localDescList = synclist.concat(async);
    localDescList.push(envMap[osInfo][frameInfo].ubc);

    return localDescList;
};