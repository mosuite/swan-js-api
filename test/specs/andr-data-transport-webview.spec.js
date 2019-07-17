/**
 * andr-data-transport.js文件的单测
 * 
 */

import {andrSetData, andrBindMessage} from '../../src/utils/andr-data-transport';
import detect from '../../src/platform/detect';

const expect = require('chai').expect;


describe('Android kernel inject setdata method webview', () => {
    it('bind message success webview', done => {
        let bindId = '10';
        let msgCb = (data) => {
            console.log(data);
        }
        expect(andrBindMessage(bindId, msgCb)).to.be.equal(false);
        done();
    });
})