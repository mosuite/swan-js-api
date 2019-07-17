/**
 * @file spec/ubc
 * @author shixinzhe@baidu.com
 * @description  ubc
 */

import $ from '../../src/utils/_core';
import {ubcReport, addTimesLog, addDurationLog} from '../../src/utils/ubclog';
import {describe} from 'mocha';
const system = $.isIOS ? 'ios' : 'android';

describe('API【ubclog】测试', () => {
    it(`【ubclog】${system}端正常调用`, done => {
        ubcReport();
        addTimesLog({start: 10, end: 2});
        addDurationLog({start: 10, end: 2});
        ubcReport();
        done();
    });
});