/**
 * @file spec/_naSwan
 * @author lijia30@baidu.com
 * @description  调用_naSwan相关函数
 */

import postMessage from '../../src/utils/post-message';
import {events} from '../../src/utils/event';
import $ from '../../src/utils/_core';
import {normalMethod} from '../utils/constant';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe(`postMessage (${system})`, () => {
    before(() => {
        normalMethod();
    })
    it('postMessage is a function', () => {
        expect(postMessage).to.be.a('function');
    });
    it('postMessage execute correctly', done=> {
        events.on('unit-test', () => {
            done();
        });
        postMessage('unit-test-master',  {
            type: 'unit-test'
        });
    });
});





