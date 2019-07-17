/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【guidePushSetting】测试', () => {
    it(`【swan.guidePushSetting】${system}端正常调用`, done => {
        swan.guidePushSetting({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('authorized', 'canceled')
                done();
            }
        });
    });
});

describe('API【openWalkNavigation】测试', () => {
    it(`【swan.openWalkNavigation】${system}端正常调用`, done => {
        swan.openWalkNavigation({
            latitude: 41.148224272757366,
            longitude: 116.28138902615724,
            guideIcon: 'bdfile://test',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

    



