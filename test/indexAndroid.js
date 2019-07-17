/**
 * @file test/index
 * @author lijia30@baidu.com
 * @description 单测入口文件
 */
import {androidDispatchSync, methodAsync, fakeAndroidUa, androidPostMessage} from './utils/mockMethod';
import {apiList} from './utils/constant';

fakeAndroidUa();
window.Bdbox_aiapps_jsbridge = {
    dispatch: androidDispatchSync,
    setData: androidPostMessage
};

window.Bdbox_android_jsbridge = {
    dispatch: methodAsync
};

window.V8Transport = {
    bindId(){},
    setData(webviewId, message) {
        androidPostMessage(webviewId, message)
        return {
            status: "0",
            message: "调用成功"
        };
    }
};

require('./specs/andr-data-transport-webview.spec');

apiList.forEach(key => {
     require(`./specs/${key}`);
});


