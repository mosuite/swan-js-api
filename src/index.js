/**
 * @file src/index.js
 * @author renzhonghua@baidu.com
 * @description 入口
*/
import {boxjs} from './boxjs';
import {swan} from './swan';
import {events} from './utils/event';
import {parseMessage} from './utils/parser';
import {global, hasNoGlobal} from './utils/global';
import {addTimesLog, addDurationLog} from './utils/ubclog';
import postMessage from './utils/post-message';
import {getSlaveId} from './utils/common';
import {andrBindMessage} from './utils/andr-data-transport';


const noop = () => {};
/* global _naSwan */
const globalEnv = hasNoGlobal ? document : _naSwan;

class SwanInterface {
    constructor() {
        // 环境相关的事件
        this.handlerQueue = [];
        this.loadJsQueue = {};
        this.boxjs = boxjs;
        this.swan = swan;
        this.communicator = events;
        this.messageHandler = [];
        this.bindLogEvent();
        this.bindWebViewRouteEvents();
        setTimeout(this.bindAppInfo.bind(this), 0);
    }

    /**
     * 监听 appInfo 相关事件
     * master 监听 getAppInfo
     * slave 监听 responseGetAppInfo
     *
     * @return {Object} this
     */
    bindAppInfo() {
        let self = this;

        // master
        if (typeof masterManager !== 'undefined') {
            return self.onMessage(message => {
                message.type === 'getAppInfo' && postMessage(getSlaveId(), {
                    type: 'responseGetAppInfo',
                    value: {
                        appInfo: self.boxjs.data.get({name: 'swan-appInfoSync'})
                    }
                });
            });
        }

        // slave
        self.onMessage(message => {
            if (message.type === 'responseGetAppInfo') {
                self.communicator.emit('responseGetAppInfo', message.value.appInfo);
            }
        });
    }
    bindLogEvent() {
        this.communicator.on('addTimesLog', event => {
            addTimesLog(event);
        });
        this.communicator.on('addDurationLog', event => {
            addDurationLog(event);
        });
    }

