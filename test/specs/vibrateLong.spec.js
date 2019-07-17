/**
 * @file spec/vibrateLong
 * @author liuxiaoming02@baidu.com
 * @description 振动相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【vibrateLongh】测试', () => {
    it(`【swan.vibrateLong】${system}端正常调用`, done => {
        swan.vibrateLong({
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.vibrateLong】${system}端正常调用, complete函数执行`, done => {
        swan.vibrateLong({
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【vibrateShort】测试', () => {
    it(`【swan.vibrateShort】${system}端正常调用`, done => {
        swan.vibrateShort({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.vibrateShort】${system}端正常调用, complete函数执行`, done => {
        swan.vibrateShort({
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});