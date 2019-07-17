/**
 * @file src/description/index.js
 * @author renzhonghua@baidu.com
 * @description 从端上获取所有描述信息，在这里分发到swan和boxjs
 */


/* globals _naSwan */

import $ from '../utils/_core';
import {schema, getEnvInfo} from '../utils/scheme-info';
import {getLocalDescList, INVOKE_LIST} from './desc-info';
import {hostName} from '../utils/common';



let allDescription = [];

try {
    if ($.isIOS) {
        allDescription = _naSwan.getAPIs();
    } else {
        for (let i = 0; i < _naSwan.getAPIsIndexLength(); i++) {
            allDescription = allDescription.concat(JSON.parse(_naSwan.getAPIs(i)));
        }
    }
    if (!allDescription.length) {
        allDescription = getLocalDescList();
        console.warn(`dont get apis from ${getEnvInfo()}::::::`);
    }
} catch (e) {
    allDescription = getLocalDescList();
    console.warn(`dont get apis from ${getEnvInfo()}::::::`);
}
// console.log('allDescription:::', JSON.stringify(allDescription))

// 因为端上给的是desc全量，没有区分boxjs上用的，或者swan上用的，需要前端来划分一下。
// boxjs上使用的端能力的部分名单，desc的名字中带有.insert|.update|.remove|webView.这4中不在下面list中。
let boxjsDescriptionList = [
    'getLocalImgData', 'getRegionData', 'getLaunchAppInfo',
    'getSanDataFromActiveSlave', 'getCommonSysInfoSync', 'getSlaveIdSync', 'getAppInfoSync', 'getFormId',
    'setSanIncData2Console', 'setSanFullData2Console',
    'ubcReport', 'statisticEvent', 'performpanel', 'ubcFlowJar', 'statisticFlowJar',
    'openIM', 'openSpringback', 'openAdWebview', 'openApp', 'closeSpringback',
    'installApp4Ad', 'adRequest'
];

if ($.isIOS) {
    boxjsDescriptionList.push('onSwanJSLoaded');
}


// boxjs和swan上都会挂的api，后续会推动组件框架改成从swan上调用，并且把boxjs上的删掉
const allNeedList = [
    'getSystemInfo', 'getSystemInfoSync', 'getStorageSync', 'setStorageSync', 'getUserInfo',
    'getPhoneNumber', 'getNetworkType', 'request', 'openSetting', 'vibrateShort',
    'cancelRequest'
];

const specialList = {
    navigateToSmartProgram: ['navigateToMiniProgram', 'navigateBackMiniProgram',
    'navigateToSmartProgram', 'navigateBackSmartProgram']
};

const noCallbackList = ['getMenuButtonBoundingClientRect', 'ubcReport', 'Sync'];


let classifiedDescriptions = allDescription.reduce((classifiedDescriptions, item) => {
    item.invoke = INVOKE_LIST[item.invoke];
    item.scheme = schema;

    if (!noCallbackList.find(i => item.name.match(i))) {
        item.args.push({name: 'innerCallback', value: 'function'});
    }

    const regx = new RegExp('\\.insert|\\.update|\\.remove|webView\\.|' + hostName + '\\.');

    if (~boxjsDescriptionList.indexOf(item.name) || regx.test(item.name)) {
        if (item.name === 'adWebview.insert') {
            item.name = 'openAdWebPage';
        }
        classifiedDescriptions.boxjsDescription.push(item);

    } else if (~allNeedList.indexOf(item.name)) {
        classifiedDescriptions.boxjsDescription.push(item);
        classifiedDescriptions.swanDescription.push(item);

    } else if (specialList[item.name]) {
        specialList[item.name].forEach(function (name) {
            classifiedDescriptions.swanDescription.push({...item, name});
        });
    } else {
        classifiedDescriptions.swanDescription.push(item);
    }

    return classifiedDescriptions;

}, {
    swanDescription: [],
    boxjsDescription: []
});

module.exports = {
    swanDescription: classifiedDescriptions.swanDescription,
    boxjsDescription: classifiedDescriptions.boxjsDescription
};
