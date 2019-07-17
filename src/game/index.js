/**
 * @file src/swan/index.js
 * @author renzhonghua@baidu.com
 * @description swan入口
 */

import jsNative from '../js-native';
import {swanInit} from '../swan/swan-init';
import {description} from '../swan/description';
import {swanNative} from '../swan/container';
import {swanMap} from '../swan/map';
import {getMap, getDescription, setEventEmitterHandle, argCombine} from '../utils/common';
import {boxjs} from '../boxjs';
import {isIOS} from '../platform';
// 特殊api
import {getLaunchOptionsSync} from './api/get-launchOptionsSync';
import share from './api/share';

let swanList = ['showToast', 'hideToast', 'showLoading', 'hideLoading', 'showActionSheet', 'showModal',
'chooseImage', 'previewImage', 'navigateToMiniProgram', 'navigateBackMiniProgram',
'getSystemInfo', 'getSystemInfoSync',
'login', 'checkSession', 'getSetting', 'openSetting', 'authorize', 'getUserInfo',
'getLocation', 'vibrateShort', 'vibrateLong', 'getNetworkType', 'onNetworkStatusChange', 'downloadFile', 'uploadFile',
'requestPolymerPayment', 'openShare', 'getSwanId', 'isLoginSync', 'startAccelerometer',
'stopAccelerometer', 'onAccelerometerChange', 'getClipboardData', 'setClipboardData',
'onCompassChange', 'startCompass', 'stopCompass', 'getScreenBrightness', 'setKeepScreenOn',
'setScreenBrightness', 'saveImageToPhotosAlbum'];

// 小游戏独特的api
let specialMap = {
    showShareMenu: {},
    hideShareMenu: {},
    shareAppMessage: {
        proxyHandler: share.shareAppMessage.bind(share)
    },
    onShareAppMessage: {
        proxyHandler: share.onShareAppMessage.bind(share)
    },
    offShareAppMessage: {
        proxyHandler: share.offShareAppMessage.bind(share)
    },
    openShare: {}
};
// 生成小游戏的map
let gameMap = Object.assign(getMap(swanList, swanMap), specialMap);

let specialAsyncDescription = [
    {
        name: 'showShareMenu',
        authority: 'v33/swan',
        path: 'showShareMenu',
        args: []
    },
    {
        name: 'hideShareMenu',
        authority: 'v33/swan',
        path: 'hideShareMenu',
        args: []
    }
];

let specialSyncDescription = [];

// 生成小游戏的Description
let specialDescription = argCombine(specialSyncDescription, specialAsyncDescription);
let gameDescription = getDescription(swanList, description);
gameDescription = [...gameDescription, ...specialDescription];

if (!jsNative._isAddFromNative) {
    swanNative.add(gameDescription);
} else {
    swanNative.add([]);
}

let swan = swanInit(swanNative, {}, gameMap);

// 小游戏特殊api 获取部分appinfo
swan.getLaunchOptionsSync = () => getLaunchOptionsSync(boxjs);

// ios不支持支付 按照之前swan-game-api处理方式 不挂载
if (isIOS()) {
    delete swan.requestPolymerPayment;
}
function init(eventEmitter) {
    setEventEmitterHandle(eventEmitter);
    return {
        swan,
        boxjs
    };
}

module.exports = init;