/**
 * @file spec/ai
 * @author bailonggang
 * @description  ai能力单测
 */

import {swan} from '../../src/swan/index';
import {getSchemeParmas} from '../utils/mockMethod';
import {normalMethod} from '../utils/constant';
import schemeMap from '../utils/scheme-map';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

const mockMethodCallBack = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    const res = schemeMap[schemeStr];

    for (const key in params.cb) {
        window[params.cb[key]](JSON.stringify(res[key]));
    }

    window[callback](JSON.stringify(res.data));
};

const mockMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: mockMethodCallBack
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: mockMethodCallBack
            }
        }
    };
};

describe('API【ocrIdCard】测试', () => {
    it(`【swan.ai.ocrIdCard】${system}端正常调用`, done => {
        swan.ai.ocrIdCard({
            image: 'xxx',
            'detect_direction': true,
            'id_card_side': 'front',
            'detect_risk': true,
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.ocrIdCard】${system}端正常调用，complete函数执行`, done => {
        swan.ai.ocrIdCard({
            image: 'xxx',
            'detect_direction': true,
            'id_card_side': 'front',
            'detect_risk': true,
            complete: () => {
                done();
            }
        });
    });
});

describe('API【ocrBankCard】测试', () => {
    it(`【swan.ai.ocrBankCard】${system}端正常调用`, done => {
        swan.ai.ocrBankCard({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.ocrBankCard】${system}端正常调用，complete函数执行`, done => {
        swan.ai.ocrBankCard({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【ocrDrivingLicense】测试', () => {
    it(`【swan.ai.ocrDrivingLicense】${system}端正常调用`, done => {
        swan.ai.ocrDrivingLicense({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.ocrDrivingLicense】${system}端正常调用，complete函数执行`, done => {
        swan.ai.ocrDrivingLicense({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【ocrVehicleLicense】测试', () => {
    it(`【swan.ai.ocrVehicleLicense】${system}端正常调用`, done => {
        swan.ai.ocrVehicleLicense({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.ocrVehicleLicense】${system}端正常调用，complete函数执行`, done => {
        swan.ai.ocrVehicleLicense({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【textReview】测试', () => {
    it(`【swan.ai.textReview】${system}端正常调用`, done => {
        swan.ai.textReview({
            content: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.textReview】${system}端正常调用，complete函数执行`, done => {
        swan.ai.textReview({
            content: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【textToAudio】测试', () => {
    it(`【swan.ai.textToAudio】${system}端正常调用`, done => {
        swan.ai.textToAudio({
            tex: '这是一段测试文字',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.textToAudio】${system}端正常调用，complete函数执行`, done => {
        swan.ai.textToAudio({
            tex: '这是一段测试文字',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【imageAudit】测试', () => {
    it(`【swan.ai.imageAudit】${system}端正常调用`, done => {
        swan.ai.imageAudit({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.imageAudit】${system}端正常调用，complete函数执行`, done => {
        swan.ai.imageAudit({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【advancedGeneralIdentify】测试', () => {
    it(`【swan.ai.advancedGeneralIdentify】${system}端正常调用`, done => {
        swan.ai.advancedGeneralIdentify({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.advancedGeneralIdentify】${system}端正常调用，complete函数执行`, done => {
        swan.ai.advancedGeneralIdentify({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【objectDetectIdentify】测试', () => {
    it(`【swan.ai.objectDetectIdentify】${system}端正常调用`, done => {
        swan.ai.objectDetectIdentify({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.objectDetectIdentify】${system}端正常调用，complete函数执行`, done => {
        swan.ai.objectDetectIdentify({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【carClassify】测试', () => {
    it(`【swan.ai.carClassify】${system}端正常调用`, done => {
        swan.ai.carClassify({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.carClassify】${system}端正常调用，complete函数执行`, done => {
        swan.ai.carClassify({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【dishClassify】测试', () => {
    it(`【swan.ai.dishClassify】${system}端正常调用`, done => {
        swan.ai.dishClassify({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.dishClassify】${system}端正常调用，complete函数执行`, done => {
        swan.ai.dishClassify({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【logoClassify】测试', () => {
    it(`【swan.ai.logoClassify】${system}端正常调用`, done => {
        swan.ai.logoClassify({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.logoClassify】${system}端正常调用，complete函数执行`, done => {
        swan.ai.logoClassify({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【animalClassify】测试', () => {
    it(`【swan.ai.animalClassify】${system}端正常调用`, done => {
        swan.ai.animalClassify({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.animalClassify】${system}端正常调用，complete函数执行`, done => {
        swan.ai.animalClassify({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【plantClassify】测试', () => {
    it(`【swan.ai.plantClassify】${system}端正常调用`, done => {
        swan.ai.plantClassify({
            image: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.plantClassify】${system}端正常调用，complete函数执行`, done => {
        swan.ai.plantClassify({
            image: 'xxx',
            complete: () => {
                done();
            }
        });
    });
});

describe('API【getVoiceRecognizer】测试', () => {
    after(normalMethod);

    it(`【swan.ai.getVoiceRecognizer】${system}端正常调用`, done => {
        const voice = swan.ai.getVoiceRecognizer();
        expect(voice).to.be.a('object');
        expect(voice).to.have.all.keys('start', 'stop', 'cancel', 'onStart', 'onRecognize', 'onFinish', 'onError');
        done();
    });

    it(`【swan.ai.getVoiceRecognizer】${system}端正常调用，start方法`, done => {
        const voice = swan.ai.getVoiceRecognizer();
        voice.start();
        done();
    });

    it(`【swan.ai.getVoiceRecognizer】${system}端正常调用，stop方法`, done => {
        const voice = swan.ai.getVoiceRecognizer();
        voice.stop();
        done();
    });

    it(`【swan.ai.getVoiceRecognizer】${system}端正常调用，cancel方法`, done => {
        const voice = swan.ai.getVoiceRecognizer();
        voice.cancel();
        done();
    });

    it(`【swan.ai.getVoiceRecognizer】${system}端正常调用，onStart方法`, done => {
        mockMethod();
        const voice = swan.ai.getVoiceRecognizer();
        voice.onStart(() => {
            done();
        });

        voice.start({});
    });

    it(`【swan.ai.getVoiceRecognizer】${system}端正常调用，onFinish方法`, done => {
        mockMethod();
        const voice = swan.ai.getVoiceRecognizer();
        voice.onFinish(res => {
            done();
        });

        voice.start();
    });

    it(`【swan.ai.getVoiceRecognizer】${system}端正常调用，onRecognize方法`, done => {
        mockMethod();
        const voice = swan.ai.getVoiceRecognizer();
        voice.onRecognize(res => {
            done();
        });

        voice.start();
    });

    it(`【swan.ai.getVoiceRecognizer】${system}端正常调用，onError方法`, done => {
        mockMethod();
        const voice = swan.ai.getVoiceRecognizer();
        voice.onError(res => {
            done();
        });

        voice.start();
    });
});

describe('API【faceDetect】测试', () => {
    it(`【swan.ai.faceDetect】${system}端正常调用`, done => {
        swan.ai.faceDetect({
            image: 'xxx',
            'image_type': 'BASE64',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.faceDetect】${system}端正常调用`, done => {
        swan.ai.faceDetect({
            image: 'xxx',
            'image_type': 'URL',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.faceDetect】${system}端正常调用，complete函数执行`, done => {
        swan.ai.faceDetect({
            image: 'xxx',
            'image_type': 'BASE64',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.ai.faceDetect】${system}端正常调用，不传参数image`, done => {
        swan.ai.faceDetect({
            'image_type': 'BASE64',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('image is required.');
                done();
            }
        });
    });

    it(`【swan.ai.faceDetect】${system}端正常调用，参数image类型错误`, done => {
        swan.ai.faceDetect({
            image: {},
            'image_type': 'BASE64',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('image type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.ai.faceDetect】${system}端正常调用，不传参数image_type`, done => {
        swan.ai.faceDetect({
            image: 'xxx',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('image_type is required.');
                done();
            }
        });
    });

    it(`【swan.ai.faceDetect】${system}端正常调用，参数image_type不在限定范围内`, done => {
        swan.ai.faceDetect({
            image: 'xxx',
            'image_type': 'xxx',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('image_type type error, must be oneOf ["URL","BASE64","FACE_TOKEN"]');
                done();
            }
        });
    });
});

describe('API【faceMatch】测试', () => {
    it(`【swan.ai.faceMatch】${system}端正常调用`, done => {
        swan.ai.faceMatch({
            data: [
                {
                    "image": "https://www.downloadImage.com/xxxx.jpg",
                    "image_type": "URL",
                    "face_type": "LIVE",
                    "quality_control": "LOW",
                    "liveness_control": "HIGH"
                },
                {
                    "image": "xxx",
                    "image_type": "BASE64",
                    "face_type": "IDCARD",
                    "quality_control": "LOW",
                    "liveness_control": "HIGH"
                }
            ],
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.faceMatch】${system}端正常调用，complete函数执行`, done => {
        swan.ai.faceMatch({
            data: [
                {
                    "image": "https://www.downloadImage.com/xxxx.jpg",
                    "image_type": "URL",
                    "face_type": "LIVE",
                    "quality_control": "LOW",
                    "liveness_control": "HIGH"
                },
                {
                    "image": "https://www.downloadImage.com/xxxx.jpg",
                    "image_type": "URL",
                    "face_type": "IDCARD",
                    "quality_control": "LOW",
                    "liveness_control": "HIGH"
                }
            ],
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.ai.faceMatch】${system}端正常调用，不传参数data`, done => {
        swan.ai.faceMatch({
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('data is required and should be type of Array');
                done();
            }
        });
    });

    it(`【swan.ai.faceMatch】${system}端正常调用，参数data类型错误`, done => {
        swan.ai.faceMatch({
            data: {},
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('data is required and should be type of Array');
                done();
            }
        });
    });
});

describe('API【faceSearch】测试', () => {
    it(`【swan.ai.faceSearch】${system}端正常调用`, done => {
        swan.ai.faceSearch({
            image: 'xxx',
            'image_type': 'BASE64',
            'group_id_list': 'xxx',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'face_type': 'LIVE',
            'user_id': 'xxxxxx',
            'max_user_num': 20,
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.faceSearch】${system}端正常调用`, done => {
        swan.ai.faceSearch({
            image: 'xxx',
            'image_type': 'URL',
            'group_id_list': 'xxx',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'face_type': 'LIVE',
            'user_id': 'xxxxxx',
            'max_user_num': 20,
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.faceSearch】${system}端正常调用，complete函数执行`, done => {
        swan.ai.faceSearch({
            image: 'xxx',
            'image_type': 'BASE64',
            'group_id_list': 'xxx',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'face_type': 'LIVE',
            'user_id': 'xxxxxx',
            'max_user_num': 20,
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.ai.faceSearch】${system}端正常调用，不传参数image`, done => {
        swan.ai.faceSearch({
            'image_type': 'BASE64',
            'group_id_list': 'xxx',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'face_type': 'LIVE',
            'user_id': 'xxxxxx',
            'max_user_num': 20,
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('image is required.');
                done();
            }
        });
    });

    it(`【swan.ai.faceSearch】${system}端正常调用，参数image类型错误`, done => {
        swan.ai.faceSearch({
            image: {},
            'image_type': 'BASE64',
            'group_id_list': 'xxx',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'face_type': 'LIVE',
            'user_id': 'xxxxxx',
            'max_user_num': 20,
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('image type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.ai.faceSearch】${system}端正常调用，不传参数image_type`, done => {
        swan.ai.faceSearch({
            image: 'xxx',
            'group_id_list': 'xxx',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'face_type': 'LIVE',
            'user_id': 'xxxxxx',
            'max_user_num': 20,
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('image_type is required.');
                done();
            }
        });
    });

    it(`【swan.ai.faceSearch】${system}端正常调用，不传参数group_id_list`, done => {
        swan.ai.faceSearch({
            image: 'xxx',
            'image_type': 'BASE64',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'face_type': 'LIVE',
            'user_id': 'xxxxxx',
            'max_user_num': 20,
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('group_id_list is required.');
                done();
            }
        });
    });

    it(`【swan.ai.faceSearch】${system}端正常调用，参数group_id_list类型错误`, done => {
        swan.ai.faceSearch({
            image: 'xxx',
            'image_type': 'BASE64',
            'group_id_list': {},
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'face_type': 'LIVE',
            'user_id': 'xxxxxx',
            'max_user_num': 20,
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('group_id_list type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【facePersonVerify】测试', () => {
    it(`【swan.ai.facePersonVerify】${system}端正常调用`, done => {
        swan.ai.facePersonVerify({
            image: 'https://www.downloadImage.com/xxxx.jpg',
            'image_type': 'URL',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'id_card_number': '',
            name: '',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonVerify】${system}端正常调用`, done => {
        swan.ai.facePersonVerify({
            image: 'xxx',
            'image_type': 'BASE64',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'id_card_number': '',
            name: '',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonVerify】${system}端正常调用，complete函数执行`, done => {
        swan.ai.facePersonVerify({
            image: 'https://www.downloadImage.com/xxxx.jpg',
            'image_type': 'URL',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'id_card_number': '',
            name: '',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.ai.facePersonVerify】${system}端正常调用，不传参数image`, done => {
        swan.ai.facePersonVerify({
            'image_type': 'URL',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'id_card_number': '',
            name: '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('image is required.');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonVerify】${system}端正常调用，参数image类型错误`, done => {
        swan.ai.facePersonVerify({
            image: {},
            'image_type': 'URL',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'id_card_number': '',
            name: '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('image type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonVerify】${system}端正常调用，不传参数image_type`, done => {
        swan.ai.facePersonVerify({
            image: 'https://www.downloadImage.com/xxxx.jpg',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'id_card_number': '',
            name: '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('image_type is required.');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonVerify】${system}端正常调用，不传参数id_card_number`, done => {
        swan.ai.facePersonVerify({
            image: 'https://www.downloadImage.com/xxxx.jpg',
            'image_type': 'URL',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            name: '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('id_card_number is required.');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonVerify】${system}端正常调用，参数id_card_number类型错误`, done => {
        swan.ai.facePersonVerify({
            image: 'https://www.downloadImage.com/xxxx.jpg',
            'image_type': 'URL',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'id_card_number': {},
            name: '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('id_card_number type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonVerify】${system}端正常调用，不传参数name`, done => {
        swan.ai.facePersonVerify({
            image: 'https://www.downloadImage.com/xxxx.jpg',
            'image_type': 'URL',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'id_card_number': '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('name is required.');
                done();
            }
        });
    });    

    it(`【swan.ai.facePersonVerify】${system}端正常调用，参数name类型错误`, done => {
        swan.ai.facePersonVerify({
            image: 'https://www.downloadImage.com/xxxx.jpg',
            'image_type': 'URL',
            'quality_control': 'NONE',
            'liveness_control': 'NONE',
            'id_card_number': '',
            name: {},
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('name type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【facePersonIdmatch】测试', () => {
    it(`【swan.ai.facePersonIdmatch】${system}端正常调用`, done => {
        swan.ai.facePersonIdmatch({
            'id_card_number': 'xxx',
            name: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonIdmatch】${system}端正常调用，complete函数执行`, done => {
        swan.ai.facePersonIdmatch({
            'id_card_number': 'xxx',
            name: 'xxx',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.ai.facePersonIdmatch】${system}端正常调用，不传参数id_card_number`, done => {
        swan.ai.facePersonIdmatch({
            name: 'xxx',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('id_card_number is required.');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonIdmatch】${system}端正常调用，参数id_card_number类型错误`, done => {
        swan.ai.facePersonIdmatch({
            'id_card_number': {},
            name: 'xxx',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('id_card_number type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonIdmatch】${system}端正常调用，不传参数name`, done => {
        swan.ai.facePersonIdmatch({
            'id_card_number': 'xxx',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('name is required.');
                done();
            }
        });
    });

    it(`【swan.ai.facePersonIdmatch】${system}端正常调用，参数name类型错误`, done => {
        swan.ai.facePersonIdmatch({
            'id_card_number': 'xxx',
            name: {},
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('name type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【faceVerify】测试', () => {
    it(`【swan.ai.faceVerify】${system}端正常调用`, done => {
        swan.ai.faceVerify({
            data: [
                {
                    "image": 'xxx',
                    "image_type": "BASE64",
                    "face_field": "age,beauty,expression"
                },
                {
                    "image": 'xxx',
                    "image_type": "URL",
                    "face_field": "age,beauty,expression"
                }
            ],
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.faceVerify】${system}端正常调用，complete函数执行`, done => {
        swan.ai.faceVerify({
            data: [
                {
                    "image": 'xxx',
                    "image_type": "BASE64",
                    "face_field": "age,beauty,expression"
                },
                {
                    "image": 'xxx',
                    "image_type": "BASE64",
                    "face_field": "age,beauty,expression"
                }
            ],
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.ai.faceVerify】${system}端正常调用，不传参数data`, done => {
        swan.ai.faceVerify({
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('data is required and should be type of Array');
                done();
            }
        });
    });

    it(`【swan.ai.faceVerify】${system}端正常调用，参数data类型错误`, done => {
        swan.ai.faceVerify({
            data: {},
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('data is required and should be type of Array');
                done();
            }
        });
    });
});

describe('API【faceLivenessSessioncode】测试', () => {
    it(`【swan.ai.faceLivenessSessioncode】${system}端正常调用`, done => {
        swan.ai.faceLivenessSessioncode({
            appid: 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.faceLivenessSessioncode】${system}端正常调用，complete函数执行`, done => {
        swan.ai.faceLivenessSessioncode({
            appid: 'xxx',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.ai.faceLivenessSessioncode】${system}端正常调用，不传参数appid`, done => {
        swan.ai.faceLivenessSessioncode({
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('appid is required.');
                done();
            }
        });
    });

    it(`【swan.ai.faceLivenessSessioncode】${system}端正常调用，参数appid类型错误`, done => {
        swan.ai.faceLivenessSessioncode({
            appid: {},
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('appid type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【faceLivenessVerify】测试', () => {
    it(`【swan.ai.faceLivenessVerify】${system}端正常调用`, done => {
        swan.ai.faceLivenessVerify({
            'video_base64': 'xxx',
            'session_id': 'xxx',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.faceLivenessVerify】${system}端正常调用，complete函数执行`, done => {
        swan.ai.faceLivenessVerify({
            'video_base64': 'xxx',
            'session_id': 'xxx',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.ai.faceLivenessVerify】${system}端正常调用，不传参数video_base64`, done => {
        swan.ai.faceLivenessVerify({
            'session_id': 'xxx',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('video_base64 is required.');
                done();
            }
        });
    });

    it(`【swan.ai.faceLivenessVerify】${system}端正常调用，参数video_base64类型错误`, done => {
        swan.ai.faceLivenessVerify({
            'video_base64': {},
            'session_id': 'xxx',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('video_base64 type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【nlpLexerCustom】测试', () => {
    it(`【swan.ai.nlpLexerCustom】${system}端正常调用`, done => {
        swan.ai.nlpLexerCustom({
            text: '百度是一家高科技公司',
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.ai.nlpLexerCustom】${system}端正常调用，complete函数执行`, done => {
        swan.ai.nlpLexerCustom({
            text: '百度是一家高科技公司',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.ai.nlpLexerCustom】${system}端正常调用`, done => {
        swan.ai.nlpLexerCustom({
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('text is required.');
                done();
            }
        });
    });

    it(`【swan.ai.nlpLexerCustom】${system}端正常调用`, done => {
        swan.ai.nlpLexerCustom({
            text: {},
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.include('text type error. must be "string"');
                done();
            }
        });
    });
});