/**
 * @file spec/_naSwan
 * @author lijia30@baidu.com
 * @description  调用_naSwan相关函数
 */

import queryToJson from '../../src/utils/queryToJson';
import jsonToQuery from '../../src/utils/jsonToQuery';
import {
    arrayBufferToBase64,
    uint8ToBase64,
    convertNumberToString,
    navigateToProgramFilter
} from '../../src/utils/filter'

import {mockMasterManager} from '../utils/mockMethod'
import {
    validateUrl,
    convertObjectValueToString,
    getParamType,
    getCurrentAccessUri,
    getSlaveId,
    getProgramPath,
    argCombine,
    supportLevel2Callback,
    getMap,
    getDescription,
    setEventEmitterHandle,
    getEventEmitterHandle,
    isSupportIosMessageHandlers
} from '../../src/utils/common';
const expect = require('chai').expect;


describe('queryToJson', () => {
    it('queryToJson should return correct result', () => {
        let url = 'http://smartprogram.baidu.com/docs/develop/api/nacomponent/#showFavoriteGuide/?test=1&abc=111'
        let result = queryToJson(url);
        expect(result).to.be.a('object');
        expect(result.test).to.be.equal('1');
        expect(result.abc).to.be.equal('111');
    });
});

describe('jsonToQuery', () => {
    it('jsonToQuery should return correct result when params was a string', () => {
        let data =  'aaa';
        expect(jsonToQuery(data)).to.be.equal(data);
    });

    it('jsonToQuery should return correct result when params was a json', () => {
        let data =  {
            a: 111,
            b: 222
        };
        expect(jsonToQuery(data)).to.eql('a=111&b=222');
    });
});

describe('uint8ToBase64', () => {
    it('uint8ToBase64 should return correct result', () => {
        let data = new Uint8ClampedArray(2);
        expect(uint8ToBase64(data)).to.be.equal('AAA=');
    });
});

describe('convertNumberToString', () => {
    it('convertNumberToString should return correct result', () => {
        let data = {
            a: 'test',
            b: () => {
                console.log('aaa');
            }
        }
        expect(convertNumberToString(data)).to.eql(data);
    });
});

describe('arrayBufferToBase64', () => {
    it('arrayBufferToBase64 should return correct result', () => {
        let data = new ArrayBuffer(2);
        expect(arrayBufferToBase64(data)).to.be.equal('AAA=');
    });
});

describe('navigateToProgramFilter', () => {
    it('navigateToProgramFilter should return correct result when params.envVersion == "develop"', () => {
        let data = {
            appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
            path: '', // 打开的页面路径，如果为空则打开首页
            extraData: {
                foo: 'baidu'
            },
            envVersion: 'develop'
        };
        let result = navigateToProgramFilter(data);
        expect(result).to.be.a('object');
        expect(result.appKey).to.equal('4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c_dev');

    });

    it('navigateToProgramFilter should return correct result when params.envVersion == "trial"', () => {
        let data = {
            appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
            path: '', // 打开的页面路径，如果为空则打开首页
            extraData: {
                foo: 'baidu'
            },
            envVersion: 'trial'
        };
        let result = navigateToProgramFilter(data);
        expect(result).to.be.a('object');
        expect(result.appKey).to.equal('4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c_trial');
    });
});

describe('validateUrl', () => {
    it('validateUrl should be a function', () => {
        expect(validateUrl).to.be.a('function');
    });
    
    it('validateUrl should return result true when url contain "https" or "http"', () => {
        let url = 'http://smartprogram.baidu.com/docs/develop/api/nacomponent/#showFavoriteGuide/?test=1&abc=111'
        let result = validateUrl(url);
        expect(result).to.be.true;
    });

    it("validateUrl should return result false when url doesn't contain https or http when urlType === http", () => {
        let url = 'wss://smartprogram.baidu.com/docs/develop/api/nacomponent/#showFavoriteGuide/?test=1&abc=111'
        let result = validateUrl(url);
        expect(result).to.be.false;
    });

    it("validateUrl should return result true when url contain ws or wss when urlType === websocket", () => {
        let url = 'wss://smartprogram.baidu.com/docs/develop/api/nacomponent/#showFavoriteGuide/?test=1&abc=111'
        let result = validateUrl(url, 'websocket');
        expect(result).to.be.true;
    });

    it("validateUrl should return result true when url doesn't contain ws or wss when urlType === websocket", () => {
        let url = 'https://smartprogram.baidu.com/docs/develop/api/nacomponent/#showFavoriteGuide/?test=1&abc=111'
        let result = validateUrl(url, 'websocket');
        expect(result).to.be.false;
    });

    it("validateUrl should return result false urlType !== websocket && urlType !== 'http'", () => {
        let url = 'https://smartprogram.baidu.com/docs/develop/api/nacomponent/#showFavoriteGuide/?test=1&abc=111'
        let result = validateUrl(url, 'test');
        expect(result).to.be.false;
    });
});

