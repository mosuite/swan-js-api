/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {boxjs} from '../../src/boxjs/index';
import $ from '../../src/utils/_core';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';


describe('API【boxjs.insertCanvas】测试', () => {
    it(`【boxjs.insertCanvas】${system}端正常调用`, done => {
        boxjs.canvas.insert({
            slaveId: '7',
            canvasId: 'myAnim',
            hide: 'true',
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.insertCanvas】${system}端异常调用，未传入slaveId`, done => {
        boxjs.canvas.insert({
            canvasId: 'myAnim',
            hide: 'true',
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.insertCanvas】${system}端异常调用，slaveId类型错误`, done => {
        boxjs.canvas.insert({
            slaveId: true,
            canvasId: 'myAnim',
            hide: 'true',
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.insertCanvas】${system}端异常调用，未传入hide`, done => {
        boxjs.canvas.insert({
            slaveId: '7',
            canvasId: 'myAnim',
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide is required.');
            done();
        });
    });

    it(`【boxjs.insertCanvas】${system}端异常调用，hide类型错误`, done => {
        boxjs.canvas.insert({
            slaveId: '7',
            canvasId: 'myAnim',
            hide: true,
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "string"');
            done();
        });
    });


    it(`【boxjs.insertCanvas】${system}端异常调用，未传入canvasId`, done => {
        boxjs.canvas.insert({
            slaveId: '7',
            hide: 'true',
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]canvasId is required.');
            done();
        });
    });

    it(`【boxjs.insertCanvas】${system}端异常调用，未传入position`, done => {
        boxjs.canvas.insert({
            slaveId: '7',
            canvasId: 'myAnim',
            hide: 'true',
            disableScroll: 'true',
            gesture: '0'
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]position is required.');
            done();
        });
    });

    it(`【boxjs.insertCanvas】${system}端异常调用，未传入disableScroll`, done => {
        boxjs.canvas.insert({
            slaveId: '7',
            canvasId: 'myAnim',
            hide: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]disableScroll is required.');
            done();
        });
    });

    it(`【boxjs.insertCanvas】${system}端异常调用，未传入gesture`, done => {
        boxjs.canvas.insert({
            slaveId: '7',
            canvasId: 'myAnim',
            hide: 'true',
            disableScroll: 'true',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture is required.');
            done();
        });
    });
    
});

describe('API【boxjs.updateCanvas】测试', () => {
    it(`【boxjs.updateCanvas】${system}端正常调用`, done => {
        boxjs.canvas.update({
            slaveId: '7',
            canvasId: 'myAnim',
            hide: 'true',
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.updateCanvas】${system}端异常调用，未传入slaveId`, done => {
        boxjs.canvas.update({
            canvasId: 'myAnim',
            hide: 'true',
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.updateCanvas】${system}端异常调用，slaveId类型错误`, done => {
        boxjs.canvas.update({
            slaveId: true,
            canvasId: 'myAnim',
            hide: 'true',
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.updateCanvas】${system}端异常调用，未传入hide`, done => {
        boxjs.canvas.update({
            slaveId: '7',
            canvasId: 'myAnim',
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide is required.');
            done();
        });
    });

    it(`【boxjs.updateCanvas】${system}端异常调用，hide类型错误`, done => {
        boxjs.canvas.update({
            slaveId: '7',
            canvasId: 'myAnim',
            hide: true,
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "string"');
            done();
        });
    });


    it(`【boxjs.updateCanvas】${system}端异常调用，未传入canvasId`, done => {
        boxjs.canvas.update({
            slaveId: '7',
            hide: 'true',
            disableScroll: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]canvasId is required.');
            done();
        });
    });

    it(`【boxjs.updateCanvas】${system}端异常调用，未传入position`, done => {
        boxjs.canvas.update({
            slaveId: '7',
            canvasId: 'myAnim',
            hide: 'true',
            disableScroll: 'true',
            gesture: '0'
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]position is required.');
            done();
        });
    });

    it(`【boxjs.updateCanvas】${system}端异常调用，未传入disableScroll`, done => {
        boxjs.canvas.update({
            slaveId: '7',
            canvasId: 'myAnim',
            hide: 'true',
            gesture: '0',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]disableScroll is required.');
            done();
        });
    });

    it(`【boxjs.updateCanvas】${system}端异常调用，未传入gesture`, done => {
        boxjs.canvas.update({
            slaveId: '7',
            canvasId: 'myAnim',
            hide: 'true',
            disableScroll: 'true',
            position: {
                left: '0',
                top: '0',
                width: '100',
                height: '150'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture is required.');
            done();
        });
    });

});

describe('API【boxjs.removeCanvas】测试', () => {
    it(`【boxjs.removeCanvas】${system}端正常调用`, done => {
        boxjs.canvas.remove({
            canvasId: '_cff47',
            slaveId: '7'
        }).then(res => {
            console.log(11111,res);
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.removeCanvas】${system}端异常调用， 未传入canvasId`, done => {
        boxjs.canvas.remove({
            slaveId: '7'
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]canvasId is required.');
            done();
        });
    });

    it(`【boxjs.removeCanvas】${system}端异常调用， 未传入slaveId`, done => {
        boxjs.canvas.remove({
            canvasId: '_cff47'
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

});