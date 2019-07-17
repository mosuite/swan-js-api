/**
 * @file spec/textarea
 * @author liuxiaoming02@baidu.com
 * @description boxjs/openTextarea, boxjs/updateTextarea, boxjs/closeTextarea
 *              boxjs/openVideo, boxjs/updateVideo, boxjs/removeVideo
 *              boxjs/openLive, boxjs/updateLive, boxjs/removeLive
 */
import {boxjs} from '../../src/boxjs';
import $ from '../../src/utils/_core';
import {executeItTest, createCorrectBoxjsParams, createErrorBoxjsParamsList} from '../utils/boxjsParamsMock';
const system = $.isIOS ? 'ios' : 'android';

describe('API【openTextarea】测试', () => {
    const openTextareaParams = [
        {name: 'slaveId', value: 'string'},
            {name: 'inputId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'disabled', value: 'string'},
            {name: 'placeholder', value: 'string'},
            {name: 'value', value: 'string'},
            {name: 'maxLength', value: 'string'},
            {name: 'style', value: 'Object'},
            {name: 'position', value: 'Object'},
            {name: 'focus', value: 'string'},
            {name: 'cursor', value: 'string'},
            {name: 'cursorSpacing', value: 'string'},
            {name: 'selectionStart', value: 'string'},
            {name: 'selectionEnd', value: 'string'},
            {name: 'showConfirmBar', value: 'string'},
            {name: 'adjustPosition', value: 'string'},
            {name: 'fixed', value: 'string'},
            {name: 'autoHeight', value: 'string'},
            {name: 'placeholderStyle', value: 'Object'},
            {name: 'hide', value: 'string'},
            {name: 'cb', value: 'string'}
    ];

    const correctParams = createCorrectBoxjsParams(openTextareaParams);
    executeItTest({
        title: `【boxjs.openTextarea】${system}端正常调用`,
        fn: boxjs.ui.open,
        params: {
            name: 'swan-textarea',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.openTextarea】${system}端正常调用，不传参数`,
        fn: boxjs.ui.open,
        params: {
            name: 'swan-textarea'
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(openTextareaParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.openTextarea】${system}端正常调用，${errTitle}`,
            fn: boxjs.ui.open,
            params: {
                name: 'swan-textarea',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【updateTextarea】测试', () => {
    const updateTextareaParams = [
        {name: 'slaveId', value: 'string'},
        {name: 'inputId', value: 'string'},
        {name: 'viewId', value: 'string'},
        {name: 'parentId', value: 'string'},
        {name: 'disabled', value: 'string'},
        {name: 'placeholder', value: 'string'},
        {name: 'value', value: 'string'},
        {name: 'maxLength', value: 'string'},
        {name: 'style', value: 'Object'},
        {name: 'position', value: 'Object'},
        {name: 'focus', value: 'string'},
        {name: 'cursor', value: 'string'},
        {name: 'cursorSpacing', value: 'string'},
        {name: 'selectionStart', value: 'string'},
        {name: 'selectionEnd', value: 'string'},
        {name: 'showConfirmBar', value: 'string'},
        {name: 'adjustPosition', value: 'string'},
        {name: 'fixed', value: 'string'},
        {name: 'autoHeight', value: 'string'},
        {name: 'placeholderStyle', value: 'Object'},
        {name: 'hide', value: 'string'},
        {name: 'cb', value: 'string'}
    ];

    const correctParams = createCorrectBoxjsParams(updateTextareaParams);
    executeItTest({
        title: `【boxjs.updateTextarea】${system}端正常调用`,
        fn: boxjs.ui.update,
        params: {
            name: 'swan-textarea',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.updateTextarea】${system}端正常调用，不传参数`,
        fn: boxjs.ui.update,
        params: {
            name: 'swan-textarea'
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(updateTextareaParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.updateTextarea】${system}端正常调用，${errTitle}`,
            fn: boxjs.ui.update,
            params: {
                name: 'swan-textarea',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【closeTextarea】测试', () => {
    const closeTextareaParams = [
        {name: 'slaveId', value: 'string='},
        {name: 'inputId', value: 'string='},
        {name: 'viewId', value: 'string='},
        {name: 'parentId', value: 'string='}
    ];

    const correctParams = createCorrectBoxjsParams(closeTextareaParams);
    executeItTest({
        title: `【boxjs.closeTextarea】${system}端正常调用`,
        fn: boxjs.ui.close,
        params: {
            name: 'swan-textarea',
            data: correctParams
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(closeTextareaParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.closeTextarea】${system}端正常调用，${errTitle}`,
            fn: boxjs.ui.close,
            params: {
                name: 'swan-textarea',
                data: errParams
            },
            errMsg
        });
    }
});