/**
 * @file util/scheme-map
 * @author lijia30@baidu.com
 * @description  const变量
 */
import {methodAsync, androidDispatchSync, androidPostMessage, iosPostMessage} from './mockMethod';
const functionList = [
    '_naSwan.spec',
    '_core.spec',
    'common.spec',
    'component-operator.spec',
    'parse.spec',
    'invoker.spec',

]
const apiList = [
    'functions.spec',
    'media.spec',
    'boxjs_extend.spec',
    // 'inner.spec',
    // 'swanInner.spec',
    'complex.spec',
    'ubc.spec',
    'request.spec',
    'ai.spec',
    'openAppByUrl.spec',
    'boxjs_last.spec',
    'openSmartProgram.spec',
    'boxjs_webview.spec',
    'canvas.spec',
    'openInterface.spec',
    'picker.spec',
    'boxjs_storage.spec',
    'storage.spec',
    'device.spec',
    'system.spec',
    'post-message.spec',
    'accelerometer.spec',
    'addPhoneContact.spec',
    'animation-view.spec',
    'ar-camera.spec',
    'background.spec',
    'boxjs_canvas.spec',
    'button.spec',
    'camera.spec',
    'cover-view.spec',
    'coverImage.spec',
    'deviceMotion.spec',
    'ext.spec',
    'file.spec',
    'input.spec',
    'interface.spec',
    'location.spec',
    'makePhoneCall.spec',
    'map.spec',
    'navigate.spec',
    'navigateBar.spec',
    'openData.spec',
    'openLive.spec',
    'pullDownRefresh.spec',
    'platform.spec',
    'detect.spec',
    'tabbar.spec',
    'textarea.spec',
    'ui.spec',
    'uploadAndDownloadFile.spec',
    'vibrateLong.spec',
    'websocket.spec',
    'webinfo.spec',
    'version.spec',
    'recommend.spec',
    'get-version.spec'
];

const iosUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79 swan/2.2.0 swan-baiduboxapp/11.5.0.0 baiduboxapp/11.5.0.0 (Baidu; P2 11.4)';
const androidUA = 'Mozilla/5.0 (Linux; Android 7.0; EVA-DL00 Build/HUAWEIEVA-DL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36 swan/2.2.0 swan-baiduboxapp/11.5.0.0 baiduboxapp/11.5.0.0 (Baidu; P1 7.0)';

const callbackRes = {
    status: 0,
    message: '调起成功'
};

const normalMethod = () => {
    window.Bdbox_aiapps_jsbridge = {
        dispatch: androidDispatchSync,
        setData: androidPostMessage
    };

    window.Bdbox_android_jsbridge = {
        dispatch: methodAsync
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: methodAsync
            },
            BBAMNPPostMessageBridge: {
                postMessage: iosPostMessage
            }
        }

    };
};


export {
    apiList,
    functionList,
    iosUA,
    androidUA,
    callbackRes,
    normalMethod
}