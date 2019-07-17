/**
 * @file spec/system
 * @author lijia30@baidu.com
 * @description  系统信息相关API接口
 */
import {swan} from '../../src/swan/index';
import {normalMethod} from '../utils/constant'
const expect = require('chai').expect;
import schemeMap from '../utils/scheme-map';
import $ from '../../src/utils/_core';
import {boxjs} from '../../src/boxjs';

const system = $.isIOS ? 'ios' : 'android';


describe('API【getSystemInfoSync】测试', () => {
    it(`【swan.getSystemInfoSync】${system}端正常调用`, () => {
        let systemInfo = swan.getSystemInfoSync();
        expect(systemInfo).to.be.a('object');
        expect(systemInfo).to.have.all.keys('batteryLevel', 'version', 'system',
            'brand', 'windowHeight', 'host', 'pixelRatio', 'screenHeight',
            'SDKVersion', 'statusBarHeight', 'language', 'platform',
            'devicePixelRatio', 'windowWidth', 'model', 'screenWidth', 'fontSizeSetting');
    });
});

describe('API【getSystemInfo】测试', () => {
    it(`【swan.getSystemInfo】${system}端正常调用`, done => {
        swan.getSystemInfo({
            success: systemInfo => {
                expect(systemInfo).to.be.a('object');
                expect(systemInfo).to.have.all.keys('batteryLevel', 'version', 'system',
                    'brand', 'windowHeight', 'host', 'pixelRatio', 'screenHeight',
                    'SDKVersion', 'statusBarHeight', 'language', 'platform',
                    'devicePixelRatio', 'windowWidth', 'model', 'screenWidth', 'fontSizeSetting');
                done();
            }
        });
    });
});

describe('API【getEnvInfoSync】测试', () => {
    it(`【swan.getEnvInfoSync】${system}端正常调用`, () => {
        let EnvInfo = swan.getEnvInfoSync();
        expect(EnvInfo).to.be.a('object');
        expect(EnvInfo).to.have.all.keys('appKey', 'appName', 'lastAppURL',
            'sdkVersion', 'scheme');
        expect(EnvInfo.scheme).to.be.equal('baiduboxapp');
    });
});

describe('API【onMemoryWarning】测试', () => {
    it(`【swan.onMemoryWarning】${system}端正常调用`, done => {
        swan.onMemoryWarning((res) => {
            expect(res).to.be.a('object');
            done();
        })
    });
});

describe('API【getNetworkType】测试', () => {
    it(`【swan.getNetworkType】${system}端正常调用, success函数正常执行`, done => {
        swan.getNetworkType({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('networkType')
                done();
            }
        })
    });

    it(`【swan.getNetworkType】${system}端正常调用, complete函数正常执行`, done => {
        swan.getNetworkType({
            complete: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('networkType');
                done();
            }
        })
    });
});

describe('API【setClipboardData】测试', () => {
    it(`【swan.setClipboardData】${system}端正常调用, success函数正常执行`, done => {
        swan.setClipboardData({
            data: 'test unit test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        })
    });

    it(`【swan.setClipboardData】${system}端正常调用, complete函数正常执行`, done => {
        swan.setClipboardData({
            data: 'test unit test',
            complete: res => {
                done();
            }
        })
    });

    it(`【swan.setClipboardData】${system}端异常调用, 未传入参数data`, done => {
        swan.setClipboardData({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('setClipboardData:fail parameter error: data is required and should not be an empty string');
                done();
            }
        })
    });


    it(`【swan.setClipboardData】${system}端异常调用, 传入参数data为空字符串`, done => {
        swan.setClipboardData({
            data: '',
            fail: err => {
                expect(err).to.be.a('object');
                console.log(err);
                expect(err.errMsg).to.be.equal('setClipboardData:fail parameter error: data is required and should not be an empty string')
                done();
            }
        })
    });

    it(`【swan.setClipboardData】${system}端异常调用, 传入参数data类型错误`, done => {
        swan.setClipboardData({
            data: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]data type error. must be "string"');
                done();
            }
        })
    });

});

describe('API【getClipboardData】测试', () => {
    it(`【swan.getClipboardData】${system}端正常调用, success函数正常执行`, done => {
        swan.getClipboardData({
            success: res => {
                expect(res).to.be.a('object');
                expect(res.data).to.be.equal('baidu');
                done();
            }
        })
    });

    it(`【swan.getClipboardData】${system}端正常调用, complete函数正常执行`, done => {
        swan.getClipboardData({
            complete: res => {
                done();
            }
        })
    });
});


describe('API [boxjs.getSystemInfoSync】测试', () => {
    it(`【boxjs.getSystemInfoSync】${system}端正常调用`, () => {
        let systemInfo = boxjs.data.get({name: 'utils-systemInfoSync'});
        expect(systemInfo).to.be.a('object');
        expect(systemInfo).to.have.all.keys('batteryLevel', 'version', 'system',
            'brand', 'windowHeight', 'host', 'pixelRatio', 'screenHeight',
            'SDKVersion', 'statusBarHeight', 'language', 'platform',
            'devicePixelRatio', 'windowWidth', 'model', 'screenWidth', 'fontSizeSetting');
    });
});



describe('API [boxjs.getSlaveIdSync】测试', () => {
    it(`【boxjs.getSlaveIdSync】${system}端正常调用`, () => {
        let slaveId = boxjs.data.get({name: 'swan-slaveIdSync'});
        expect(slaveId).to.be.a('object');
        expect(slaveId).to.have.all.keys('slaveId');
    });
});


describe('API [boxjs.getAppInfoSync】测试', () => {
    it(`【boxjs.getAppInfoSync】${system}端正常调用`, () => {
        let appInfo = boxjs.data.get({name: 'swan-appInfoSync'});
        expect(appInfo).to.be.a('object');
        expect(appInfo).to.have.all.keys('cuid', 'showBy', 'appLaunchScheme',
            'clkid', 'scene', 'iconUrl', 'extraData', 'appId', 'appname', 'appid',
            'mtjCuid', 'srcAppId', 'srcAppPage');
    });
});

