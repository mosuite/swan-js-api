/**
 * @file 通信能力 postMessage
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

/* global _naSwan */
import {isAndroid} from '../platform';
import {hasNoGlobal, globalNative} from '../utils/global';
import {andrSetData} from './andr-data-transport';

export default isAndroid() ? andrSetData : (webviewid, message) => {
    const globalEnv = hasNoGlobal ? window.webkit.messageHandlers : _naSwan;
    return 'BBAMNPPostMessageBridge' in globalEnv ? globalEnv.BBAMNPPostMessageBridge.postMessage({
        webviewid: webviewid + '',
        message: escape(JSON.stringify(message))
    }) : globalEnv.bridge.postMessage({
        webviewid: webviewid + '',
        message: escape(JSON.stringify(message))
    });
};
