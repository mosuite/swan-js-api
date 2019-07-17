/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';
import {mockMasterManager} from '../utils/mockMethod';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';


// describe('API【setBackgroundTextStyle】测试', () => {
//     it(`【swan.setBackgroundColor】${system}端异常调用，backgroundColor类型错误 `, done => {
//         swan.setBackgroundColor({
//             backgroundColor: {},
//             fail: err => {
//                 expect(err).to.be.a('object');
//                 expect(err.errCode).to.be.equal(904);
//                 expect(err.errMsg).to.be.equal('[jsNative Argument Error]backgroundColor type error. must be "string"');
//                 done();
//             }
//         });
//     });
//
//     it(`【swan.setBackgroundColor】${system}端异常调用，backgroundColorTop类型错误 `, done => {
//         swan.setBackgroundColor({
//             backgroundColorTop: {},
//             fail: err => {
//                 expect(err).to.be.a('object');
//                 expect(err.errCode).to.be.equal(904);
//                 expect(err.errMsg).to.be.equal('[jsNative Argument Error]backgroundColorTop type error. must be "string"');
//                 done();
//             }
//         });
//     });
//
//     it(`【swan.setBackgroundColor】${system}端异常调用，backgroundColorBottom类型错误 `, done => {
//         swan.setBackgroundColor({
//             backgroundColorBottom: {},
//             fail: err => {
//                 expect(err).to.be.a('object');
//                 expect(err.errCode).to.be.equal(904);
//                 expect(err.errMsg).to.be.equal('[jsNative Argument Error]backgroundColorBottom type error. must be "string"');
//                 done();
//             }
//         });
//     });
//
//     it(`【swan.setBackgroundTextStyle】${system}端正常调用`, done => {
//         swan.setBackgroundTextStyle({
//             textStyle: 'light',
//             success: res => {
//                 expect(res).to.be.a('object');
//                 expect(res).to.be.empty;
//                 done();
//             }
//         });
//     });
//
//     it(`【swan.setBackgroundTextStyle】${system}端异常调用，textStyle取值错误 `, done => {
//         swan.setBackgroundTextStyle({
//             textStyle: '',
//             fail: err => {
//                 expect(err).to.be.a('object');
//                 expect(err.errCode).to.be.equal(904);
//                 expect(err.errMsg).to.be.equal('setBackgroundTextStyle:fail parameter error: invalid textStyle ""');
//                 done();
//             }
//         });
//     });
//
// });

describe('API【showToast】测试', () => {
    it(`【swan.showToast】${system}端正常调用`, done => {
        mockMasterManager();
        swan.showToast({
            title: '我是标题',
            icon: 'loading',
            duration: 1000,
            mask: true,
            image: 'https://test.unit.test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.showToast】${system}端异常调用，未传入title `, done => {
        swan.showToast({
            icon: 'loading',
            duration: 1000,
            mask: true,
            image: 'https://test.unit.test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('showToast:fail parameter error: title is required');
                done();
            }
        });
    });

    it(`【swan.showToast】${system}端异常调用，title为空 `, done => {
        swan.showToast({
            title: '',
            icon: 'loading',
            duration: 1000,
            mask: true,
            image: 'https://test.unit.test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('showToast:fail parameter error: title is required');
                done();
            }
        });
    });

    it(`【swan.showToast】${system}端异常调用，icon类型错误 `, done => {
        swan.showToast({
            title: 'test',
            icon: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]icon type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.showToast】${system}端异常调用，mask类型错误 `, done => {
        swan.showToast({
            title: 'test',
            icon: '3',
            mask: 'true',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]mask type error. must be "boolean"');
                done();
            }
        });
    });
});

describe('API【hideToast】测试', () => {
    it(`【swan.hideToast】${system}端正常调用`, done => {
        console.log('test hidetoast:::', swan.hideToast);
        swan.hideToast({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });
});

describe('API【showLoading】测试', () => {
    it(`【swan.showLoading】${system}端正常调用`, done => {
        swan.showLoading({
            title: '我是标题',
            mask: true,
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.showLoading】${system}端异常调用，未传入title `, done => {
        swan.showLoading({
            mask: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('showLoading:fail parameter error: title is required');
                done();
            }
        });
    });

    it(`【swan.showLoading】${system}端异常调用，title为空 `, done => {
        swan.showLoading({
            title: '',
            mask: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('showLoading:fail parameter error: title is required');
                done();
            }
        });
    });


    it(`【swan.showLoading】${system}端异常调用，mask类型错误 `, done => {
        swan.showLoading({
            title: 'test',
            mask: 'true',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]mask type error. must be "boolean"');
                done();
            }
        });
    });
});

