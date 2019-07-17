/**
 * @file spec/canvas
 * @author bailonggang
 * @description  canvas能力单测
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';
import {mockMasterManager} from '../utils/mockMethod'
import {events} from '../../src/utils/event';

const eventData = {
    slaveId: '2',
    componentName: 'canvas',
    domId: 'canvasId',
    state: 'insert',
    sanId: 'testSanId'
};

const eventData2 = {
    slaveId: '2',
    componentName: 'canvas',
    domId: 'canvasId',
    state: 'remove',
    sanId: 'testSanId'
};

describe('API【createCanvasContext】测试', () => {
    before(() => {
        mockMasterManager();
        events.emit('componentStateChange', eventData);
    });
    after(() => {
        events.emit('componentStateChange', eventData2);
    })
    it(`【swan.createCanvasContext】${system}端正常调用`, done => {
        swan.createCanvasContext('canvasId');
        done();
    });

    it(`【swan.createCanvasContext】${system}端正常调用，canvasId参数错误`, done => {
        swan.createCanvasContext({});
        done();
    });
});

describe('API【canvasGetImageData】测试', () => {
    it(`【swan.canvasGetImageData】${system}端正常调用`, done => {
        swan.canvasGetImageData({
            canvasId: 'canvasId',
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('width', 'height', 'data');
                expect(res.width).to.be.a('number');
                expect(res.height).to.be.a('number');
                expect(res.data).to.be.a('Uint8ClampedArray');
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，complete函数执行`, done => {
        swan.canvasGetImageData({
            canvasId: 'canvasId',
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，不传参数canvasId`, done => {
        swan.canvasGetImageData({
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]canvasId is required.');
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，传入参数canvasId类型错误`, done => {
        swan.canvasGetImageData({
            canvasId: {},
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]canvasId type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，不传参数x`, done => {
        swan.canvasGetImageData({
            canvasId: 'canvasId',
            y: 0,
            width: 100,
            height: 100,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]x is required.');
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，传入参数x类型错误`, done => {
        swan.canvasGetImageData({
            canvasId: 'canvasId',
            x: {},
            y: 0,
            width: 100,
            height: 100,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]x type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，不传参数y`, done => {
        swan.canvasGetImageData({
            canvasId: 'canvasId',
            x: 0,
            width: 100,
            height: 100,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]y is required.');
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，传入参数y类型错误`, done => {
        swan.canvasGetImageData({
            canvasId: 'canvasId',
            x: 0,
            y: {},
            width: 100,
            height: 100,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]y type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，不传参数width`, done => {
        swan.canvasGetImageData({
            canvasId: 'canvasId',
            x: 0,
            y: 0,
            height: 100,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]width is required.');
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，传入参数width类型错误`, done => {
        swan.canvasGetImageData({
            canvasId: 'canvasId',
            x: 0,
            y: 0,
            width: {},
            height: 100,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]width type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，不传参数height`, done => {
        swan.canvasGetImageData({
            canvasId: 'canvasId',
            x: 0,
            y: 0,
            width: 100,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]height is required.');
                done();
            }
        });
    });

    it(`【swan.canvasGetImageData】${system}端正常调用，传入参数height类型错误`, done => {
        swan.canvasGetImageData({
            canvasId: 'canvasId',
            x: 0,
            y: 0,
            width: 100,
            height: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]height type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【canvasPutImageData】测试', () => {
    it(`【swan.canvasPutImageData】${system}端正常调用`, done => {
        swan.canvasPutImageData({
            canvasId: 'canvasId',
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            data: [],
            success: res => {
                done();
            }
        });
    });

    it(`【swan.canvasPutImageData】${system}端正常调用，complete函数执行`, done => {
        swan.canvasPutImageData({
            canvasId: 'canvasId',
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            data: [],
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.canvasPutImageData】${system}端正常调用，不传参数canvasId`, done => {
        swan.canvasPutImageData({
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            data: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]canvasId is required.');
                done();
            }
        });
    });

    it(`【swan.canvasPutImageData】${system}端正常调用，传入参数canvasId类型错误`, done => {
        swan.canvasPutImageData({
            canvasId: {},
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            data: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]canvasId type error. must be "string"');
                done();
            }
        });
    });
});
describe('API【canvasToTempFilePath】测试', () => {
    it(`【swan.canvasToTempFilePath】${system}端正常调用`, done => {
        swan.canvasToTempFilePath({
            x: 100,
            y: 200,
            width: 50,
            height: 50,
            destWidth: 100,
            destHeight: 100,
            canvasId: 'canvasId',
            success: res => {
                done();
            }
        });
    });

    it(`【swan.canvasToTempFilePath】${system}端正常调用，complete函数执行`, done => {
        swan.canvasToTempFilePath({
            x: 100,
            y: 200,
            width: 50,
            height: 50,
            destWidth: 100,
            destHeight: 100,
            canvasId: 'canvasId',
            complete: () => {
                done();
            }
        });
    });

    it(`【swan.canvasToTempFilePath】${system}端正常调用，不传参数canvasId`, done => {
        swan.canvasToTempFilePath({
            x: 100,
            y: 200,
            width: 50,
            height: 50,
            destWidth: 100,
            destHeight: 100,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]canvasId is required.');
                done();
            }
        });
    });

    it(`【swan.canvasToTempFilePath】${system}端正常调用，参数canvasId类型错误`, done => {
        swan.canvasToTempFilePath({
            x: 100,
            y: 200,
            width: 50,
            height: 50,
            destWidth: 100,
            destHeight: 100,
            canvasId: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]canvasId type error. must be "string"');
                done();
            }
        });
    });
});

describe('API【canvasContext】测试', () => {
    after(() => {
        window.masterManager = undefined;
    });

    it(`【canvasContext.setFillStyle】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setFillStyle('blue');
        done();
    });

    it(`【canvasContext.setStrokeStyle】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setStrokeStyle('rgba(22,33,55,1)');
        done();
    });

    it(`【canvasContext.setShadow】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setShadow(10, 50, 50, 'red');
        done();
    });

    it(`【canvasContext.createLinearGradient】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        const grd = canvas.createLinearGradient(0, 0, 200, 0);
        expect(grd).to.be.a('object');
        done();
    });

    it(`【canvasContext.createCircularGradient】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        const grd = canvas.createCircularGradient(75, 50, 50);
        expect(grd).to.be.a('object');
        done();
    });

    it(`【canvasContext.addColorStop】${system}端正常调用`, done => {
        const ctx = swan.createCanvasContext('canvasId');
        const grd = ctx.createLinearGradient(30, 10, 120, 10);
        grd.addColorStop(0, 'red');
        expect(grd).to.be.a('object');
        done();
    });

    it(`【canvasContext.setLineWidth】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setLineWidth(5);
        done();
    });

    it(`【canvasContext.setLineCap】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setLineCap('butt');
        done();
    });

    it(`【canvasContext.setLineJoin】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setLineJoin('bevel');
        done();
    });

    it(`【canvasContext.setLineDash】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setLineDash([10, 20], 5);
        done();
    });

    it(`【canvasContext.rect】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.rect(30, 30, 150, 75);
        done();
    });

    it(`【canvasContext.fillRect】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.fillRect(30, 30, 150, 75);
        done();
    });

    it(`【canvasContext.strokeRect】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.strokeRect(30, 30, 150, 75);
        done();
    });

    it(`【canvasContext.clearRect】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.fillRect(150, 0, 150, 200);
        canvas.clearRect(30, 30, 150, 75);
        done();
    });

    it(`【canvasContext.fill】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.moveTo(100, 100);
        canvas.lineTo(10, 100);
        canvas.lineTo(10, 10);
        canvas.fill();
        done();
    });

    it(`【canvasContext.stroke】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.moveTo(100, 100);
        canvas.lineTo(10, 100);
        canvas.lineTo(10, 10);
        canvas.stroke();
        done();
    });

    it(`【canvasContext.beginPath】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.beginPath();
        done();
    });

    it(`【canvasContext.closePath】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.moveTo(100, 100);
        canvas.lineTo(10, 100);
        canvas.lineTo(10, 10);
        canvas.closePath();
        done();
    });

    it(`【canvasContext.moveTo】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.moveTo(10, 10);
        canvas.lineTo(100, 10);
        canvas.moveTo(10, 100);
        done();
    });

    it(`【canvasContext.lineTo】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.lineTo(110, 60);
        done();
    });

    it(`【canvasContext.arc】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.arc(100, 75, 50, 0, 2 * Math.PI);
        done();
    });

    it(`【canvasContext.arcTo】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.arc(100, 100, 200, 200, 100);
        done();
    });

    it(`【canvasContext.scale】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.scale(2, 2);
        done();
    });

    it(`【canvasContext.rotate】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.rotate(20 * Math.PI / 180);
        done();
    });

    it(`【canvasContext.translate】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.translate(20, 20);
        done();
    });

    it(`【canvasContext.clip】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.clip()
        done();
    });

    it(`【canvasContext.setFontSize】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setFontSize(20);
        done();
    });

    it(`【canvasContext.fillText】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.fillText('Hello', 20, 20);
        done();
    });

    it(`【canvasContext.setTextAlign】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setTextAlign('left');
        done();
    });

    it(`【canvasContext.setTextBaseline】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setTextBaseline('middle');
        done();
    });

    it(`【canvasContext.drawImage】${system}端正常调用`, done => {
        mockMasterManager();
        const canvas = swan.createCanvasContext('canvasId');
        canvas.drawImage('xxx', 0, 0, 150, 100);
        done();
    });

    it(`【canvasContext.drawImage】${system}端正常调用，drawImage使用bdfile`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.drawImage('bdfile://xxx', 0, 0, 150, 100);
        done();
    });

    it(`【canvasContext.drawImage】${system}端正常调用，drawImage使用网络图片`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.drawImage('https://www.baidu.com/img/bd_logo1.png', 0, 0, 150, 100);
        done();
    });

    it(`【canvasContext.drawImage】${system}端正常调用，drawImage使用网络图片缓存`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.drawImage('https://www.baidu.com/img/bd_logo1.png', 0, 0, 150, 100);

        setTimeout(() => {
            canvas.drawImage('https://www.baidu.com/img/bd_logo1.png', 0, 0, 150, 100);
            done();
        }, 1000);
    });

    it(`【canvasContext.drawImage】${system}端正常调用，drawImage使用错误网络图片`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.drawImage('https://www.baidu.com/xxx/bd_logo1.png', 0, 0, 150, 100);
        done();
    });

    it(`【canvasContext.setGlobalAlpha】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setGlobalAlpha(0.2);
        done();
    });

    it(`【canvasContext.measureText】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.font = 'italic bold 20px cursive';
        const metrics = canvas.measureText('Hello World')

        expect(metrics).to.be.a('object');
        expect(metrics).to.have.all.keys('width');
        done();
    });

    it(`【canvasContext.font】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.font = 'italic bold 20px cursive';
        done();
    });

    it(`【canvasContext.transform】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.transform(1, 1, 2, 2, 3, 3);
        done();
    });

    it(`【canvasContext.setTransform】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setTransform(1, 1, 2, 2, 3, 3);
        done();
    });

    it(`【canvasContext.setMiterLimit】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setMiterLimit(2);
        done();
    });

    it(`【canvasContext.bezierCurveTo】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.bezierCurveTo(20, 100, 200, 100, 200, 20);
        done();
    });

    it(`【canvasContext.quadraticCurveTo】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.quadraticCurveTo(20, 100, 200, 20);
        done();
    });

    it(`【canvasContext.save】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.save();
        canvas.setFillStyle('#99aa34');
        canvas.fillRect(10, 10, 150, 100);
        done();
    });

    it(`【canvasContext.restore】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.save();
        canvas.setFillStyle('#f60');
        canvas.fillRect(10, 10, 150, 100);
        canvas.restore();
        canvas.fillRect(50, 50, 150, 100);
        done();
    });

    it(`【canvasContext.strokeText】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.strokeText('一行文字', 50, 50, 100);
        done();
    });

    it(`【canvasContext.setLineDashOffset】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setLineDashOffset(1);
        done();
    });

    it(`【canvasContext.createPattern】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.createPattern('xxx', 'repeat-x');
        done();
    });

    it(`【canvasContext.draw】${system}端正常调用`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setFillStyle('rgb(255,255,255)');
        canvas.fillRect(10, 10, 150, 75);
        canvas.draw();
        done();
    });

    it(`【canvasContext.draw】${system}端正常调用，draw带参数`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setFillStyle('rgb(255,255,255)');
        canvas.fillRect(10, 10, 150, 75);
        canvas.draw(true, () => {

        });
        done();
    });

    it(`【canvasContext.draw】${system}端正常调用，draw只带回调参数`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.setFillStyle('rgb(255,255,255)');
        canvas.fillRect(10, 10, 150, 75);
        canvas.draw(() => {

        });
        done();
    });

    it(`【canvasContext.draw】${system}端正常调用，draw只带回调参数`, done => {
        const canvas = swan.createCanvasContext('canvasId');
        canvas.actions = [Promise.resolve()];
        canvas.draw(() => {

        });
        done();
    });
});
