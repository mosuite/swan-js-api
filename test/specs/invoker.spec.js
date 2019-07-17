/**
 * @file spec/invoker
 * @author lijia30@baidu.com
 * @description  调用invoker相关函数
 */

import {invokeMaker} from '../../src/invoker/index';
import {swanNative} from '../../src/swan/container';

const expect = require('chai').expect;

let apiConfig = {
    specialCheck(params) {
        return !params.data ? 'data is required and should not be an empty string' : '';
    },
    filter(params) {
        params.testdata = 'test'
    },
    moreParamsKey: ['unit', 'api'],

}

describe('invokeMaker', () => {
    it('invokeMaker is a function', () => {
        expect(invokeMaker).to.be.a('function');
    });

    it('invokeMaker should return correct result when apiConfig is a function', done => {
        invokeMaker(swanNative, 'test', () => {
            done();
        })
    });

    it('invokeMaker should return correct result when specialCheck is a function', done => {
        let params = {
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.equal('test:fail parameter error: data is required and should not be an empty string');
                done();
            }
        }
        invokeMaker(swanNative, 'test', apiConfig, false, params);
    });

    it('invokeMaker should return correct result when moreParamsKey is a function', () => {
        let params = {
            data: 'test',
        };
        invokeMaker(swanNative, 'test', apiConfig, false, params);
    });

});





