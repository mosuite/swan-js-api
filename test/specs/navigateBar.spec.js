/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【setNavigationBarTitle】测试', () => {
    it(`【swan.setNavigationBarTitle】${system}端正常调用`, done => {
        swan.setNavigationBarTitle({
            title: 'test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.setNavigationBarTitle】${system}端异常调用，未传入title `, done => {
        swan.setNavigationBarTitle({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]title is required.');
                done();
            }
        });
    });

});

describe('API【showNavigationBarLoading】测试', () => {
    it(`【swan.showNavigationBarLoading】${system}端正常调用`, done => {
        swan.showNavigationBarLoading({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });
});

describe('API【hideNavigationBarLoading】测试', () => {
    it(`【swan.hideNavigationBarLoading】${system}端正常调用`, done => {
        swan.hideNavigationBarLoading({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });
});

describe('API【setMenuOpacity】测试', () => {
    it(`【swan.setMenuOpacity】${system}端正常调用`, done => {
        swan.setMenuOpacity({
            alpha: 0.5,
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.setMenuOpacity】${system}端异常调用， 未传入参数alpha`, done => {
        swan.setMenuOpacity({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]alpha is required.');
                done();
            }
        });
    });

    it(`【swan.setMenuOpacity】${system}端异常调用， 参数alpha类型错误`, done => {
        swan.setMenuOpacity({
            alpha: '0.6',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]alpha type error. must be "number"');
                done();
            }
        });
    });

    it(`【swan.setMenuOpacity】${system}端异常调用， alpha小于0.1`, done => {
        swan.setMenuOpacity({
            alpha: 0,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('setMenuOpacity:fail parameter error: alpha should between [0.1, 1]');
                done();
            }
        });
    });

    it(`【swan.setMenuOpacity】${system}端异常调用， alpha大于1`, done => {
        swan.setMenuOpacity({
            alpha: 1.2,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('setMenuOpacity:fail parameter error: alpha should between [0.1, 1]');
                done();
            }
        });
    });
});

describe('API【confirmAppClose】测试', () => {
    it(`【swan.confirmAppClose】${system}端正常调用`, done => {
        swan.confirmAppClose({
            content: 'test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.confirmAppClose】${system}端异常调用， 参数content类型错误`, done => {
        swan.confirmAppClose({
            content: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]content type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【setNavigationBarColor】测试', () => {
    it(`【swan.setNavigationBarColor】${system}端正常调用`, done => {
        swan.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#ff0000',
            animation: {
                duration: 500,
                timingFunc: 'linear'
            },
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.setNavigationBarColor】${system}端异常调用，frontColor取值错误 `, done => {
        swan.setNavigationBarColor({
            frontColor: '#ff0000',
            backgroundColor: '#000000',
            animation: {
                duration: 500,
                timingFunc: 'linear'
            },
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('setNavigationBarColor:fail parameter error: invalid frontColor "#ff0000"');
                done();
            }
        });
    });

    it(`【swan.setNavigationBarColor】${system}端异常调用，animation类型错误 `, done => {
        swan.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#000000',
            animation: 500,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]animation type error. must be "object"');
                done();
            }
        });
    });

});