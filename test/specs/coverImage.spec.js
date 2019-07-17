/**
 * @file spec/coverImage
 * @author liuxiaoming02@baidu.com
 * @description  boxjs/cover-image
 */
import {boxjs} from '../../src/boxjs';
import {expect} from 'chai';
import $ from '../../src/utils/_core';
import {executeItTest, createCorrectBoxjsParams, createErrorBoxjsParamsList} from '../utils/boxjsParamsMock';
const system = $.isIOS ? 'ios' : 'android';

const commonParams = [
    {name: 'gesture', value: 'string'},
    {name: 'slaveId', value: 'string='},
    {name: 'hide', value: 'string'},
    {name: 'viewId', value: 'string='},
    {name: 'parentId', value: 'string='},
    {name: 'position', value: 'Object'},
    {name: 'style', value: 'Object' }
];

describe('API【insertCoverImage】测试', () => {
    const insertCoverImageParams = [
        ...commonParams,
        {name: 'src', value: 'string='},
        {name: 'loadState', value: 'boolean='},
        {name: 'cb', value: 'string='}
    ];

    const correntParams = createCorrectBoxjsParams(insertCoverImageParams);
    executeItTest({
        title: `【boxjs.insertCoverImage】${system}端正常调用`,
        fn: boxjs.cover.insert,
        params: {
            name: 'swan-coverImage',
            data: correntParams
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(insertCoverImageParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.insertCoverImage】${system}端正常调用，${errTitle}`,
            fn: boxjs.cover.insert,
            params: {
                name: 'swan-coverImage',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【updateCoverImage】测试', () => {
    const updateCoverImageParams = [
        ...commonParams,
        {name: 'src', value: 'string='},
        {name: 'loadState', value: 'boolean='},
        {name: 'transition', value: 'Object'},
        {name: 'cb', value: 'string='}
    ];

    const correntParams = createCorrectBoxjsParams(updateCoverImageParams);
    executeItTest({
        title: `【boxjs.updateCoverImage】${system}端正常调用`,
        fn: boxjs.cover.update,
        params: {
            name: 'swan-coverImage',
            data: correntParams
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(updateCoverImageParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.insertCoverImage】${system}端正常调用，${errTitle}`,
            fn: boxjs.cover.update,
            params: {
                name: 'swan-coverImage',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【removeCoverImage】测试', () => {
    const removeCoverImageParams = [
        {name: 'slaveId', value: 'string='},
        {name: 'viewId', value: 'string='},
        {name: 'parentId', value: 'string='}
    ];

    const correntParams = createCorrectBoxjsParams(removeCoverImageParams);
    executeItTest({
        title: `【boxjs.removeCoverImage】${system}端正常调用`,
        fn: boxjs.cover.remove,
        params: {
            name: 'swan-coverImage',
            data: correntParams
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(removeCoverImageParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.removeCoverImage】${system}端正常调用，${errTitle}`,
            fn: boxjs.cover.remove,
            params: {
                name: 'swan-coverImage',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【getLocalImgData】测试', () => {
    it(`【boxjs.getLocalImgData】${system}端正常调用`, done => {
        boxjs.data.get({
            name: 'swan-localImgData',
            data: {
                filePath: 'http://m.baidu.com/se/static/img/iphone/logo_web.png'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            done();
        });
    });

    it(`【boxjs.getLocalImgData】${system}端正常调用，不传参数`, done => {
        boxjs.data.get({name: 'swan-localImgData'}).then( res => {
            expect(res).to.be.a('object');
            done();
        });
    });

    it(`【boxjs.getLocalImgData】${system}端异常调用，filePath类型异常`, done => {
        boxjs.data.get({
            name: 'swan-localImgData',
            data: {
                filePath: {}
            }
        }).catch( err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]filePath type error. must be "string"');
            done();
        });
    });
});
