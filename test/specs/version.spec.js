/**
 * @file spec/file
 * @author shixinzhe
 * @description  verision
 */

import version from '../../src/platform/version-compare';
import $ from '../../src/utils/_core';
const system = $.isIOS ? 'ios' : 'android';
const expect = require('chai').expect;

describe('【版本比较】测试', () => {
    it(`【版本比较】${system}端正常调用`, () => {
        let data = version('1.0.2', '1.0.3');
        console.log(data);
        expect(data).to.be.equal(-1);
    });
    it(`【版本比较】${system}端正常调用`, () => {
        let data = version('1.0.3', '1.0.2');
        console.log(data);
        expect(data).to.be.equal(1);
    });
    it(`【版本比较】${system}端正常调用`, () => {
        let data = version('1.0.3', '1.0.3');
        console.log(data);
        expect(data).to.be.equal(0);
    });
});