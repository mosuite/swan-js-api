/**
 * @file src/swan/swan-init.js
 * @author renzhonghua@baidu.com
 * @description 装载小程序api
 */

import $ from '../utils/_core';
import {invokeMaker} from '../invoker';

/**
 * 挂载 API
 *
 * @param  {Obejct} swan {}
 * @return {Obejct} swan 挂载 API 后的 swan 对象
 */
export const swanInit = (swanNative, swan, map) => {
    for (let key in map) {

        let apiConfig = map[key];

        let invoke;
        // 默认参数
        if (!key.match('Sync') && !$.isFunction(apiConfig)) {
            invoke = function (param) {
                if (typeof param === 'function') {
                    // 兼容小游戏onShareAppMessage直接传function参数情况
                    return invokeMaker(swanNative, key, apiConfig, null, param);
                } else {
                    return invokeMaker(swanNative, key, apiConfig, null, {
                        ...apiConfig.defaultParam,
                        ...param
                    });
                }
            };
        }
        else {
            invoke = function (...args) {
                return invokeMaker(swanNative, key, apiConfig, null, ...args);
            };
        }

        if (key.indexOf('.') > 0) {
            let [subModule, apiName] = key.split('.');
            swan[subModule] = swan[subModule] || {};
            swan[subModule][apiName] = invoke;
        }
        else {
            swan[key] = invoke;
        }
    }
    return swan;
};
