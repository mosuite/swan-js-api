/**
 * @file spec/openVideo
 * @author liuxiaoming02@baidu.com
 * @description  boxjs/openVideo, boxjs/updateVideo, boxjs/removeVideo
 */
import {boxjs} from '../../src/boxjs';
import $ from '../../src/utils/_core';
import {executeItTest, createCorrectBoxjsParams, createErrorBoxjsParamsList} from '../utils/boxjsParamsMock';
const system = $.isIOS ? 'ios' : 'android';

describe('API【openVideo】测试', () => {
    const openVideoParams = [
        {name: 'gesture', value: 'string'},
        {name: 'videoId', value: 'string'},
        {name: 'viewId', value: 'string'},
        {name: 'sanId', value: 'string'},
        {name: 'parentId', value: 'string'},
        {name: 'src', value: 'string'},
        {name: 'initialTime', value: 'string'},
        {name: 'duration', value: 'string'},
        {name: 'objectFit', value: 'string'},
        {name: 'poster', value: 'string'},
        {name: 'slaveId', value: 'string'},
        {name: 'position', value: 'Object'},
        {name: 'controls', value: 'boolean'},
        {name: 'autoplay', value: 'boolean'},
        {name: 'loop', value: 'boolean'},
        {name: 'muted', value: 'boolean'},
        {name: 'showPlayBtn', value: 'boolean'},
        {name: 'showCenterPlayBtn', value: 'boolean'},
        {name: 'showMuteBtn', value: 'boolean'},
        {name: 'danmuList', value: 'Array'},
        {name: 'enableDanmu', value: 'boolean'},
        {name: 'danmuBtn', value: 'boolean'},
        {name: 'hide', value: 'boolean'},
        {name: 'pageGesture', value: 'boolean'},
        {name: 'showProgress', value: 'boolean'},
        {name: 'direction', value: 'string'},
        {name: 'showFullscreenBtn', value: 'boolean'},
        {name: 'enableProgressGesture', value: 'boolean'}
    ];

    const correctParams = createCorrectBoxjsParams(openVideoParams);
    executeItTest({
        title: `【boxjs.openVideo】${system}端正常调用`,
        fn: boxjs.media.video,
        params: {
            type: 'open',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.openVideo】${system}端正常调用，不传参数`,
        fn: boxjs.media.video,
        params: {
            type: 'open',
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(openVideoParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.openVideo】${system}端正常调用，${errTitle}`,
            fn: boxjs.media.video,
            params: {
                type: 'open',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【updateVideo】测试', () => {
    const updateVideoParams = [
        {name: 'gesture', value: 'string'},
            {name: 'videoId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'sanId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'src', value: 'string'},
            {name: 'initialTime', value: 'string'},
            {name: 'duration', value: 'string'},
            {name: 'objectFit', value: 'string'},
            {name: 'poster', value: 'string'},
            {name: 'slaveId', value: 'string'},
            {name: 'position', value: 'Object'},
            {name: 'controls', value: 'boolean'},
            {name: 'autoplay', value: 'boolean'},
            {name: 'loop', value: 'boolean'},
            {name: 'muted', value: 'boolean'},
            {name: 'showPlayBtn', value: 'boolean'},
            {name: 'showCenterPlayBtn', value: 'boolean'},
            {name: 'showMuteBtn', value: 'boolean'},
            {name: 'danmuList', value: 'Array'},
            {name: 'enableDanmu', value: 'boolean'},
            {name: 'danmuBtn', value: 'boolean'},
            {name: 'hide', value: 'boolean'},
            {name: 'pageGesture', value: 'boolean'},
            {name: 'showProgress', value: 'boolean'},
            {name: 'direction', value: 'string'},
            {name: 'showFullscreenBtn', value: 'boolean'},
            {name: 'enableProgressGesture', value: 'boolean'}
    ];

    const correctParams = createCorrectBoxjsParams(updateVideoParams);
    executeItTest({
        title: `【boxjs.updateVideo】${system}端正常调用`,
        fn: boxjs.media.video,
        params: {
            type: 'update',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.updateVideo】${system}端正常调用，不传参数`,
        fn: boxjs.media.video,
        params: {
            type: 'update',
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(updateVideoParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.updateVideo】${system}端正常调用，${errTitle}`,
            fn: boxjs.media.video,
            params: {
                type: 'update',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【removeVideo】测试', () => {
    const removeVideoParams = [
        {name: 'videoId', value: 'string'},
        {name: 'viewId', value: 'string'},
        {name: 'sanId', value: 'string'},
        {name: 'slaveId', value: 'string'}
    ];

    const correctParams = createCorrectBoxjsParams(removeVideoParams);
    executeItTest({
        title: `【boxjs.removeVideo】${system}端正常调用`,
        fn: boxjs.media.video,
        params: {
            type: 'remove',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.removeVideo】${system}端正常调用，不传参数`,
        fn: boxjs.media.video,
        params: {
            type: 'remove',
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(removeVideoParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.updateVideo】${system}端正常调用，${errTitle}`,
            fn: boxjs.media.video,
            params: {
                type: 'remove',
                data: errParams
            },
            errMsg
        });
    }
});

