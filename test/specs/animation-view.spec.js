/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {boxjs} from '../../src/boxjs/index';
import $ from '../../src/utils/_core';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';


describe('API【boxjs.insertAnimView】测试', () => {
    it(`【boxjs.insertAnimView】${system}端正常调用`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: '',
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入gesture`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture is required.');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，gesture类型错误`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: [],
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入hide`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '0',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide is required.');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，hide类型错误`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '0',
                hide: false,
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入sanId`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '0',
                hide: 'true',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]sanId is required.');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，sanId类型错误`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '0',
                hide: 'false',
                sanId: {},
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]sanId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入viewId`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '0',
                hide: 'true',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入position`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
                slaveId: '7',
                viewId: 'myAnim',
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]position is required.');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入style`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
                slaveId: '7',
                viewId: 'myAnim',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]style is required.');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入loop`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]loop is required.');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入autoPlay`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                loop: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]autoPlay is required.');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入parentId`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入path`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]path is required.');
            done();
        });
    });

    it(`【boxjs.insertAnimView】${system}端异常调用，未传入action`, done => {
        boxjs.cover.insert({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]action is required.');
            done();
        });
    });





});

describe('API【boxjs.updateAnimView】测试', () => {
    it(`【boxjs.updateAnimView】${system}端正常调用`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: '',
            }
        }).then(res => {
            expect(res).to.be.a('object');
            expect(res).to.be.empty;
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入gesture`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture is required.');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，gesture类型错误`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: [],
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]gesture type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入hide`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '0',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide is required.');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，hide类型错误`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '0',
                hide: false,
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]hide type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入sanId`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '0',
                hide: 'true',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]sanId is required.');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，sanId类型错误`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '0',
                hide: 'false',
                sanId: {},
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]sanId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入viewId`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '0',
                hide: 'true',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入position`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
                slaveId: '7',
                viewId: 'myAnim',
                style: {
                    bgColor: '#00000000',
                    opacity: '1'
                },
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]position is required.');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入style`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
                slaveId: '7',
                viewId: 'myAnim',
                position: {
                    left: '0',
                    top: '0',
                    width: '100',
                    height: '150'
                },
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]style is required.');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入loop`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]loop is required.');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入autoPlay`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                loop: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]autoPlay is required.');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入parentId`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                action: 'stop'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入path`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                action: 'stop',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]path is required.');
            done();
        });
    });

    it(`【boxjs.updateAnimView】${system}端异常调用，未传入action`, done => {
        boxjs.cover.update({
            name: 'swan-animView',
            data: {
                gesture: '1',
                hide: 'false',
                sanId: '_cff47',
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
                loop: false,
                autoPlay: true,
                path: '/pages/animation-view/anim_one.json',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]action is required.');
            done();
        });
    });





});

describe('API【boxjs.removeAnimView】测试', () => {
    it(`【boxjs.removeAnimView】${system}端正常调用`, done => {
        boxjs.cover.remove({
            name: 'swan-animView',
            data: {
                sanId: '_cff47',
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

    it(`【boxjs.removeAnimView】${system}端异常调用， 未传入sanId`, done => {
        boxjs.cover.remove({
            name: 'swan-animView',
            data: {
                slaveId: '7',
                viewId: 'myAnim',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]sanId is required.');
            done();
        });
    });

    it(`【boxjs.removeAnimView】${system}端异常调用， 未传入slaveId`, done => {
        boxjs.cover.remove({
            name: 'swan-animView',
            data: {
                sanId: '_cff47',
                viewId: 'myAnim',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]slaveId is required.');
            done();
        });
    });

    it(`【boxjs.removeAnimView】${system}端异常调用， 未传入viewId`, done => {
        boxjs.cover.remove({
            name: 'swan-animView',
            data: {
                sanId: '_cff47',
                slaveId: '7',
                parentId: ''
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]viewId is required.');
            done();
        });
    });

    it(`【boxjs.removeAnimView】${system}端异常调用， 未传入parentId`, done => {
        boxjs.cover.remove({
            name: 'swan-animView',
            data: {
                sanId: '_cff47',
                slaveId: '7',
                viewId: 'myAnim'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]parentId is required.');
            done();
        });
    });

});