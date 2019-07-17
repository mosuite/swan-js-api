/**
 * @file spec/file
 * @author shixinzhe
 * @description  detect
 */

import detect from '../../src/platform/detect';
import {fakeIOSUa, fakeAndroidUa} from '../utils/mockMethod';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe(`${system}-detect 测试 有SwanGlobal`, () => {
    it(`【detect】${system}detect端正常调用 有SwanGlobal`, () => {
        fakeAndroidUa();
        let data = detect(navigator.userAgent);
        expect(data).to.be.a('Object');
        expect(data.name).to.be.a('string');
        expect(data.version).to.be.a('string');
        if (data.android) {
            expect(data).to.have.all.keys('name', 'version', 'android');
        } else {
            expect(data).to.have.all.keys('name', 'version', 'ios');
        }
    });

    it(`【detect】${system}detect端正常调用 有SwanGlobal`, () => {
        fakeIOSUa();
        let data = detect(navigator.userAgent);
        expect(data).to.be.a('Object');
        expect(data.name).to.be.a('string');
        expect(data.version).to.be.a('string');
        if (data.android) {
            expect(data).to.have.all.keys('name', 'version', 'android');
        } else {
            expect(data).to.have.all.keys('name', 'version', 'ios');
        }
    });
});
