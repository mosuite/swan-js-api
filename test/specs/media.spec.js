/**
 * @file spec/media
 * @author lijia30@baidu.com
 * @description  媒体相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
import {events} from '../../src/utils/event';
import {getSchemeParmas} from '../utils/mockMethod';
import {callbackRes} from '../utils/constant';
import {normalMethod} from '../utils/constant';
import schemeMap from '../utils/scheme-map';
import {describe} from 'mocha';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';


const onOpenMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].data));
    window[params.cb.onStart](JSON.stringify(schemeMap[schemeStr].data));

};
const onPauseMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].data));
    let func = params.cb.onPause;
    window[func](JSON.stringify(schemeMap[schemeStr].data));
};

const onStopMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].data));
    let func = params.cb.onStop;
    window[func](JSON.stringify(schemeMap[schemeStr].data));
};

const onErrorMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].data));
    let func = params.cb.onError;
    window[func](JSON.stringify(schemeMap[schemeStr].data));
};

const onStopMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: onStopMockMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: onStopMockMethod
            }
        }
    };
};

const onPauseMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: onPauseMockMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: onPauseMockMethod
            }
        }
    };
};

const onErrorMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: onErrorMockMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: onErrorMockMethod
            }
        }
    };
};
const failMethod = scheme => {
    const {schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].failData));
};
const arCamecbkMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].data));
    window[params.stopCallback](JSON.stringify(schemeMap[schemeStr].data));
    window[params.onProgressUpdate](JSON.stringify(schemeMap[schemeStr].data));
};
const TimeUpdateMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(callbackRes));
    Object.keys(params.cb).forEach(item => {
        if (item === 'onPlay') {
            window[params.cb['onPlay']](JSON.stringify(schemeMap[schemeStr].data));
            window[params.cb['onTimeUpdate']](JSON.stringify(schemeMap[schemeStr].data));
        }
    });
};
const onOpenMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: onOpenMockMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: onOpenMockMethod
            }
        }
    };
};

const onMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].data));
    window[callback](JSON.stringify(callbackRes));
    Object.values(params.cb).forEach(item => {
        window[item](JSON.stringify(schemeMap[schemeStr].data));
    });
};

const onMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: onMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: onMethod
            }
        }
    };
};
const onTimeUpdateMethod  = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: TimeUpdateMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: TimeUpdateMethod
            }
        }
    };
};
const onfailMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: failMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: failMethod
            }
        }
    };
};
const arCamekMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: arCamecbkMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: arCamecbkMethod
            }
        }
    };
};
const mockMasterManager = () => {
    window.masterManager = {
        appPath: '/Users/sylvia/Library/Developer/CoreSimulator/Devices/6B73CCDF-5F1E-4688-8F74-67532E1ADFC8/data/Containers/',
        uri: 'page/index',
        navigator: {
            history: {
                getTopSlaves: () => {
                    return [{
                        uri: '/pages/test/test',
                        getSlaveId: function() {
                            return 1;
                        },
                        getFrontUri: function() {
                            return this.uri;
                        }
                    }];
                }
            }
        }
    };
}


describe('API【recognizeImage】测试', () => {
    it(`【swan.recognizeImage】${system}端正常调用`, done => {
        swan.recognizeImage({
            categoryList: ['BARCODE'],
            index: 0,
            showTitle: true,
            customTips: {
                'BARCODE': {
                    topTip: 'test topTip',
                    bottomTip: 'test bottomTip'
                }
            },
            success: res => {
                expect(res).to.be.a('object');
                let result = Object.keys(res)[0];
                expect(res[result]).to.have.any.key('result');
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端正常调用, complete函数执行`, done => {
        swan.recognizeImage({
            categoryList: ['BARCODE', 'TRANSLATE', 'QUESTION'],
            index: 0,
            showTitle: true,
            complete: res => {
                expect(res).to.be.a('object');
                let result = Object.keys(res)[0];
                expect(res[result]).to.have.any.key('result');
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端正常调用, 不传参数index和showtitle`, done => {
        swan.recognizeImage({
            categoryList: ['BARCODE'],
            success: res => {
                expect(res).to.be.a('object');
                let result = Object.keys(res)[0];
                expect(res[result]).to.have.any.key('result');
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端异常调用, 缺失参数categoryList`, done => {
        swan.recognizeImage({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('recognizeImage:fail parameter error: categoryList should be an Array which length larger than 0');
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端异常调用, categoryList类型异常`, done => {
        swan.recognizeImage({
            categoryList: 'aaa',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('recognizeImage:fail parameter error: categoryList should be an Array which length larger than 0');
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端异常调用, categoryList参数错误`, done => {
        swan.recognizeImage({
            categoryList: ['BARCODE', 'TEST'],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal(`recognizeImage:fail parameter error: category should be oneof BARCODE,QUESTION,TRANSLATE`);
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端异常调用, showTitle类型错误`, done => {
        swan.recognizeImage({
            categoryList: ['BARCODE'],
            showTitle: 'true',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal("recognizeImage:fail parameter error: [jsNative Argument Error]: showTitle should be type of Boolean");
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端异常调用, index设置错误--小于0`, done => {
        let categoryList = ['BARCODE'];
        swan.recognizeImage({
            categoryList: categoryList,
            index: -1,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal(`recognizeImage:fail parameter error: index should be within the range between [0, ${categoryList.length})`);
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端异常调用, index设置错误--大于categoryList.length`, done => {
        let categoryList = ['BARCODE', 'TRANSLATE', 'QUESTION'];
        swan.recognizeImage({
            categoryList: categoryList,
            index: 4,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal(`recognizeImage:fail parameter error: index should be within the range between [0, ${categoryList.length})`);
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端异常调用, customTips类型错误`, done => {
        let categoryList = ['BARCODE', 'TRANSLATE', 'QUESTION'];
        swan.recognizeImage({
            categoryList: categoryList,
            index: 2,
            customTips: 'test customTips',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]customTips type error. must be "Object"');
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端异常调用, customTips中包含不支持设置自定义文案的key`, done => {
        let categoryList = ['BARCODE', 'TRANSLATE', 'QUESTION'];
        swan.recognizeImage({
            categoryList: categoryList,
            index: 2,
            customTips: {
                'BARCODE': {
                    topTip: 'test topTip',
                    bottomTip: 'test bottomTip'
                },
                'TRANSLATE': {
                    topTip: 'test topTip translate',
                    bottomTip: 'test bottomTip translate'
                }
            },
            success: res => {
                expect(res).to.be.a('object');
                let result = Object.keys(res)[0];
                expect(res[result]).to.have.any.key('result');
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端异常调用, customTips自定义文案topTip长度大于16个字符`, done => {
        let categoryList = ['BARCODE', 'TRANSLATE', 'QUESTION'];
        swan.recognizeImage({
            categoryList: categoryList,
            index: 2,
            customTips: {
                'BARCODE': {
                    topTip: 'test topTip aaaaaaaaaaaa',
                    bottomTip: 'test bottomTip'
                }
            },
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal(`recognizeImage:fail parameter error: customTips.BARCODE's tips length should not larger than 16`);
                done();
            }
        });
    });

    it(`【swan.recognizeImage】${system}端异常调用, customTips自定义文案bottomTip长度大于16个字符`, done => {
        let categoryList = ['BARCODE', 'TRANSLATE', 'QUESTION'];
        swan.recognizeImage({
            categoryList: categoryList,
            index: 2,
            customTips: {
                'BARCODE': {
                    topTip: 'test topTip ',
                    bottomTip: 'test bottomTip bbbbbbbbbb'
                }
            },
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal(`recognizeImage:fail parameter error: customTips.BARCODE's tips length should not larger than 16`);
                done();
            }
        });
    });

});

describe('API【chooseImage】测试', () => {
    it(`【swan.chooseImage】${system}端正常调用`, done => {
        swan.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: res => {
                console.log(res.tempFilePaths);
                console.log(res.tempFiles);
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('tempFiles', 'tempFilePaths');
                done();
            }
        });
    });

    it(`【swan.chooseImage】${system}端正常调用, complete函数执行`, done => {
        swan.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: res => {
                console.log(res.tempFilePaths);
                console.log(res.tempFiles);
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('tempFiles', 'tempFilePaths');
            },
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.chooseImage】${system}端正常调用, 不传参数count和sizeType,sourceType`, done => {
        swan.chooseImage({
            success: res => {
                console.log(res.tempFilePaths);
                console.log(res.tempFiles);
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('tempFiles', 'tempFilePaths');
                done();
            }
        });
    });

    it(`【swan.chooseImage】${system}端异常调用, success类型异常`, done => {
        swan.chooseImage({
            success: 'aaa',
            fail: err => {
                expect(err).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.chooseImage】${system}端异常调用, count类型错误`, done => {
        swan.chooseImage({
            count: {},
            fail: err => {
                expect(err).to.be.a('object');
                console.log(err);
                done();
            }
        });
    });

    it(`【swan.chooseImage】${system}端异常调用, sizeType参数错误`, done => {
        swan.chooseImage({
            sizeType: [{}, []],
            fail: err => {
                expect(err).to.be.a('object');
                console.log(err);
                done();
            }
        });
    });
    it(`【swan.chooseImage】${system}端异常调用, sizeType参数错误`, done => {
        swan.chooseImage({
            sizeType: [{}, []],
            fail: err => {
                expect(err).to.be.a('object');
                console.log(err);
                done();
            }
        });
    });
    it(`【swan.chooseImage】${system}端异常调用, sourceType类型异常`, done => {
        swan.chooseImage({
            sourceType: {},
            fail: err => {
                expect(err).to.be.a('object');
                console.log(err);
                done();
            }
        });
    });
    it(`【swan.chooseImage】${system}端异常调用, sourceType类型异常`, done => {
        swan.chooseImage({
            sourceType: {},
            fail: err => {
                expect(err).to.be.a('object');
                console.log(err);
                done();
            }
        });
    });
});

describe('API【chooseAlbum】测试', () => {
    it(`【swan.chooseAlbum】${system}端正常调用`, done => {
        swan.chooseAlbum({
            count: 1,
            mode: 'single',
            compressed: true,
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('tempFiles', 'tempFilePaths');
                done();
            }
        });
    });

    it(`【swan.chooseAlbum】${system}端正常调用, complete正常执行`, done => {
        swan.chooseAlbum({
            count: 1,
            mode: 'single',
            compressed: true,
            complete: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('tempFiles', 'tempFilePaths');
                done();
            }
        });
    });

    it(`【swan.chooseAlbum】${system}端正常调用, 不传参数count, mode, compressed`, done => {
        swan.chooseAlbum({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('tempFiles', 'tempFilePaths');
                done();
            }
        });
    });

    it(`【swan.chooseAlbum】${system}端异常调用, success类型异常`, done => {
        swan.chooseAlbum({
            success: 'xxx',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('params type error');
                done();
            }
        });
    });
    it(`【swan.chooseAlbum】${system}端异常调用, count类型错误`, done => {
        swan.chooseAlbum({
            count: {},
            mode: 'single',
            compressed: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]count type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.chooseAlbum】${system}端异常调用, mode类型错误`, done => {
        swan.chooseAlbum({
            count: 1,
            mode: ['single'],
            compressed: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]mode type error. must be "string"');
                done();
            }
        });
    });
    it(`【swan.chooseAlbum】${system}端异常调用, compressed类型错误`, done => {
        swan.chooseAlbum({
            count: 1,
            mode: 'single',
            compressed: ['true'],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]compressed type error. must be "boolean"');
                done();
            }
        });
    });
});



describe('API【previewImage】测试', () => {
    it(`【swan.previewImage】${system}端正常调用`, done => {
        swan.previewImage({
            current: 'https://www.baidu.com/img/bd_logo1.png', // 当前显示图片的http链接
            urls: ['https://www.baidu.com/img/bd_logo1.png',
            'https://b.bdstatic.com/searchbox/icms/searchbox/img/swan-preview-image.jpg'], // 需要预览的图片http链接列表
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.previewImage】${system}端正常调用, complete函数执行`, done => {
        swan.previewImage({
            urls: ['https://www.baidu.com/img/bd_logo1.png',
            'https://b.bdstatic.com/searchbox/icms/searchbox/img/swan-preview-image.jpg'], // 需要预览的图片http链接列表
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.previewImage】${system}端正常调用, 不传参数current`, done => {
        swan.previewImage({
            urls: ['https://www.baidu.com/img/bd_logo1.png',
            'https://b.bdstatic.com/searchbox/icms/searchbox/img/swan-preview-image.jpg'], // 需要预览的图片http链接列表
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.previewImage】${system}端异常调用, 缺失参数url`, done => {
        swan.previewImage({
            fail: err => {
                console.log(err);
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('previewImage:fail parameter error: one of the parmas either urls or images is required');
                done();
            }
        });
    });

    it(`【swan.previewImage】${system}端异常调用, urls类型异常`, done => {
        swan.previewImage({
            urls: 'aaa',
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]urls type error. must be "Array"');
                done();
            }
        });
    });
    it(`【swan.previewImage】${system}端异常调用, urls参数错误`, done => {
        swan.previewImage({
            urls: [{}, []],
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]urls type error, must be arrayOf "string"');
                done();
            }
        });
    });
    it(`【swan.previewImage】${system}端异常调用, current类型异常`, done => {
        swan.previewImage({
            current: {},
            urls: ['https://www.baidu.com/img/bd_logo1.png',
            'https://b.bdstatic.com/searchbox/icms/searchbox/img/swan-preview-image.jpg'], // 需要预览的图片http链接列表
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]current type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【getImageInfo】测试', () => {
    afterEach(() => {
        normalMethod();
    });
    it(`【swan.getImageInfo】${system}端正常调用, src为网络图片`, done => {
        swan.getImageInfo({
            src: 'https://www.baidu.com/img/bd_logo1.png',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('width', 'height', 'path', 'orientation', 'type');
                expect(res.width).to.be.a('number');
                expect(res.height).to.be.a('number');
                expect(res.path).to.be.a('string');
                expect(res.orientation).to.be.a('string');
                expect(res.type).to.be.a('string');
                done();
            }
        });
    });
    it(`【swan.getImageInfo】${system}端正常调用， src为bd:file`, done => {
        swan.getImageInfo({
            src: 'bdfile://xxxxxxx.jpg',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('width', 'height', 'path', 'orientation', 'type');
                expect(res.width).to.be.a('number');
                expect(res.height).to.be.a('number');
                expect(res.path).to.be.a('string');
                expect(res.orientation).to.be.a('string');
                expect(res.type).to.be.a('string');
                done();
            }
        });
    });
    it(`【swan.getImageInfo】${system}端正常调用, src相对路径`, done => {
        mockMasterManager();
        swan.getImageInfo({
            src: '../../page/image/image/jpg',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('width', 'height', 'path', 'orientation', 'type');
                expect(res.width).to.be.a('number');
                expect(res.height).to.be.a('number');
                expect(res.path).to.be.a('string');
                expect(res.orientation).to.be.a('string');
                expect(res.type).to.be.a('string');
                done();
            }
        });
    });
    it(`【swan.getImageInfo】${system}端正常调用, src为bd:file, complete函数执行`, done => {
        swan.getImageInfo({
            src: 'https://www.baidu.com/img/bd_logo1.png',
            complete: res => {
                console.log('res', res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getImageInfo】${system}端正常调用, src为网络图片, complete函数执行`, done => {
        swan.getImageInfo({
            src: 'bdfile://xxxxxxx.jpg',
            complete: res => {
                console.log('res', res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getImageInfo】${system}端正常调用, src为相对路径, complete函数执行`, done => {
        swan.getImageInfo({
            src: '../../page/image/image/jpg',
            complete: res => {
                console.log('res', res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getImageInfo】${system}端异常调用， 当src为网络图片, 模拟端返回失败`, done => {
        try {
            onfailMethod();
            swan.getImageInfo({
                src: 'https://www.baidu.com/img/bd_logo1.png'
            });
        } catch (error) {
            console.log('error', error);
        }
        done();
    });
    it(`【swan.getImageInfo】${system}端异常调用， src类型异常`, done => {
        swan.getImageInfo({
            src: {},
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('src is required and must be "string"');
                done();
            }
        });
    });
    it(`【swan.getImageInfo】${system}端异常调用， 缺少src参数`, done => {
        swan.getImageInfo({
            fail: err => {
                console.log(err);
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('src is required and must be "string"');
                done();
            }
        });
    });
});

describe('API【saveImageToPhotosAlbum】测试', () => {
    it(`【swan.saveImageToPhotosAlbum】${system}端正常调用`, done => {
        swan.saveImageToPhotosAlbum({
            filePath: '/xxx/xxx.jpg',
            success: res => {
                expect(res).to.be.a('object');
                console.log(res);
                done();
            }
        });
    });
    it(`【swan.saveImageToPhotosAlbum】${system}端正常调用`, done => {
        swan.saveImageToPhotosAlbum({
            filePath: '/Users/shixinzhe/Desktop/1.jpg',
            success: res => {
                expect(res).to.be.a('object');
                console.log(res);
                done();
            }
        });
    });
    it(`【swan.saveImageToPhotosAlbum】${system}端正常调用, complete函数执行`, done => {
        swan.saveImageToPhotosAlbum({
            filePath: '/xxx/xxx.jpg',
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.saveImageToPhotosAlbum】${system}端异常调用, 缺失参数filePath`, done => {
        swan.saveImageToPhotosAlbum({
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath is required.');
                done();
            }
        });
    });

    it(`【swan.saveImageToPhotosAlbum】${system}端异常调用, filePath类型异常`, done => {
        swan.saveImageToPhotosAlbum({
            filePath: {},
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]filePath type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【getRecorderManager】测试', () => {
    afterEach(() => {
        normalMethod();
    });
    const options = {
        duration: 10000,
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 96000,
        format: 'aac'
    };
    it(`【swan.getRecorderManager】${system}端正常调用 start方法正常调用`, done => {
        const recorderManager = swan.getRecorderManager();
        recorderManager.start(options);
        done();
    });
    it(`【swan.getRecorderManager】${system}端正常调用 pause方法正常调用`, done => {
        const recorderManager = swan.getRecorderManager();
        recorderManager.start(options);
        recorderManager.pause();
        done();
    });
    it(`【swan.getRecorderManager】${system}端正常调用 resume方法正常调用`, done => {
        const recorderManager = swan.getRecorderManager();
        recorderManager.start(options);
        recorderManager.resume();
        done();
    });
    it(`【swan.getRecorderManager】${system}端正常调用 stop方法正常调用`, done => {
        const recorderManager = swan.getRecorderManager();
        recorderManager.start(options);
        recorderManager.stop();
        done();
    });
    it(`【swan.getRecorderManager】${system}端正常调用 onStart方法正常调用`, done => {
        onOpenMethod();
        const recorderManager = swan.getRecorderManager();
        recorderManager.onStart(res => {
            console.log('recorder start');
            done();
        });
        recorderManager.start(options);
    });
    it(`【swan.getRecorderManager】${system}端正常调用 onPause方法正常调用`, done => {
        onPauseMethod();
        const recorderManager = swan.getRecorderManager();
        recorderManager.onPause(() => {
            console.log('recorder pause');
            done();
        });
        recorderManager.start(options);
        recorderManager.pause();
    });
    it(`【swan.getRecorderManager】${system}端正常调用 onStop方法正常调用`, done => {
        onStopMethod();
        const recorderManager = swan.getRecorderManager();
        recorderManager.onStop(() => {
            console.log('recorder stop');
            done();
        });
        recorderManager.start(options);
        recorderManager.stop();
    });
    it(`【swan.getRecorderManager】${system}端正常调用 onError方法正常调用`, done => {
        onErrorMethod();
        const recorderManager = swan.getRecorderManager();
        recorderManager.onError(() => {
            console.log('recorder error');
            done();
        });
        recorderManager.start(options);
    });
});

describe('API【getBackgroundAudioManager】测试', () => {
    afterEach(() => {
        normalMethod();
    });
    it(`【swan.getBackgroundAudioManager】${system}端正常调用 play方法正常调用`, done => {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.title = '此时此刻';
        backgroundAudioManager.epname = '此时此刻';
        backgroundAudioManager.singer = '许巍';
        backgroundAudioManager.coverImgUrl = 'xxx';
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        backgroundAudioManager.play();
        backgroundAudioManager.startTime;
        console.log(backgroundAudioManager.src);
        console.log(backgroundAudioManager.duration);
        console.log(backgroundAudioManager.currentTime);
        done();
    });
    it(`【swan.getBackgroundAudioManager】${system}端正常调用 play方法正常调用, src值相同替换`, done => {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.title = '此时此刻';
        backgroundAudioManager.epname = '此时此刻';
        backgroundAudioManager.singer = '许巍';
        backgroundAudioManager.coverImgUrl = 'xxx';
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        backgroundAudioManager.play();
        backgroundAudioManager.startTime;
        console.log(backgroundAudioManager.src);
        console.log(backgroundAudioManager.duration);
        console.log(backgroundAudioManager.currentTime);
        done();
    });
    it(`【swan.getBackgroundAudioManager】${system}端正常调用 play方法正常调用, 模拟端返回失败`, done => {
        onfailMethod();
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.title = '此时此刻';
        backgroundAudioManager.epname = '此时此刻';
        backgroundAudioManager.singer = '许巍';
        backgroundAudioManager.coverImgUrl = 'xxx';
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        backgroundAudioManager.play();
        backgroundAudioManager.startTime;
        console.log(backgroundAudioManager.src);
        console.log(backgroundAudioManager.duration);
        console.log(backgroundAudioManager.currentTime);
        done();
    });
    it(`【swan.getBackgroundAudioManager】${system}端正常调用 play方法正常调用, src值不同替换`, done => {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.title = '此时此刻';
        backgroundAudioManager.epname = '此时此刻';
        backgroundAudioManager.singer = '许巍';
        backgroundAudioManager.coverImgUrl = 'xxx';
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=47';
        backgroundAudioManager.play();
        backgroundAudioManager.startTime;
        done();
    });
    it(`【swan.getBackgroundAudioManager】${system}端正常调用 src为空, play方法正常调用 `, done => {
        try {
            const backgroundAudioManager = swan.getBackgroundAudioManager();
            backgroundAudioManager.src = '';
            backgroundAudioManager.play();
            console.log('');
            done();
        } catch (error) {
            console.error(error);
        }
    });
    it(`【swan.getBackgroundAudioManager】${system}端正常调用 pause方法正常调用`, done => {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        backgroundAudioManager.play();
        backgroundAudioManager.pause();
        done();
    });
    it(`【swan.getBackgroundAudioManager】${system}端正常调用 stop方法正常调用`, done => {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        backgroundAudioManager.play();
        backgroundAudioManager.stop();
        done();
    });
    it(`【swan.getBackgroundAudioManager】${system}端正常调用 seek方法正常调用`, done => {
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        backgroundAudioManager.play();
        backgroundAudioManager.seek();
        done();
    });
    it(`【swan.getBackgroundAudioManager】${system}端正常调用 on方法正常调用`, done => {
        onMethod();
        const backgroundAudioManager = swan.getBackgroundAudioManager();
        backgroundAudioManager.onPlay(res => {
            console.log('onPlay');
            backgroundAudioManager.title = '此时此刻';
            backgroundAudioManager.epname = '此时此刻';
            backgroundAudioManager.singer = '许巍';
            backgroundAudioManager.coverImgUrl = 'xxx';
            backgroundAudioManager.startTime;
        });
        backgroundAudioManager.onWaiting(res => {
            console.log('onWaiting');
            backgroundAudioManager.title = '此时此刻';
            backgroundAudioManager.epname = '此时此刻';
            backgroundAudioManager.singer = '许巍';
            backgroundAudioManager.coverImgUrl = 'xxx';
            backgroundAudioManager.startTime;
        });
        backgroundAudioManager.onCanplay(res => {
            console.log('onCanplay');
            backgroundAudioManager.title = '此时此刻';
            backgroundAudioManager.epname = '此时此刻';
            backgroundAudioManager.singer = '许巍';
            backgroundAudioManager.coverImgUrl = 'xxx';
            backgroundAudioManager.startTime;
        });
        backgroundAudioManager.onPause(res => {
            console.log('onPause');
            backgroundAudioManager.title = '此时此刻';
            backgroundAudioManager.epname = '此时此刻';
            backgroundAudioManager.singer = '许巍';
            backgroundAudioManager.coverImgUrl = 'xxx';
            backgroundAudioManager.startTime;
        });
        backgroundAudioManager.onStop(res => {
            console.log('onStop');
            backgroundAudioManager.title = '此时此刻';
            backgroundAudioManager.epname = '此时此刻';
            backgroundAudioManager.singer = '许巍';
            backgroundAudioManager.coverImgUrl = 'xxx';
            backgroundAudioManager.startTime;
        });
        backgroundAudioManager.onEnded(res => {
            console.log('onEnded');
            backgroundAudioManager.title = '此时此刻';
            backgroundAudioManager.epname = '此时此刻';
            backgroundAudioManager.singer = '许巍';
            backgroundAudioManager.coverImgUrl = 'xxx';
            backgroundAudioManager.startTime;
        });
        backgroundAudioManager.onTimeUpdate(res => {
            console.log('onTimeUpdate');
            backgroundAudioManager.title = '此时此刻';
            backgroundAudioManager.epname = '此时此刻';
            backgroundAudioManager.singer = '许巍';
            backgroundAudioManager.coverImgUrl = 'xxx';
            backgroundAudioManager.startTime;
        });
        backgroundAudioManager.src = 'xxx';
        done();
    });
});

describe('API【createInnerAudioContext】测试', () => {
    afterEach(() => {
        normalMethod();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 play方法正常调用`, done => {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'page/music/music.mp3';
        innerAudioContext.autoplay = true;
        innerAudioContext.startTime = 1;
        innerAudioContext.loop = true;
        innerAudioContext.obeyMuteSwitch = true;
        innerAudioContext.volume = 0.5;
        innerAudioContext.play();
        console.log(innerAudioContext.duration);
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 缺少src参数, play方法正常`, done => {
        try {
            const innerAudioContext = swan.createInnerAudioContext();
            innerAudioContext.play();
            console.log(innerAudioContext.duration);
            done();
        } catch (error) {
            console.error(error);
        }
    });
    it(`【swan.createInnerAudioContext】${system}端调用, 模拟端返回失败`, done => {
        try {
            onfailMethod();
            const innerAudioContext = swan.createInnerAudioContext();
            innerAudioContext.src = 'page/music/music.mp3';
            innerAudioContext.play();
            console.log(innerAudioContext.duration);
            done();
        } catch (error) {
            console.error('=======', error);
        }
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 play方法正常调用 src参数重新赋相同值`, done => {
        try {
            const innerAudioContext = swan.createInnerAudioContext();
            innerAudioContext.src = 'page/music/music.mp3';
            innerAudioContext.src = 'page/music/music.mp3';
            innerAudioContext.autoplay = true;
            innerAudioContext.startTime = 1;
            innerAudioContext.loop = true;
            innerAudioContext.obeyMuteSwitch = true;
            innerAudioContext.volume = 0.5;
            innerAudioContext.play();
            console.log(innerAudioContext.duration);
            done();
        } catch (error) {
            console.error(error);
        }
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 play方法正常调用 src参数类型异常`, done => {
        try {
            const innerAudioContext = swan.createInnerAudioContext();
            innerAudioContext.src = {};
            innerAudioContext.autoplay = true;
            innerAudioContext.startTime = 1;
            innerAudioContext.loop = true;
            innerAudioContext.obeyMuteSwitch = true;
            innerAudioContext.volume = 0.5;
            innerAudioContext.play();
            console.log(innerAudioContext.duration);
            done();
        } catch (error) {
            console.error(error);
        }
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 pause方法正常调用`, done => {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'page/music/music.mp3';
        innerAudioContext.autoplay = true;
        innerAudioContext.startTime = 1;
        innerAudioContext.loop = true;
        innerAudioContext.obeyMuteSwitch = true;
        innerAudioContext.volume = 0.5;
        innerAudioContext.pause();
        console.log(innerAudioContext.duration);
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 stop方法正常调用`, done => {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'page/music/music.mp3';
        innerAudioContext.autoplay = true;
        innerAudioContext.startTime = 1;
        innerAudioContext.loop = true;
        innerAudioContext.obeyMuteSwitch = true;
        innerAudioContext.volume = 0.5;
        innerAudioContext.stop();
        console.log(innerAudioContext.duration);
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 seek方法正常调用`, done => {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'page/music/music.mp3';
        innerAudioContext.autoplay = true;
        innerAudioContext.startTime = 1;
        innerAudioContext.loop = true;
        innerAudioContext.obeyMuteSwitch = true;
        innerAudioContext.volume = 0.5;
        innerAudioContext.seek({
            position: 10
        });
        console.log(innerAudioContext.duration);
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 destroy方法正常调用`, done => {
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.src = 'page/music/music.mp3';
        innerAudioContext.autoplay = true;
        innerAudioContext.startTime = 1;
        innerAudioContext.loop = true;
        innerAudioContext.obeyMuteSwitch = true;
        innerAudioContext.volume = 0.5;
        innerAudioContext.destroy();
        console.log(innerAudioContext.duration);
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 非暂停状态时更新进度,onTimeUpdate方法正常调用,`, done => {
        onTimeUpdateMethod();
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.onTimeUpdate(() => {
            console.log('onTimeUpdate');
        });
        innerAudioContext.src = 'page/music/music.mp3';
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 onCanplay方法正常调用`, done => {
        onMethod();
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.onCanplay(() => {
            console.log('onCanplay');
            console.log(innerAudioContext.duration);
        });
        innerAudioContext.src = 'page/music/music.mp3';
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 onWaiting方法正常调用`, done => {
        onMethod();
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.onWaiting(() => {
            console.log('onWaiting');
            console.log(innerAudioContext.duration);
        });
        innerAudioContext.src = 'page/music/music.mp3';
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 onError方法正常调用`, done => {
        onMethod();
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.onError(() => {
            console.log('onError');
            console.log(innerAudioContext.duration);
        });
        innerAudioContext.src = 'page/music/music.mp3';
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 onSeeking方法正常调用`, done => {
        onMethod();
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.onSeeking(() => {
            console.log('onSeeking');
            console.log(innerAudioContext.duration);
        });
        innerAudioContext.src = 'page/music/music.mp3';
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 onSeeked方法正常调用`, done => {
        onMethod();
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.onSeeked(() => {
            console.log('onSeeked');
            console.log(innerAudioContext.duration);
        });
        innerAudioContext.src = 'page/music/music.mp3';
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 onEnded方法正常调用`, done => {
        onMethod();
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.onEnded(() => {
            console.log('onEnded');
            console.log(innerAudioContext.duration);
        });
        innerAudioContext.src = 'page/music/music.mp3';
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 onTimeUpdate方法正常调用`, done => {
        onMethod();
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.onTimeUpdate(() => {
            console.log('onTimeUpdate');
            console.log(innerAudioContext.duration);
        });
        innerAudioContext.src = 'page/music/music.mp3';
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 onPause方法正常调用`, done => {
        onMethod();
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.onPause(res => {
            console.log('onPause');
            console.log(innerAudioContext.duration);
        });
        innerAudioContext.src = 'page/music/music.mp3';
        done();
    });
    it(`【swan.createInnerAudioContext】${system}端正常调用 onStop方法正常调用`, done => {
        onMethod();
        const innerAudioContext = swan.createInnerAudioContext();
        innerAudioContext.onStop(res => {
            console.log('onStop');
            console.log(innerAudioContext.duration);
        });
        innerAudioContext.src = 'page/music/music.mp3';
        done();
    });
    // it(`【swan.createInnerAudioContext】${system}端正常调用 offCanplay方法正常调用`, done => {
    //     onMethod();
    //     const innerAudioContext = swan.createInnerAudioContext();
    //     innerAudioContext.src = 'page/music/music.mp3';
    //     innerAudioContext.offCanplay();
    //     done();
    // });
    // it(`【swan.createInnerAudioContext】${system}端正常调用 offPlay方法正常调用`, done => {
    //     onMethod();
    //     const innerAudioContext = swan.createInnerAudioContext();
    //     innerAudioContext.src = 'page/music/music.mp3';
    //     innerAudioContext.offPlay();
    //     done();
    // });
    // it(`【swan.createInnerAudioContext】${system}端正常调用 offPause方法正常调用`, done => {
    //     onMethod();
    //     const innerAudioContext = swan.createInnerAudioContext();
    //     innerAudioContext.onPause();
    //     innerAudioContext.src = 'page/music/music.mp3';
    //     innerAudioContext.offPause();
    //     done();
    // });
    // it(`【swan.createInnerAudioContext】${system}端正常调用 offStop方法正常调用`, done => {
    //     onMethod();
    //     const innerAudioContext = swan.createInnerAudioContext();
    //     innerAudioContext.src = 'page/music/music.mp3';
    //     innerAudioContext.offStop();
    //     done();
    // });
    // it(`【swan.createInnerAudioContext】${system}端正常调用 offEnded方法正常调用`, done => {
    //     onMethod();
    //     const innerAudioContext = swan.createInnerAudioContext();
    //     innerAudioContext.src = 'page/music/music.mp3';
    //     innerAudioContext.offEnded();
    //     done();
    // });
    // it(`【swan.createInnerAudioContext】${system}端正常调用 offTimeUpdate方法正常调用`, done => {
    //     onMethod();
    //     const innerAudioContext = swan.createInnerAudioContext();
    //     innerAudioContext.src = 'page/music/music.mp3';
    //     innerAudioContext.offTimeUpdate();
    //     done();
    // });
    // it(`【swan.createInnerAudioContext】${system}端正常调用 offWaiting方法正常调用`, done => {
    //     onMethod();
    //     const innerAudioContext = swan.createInnerAudioContext();
    //     innerAudioContext.src = 'page/music/music.mp3';
    //     innerAudioContext.offWaiting();
    //     done();
    // });
    // it(`【swan.createInnerAudioContext】${system}端正常调用 offSeeking方法正常调用`, done => {
    //     onMethod();
    //     const innerAudioContext = swan.createInnerAudioContext();
    //     innerAudioContext.src = 'page/music/music.mp3';
    //     innerAudioContext.offSeeking();
    //     done();
    // });
    // it(`【swan.createInnerAudioContext】${system}端正常调用 offSeeked方法正常调用`, done => {
    //     onMethod();
    //     const innerAudioContext = swan.createInnerAudioContext();
    //     innerAudioContext.src = 'page/music/music.mp3';
    //     innerAudioContext.offSeeked();
    //     done();
    // });
});

describe('API【setInnerAudioOption】测试', () => {
    it(`【swan.setInnerAudioOption】${system}端正常调用`, done => {
        swan.setInnerAudioOption({
            mixWithOther: true,
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setInnerAudioOption】${system}端正常调用`, done => {
        swan.setInnerAudioOption({
            mixWithOther: false,
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setInnerAudioOption】${system}端正常调用, 缺少参数mixWithOther`, done => {
        swan.setInnerAudioOption({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setInnerAudioOption】${system}端正常调用, complete函数执行`, done => {
        swan.setInnerAudioOption({
            mixWithOther: false,
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.setInnerAudioOption】${system}端异常调用, mixWithOther类型异常`, done => {
        swan.setInnerAudioOption({
            mixWithOther: {},
            fail: err => {
                console.log(err);
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]mixWithOther type error. must be "boolean"');
                done();
            }
        });
    });
});

describe('API【chooseVideo】测试', () => {
    it(`【swan.chooseVideo】${system}端正常调用`, done => {
        swan.chooseVideo({
            sourceType: ['album', 'camera'],
            compressed: false,
            maxDuration: 60,
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.chooseVideo】${system}端正常调用, 缺少参数sourceType, compressed, maxDuration`, done => {
        swan.chooseVideo({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.chooseVideo】${system}端正常调用, complete函数执行`, done => {
        swan.chooseVideo({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.chooseVideo】${system}端异常调用, sourceType类型异常`, done => {
        swan.chooseVideo({
            sourceType: {},
            compressed: false,
            maxDuration: 60,
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.chooseVideo】${system}端异常调用, sourceType类型异常`, done => {
        swan.chooseVideo({
            sourceType: ['album', 'camera'],
            compressed: '',
            maxDuration: 60,
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.chooseVideo】${system}端异常调用, sourceType类型异常`, done => {
        swan.chooseVideo({
            sourceType: ['album', 'camera'],
            compressed: false,
            maxDuration: {},
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【saveVideoToPhotosAlbum】测试', () => {
    it(`【swan.saveVideoToPhotosAlbum】${system}端正常调用`, done => {
        swan.saveVideoToPhotosAlbum({
            filePath: 'bdfile://xxx',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.saveVideoToPhotosAlbum】${system}端正常调用, failPath永久路径`, done => {
        swan.saveVideoToPhotosAlbum({
            filePath: '/Users/shixinzhe/Desktop/1.jpg',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.saveVideoToPhotosAlbum】${system}端正常调用, complete函数执行`, done => {
        swan.saveVideoToPhotosAlbum({
            filePath: '/Users/shixinzhe/Desktop/1.jpg',
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.saveVideoToPhotosAlbum】${system}端异常调用, failPath类型异常`, done => {
        swan.saveVideoToPhotosAlbum({
            filePath: {},
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.saveVideoToPhotosAlbum】${system}端异常调用, 缺失参数filePath`, done => {
        swan.saveVideoToPhotosAlbum({
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【createVideoContext】测试', () => {
    it(`【swan.createVideoContext】${system}端正常调用, play正常调用`, done => {
        const myVideo = swan.createVideoContext('myVideo');
        myVideo.src = 'https://example.baidu.com/xxxx';
        myVideo.play();
        events.emit('1_video_myVideo');
        done();
    });
    it(`【swan.createVideoContext】${system}端正常调用, pause正常调用`, done => {
        const myVideo = swan.createVideoContext('myVideo');
        myVideo.src = 'https://example.baidu.com/xxxx';
        myVideo.pause();
        events.emit('1_video_myVideo');
        done();
    });
    it(`【swan.createVideoContext】${system}端正常调用, seek正常调用`, done => {
        const myVideo = swan.createVideoContext('myVideo');
        myVideo.src = 'https://example.baidu.com/xxxx';
        myVideo.seek(10);
        events.emit('1_video_myVideo');
        done();
    });
    it(`【swan.createVideoContext】${system}端正常调用, sendDanmu正常调用`, done => {
        const myVideo = swan.createVideoContext('myVideo');
        myVideo.src = 'https://example.baidu.com/xxxx';
        myVideo.sendDanmu({
            text: '小程序',
            color: 'green'
        });
        events.emit('1_video_myVideo');
        done();
    });
    it(`【swan.createVideoContext】${system}端正常调用, requestFullScreen正常调用`, done => {
        const myVideo = swan.createVideoContext('myVideo');
        myVideo.src = 'https://example.baidu.com/xxxx';
        myVideo.requestFullScreen();
        events.emit('1_video_myVideo');
        done();
    });
    it(`【swan.createVideoContext】${system}端正常调用, exitFullScreen正常调用`, done => {
        const myVideo = swan.createVideoContext('myVideo');
        myVideo.src = 'https://example.baidu.com/xxxx';
        myVideo.exitFullScreen();
        events.emit('1_video_myVideo');
        done();
    });
    it('【swan.createVideoContext】ios端正常调用, showStatusBar正常调用', done => {
        const myVideo = swan.createVideoContext('myVideo');
        myVideo.src = 'https://example.baidu.com/xxxx';
        myVideo.showStatusBar();
        events.emit('1_video_myVideo');
        done();
    });
    it('【swan.createVideoContext】ios端正常调用, hideStatusBar正常调用', done => {
        const myVideo = swan.createVideoContext('myVideo');
        myVideo.src = 'https://example.baidu.com/xxxx';
        myVideo.hideStatusBar();
        events.emit('1_video_myVideo');
        done();
    });
    it(`【swan.createVideoContext】${system}端异常调用, 入参错误`, done => {
        let errId = {};
        try {
            const myVideo = swan.createVideoContext(errId);
            myVideo.src = 'https://example.baidu.com/xxxx';
            myVideo.play();
            events.emit('1_video_myVideo');
        } catch (error) {
            console.error(error);
        }
        done();
    });
});

describe('API【createLivePlayerContext】测试', () => {
    it(`【swan.createLivePlayerContext】${system}端正常调用, play正常调用`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.play({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, play方法complete函数执行`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.play({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, mute正常调用`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.mute({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, mute方法complete函数执行`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.mute({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, stop正常调用`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.stop({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, stop方法complete函数执行`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.stop({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, pause正常调用`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.pause({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, pause方法complete函数执行`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.pause({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, resume正常调用`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.resume({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, resume方法complete函数执行`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.resume({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, exitFullScreen正常调用`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.exitFullScreen({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用,exitFullScreen方法complete函数执行`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.exitFullScreen({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, requestFullScreen正常调用`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.requestFullScreen({
            direction: 0,
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端正常调用, requestFullScreen方法complete函数执行`, done => {
        const live = swan.createLivePlayerContext('myVideo');
        live.requestFullScreen({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_live_myVideo');
        done();
    });
    it(`【swan.createLivePlayerContext】${system}端异常调用, 入参错误`, done => {
        let errId = {};
        try {
            const myVideo = swan.createLivePlayerContext(errId);
            myVideo.src = 'https://example.baidu.com/xxxx';
            myVideo.play();
            events.emit('1_video_myVideo');
        } catch (error) {
            console.error(error);
        }
        done();
    });
});

describe('API【createCameraContext】测试', () => {
    it(`【swan.createCameraContext】${system}端正常调用, takePhoto正常调用`, done => {
        const Camera = swan.createCameraContext();
        Camera.takePhoto({
            quality: 'normal',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_camera_');
    });
    it(`【swan.createCameraContext】${system}端正常调用, takePhoto正常调用, 缺少参数quality`, done => {
        const Camera = swan.createCameraContext();
        Camera.takePhoto({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_camera_');
    });
    it(`【swan.createCameraContext】${system}端正常调用, takePhoto方法complete函数执行`, done => {
        const Camera = swan.createCameraContext();
        Camera.takePhoto({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_camera_');
    });
    it(`【swan.createCameraContext】${system}端异常调用, quality类型异常`, done => {
        const Camera = swan.createCameraContext();
        Camera.takePhoto({
            quality: {},
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]quality type error. must be "string"');
                done();
            }
        });
        events.emit('1_camera_');
    });
    it(`【swan.createCameraContext】${system}端正常调用, startRecord正常调用`, done => {
        const Camera = swan.createCameraContext();
        Camera.startRecord({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_camera_');
    });
    it(`【swan.createCameraContext】${system}端正常调用, startRecord方法complete函数执行`, done => {
        const Camera = swan.createCameraContext();
        Camera.startRecord({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_camera_');
    });
    it(`【swan.createCameraContext】${system}端正常调用, stopRecord正常调用`, done => {
        const Camera = swan.createCameraContext();
        Camera.stopRecord({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_camera_');
    });
    it(`【swan.createCameraContext】${system}端正常调用, stopRecord方法complete函数执行`, done => {
        const Camera = swan.createCameraContext();
        Camera.stopRecord({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_camera_');
    });
});

describe('API【createARCameraContext】测试', () => {
    afterEach(() => {
        normalMethod();
    });
    it(`【swan.createARCameraContext】${system}端正常调用, takePhoto正常调用`, done => {
        const Camera = swan.createARCameraContext();
        Camera.takePhoto({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_ARCamera_');
    });
    it(`【swan.createARCameraContext】${system}端正常调用, takePhoto方法complete函数执行`, done => {
        const Camera = swan.createARCameraContext();
        Camera.takePhoto({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_ARCamera_');
    });
    it(`【swan.createARCameraContext】${system}端正常调用, reset正常调用`, done => {
        const Camera = swan.createARCameraContext();
        Camera.reset({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_ARCamera_');
    });
    it(`【swan.createARCameraContext】${system}端正常调用, reset方法complete函数执行`, done => {
        const Camera = swan.createARCameraContext();
        Camera.reset({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_ARCamera_');
    });
    it(`【swan.createARCameraContext】${system}端正常调用, startRecord正常调用`, done => {
        const Camera = swan.createARCameraContext();
        Camera.startRecord({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_ARCamera_');
    });
    it(`【swan.createARCameraContext】${system}端正常调用, startRecord方法complete函数执行`, done => {
        arCamekMethod();
        const Camera = swan.createARCameraContext();
        Camera.startRecord({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_ARCamera_');
    });
    it(`【swan.createARCameraContext】${system}端正常调用, progress正常调用`, done => {
        arCamekMethod();
        const Camera = swan.createARCameraContext();
        Camera.startRecord({
            progress(res) {
                console.log('进度更新了');
                done();
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_ARCamera_');
    });
    it(`【swan.createARCameraContext】${system}端正常调用, timeout正常调用`, done => {
        arCamekMethod();
        const Camera = swan.createARCameraContext();
        setTimeout(Camera.startRecord({
            timeout(res) {
                console.log('超时/onHide');
                done();
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
            }
        }), 1000);
        events.emit('1_ARCamera_');
    });
    it(`【swan.createARCameraContext】${system}端正常调用, stopRecord正常调用`, done => {
        const Camera = swan.createARCameraContext();
        Camera.stopRecord({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_ARCamera_');
    });
    it(`【swan.createARCameraContext】${system}端正常调用, stopRecord方法complete函数执行`, done => {
        const Camera = swan.createARCameraContext();
        Camera.stopRecord({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
        events.emit('1_ARCamera_');
    });
});