/**
 * @file spec/openAppByUrl
 * @author bailonggang
 * @description  openAppByUrl单测
 */

 /* globals window */

import $ from '../../src/utils/_core';
import {normalMethod, callbackRes} from '../utils/constant';
import openAppByUrl from '../../src/swan/api/open-app-by-url';
import {getSchemeParmas} from '../utils/mockMethod';
import schemeMap from '../utils/scheme-map';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

const openAppByUrlCallBack = data => scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    let res = schemeMap[schemeStr];

    if (schemeStr === 'baiduboxapp://v37/swan/openApp' && data === 'openFail') {
        window[callback](JSON.stringify(res.openFail));
        return;
    }

    if (params) {
        window[callback](JSON.stringify(callbackRes));
        if (params.cb) {
            window[params.cb](JSON.stringify(res[data]));
        }
    }
};

const mockOpenAppByUrl = data => {
    window.Bdbox_android_jsbridge = {
        dispatch: openAppByUrlCallBack(data)
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: openAppByUrlCallBack(data)
            }
        }
    };
};


describe('API【openAppByUrl】测试', () => {
    after(normalMethod);

    it(`【openAppByUrl】${system}端正常调用，打开未知url`, done => {
        mockOpenAppByUrl('data');
        
        openAppByUrl({
            url: 'xxx',
            fail: err => {
                done();
            }
        });
    });

    it(`【openAppByUrl】${system}端正常调用，不传参数url`, done => {
        openAppByUrl({
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('openAppByURL:fail parameter error: invalid url "undefined"');
                done();
            }
        });
    });

    it(`【openAppByUrl】${system}端正常调用，getLaunchAppInfo返回值1`, done => {
        mockOpenAppByUrl('errExt');
        openAppByUrl({
            url: 'xxx',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errMsg).to.be.equal('打开APP失败，获取最低使用要求数据失败');
                done();
            }
        });
    });

    it(`【openAppByUrl】${system}端正常调用，getLaunchAppInfo返回值2`, done => {
        mockOpenAppByUrl('extValueTwo');
        openAppByUrl({
            url: 'xxx',
            fail: err => {
                expect(err.errMsg).to.be.equal('打开APP失败，用户未达到最低使用要求');
                expect(err).to.be.a('object');
                done();
            }
        });
    });

    it(`【openAppByUrl】${system}端正常调用，getLaunchAppInfo返回值3`, done => {
        mockOpenAppByUrl('extValueOne');
        openAppByUrl({
            url: 'xxx',
            success: res => {
                done();
            }
        });
    });

    it(`【openAppByUrl】${system}端正常调用，getLaunchAppInfo返回值4`, done => {
        mockOpenAppByUrl('extKeyPackageName');
        openAppByUrl({
            url: 'xxx',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errMsg).to.be.equal('打开APP失败，用户未达到最低使用要求');
                done();
            }
        });
    });

    it(`【openAppByUrl】${system}端正常调用，getLaunchAppInfo返回值5`, done => {
        mockOpenAppByUrl('extKeyPackageName');
        openAppByUrl({
            url: 'smartapp',
            success: res => {
                done();
            }
        });
    });

    it(`【openAppByUrl】${system}端正常调用，openApp失败`, done => {
        mockOpenAppByUrl('openFail');
        openAppByUrl({
            url: 'smartapp',
            success: res => {
                console.log('res===========', res);
                done();
            }
        });
    });  
});