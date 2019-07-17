/**
 * @file spec/webinfo
 * @author shixinzhe@baidu.com
 * @description  webinfo
 */

import $ from '../../src/utils/_core';
import {setMetaDescription, setMetaKeywords, setDocumentTitle, setPageInfo} from '../../src/swan/api/webinfo';
import {describe} from 'mocha';
const system = $.isIOS ? 'ios' : 'android';

describe('API【webinfo】测试', () => {
    it(`【setMetaDescription】${system}端正常调用`, done => {
        setMetaDescription({
            success: () => {
                console.log('success');
            },
            complete: () => {
                console.log('complete');
            }
        });
        done();
    });
    it(`【setMetaKeywords】${system}端正常调用`, done => {
        setMetaKeywords({
            success: () => {
                console.log('success');
            },
            complete: () => {
                console.log('complete');
            }
        });
        done();
    });
    it(`【setDocumentTitle】${system}端正常调用`, done => {
        setDocumentTitle({
            success: () => {
                console.log('success');
            },
            complete: () => {
                console.log('complete');
            }
        });
        done();
    });
    it(`【setPageInfo】${system}端正常调用`, done => {
        setPageInfo({
            success: () => {
                console.log('success');
            },
            complete: () => {
                console.log('complete');
            }
        });
        done();
    });
});