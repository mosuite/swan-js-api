/**
 * @file spec/system
 * @author shixinzhe@baidu.com
 * @description  开发能力相关API接口
 */
import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【pageScrollTo】测试', () => {
    it(`【swan.pageScrollTo】${system}端正常调用`, done => {
        swan.pageScrollTo({
            scrollTop: 0,
            duration: 300,
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.pageScrollTo】${system}端正常调用，缺少duration参数`, done => {
        swan.pageScrollTo({
            scrollTop: 0,
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.pageScrollTo】${system}端正常调用, complete函数执行`, done => {
        swan.pageScrollTo({
            scrollTop: 0,
            duration: 300,
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.pageScrollTo】${system}端异常调用, 缺失参数scrollTop`, done => {
        swan.pageScrollTo({
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]scrollTop is required.');
                done();
            }
        });
    });
    it(`【swan.pageScrollTo】${system}端正常调用, scrollTop类型异常`, done => {
        swan.pageScrollTo({
            scrollTop: {},
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]scrollTop is required.');
                done();
            }
        });
    });
    it(`【swan.pageScrollTo】${system}端正常调用, duration类型异常`, done => {
        swan.pageScrollTo({
            scrollTop: 0,
            duration: {},
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});