/**
 * @file spec/system
 * @author shixinzhe@baidu.com
 * @description  设备相关API接口
 */
import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
import {events} from '../../src/utils/event';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';


describe('API【onCompassChange】测试', () => {
    it(`【swan.onCompassChange】${system}端正常调用`, done => {
        swan.onCompassChange(res => {
            console.log(res);
            expect(res).to.be.a('object');
            expect(res.direction).to.be.a('number');
            done();
        });
        events.emit('onCompassChange', {direction: 1});
    });
});

describe('API【startCompass】测试', () => {
    it(`【swan.startCompass】${system}端正常调用`, done => {
        swan.startCompass({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.startCompass】${system}端正常调用, complete函数执行`, done => {
        swan.startCompass({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【stopCompass】测试', () => {
    it(`【swan.stopCompass】${system}端正常调用`, done => {
        swan.stopCompass({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.stopCompass】${system}端正常调用, complete函数执行`, done => {
        swan.stopCompass({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【scanCode】测试', () => {
    it(`【swan.scanCode】${system}端正常调用`, done => {
        swan.scanCode({
            success: res => {
                console.log(res);
                expect(res).to.be.a('Object');
                expect(res).to.have.all.keys('result', 'scanType', 'charSet');
                done();
            }
        });
    });
    it(`【swan.scanCode】${system}端正常调用, complete函数执行`, done => {
        swan.scanCode({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('Object');
                done();
            }
        });
    });
});

describe('API【getScreenBrightness】测试', () => {
    it(`【swan.getScreenBrightness】${system}端正常调用`, done => {
        swan.getScreenBrightness({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                expect(res.value).to.be.a('number');
                done();
            }
        });
    });
    it(`【swan.getScreenBrightness】${system}端正常调用, complete函数执行`, done => {
        swan.getScreenBrightness({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【setScreenBrightness】测试', () => {
    it(`【swan.setScreenBrightness】${system}端正常调用`, done => {
        swan.setScreenBrightness({
            value: 0.5,
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setScreenBrightness】${system}端正常调用, complete函数执行`, done => {
        swan.setScreenBrightness({
            value: 0,
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setScreenBrightness】${system}端调用失败，缺少参数value`, done => {
        swan.setScreenBrightness({
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]value is required.');
                done();
            }
        });
    });
    it(`【swan.setScreenBrightness】${system}端正常调用,value为不在[0 - 1]之间(value的范围由端去校验)`, done => {
        swan.setScreenBrightness({
            value: 123,
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setScreenBrightness】${system}端调用失败,value类型异常`, done => {
        swan.setScreenBrightness({
            value: {},
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]value type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【setKeepScreenOn】测试', () => {
    it(`【swan.setKeepScreenOn】${system}端正常调用`, done => {
        swan.setKeepScreenOn({
            keepScreenOn: true,
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setKeepScreenOn】${system}端正常调用`, done => {
        swan.setKeepScreenOn({
            keepScreenOn: false,
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setKeepScreenOn】${system}端正常调用, complete函数执行`, done => {
        swan.setKeepScreenOn({
            keepScreenOn: true,
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setKeepScreenOn】${system}端调用失败，缺少参数keepScreenOn`, done => {
        swan.setKeepScreenOn({
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]keepScreenOn is required.');
                done();
            }
        });
    });
    it(`【swan.setKeepScreenOn】${system}端调用失败,setKeepScreenOn类型异常`, done => {
        swan.setKeepScreenOn({
            keepScreenOn: 'aaa',
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]keepScreenOn type error. must be "boolean"');
                done();
            }
        });
    });
    it(`【swan.setKeepScreenOn】${system}端调用失败,setKeepScreenOn类型异常`, done => {
        swan.setKeepScreenOn({
            value: null,
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]keepScreenOn is required.');
                done();
            }
        });
    });
    it(`【swan.setKeepScreenOn】${system}端调用失败,setKeepScreenOn类型异常`, done => {
        swan.setKeepScreenOn({
            value: {},
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]keepScreenOn is required.');
                done();
            }
        });
    });
});

describe('API【getBatteryInfoSync】测试', () => {
    it(`【swan.getBatteryInfoSync】${system}端正常调用`, () => {
        let systemInfo = swan.getBatteryInfoSync();
        expect(systemInfo).to.be.a('object');
        console.log(systemInfo);
        expect(systemInfo).to.have.all.keys('level', 'isCharging');
    });
});

describe('API【getBatteryInfo】测试', () => {
    it(`【swan.getBatteryInfo】${system}端正常调用`, done => {
        let systemInfo = swan.getBatteryInfo({
            success: res => {
                expect(res).to.be.a('object');
                console.log(systemInfo);
                expect(res).to.have.all.keys('level', 'isCharging');
                done();
            }
        });
    });
});

describe('API【onNetworkStatusChange】测试', () => {
    it(`【swan.onNetworkStatusChange】${system}端正常调用`, done => {
        swan.onNetworkStatusChange(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
        events.emit('onNetworkStatusChange', {
            isConnected: true,
            networkType: 'wifi'
        });
    });
});