describe('getParamType', () => {
    it('getParamType should be a function', () => {
        expect(getParamType).to.be.a('function');
    });

    it('getParamType should return Number when param is typeof number', () => {
        let param = 1;
        let result  = getParamType(param);
        expect(result).to.be.equal('Number');
    });

    it('getParamType should return String when param is typeof string', () => {
        let param = 'test';
        let result  = getParamType(param);
        expect(result).to.be.equal('String');
    });

    it('getParamType should return Array when param is typeof array', () => {
        let param = [1, 2, 3];
        let result  = getParamType(param);
        expect(result).to.be.equal('Array');
    });

    it('getParamType should return Undefined when param is typeof undefined', () => {
        let param = undefined;
        let result  = getParamType(param);
        expect(result).to.be.equal('Undefined');
    });

});

describe('convertObjectValueToString', () => {
    it('convertObjectValueToString should be a function', () => {
        expect(convertObjectValueToString).to.be.a('function');
    });

    it('convertObjectValueToString should return correct result when value is typeof number', () => {
        let obj = {test: 1}
        let result  = convertObjectValueToString(obj);
        expect(result).to.be.a('object');
        expect(typeof result.test).to.be.equal('string');

    });

    it('convertObjectValueToString should return correct result when value is typeof string', () => {
        let obj = {test: 'unit test'}
        let result  = convertObjectValueToString(obj);
        expect(result).to.be.a('object');
        expect(typeof result.test).to.be.equal('string');

    });

    it('convertObjectValueToString should return correct result when value is typeof array', () => {
        let obj = {test: [111, 222]}
        let result  = convertObjectValueToString(obj);
        expect(result).to.be.a('object');
        expect(typeof result.test).to.be.equal('string');

    });
});

describe('getCurrentAccessUri', () => {
    afterEach(() => {
        window.masterManager = undefined;
    })
    it('getCurrentAccessUri should be a function', () => {
        expect(getCurrentAccessUri).to.be.a('function');
    });

    it('getCurrentAccessUri should return correct result when masterManager is exist', () => {
        mockMasterManager();
        let result  = getCurrentAccessUri();
        expect(result).to.be.equal('api unit test');

    });

    it('getCurrentAccessUri should return correct result when masterManager is not exist', () => {
        let result  = getCurrentAccessUri();
        expect(result).to.be.equal('');

    });

});

describe('getSlaveId', () => {
    afterEach(() => {
        window.masterManager = undefined;
    })
    it('getSlaveId should be a function', () => {
        expect(getSlaveId).to.be.a('function');
    });

    it('getSlaveId should return correct result when masterManager is exist', () => {
        mockMasterManager();
        let result  = getSlaveId();
        expect(result).to.be.equal(2);

    });

    it('getSlaveId should return correct result when masterManager is not exist', () => {
        let result  = getSlaveId();
        expect(result).to.be.equal(1);

    });

});

describe('getProgramPath', () => {
    afterEach(() => {
        window.masterManager = undefined;
    })
    it('getProgramPath should be a function', () => {
        expect(getProgramPath).to.be.a('function');
    });

    it('getProgramPath should return correct result', () => {
        mockMasterManager();
        let result  = getProgramPath('/unit/unitTest');
        let result1 = getProgramPath('../unit/unitTest')
        expect(result).to.be.equal('unit/unitTest');
        expect(result1).to.be.equal('pages/unit/unitTest');

    });
});

