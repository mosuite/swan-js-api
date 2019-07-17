/**
 * @file spec/_naSwan
 * @author lijia30@baidu.com
 * @description  调用_naSwan相关函数
 */

import $ from '../../src/utils/_core';
import {asyncScheme} from '../../src/utils/scheme-info';
import queryToJson from '../../src/utils/queryToJson';
import {
    validateUrl
} from '../../src/utils/common';
const expect = require('chai').expect;

describe('Object $', () => {
    it('$.isBoxApp is a function', () => {
        expect($.isBoxApp).to.be.a('function');
    });

    it('$.isBoxApp should return correct result', () => {
        let result = $.isBoxApp();
        expect(result).to.be.false;
    });

    it('$.getId should return correct result', () => {
        let result = $.getId();
        expect(result).to.be.a('number');
    });

    it('$.emptyArr should be an empty array ', () => {
        expect($.emptyArr).to.be.an('array');
        expect($.emptyArr).to.be.empty;
    });

    it('$.emptyFn should be an empty function ', () => {
        expect($.emptyFn).to.be.a('function');
        expect($.emptyFn()).to.be.undefined;
    });

    it('$.byId should return correct result', () => {
        let result = $.byId('test');
        expect(result).to.be.null;
    });

    it('$.toArray should return correct result', () => {
        document.createElement('div');
        let elem = document.getElementsByTagName('div');
        let result = $.toArray(elem);
        expect(result).to.be.an('array');
    });

    it('$.$ should return correct result', () => {
        expect($.$('div')).to.be.an('array');
    });

    it('$.isWindow should return correct result', () => {
        expect($.isWindow(window)).to.be.true;
        expect($.isWindow({})).to.be.false;
    });

    it('$.isPlainObject should return correct result', () => {
        expect($.isPlainObject(window)).to.be.false;
        expect($.isPlainObject({test: 'unit test'})).to.be.true;
    });

});





