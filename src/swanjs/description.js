/**
 * @file src/swanjs/description.js
 * @author lijia30@baidu.com
 * @description webview上给外部提供的端能力描述
 */
import $ from '../utils/_core';
import {argCombine, isSupportIosMessageHandlers} from '../utils/common';
import {oldInvoke} from '../utils/scheme-info';

let syncList = [
    {
        name: 'getPushSettingStateSync',
        authority: 'v42/swan',
        path: 'getPushSettingStateSync',
        args: []
    }
];

let asyncList = [
    {
        name: 'guidePushSetting',
        authority: 'v39/swan',
        path: 'guidePushSetting',
        args: [
            {name: 'source', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'getNetworkType',
        authority: 'v19/utils',
        path: 'getNetworkType',
        args: []
    },
    {
        name: 'makePhoneCall',
        authority: 'v19/utils',
        path: 'makePhoneCall',
        args: [
            {name: 'phoneNumber', value: 'string='}
        ]
    },
    {
        name: 'openApp',
        authority: 'v26/swan',
        path: 'openApp',
        args: [
            {name: 'open', value: 'string='},
            {name: 'download', value: 'object'}
        ]
    },
    {
        name: 'setClipboardData',
        authority: 'v19/utils',
        path: 'setClipboardData',
        args: [
            {name: 'data', value: 'string='}
        ]
    },
    {
        name: 'setNavigationBarColor',
        authority: 'v19/swan',
        path: 'setNavigationBarColor',
        args: [
            {
                name: 'frontColor',
                value: {
                    oneOf: ['#ffffff', '#000000'],
                    isRequired: true
                }
            },
            {name: 'backgroundColor', value: 'string='},
            {name: 'animation', value: 'object'}
        ]
    },
    {
        name: 'openAdWebPage',
        authority: 'v38/swan',
        path: 'openAdLandingPage',
        args: [{name: 'url', value: 'string='}]
    },
    {
        name: 'getCommonSysInfo',
        authority: 'v29/swan',
        path: 'getCommonSysInfo',
        args: [{name: 'cb', value: 'string='}]
    },
    {
        name: 'getLocation',
        authority: 'v19/swan',
        path: 'getLocation',
        args: [
            {name: 'type', value: 'string'},
            {name: 'altitude', value: 'boolean'},
            {name: 'cb', value: 'string='}


        ]
    },
    {
        name: 'openLocation',
        authority: 'v26/swan/map',
        path: 'openLocation',
        args: [
            {name: 'latitude', value: 'string='},
            {name: 'longitude', value: 'string='}
        ]
    },
    {
        name: 'thirdPartyLogin',
        authority: 'v40/swan',
        path: 'thirdPartyLogin',
        args: [
            {name: 'cb', value: 'string='},
            {name: 'timeout', value: 'string'},
            {
                name: 'type',
                value: {
                    oneOf: ['weibo', 'qq', 'weixin', 'sms']
                }
            }
        ]
    },
    {
        name: 'getPhoneContacts',
        authority: 'v40/swan',
        path: 'getPhoneContacts',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'navigateToSmartProgram',
        authority: 'v19/swan',
        path: 'launch',
        args: [
            {name: 'appid', value: 'string='},
            {name: 'url', value: 'string'},
            {name: 'navi', value: 'string'},
            {name: 'from', value: 'string'},
            {name: 'extraData', value: 'string|Object'}
        ]
    },
    {
        name: 'login',
        authority: 'v19/swan',
        path: 'login',
        args: [
            {name: 'cb', value: 'string='},
            {name: 'timeout', value: 'string'}
        ]
    },
    {
        name: 'openBdboxWebview',
        authority: 'v36/swan',
        path: 'pageTransition',
        args: [
            {name: 'module', value: 'string='},
            {name: 'action', value: 'string'},
            {name: 'scheme', value: 'object'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'previewImage',
        authority: 'v19/utils',
        path: 'previewImage',
        args: [
            {name: 'urls', value: 'string[]='},
            {name: 'current', value: 'string'}
        ]
    },
    {
        name: 'setNavigationBarTitle',
        authority: 'v19/swan',
        path: 'setNavigationBarTitle',
        args: [
            {name: 'title', value: 'string='}
        ]
    },
    {
        name: 'chooseImage',
        authority: 'v22/swan',
        path: 'chooseImage',
        args: [
            {name: 'count', value: 'string'},
            {name: 'sizeType', value: 'string[]'},
            {name: 'sourceType', value: 'string[]'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'webView.postMessage',
        authority: 'v33/swan',
        path: 'webviewPostMessage',
        args: [
            {name: 'data', value: 'string='}
        ]
    },
    {
        name: 'postMessage',
        authority: 'v19/swan',
        path: 'postMessage',
        args: [
            {name: 'webviewid', value: 'string='},
            {name: 'message', value: 'string='}
        ]
    }

];
let iosBridge = '';
if (isSupportIosMessageHandlers() && window.webkit.messageHandlers.BBAMNPJSBridgeWebViewComponent) {
    iosBridge = 'BBAMNPJSBridgeWebViewComponent';
} else {
    iosBridge = 'bridge';
}
asyncList.forEach(item => {
    item.handler = $.isIOS ? iosBridge : 'Bdbox_android_jsbridge';
});
asyncList.push({
    name: 'openShare',
    authority: 'callShare',
    handler: $.isIOS ? iosBridge : 'Bdbox_android_utils',
    invoke: oldInvoke,
    path: $.isIOS ? '' : 'callShare',
    args: [
        {name: 'title', value: 'string'},
        {name: 'content', value: 'string'},
        {name: 'imageUrl', value: 'string'},
        {name: 'path', value: 'string'},
        {name: 'pannel', value: 'Array'},
        {name: 'linkUrl', value: 'string='},
        {name: 'mediaType', value: 'string'},
        {name: 'categoryData', value: 'object='},
        {name: 'type', value: 'string='},
        {name: 'iconUrl', value: 'string='},
        {name: 'source', value: 'string='},
        {name: 'successCallback', value: 'string='},
        {name: 'errorCallback', value: 'string='},
        {name: 'shareUrl', value: 'string'},
        {name: 'minver', value: 'string'},
        {name: 'command', value: 'object'},
        {name: 'banner', value: 'object'},
        {name: 'source', value: 'string'}
    ]
});
export const descriptions = argCombine(syncList, asyncList);