describe('API【hideLoading】测试', () => {
    it(`【swan.hideLoading】${system}端正常调用`, done => {
        swan.hideLoading({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });
});

describe('API【showModal】测试', () => {
    it(`【swan.showModal】${system}端正常调用`, done => {
        swan.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            cancelColor: '#999999',
            confirmColor: '#0099cc',
            success: res => {
                expect(res).to.be.a('object');
                expect(res.cancel).to.be.true;
                done();
            }
        });
    });

    it(`【swan.showModal】${system}端异常调用，title类型错误`, done => {
        swan.showModal({
            title: ['提示'],
            content: '这是一个模态弹窗',
            cancelColor: '#999999',
            confirmColor: '#0099cc',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]title type error. must be "string"');
                done();
            }
        });
    });
    it(`【swan.showModal】${system}端异常调用，content类型错误`, done => {
        swan.showModal({
            title: '提示',
            content: {aaa: '这是一个模态弹窗'},
            cancelColor: '#999999',
            confirmColor: '#0099cc',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]content type error. must be "string"');
                done();
            }
        });
    });
    it(`【swan.showModal】${system}端异常调用，confirmText类型错误`, done => {
        swan.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            confirmText: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('showModal:fail parameter error: confirmText cancelText should be string');
                done();
            }
        });
    });

    it(`【swan.showModal】${system}端异常调用，cancelText类型错误`, done => {
        swan.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            cancelText: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('showModal:fail parameter error: confirmText cancelText should be string');
                done();
            }
        });
    });

    it(`【swan.showModal】${system}端异常调用，cancelText长度过长`, done => {
        swan.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            cancelText: '这是一个模态弹窗',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('showModal:fail parameter error: cancelText length should not be larger than 4 Chinese characters');
                done();
            }
        });
    });

    it(`【swan.showModal】${system}端异常调用，confirmText长度过长`, done => {
        swan.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            confirmText: '这是一个模态弹窗',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('showModal:fail parameter error: confirmText length should not be larger than 4 Chinese characters');
                done();
            }
        });
    });

});

describe('API【showActionSheet】测试', () => {
    it(`【swan.showActionSheet】${system}端正常调用`, done => {
        swan.showActionSheet({
            itemList: ['同意', '一般', '不同意'],
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.keys('tapIndex');
                done();
            }
        });
    });

    it(`【swan.showActionSheet】${system}端异常调用， itemList类型错误`, done => {
        swan.showActionSheet({
            itemList: '同意',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]itemList type error. must be "Array"');
                done();
            }
        });
    });

    it(`【swan.showActionSheet】${system}端异常调用， itemList长度过长`, done => {
        swan.showActionSheet({
            itemList: [1, 2, 3, 4, 5, 6, 7],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('showActionSheet:fail parameter error: itemList should not be larger than 6');
                done();
            }
        });
    });
});