describe('argCombine', () => {
    it('argCombine should be a function', () => {
        expect(argCombine).to.be.a('function');
    });

    it('argCombine should return correct result', () => {
        let syncList = [
            {
                name: 'getSystemInfoSync',
                authority: 'v19/utils',
                path: 'getSystemInfoSync',
                args: []
            }
        ];
        let asyncList = [
            {
                name: 'showToast',
                authority: 'v11/swan',
                path: 'showToast',
                args: [
                    {name: 'title', value: 'string='},
                    {name: 'message', value: 'string'},
                    {name: 'icon', value: 'string'},
                    {name: 'mask', value: 'boolean'},
                    {name: 'time', value: 'string='},
                    {name: 'type', value: 'string='},
                    {name: 'image', value: 'string'}
                ]
            },
            {
                name: 'getPhoneNumber',
                authority: 'v19/swan',
                path: 'getPhoneNumber',
                args: [
                    {name: 'cb', value: 'string='},
                    {name: 'success', value: 'function'}
                ]
            }
        ];

        let result = argCombine(syncList, asyncList);
        expect(result).to.be.a('array');
        expect(result.length).to.be.equal(3);
        result.forEach(item => {
            expect(item).to.have.all.keys('scheme', 'invoke', 'method', 'name', 'authority', 'path', 'args');
        })
    });
});

describe('supportLevel2Callback', () => {
    it('supportLevel2Callback should be a function', () => {
        expect(supportLevel2Callback).to.be.a('function');
    });

    it('supportLevel2Callback should return correct result when data has attribute cb', () => {
        let data = {
            test: 'aaa',
            cb: '_level2Callback'
        };
        let result  = supportLevel2Callback(data);
        expect(result).to.be.equal(data);

    });

    it('supportLevel2Callback should return correct result when data.callback is a function', done => {
        let data = {
            test: 'aaa',
            callback: () => {
                done();
            }
        };
        let result  = supportLevel2Callback(data);
        window[result.cb]();

    });

    it('supportLevel2Callback should return correct result when data.callback is a function', () => {
        let data = {
            test: 'aaa',
            callback: '_level2Callback'
        };
        let result  = supportLevel2Callback(data);
        expect(result.cb).to.be.equal('_level2Callback');
        expect(result.callback).to.be.undefined;

    });

});

describe('getMap', () => {
    it('getMap should be a function', () => {
        expect(getMap).to.be.a('function');
    });

    it('getMap should return correct result', () => {
        let arr = ['a', 'b', 'c'];
        let map = {
            a: 'api',
            b: 'unit',
        }
        let result  = getMap(arr, map);
        expect(result).to.be.an('object');
        expect(result).to.eql(map);

    });

});

describe('getDescription', () => {
    it('getDescription should be a function', () => {
        expect(getDescription).to.be.a('function');
    });

    it('getDescription should return correct result', () => {
        let description = [{
                name: 'getSystemInfoSync',
                authority: 'v19/utils',
                path: 'getSystemInfoSync',
                args: []
            },
            {
                name: 'getStorageInfoSync',
                authority: 'v19/swan',
                path: 'getStorageInfoSync',
                args: []
            },
            {
                name: 'clearStorageSync',
                authority: 'v19/swan',
                path: 'clearStorageSync',
                args: []
            }
        ];
        let arr = ['getSystemInfoSync', 'clearStorageSync'];
        let expectedRes = [
            {
                name: 'getSystemInfoSync',
                authority: 'v19/utils',
                path: 'getSystemInfoSync',
                args: []
            },
            {
                name: 'clearStorageSync',
                authority: 'v19/swan',
                path: 'clearStorageSync',
                args: []
            }
        ]
        let result  = getDescription(arr, description);
        expect(result).to.be.an('array');
        expect(result.length).to.equal(2)
        expect(result).to.eql(expectedRes);

    });

});


describe('setEventEmitterHandle', () => {
    it('setEventEmitterHandle should be a function', () => {
        expect(getMap).to.be.a('function');
    });

    it('setEventEmitterHandle and  getEventEmitterHandle should return correct result', () => {
        let eventEmitter = 'test';
        setEventEmitterHandle(eventEmitter);
        expect(getEventEmitterHandle()).to.equal('test');
    });

});


describe('isSupportIosMessageHandlers', () => {
    it('isSupportIosMessageHandlers should be a function', () => {
        expect(getMap).to.be.a('function');
    });

    it('isSupportIosMessageHandlers should return correct result', () => {
        expect(isSupportIosMessageHandlers()).to.be.false;

    });

});





