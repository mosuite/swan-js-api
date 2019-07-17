/**
 * @file src/swan/container.js
 * @author renzhonghua@baidu.com
 * @description 初始化swan的底层容器
 */

import jsNative from 'js-native';

export const swanNative = jsNative.createContainer().config({namingConflict: 'ignore'});

