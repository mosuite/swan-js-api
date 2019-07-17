/**
 * @file util/boxjsParamsMock
 * @author bailonggang
 * @description  mock boxjs中参数对象
 */

import {expect} from 'chai';

export function executeItTest({title, fn, params, errMsg}) {
    it(title, done => {
        if (errMsg) {
            fn(params).catch(err => {
                expect(err).to.be.a('error');
                expect(err.message).to.be.equal(errMsg);
                done();
            });
        } else {
            fn(params).then(res => {
                expect(res).to.be.a('object');
                done();
            });
        }
    });
}

export function createCorrectBoxjsParams(argsArray) {
    const params = {};
    for (let i = 0, len = argsArray.length; i < len; i++) {
        const {name, value} = argsArray[i];
        params[name] = getMockParam(value);
    }

    return params;
}

export function createErrorBoxjsParamsList(argsArray) {
    const params = [];
    const len = argsArray.length;

    for (let i = 0; i < len; i++) {
        let {name: argName, value: argValue} = argsArray[i];
        const errParams = {};

        for (let j = 0; j < len; j++) {
            const {name, value} = argsArray[j];
            errParams[name] = getMockParam(value, argName === name);
            
            if (argName !== name && name === 'position') {
                errParams[name] = {left: 0, top: 0, width: 375, height: 200};
            }
        }

        const requireValue = isRequire(argValue);
        if(requireValue){
            argValue = argValue.slice(0, argValue.length - 1);
        }

        params.push({
            errTitle: `${argName}类型错误`,
            errMsg: `[jsNative Argument Error]${argName} type error. must be "${argValue}"`,
            errParams: {
                ...errParams
            }
        });

        if (requireValue) {
            delete errParams[argName];
            params.push({
                errTitle: `不传参数${argName}`,
                errMsg: `[jsNative Argument Error]${argName} is required.`,
                errParams: {
                    ...errParams
                }
            });
        }
    }

    return params;
}

function getMockParam(value, isError) {
    if (isRequire(value)) {
        value = value.slice(0, value.length - 1);
    }

    switch (value) {
        case 'string':
            return isError ? {} : '';
        case 'boolean':
            return isError ? {} : false;
        case 'object':
        case 'Object':
            return isError ? '' : {};
        case 'array':
        case 'Array':
            return isError ? '' : [];
        default:
            return '';
    }
}

function isRequire(value) {
    return /=$/.test(value);
}

