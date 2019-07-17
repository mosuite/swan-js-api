/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {boxjs} from '../../src/boxjs/index';
import $ from '../../src/utils/_core';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';


describe('API【boxjs.insertCamera】测试', () => {
    it(`【boxjs.insertCamera】${system}端正常调用`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.insertCamera】${system}端异常调用，未传入slaveId`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.insertCamera】${system}端异常调用，slaveId类型错误`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                slaveId: true,
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.insertCamera】${system}端异常调用，未传入hide`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide is required.');
            done();
        });
    });

    it(`【boxjs.insertCamera】${system}端异常调用，hide类型错误`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: {},
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "boolean"');
            done();
        });
    });


    it(`【boxjs.insertCamera】${system}端异常调用，未传入viewId`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.insertCamera】${system}端异常调用，未传入position`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]position is required.');
            done();
        });
    });

    it(`【boxjs.insertCamera】${system}端异常调用，未传入flash`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]flash is required.');
            done();
        });
    });

    it(`【boxjs.insertCamera】${system}端异常调用，未传入devicePosition`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]devicePosition is required.');
            done();
        });
    });

    it(`【boxjs.insertCamera】${system}端异常调用，未传入cameraId`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                slaveId: '7',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]cameraId is required.');
            done();
        });
    });

    it(`【boxjs.insertCamera】${system}端异常调用，未传入parentId`, done => {
        boxjs.media.camera({
            type: 'insert',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

});

describe('API【boxjs.updateCamera】测试', () => {
    it(`【boxjs.updateCamera】${system}端正常调用`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.updateCamera】${system}端异常调用，未传入slaveId`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.updateCamera】${system}端异常调用，slaveId类型错误`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                slaveId: true,
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.updateCamera】${system}端异常调用，未传入hide`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide is required.');
            done();
        });
    });

    it(`【boxjs.updateCamera】${system}端异常调用，hide类型错误`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: {},
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "boolean"');
            done();
        });
    });


    it(`【boxjs.updateCamera】${system}端异常调用，未传入viewId`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.updateCamera】${system}端异常调用，未传入position`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]position is required.');
            done();
        });
    });

    it(`【boxjs.updateCamera】${system}端异常调用，未传入flash`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]flash is required.');
            done();
        });
    });

    it(`【boxjs.updateCamera】${system}端异常调用，未传入devicePosition`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]devicePosition is required.');
            done();
        });
    });

    it(`【boxjs.updateCamera】${system}端异常调用，未传入cameraId`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                slaveId: '7',
                viewId: 'myAr',
                flash: 'stop',
                parentId: '',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]cameraId is required.');
            done();
        });
    });

    it(`【boxjs.updateCamera】${system}端异常调用，未传入parentId`, done => {
        boxjs.media.camera({
            type: 'update',
            data: {
                slaveId: '7',
                cameraId: 'myAnim',
                viewId: 'myAr',
                flash: 'stop',
                hide: true,
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                devicePosition: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

});


describe('API【boxjs.removeCamera】测试', () => {
    it(`【boxjs.removeCamera】${system}端正常调用`, done => {
        boxjs.media.camera({
            type: 'remove',
            data: {
                cameraId: '_cff47',
                slaveId: '7',
                viewId: 'myAnim'
            }
        }).then(res => {
            console.log(11111,res);
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.removeCamera】${system}端异常调用， 未传入cameraId`, done => {
        boxjs.media.camera({
            type: 'remove',
            data: {
                slaveId: '7',
                viewId: 'myAnim'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]cameraId is required.');
            done();
        });
    });

    it(`【boxjs.removeCamera】${system}端异常调用， 未传入slaveId`, done => {
        boxjs.media.camera({
            type: 'remove',
            data: {
                cameraId: '_cff47',
                viewId: 'myAnim'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.removeCamera】${system}端异常调用， 未传入viewId`, done => {
        boxjs.media.camera({
            type: 'remove',
            data: {
                cameraId: '_cff47',
                slaveId: '7'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });


});