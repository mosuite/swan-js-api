/**
 * @file spec/input
 * @author liuxiaoming02@baidu.com
 * @description  boxjs/closeInput, boxjs/updateInput, boxjs/closeInput
 */
import {boxjs} from '../../src/boxjs';
import $ from '../../src/utils/_core';
import {executeItTest, createCorrectBoxjsParams, createErrorBoxjsParamsList} from '../utils/boxjsParamsMock';
const system = $.isIOS ? 'ios' : 'android';

describe('API【openInput】测试', () => {
    const openInputParams = [
        {name: 'id', value: 'string'},
        {name: 'slaveId', value: 'string'},
        {name: 'viewId', value: 'string'},
        {name: 'type', value: 'string'},
        {name: 'value', value: 'string'},
        {name: 'maxLength', value: 'string'},
        {name: 'password', value: 'string'},
        {name: 'style', value: 'Object'},
        {name: 'position', value: 'Object'},
        {name: 'cursorSpacing', value: 'string'},
        {name: 'cursor', value: 'string'},
        {name: 'focus', value: 'string'},
        {name: 'hide', value: 'string'},
        {name: 'placeholder', value: 'string'},
        {name: 'placeholderStyle', value: 'Object'},
        {name: 'confirmHold', value: 'string'},
        {name: 'confirmType', value: 'string'},
        {name: 'selectionStart', value: 'string'},
        {name: 'selectionEnd', value: 'string'},
        {name: 'adjustPosition', value: 'string'},
        {name: 'cb', value: 'string'}
    ];

    const correctParams = createCorrectBoxjsParams(openInputParams);
    executeItTest({
        title: `【boxjs.openInput】${system}端正常调用`,
        fn: boxjs.ui.open,
        params: {
            name: 'swan-input',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.openInput】${system}端正常调用，不传参数`,
        fn: boxjs.ui.open,
        params: {
            name: 'swan-input'
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(openInputParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.openInput】${system}端正常调用，${errTitle}`,
            fn: boxjs.ui.open,
            params: {
                name: 'swan-input',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【updateInput】测试', () => {
    const updateInputParams = [
        {name: 'id', value: 'string'},
        {name: 'slaveId', value: 'string'},
        {name: 'viewId', value: 'string'},
        {name: 'type', value: 'string'},
        {name: 'value', value: 'string'},
        {name: 'maxLength', value: 'string'},
        {name: 'password', value: 'string'},
        {name: 'style', value: 'Object'},
        {name: 'position', value: 'Object'},
        {name: 'cursorSpacing', value: 'string'},
        {name: 'cursor', value: 'string'},
        {name: 'focus', value: 'string'},
        {name: 'hide', value: 'string'},
        {name: 'placeholder', value: 'string'},
        {name: 'placeholderStyle', value: 'Object'},
        {name: 'confirmHold', value: 'string'},
        {name: 'confirmType', value: 'string'},
        {name: 'selectionStart', value: 'string'},
        {name: 'selectionEnd', value: 'string'},
        {name: 'adjustPosition', value: 'string' }
    ];

    const correctParams = createCorrectBoxjsParams(updateInputParams);
    executeItTest({
        title: `【boxjs.updateInput】${system}端正常调用`,
        fn: boxjs.ui.update,
        params: {
            name: 'swan-input',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.updateInput】${system}端正常调用，不传参数`,
        fn: boxjs.ui.update,
        params: {
            name: 'swan-input'
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(updateInputParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.updateInput】${system}端正常调用，${errTitle}`,
            fn: boxjs.ui.update,
            params: {
                name: 'swan-input',
                data: errParams
            },
            errMsg
        });
    }
});

describe('API【closeInput】测试', () => {
    const closeInputParams = [
        {name: 'id', value: 'string'},
        {name: 'slaveId', value: 'string'},
        {name: 'viewId', value: 'string'},
        {name: 'type', value: 'string'},
        {name: 'value', value: 'string'},
        {name: 'maxLength', value: 'string'},
        {name: 'password', value: 'string'},
        {name: 'style', value: 'Object'},
        {name: 'position', value: 'Object'},
        {name: 'cursorSpacing', value: 'string'},
        {name: 'cursor', value: 'string'},
        {name: 'focus', value: 'string'},
        {name: 'hide', value: 'string'},
        {name: 'placeholder', value: 'string'},
        {name: 'placeholderStyle', value: 'Object'},
        {name: 'confirmHold', value: 'string'},
        {name: 'confirmType', value: 'string'},
        {name: 'selectionStart', value: 'string'},
        {name: 'selectionEnd', value: 'string'},
        {name: 'adjustPosition', value: 'string'}
    ];

    const correctParams = createCorrectBoxjsParams(closeInputParams);
    executeItTest({
        title: `【boxjs.closeInput】${system}端正常调用`,
        fn: boxjs.ui.close,
        params: {
            name: 'swan-input',
            data: correctParams
        }
    });

    executeItTest({
        title: `【boxjs.closeInput】${system}端正常调用，不传参数`,
        fn: boxjs.ui.close,
        params: {
            name: 'swan-input'
        }
    });

    const errorParamsList = createErrorBoxjsParamsList(closeInputParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.closeInput】${system}端正常调用，${errTitle}`,
            fn: boxjs.ui.close,
            params: {
                name: 'swan-input',
                data: errParams
            },
            errMsg
        });
    }
});

