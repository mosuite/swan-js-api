/**
 * @file spec/_naSwan
 * @author lijia30@baidu.com
 * @description  调用_naSwan相关函数
 */

const expect = require('chai').expect;
import {schema} from '../../src/utils/scheme-info';



describe('_naSwan Exist', () => {
    after(() => {
        window._naSwan = undefined;
    })
    it(`ENV_VARIABLES should return correct result`, () => {
        expect(schema).to.be.equal('unittest');
    });
});






