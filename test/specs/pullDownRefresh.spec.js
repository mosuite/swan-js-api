/**
 * @file spec/pullDownRefresh
 * @author liuxiaoming02@baidu.com
 * @description  下拉刷新相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【startPullDownRefresh】测试', () => {
    it(`【swan.startPullDownRefresh】${system}端正常调用`, done => {
        swan.startPullDownRefresh({
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.startPullDownRefresh】${system}端正常调用, complete函数执行`, done => {
        swan.startPullDownRefresh({
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【stopPullDownRefresh】测试', () => {
    it(`【swan.stopPullDownRefresh】${system}端正常调用`, done => {
        swan.stopPullDownRefresh({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.stopPullDownRefresh】${system}端正常调用, complete函数执行`, done => {
        swan.stopPullDownRefresh({
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});