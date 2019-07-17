/**
 * @file spec/file
 * @author shixinzhe
 * @description  detect
 */

import detect from '../../src/platform/detect';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('src/platform/detect 测试', () => {
    it(`【detect】${system}端正常调用`, () => {
        let data = detect();
        console.log(data);
        expect(data).to.be.a('Object');
        expect(data.name).to.be.a('string');
        expect(data.version).to.be.a('string');
        if (data.android) {
            expect(data).to.have.all.keys('name', 'version', 'android');
        } else {
            expect(data).to.have.all.keys('name', 'version', 'ios', 'iphone');
        }
    });
    it(`【detect】${system}端正常调用ipod`, () => {
        let UserAgent = 'Mozilla/5.0 (iPod touch; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1';
        let data = detect(UserAgent);
        console.log(data);
        expect(data).to.be.a('Object');
        if (data.android) {
            expect(data).to.have.all.keys('name', 'version', 'android');
        } else {
            expect(data).to.have.all.keys('name', 'version', 'ios', 'ipod');
        }
    });
    it(`【detect】${system}端正常调用ipad`, () => {
        let UserAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25';
        let data = detect(UserAgent);
        console.log(data);
        expect(data).to.be.a('Object');
        if (data.android) {
            expect(data).to.have.all.keys('name', 'version', 'android');
        } else {
            expect(data).to.have.all.keys('name', 'version', 'ios', 'ipad');
        }
    });
});
