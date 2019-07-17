/**
 * @file spec/_naSwan
 * @author lijia30@baidu.com
 * @description  调用_naSwan相关函数
 */

import {
    getComponentId,
    nativeOperateMethod
} from '../../src/utils/component-operator';
import {events} from '../../src/utils/event';
const expect = require('chai').expect;

const data = {
    slaveId: 'slave-1',
    componentName: 'test',
    domId: 'dom-1',
    state: 'insert',
    sanId: 'sanId-1'
};

describe('commponent-operator', () => {
    it('getComponentId is a function', () => {
        expect(getComponentId).to.be.a('function');
    });

    it('getComponentId should return correct result', () => {
        let result = getComponentId(data);
        expect(result).to.equal('slave-1_test_dom-1');
    });

    it('componentStateChange listener work correctly', done=> {
        events.on('slave-1_test_dom-1', events => {
            done();
        });
        events.emit('componentStateChange', data);
    });

    it('nativeOperateMethod is a function', () => {
        expect(nativeOperateMethod).to.be.a('function');
    });

    it('nativeOperateMethod should run correct when componentId was exist', done => {
        nativeOperateMethod('slave-1_test_dom-1', () => {
            done();
        })
    });

    it('nativeOperateMethod should run correct when componentId was not exist', done => {
        nativeOperateMethod('slave-1_test_dom-2', () => {
            done();
        })
        events.emit('slave-1_test_dom-2');
    });

    it('communicator should run correct', done => {
        events.on('master-slave-communicator', event => {
            done();
        })
        let event = document.createEvent('HTMLEvents');
        event.initEvent("message", true, true);
        event.eventType = 'message';
        event.message = {
            type: 'master-slave-communicator'
        };
        document.dispatchEvent(event);
    });

});





