/**
 * @file spec/navigate
 * @author bailonggang
 * @description  导航4个接口单测：navigateTo、redirectTo、switchTab、navigateBack、reLaunch
 */

import {boxjs} from '../../src/boxjs/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【navigateTo】测试', () => {
    it(`【swan.navigateTo】${system}端正常调用`, done => {
        boxjs.webView.navigateTo({
            url: '/pages/image/image',
            cb: ''
        }).then(() => {
            done();
        });
    });

    it(`【swan.navigateTo】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.webView.navigateTo({
            url: '/pages/image/image',
            cb: ''
        }).finally(() => {
            done();
        });
    });

    it(`【swan.navigateTo】${system}端正常调用，传入参数url类型错误`, done => {
        boxjs.webView.navigateTo({
            url: {},
            cb: ''
        }).catch(err => {
            expect(err).to.be.a('error');
            done();
        });
    });
});

describe('API【redirectTo】测试', () => {
    it(`【swan.redirectTo】${system}端正常调用`, done => {
        boxjs.webView.redirectTo({
            url: '/pages/image/image',
            cb: ''
        }).then(() => {
            done();
        });
    });

    it(`【swan.redirectTo】${system}端正常调用，complete函数执行`, done => {
        boxjs.webView.redirectTo({
            url: '/pages/image/image',
            cb: ''
        }).finally(() => {
            done();
        });
    });

    it(`【swan.redirectTo】${system}端正常调用，不传参数url`, done => {
        boxjs.webView.redirectTo({cb: ''}).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url is required.');
            done();
        });
    });

    it(`【swan.redirectTo】${system}端正常调用，传入参数url类型错误`, done => {
        boxjs.webView.redirectTo({
            url: {},
            cb: ''
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
            done();
        });
    });
});

describe('API【switchTab】测试', () => {
    it(`【swan.switchTab】${system}端正常调用`, done => {
        boxjs.webView.switchTab({
            url: '/pages/index/index'
        }).then(res => {
            done();
        });
    });

    it(`【swan.switchTab】${system}端正常调用，complete函数执行`, done => {
        boxjs.webView.switchTab({
            url: '/pages/index/index'
        }).finally(() => {
            done();
        });
    });

    it(`【swan.switchTab】${system}端正常调用，不传参数url`, done => {
        boxjs.webView.switchTab({}).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url is required.');
            done();
        });
    });

    it(`【swan.switchTab】${system}端正常调用，传入参数url类型错误`, done => {
        boxjs.webView.switchTab({
            url: {}
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
            done();
        });
    });
});

describe('API【navigateBack】测试', () => {
    it(`【swan.navigateBack】${system}端正常调用`, done => {
        boxjs.webView.navigateBack({
            delta: 2
        }).then(res => {
            done();
        });
    });

    it(`【swan.navigateBack】${system}端正常调用，complete函数执行`, done => {
        boxjs.webView.navigateBack({
            delta: 2
        }).finally(() => {
            done();
        });
    });
});

describe('API【reLaunch】测试', () => {
    it(`【swan.reLaunch】${system}端正常调用`, done => {
        boxjs.webView.reLaunch({
            url: '/pages/index/index',
            cb: ''
        }).then(res => {
            done();
        });
    });

    it(`【swan.reLaunch】${system}端正常调用，complete函数执行`, done => {
        boxjs.webView.reLaunch({
            url: '/pages/index/index',
            cb: ''
        }).finally(res => {
            done();
        });
    });

    it(`【swan.reLaunch】${system}端正常调用，不传参数url`, done => {
        boxjs.webView.reLaunch({}).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url is required.');
            done();
        });
    });

    it(`【swan.reLaunch】${system}端正常调用，传入参数url类型错误`, done => {
        boxjs.webView.reLaunch({
            url: {}
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
            done();
        });
    });
});
