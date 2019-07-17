/**
 * @file swanjs/index.js
 * @author lijia(lijia30@baidu.com)
 * @description webview swanjs入口
 */
import {descriptions} from './description';
import {swanjsNative} from './container';
import {swanInit} from '../swan/swan-init';
import {swanjsMap} from './map';



swanjsNative.add(descriptions);

window.swan = swanInit(swanjsNative, {}, swanjsMap);
