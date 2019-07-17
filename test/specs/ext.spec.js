/**
 * @file spec/system
 * @author shixinzhe@baidu.com
 * @description  开发能力相关API接口
 */
import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

const mockAppConfig = JSON.stringify(
    {
        "extEnable": true,
        "extAppid": "100000282",
        "directCommit": false,
        "ext": {
            "name": "helloword",
            "attr": {
                "host": "open.baidu.com",
                "users": [
                    "user_1",
                    "user_2"
                ]
            }
        }
    }
);

window.appConfig = mockAppConfig;

describe('API【getExtConfig】测试', () => {
    after(()=>{
        window.appConfig = mockAppConfig;
    });

    it(`【swan.getExtConfig】${system}端正常调用`, done => {
        swan.getExtConfig({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getExtConfig】${system}端正常调用, complete函数执行`, done => {
        swan.getExtConfig({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.getExtConfig】${system}端正常调用, global.appConfig异常`, done => {
        window.appConfig = '11:1';
        swan.getExtConfig({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err).to.have.all.keys('errMsg');
                done();
            }
        });
    });
});

describe('API【getExtConfigSync】测试', () => {
    it(`【swan.getExtConfigSync】${system}端正常调用`, done => {
        let data = swan.getExtConfigSync();
        console.log(data);
        expect(data).to.be.a('object');
        done();
    });
});