/**
 * @file spec/media
 * @author lijia30@baidu.com
 * @description  媒体相关API接口
 */

import $ from '../../src/utils/_core';
import {boxjs} from '../../src/boxjs';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【getStorageSync】测试', () => {
    it(`【boxjs.getStorageSync】${system}端正常调用`, () => {
        let result = boxjs.cache.get({
            type: 'sync',
            key: 'aaa'});
        expect(result).to.be.a('object');
        expect(result).to.have.key('data');
    });

});

describe('API【setStorageSync】测试', () => {
    it(`【boxjs.setStorageSync】${system}端正常调用`, () => {
        let result = boxjs.cache.set('test', 'unit-test', 'sync');
        expect(result).to.be.a('object');
        expect(result).to.be.empty;
    });
});
