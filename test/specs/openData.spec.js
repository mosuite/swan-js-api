/**
 * @file spec/system
 * @author shixinzhe@baidu.com
 * @description  开发能力相关API接口
 */
import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;


const system = $.isIOS ? 'ios' : 'android';

describe('API【setEnableDebug】测试', () => {
    it(`【swan.setEnableDebug】${system}端正常调用`, () => {
        swan.setEnableDebug({
            enableDebug: true,
            success: res => {
                expect(res).to.be.a('object');
            }
        });
    });
    it(`【swan.setEnableDebug】${system}端正常调用, enableDebug为false`, done => {
        swan.setEnableDebug({
            enableDebug: false,
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setEnableDebug】${system}端正常调用, complete函数执行`, done => {
        swan.setEnableDebug({
            enableDebug: true,
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setEnableDebug】${system}端调用失败，缺少参数enableDebug`, done => {
        swan.setEnableDebug({
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]enableDebug is required.');
                done();
            }
        });
    });
    it(`【swan.setEnableDebug】${system}端调用失败,enableDebug类型异常`, done => {
        swan.setEnableDebug({
            enableDebug: '1',
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]enableDebug type error. must be "boolean"');
                done();
            }
        });
    });
    it(`【swan.setEnableDebug】${system}端调用失败,enableDebug类型异常`, done => {
        swan.setEnableDebug({
            enableDebug: 1,
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]enableDebug type error. must be "boolean"');
                done();
            }
        });
    });
    it(`【swan.setEnableDebug】${system}端调用失败,enableDebug类型异常`, done => {
        swan.setEnableDebug({
            enableDebug: null,
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]enableDebug is required.');
                done();
            }
        });
    });
    it(`【swan.setEnableDebug】${system}端调用失败,enableDebug类型异常`, done => {
        swan.setEnableDebug({
            enableDebug: undefined,
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]enableDebug is required.');
                done();
            }
        });
    });
    it(`【swan.setEnableDebug】${system}端调用失败,enableDebug类型异常`, done => {
        swan.setEnableDebug({
            enableDebug: {},
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]enableDebug type error. must be "boolean"');
                done();
            }
        });
    });
});

