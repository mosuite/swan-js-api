/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {boxjs} from '../../src/boxjs/index';
import $ from '../../src/utils/_core';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';


describe('API【boxjs.insertButton】测试', () => {
    it(`【boxjs.insertButton】${system}端正常调用`, done => {
        boxjs.ui.open({
            name: 'swan-button',
            data: {
                gesture: '0',
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }

        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.insertButton】${system}端异常调用，未传入slaveId`, done => {
        boxjs.ui.open({
            name: 'swan-button',
            data: {
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.insertButton】${system}端异常调用，gesture类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-button',
            data: {
                slaveId: '7',
                gesture: [],
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.insertButton】${system}端异常调用，hide类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: true,
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "string"');
            done();
        });
    });


    it(`【boxjs.insertButton】${system}端异常调用，未传入viewId`, done => {
        boxjs.ui.open({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: 'true',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.insertButton】${system}端异常调用，未传入parentId`, done => {
        boxjs.ui.open({
            name: 'swan-button',
            data: {
                gesture: '0',
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

    it(`【boxjs.insertButton】${system}端异常调用，未传入buttonId`, done => {
        boxjs.ui.open({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]buttonId is required.');
            done();
        });
    });
    it(`【boxjs.insertButton】${system}端异常调用，未传入text`, done => {
        boxjs.ui.open({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]text is required.');
            done();
        });
    });
});

describe('API【boxjs.updateButton】测试', () => {
    it(`【boxjs.updateButton】${system}端正常调用`, done => {
        boxjs.ui.update({
            name: 'swan-button',
            data: {
                gesture: '0',
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }

        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.updateButton】${system}端异常调用，未传入slaveId`, done => {
        boxjs.ui.update({
            name: 'swan-button',
            data: {
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.updateButton】${system}端异常调用，gesture类型错误`, done => {
        boxjs.ui.update({
            name: 'swan-button',
            data: {
                slaveId: '7',
                gesture: [],
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.updateButton】${system}端异常调用，hide类型错误`, done => {
        boxjs.ui.update({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: true,
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "string"');
            done();
        });
    });


    it(`【boxjs.updateButton】${system}端异常调用，未传入viewId`, done => {
        boxjs.ui.open({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: 'true',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.updateButton】${system}端异常调用，未传入parentId`, done => {
        boxjs.ui.update({
            name: 'swan-button',
            data: {
                gesture: '0',
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

    it(`【boxjs.updateButton】${system}端异常调用，未传入buttonId`, done => {
        boxjs.ui.update({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]buttonId is required.');
            done();
        });
    });
    it(`【boxjs.updateButton】${system}端异常调用，未传入text`, done => {
        boxjs.ui.update({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]text is required.');
            done();
        });
    });
});


describe('API【boxjs.removeButton】测试', () => {
    it(`【boxjs.removeButton】${system}端正常调用`, done => {
        boxjs.ui.close({
            name: 'swan-button',
            data: {
                gesture: '0',
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.removeButton】${system}端异常调用，未传入slaveId`, done => {
        boxjs.ui.close({
            name: 'swan-button',
            data: {
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.removeButton】${system}端异常调用，gesture类型错误`, done => {
        boxjs.ui.close({
            name: 'swan-button',
            data: {
                slaveId: '7',
                gesture: [],
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.removeButton】${system}端异常调用，hide类型错误`, done => {
        boxjs.ui.close({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: true,
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "string"');
            done();
        });
    });


    it(`【boxjs.removeButton】${system}端异常调用，未传入viewId`, done => {
        boxjs.ui.close({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: 'true',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.removeButton】${system}端异常调用，未传入parentId`, done => {
        boxjs.ui.close({
            name: 'swan-button',
            data: {
                gesture: '0',
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                buttonId: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

    it(`【boxjs.removeButton】${system}端异常调用，未传入buttonId`, done => {
        boxjs.ui.close({
            name: 'swan-button',
            data: {
                slaveId: '7',
                hide: 'true',
                viewId: 'myAr',
                parentId: '',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                }
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]buttonId is required.');
            done();
        });
    });
});