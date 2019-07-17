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

describe('API【onAccelerometerChange】测试', () => {
    it(`【swan.onAccelerometerChange】${system}端正常调用`, done => {

        swan.onAccelerometerChange(res => {
            expect(res).to.be.a('object');
            expect(res).to.have.all.keys('x', 'y', 'z');
            done();
        });
        events.emit('onAccelerometerChange', {x: 12, y: 30, z: 40});
    });
});

describe('API【startAccelerometer】测试', () => {
    it(`【swan.startAccelerometer】${system}端正常调用`, done => {
        swan.startAccelerometer({
            interval: 'ui',
            cb: 'cb',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.startAccelerometer】${system}端正常调用，complete正常调用`, done => {
        swan.startAccelerometer({
            interval: 'ui',
            cb: 'cb',
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.startAccelerometer】${system}端异常调用，interval类型异常`, done => {
        swan.startAccelerometer({
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

describe('API【stopAccelerometer】测试', () => {
    it(`【swan.stopAccelerometer】${system}端正常调用`, done => {
        swan.stopAccelerometer({
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});