describe('API【openSetting】测试', () => {
    it(`【swan.openSetting】${system}端正常调用`, () => {
        swan.openSetting({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                expect(res.authSetting).to.be.a('object');
            }
        });
    });
    it(`【swan.openSetting】${system}端正常调用, complete函数执行`, done => {
        swan.openSetting({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【getSetting】测试', () => {
    it(`【swan.getSetting】${system}端正常调用`, () => {
        swan.getSetting({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                expect(res.authSetting).to.be.a('object');
            }
        });
    });
    it(`【swan.getSetting】${system}端正常调用, complete函数执行`, done => {
        swan.getSetting({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【requestPolymerPayment】测试', () => {
    it(`【swan.requestPolymerPayment】${system}端正常调用`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            bannedChannels: ['Alipay', 'BDWallet', 'WeChat'],
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用, 缺少参数bannedChannel`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            bannedChannels: ['Alipay', 'BDWallet', 'WeChat'],
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用，complete函数执行`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端异常调用, 缺失参数orderInfo`, done => {
        swan.requestPolymerPayment({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
            },
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]orderInfo is required.');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用, bannedChannel参数异常`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            bannedChannels: ['Ali', 'BDWall', 'We'],
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用, orderInfo中缺少必填参数dealId`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用, orderInfo中缺少必填参数appKey`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用, orderInfo中缺少必填参数totalAmount`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用, orderInfo中缺少必填参数tpOrderId`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用, orderInfo中缺少必填参数dealTitle`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用, orderInfo中缺少必填参数rsaSign`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用, orderInfo中缺少必填参数bizInfo`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'signFieldsRange': 1
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPolymerPayment】${system}端正常调用, orderInfo中缺少必填参数signFieldsRange`, done => {
        swan.requestPolymerPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1'
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【requestAliPayment】测试', () => {
    it(`【swan.requestAliPayment】${system}端正常调用`, done => {
        swan.requestAliPayment({
            orderInfo: 'https://docs.open.alipay.com/204/105465/',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            },
            fail: err => {
                console.log(err);
            }
        });
    });
    it(`【swan.requestAliPayment】${system}端正常调用，complete函数执行`, done => {
        swan.requestAliPayment({
            orderInfo: 'https://docs.open.alipay.com/204/105465/',
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestAliPayment】${system}端异常调用, 缺失参数orderInfo`, done => {
        swan.requestAliPayment({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
            },
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]orderInfo is required.');
                done();
            }
        });
    });
    it(`【swan.requestAliPayment】${system}端正常调用, orderInfo参数类型错误`, done => {
        swan.requestAliPayment({
            orderInfo: {},
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]orderInfo type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【requestPayment】测试', () => {
    it(`【swan.requestPayment】${system}端正常调用`, done => {
        swan.requestPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPayment】${system}端正常调用，complete函数执行`, done => {
        swan.requestPayment({
            orderInfo: {
                'dealId': '470193086',
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPayment】${system}端正常调用, 缺失参数orderInfo`, done => {
        swan.requestPayment({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestPayment】${system}端正常调用, orderInfo中缺少必填参数dealId`, done => {
        swan.requestPayment({
            orderInfo: {
                'appKey': 'MMMabc',
                'totalAmount': '1',
                'tpOrderId': '3028903626',
                'dealTitle': '智能小程序Demo支付测试',
                'rsaSign': '1',
                'bizInfo': '1',
                'signFieldsRange': 1
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【requestWeChatPayment】测试', () => {
    it(`【swan.requestWeChatPayment】${system}端正常调用`, done => {
        swan.requestWeChatPayment({
            url: 'http://cp01-qa-lvyou-001.cp01.baidu.com:8080/static/payment/wechat',
            extraData: {
                mweb_url: 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin',
                custome_key: 'custome_value'
            },
            version: '2.0',
            success(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestWeChatPayment】${system}端正常调用, 缺少version参数`, done => {
        swan.requestWeChatPayment({
            url: 'http://cp01-qa-lvyou-001.cp01.baidu.com:8080/static/payment/wechat',
            extraData: {
                mweb_url: 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin',
                custome_key: 'custome_value'
            },
            success(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestWeChatPayment】${system}端正常调用，complete函数执行`, done => {
        swan.requestWeChatPayment({
            url: 'http://cp01-qa-lvyou-001.cp01.baidu.com:8080/static/payment/wechat',
            extraData: {
                mweb_url: 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin',
                custome_key: 'custome_value'
            },
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestWeChatPayment】${system}端正常调用, 缺少参数url参数`, done => {
        swan.requestWeChatPayment({
            extraData: {
                mweb_url: 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin',
                custome_key: 'custome_value'
            },
            version: '2.0',
            success(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.requestWeChatPayment】${system}端异常调用, 参数url类型异常`, done => {
        swan.requestWeChatPayment({
            url: {},
            extraData: {
                mweb_url: 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin',
                custome_key: 'custome_value'
            },
            version: '1.0',
            success: res => {
                console.log('res', res);
                done();
            },
            fail: err => {
                console.log('err', err);
                // expect(err).to.be.a('error');
                // expect(err.message).to.be.a('error');
                done();
            }
        });
    });
    it(`【swan.requestWeChatPayment】${system}端正常调用, 缺少参数extraData`, done => {
        swan.requestWeChatPayment({
            url: 'http://cp01-qa-lvyou-001.cp01.baidu.com:8080/static/payment/wechat',
            fail(res) {
                console.log(res);
                expect(res).to.be.a('object');
                expect(res.errCode).to.be.equal(904);
                expect(res.errMsg).to.be.equal('[jsNative Argument Error]extraData is required.');
                done();
            }
        });
    });
    it(`【swan.requestWeChatPayment】${system}端正常调用, 参数extraData异常`, done => {
        swan.requestWeChatPayment({
            extraData: '',
            url: 'http://cp01-qa-lvyou-001.cp01.baidu.com:8080/static/payment/wechat',
            fail(res) {
                console.log(res);
                expect(res).to.be.a('object');
                expect(res.errCode).to.be.equal(904);
                expect(res.errMsg).to.be.equal('[jsNative Argument Error]extraData type error. must be "Object"');
                done();
            }
        });
    });
    it(`【swan.requestWeChatPayment】${system}端正常调用, version参数异常`, done => {
        swan.requestWeChatPayment({
            url: 'http://cp01-qa-lvyou-001.cp01.baidu.com:8080/static/payment/wechat',
            extraData: {
                mweb_url: 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin',
                custome_key: 'custome_value'
            },
            version: [],
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【getUpdateManager】测试', () => {
    // let checkForUpdateResult;
    it(`【swan.getUpdateManager】${system}端正常调用, 当向百度后台请求完新版本信息`, done => {
        const updateManager = swan.getUpdateManager();
        updateManager.onCheckForUpdate(res => {
            // 请求完新版本信息的回调
            console.log(res);
            done();
        });
        let event = new Event('updateStatusChange');
        event.eventType = 'checkForUpdate';
        event.data = true;
        document.dispatchEvent(event);
    });
    it(`【swan.getUpdateManager】${system}端异常调用,当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启`, done => {
        const updateManager = swan.getUpdateManager();
        try {
            updateManager.applyUpdate();
        } catch (error) {
            console.error(error);
        }
        let event = new Event('updateStatusChange');
        document.dispatchEvent(event);
        done();
    });
    it(`【swan.getUpdateManager】${system}端正常调用, 当新版本下载完成，会进行回调`, done => {
        const updateManager = swan.getUpdateManager();
        updateManager.onUpdateReady(() => {
            console.log('onUpdateReady');
            done();
        });
        let event = new Event('updateStatusChange');
        event.eventType = 'updateReady';
        document.dispatchEvent(event);
    });
    it(`【swan.getUpdateManager】${system}端正常调用,当新版本下载失败，会进行回调`, done => {
        const updateManager = swan.getUpdateManager();
        updateManager.onUpdateFailed(() => {
            console.log('onUpdateFailed');
            done();
        });
        let event = new Event('updateStatusChange');
        event.eventType = 'updateFailed';
        document.dispatchEvent(event);
    });
});

