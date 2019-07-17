/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {boxjs} from '../../src/boxjs/index';
import $ from '../../src/utils/_core';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';


describe('API【boxjs.insertARCamera】测试', () => {
    it(`【boxjs.insertARCamera】${system}端正常调用`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                type: 'insert',
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.insertARCamera】${system}端异常调用，未传入slaveId`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.insertARCamera】${system}端异常调用，slaveId类型错误`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: true,
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.insertARCamera】${system}端异常调用，未传入hide`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide is required.');
            done();
        });
    });

    it(`【boxjs.insertARCamera】${system}端异常调用，hide类型错误`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: {},
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "boolean"');
            done();
        });
    });


    it(`【boxjs.insertARCamera】${system}端异常调用，未传入viewId`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.insertARCamera】${system}端异常调用，未传入position`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]position is required.');
            done();
        });
    });

    it(`【boxjs.insertARCamera】${system}端异常调用，未传入ARKey`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]ARKey is required.');
            done();
        });
    });

    it(`【boxjs.insertARCamera】${system}端异常调用，未传入ARType`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]ARType is required.');
            done();
        });
    });

    it(`【boxjs.insertARCamera】${system}端异常调用，未传入ARCameraId`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: '7',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]ARCameraId is required.');
            done();
        });
    });

    it(`【boxjs.insertARCamera】${system}端异常调用，未传入parentId`, done => {
        boxjs.media.ARCamera({
            type: 'insert',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

});

describe('API【boxjs.updateARCamera】测试', () => {
    it(`【boxjs.updateARCamera】${system}端正常调用`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                type: 'insert',
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.updateARCamera】${system}端异常调用，未传入slaveId`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.updateARCamera】${system}端异常调用，slaveId类型错误`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                slaveId: true,
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.updateARCamera】${system}端异常调用，未传入hide`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide is required.');
            done();
        });
    });

    it(`【boxjs.updateARCamera】${system}端异常调用，hide类型错误`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: {},
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "boolean"');
            done();
        });
    });


    it(`【boxjs.updateARCamera】${system}端异常调用，未传入viewId`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.updateARCamera】${system}端异常调用，未传入position`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]position is required.');
            done();
        });
    });

    it(`【boxjs.updateARCamera】${system}端异常调用，未传入ARKey`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]ARKey is required.');
            done();
        });
    });

    it(`【boxjs.updateARCamera】${system}端异常调用，未传入ARType`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]ARType is required.');
            done();
        });
    });

    it(`【boxjs.updateARCamera】${system}端异常调用，未传入ARCameraId`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                slaveId: '7',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]ARCameraId is required.');
            done();
        });
    });

    it(`【boxjs.updateARCamera】${system}端异常调用，未传入parentId`, done => {
        boxjs.media.ARCamera({
            type: 'update',
            data: {
                slaveId: '7',
                ARCameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                hide: true,
                ARKey: 'test',
                ARType: 'test',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

});

describe('API【boxjs.removeARCamera】测试', () => {
    it(`【boxjs.removeARCamera】${system}端正常调用`, done => {
        boxjs.media.ARCamera({
            type: 'remove',
            data: {
                ARCameraId: '_cff47',
                slaveId: '7',
                viewId: 'myAnim',
                parentId: ''
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.removeARCamera】${system}端异常调用， 未传入ARCameraId`, done => {
        boxjs.media.ARCamera({
            type: 'remove',
            data: {
                slaveId: '7',
                viewId: 'myAnim',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]ARCameraId is required.');
            done();
        });
    });

    it(`【boxjs.removeARCamera】${system}端异常调用， 未传入slaveId`, done => {
        boxjs.media.ARCamera({
            type: 'remove',
            data: {
                ARCameraId: '_cff47',
                viewId: 'myAnim',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.removeARCamera】${system}端异常调用， 未传入viewId`, done => {
        boxjs.media.ARCamera({
            type: 'remove',
            data: {
                ARCameraId: '_cff47',
                slaveId: '7',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.removeARCamera】${system}端异常调用， 未传入parentId`, done => {
        boxjs.media.ARCamera({
            type: 'remove',
            data: {
                ARCameraId: '_cff47',
                slaveId: '7',
                viewId: 'myAnim'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

});