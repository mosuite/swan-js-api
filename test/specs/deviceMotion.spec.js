/**
 * @file spec/accelerometer
 * @author liuxiaoming02@baidu.com
 * @description 加速度计相关API接口
 */

import {swan} from '../../src/swan/index';
import {events} from '../../src/utils/event';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【onDeviceMotionChange】测试', () => {
    it(`【swan.onDeviceMotionChange】${system}端正常调用`, done => {

        swan.onDeviceMotionChange(res => {
            expect(res).to.be.a('object');
            expect(res).to.have.all.keys('alpha', 'beta', 'gamma');
            done();
        });
        events.emit('onDeviceMotionChange', {alpha: 343, beta: -58, gamma: 3.7});
    });
});

describe('API【startDeviceMotionListening】测试', () => {
    it(`【swan.startDeviceMotionListening】${system}端正常调用`, done => {
        swan.startDeviceMotionListening({
            interval: 'ui',
            cb: 'cb',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.startDeviceMotionListening】${system}端正常调用，complete正常调用`, done => {
        swan.startDeviceMotionListening({
            interval: 'ui',
            cb: 'cb',
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.startDeviceMotionListening】${system}端异常调用，interval类型异常`, done => {
        swan.startDeviceMotionListening({
            interval: ['ui'],
            cb: 'cb',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]interval type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【stopDeviceMotionListening】测试', () => {
    it(`【swan.stopDeviceMotionListening】${system}端正常调用`, done => {
        swan.stopDeviceMotionListening({
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});