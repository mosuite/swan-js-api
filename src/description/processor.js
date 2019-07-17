/**
 * @file src/description/processor.js
 * @author renzhonghua@baidu.com
 * @description 注入js-native中的processor
 */


/* globals _naSwan */

import {global, globalNative} from '../utils/global';
import $ from '../utils/_core';

const getStrategy = (name, param) => {
    const STRATEGY_MAP = {
        // ubcReport的策略是：baiduboxapp://utils?action=ubcReport&params=
        ubcReport: {
            action: '?action=',
            callback: '',
            params: `&params=${param}`,
            qm: ''
        },
        // 其他策略是：baiduboxapp://swanAPI/showToast?params=
        default: {
            action: '',
            callback: `callback=${param}`,
            params: param && `params=${param}&`,
            qm: '?'
        }
    };
    return STRATEGY_MAP[name] || STRATEGY_MAP['default'];
};


const paramsHandler = (args, name) => {
    let innerCallback = args.innerCallback || null;
    delete args.innerCallback;

    let queryStr = JSON.stringify(args) !== '{}'
        ? encodeURIComponent(JSON.stringify(args))
        : name.match('Sync') ? '' : encodeURIComponent('{}');

    const params = getStrategy(name, queryStr).params;
    const callback = getStrategy(name, innerCallback).callback;

    return {
        params,
        callback
    };
};


export const processors = {
    SchemeCombine(description, option) {

        const actionStr = getStrategy(description.name).action;
        const prefix = description.scheme + '://' + description.authority + actionStr + description.path + getStrategy(description.name).qm;

        switch (option) {
            // ios下webview的异步
            case 'URL': {
                return function (args) {
                    let {params, callback} = paramsHandler(args, description.name);
                    return prefix + params + callback;
                };
            }
            // ios下webview和jsc的同步
            case 'URLArrayString': {
                return function (args) {
                    let {params, callback} = paramsHandler(args, description.name);
                    let result = prefix + params + callback;
                    return JSON.stringify({
                        func: 'dispatch',
                        args: [result]
                    });
                };
            }
            // 安卓下webview和v8的同/异步，ios下jsc的异步
            case 'URLArray': {
                return function (args) {
                    let {params, callback} = paramsHandler(args, description.name);
                    return [prefix + params + callback];
                };
            }

            // 安卓下webview和v8的ubc
            case 'argArray': {
                // ubcEvent的策略是：BdboxApp:{obj:'Bdbox_android_utils', func:'ubcEvent', args:[{actionId:'123',value:'上报字符串'}]}
                return function (args) {
                    return [args];
                };
            }
        }
    },
    CallMethodAdpter(description, option) {
        var methodOwner;
        var methodName;
        function findMethod() {
            if (!methodOwner) {
                var segs = description.method.split('.');
                var lastIndex = segs.length - 1;

                methodName = segs[lastIndex];
                methodOwner = window || _naSwan;
                for (var i = 0; i < lastIndex; i++) {
                    methodOwner = methodOwner[segs[i]];
                }
            }
        }
        return function (args) {
            findMethod();
            args = $.isString(args) ? [args] : args;
            return methodOwner[methodName].apply(methodOwner, args);
        };
    }
};

