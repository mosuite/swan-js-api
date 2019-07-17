/**
 * @file spec/openInterface
 * @author bailonggang
 * @description  开放接口api单测
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【chooseAddress】测试', () => {
    it(`【swan.chooseAddress】${system}端正常调用`, done => {
        swan.chooseAddress({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('userName', 'postalCode', 'provinceName',
                    'cityName', 'countyName', 'detailInfo', 'telNumber', 'nationalCode');
                done();
            }
        });
    });

    it(`【swan.chooseAddress】${system}端正常调用，complete函数执行`, done => {
        swan.chooseAddress({
            complete: () => {
                done();
            }
        });
    });
});

describe('API【chooseInvoiceTitle】测试', () => {
    it(`【swan.chooseInvoiceTitle】${system}端正常调用`, done => {
        swan.chooseInvoiceTitle({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('type', 'title', 'taxNumber',
                    'companyAddress', 'telephone', 'bankName', 'bankAccount');
                done();
            }
        });
    });

    it(`【swan.chooseInvoiceTitle】${system}端正常调用，complete函数执行`, done => {
        swan.chooseInvoiceTitle({
            complete: () => {
                done();
            }
        });
    });
});

describe('API【getSwanId】测试', () => {
    it(`【swan.getSwanId】${system}端正常调用`, done => {
        swan.getSwanId({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('tipmsg', 'request_id', 'errno', 'errmsg', 'data');
                expect(res.data).to.be.a('object');
                expect(res.data).to.have.all.keys('swanid', 'swanid_old', 'swanid_old_signature', 'swanid_signature');
                done();
            }
        });
    });

    it(`【swan.getSwanId】${system}端正常调用，complete函数执行`, done => {
        swan.getSwanId({
            complete: () => {
                done();
            }
        });
    });
});

describe('API【getUserInfo】测试', () => {
    it(`【swan.getUserInfo】${system}端正常调用`, done => {
        swan.getUserInfo({
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.getUserInfo】${system}端正常调用，complete函数执行`, done => {
        swan.getUserInfo({
            complete: () => {
                done();
            }
        });
    });
});

describe('API【login】测试', () => {
    it(`【swan.login】${system}端正常调用`, done => {
        swan.login({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('code');
                done();
            }
        });
    });

    it(`【swan.login】${system}端正常调用，complete函数执行`, done => {
        swan.login({
            complete: () => {
                done();
            }
        });
    });
});

describe('API【checkSession】测试', () => {
    it(`【swan.checkSession】${system}端正常调用`, done => {
        swan.checkSession({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('errno', 'error', 'result');
                done();
            }
        });
    });

    it(`【swan.checkSession】${system}端正常调用，complete函数执行`, done => {
        swan.checkSession({
            complete: () => {
                done();
            }
        });
    });
});

describe('API【isLoginSync】测试', () => {
    it(`【swan.isLoginSync】${system}端正常调用`, () => {
        const loginStatus = swan.isLoginSync();
        expect(loginStatus).to.be.a('object');
        expect(loginStatus).to.have.all.keys('result');
    });
});

describe('API【authorize】测试', () => {
    it(`【swan.authorize】${system}端正常调用`, done => {
        swan.authorize({
            scope: 'scope.userLocation',
            success: res => {
                done();
            }
        });
    });

    it(`【swan.authorize】${system}端正常调用，complete函数执行`, done => {
        swan.authorize({
            scope: 'scope.userLocation',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.authorize】${system}端正常调用，不传参数scope`, done => {
        swan.authorize({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]scope is required.');
                done();
            }
        });
    });

    it(`【swan.authorize】${system}端正常调用，传入参数scope类型错误`, done => {
        swan.authorize({
            scope: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]scope type error. must be "string"');
                done();
            }
        });
    });   
});

describe('API【openSetting】测试', () => {
    it(`【swan.openSetting】${system}端正常调用`, done => {
        swan.openSetting({
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.openSetting】${system}端正常调用，complete函数执行`, done => {
        swan.openSetting({
            complete: () => {
                done();
            }
        });
    });
});

describe('API【getSetting】测试', () => {
    it(`【swan.getSetting】${system}端正常调用`, done => {
        swan.getSetting({
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.getSetting】${system}端正常调用，complete函数执行`, done => {
        swan.getSetting({
            complete: () => {
                done();
            }
        });
    });
});

describe('API【openShare】测试', () => {
    it(`【swan.openShare】${system}端正常调用`, done => {
        swan.openShare({
            title: '智能小程序示例',
            content: '世界很复杂，百度更懂你',
            path: '/pages/openShare/openShare?key=value'
        });
        done();
    });

    it(`【swan.openShare】${system}端正常调用，complete函数执行`, done => {
        swan.openShare({
            title: '智能小程序示例',
            content: '世界很复杂，百度更懂你',
            path: '/pages/openShare/openShare?key=value',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.openShare】${system}端正常调用，不传参数content`, done => {
        swan.openShare({
            title: '智能小程序示例',
            path: '/pages/openShare/openShare?key=value',
            complete: () => {
                done();
            }
        });
    });
});


