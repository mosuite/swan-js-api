/**
 * @file test/index
 * @author lijia30@baidu.com
 * @description 单测入口文件
 */
import {iosPrompt, fakeIOSUa, methodAsync, iosPostMessage} from './utils/mockMethod';
import {apiList} from './utils/constant';

fakeIOSUa();
window.prompt = iosPrompt;
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

apiList.forEach(key => {
    require(`./specs/${key}`);
});

