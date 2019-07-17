/**
 * @file src/swanjs/map.js
 * @author lijia30@baidu.com
 * @description webview上外部使用的端能力
 */
import {getParamsCBName} from '../invoker/funcs';
import {jsonParse, resNeedDecode} from '../utils/parser';
import {navigateToProgramFilter} from '../utils/filter';
import {callShareFunc, postMessage} from './common';
import {isSupportIosMessageHandlers} from '../utils/common';
import $ from '../utils/_core';

const normalAPIList = ['getPushSettingStateSync', 'getNetworkType', 'makePhoneCall', 'openApp', 'setClipboardData',
'setNavigationBarColor', 'openAdWebPage', 'openLocation'];
const needCbAPIList = ['getCommonSysInfo', 'getLocation', 'thirdPartyLogin', 'getPhoneContacts'];


const needCbAPIMap = needCbAPIList.reduce((map, item) => {
    map[item] = {
        paramsCBName: getParamsCBName,
        parser: jsonParse
    };
    return map;
}, {});

const normalAPIMap = normalAPIList.reduce((result, item) => {
    result[item] = {};
    return result;
}, needCbAPIMap);

const specialAPIMap = {
    guidePushSetting: {
        paramsCBName: getParamsCBName,
        parser: jsonParse,
        filter(params) {
            params.source = 'activity';
            return params;
        }
    },
    navigateToSmartProgram: {
        filter(params) {
            params.appid = params.appKey || params.appid || '';
            params.navi = 'naviTo';
            params.url = params.path || '';
            return params;
        }
    },
    login: {
        paramsCBName: getParamsCBName,
        parser: jsonParse,
        filter(params) {
            $.isNumber(params.timeout) || delete params.timeout;
            return params;
        }
    },
    openBdboxWebview: {
        paramsCBName: getParamsCBName,
        parser: jsonParse,
        filter(params) {
            params.parameters = params.parameters ? params.parameters : {};
            params.scheme = params.parameters;
            delete params.parameters;
            params.scheme.upgrade = 0;
            if (params.module === 'wallet') {
                params.scheme.url = 'https://www.baifubao.com/content/mywallet/h5/sdk_page/sdk_quan_manager.html';
            }
            return params;
        }
    },
    previewImage: {
        filter(params) {
            params.from = 'swan';
            return params;
        }
    },
    setNavigationBarTitle: {
        filter(params) {
            if ($.isAndroid) {
                let title = params.title + '';
                title = title.slice(0, 10) + '...';
                params.title = title;
            }
            return params;
        }
    },
    chooseImage: {
        defaultParam: {
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera']
        },
        paramsCBName: getParamsCBName,
        parser: resNeedDecode
    },
    openShare: callShareFunc,
    shareToWeibo: params => {
        callShareFunc(params, 'sinaweibo');
    },
    shareToWeixin: params => {
        callShareFunc(params, 'weixin_friend');
    },
    shareToQQ: params => {
        callShareFunc(params, 'qqfriend');
    },
    shareToWeixinFriends: params => {
        callShareFunc(params, 'weixin_timeline');
    },
    'webView.getEnv': callback => {
        let env = false;
        let iosBridge = '';
        if (isSupportIosMessageHandlers()
            && window.webkit.messageHandlers.BBAMNPJSBridgeWebViewComponent) {
            iosBridge = 'BBAMNPJSBridgeWebViewComponent';
        } else {
            iosBridge = 'bridge';
        }
        if ($.isAndroid && window.Bdbox_aiapps_jsbridge) {
            env = true;
        }
        if (isSupportIosMessageHandlers()
            && window.webkit.messageHandlers[iosBridge]) {
            env = true;
        }
        let res = {
            smartprogram: env
        };
        if ($.isFunction(callback)) {
            callback(res);
        } else {
            return res;
        }
    },
    'webView.postMessage': {
        filter(params = {}) {
            if (params.data === undefined || $.isFunction(params.data)
                || params.data === '' || params.data === false || params.data === null) {
                params.data = {};
            }
            params.data = JSON.stringify(params.data);
            return params;
        }
    },
    'webView.navigateTo': params => {
        let message = {
            type: 'webviewNavigateTo',
            params: params
        };
        postMessage(message);
    },
    'webView.navigateBack': params => {
        let message = {
            type: 'webviewNavigateBack',
            params: params
        };
        postMessage(message);
    },
    'webView.switchTab': params => {
        let message = {
            type: 'webviewSwitchTab',
            params: params
        };
        postMessage(message);
    },
    'webView.reLaunch': params =>  {
        let message = {
            type: 'webviewReLaunch',
            params: params
        };
        postMessage(message);
    },
    'webView.redirectTo': params => {
        let message = {
            type: 'webviewRedirectTo',
            params: params
        };
        postMessage(message);
    }

};

export const swanjsMap = Object.assign(normalAPIMap, specialAPIMap);
