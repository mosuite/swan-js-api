/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {boxjs} from '../../src/boxjs/index';
import $ from '../../src/utils/_core';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';


describe('API【boxjs.insertCoverView】测试', () => {
    it(`【boxjs.insertCoverView】${system}端正常调用`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，未传入gesture`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture is required.');
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，gesture类型错误`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: true,
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，未传入hide`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide is required.');
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，hide类型错误`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: false,
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，未传入slaveId`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，slaveId类型错误`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: [],
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，未传入viewId`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，未传入position`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]position is required.');
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，未传入style`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]style is required.');
            done();
        });
    });


    it(`【boxjs.insertCoverView】${system}端异常调用，未传入parentId`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，未传入text`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]text is required.');
            done();
        });
    });

    it(`【boxjs.insertCoverView】${system}端异常调用，未传入scrollTop`, done => {
        boxjs.cover.insert({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]scrollTop is required.');
            done();
        });
    });





});

describe('API【boxjs.updateCoverView】测试', () => {
    it(`【boxjs.updateCoverView】${system}端正常调用`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，未传入gesture`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture is required.');
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，gesture类型错误`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: true,
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，未传入hide`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide is required.');
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，hide类型错误`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: false,
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，未传入slaveId`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，slaveId类型错误`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: [],
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，未传入viewId`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
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
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，未传入position`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]position is required.');
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，未传入style`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                parentId: '',
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]style is required.');
            done();
        });
    });


    it(`【boxjs.updateCoverView】${system}端异常调用，未传入parentId`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                text: 'test',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，未传入text`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                scrollTop: '10'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]text is required.');
            done();
        });
    });

    it(`【boxjs.updateCoverView】${system}端异常调用，未传入scrollTop`, done => {
        boxjs.cover.update({
            name: 'swan-coverView',
            data: {
                gesture: '1',
                hide: 'false',
                slaveId: '7',
                viewId: 'myAnim',
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
                parentId: '',
                text: 'test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]scrollTop is required.');
            done();
        });
    });





});

describe('API【boxjs.removeCoverView】测试', () => {
    it(`【boxjs.removeCoverView】${system}端正常调用`, done => {
        boxjs.cover.remove({
            name: 'swan-coverView',
            data: {
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


    it(`【boxjs.removeCoverView】${system}端异常调用， 未传入slaveId`, done => {
        boxjs.cover.remove({
            name: 'swan-coverView',
            data: {
                viewId: 'myAnim',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.removeCoverView】${system}端异常调用， 未传入viewId`, done => {
        boxjs.cover.remove({
            name: 'swan-coverView',
            data: {
                slaveId: '7',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.removeCoverView】${system}端异常调用， 未传入parentId`, done => {
        boxjs.cover.remove({
            name: 'swan-coverView',
            data: {
                slaveId: '7',
                viewId: 'myAnim'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

});