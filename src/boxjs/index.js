/**
 * @file src/boxjs/index.js
 * @author renzhonghua@baidu.com
 * @description boxjs入口
 */

import {boxjsNative} from './container';
import {invokeMaker} from '../invoker';
import {boxjsDescription} from '../description';
import {processors} from '../description/processor';
import platform from '../platform';
import * as module from './boxjs-method-init';
import {componentMap} from '../caniuse-setting/component-caniuse-map';
import {createAdAppInstallManager, getAppInfo, adRequest} from './complex/index';
import {argCombine} from '../utils/common';


boxjsNative.add(boxjsDescription);

for (let item in processors) {
    boxjsNative.addProcessorCreator(item, processors[item]);
}

export const boxjs = {
    ...module,
    platform,
    getAppInfo,
    adRequest,
    createAdAppInstallManager,

    /**
     * 扩展描述接口
     *
     * @param {Object[]} descriptions - 用于扩展的配置文件
     */
    extend(descriptions = []) {
        // 将同步能力与异步能力分类
        let proccessedDescriptions = descriptions;

        const classifiedDescriptions = descriptions
            .reduce((classifiedDescriptions, description) => {
                if (description.name.match(/Sync$/g)) {
                    classifiedDescriptions.syncDescriptions.push(description);
                }
                else {
                    classifiedDescriptions.asyncDescriptions.push(description);
                }
                return classifiedDescriptions;
            }, {
                syncDescriptions: [],
                asyncDescriptions: []
            });

        // 统一增加公共参数
        proccessedDescriptions = argCombine(
            classifiedDescriptions.syncDescriptions,
            classifiedDescriptions.asyncDescriptions
        );

        // 统一挂到boxjs上
        proccessedDescriptions
            .forEach(description => {
                let name = description.name;
                this[name] = params => invokeMaker(boxjsNative, name, {}, true, params);
            });
        // 添加到boxjsNative容器中
        boxjsNative.add(proccessedDescriptions);
    },

    /**
    * 注册caniuse map
    * @param {Object} map - 需要注入的caniusemap
    */
    addCanIUse(map = {}) {
        Object.assign(componentMap, map);
    }
};
