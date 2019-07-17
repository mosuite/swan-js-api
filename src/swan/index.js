/**
 * @file src/swan/index.js
 * @author renzhonghua@baidu.com
 * @description swan入口
 */

import {swanInit} from './swan-init';
import {swanDescription} from '../description';
import {processors} from '../description/processor';
import {swanNative} from './container';
import {swanMap} from './map';
import {canIUse} from './api/can-i-use';


swanNative.add(swanDescription);
for (let item in processors) {
    swanNative.addProcessorCreator(item, processors[item]);
}

const swan = swanInit(swanNative, {}, swanMap);
swan.canIUse = canIUse;

export {swan};