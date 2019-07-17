/**
 * @file spec/system
 * @author shixinzhe@baidu.com
 * @description  打开小程序
 */
import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【navigateToSmartProgram】测试', () => {
    it(`【swan.navigateToSmartProgram】${system}端正常调用`, done => {
        swan.navigateToSmartProgram({
            appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
            path: '', // 打开的页面路径，如果为空则打开首页
            extraData: {
                foo: 'baidu'
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.navigateToSmartProgram】${system}端正常调用`, done => {
        swan.navigateToSmartProgram({
            appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.navigateToSmartProgram】${system}端正常调用, complete函数执行`, done => {
        swan.navigateToSmartProgram({
            appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
            path: '', // 打开的页面路径，如果为空则打开首页
            extraData: {
                foo: 'baidu'
            },
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.navigateToSmartProgram】${system}端异常调用, 缺失参数appKey`, done => {
        swan.navigateToSmartProgram({
            path: '', // 打开的页面路径，如果为空则打开首页
            extraData: {
                foo: 'baidu'
            },
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]appKey is required.');
                done();
            }
        });
    });
    it(`【swan.navigateToSmartProgram】${system}端异常调用, appKey类型异常`, done => {
        swan.navigateToSmartProgram({
            appKey: {}, // 要打开的小程序 App Key
            path: '', // 打开的页面路径，如果为空则打开首页
            extraData: {
                foo: 'baidu'
            },
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]appKey type error. must be "string"');
                done();
            }
        });
    });
    it(`【swan.navigateToSmartProgram】${system}端异常调用, path类型异常`, done => {
        swan.navigateToSmartProgram({
            appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
            path: {}, // 打开的页面路径，如果为空则打开首页
            extraData: {
                foo: 'baidu'
            },
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]path type error. must be "string"');
                done();
            }
        });
    });
    it(`【swan.navigateToSmartProgram】${system}端异常调用, extraData类型异常`, done => {
        swan.navigateToSmartProgram({
            appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
            path: '', // 打开的页面路径，如果为空则打开首页
            extraData: '',
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]extraData type error. must be "Object"');
                done();
            }
        });
    });
});

describe('API【navigateBackSmartProgram】测试', () => {
    it(`【swan.navigateBackSmartProgram】${system}端正常调用`, done => {
        swan.navigateBackSmartProgram({
            extraData: {
                foo: 'baidu'
            },
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.navigateBackSmartProgram】${system}端正常调用, complete函数执行`, done => {
        swan.navigateBackSmartProgram({
            extraData: {
                foo: 'baidu'
            },
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.navigateBackSmartProgram】${system}端异常调用, extraData类型异常`, done => {
        swan.navigateBackSmartProgram({
            extraData: '',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                done();
            }
        });
    });
});