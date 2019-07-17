/**
 * @file spec/file
 * @author bailonggang
 * @description  file相关接口单测：saveFile、getFileInfo、getSavedFileList、getSavedFileInfo、
 * removeSavedFile、openDocument
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';3
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【saveFile】测试', () => {
    it(`【swan.saveFile】${system}端正常调用`, done => {
        swan.saveFile({
            tempFilePath: 'xxx',
            success: res => {
                done();
            }
        });
    });

    it(`【swan.saveFile】${system}端正常调用，complete函数执行`, done => {
        swan.saveFile({
            tempFilePath: 'xxx',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.saveFile】${system}端正常调用，不传参数tempFilePath`, done => {
        swan.saveFile({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]tempFilePath is required.');
                done();
            }
        });
    });

    it(`【swan.saveFile】${system}端正常调用，传入参数tempFilePath类型错误`, done => {
        swan.saveFile({
            tempFilePath: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]tempFilePath type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【getFileInfo】测试', () => {
    it(`【swan.getFileInfo】${system}端正常调用`, done => {
        swan.getFileInfo({
            filePath: 'bdfile://somefile',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('size', 'digest');
                done();
            }
        });
    });

    it(`【swan.getFileInfo】${system}端正常调用，complete函数执行`, done => {
        swan.getFileInfo({
            filePath: 'bdfile://somefile',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.getFileInfo】${system}端正常调用，不传参数filePath`, done => {
        swan.getFileInfo({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath is required.');
                done();
            }
        });
    });

    it(`【swan.getFileInfo】${system}端正常调用，传入参数filePath类型错误`, done => {
        swan.getFileInfo({
            filePath: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.getFileInfo】${system}端正常调用，参数digestAlgorithm不在指定范围`, done => {
        swan.getFileInfo({
            filePath: 'xxx',
            digestAlgorithm: ['abc'],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('getFileInfo:fail parameter error: invalid digestAlgorithm "abc"');
                done();
            }
        });
    });
});

describe('API【getSavedFileList】测试', () => {
    it(`【swan.getSavedFileList】${system}端正常调用`, done => {
        swan.getSavedFileList({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('errMsg', 'fileList');
                expect(res.fileList).to.be.a('array');
                done();
            }
        });
    });

    it(`【swan.getSavedFileList】${system}端正常调用，complete函数执行`, done => {
        swan.getSavedFileList({
            complete: () => {
                done();
            }
        });
    });
});

describe('API【getSavedFileInfo】测试', () => {
    it(`【swan.getSavedFileInfo】${system}端正常调用`, done => {
        swan.getSavedFileInfo({
            filePath: 'bdfile://somefile',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('size', 'createTime');
                done();
            }
        });
    });

    it(`【swan.getSavedFileInfo】${system}端正常调用，complete函数执行`, done => {
        swan.getSavedFileInfo({
            filePath: 'bdfile://somefile',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.getSavedFileInfo】${system}端正常调用，不传参数filePath`, done => {
        swan.getSavedFileInfo({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath is required.');
                done();
            }
        });
    });

    it(`【swan.getSavedFileInfo】${system}端正常调用，传入参数filePath类型错误`, done => {
        swan.getSavedFileInfo({
            filePath: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【removeSavedFile】测试', () => {
    it(`【swan.removeSavedFile】${system}端正常调用`, done => {
        swan.removeSavedFile({
            filePath: 'bdfile://somefile',
            success: res => {
                done();
            }
        });
    });

    it(`【swan.removeSavedFile】${system}端正常调用，complete函数执行`, done => {
        swan.removeSavedFile({
            filePath: 'bdfile://somefile',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.removeSavedFile】${system}端正常调用，不传参数filePath`, done => {
        swan.removeSavedFile({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath is required.');
                done();
            }
        });
    });

    it(`【swan.removeSavedFile】${system}端正常调用，传入参数filePath类型错误`, done => {
        swan.removeSavedFile({
            filePath: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【openDocument】测试', () => {
    it(`【swan.openDocument】${system}端正常调用`, done => {
        swan.openDocument({
            filePath: 'bdfile://somefile',
            success: res => {
                done();
            }
        });
    });

    it(`【swan.openDocument】${system}端正常调用，complete函数执行`, done => {
        swan.openDocument({
            filePath: 'bdfile://somefile',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.openDocument】${system}端正常调用，不传参数filePath`, done => {
        swan.openDocument({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath is required.');
                done();
            }
        });
    });

    it(`【swan.openDocument】${system}端正常调用，传入参数filePath类型错误`, done => {
        swan.openDocument({
            filePath: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath type error. must be "string"');
                done();
            }
        });
    });
});
