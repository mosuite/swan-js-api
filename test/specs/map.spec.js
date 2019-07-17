/**
 * @file spec/map
 * @author liuxiaoming02@baidu.com
 * @description  boxjs/createMapt, updateMap, removeMap
 */
import {boxjs} from '../../src/boxjs';
const expect = require('chai').expect;
import $ from '../../src/utils/_core';
import {executeItTest, createCorrectBoxjsParams, createErrorBoxjsParamsList} from '../utils/boxjsParamsMock';
const system = $.isIOS ? 'ios' : 'android';

describe('API【createMap】测试', () => {
    const createMapParams = [
        {name: 'mapId', value: 'string='},
        {name: 'slaveId', value: 'string='},
        {name: 'position', value: 'Object'},
        {name: 'hide', value: 'boolean'},
        {name: 'showLocation', value: 'boolean'},
        {name: 'enable3D', value: 'boolean'},
        {name: 'enableRotate', value: 'boolean'},
        {name: 'enableScroll', value: 'boolean'},
        {name: 'enableZoom', value: 'boolean'},
        {name: 'enableOverlooking', value: 'boolean'},
        {name: 'showCompass', value: 'boolean'},
        {name: 'subkey', value: 'string'},
        {name: 'longitude', value: 'string'},
        {name: 'latitude', value: 'string'},
        {name: 'scale', value: 'string'},
        {name: 'markers', value: 'Array'},
        {name: 'polyline', value: 'Array'},
        {name: 'polygons', value: 'Array'},
        {name: 'circles', value: 'Array'},
        {name: 'controls', value: 'Array'},
        {name: 'includePoints', value: 'Array'}
    ];

    const correctParams = createCorrectBoxjsParams(createMapParams);
    executeItTest({
        title: `【boxjs.createMap】${system}端正常调用`,
        fn: boxjs.map.insert,
        params: correctParams
    });

    const errorParamsList = createErrorBoxjsParamsList(createMapParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.createMap】${system}端正常调用，${errTitle}`,
            fn: boxjs.map.insert,
            params: errParams,
            errMsg
        });
    }
});

describe('API【updateMap】测试', () => {
    const updateMapParams = [
        {name: 'mapId', value: 'string='},
        {name: 'slaveId', value: 'string='},
        {name: 'position', value: 'Object'},
        {name: 'hide', value: 'boolean'},
        {name: 'showLocation', value: 'boolean'},
        {name: 'enable3D', value: 'boolean'},
        {name: 'enableRotate', value: 'boolean'},
        {name: 'enableScroll', value: 'boolean'},
        {name: 'enableZoom', value: 'boolean'},
        {name: 'enableOverlooking', value: 'boolean'},
        {name: 'showCompass', value: 'boolean'},
        {name: 'subkey', value: 'string'},
        {name: 'longitude', value: 'string'},
        {name: 'latitude', value: 'string'},
        {name: 'scale', value: 'string'},
        {name: 'markers', value: 'Array'},
        {name: 'polyline', value: 'Array'},
        {name: 'polygons', value: 'Array'},
        {name: 'circles', value: 'Array'},
        {name: 'controls', value: 'Array'},
        {name: 'includePoints', value: 'Array'}
    ];

    const correctParams = createCorrectBoxjsParams(updateMapParams);
    executeItTest({
        title: `【boxjs.updateMap】${system}端正常调用`,
        fn: boxjs.map.update,
        params: correctParams
    });

    const errorParamsList = createErrorBoxjsParamsList(updateMapParams);
    for (let index = 0; index < errorParamsList.length; index++) {
        const {errTitle, errMsg, errParams} = errorParamsList[index];
        executeItTest({
            title: `【boxjs.updateMap】${system}端正常调用，${errTitle}`,
            fn: boxjs.map.update,
            params: errParams,
            errMsg
        });
    }
});

describe('API【removeMap】测试', () => {
    it(`【boxjs.removeMap】${system}端正常调用`, done => {
        boxjs.map.remove({
                mapId: 'id',
                slaveId: 'slaveId'
        }).then(res => {
            expect(res).to.be.a('object');
            done();
        })
    });

    it(`【boxjs.removeMap】${system}端异常调用，mapId参数缺失`, done => {
        boxjs.map.remove({
                slaveId: 'slaveId'
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]mapId is required.');
            done();
        })
    });

    it(`【boxjs.removeMap】${system}端异常调用，mapId类型异常`, done => {
        boxjs.map.remove({
                mapId: ['id'],
                slaveId: 'slaveId'
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]mapId type error. must be "string"');
            done();
        })
    });

    it(`【boxjs.removeMap】${system}端正常调用，slaveId参数缺失`, done => {
        boxjs.map.remove({
                mapId: 'id'
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.removeMap】${system}端异常调用，slaveId类型异常`, done => {
        boxjs.map.remove({
                mapId: 'id',
                slaveId: ['slaveId']
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        })
    });
});

