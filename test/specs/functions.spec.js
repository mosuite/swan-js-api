/**
 * Created by sylvia on 2019/3/27.
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
import {isSupportIosMessageHandlers} from '../../src/utils/common';
import {parseMessage} from '../../src/utils/parser';
const expect = require('chai').expect;

const system = $.isIOS ? 'ios' : 'android';


describe(`FE API (${system})`, () => {
    it(`【swan.canIUse】should return correct result`, () => {
        expect(swan.canIUse('button.open-type.share')).to.be.equal(true);
        expect(swan.canIUse('button.open-type.test')).to.be.equal(false);
        expect(swan.canIUse('recognizeImage.object.categoryList')).to.be.equal(true);
        expect(swan.canIUse()).to.be.equal(false);
        expect(swan.canIUse('ai.faceSearch')).to.be.equal(true);
        expect(swan.canIUse('test.api')).to.be.equal(false);
        expect(swan.canIUse('getUserInfo.success.userInfo')).to.be.equal(true);
    });
});


describe(`Object $(${system})`, () => {
    it(`$.isBoxApp should return correct result`, () => {
        let result = $.isBoxApp();
        expect(result).to.be.true;
    });

    it(`$.getHost should return correct result`, () => {
        let result = $.getHost();
        expect(result).to.be.equal('baiduboxapp');
    });

    it(`$.isIOS should return correct result`, () => {
        let result = $.isIOS;
        console.log('ios::',result);
        expect(result).to.be.equal(system === 'ios');
    });

    it(`$.isAndroid should return correct result`, () => {
        let result = $.isAndroid;
        console.log('android::',result);
        expect(result).to.be.equal(system === 'android');
    });

    it('isSupportIosMessageHandlers should return corret result', () => {
        if (system === 'ios') {
            expect(isSupportIosMessageHandlers()).to.be.a('object');
        } else {
            expect(isSupportIosMessageHandlers()).to.be.false;
        }

    })

});

describe(`parseMessage (${system})`, () => {
    it(`parseMessage should return correct result`, () => {
        let data = {
            test: 'api-unit-test'
        };
        let message = system == 'ios' ? escape(JSON.stringify(data))
            : JSON.stringify(data);

        expect(parseMessage(message)).to.eql(data);
    });

});