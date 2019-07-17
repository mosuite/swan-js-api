/**
 * @file spec/system
 * @author lijia30@baidu.com
 * @description  上传文件和下载文件API接口
 */

import {swan} from '../../src/swan/index';
const expect = require('chai').expect;
import $ from '../../src/utils/_core';
import {getSchemeParmas, methodAsync} from '../utils/mockMethod';
import schemeMap from '../utils/scheme-map';
import {callbackRes, normalMethod} from '../utils/constant';


const system = $.isIOS ? 'ios' : 'android';

const onProgressMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(callbackRes));
    window[params.cb](JSON.stringify(schemeMap[schemeStr].data));
    setTimeout(() => {
        window[params.onProgressUpdate](JSON.stringify(schemeMap[schemeStr].progressData));
    }, 50);
};

const progressMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: onProgressMockMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: onProgressMockMethod
            }
        }
    };
};

const onAbortMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(callbackRes));
    setTimeout(() => {
        window[params.cb](JSON.stringify( schemeMap[schemeStr].data));
    }, 100);
};



describe('API【downloadFile】测试', () => {
    afterEach(() => {
        normalMethod();
    })
    it(`【swan.downloadFile】${system}端正常调用`, done => {
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).have.all.keys('statusCode', 'tempFilePath');
                done();
            }
        })
    });

    it(`【swan.downloadFile】${system}端异常调用, 未传入url参数`, done => {
        swan.downloadFile({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]url is required.');
                done();
            }
        })
    });

    it(`【swan.downloadFile】${system}端异常调用, 传入url参数类型错误`, done => {
        swan.downloadFile({
            url: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
                done();
            }
        })
    });

    it(`【swan.downloadFile】${system}端异常调用, 传入header参数类型错误`, done => {
        swan.downloadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            header: 'test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]header type error. must be "object"');
                done();
            }
        })
    });

    it(`【swan.downloadFile】应该返回一个downloadTask`, done => {
        let downloadTask = swan.downloadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            success: res => {
                expect(downloadTask._requestState).to.be.true;
                expect(downloadTask._reqId).to.be.ok;
                expect(downloadTask._requestId).to.be.ok;
                done();
            }
        })
    });

    it(`【swan.downloadFile】能够正常调用abort`, done => {
        let downloadTask = swan.downloadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            success:  res => {
                done();
            }
        });
        downloadTask.abort({
            success: res => {
                console.log(11111111, res);
                done();
            }
        });

    });

    it(`【swan.downloadFile】能够正常调用onProgressUpdate`, done => {
        progressMethod();
        let downloadTask = swan.downloadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            success: res => {
                expect(downloadTask._requestState).to.be.true;
                expect(downloadTask._reqId).to.be.ok;
                expect(downloadTask._requestId).to.be.ok;
                done();
            }
        });

        downloadTask.onProgressUpdate(res => {
            expect(res).to.be.a('object');
            expect(res).have.all.keys('progress', 'totalBytesWritten', 'totalBytesExpectedToWrite');
            done();
        });
    });
});


describe('API【uploadFile】测试', () => {
    afterEach(() => {
        normalMethod();
    })
    it(`【swan.uploadFile】${system}端正常调用`, done => {
        swan.uploadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            filePath: 'bdfile://tmp_b952308097828e772329d0ff3c9466f1.html',
            name: 'test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res.data).have.all.keys('errno', 'errMsg');
                done();
            }
        })
    });

    it(`【swan.uploadFile】${system}端异常调用, 未传入url参数`, done => {
        swan.uploadFile({
            filePath: 'bdfile://tmp_b952308097828e772329d0ff3c9466f1.html',
            name: 'test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]url is required.');
                done();
            }
        })
    });

    it(`【swan.uploadFile】${system}端异常调用, 传入url参数类型错误`, done => {
        swan.uploadFile({
            url: [],
            filePath: 'bdfile://tmp_b952308097828e772329d0ff3c9466f1.html',
            name: 'test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
                done();
            }
        })
    });

    it(`【swan.uploadFile】${system}端异常调用, 未传入filePath参数`, done => {
        swan.uploadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            name: 'test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath is required.');
                done();
            }
        })
    });

    it(`【swan.uploadFile】${system}端异常调用, 传入filePath参数类型错误`, done => {
        swan.uploadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            filePath: true,
            name: 'test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath type error. must be "string"');
                done();
            }
        })
    });

    it(`【swan.uploadFile】${system}端异常调用, 未传入name参数`, done => {
        swan.uploadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            filePath: 'bdfile://tmp_b952308097828e772329d0ff3c9466f1.html',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]name is required.');
                done();
            }
        })
    });

    it(`【swan.uploadFile】${system}端异常调用, 传入name参数类型错误`, done => {
        swan.uploadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            filePath: 'bdfile://tmp_b952308097828e772329d0ff3c9466f1.html',
            name: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]name type error. must be "string"');
                done();
            }
        })
    });

    it(`【swan.uploadFile】应该返回一个uploadTask`, done => {
        let uploadTask = swan.uploadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            filePath: 'bdfile://tmp_b952308097828e772329d0ff3c9466f1.html',
            name: 'test',
            success: res => {
                expect(uploadTask._requestState).to.be.true;
                expect(uploadTask._reqId).to.be.ok;
                expect(uploadTask._requestId).to.be.ok;
                done();
            }
        })
    });

    it(`【swan.uploadFile】能够正常调用abort`, done => {
        let uploadTask = swan.uploadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            filePath: 'bdfile://tmp_b952308097828e772329d0ff3c9466f1.html',
            name: 'test',
            success:  res => {
                done();
            }
        });
        uploadTask.abort({
            success: res => {
                console.log(11111111, res);
                done();
            }
        });

    });

    it(`【swan.uploadFile】能够正常调用onProgressUpdate`, done => {
        progressMethod();
        let uploadTask = swan.uploadFile({
            url: 'https://smartprogram.baidu.com/xxx',
            filePath: 'bdfile://tmp_b952308097828e772329d0ff3c9466f1.html',
            name: 'test',
            success: res => {
                done();
            }
        });

        uploadTask.onProgressUpdate(res => {
            expect(res).to.be.a('object');
            expect(res).have.all.keys('progress', 'totalBytesSent', 'totalBytesExpectedToSend');
            done();
        });
    });
});

