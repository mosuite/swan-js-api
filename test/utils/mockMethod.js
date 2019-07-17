/**
 * @file util/mockMethod
 * @author lijia30@baidu.com
 * @description  mock端行为
 */

import schemeMap from './scheme-map';
import {iosUA, androidUA, callbackRes} from './constant';
import SpecialScheme from './special-scheme';
/**
 * mock android同步调用，拦截端能力并模拟返回
 * @param  {string} schema
 * @return {Obejct} 模拟端返回值
 *
 */


const loseParam = key => {
    return {
        status: 0,
        message: '缺少参数',
        data: {
            value: key
        }
    };
};

const specialScheme = new SpecialScheme();


const getSchemeParmas = scheme => {
    let schemeArr= scheme.split('?');
    let schemeStr = schemeArr[0];
    let schemeQuery = decodeURIComponent(schemeArr[1]);
    let params = null;
    let callback = /callback=([a-z":,_A-Z0-9]+)/.exec(schemeQuery)[1];
    let paramsArr = /params=({.+})&/.exec(schemeQuery);
    if(paramsArr) {
        params = JSON.parse(paramsArr[1]);
    }
    return {
        params,
        schemeStr,
        callback
    }

}

const androidDispatchSync = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    console.log(222222222);
    if (schemeMap[schemeStr].params) {
        let noincludeKey = schemeMap[schemeStr].params.find(key =>!Object.keys(params).includes(key));
        if (noincludeKey) {
            return JSON.stringify(loseParam(noincludeKey));
        }
    }
    return JSON.stringify(schemeMap[schemeStr].data);
};

const methodAsync = (scheme) => {
    let {params, schemeStr, callback} = getSchemeParmas(scheme);
    if(specialScheme._isArrayBufferRequest(schemeStr, params)) {
        window[callback](JSON.stringify(callbackRes));
        return  window[params.cb](JSON.stringify(schemeMap[schemeStr].arrayBufferData));
    }

    if (schemeStr === 'baiduboxapp://swanAPI/aiRequest' && params.api) {
        schemeStr += params.api;
    }
    console.log(scheme);
    if (params && params.cb) {
        window[callback](JSON.stringify(callbackRes));
        window[params.cb](JSON.stringify(schemeMap[schemeStr].data));
    } else {
        window[callback](JSON.stringify(schemeMap[schemeStr].data));
    }
};


const iosPrompt = scheme => {
    let iosScheme = JSON.parse(scheme).args[0];
    console.log(111111111);
    const {params, schemeStr, callback} = getSchemeParmas(iosScheme);
    if (schemeMap[schemeStr].params) {
        let noincludeKey = schemeMap[schemeStr].params.find(key =>!Object.keys(params).includes(key));
        if (noincludeKey) {
            return JSON.stringify(loseParam(noincludeKey));
        }
    }
    return JSON.stringify(schemeMap[schemeStr].data);
};

const iosPostMessage = params => {
    console.log('ios', params)
    let event = document.createEvent('HTMLEvents');
    event.initEvent("message", true, true);
    event.eventType = 'message';
    event.webviewid = params.webviewid;
    event.message = unescape(params.message);
    document.dispatchEvent(event);
}

const androidPostMessage = (webviewid, message) => {
    let event = document.createEvent('HTMLEvents');
    console.log('params', message)
    event.initEvent("message", true, true);
    event.eventType = 'message';
    event.webviewid = webviewid;
    event.message = message
    document.dispatchEvent(event);
}



const fakeNavigatorProp = (type, val) => {
    Object.defineProperty(navigator, type, {
        value: val,
        writable: true
    });
}

const fakeIOSUa = () => {
    fakeNavigatorProp('userAgent', iosUA);
}

const fakeAndroidUa = () => {
    fakeNavigatorProp('userAgent', androidUA);
}

const mockMasterManager = () => {
    window.masterManager = {
        appPath: '/Users/sylvia/Library/Developer/CoreSimulator/Devices/6B73CCDF-5F1E-4688-8F74-67532E1ADFC8/data/Containers/',
        uri: 'page/index',
        navigator: {
            history: {
                getTopSlaves: () => {
                    return [{
                        uri: 'pages/test/test',
                        getSlaveId: () => {
                            return 2;
                        },
                        getFrontUri: function() {
                            return this.uri;
                        },
                        getCurrentChildren: () => {
                            return {
                                accessUri: 'api unit test'
                            }
                        }
                    }]
                }
            }
        },
        getPathFromFront: (path) => {
            return path
        }
    }
}


export {
    androidDispatchSync,
    methodAsync,
    fakeIOSUa,
    fakeAndroidUa,
    fakeNavigatorProp,
    iosPrompt,
    getSchemeParmas,
    mockMasterManager,
    iosPostMessage,
    androidPostMessage
}