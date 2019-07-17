/**
 * @file spec/_naSwan
 * @author lijia30@baidu.com
 * @description  调用_naSwan相关函数
 */

import {schema} from '../../src/utils/scheme-info';
const expect = require('chai').expect;


describe('_naSwan', () => {
    after(() => {
        window._naSwan = undefined;
    })
    it('ENV_VARIABLES should return correct result', () => {
        expect(schema).to.be.equal('baiduboxapp');
    });
});






