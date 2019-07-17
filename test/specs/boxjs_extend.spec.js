/**
 * @file spec/file
 * @author shixinzhe
 * @description  boxjs_extend
 */

import {
    boxjs
} from '../../src/boxjs';
import $ from '../../src/utils/_core';
import { doesNotReject } from 'assert';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('boxjs_extend 测试', () => {
	it(`【boxjs_extend】${system}端正常调用, 添加同步 discription`, () => {
        boxjs.extend([{
            name: 'baidu.unitSync',
            authority: 'swanAPI',
            path: '/unitSync',
            args: []
        }]);
        const result = boxjs['baidu.unitSync']();
        console.log('unitSync-result', result);
        expect(result).to.be.a('Object');
    });

    it(`【boxjs_extend】${system}端正常调用, 添加异步 discription`, done => {
        boxjs.extend([{
            name: 'baidu.unit',
            authority: 'swanAPI',
            path: '/unit',
            args: [{name: 'innerCallback', value: 'function'}]
        }]);
        const result = boxjs['baidu.unit']();
        console.log('unit-result', result);
        result.then(res => {
            console.log(res);
            expect(res).to.be.a('Object');
            done();
           
        });
    });


    it(`【boxjs.addCanIUse】${system}端正常调用`, () => {
        boxjs.addCanIUse();
    });
});