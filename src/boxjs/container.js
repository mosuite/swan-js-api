/**
 * @file src/boxjs/container.js
 * @author renzhonghua@baidu.com
 * @description 初始化boxjs的底层容器
 */

import jsNative from 'js-native';

export const boxjsNative = jsNative.createContainer().config({namingConflict: 'ignore'});
