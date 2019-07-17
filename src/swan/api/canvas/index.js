/**
 * @file canvas相关操作的API
 * @author houyu(houyu01@baidu.com)
 */
/* global masterManager */
import $ from '../../../utils/_core';
import {swanNative} from '../../container';
import {createInvokePromise, createLevel2Promise, executeCallback, paramsInOrder} from '../../../invoker/funcs';
import {getSlaveId, getParamType} from '../../../utils/common';
import {createNormalColor, createLinearGradient, createCircularGradient} from './color';
import {componentsMap, getComponentId, nativeOperateMethod} from '../../../utils/component-operator';
import {jsonParse} from '../../../utils/parser';
import {downloadFile} from '../network/index';

const canvasOperators = [
    'setLineWidth', 'setLineCap',
    'setLineJoin', 'setLineDash',
    'setMiterLimit', 'rect', 'fillRect',
    'strokeRect', 'clearRect', 'fill',
    'stroke', 'beginPath', 'closePath',
    'moveTo', 'lineTo', 'arc',
    'bezierCurveTo', 'quadraticCurveTo', 'scale',
    'rotate', 'translate', 'clip',
    'setFontSize', 'fillText', 'setTextAlign', 'setTextBaseline',
    'drawImage', 'setGlobalAlpha', 'save',
    'restore', 'arcTo', 'strokeText',
    'setLineDashOffset', 'createPattern', 'setTransform', 'transform',
    'canvasToTempFilePath'
];

// 给canvas属性赋值的属性名数组，例ctx.font = 'XXX'
const canvasAttr = ['font'];

const canvasElementMakeMethods = {
    setFillStyle(originColor = 'black') {
        const color = typeof originColor === 'string' ? createNormalColor(originColor) : originColor;
        this.actions.push({method: 'setFillStyle', data: color.exportColorSerialize()});
    },
    setStrokeStyle(originColor = 'black') {
        const color = typeof originColor === 'string' ? createNormalColor(originColor) : originColor;
        this.actions.push({method: 'setStrokeStyle', data: color.exportColorSerialize()});
    },
    setShadow(offsetX = 0, offsetY = 0, blur = 0, originColor = 'black') {
        const color = typeof originColor === 'string' ? createNormalColor(originColor) : originColor;
        this.actions.push({method: 'setShadow', data: [offsetX, offsetY, blur, color.exportColorSerialize()]});
    },
    // 测量文本尺寸信息，目前仅返回文本宽度。同步接口
    measureText(text) {
        const params = paramsInOrder(swanNative, 'canvas.measureTextSync', {
            slaveId: this.slaveId + '',
            canvasId: componentsMap.get(this.componentId),
            text,
            font: this.orderMeasureTextFont
        });
        let result = swanNative.invoke('canvas.measureTextSync', params);
        result = $.isString(result) ? JSON.parse(result) : result;
        return result.data;
    },
    createLinearGradient,
    createCircularGradient
};

// 缓存drawImage图片地址
let imageCache = {};

const operationProxy = operatorName => function (...args) {
    // 若是drawImage，需要将用户写的相对地址转成在手机中的真实地址
    let promise = new Promise((resolve, reject) => {
        if ('drawImage' === operatorName) {
            if (imageCache[args[0]]) {
                (args[0] = imageCache[args[0]]) && resolve({method: operatorName, data: args});
            }
            else if (/^bdfile:\/\//.test(args[0])) {
                resolve({method: operatorName, data: args});
            }
            else if (/^(http|https):\/\//.test(args[0])) {
                downloadFile({
                    url: args[0],
                    success(res) {
                        args[0] = imageCache[args[0]] = res.tempFilePath;
                        resolve({method: operatorName, data: args});
                    },
                    fail(err) {
                        reject({errMsg: `download image ${args[0]} fail`});
                    }
                });
            }
            else {
                args[0] = masterManager.getPathFromFront(args[0]);
                resolve({method: operatorName, data: args});
            }
        }
        else {
            resolve({method: operatorName, data: args});
        }
    });

    this.actions.push(promise);
    return this;
};

const decorateCanvas = canvasOperators => target => {
    canvasOperators.forEach(operatorName => {
        target.prototype[operatorName] = operationProxy(operatorName);
    });
    Object.assign(target.prototype, canvasElementMakeMethods);
};

@decorateCanvas(canvasOperators)
class CanvasContext {
    constructor(canvasId, slaveId) {
        let paramType = getParamType(canvasId);
        if (paramType !== 'String') {
            console.error(`createCanvasContext Parameter error: domId should be String instead of ${paramType}`);
        }
        this.slaveId = slaveId;
        this.canvasId = canvasId;
        this.actions = [];
        // 为了每次调measureText得知最近设置的font
        this.orderMeasureTextFont = '';
        this.componentId = getComponentId({
            slaveId,
            domId: canvasId,
            componentName: 'canvas'
        });
        const ctx = this;
        // 监听开发者创建的实例上下文中属性是否变化，若变了就push一条记录到actions中
        canvasAttr.forEach(attrName => {
            Object.defineProperty(ctx, attrName, {
                set(val) {
                    if ('font' === attrName) {
                        this.orderMeasureTextFont = val;
                    }
                    val && ctx.actions.push({
                        method: attrName,
                        data: [val]
                    });
                }
            });
        });
    }
    draw(reserve = false, callback = () => {}) {
        const actions = this.actions;

        if (typeof reserve === 'function') {
            callback = reserve;
        }
        reserve = reserve === true;
        this.actions = [];

        Promise.all(actions).then(res => {
            function invokeBoxJs() {
                const apiName = 'canvas.drawCanvas';

                let drawData = {
                    reserve: +reserve + '',
                    slaveId: this.slaveId,
                    canvasId: componentsMap.get(this.componentId),
                    actions: JSON.stringify(res)
                };
                let level2Promise = createLevel2Promise(drawData, jsonParse);
                let invokePromise = createInvokePromise(swanNative, apiName, drawData);

                executeCallback({
                    apiName,
                    promise: [invokePromise, level2Promise]
                }, {success: callback});
            }

            nativeOperateMethod(this.componentId, invokeBoxJs, this);
        }).catch(err => {
            console.error(err);
        });
    }
}

export default canvasId => new CanvasContext(canvasId, getSlaveId());
