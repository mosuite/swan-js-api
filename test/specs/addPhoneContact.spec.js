/**
 * @file spec/phoneContact
 * @author liuxiaoming02@baidu.com
 * @description  手机联系人API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

const phoneUserInfo = {
    photoFilePath: '',
    nickName: '昵称',
    lastName: 'liu',
    middleName: 'xiao',
    firstName: '明明',
    remark: 'FE',
    mobilePhoneNumber: '13546589064',
    weChatNumber: 'xiaolu',
    addressCountry: 'China',
    addressState: 'beijing',
    addressCity: 'beijing',
    addressStreet: 'xibeiwang',
    addressPostalCode: '100091',
    organization: 'baidu',
    title: 'programmer',
    workFaxNumber: '302928',
    workPhoneNumber: '+86 10 50816853',
    hostNumber: '01050819322',
    email: '13546589064@163.com',
    url: 'http://m.baidu.com',
    workAddressCountry: 'China',
    workAddressState: 'beijing',
    workAddressCity: 'beijing',
    workAddressStreet: '西北旺街道',
    workAddressPostalCode: '100091',
    homeFaxNumber: '302928',
    homePhoneNumber: '13546589064',
    homeAddressCountry: 'beijing',
    homeAddressState: 'beijing',
    homeAddressCity: 'beijing',
    homeAddressStreet: 'xibeiwang',
    homeAddressPostalCode: '100091'
};
describe('API【addPhoneContact】测试', () => {
    it(`【swan.addPhoneContact】${system}端正常调用，创建新联系人`, done => {
        swan.addPhoneContact({
            action: "insert",
            ...phoneUserInfo,
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，complete正常调用`, done => {
        swan.addPhoneContact({
            action: "insert",
            ...phoneUserInfo,
            complete: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，添加到已有联系人`, done => {
        swan.addPhoneContact({
            action: "edit",
            ...phoneUserInfo,
            success: res => {
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端异常调用，firstName参数缺失`, done => {
        swan.addPhoneContact({
            action: "insert",
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]firstName is required.');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端异常调用，firstName类型错误`, done => {
        swan.addPhoneContact({
            action: "insert",
            photoFilePath: '',
            nickName: '昵称',
            firstName: ['明明'],
            lastName: 'liu',
            middleName: 'xiao',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]firstName type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，photoFilePath类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: [],
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]photoFilePath type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，nickName类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: false,
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]nickName type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，lastName类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: ['liu'],
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]lastName type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，middleName类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: ['xiao'],
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]middleName type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，remark类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: false,
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]remark type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，mobilePhoneNumber类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: ['13546589064'],
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]mobilePhoneNumber type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，weChatNumber类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: ['xiaolu'],
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]weChatNumber type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，addressCountry类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: true,
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]addressCountry type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，addressState类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: {},
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]addressState type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，addressCity类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: false,
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]addressCity type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，addressStreet类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: ['xibeiwang'],
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]addressStreet type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，addressPostalCode类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: [],
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]addressPostalCode type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，organization类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: [],
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]organization type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，title类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: ['programmer'],
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]title type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，workFaxNumber类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: {},
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]workFaxNumber type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，workPhoneNumber类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: {},
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]workPhoneNumber type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，hostNumber类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: ['01050819322'],
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]hostNumber type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，email类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: ['13546589064@163.com'],
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]email type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，url类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: false,
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]url type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，workAddressCountry类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: true,
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]workAddressCountry type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，workAddressState类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: [],
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]workAddressState type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，workAddressCity类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: false,
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]workAddressCity type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，workAddressStreet类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: [],
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]workAddressStreet type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，workAddressPostalCode类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: [],
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]workAddressPostalCode type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，homeFaxNumber类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: {},
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]homeFaxNumber type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，homePhoneNumber类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: ['13546589064'],
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]homePhoneNumber type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，homeAddressCountry类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: false,
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]homeAddressCountry type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，homeAddressState类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: [],
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]homeAddressState type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，homeAddressCity类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: [],
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]homeAddressCity type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，homeAddressStreet类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: {},
            homeAddressPostalCode: '100091',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]homeAddressStreet type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.addPhoneContact】${system}端正常调用，homeAddressPostalCode类型错误`, done => {
        swan.addPhoneContact({
            photoFilePath: '',
            nickName: '昵称',
            lastName: 'liu',
            middleName: 'xiao',
            firstName: '明明',
            remark: 'FE',
            mobilePhoneNumber: '13546589064',
            weChatNumber: 'xiaolu',
            addressCountry: 'China',
            addressState: 'beijing',
            addressCity: 'beijing',
            addressStreet: 'xibeiwang',
            addressPostalCode: '100091',
            organization: 'baidu',
            title: 'programmer',
            workFaxNumber: '302928',
            workPhoneNumber: '+86 10 50816853',
            hostNumber: '01050819322',
            email: '13546589064@163.com',
            url: 'http://m.baidu.com',
            workAddressCountry: 'China',
            workAddressState: 'beijing',
            workAddressCity: 'beijing',
            workAddressStreet: '西北旺街道',
            workAddressPostalCode: '100091',
            homeFaxNumber: '302928',
            homePhoneNumber: '13546589064',
            homeAddressCountry: 'beijing',
            homeAddressState: 'beijing',
            homeAddressCity: 'beijing',
            homeAddressStreet: 'xibeiwang',
            homeAddressPostalCode: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]homeAddressPostalCode type error. must be "string"');
                done();
            }
        });
    });
});