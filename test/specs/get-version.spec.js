/**
 * @file spec/file
 * @author lijia
 * @description  get-version
 */

import getVersionTool from '../../src/platform/get-version';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe(`get-version测试 ${system}`, () => {
    it('getHostVersion should return correct vaule', () => {
        expect(getVersionTool.getHostVersion()).to.equal('11.5.0.0');
    })

    it('getSdkVersion should return correct vaule', () => {
        expect(getVersionTool.getSdkVersion()).to.equal('2.2.0');
    })

    it('getBoxVersion should return correct vaule', () => {
        expect(getVersionTool.getBoxVersion()).to.equal('11.5.0.0');
    })
});
