/**
 * @file spec/openLive
 * @author liuxiaoming02@baidu.com
 * @description  boxjs/openLive, boxjs/updateLive, boxjs/removeLive
 */
import {boxjs} from '../../src/boxjs';
import $ from '../../src/utils/_core';
import {executeItTest, createCorrectBoxjsParams, createErrorBoxjsParamsList} from '../utils/boxjsParamsMock';
const system = $.isIOS ? 'ios' : 'android';

describe('API【openLive】测试', () => {
    const openLiveParams = [
        {name: 'gesture', value: 'string'},
        {name: 'hide', value: 'boolean'},
        {name: 'slaveId', value: 'string'},
        {name: 'liveId', value: 'string'},
        {name: 'viewId', value: 'string'},
        {name: 'parentId', value: 'string'},
        {name: 'src', value: 'string'},
        {name: 'position', value: 'Object'},
        {name: 'autoplay', value: 'boolean'},
        {name: 'muted', value: 'boolean'},
        {name: 'orientation', value: 'string'},
        {name: 'objectFit', value: 'string'},
        {name: 'backgroundMute', value: 'boolean'},
        {name: 'minCache', value: 'string'},
        {name: 'maxCache', value: 'string' }
    ];

    const correctParams = createCorrectBoxjsParams(openLiveParams);
    executeItTest({
        title: `【boxjs.openLive】${system}端正常调用`,
        fn: boxjs.media.live,
        params: {
            type: 'insert',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.openLive】${system}端正常调用，不传参数`,
        fn: boxjs.media.live,
        params: {
            type: 'insert',
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(openLiveParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.openLive】${system}端正常调用，${errTitle}`,
            fn: boxjs.media.live,
            params: {
                type: 'insert',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【updateLive】测试', () => {
    const updateLiveParams = [
        {name: 'gesture', value: 'string'},
        {name: 'hide', value: 'boolean'},
        {name: 'slaveId', value: 'string'},
        {name: 'liveId', value: 'string'},
        {name: 'viewId', value: 'string'},
        {name: 'parentId', value: 'string'},
        {name: 'src', value: 'string'},
        {name: 'position', value: 'Object'},
        {name: 'autoplay', value: 'boolean'},
        {name: 'muted', value: 'boolean'},
        {name: 'orientation', value: 'string'},
        {name: 'objectFit', value: 'string'},
        {name: 'backgroundMute', value: 'boolean'},
        {name: 'minCache', value: 'string'},
        {name: 'maxCache', value: 'string'}
    ];

    const correctParams = createCorrectBoxjsParams(updateLiveParams);
    executeItTest({
        title: `【boxjs.updateLive】${system}端正常调用`,
        fn: boxjs.media.live,
        params: {
            type: 'update',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.updateLive】${system}端正常调用，不传参数`,
        fn: boxjs.media.live,
        params: {
            type: 'update',
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(updateLiveParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.updateLive】${system}端正常调用，${errTitle}`,
            fn: boxjs.media.live,
            params: {
                type: 'update',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【removeLive】测试', () => {
    const removeLiveParams = [
        {name: 'slaveId', value: 'string'},
        {name: 'liveId', value: 'string'},
        {name: 'viewId', value: 'string'}
    ];

    const correctParams = createCorrectBoxjsParams(removeLiveParams);
    executeItTest({
        title: `【boxjs.removeLive】${system}端正常调用`,
        fn: boxjs.media.live,
        params: {
            type: 'remove',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.removeLive】${system}端正常调用，不传参数`,
        fn: boxjs.media.live,
        params: {
            type: 'remove',
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(removeLiveParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.removeLive】${system}端正常调用，${errTitle}`,
            fn: boxjs.media.live,
            params: {
                type: 'remove',
                data: errParams
            },
            errMsg
        });
    }
});