describe('API【showFavoriteGuide】测试', () => {
    it(`【swan.showFavoriteGuide】${system}端正常调用`, done => {
        swan.showFavoriteGuide({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.have.keys('action');
                done();
            }
        });
    });

    it(`【swan.showFavoriteGuide】${system}端异常调用， type类型错误`, done => {
        swan.showFavoriteGuide({
            type: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]type type error, must be oneOf ["bar","bar-autohide","tip"]');
                done();
            }
        });
    });

    it(`【swan.showFavoriteGuide】${system}端异常调用， content类型错误`, done => {
        swan.showFavoriteGuide({
            content: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]content type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.showFavoriteGuide】${system}端异常调用， type取值错误`, done => {
        swan.showFavoriteGuide({
            type: 'test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]type type error, must be oneOf ["bar","bar-autohide","tip"]');
                done();
            }
        });
    });
});


describe('API【showOpenAppGuide】测试', () => {
    it(`【swan.showOpenAppGuide】${system}端正常调用`, done => {
        swan.showOpenAppGuide({
            name: 'test',
            scheme: 'test://',
            downloadUrl: 'test',
            style: {},
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.showOpenAppGuide】${system}端异常调用， 参数name类型错误`, done => {
        swan.showOpenAppGuide({
            name: {},
            scheme: 'test://',
            downloadUrl: 'test',
            style: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]name type error. must be "string"');
                done();
            }
        });
    });
    it(`【swan.showOpenAppGuide】${system}端异常调用， 参数style类型错误`, done => {
        swan.showOpenAppGuide({
            name: 'test',
            scheme: 'test://',
            downloadUrl: 'test',
            style: 'aaaaa',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]style type error. must be "Object"');
                done();
            }
        });
    });

    it(`【swan.showOpenAppGuide】${system}端异常调用， 参数scheme类型错误`, done => {
        swan.showOpenAppGuide({
            scheme: [],
            downloadUrl: 'test',
            style: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]scheme type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.showOpenAppGuide】${system}端异常调用， 参数downloadUrl类型错误`, done => {
        swan.showOpenAppGuide({
            scheme: 'aaaa',
            downloadUrl: true,
            style: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]downloadUrl type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.showOpenAppGuide】${system}端异常调用， 未传入scheme`, done => {
        swan.showOpenAppGuide({
            downloadUrl: true,
            style: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]scheme is required.');
                done();
            }
        });
    });
    it(`【swan.showOpenAppGuide】${system}端异常调用， 未传入downloadUrl`, done => {
        swan.showOpenAppGuide({
            scheme: 'test://',
            style: {},
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]downloadUrl is required.');
                done();
            }
        });
    });

});

describe('API【hideOpenAppGuide】测试', () => {
    it(`【swan.hideOpenAppGuide】${system}端正常调用`, done => {
        swan.hideOpenAppGuide({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });
});

describe('API【addFavor】测试', () => {
    it(`【swan.addFavor】${system}端正常调用`, done => {
        swan.addFavor({
            appid: 'test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.addFavor】${system}端异常调用， 未传入appid`, done => {
        swan.addFavor({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]appid is required.');
                done();
            }
        });
    });
    it(`【swan.addFavor】${system}端异常调用， appid类型错误`, done => {
        swan.addFavor({
            appid: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]appid type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【deleteFavor】测试', () => {
    it(`【swan.deleteFavor】${system}端正常调用`, done => {
        swan.deleteFavor({
            appid: 'test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.deleteFavor】${system}端异常调用， 未传入appid`, done => {
        swan.deleteFavor({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]appid is required.');
                done();
            }
        });
    });

    it(`【swan.deleteFavor】${system}端异常调用， appid类型错误`, done => {
        swan.deleteFavor({
            appid: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]appid type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【getFavor】测试', () => {
    it(`【swan.getFavor】${system}端正常调用`, done => {
        swan.getFavor({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

});

describe('API【checkFavor】测试', () => {
    it(`【swan.checkFavor】${system}端正常调用`, done => {
        swan.checkFavor({
            appid: 'test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.checkFavor】${system}端异常调用， 未传入appid`, done => {
        swan.checkFavor({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]appid is required.');
                done();
            }
        });
    });

    it(`【swan.checkFavor】${system}端异常调用， appid类型错误`, done => {
        swan.checkFavor({
            appid: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]appid type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【setTopFavor】测试', () => {
    it(`【swan.setTopFavor】${system}端正常调用`, done => {
        swan.setTopFavor({
            appid: 'test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.setTopFavor】${system}端异常调用， 未传入appid`, done => {
        swan.setTopFavor({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]appid is required.');
                done();
            }
        });
    });

    it(`【swan.setTopFavor】${system}端异常调用， appid类型错误`, done => {
        swan.setTopFavor({
            appid: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]appid type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【deleteHistory】测试', () => {
    it(`【swan.deleteHistory】${system}端正常调用`, done => {
        swan.deleteHistory({
            appid: 'test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });
    it(`【swan.deleteHistory】${system}端异常调用， appid类型错误`, done => {
        swan.deleteHistory({
            appid: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.equal(904);
                expect(err.errMsg).to.equal('[jsNative Argument Error]appid type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【getHistory】测试', () => {
    it(`【swan.getHistory】${system}端正常调用`, done => {
        swan.getHistory({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

});
