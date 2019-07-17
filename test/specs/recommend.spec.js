/**
 * @file spec/pullDownRefresh
 * @author liuxiaoming02@baidu.com
 * @description  下拉刷新相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【recommendSimilarProducts】测试', () => {
    it(`【swan.recommendSimilarProducts】${system}端正常调用`, done => {
        swan.recommendSimilarProducts({
            data: {},
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.recommendSimilarProducts】${system}端正常调用, 缺少 data`, done => {
        swan.recommendSimilarProducts({
            data: {},
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.recommendSimilarProducts】${system}端正常调用, complete函数执行`, done => {
        swan.recommendSimilarProducts({
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.recommendSimilarProducts】${system}端异常调用, data类型异常`, done => {
        swan.recommendSimilarProducts({
            data: '',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]data type error. must be "object"');
                done();
            }
        });
    });
});

describe('API【recommendProducts】测试', () => {
    it(`【swan.recommendProducts】${system}端正常调用`, done => {
        swan.recommendProducts({
            data: {},
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.recommendProducts】${system}端正常调用, 缺少 data`, done => {
        swan.recommendProducts({
            data: {},
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.recommendProducts】${system}端正常调用, complete函数执行`, done => {
        swan.recommendProducts({
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.recommendProducts】${system}端异常调用, data类型异常`, done => {
        swan.recommendProducts({
            data: '',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]data type error. must be "object"');
                done();
            }
        });
    });
});

describe('API【loadSubPackage】测试', () => {
    it(`【swan.loadSubPackage】${system}端正常调用`, done => {
        swan.loadSubPackage({
            root: 'root',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.loadSubPackage】${system}端正常调用, complete函数执行`, done => {
        swan.loadSubPackage({
            root: 'root',
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.loadSubPackage】${system}端异常调用, root类型异常`, done => {
        swan.loadSubPackage({
            root: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]root type error. must be "string"');
                done();
            }
        });
    });
});