    /**
     *
     * 监听 web-view 组件中页面的路由事件
     *
     */
    bindWebViewRouteEvents() {
        this.onMessage(message => {
            if (message && message.type) {
                let apiName = message.type.split('webview')[1];
                if (apiName) {
                    apiName = apiName.replace(/(^.)/g, w => w.toLowerCase());
                    let params = message.params;
                    if (apiName === 'openShare' && typeof message.params === 'string') {
                        params = JSON.parse(unescape(message.params));
                    }
                    global.swan[apiName](params);
                }
            }
        });
    }
    // 由于master和slave上都公用一份boxjs，所以，对外暴露接口，由外部环境决定是否执行
    adaptMaster() {
        this.bindSlaveLoadedEvents();
    }
    bindSlaveLoadedEvents() {
        this.onMessage(message => {
            if (message && message.type && message.type === 'slaveLoaded') {
                this.communicator.fireMessage({
                    type: 'slaveLoaded' + message.slaveId,
                    message
                });
            }
        });
    }
    invoke(namespace, ...args) {
        return this[namespace].call(this, ...args);
    }
    loadJs({uri, eventObj, success = noop}) {
        return new Promise((resolve, reject) => {
            const wvID = eventObj.wvID || '0';
            this.communicator.onMessage('slaveLoaded' + wvID, e => {
                success(e.message);
                resolve(e.message);
            }, {listenPreviousEvent: true});
        });
    }
    init() {
        return this.boxjs.webView.init();
    }
    navigateTo(params) {
        return this.boxjs.webView.navigateTo({
            url: params.url || '',
            initData: params.initData || {},
            startTime: params.startTime,
            callback: res => {
                // 如果走到这里，说明当前小程序做了分包逻辑
                try {
                    res = JSON.parse(res);
                } catch (e) {
                    console.log(e);
                }
                if (+res.status === 0) {
                    res.data && params.success && params.success(res.data);
                } else {
                    params.fail && params.fail(res);
                }
            }
        })
        .then(res => {
            // 当小程序包中，没有设置分包逻辑，开发者把页面都打在一个包中，就会走到一级回调这里。
            // 由于无法通过手百版本判断是否分包，故使用返回值中必有项作为判断依据。
            if (res.wvID) {
                params.success && params.success(res);
            }
        })
        .catch(err => {
            params.fail && params.fail(err);
        })
        .then(params.complete);
    }
    redirectTo(params) {
        return this.boxjs.webView.redirectTo({
            url: params.url || '',
            initData: params.initData || {},
            startTime: params.startTime,
            callback: res => {
                // 如果走到这里，说明当前小程序做了分包逻辑
                try {
                    res = JSON.parse(res);
                } catch (e) {
                    console.log(e);
                }
                if (+res.status === 0) {
                    res.data && params.success && params.success(res.data);
                } else {
                    params.fail && params.fail(res);
                }
            }
        })
        .then(res => {
            // 当小程序包中，没有设置分包逻辑，开发者把页面都打在一个包中，就会走到一级回调这里。
            // 由于无法通过手百版本判断是否分包，故使用返回值中必有项作为判断依据。
            if (res.wvID) {
                params.success && params.success(res);
            }
        })
        .catch(err => {
            params.fail && params.fail(err);
        })
        .then(params.complete);
    }
    switchTab(params) {
        return this.boxjs.webView.switchTab({
            url: params.url || ''
        })
        .then(res => {
            params.success && params.success(res);
            return res;
        })
        .catch(params.fail)
        .then(params.complete);
    }
    navigateBack(params) {
        return this.boxjs.webView.navigateBack({
            delta: params.delta || 1,
            startTime: params.startTime
        })
        .then(res => {
            params.success && params.success(res);
            return res;
        })
        .catch(params.fail)
        .then(params.complete);
    }
    reLaunch(params) {
        return this.boxjs.webView.reLaunch({
            url: params.url || '',
            initData: params.initData || {},
            startTime: params.startTime,
            callback: res => {
                // 如果走到这里，说明当前小程序做了分包逻辑
                try {
                    res = JSON.parse(res);
                } catch (e) {
                    console.log(e);
                }
                if (+res.status === 0) {
                    res.data && params.success && params.success(res.data);
                } else {
                    params.fail && params.fail(res);
                }
            }
        })
        .then(res => {
            // 当小程序包中，没有设置分包逻辑，开发者把页面都打在一个包中，就会走到一级回调这里。
            // 由于无法通过手百版本判断是否分包，故使用返回值中必有项作为判断依据。
            if (res.wvID) {
                params.success && params.success(res);
            }
        })
        .catch(err => {
            params.fail && params.fail(err);
        })
        .then(params.complete);
    }
    bind(type, cb) {
        globalEnv.addEventListener(type, cb, false);
        return this;
    }
    unbind(type, cb) {
        globalEnv.removeEventListener(type, cb, false);
        return this;
    }
    postMessage(webviewid, message) {
        return new Promise((resolve, reject) => {
            resolve(postMessage(webviewid, message));
        });
    }

    /**
     * 监听  message 事件(once)
     *
     * @param  {Function} callback 回调
     * @return {Object}            this
     */
    onMessage(callback) {
        const onMessageCb = ifV8TransPort => data => {
            let msg = ifV8TransPort ? data : data.message;
            if (msg) {
                let message = parseMessage(msg);
                ifV8TransPort && this.communicator.emit(message.type, message);
                this.messageHandler.forEach(handler => {
                    handler(message);
                });
            }
        };
        if (!this.messageHandler.length) {
            // 为了兼容web-view组件中旧版本postMessage方法，在此处做两份监听
            // 通过bindId和on('message')方法绑定的handler，只要有一个触发消息就能成功接收
            let bindId = boxjs.data.get({name: 'swan-slaveIdSync'}).slaveId || 'master';
            andrBindMessage(bindId, onMessageCb(true));
            this.bind('message', onMessageCb(false));
        }
        typeof callback === 'function' && this.messageHandler.push(callback);

        return this;
    }
    onRoute(cb) {
        this.bind('route', e => {
            cb && cb(e);
        });
        return this;
    }
    getAppConfig() {
        try {
            return JSON.parse(global.appConfig);
        }
        catch (e) {
            console.error(e);
            return {};
        }
    }
}

export default new SwanInterface();
