/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  位置相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
import {mockMasterManager} from '../utils/mockMethod'
import {events} from '../../src/utils/event';
import {getSchemeParmas} from '../utils/mockMethod';
import {callbackRes, normalMethod} from '../utils/constant';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

const TranslateMarkerMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[params.cb](JSON.stringify(callbackRes));
    setTimeout(() => {
        window[callback](JSON.stringify(callbackRes));
    }, 50)
};

const mockTranslateMaker = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: TranslateMarkerMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: TranslateMarkerMethod
            }
        }
    };
};




describe('API【getLocation】测试', () => {
    it(`【swan.getLocation】${system}端正常调用`, done => {
        swan.getLocation({
            type: 'wgs84',
            altitude: true,
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('latitude', 'longitude', 'speed', 'accuracy', 'altitude',
                'altitude', 'verticalAccuracy', 'horizontalAccuracy', 'street', 'cityCode', 'city', 'country',
                'province', 'streetNumber', 'district');
                done();
            }
        });
    });

    it(`【swan.getLocation】${system}端正常调用，仅传入success`, done => {
        swan.getLocation({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('latitude', 'longitude', 'speed', 'accuracy', 'altitude',
                    'altitude', 'verticalAccuracy', 'horizontalAccuracy', 'street', 'cityCode', 'city', 'country',
                    'province', 'streetNumber', 'district');
                done();
            }
        });
    });

    it(`【swan.getLocation】${system}端异常调用，type类型错误`, done => {
        swan.getLocation({
            type: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]type type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.getLocation】${system}端异常调用，altitude类型错误`, done => {
        swan.getLocation({
            altitude: 'test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]altitude type error. must be "boolean"');
                done();
            }
        });
    });

});

describe('API【chooseLocation】测试', () => {
    it(`【swan.chooseLocation】${system}端正常调用`, done => {
        swan.chooseLocation({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('latitude', 'longitude','name', 'address');
                done();
            }
        });
    });

});

describe('API【openLocation】测试', () => {
    it(`【swan.openLocation】${system}端正常调用`, done => {
        swan.openLocation({
            latitude: 113.11111,
            longitude: 256.33333,
            scale: 18,
            name: 'test',
            address: 'aaaaa test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });
    it(`【swan.openLocation】${system}端正常调用，未传入latitude`, done => {
        swan.openLocation({
            longitude: 256.33333,
            scale: 18,
            name: 'test',
            address: 'aaaaa test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]latitude is required.');
                done();
            }
        });
    });
    it(`【swan.openLocation】${system}端正常调用，未传入longitude`, done => {
        swan.openLocation({
            latitude: 256.33333,
            scale: 18,
            name: 'test',
            address: 'aaaaa test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]longitude is required.');
                done();
            }
        });
    });

    it(`【swan.openLocation】${system}端异常调用，latitude类型错误`, done => {
        swan.openLocation({
            latitude: true,
            longitude: 256.33333,
            scale: 18,
            name: 'test',
            address: 'aaaaa test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]latitude type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.openLocation】${system}端异常调用，longitude类型错误`, done => {
        swan.openLocation({
            longitude: true,
            latitude: 256.33333,
            scale: 18,
            name: 'test',
            address: 'aaaaa test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]longitude type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.openLocation】${system}端异常调用，scale类型错误`, done => {
        swan.openLocation({
            longitude: 256.33333,
            latitude: 256.33333,
            scale: [],
            name: 'test',
            address: 'aaaaa test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]scale type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.openLocation】${system}端异常调用，name类型错误`, done => {
        swan.openLocation({
            longitude: 256.33333,
            latitude: 256.33333,
            scale: 18,
            name: {},
            address: 'aaaaa test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]name type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.openLocation】${system}端异常调用，address类型错误`, done => {
        swan.openLocation({
            longitude: 256.33333,
            latitude: 256.33333,
            scale: 18,
            name: 'test',
            address: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]address type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【createMapContext】测试', () => {
    before(() => {
        mockMasterManager();
        events.emit('componentStateChange', {
                componentName: "map",
                domId: "testMap",
                slaveId: 2,
                sanId: 'testSanId',
                state: "insert",
                type: "componentStateChange"
            }
        );
    });
    after(() => {
        normalMethod();
    })
    it(`【swan.createMapContext】${system}端正常调用, 返回一个mapContext`, () => {
        let mapContext = swan.createMapContext('testMap');
        expect(mapContext.mapId).to.be.equal('testMap');
        expect(mapContext.slaveId).to.be.equal(2);
        expect(mapContext.componentId).to.be.equal('2_map_testMap');
        expect(mapContext.getCenterLocation).to.be.a('function');
        expect(mapContext.moveToLocation).to.be.a('function');
        expect(mapContext.translateMarker).to.be.a('function');
        expect(mapContext.includePoints).to.be.a('function');
        expect(mapContext.getRegion).to.be.a('function');
        expect(mapContext.getScale).to.be.a('function');
        expect(mapContext._invokeMethod).to.be.a('function');
        let mapCotext2 = swan.createMapContext(1);
    });

    it(`【swan.createMapContext】${system}端正常调用, moveToLocation方法正常调用`, () => {
        let mapContext = swan.createMapContext('testMap');
        mapContext.moveToLocation();
    });

    it(`【swan.createMapContext】${system}端正常调用, getCenterLocation方法正常调用`, done => {
        let mapContext = swan.createMapContext('testMap');
        mapContext.getCenterLocation({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('latitude', 'longitude');
                done();
            }
        });
    });

    it(`【swan.createMapContext】${system}端正常调用, includePoints方法正常调用`, done => {
        let mapContext = swan.createMapContext('testMap');
        mapContext.includePoints({
            points:[{"latitude":"23","longitude":"113.33"},{"latitude":"23","longitude":"113.3345211"}],
            padding:["10","0","0","0"],
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });

    });

    it(`【swan.createMapContext】${system}端异常调用, includePoints方法未传入points参数`, done => {
        let mapContext = swan.createMapContext('testMap');
        mapContext.includePoints({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]points is required.');
                done();
            }
        });

    });

    it(`【swan.createMapContext】${system}端异常调用, includePoints方法points参数类型错误`, done => {
        let mapContext = swan.createMapContext('testMap');
        mapContext.includePoints({
            points: 'string',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]points type error. must be "Array"');
                done();
            }
        });

    });

    it(`【swan.createMapContext】${system}端正常调用, getRegion方法正常调用`, done => {
        let mapContext = swan.createMapContext('testMap');
        mapContext.getRegion({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('southwest', 'northeast');
                expect(res.southwest).to.have.all.keys('latitude', 'longitude');
                expect(res.northeast).to.have.all.keys('latitude', 'longitude');
                done();
            }
        });
    });

    it(`【swan.createMapContext】${system}端正常调用, getScale方法正常调用`, done => {
        let mapContext = swan.createMapContext('testMap');
        mapContext.getScale({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('scale');
                done();
            }
        });
    });

    it(`【swan.createMapContext】${system}端正常调用, translateMarker方法正常调用`, done => {
        let mapContext = swan.createMapContext('testMap');
        mockTranslateMaker();
        mapContext.translateMarker({
            markerId: 1,
            destination: {
                latitude:'40.048829',
                longitude:'116.280414'
            },
            autoRotate:true,
            'rotate':'90',
            'duration':'1000',
            animationEnd: endRes => {
               console.log(endRes);
            },
            success: res => {
                expect(res).to.be.a('object');
                done()
            }
        });
    });


});