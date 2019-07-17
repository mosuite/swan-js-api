/**
 * @file spec/parser
 * @author lijia30@baidu.com
 * @description  parser相关函数
 */

import $ from '../../src/utils/_core';
import {
    parseMessage,
    aiParser,
    jsonParse,
    resNeedDecode,
    base64Decode,
    base64Parser,
    base64ToArrayBuffer,
    settingThunkHandle,
    base64ToUint8,
    getStorageAllThunkHandler
} from '../../src/utils/parser';
const expect = require('chai').expect;

describe('parseMessage', () => {
    let data = {
        test: 'api-unit-test'
    };

    it('parseMessage should return correct result', () => {
        expect(parseMessage(data)).to.eql(data);
    });

    it(`parseMessage should return catch the error`, () => {
        let message = 'aaaaaaaaa';
        expect(parseMessage(message)).not.to.eql(data);
    });
});

describe('aiParser', () => {
    let data = {
        "status": "0",
        "message": "调起成功",
        "data": {
            "body": "{\"log_id\": 7976699603333028510, \"result\": [{\"score\": 0.50673258304596, \"name\": \"郁金香\"}, {\"score\": 0.41411507129669, \"name\": \"莲\"}, {\"score\": 0.087718211114407, \"name\": \"八棱海棠\"}, {\"score\": 0.026541441679001, \"name\": \"石竹\"}, {\"score\": 0.023136613890529, \"name\": \"冬红\"}]}",
            "statusCode": "200",
            "header": {
                "Content-Type": "application/json",
                "P3p": "CP=\" OTI DSP COR IVA OUR IND COM \", CP=\" OTI DSP COR IVA OUR IND COM \"",
                "X-Bfe-Svbbrers": "MjIwLjE4MS4zOC4xMTM=,1.0",
                "Appid": "11182003",
                "Access-Control-Allow-Origin": "*",
                "Set-Cookie": "BAIDUID=0D0216F9975354EDBF1B3080DCAB8EFC:FG=1; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2145916555; path=/; domain=.baidu.com; version=1, BAIDUID=B8481B9F961D47459187DF72E4E99278:FG=1; expires=Sun, 29-Mar-20 10:19:58 GMT; max-age=31536000; path=/; domain=.baidu.com; version=1",
                "Server": "BWS",
                "Tracecode": "11986650720316578570033018",
                "Date": "Sat, 30 Mar 2019 10:19:58 GMT",
                "Traceid": "1553941198046200167411616676825054048262",
                "Content-Length": "287",
                "Connection": "keep-alive",
                "Vary": "Accept-Encoding"
            }
        }
    };

    it('aiParser should return correct result', () => {
        let result = aiParser(data);
        expect(result).to.be.a('object');
        expect(result.statusCode).to.equal('200');
        expect(result.data).to.be.a('object');
    });

});


describe('jsonParse', () => {
    let data = {
        test: 'api-unit-test',
        status: '0'
    };

    it('jsonParse should return correct result', () => {
        expect(jsonParse(JSON.stringify(data))).to.eql({
            test: 'api-unit-test',
            status: 0
        });
    });

    it(`jsonParse should return catch the error`, () => {
        expect(jsonParse(data)).not.to.eql({
            test: 'api-unit-test',
            status: 0
        });
    });
});


describe('resNeedDecode', () => {
    let data = {
        "status": 0,
        "message": "调起成功",
        "data": {
            "tempFiles": [{
                "path": "bdfile://tmp_a68232d8792a88d05cc4efdc5985a738original.jpg",
                "size": 61769
            }],
            "tempFilePaths": ["bdfile://tmp_a68232d8792a88d05cc4efdc5985a738original.jpg"]
        }
    };

    let dataString = {
        "status": 0,
        "message": "调起成功",
        "data": 'http%3A%2F%2Ftest%3Fa%3D1%26b%3D2'

    };

    it('resNeedDecode should return correct result', () => {
        expect(resNeedDecode(data)).to.eql(data);
    });

    it('resNeedDecode should return correct result', () => {
        expect(resNeedDecode(dataString).data).to.equal('http://test?a=1&b=2');
    });
});

describe('base64Decode', () => {
    let data = 'YXBpIHVuaXQgLS10ZXN0'

    it('base64Decode should return correct result', () => {
        expect(base64Decode(data)).to.equal('api unit --test');
    });
});

describe('base64Parser', () => {
    let data = {
        "status": 0,
        "message": "调起成功",
        "data": 'YXBpIHVuaXQgLS10ZXN0'
    };

    it('base64Parser should return correct result', () => {
        expect(base64Parser(data).data).to.equal('api unit --test');
    });
});

describe('base64ToUint8', () => {
    let data = 'YXBpIHVuaXQgLS10ZXN0'
    it('base64ToUint8 should return correct result', () => {
        expect(base64ToUint8(data)).to.be.an('uint8ClampedArray');
    });
});

describe('base64ToArrayBuffer', () => {
    let data = 'YXBpIHVuaXQgLS10ZXN0'
    it('base64ToArrayBuffer should return correct result', () => {
        expect(base64ToArrayBuffer(data)).to.be.an('arrayBuffer');
    });
});

describe('settingThunkHandle', () => {
    let data = {
        "status": 0,
        "message": "调起成功",
        "data": {
            "authSetting": {
                "scope.userInfo": true,
                "scope.userLocation": true,
                "scope.writePhotosAlbum": true,
                "scope.camera": true
            }
        }
    }
    let data1 = {
        status: 202,
        message: 'wrong'
    }
    it('settingThunkHandle should return correct result', () => {
        let result = settingThunkHandle(data);
        expect(result).to.be.a('object');
        console.log(result.data);
        expect(result.data).to.have.keys('authSetting');
    });

    it('settingThunkHandle should return correct result when status was not 0', () => {
        let result = settingThunkHandle(data1);
        expect(result).to.be.a('object');
        expect(result).to.have.keys(data1);
    });
});


describe('getStorageAllThunkHandler', () => {
    let data = {
        status: "0",
        message: "调起成功",
        data: {
            keys: ["test", "mtj_key", "mtj_uuid"],
            limitSize: 10485760,
            currentSize: 470
        }
    };
    it('getStorageAllThunkHandler should return correct result', () => {
        let result = getStorageAllThunkHandler(data);
        expect(result).to.be.a('object');
        expect(result.data).to.have.all.keys('keys', 'limitSize', 'currentSize');
    });

});




