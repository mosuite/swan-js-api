/**
 * @file spec/media
 * @author lijia30@baidu.com
 * @description  媒体相关API接口
 */

import $ from '../../src/utils/_core';
import {boxjs} from '../../src/boxjs';
import {describe} from 'mocha';
import {normalMethod} from '../utils/constant';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';
const androidUbcReport = scheme => {
        const res = {status: 0, message: 'success', data: {}};
        window[JSON.parse(scheme)['success']](res);
};
const iosUbcReport = () => {
    console.log({status: 0, message: '调用成功'});
};
const ubcReportMethod = () => {
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: iosUbcReport
            }
        }
    };
    window.Bdbox_android_utils = {
        ubcEvent: androidUbcReport
    }
};

describe('API【insertWebView】测试', () => {
    it(`【swan.boxjs.webView.insert】${system}端正常调用`, done => {
        boxjs.webView.insert({
            slaveId: 'slaveId',
            viewId: 'viewId',
            parentId: 'parentId',
            hide: true,
            src: 'src'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.insert】${system}端正常调用, 缺少slaveId,viewId,parentId,hide,src`, done => {
        boxjs.webView.insert({
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.insert】${system}端正常调用, complete函数执行`, done => {
        boxjs.webView.insert({
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.webView.insert】${system}端异常调用, slaveId类型异常`, done => {
        boxjs.webView.insert({
            slaveId: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.insert】${system}端异常调用, viewId类型异常`, done => {
        boxjs.webView.insert({
            viewId: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.insert】${system}端异常调用, parentId类型异常`, done => {
        boxjs.webView.insert({
            parentId: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.insert】${system}端异常调用, hide类型异常`, done => {
        boxjs.webView.insert({
            hide: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "boolean"');
            done();
        });
    });
    it(`【swan.boxjs.webView.insert】${system}端异常调用, src类型异常`, done => {
        boxjs.webView.insert({
            src: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]src type error. must be "string"');
            done();
        });
    });
});

describe('API【updateWebView】测试', () => {
    it(`【swan.boxjs.webView.update】${system}端正常调用`, done => {
        boxjs.webView.update({
            slaveId: 'slaveId',
            viewId: 'viewId',
            parentId: 'parentId',
            hide: true,
            src: 'src'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.update】${system}端正常调用, 缺少slaveId,viewId,parentId,hide,src`, done => {
        boxjs.webView.update({
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.update】${system}端正常调用, complete函数执行`, done => {
        boxjs.webView.update({
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.webView.update】${system}端异常调用, slaveId类型异常`, done => {
        boxjs.webView.update({
            slaveId: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.update】${system}端异常调用, viewId类型异常`, done => {
        boxjs.webView.update({
            viewId: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.update】${system}端异常调用, parentId类型异常`, done => {
        boxjs.webView.update({
            parentId: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.update】${system}端异常调用, hide类型异常`, done => {
        boxjs.webView.update({
            hide: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "boolean"');
            done();
        });
    });
    it(`【swan.boxjs.webView.update】${system}端异常调用, src类型异常`, done => {
        boxjs.webView.update({
            src: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]src type error. must be "string"');
            done();
        });
    });
});

describe('API【removeWebView】测试', () => {
    it(`【swan.boxjs.webView.remove】${system}端正常调用`, done => {
        boxjs.webView.remove({
            slaveId: 'slaveId',
            viewId: 'viewId',
            parentId: 'parentId'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.remove】${system}端正常调用, 缺少slaveId,viewId,parentId,hide,src`, done => {
        boxjs.webView.remove({
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.remove】${system}端正常调用, complete函数执行`, done => {
        boxjs.webView.remove({
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.webView.remove】${system}端异常调用, slaveId类型异常`, done => {
        boxjs.webView.remove({
            slaveId: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.remove】${system}端异常调用, viewId类型异常`, done => {
        boxjs.webView.remove({
            viewId: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.remove】${system}端异常调用, parentId类型异常`, done => {
        boxjs.webView.remove({
            parentId: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId type error. must be "string"');
            done();
        });
    });
});

describe('API【navigateTo】测试', () => {
    it(`【swan.boxjs.webView.navigateTo】${system}端正常调用`, done => {
        boxjs.webView.navigateTo({
            url: 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9436195075114961102%22%7D&n_type=0&p_from=1',
            initData: {initData: 'initData'},
            cb: 'cb'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.navigateTo】${system}端正常调用, 缺少initData字段`, done => {
        boxjs.webView.navigateTo({
            url: 'url',
            cb: 'cb'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.navigateTo】${system}端正常调用, complete函数执行`, done => {
        boxjs.webView.navigateTo({
            url: 'url',
            cb: 'cb'
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.webView.navigateTo】${system}端异常调用, url类型异常`, done => {
        boxjs.webView.navigateTo({
            url: [1, 4],
            cb: 'cb'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.navigateTo】${system}端异常调用, cb类型异常`, done => {
        boxjs.webView.navigateTo({
            url: 'url',
            cb: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.navigateTo】${system}端异常调用, initData类型异常`, done => {
        boxjs.webView.navigateTo({
            url: 'url',
            cb: 'cb',
            initData: ''
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]initData type error. must be "Object"');
            done();
        });
    });
    it(`【swan.boxjs.webView.navigateTo】${system}端异常调用, 缺少url`, done => {
        boxjs.webView.navigateTo({
            cb: 'cb'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url is required.');
            done();
        });
    });
    it(`【swan.boxjs.webView.navigateTo】${system}端异常调用, 缺少cb`, done => {
        boxjs.webView.navigateTo({
            url: 'url'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb is required.');
            done();
        });
    });
});

describe('API【navigateBack】测试', () => {
    it(`【swan.boxjs.webView.navigateBack】${system}端正常调用`, done => {
        boxjs.webView.navigateBack({
            delta: 'delta'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.navigateBack】${system}端正常调用, complete函数执行`, done => {
        boxjs.webView.navigateBack({
            delta: 'delta'
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.webView.navigateBack】${system}端异常调用, delta类型异常`, done => {
        boxjs.webView.navigateBack({
            delta: [1, 4]
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]delta type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.navigateBack】${system}端异常调用, 缺少delta`, done => {
        boxjs.webView.navigateBack({
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]delta is required.');
            done();
        });
    });
});

describe('API【redirectTo】测试', () => {
    it(`【swan.boxjs.webView.redirectTo】${system}端正常调用`, done => {
        boxjs.webView.redirectTo({
            url: 'url',
            cb: 'cb',
            initData: {}
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.redirectTo】${system}端正常调用, 缺少initData`, done => {
        boxjs.webView.redirectTo({
            url: 'url',
            cb: 'cb'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.redirectTo】${system}端正常调用, complete函数执行`, done => {
        boxjs.webView.redirectTo({
            url: 'url',
            cb: 'cb'
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.webView.redirectTo】${system}端异常调用, url类型异常`, done => {
        boxjs.webView.redirectTo({
            url: [1, 4],
            cb: 'cb'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.redirectTo】${system}端异常调用, cb类型异常`, done => {
        boxjs.webView.redirectTo({
            url: 'url',
            cb: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.redirectTo】${system}端异常调用, initData类型异常`, done => {
        boxjs.webView.redirectTo({
            url: 'url',
            cb: 'cb',
            initData: ''
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]initData type error. must be "Object"');
            done();
        });
    });
    it(`【swan.boxjs.webView.redirectTo】${system}端异常调用, 缺少url`, done => {
        boxjs.webView.redirectTo({
            cb: 'cb'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url is required.');
            done();
        });
    });
    it(`【swan.boxjs.webView.redirectTo】${system}端异常调用, 缺少cb`, done => {
        boxjs.webView.redirectTo({
            url: 'url'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb is required.');
            done();
        });
    });
});

describe('API【reLaunch】测试', () => {
    it(`【swan.boxjs.webView.reLaunch】${system}端正常调用`, done => {
        boxjs.webView.reLaunch({
            url: 'url',
            cb: 'cb',
            initData: {}
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.reLaunch】${system}端正常调用, 缺少initData字段`, done => {
        boxjs.webView.reLaunch({
            url: 'url',
            cb: 'cb'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.reLaunch】${system}端正常调用, complete函数执行`, done => {
        boxjs.webView.reLaunch({
            url: 'url',
            cb: 'cb'
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.webView.reLaunch】${system}端异常调用, url类型异常`, done => {
        boxjs.webView.reLaunch({
            url: [1, 4],
            cb: 'cb'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.reLaunch】${system}端异常调用, cb类型异常`, done => {
        boxjs.webView.reLaunch({
            url: 'url',
            cb: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.reLaunch】${system}端异常调用, initData类型异常`, done => {
        boxjs.webView.reLaunch({
            url: 'url',
            cb: 'cb',
            initData: ''
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]initData type error. must be "Object"');
            done();
        });
    });
    it(`【swan.boxjs.webView.reLaunch】${system}端异常调用, 缺少url`, done => {
        boxjs.webView.reLaunch({
            cb: 'cb'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url is required.');
            done();
        });
    });
    it(`【swan.boxjs.webView.reLaunch】${system}端异常调用, 缺少cb`, done => {
        boxjs.webView.reLaunch({
            url: 'url'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb is required.');
            done();
        });
    });
});

describe('API【switchTab】测试', () => {
    it(`【swan.boxjs.webView.switchTab】${system}端正常调用`, done => {
        boxjs.webView.switchTab({
            url: 'url'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.switchTab】${system}端正常调用, 缺少url字段`, done => {
        boxjs.webView.switchTab({
            url: 'url'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.webView.switchTab】${system}端正常调用, complete函数执行`, done => {
        boxjs.webView.switchTab({
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.webView.switchTab】${system}端异常调用, url类型异常`, done => {
        boxjs.webView.switchTab({
            url: [1, 4]
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.webView.switchTab】${system}端异常调用, 缺少url`, done => {
        boxjs.webView.switchTab({
            cb: 'cb'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url is required.');
            done();
        });
    });
});

describe('API【getSystemInfo】测试', () => {
    it(`【swan.boxjs.getSystemInfo】${system}端正常调用`, done => {
        boxjs.device.systemInfo().then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.getSystemInfo】${system}端正常调用, complete函数执行`, done => {
        boxjs.device.systemInfo().then(() => {
        }).finally(() => {
            done();
        });
    });
});

describe('API【getUserInfo】测试', () => {
    it(`【swan.boxjs.getUserInfo】${system}端正常调用`, done => {
        boxjs.data.get({name: 'swan-userInfo', data: {
            cb: 'cb'
        }}).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.getUserInfo】${system}端正常调用, 缺少cb字段`, done => {
        boxjs.data.get({name: 'swan-userInfo'
        }).catch(err => {
                expect(err.message).to.be.equal('[jsNative Argument Error]cb is required.');
                done();
            });
        });
    it(`【swan.boxjs.getUserInfo】${system}端正常调用, complete函数执行`, done => {
        boxjs.data.get({name: 'swan-userInfo'
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.getUserInfo】${system}端异常调用, cb类型异常`, done => {
        boxjs.data.get({name: 'swan-userInfo', data: {
            cb: [1, 4]
        }}).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb type error. must be "string"');
            done();
        });
    });
});



describe('API【getPhoneNumber】测试', () => {
    it(`【swan.boxjs.data.get】${system}端正常调用`, done => {
        boxjs.data.get({
            name: 'swan-phoneNumber',
            data: {
                cb: 'cb'
            }}).then(res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            });
    });
    it(`【swan.boxjs.data.get】${system}端正常调用, 缺少cb字段`, done => {
        boxjs.data.get({
            name: 'swan-phoneNumber'
            }).catch(err => {
                expect(err.message).to.be.equal('[jsNative Argument Error]cb is required.');
                done();
            });
    });
    it(`【swan.boxjs.data.get】${system}端正常调用, complete函数执行`, done => {
        boxjs.data.get({
            name: 'swan-phoneNumber'
            }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.data.get】${system}端异常调用, cb类型异常`, done => {
        boxjs.data.get({
            name: 'swan-phoneNumber',
            data: {
                cb: [1, 4]
            }}).then(res => {
            console.log(res);
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb type error. must be "string"');
            done();
        });
    });
});

describe('API【getFormId】测试', () => {
    it(`【swan.boxjs.getFormId】${system}端正常调用`, done => {
        boxjs.data.get({
            name: 'swan-formId'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.getFormId】${system}端正常调用, 缺少getFormId`, done => {
        boxjs.data.get({
            name: 'swan-formId'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.getFormId】${system}端正常调用, complete函数执行`, done => {
        boxjs.data.get({
            name: 'swan-formId'
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.getFormId】${system}端异常调用, cb类型异常`, done => {
        boxjs.data.get({
            name: 'swan-formId',
            data: {
                cb: [1, 4]
            }}).catch(err => {
                expect(err).to.be.a('Error');
                expect(err.message).to.be.equal('[jsNative Argument Error]cb type error. must be "string"');
                done();
            });
    });
});

describe('API【getNetworkType】测试', () => {
    it(`【swan.boxjs.device.getNetworkType】${system}端正常调用`, done => {
        boxjs.device.networkType().then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.getNetworkType】${system}端正常调用, complete函数执行`, done => {
        boxjs.device.networkType().then(() => {
        }).finally(() => {
            done();
        });
    });
});

describe('API【openSetting】测试', () => {
    it(`【swan.boxjs.openSetting】${system}端正常调用`, done => {
        boxjs.ui.open({
            name: 'swan-setting',
            data: {
                cb: 'cb'
            }}).then(res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            });
    });
    it(`【swan.boxjs.openSetting】${system}端正常调用, complete函数执行`, done => {
        boxjs.ui.open({
            name: 'swan-setting',
            data: {
                cb: 'cb'
            }}).then(() => {
            }).finally(() => {
                done();
            });
    });
    it(`【swan.boxjs.openSetting】${system}端异常调用, 缺少cb参数`, done => {
        boxjs.ui.open({
            name: 'swan-setting'
        }).then(res => {
            console.log(res);
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb is required.');
            done();
        });
    });
    it(`【swan.boxjs.openSetting】${system}端异常调用, cb类型异常`, done => {
        boxjs.ui.open({
            name: 'swan-setting',
            data: {cb: [1, 4]}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb type error. must be "string"');
            done();
        });
    });
});

describe('API【openIM】测试', () => {
    it(`【swan.boxjs.openIM】${system}端正常调用`, done => {
        boxjs.ui.open({
            name: 'swan-IM',
            data: {appKey: ' appKey'
        }}).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.openIM】${system}端正常调用, complete函数执行`, done => {
        boxjs.ui.open({
            name: 'swan-IM'
        }).then(res => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.openIM】${system}端异常调用, 缺少appKey参数`, done => {
        boxjs.ui.open({
            name: 'swan-IM'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]appKey is required.');
            done();
        });
    });
    it(`【swan.boxjs.openIM】${system}端异常调用, appKey类型异常`, done => {
        boxjs.ui.open({
            name: 'swan-IM',
            data: {appKey: [1, 4]
        }}).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]appKey type error. must be "string"');
            done();
        });
    });
});

describe('API【vibrateShort】测试', () => {
    it(`【swan.boxjs.vibrateShort】${system}端正常调用`, done => {
        boxjs.device.vibrateShort().then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.vibrateShort】${system}端正常调用, complete函数执行`, done => {
        boxjs.device.vibrateShort({
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
});

describe('API【openSpringback】测试', () => {
    it(`【swan.boxjs.openSpringback】${system}端正常调用`, done => {
        boxjs.ui.open({
            name: 'swan-springback',
            data: {cb: 'cb'}
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.openSpringback】${system}端正常调用, complete函数执行`, done => {
        boxjs.ui.open({
            name: 'swan-springback'
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
});

describe('API【closeSpringback】测试', () => {
    it(`【swan.boxjs.closeSpringback】${system}端正常调用`, done => {
        boxjs.ui.close({
            name: 'swan-springback'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.openSpringback】${system}端正常调用, complete函数执行`, done => {
        boxjs.ui.close({
            name: 'swan-springback'
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
});

describe('API【openAdWebPage】测试', () => {
    it(`【swan.boxjs.openAdWebPage】${system}端正常调用`, done => {
        boxjs.ui.open({
            name: 'swan-adWebPage',
            data: {url: 'url'}
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.openAdWebPage】${system}端正常调用, complete函数执行`, done => {
        boxjs.ui.open({
            name: 'swan-adWebPage',
            data: {url: 'url'}
        }).then(res => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.openAdWebPage】${system}端异常调用, 缺少url参数`, done => {
        boxjs.ui.open({
            name: 'swan-adWebPage'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url is required.');
            done();
        });
    });
    it(`【swan.boxjs.openAdWebPage】${system}端异常调用, url类型异常`, done => {
        boxjs.ui.open({
            name: 'swan-adWebPage',
            data: {url: [1, 4]}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
            done();
        });
    });
});

describe('API【request】测试', () => {
    it(`【swan.boxjs.net.request】${system}端正常调用`, done => {
        boxjs.net.request({
            url: 'url',
            header: {},
            method: 'method',
            dataType: 'deatType',
            responseType: 'responseType',
            cb: 'cb'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端正常调用, 缺少header, method, dataType, responseType`, done => {
        boxjs.net.request({
            url: 'url',
            cb: 'cb'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端正常调用, complete函数执行`, done => {
        boxjs.net.request({
            url: 'url',
            cb: 'cb'
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端正常调用, data为string`, done => {
        boxjs.net.request({
            url: 'url',
            cb: 'cb',
            data: 'data'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端正常调用, data为object`, done => {
        boxjs.net.request({
            url: 'url',
            cb: 'cb',
            data: {}
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端异常调用, url字段缺失`, done => {
        boxjs.net.request({
            cb: 'cb'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url is required.');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端异常调用, cb字段缺失`, done => {
        boxjs.net.request({
            url: 'url'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb is required.');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端异常调用, url类型异常`, done => {
        boxjs.net.request({
            url: {},
            cb: 'cb'
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端异常调用, cb类型异常`, done => {
        boxjs.net.request({
            url: 'cb',
            cb: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]cb type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端异常调用, data类型异常`, done => {
        boxjs.net.request({
            url: 'url',
            cb: 'cb',
            data: 1
        }).catch(err => {
            expect(err).to.be.a('Error');
            let message = '[jsNative Argument Error]data type error, must be oneOfType ["string","object"]';
            expect(err.message).to.be.equal(message);
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端异常调用, header类型异常`, done => {
        boxjs.net.request({
            url: 'url',
            cb: 'cb',
            header: ''
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]header type error. must be "object"');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端异常调用, method类型异常`, done => {
        boxjs.net.request({
            url: 'url',
            cb: 'cb',
            method: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]method type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端异常调用, dataType类型异常`, done => {
        boxjs.net.request({
            url: 'url',
            cb: 'cb',
            dataType: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]dataType type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.net.request】${system}端异常调用, responseType类型异常`, done => {
        boxjs.net.request({
            url: 'url',
            cb: 'cb',
            responseType: {}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]responseType type error. must be "string"');
            done();
        });
    });
});

describe('API【ubcReport】测试', () => {
    afterEach(() => {
        normalMethod();
    });
    it(`【swan.boxjs.ubcReport】${system}端正常调用`, done => {
        ubcReportMethod();
        boxjs.log({
            name: 'ubcReport',
            data: {
                actionId: 'actionId',
                value: {},
                minver: 'minver',
                min_v: 'min_v'}
        });
        done();
    });
    it(`【swan.boxjs.ubcReport】${system}端正常调用,缺少参数minver和min_v`, done => {
        ubcReportMethod();
        boxjs.log({
            name: 'ubcReport',
            data: {
                actionId: 'actionId',
                value: {}}
        });
        done();
    });
    it(`【swan.boxjs.ubcReport】${system}端正常调用, complete函数正常执行`, done => {
        ubcReportMethod();
        boxjs.log({
            name: 'ubcReport',
            data: {
                actionId: 'actionId',
                value: {}}
        }).then().finally(res => {
            console.log('android执行complete函数', res);
            done();
        });
        setTimeout(done(), 2000);
        // done();
    });
    it(`【swn.boxjs.ubcReport】${system}端异常调用, minver类型异常`, done => {
        ubcReportMethod();
        boxjs.log({
            name: 'ubcReport',
            data: {
                actionId: 'actionId',
                value: {}}
        });
        done();
    });
    it(`【swan.boxjs.ubcReport】${system}端异常调用, min_v类型异常`, done => {
        ubcReportMethod();
        boxjs.log({
            name: 'ubcReport',
            data: {
                actionId: 'actionId',
                value: {},
                minver: 'minver',
                min_v: {}}
        }).then(res => {
        }).catch(err => {
            expect(err).to.be.a('Error');
            done();
        });
    });
    it(`【swan.boxjs.ubcReport】${system}端异常调用, value参数缺失`, done => {
        ubcReportMethod();
        boxjs.log({
            name: 'ubcReport',
            data: {
                actionId: 'actionId'}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]value is required.');
            done();
        });
    });
    it(`【swan.boxjs.ubcReport】${system}端异常调用, actionId参数缺失`, done => {
        ubcReportMethod();
         boxjs.log({
            name: 'ubcReport',
            data: {
                value: {}}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]actionId is required.');
            done();
        });
    });
    it(`【swan.boxjs.ubcReport】${system}端异常调用, value类型异常`, done => {
        ubcReportMethod();
        boxjs.log({
            name: 'ubcReport',
            data: {
                actionId: 'actionId',
                value: 'value'}
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]value type error. must be "Object"');
            done();
        });
    });
    it(`【swan.boxjs.ubcReport】${system}端异常调用, actionId类型异常`, done => {
        ubcReportMethod();
        boxjs.log({
            name: 'ubcReport',
            data: {
                actionId: {},
                value: {}}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]actionId type error. must be "string"');
            done();
        });
    });
});

describe('API【openStatisticEvent】测试', () => {
    it(`【swan.boxjs.openStatisticEvent】${system}端正常调用`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                groupId: 'groupId',
                bizId: 'bizId',
                eventName: 'eventName',
                content: {},
                appVersion: 'appVersion',
                swanType: 'swanType'
            }
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端正常调用, 缺少appVersion, swanType`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                groupId: 'groupId',
                bizId: 'bizId',
                eventName: 'eventName',
                content: {}}
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端正常调用, complete函数执行`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                groupId: 'groupId',
                bizId: 'bizId',
                eventName: 'eventName',
                content: {}}
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端异常调用, groupId字段缺失`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                bizId: 'bizId',
                eventName: 'eventName',
                content: {}}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]groupId is required.');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端异常调用, bizId字段缺失`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                groupId: 'groupId',
                eventName: 'eventName',
                content: {}}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]bizId is required.');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端异常调用, eventName字段缺失`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                bizId: 'bizId',
                groupId: 'groupId',
                content: {}}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]eventName is required.');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端异常调用, content字段缺失`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                bizId: 'bizId',
                groupId: 'groupId',
                eventName: 'eventName'}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]content is required.');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端异常调用, groupId类型异常`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                groupId: {},
                bizId: 'bizId',
                eventName: 'eventName',
                content: {}}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]groupId type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端异常调用, bizId类型异常`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                groupId: 'groupId',
                bizId: {},
                eventName: 'eventName',
                content: {}}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]bizId type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端异常调用, eventName类型异常`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                groupId: 'groupId',
                bizId: 'bizId',
                eventName: {},
                content: {}}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]eventName type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端异常调用, content类型异常`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                groupId: 'groupId',
                bizId: 'bizId',
                eventName: 'eventName',
                content: ''}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]content type error. must be "Object"');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端异常调用, appVersion类型异常`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                groupId: 'groupId',
                bizId: 'bizId',
                eventName: 'eventName',
                content: {},
                appVersion: {}}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]appVersion type error. must be "string"');
            done();
        });
    });
    it(`【swan.boxjs.openStatisticEvent】${system}端异常调用, swanType类型异常`, done => {
        boxjs.log({
            name: 'statisticEvent',
            data: {
                groupId: 'groupId',
                bizId: 'bizId',
                eventName: 'eventName',
                content: {},
                swanType: {}}
        }).catch(err => {
            expect(err).to.be.a('Error');
            expect(err.message).to.be.equal('[jsNative Argument Error]swanType type error. must be "string"');
            done();
        });
    });
});

describe('API【insertarCamera】测试', () => {
    it(`【swan.boxjs.media.ARCamera】${system}端正常调用, hide为true`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveId',
                ARCameraId: 'ARCameraId',
                viewId: 'viewId',
                parentId: 'parentId',
                hide: true,
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: 'flash',
                position: {}
            }
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端正常调用, hide为false`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveId',
                ARCameraId: 'ARCameraId',
                viewId: 'viewId',
                parentId: 'parentId',
                hide: false,
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: 'flash',
                position: {}
            }
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端正常调用, complete函数执行`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveId',
                ARCameraId: 'ARCameraId',
                viewId: 'viewId',
                parentId: 'parentId',
                hide: true,
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: 'flash',
                position: {}
            }
        }).then(() => {
        }).finally(() => {
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端异常调用, slaveId类型异常`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: {},
                ARCameraId: 'ARCameraId',
                viewId: 'viewId',
                parentId: 'parentId',
                hide: true,
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: 'flash',
                position: {}
            }
        }).catch(err => {
            console.error(err);
            expect(err).to.be.a('Error');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端异常调用, ARCameraId类型异常`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveID',
                ARCameraId: {},
                viewId: 'viewId',
                parentId: 'parentId',
                hide: true,
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: 'flash',
                position: {}
            }
        }).catch(err => {
            console.error(err);
            expect(err).to.be.a('Error');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端异常调用, viewId类型异常`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveID',
                ARCameraId: 'ARCameraId',
                viewId: {},
                parentId: 'parentId',
                hide: true,
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: 'flash',
                position: {}
            }
        }).catch(err => {
            console.error(err);
            expect(err).to.be.a('Error');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端异常调用, parentId类型异常`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveID',
                ARCameraId: 'ARCameraId',
                viewId: {},
                parentId: {},
                hide: true,
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: 'flash',
                position: {}
            }
        }).catch(err => {
            console.error(err);
            expect(err).to.be.a('Error');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端异常调用, hide类型异常`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveID',
                ARCameraId: 'ARCameraId',
                viewId: 'viewId',
                parentId: 'parentId',
                hide: {},
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: 'flash',
                position: {}
            }
        }).catch(err => {
            console.error(err);
            expect(err).to.be.a('Error');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端异常调用, hide类型异常`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveID',
                ARCameraId: 'ARCameraId',
                viewId: 'viewId',
                parentId: 'parentId',
                hide: {},
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: 'flash',
                position: {}
            }
        }).catch(err => {
            console.error(err);
            expect(err).to.be.a('Error');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端异常调用, ARKey类型异常`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveID',
                ARCameraId: 'ARCameraId',
                viewId: 'viewId',
                parentId: 'parentId',
                hide: true,
                ARKey: {},
                ARType: 'ARType',
                flash: 'flash',
                position: {}
            }
        }).catch(err => {
            console.error(err);
            expect(err).to.be.a('Error');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端异常调用, ARType类型异常`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveID',
                ARCameraId: 'ARCameraId',
                viewId: 'viewId',
                parentId: 'parentId',
                hide: true,
                ARKey: 'ARKey',
                ARType: {},
                flash: 'flash',
                position: {}
            }
        }).catch(err => {
            console.error(err);
            expect(err).to.be.a('Error');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端异常调用, flash类型异常`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveID',
                ARCameraId: 'ARCameraId',
                viewId: 'viewId',
                parentId: 'parentId',
                hide: true,
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: {},
                position: {}
            }
        }).catch(err => {
            console.error(err);
            expect(err).to.be.a('Error');
            done();
        });
    });
    it(`【swan.boxjs.media.ARCamera】${system}端异常调用, position类型异常`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: 'slaveID',
                ARCameraId: 'ARCameraId',
                viewId: 'viewId',
                parentId: 'parentId',
                hide: true,
                ARKey: 'ARKey',
                ARType: 'ARType',
                flash: {},
                position: ''
            }
        }).catch(err => {
            console.error(err);
            expect(err).to.be.a('Error');
            done();
        });
    });
});

describe('API【insertarCamera】测试 参数缺失', () => {
    let argData = ['slaveId', 'ARCameraId', 'viewId', 'parentId',
    'parentId', 'ARKey', 'ARType', 'flash', 'position'];
    const description = {
        slaveId: 'slaveID',
        ARCameraId: 'ARCameraId',
        viewId: 'viewId',
        parentId: 'parentId',
        hide: true,
        ARKey: 'ARKey',
        ARType: 'ARType',
        flash: 'flash',
        position: {}
    };
    function lackData(item, description) {
        const lostData = {...description};
        delete lostData[item];
        return lostData;
    }
    argData.forEach(item => {
        it(`【swan.boxjs.media.ARCamera】${system}端异常调用, 缺少${item}参数`, done => {
            console.log(item);
            boxjs.media.ARCamera({
                type: 'insert',
                data: lackData(item, description)
            }).catch(err => {
                expect(err).to.be.a('Error');
                done();
            });
        });
    });
});

describe('API【coverview】测试 正常调用', () => {
    it(`【swan.boxjs.cover.insert】${system}端正常调用`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                slaveId: 'slaveID',
                parentId: 'parentId',
                viewId: 'viewId',
                hide: 'true',
                gesture: 'gesture',
                style: {},
                text: 'text',
                scrollTop: 'scrollTop',
                position: {},
                transition: {}
            }
        }).then(res => {
            expect(res).to.be.a('Object');
            done();
        });
    });
});

describe('API【coverview】测试 参数缺失', () => {
    let argData = ['slaveId', 'scrollTop', 'viewId', 'parentId',
    'gesture', 'style', 'text', 'position', 'scrollTop', 'transition'];
    const description = {
        slaveId: 'slaveID',
        parentId: 'parentId',
        viewId: 'viewId',
        hide: true,
        gesture: 'gesture',
        style: 'style',
        text: 'text',
        scrollTop: 'scrollTop',
        position: {},
        transition: {}
    };
    function lackData(item, description) {
        const lostData = {...description};
        delete lostData[item];
        return lostData;
    }
    argData.forEach(item => {
        it(`【swan.boxjs.cover.insert】${system}端异常调用, 缺少${item}参数`, done => {
            console.log(item);
            boxjs.cover.insert({
                name: 'swan-coverView',
                data: lackData(item, description)
            }).catch(err => {
                expect(err).to.be.a('Error');
                done();
            });
        });
    });
});

describe('API【canvasinsert】测试 参数缺失', () => {
    let argData = ['slaveId', 'gesture', 'canvasId', 'hide', 'position', 'disableScroll'];
    const description = {
        canvasId: 'canvasId',
        slaveId: 'slaveId',
        hide: 'hide',
        disableScroll: 'disableScroll',
        gesture: 'gesture',
        position: {}
    };
    function lackData(item, description) {
        const lostData = {...description};
        delete lostData[item];
        return lostData;
    }
    argData.forEach(item => {
        it(`【swan.boxjs.canvasinsert】${system}端异常调用, 缺少${item}参数`, done => {
            console.log(item);
            boxjs.canvas.insert(lackData(item, description)).catch(err => {
                expect(err).to.be.a('Error');
                done();
            });
        });
    });
});
