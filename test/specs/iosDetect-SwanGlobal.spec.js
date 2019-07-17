/**
 * @file spec/file
 * @author shixinzhe
 * @description  detect
 */

import detect from '../../src/platform/detect';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('ios-detect 测试 有SwanGlobal', () => {
    it(`【detect】${system}detect端正常调用 有SwanGlobal`, () => {
        let UserAgent = window.navigator.userAgent;
        UserAgent += ' (P2 1.1)';
        let data = detect(UserAgent);
        console.log(data);
        expect(data).to.be.a('Object');
        expect(data.name).to.be.a('string');
        expect(data.version).to.be.a('string');
        if (data.iphone) {
            expect(data).to.have.all.keys('name', 'version', 'ios', 'iphone');
        } else {
            expect(data).to.have.all.keys('name', 'version', 'ios');
        }
    });
});
