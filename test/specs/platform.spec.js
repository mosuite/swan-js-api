/**
 * @file spec/file
 * @author shixinzhe
 * @description  platform
 */

import platform from '../../src/platform';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('src/platform 测试', () => {
    it(`【platform.isIOS】${system}端正常调用`, () => {
        let data = platform.isIOS();
        console.log(data);
        expect(data).to.be.a('Boolean');
    });
    it(`【platform.osVersion】${system}端正常调用`, () => {
        let data = platform.osVersion();
        console.log(data);
        expect(data).to.be.a('string');
    });
});
