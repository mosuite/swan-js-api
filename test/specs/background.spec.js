/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【setBackgroundColor】测试', () => {
    it(`【swan.setBackgroundColor】${system}端正常调用`, done => {
        swan.setBackgroundColor({
            backgroundColor: '#000000',
            backgroundColorTop: '#222222',
            backgroundColorBottom: '#333333',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.setBackgroundColor】${system}端异常调用，backgroundColor类型错误 `, done => {
        swan.setBackgroundColor({
            backgroundColor: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]backgroundColor type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.setBackgroundColor】${system}端异常调用，backgroundColorTop类型错误 `, done => {
        swan.setBackgroundColor({
            backgroundColorTop: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]backgroundColorTop type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.setBackgroundColor】${system}端异常调用，backgroundColorBottom类型错误 `, done => {
        swan.setBackgroundColor({
            backgroundColorBottom: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]backgroundColorBottom type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【setBackgroundTextStyle】测试', () => {
    it(`【swan.setBackgroundTextStyle】${system}端正常调用`, done => {
        swan.setBackgroundTextStyle({
            textStyle: 'light',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.setBackgroundTextStyle】${system}端异常调用，textStyle取值错误 `, done => {
        swan.setBackgroundTextStyle({
            textStyle: '',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('setBackgroundTextStyle:fail parameter error: invalid textStyle ""');
                done();
            }
        });
    });

});