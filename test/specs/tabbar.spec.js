/**
 * @file spec/location
 * @author lijia30@baidu.com
 * @description  背景相关API接口
 */

import {swan} from '../../src/swan/index';
import $ from '../../src/utils/_core';

const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【setTabBarBadge】测试', () => {
    it(`【swan.setTabBarBadge】${system}端正常调用`, done => {
        swan.setTabBarBadge({
            index: 1,
            text: 'test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.setTabBarBadge】${system}端异常调用，未传入index `, done => {
        swan.setTabBarBadge({
            text: 'test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]index is required.');
                done();
            }
        });
    });

    it(`【swan.setTabBarBadge】${system}端异常调用, index类型错误 `, done => {
        swan.setTabBarBadge({
            index: true,
            text: 'test',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]index type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.setTabBarBadge】${system}端异常调用，未传入text `, done => {
        swan.setTabBarBadge({
            index: 1,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('setTabBarBadge:fail parameter error: text is required and should not be an empty string');
                done();
            }
        });
    });

    it(`【swan.setTabBarBadge】${system}端异常调用，text为空 `, done => {
        swan.setTabBarBadge({
            index: 1,
            text: '',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('setTabBarBadge:fail parameter error: text is required and should not be an empty string');
                done();
            }
        });
    });

    it(`【swan.setTabBarBadge】${system}端异常调用, text类型错误 `, done => {
        swan.setTabBarBadge({
            index: 1,
            text: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]text type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【removeTabBarBadge】测试', () => {
    it(`【swan.removeTabBarBadge】${system}端正常调用`, done => {
        swan.removeTabBarBadge({
            index: 1,
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.removeTabBarBadge】${system}端异常调用，未传入index `, done => {
        swan.removeTabBarBadge({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]index is required.');
                done();
            }
        });
    });

    it(`【swan.removeTabBarBadge】${system}端异常调用, index类型错误 `, done => {
        swan.removeTabBarBadge({
            index: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]index type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【showTabBarRedDot】测试', () => {
    it(`【swan.showTabBarRedDot】${system}端正常调用`, done => {
        swan.showTabBarRedDot({
            index: 1,
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.showTabBarRedDot】${system}端异常调用，未传入index `, done => {
        swan.showTabBarRedDot({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]index is required.');
                done();
            }
        });
    });

    it(`【swan.showTabBarRedDot】${system}端异常调用, index类型错误 `, done => {
        swan.showTabBarRedDot({
            index: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]index type error. must be "string"');
                done();
            }
        });
    });

});

describe('API【hideTabBarRedDot】测试', () => {
    it(`【swan.hideTabBarRedDot】${system}端正常调用`, done => {
        swan.hideTabBarRedDot({
            index: 1,
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.hideTabBarRedDot】${system}端异常调用，未传入index `, done => {
        swan.hideTabBarRedDot({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]index is required.');
                done();
            }
        });
    });

    it(`【swan.hideTabBarRedDot】${system}端异常调用, index类型错误 `, done => {
        swan.hideTabBarRedDot({
            index: true,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]index type error. must be "string"');
                done();
            }
        });
    });

});


describe('API【showTabBar】测试', () => {
    it(`【swan.showTabBar】${system}端正常调用`, done => {
        swan.showTabBar({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.showTabBar】${system}端异常调用, animation类型错误 `, done => {
        swan.showTabBar({
            animation: 1,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]animation type error. must be "boolean"');
                done();
            }
        });
    });

});

describe('API【hideTabBar】测试', () => {
    it(`【swan.hideTabBar】${system}端正常调用`, done => {
        swan.hideTabBar({
            animation: false,
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.hideTabBar】${system}端异常调用, animation类型错误 `, done => {
        swan.hideTabBar({
            animation: 1,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]animation type error. must be "boolean"');
                done();
            }
        });
    });

});


describe('API【setTabBarStyle】测试', () => {
    it(`【swan.setTabBarStyle】${system}端正常调用`, done => {
        swan.hideTabBar({
            color: '#111111',
            selectedColor: '#ffffff',
            backgroundColor: '#999999',
            borderStyle: 'white',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.setTabBarStyle】${system}端异常调用, color类型错误 `, done => {
        swan.setTabBarStyle({
            color: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]color type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.setTabBarStyle】${system}端异常调用, color类型错误 `, done => {
        swan.setTabBarStyle({
            color: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]color type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.setTabBarStyle】${system}端异常调用, selectedColor类型错误 `, done => {
        swan.setTabBarStyle({
            selectedColor: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]selectedColor type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.setTabBarStyle】${system}端异常调用, backgroundColor类型错误 `, done => {
        swan.setTabBarStyle({
            backgroundColor: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]backgroundColor type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.setTabBarStyle】${system}端异常调用, borderStyle类型错误 `, done => {
        swan.setTabBarStyle({
            borderStyle: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]borderStyle type error, must be oneOf ["black","white"]');
                done();
            }
        });
    });

    it(`【swan.setTabBarStyle】${system}端异常调用, borderStyle取值错误 `, done => {
        swan.setTabBarStyle({
            borderStyle: 'red',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]borderStyle type error, must be oneOf ["black","white"]');
                done();
            }
        });
    });

});

describe('API【setTabBarItem】测试', () => {
    it(`【swan.setTabBarItem】${system}端正常调用`, done => {
        swan.setTabBarItem({
            index: 0,
            text: 'test',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
                done();
            }
        });
    });

    it(`【swan.setTabBarItem】${system}端异常调用, 未传入index `, done => {
        swan.setTabBarItem({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]index is required.');
                done();
            }
        });
    });

    it(`【swan.setTabBarItem】${system}端异常调用, index类型错误 `, done => {
        swan.setTabBarItem({
            index: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]index type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.setTabBarItem】${system}端异常调用, text类型错误 `, done => {
        swan.setTabBarItem({
            index: 0,
            text: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]text type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.setTabBarItem】${system}端异常调用, iconPath类型错误 `, done => {
        swan.setTabBarItem({
            index: 0,
            iconPath: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]iconPath type error. must be "string"');
                done();
            }
        });
    });

    it(`【swan.setTabBarItem】${system}端异常调用, selectedIconPath类型错误 `, done => {
        swan.setTabBarItem({
            index: 0,
            selectedIconPath: [],
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]selectedIconPath type error. must be "string"');
                done();
            }
        });
    });
});


