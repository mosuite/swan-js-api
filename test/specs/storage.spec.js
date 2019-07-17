/*
 * @file spec/storage
 * @author liuxiaoming02@baidu.com
 * @description  数据存储相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【setStorage】测试', () => {
    it(`【swan.setStorage】${system}端正常调用`, done => {
        swan.setStorage({
            key: 'key',
            data: 'value',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.setStorage】${system}端正常调用, complete函数执行`, done => {
        swan.setStorage({
            key: 'key',
            data: 'value',
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.setStorage】${system}端异常调用, 缺失参数key`, done => {
        swan.setStorage({
            data: 'value',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]key is required.');
                done();
            }
        });
    });
});

describe('API【getStorage】测试', () => {
    it(`【swan.getStorage】${system}端正常调用`, done => {
        swan.getStorage({
            key: 'key',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.any.key('data');
                done();
            }
        });
    });

    it(`【swan.getStorage】${system}端正常调用, complete函数执行`, done => {
        swan.getStorage({
            key: 'key',
            complete: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.any.key('data');
                done();
            }
        });
    });

    it(`【swan.getStorage】${system}端异常调用, 缺失参数key`, done => {
        swan.getStorage({
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]key is required.');
                done();
            }
        });
    });
});

describe('API【setStorageSync】测试', () => {
    it(`【swan.setStorageSync】${system}端正常调用`, () => {
        let storageInfo = swan.setStorageSync('key', 'value');
        expect(storageInfo).to.be.a('object');
    });

    it(`【swan.setStorageSync】${system}端异常调用，缺失参数key`, () => {
        try {
            let storageInfo = swan.setStorageSync( 'value');
        }
        catch (err) {
            expect(err.message).to.be.equal('[jsNative Argument Error]key is required.');
        }
    });
});

describe('API【getStorageSync】测试', () => {
    it(`【swan.getStorageSync】${system}端正常调用`, () => {
        let storageSync = swan.getStorageSync('key');
        console.log(storageSync);
    });

    it(`【swan.getStorageSync】${system}端异常调用，缺失参数key`, () => {
        try {
            let storageSync = swan.getStorageSync();
        }
        catch (err) {
            expect(err.message).to.be.equal('[jsNative Argument Error]key is required.');
        }
    });
});

describe('API【getStorageInfo】测试', () => {
    it(`【swan.getStorageInfo】${system}端正常调用`, done => {
        swan.getStorageInfo({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('keys', 'currentSize', 'limitSize');
                done();
            }
        });
    });
});

describe('API【getStorageInfoSync】测试', () => {
    it(`【swan.getStorageInfoSync】${system}端正常调用`, () => {
        let storageInfoSync = swan.getStorageInfoSync();
        expect(storageInfoSync).to.be.a('object');
        expect(storageInfoSync).to.have.all.keys('keys', 'currentSize', 'limitSize');
    });
});

describe('API【removeStorage】测试', () => {
    it(`【swan.removeStorage】${system}端正常调用`, done => {
        swan.removeStorage({
            key: 'key',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.removeStorage】${system}端正常调用, complete函数执行`, done => {
        swan.removeStorage({
            key: 'key',
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.removeStorage】${system}端异常调用, 缺失参数key`, done => {
        swan.removeStorage({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]key is required.');
                done();
            }
        });
    });
});

describe('API【removeStorageSync】测试', () => {
    it(`【swan.removeStorageSync】${system}端正常调用`, () => {
        let storageInfo = swan.removeStorageSync('key');
        expect(storageInfo).to.be.a('object');
    });
    
    it(`【swan.removeStorageSync】${system}端异常调用，缺失参数key`, () => {
        try {
            swan.removeStorageSync();
        }
        catch (err) {
            expect(err.message).to.be.equal('[jsNative Argument Error]key is required.');
        }
    });
});

describe('API【clearStorage】测试', () => {
    it(`【swan.clearStorage】${system}端正常调用`, done => {
        swan.clearStorage({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【clearStorageSync】测试', () => {
    it(`【swan.clearStorageSync】${system}端正常调用`, () => {
        let storageSync = swan.clearStorageSync();
        expect(storageSync).to.be.a('object');
    });
});