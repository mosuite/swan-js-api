/**
 * @file spec/makePhoneCall
 * @author bailonggang
 * @description  拨打电话api单测
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【makePhoneCall】测试', () => {
    it(`【swan.makePhoneCall】${system}端正常调用`, done => {
        swan.makePhoneCall({
            phoneNumber: '110',
            success: res => {
                done();
            }
        });
    });

    it(`【swan.makePhoneCall】${system}端正常调用，complete函数执行`, done => {
        swan.makePhoneCall({
            phoneNumber: '000000',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.makePhoneCall】${system}端正常调用，不传参数phoneNumber`, done => {
        swan.makePhoneCall({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('makePhoneCall:fail parameter error: phoneNumber is required and should not be an empty string');
                done();
            }
        });
    });

    it(`【swan.makePhoneCall】${system}端正常调用，传入参数phoneNumber为空字符串`, done => {
        swan.makePhoneCall({
            phoneNumber: '',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                done();
            }
        });
    });

    it(`【swan.makePhoneCall】${system}端正常调用，传入参数phoneNumber类型错误`, done => {
        swan.makePhoneCall({
            phoneNumber: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]phoneNumber type error. must be "string"');
                done();
            }
        });
    });    
});

describe('API【isAppInstalled】测试', () => {
    it(`【swan.isAppInstalled】${system}端正常调用`, done => {
        swan.isAppInstalled({
            name: '',
            success: res => {
                done();
            }
        });
    });

    it(`【swan.isAppInstalled】${system}端正常调用，complete函数执行`, done => {
        swan.isAppInstalled({
            name: '',
            complete: res => {
                done();
            }
        });
    });

    it(`【swan.isAppInstalled】${system}端正常调用，不传参数name`, done => {
        swan.isAppInstalled({
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]name is required.');
                done();
            }
        });
    });

    it(`【swan.isAppInstalled】${system}端正常调用，参数name类型错误`, done => {
        swan.isAppInstalled({
            name: {},
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]name type error. must be "string"');
                done();
            }
        });
    });  
});

describe('API【hideKeyboard】测试', () => {
    it(`【swan.hideKeyboard】${system}端正常调用`, done => {
        swan.hideKeyboard({
            success: res => {
                done();
            }
        });
    });

    it(`【swan.hideKeyboard】${system}端正常调用，complete函数执行`, done => {
        swan.hideKeyboard({
            complete: () => {
                done();
            }
        });
    });
});


describe('API【openTabopt】测试', () => {
    it(`【swan.openTabopt${system}端正常调用`, done => {
        swan.openTabopt({
            upgrade: '',
            action: '',
            'tab_id': '',
            tabinfo: {},
            tabindex: '',
            tabselected: '',
            success: res => {
                done();
            }
        });
    });

    it(`【swan.openTabopt${system}端正常调用，complete函数执行`, done => {
        swan.openTabopt({
            upgrade: '',
            action: '',
            'tab_id': '',
            tabinfo: {},
            tabindex: '',
            tabselected: '',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.openTabopt${system}端正常调用，upgrade参数类型错误`, done => {
        swan.openTabopt({
            upgrade: {},
            action: '',
            'tab_id': '',
            tabinfo: {},
            tabindex: '',
            tabselected: '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]upgrade type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.openTabopt${system}端正常调用，action参数类型错误`, done => {
        swan.openTabopt({
            upgrade: '',
            action: {},
            'tab_id': '',
            tabinfo: {},
            tabindex: '',
            tabselected: '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]action type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.openTabopt${system}端正常调用，tab_id参数类型错误`, done => {
        swan.openTabopt({
            upgrade: '',
            action: '',
            'tab_id': {},
            tabinfo: {},
            tabindex: '',
            tabselected: '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]tab_id type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.openTabopt${system}端正常调用，tabinfo参数类型错误`, done => {
        swan.openTabopt({
            upgrade: '',
            action: '',
            'tab_id': '',
            tabinfo: '',
            tabindex: '',
            tabselected: '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]tabinfo type error. must be "object"');
                done();
            }
        });
    });

    it(`【swan.openTabopt${system}端正常调用，tabindex参数类型错误`, done => {
        swan.openTabopt({
            upgrade: '',
            action: '',
            'tab_id': '',
            tabinfo: {},
            tabindex: {},
            tabselected: '',
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]tabindex type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.openTabopt${system}端正常调用，tabselected参数类型错误`, done => {
        swan.openTabopt({
            upgrade: '',
            action: '',
            'tab_id': '',
            tabinfo: {},
            tabindex: '',
            tabselected: {},
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]tabselected type error. must be "string"');
                done();
            }
        });
    });
});