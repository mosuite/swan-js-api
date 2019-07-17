/**
 * @file spec/file
 * @author shixinzhe
 * @description  inner
 */

import {
    swan
} from '../../src/swan/index';
import {
    normalMethod
} from '../utils/constant';
import schemeMap from '../utils/scheme-map';
import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

const noParamsCallback = scheme => {
    let schemeArr = scheme.split('?');
    let schemeStr = schemeArr[0];
    let schemeQuery = decodeURIComponent(schemeArr[1]);
    let callback = /callback=([a-z":,_A-Z0-9]+)/.exec(schemeQuery)[1];
    // window[callback]();
    window[callback](JSON.stringify(schemeMap[schemeStr].data));
};
const noParamsMethod = () => {
    window.Bdbox_aiapps_jsbridge = {
        dispatch: noParamsCallback
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: noParamsCallback
            }
        }
    };
};



describe('API【ttsManager】测试', () => {
    after(normalMethod)

    it(`【ttsManager】${system}端正常调用`, done => {
        const tts = swan.getTTSManager();
        expect(tts).to.be.a('object');
        expect(tts).to.have.all.keys('speak', 'pause', 'resume', 'stop',
            'onSpeak', 'onStop', 'onPause', 'onEnded', 'onError');
        done();
    });

    it(`【ttsManager】${system}端正常调用，speak方法`, done => {
        const tts = swan.getTTSManager();
        tts.speak({
            text: '这是一段tts测试文字',
            speed: 4,
            pitch: 4,
            speaker: 0,
            success: res => {
                done();
            }
        });
    });

    it(`【ttsManager】${system}端正常调用，speak方法不传参数text`, done => {
        const tts = swan.getTTSManager();
        tts.speak({
            speed: 4,
            pitch: 4,
            speaker: 0,
            fail: err => {
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]text is required.');
                done();
            }
        });
    });

    it(`【ttsManager】${system}端正常调用，pause方法`, done => {
        const tts = swan.getTTSManager();
        tts.pause();
        done();
    });

    it(`【ttsManager】${system}端正常调用，resume方法`, done => {
        const tts = swan.getTTSManager();
        tts.resume();
        done();
    });

    it(`【ttsManager】${system}端正常调用，stop方法`, done => {
        const tts = swan.getTTSManager();
        tts.stop();
        done();
    });

    it(`【ttsManager】${system}端正常调用，onSpeak方法`, done => {
        mockMethod(mockTTsManagerCallBack(0));
        const tts = swan.getTTSManager();
        tts.onSpeak(res => {
            done();
        });

        tts.speak({
            text: '这是一段tts测试文字'
        });
    });

    it(`【ttsManager】${system}端正常调用，onStop方法`, done => {
        mockMethod(mockTTsManagerCallBack(3));
        const tts = swan.getTTSManager();
        tts.onStop(res => {
            done();
        });

        tts.speak({
            text: '这是一段tts测试文字'
        });
    });

    it(`【ttsManager】${system}端正常调用，onPause方法`, done => {
        mockMethod(mockTTsManagerCallBack(5));
        const tts = swan.getTTSManager();
        tts.onPause(res => {
            done();
        });

        tts.speak({
            text: '这是一段tts测试文字'
        });
    });

    it(`【ttsManager】${system}端正常调用，onEnded方法`, done => {
        mockMethod(mockTTsManagerCallBack(2));
        const tts = swan.getTTSManager();
        tts.onEnded(res => {
            done();
        });

        tts.speak({
            text: '这是一段tts测试文字'
        });
    });

    it(`【ttsManager】${system}端正常调用，onError方法`, done => {
        mockMethod(mockTTsManagerCallBack(1));
        const tts = swan.getTTSManager();
        tts.onError(res => {
            done();
        });

        tts.speak({
            text: '这是一段tts测试文字'
        });
    });
});
describe('API【getPushSettingStateSync】测试', () => {
    afterEach(() => {
        normalMethod();
    });
    it(`【swan.getPushSettingStateSync】${system}端正常调用`, done => {
        noParamsMethod();
        swan.getPushSettingStateSync({
            success: res => {
                console.log(res);
                // expect(res).to.be.a('object');
                done();
            }
        });
    });

    it(`【swan.getPushSettingStateSync】${system}端正常调用，complete函数执行`, done => {
        noParamsMethod();
        swan.getPushSettingStateSync({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【getPrivateGetUserInfo】测试', () => {
    it(`【swan.boxjs.data.get({name: 'swan-PrivateGetUserInfo'】${system}端正常调用`, done => {
        boxjs.data.get({
        name: 'swan-privateGetUserInfo',
        data:{
            cb: 'cb'
        }}).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.data.get({name: 'swan-PrivateGetUserInfo'】${system}端正常调用, 缺少cb字段`, done => {
        boxjs.data.get({
            name: 'swan-privateGetUserInfo'
        }).then(res => {
            console.log(res);
            expect(res).to.be.a('object');
            done();
        });
    });
    it(`【swan.boxjs.data.get({name: 'swan-PrivateGetUserInfo'】${system}端正常调用, complete函数执行`, done => {
        boxjs.data.get({
            name: 'swan-privateGetUserInfo',
            data: {
                cb: 'cb'
            }}).then(() => {
            }).finally(() => {
                done();
            });
    });
    it(`【swan.boxjs.data.get({name: 'swan-PrivateGetUserInfo'】${system}端异常调用, cb类型异常`, done => {
        boxjs.data.get({
            name: 'swan-privateGetUserInfo',
            data: {
                cb: [1, 4]
            }}).catch(err => {
                expect(err).to.be.a('Error');
                expect(err.message).to.be.equal('[jsNative Argument Error]cb type error. must be "string"');
                done();
        });
    });
});
describe('API【thirdPartyLogin】测试', () => {
    it(`【swan.thirdPartyLogin】${system}端正常调用, type为qq`, done => {
        swan.thirdPartyLogin({
            type: 'qq',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.thirdPartyLogin】${system}端正常调用, type为weixin`, done => {
        swan.thirdPartyLogin({
            type: 'weixin',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.thirdPartyLogin】${system}端正常调用, type为weibo`, done => {
        swan.thirdPartyLogin({
            type: 'weibo',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.thirdPartyLogin】${system}端正常调用, type为sms`, done => {
        swan.thirdPartyLogin({
            type: 'sms',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.thirdPartyLogin】${system}端正常调用，complete函数执行`, done => {
        swan.thirdPartyLogin({
            type: 'qq',
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.thirdPartyLogin】${system}端异常调用, type参数不正常`, done => {
        swan.thirdPartyLogin({
            type: '111',
            fail: err => {
                console.log(err);
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]type type error, must be oneOf ["weibo","qq","weixin","sms"]');
                done();
            }
        });
    });
});
describe('API【getStoken】测试', () => {
    it(`【swan.getStoken】${system}端正常调用, type为qq`, done => {
        swan.getStoken({
            tpl: 'qq',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getStoken】${system}端正常调用，complete函数执行`, done => {
        swan.getStoken({
            tpl: 'qq',
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getStoken】${system}端异常调用, 缺少tpl`, done => {
        swan.getStoken({
            fail: err => {
                console.log(err);
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]tpl is required.');
                done();
            }
        });
    });
});
describe('API【guidePushSetting】测试', () => {
    it(`【swan.guidePushSetting】${system}端正常调用`, done => {
        swan.guidePushSetting({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.guidePushSetting】${system}端正常调用，complete函数执行`, done => {
        swan.guidePushSetting({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【getCommonSysInfo】测试', () => {
    it(`【swan.getCommonSysInfo】${system}端正常调用`, done => {
        swan.getCommonSysInfo({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                expect(res).to.have.all.keys('cuid', 'baidu_id', 'zid', 'sid', 'uid', 'imei');
                done();
            }
        });
    });
    it(`【swan.getCommonSysInfo】${system}端正常调用，complete函数执行`, done => {
        swan.getCommonSysInfo({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【openAdWebPage】测试', () => {
    it(`【swan.openAdWebPage】${system}端正常调用`, done => {
        swan.openAdWebPage({
            url: 'https://www.baidu.com/',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.openAdWebPage】${system}端正常调用，complete函数执行`, done => {
        swan.openAdWebPage({
            url: 'https://www.baidu.com/',
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【register】测试', () => {
    it(`【swan.register】${system}端正常调用,`, done => {
        swan.register({
            "action": "com.baidu.channel.swan.imsdk",
            "data": {
                "castId": "1556825486",
                "castUrl": "http://liveshowstatic.baidu.com/v1/liveshowstatic/live_1556825486.m3u8?authorization=bce-auth-v1/3a9861ff96dd472f875791b14cb0b6a1/2019-01-22T07:42:14Z/604800/host/689ac54706b2626405ea581e37272567e9129beefc032347826bf4f0e2d25b4f"
            },
            success(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.register】${system}端正常调用, complete正常执行`, done => {
        swan.register({
            "action": "com.baidu.channel.swan.imsdk",
            "data": {
                "castId": "1556825487",
                "appid": "405384",
                "myuk": "",
                "begin": "0",
                "end": "9007199254740991",
                "count": "-50"
            },
            success: () => {},
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.register】${system}端异常调用, 缺少参数action`, done => {
        swan.register({
            "data": {
                "castId": "1556825486",
                "castUrl": "http://liveshowstatic.baidu.com/v1/liveshowstatic/live_1556825486.m3u8?authorization=bce-auth-v1/3a9861ff96dd472f875791b14cb0b6a1/2019-01-22T07:42:14Z/604800/host/689ac54706b2626405ea581e37272567e9129beefc032347826bf4f0e2d25b4f"
            },
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.register】${system}端异常调用, 缺少参数data`, done => {
        swan.register({
            "action": "com.baidu.channel.swan.imsdk",
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【unRegister】测试', () => {
    it(`【swan.unRegister】${system}端正常调用,`, done => {
        swan.unRegister({
            "action": "com.baidu.channel.swan.imsdk",
            "data": {
                "castId": "1556825486",
                "castUrl": "http://liveshowstatic.baidu.com/v1/liveshowstatic/live_1556825486.m3u8?authorization=bce-auth-v1/3a9861ff96dd472f875791b14cb0b6a1/2019-01-22T07:42:14Z/604800/host/689ac54706b2626405ea581e37272567e9129beefc032347826bf4f0e2d25b4f"
            },
            success(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.unRegister】${system}端正常调用, complete正常执行`, done => {
        swan.unRegister({
            "action": "com.baidu.channel.swan.imsdk",
            "data": {
                "castId": "1556825487",
                "appid": "405384",
                "myuk": "",
                "begin": "0",
                "end": "9007199254740991",
                "count": "-50"
            },
            success: () => {},
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.unRegister】${system}端异常调用, 缺少参数action`, done => {
        swan.unRegister({
            "data": {
                "castId": "1556825486",
                "castUrl": "http://liveshowstatic.baidu.com/v1/liveshowstatic/live_1556825486.m3u8?authorization=bce-auth-v1/3a9861ff96dd472f875791b14cb0b6a1/2019-01-22T07:42:14Z/604800/host/689ac54706b2626405ea581e37272567e9129beefc032347826bf4f0e2d25b4f"
            },
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.unRegister】${system}端异常调用, 缺少参数data`, done => {
        swan.unRegister({
            "action": "com.baidu.channel.swan.imsdk",
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【sendBroadcast】测试', () => {
    it(`【swan.sendBroadcast】${system}端正常调用,`, done => {
        swan.sendBroadcast({
            "action": "com.baidu.channel.swan.imsdk",
            "data": {
                "castId": "1556825486",
                msgObj: {
                    room_id: 1234,
                    type: 100,
                    uid: 12345678,
                    name: 'Tom',
                    at_uid: 1357924680,
                    at_name: 'Jerry',
                    content: '主播你好'
                }
            },
            success(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.sendBroadcast】${system}端正常调用, complete正常执行`, done => {
        swan.sendBroadcast({
            "action": "com.baidu.channel.swan.imsdk",
            "data": {
                "castId": "1556825487",
                "appid": "405384",
                "myuk": "",
                "begin": "0",
                "end": "9007199254740991",
                "count": "-50"
            },
            success: () => {},
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.sendBroadcast】${system}端异常调用, 缺少参数action`, done => {
        swan.sendBroadcast({
            "data": {
                "castId": "1556825486",
                msgObj: {
                    room_id: 1234,
                    type: 100,
                    uid: 12345678,
                    name: 'Tom',
                    at_uid: 1357924680,
                    at_name: 'Jerry',
                    content: '主播你好'
                }
            },
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.sendBroadcast】${system}端异常调用, 缺少参数data`, done => {
        swan.sendBroadcast({
            "action": "com.baidu.channel.swan.imsdk",
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【follow】测试', () => {
    it(`【swan.follow】${system}端正常调用,`, done => {
        swan.follow({
            actionType: '1',
            type: 'media',
            thirdID: 'xxx',
            source: 'xxx',
            sfrom: 'sbox',
            store: 'uid_cuid',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.follow】${system}端正常调用,缺少参数sfrom,store`, done => {
        swan.follow({
            actionType: '1',
            type: 'media',
            thirdID: 'xxx',
            source: 'xxx',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        })
    });
    it(`【swan.follow】${system}端正常调用, complete正常执行`, done => {
        swan.follow({
            actionType: '1',
            type: 'media',
            thirdID: 'xxx',
            source: 'xxx',
            complete: res => {
                console.log(res);
                done();
            }
        })
    });
    it(`【swan.follow】${system}端异常调用, 缺少参数actionType`, done => {
        swan.follow({
            type: 'media',
            thirdID: 'xxx',
            source: 'xxx',
            fail: res => {
                console.log(res);
                done();
            }
        })
    });
    it(`【swan.follow】${system}端异常调用, 缺少参数type`, done => {
        swan.follow({
            actionType: '1',
            thirdID: 'xxx',
            source: 'xxx',
            fail: res => {
                console.log(res);
                done();
            }
        })
    });
    it(`【swan.follow】${system}端异常调用, 缺少参数thirdID`, done => {
        swan.follow({
            actionType: '1',
            type: 'media',
            source: 'xxx',
            fail: res => {
                console.log(res);
                done();
            }
        })
    });
        it(`【swan.follow】${system}端正常调用, 缺少参数source`, done => {
        swan.follow({
            actionType: '1',
            type: 'media',
            thirdID: 'xxx',
            fail: res => {
                console.log(res);
                done();
            }
        })
    });
});
describe('API【swan.getFollowStatus】测试', () => {
    it(`【swan.getFollowStatus】${system}端正常调用,`, done => {
        swan.getFollowStatus({
            type: 'media',
            thirdID: 'xxx',
            source: 'xxx',
            sfrom: 'sbox',
            store: 'uid_cuid',
            success: function(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getFollowStatus】${system}端正常调用,缺少参数sfrom，store`, done => {
        swan.getFollowStatus({
            type: 'media',
            thirdID: 'xxx',
            source: 'xxx',
            success: function(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getFollowStatus】${system}端正常调用, complete正常执行`, done => {
        swan.getFollowStatus({
            type: 'media',
            thirdID: 'xxx',
            source: 'xxx',
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        })
    });
    it(`【swan.getFollowStatus】${system}端异常调用, 缺少参数type`, done => {
        swan.getFollowStatus({
            thirdID: 'xxx',
            source: 'xxx',
            fail: function(res) {
                expect(res).to.be.a('object');
                done();
            }
        })
    });
    it(`【swan.getFollowStatus】${system}端异常调用, 缺少参数thirdID`, done => {
         swan.getFollowStatus({
            type: 'media',
            source: 'xxx',
            fail: function(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        })
    });
    it(`【swan.getFollowStatus】${system}端异常调用, 缺少参数source`, done => {
       swan.getFollowStatus({
            type: 'media',
            thirdID: 'xxx',
            fail: function(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【getBDUSS】测试', () => {
    it(`【swan.getBDUSS】${system}端正常调用`, done => {
        swan.getBDUSS({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getBDUSS】${system}端正常调用，complete函数执行`, done => {
        swan.getBDUSS({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【openBdboxWebview】测试', () => {
    it(`【swan.openBdboxWebview】${system}端正常调用,`, done => {
        swan.openBdboxWebview({
            module: 'browser',
            action: 'search',
            parameters: {
                query: '百度'
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.openBdboxWebview】${system}端正常调用,module为wallet`, done => {
        swan.openBdboxWebview({
            module: 'wallet',
            action: 'search',
            parameters: {
                query: '百度'
            },
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.openBdboxWebview】${system}端正常调用,缺少参数action，parameters`, done => {
        swan.openBdboxWebview({
            module: 'browser',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.openBdboxWebview】${system}端正常调用, complete正常执行`, done => {
         swan.openBdboxWebview({
            module: 'browser',
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.openBdboxWebview】${system}端异常调用, 缺少参数module`, done => {
         swan.openBdboxWebview({
            fail: function(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【launchCloudGame】测试', () => {
    it(`【swan.launchCloudGame】${system}, 端正常调用`, done => {
        swan.launchCloudGame({
            scheme: 'scheme',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            },
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.launchCloudGame】${system}端正常调用，complete函数执行`, done => {
        swan.launchCloudGame({
            scheme: 'scheme',
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【getPayStatus】测试', () => {
    it(`【swan.getPayStatus】${system}端正常调用`, done => {
        swan.getPayStatus({
            reserve: 'reserve',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getPayStatus】${system}端正常调用，complete函数执行`, done => {
        swan.getPayStatus({
            reserve:'reserve',
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【addCard】测试', () => {
    it(`【swan.addCard】${system}端正常调用`, done => {
        swan.addCard({
            reserve: 'reserve',
            cardType: 'cardType',
            issuerId: 'issuerId',
            cardInfo: 'cardInfo',
            cardNum: '11111',
            phoneNum: '1111111',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.addCard】${system}端正常调用,缺少reserve, cardType, issuerId, cardInfo, reserve`, done => {
        swan.addCard({
            cardNum: '11111',
            phoneNum: '1111111',
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.addCard】${system}端异常调用,缺少cardNum`, done => {
        swan.addCard({
            phoneNum: '1111111',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]cardNum is required.');
                done();
            }
        });
    });
    it(`【swan.addCard】${system}端异常调用,缺少phoneNum`, done => {
        swan.addCard({
            cardNum: '11111',
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal('[jsNative Argument Error]phoneNum is required.');
                done();
            }
        });
    });
    it(`【swan.addCard】${system}端正常调用，complete函数执行`, done => {
        swan.addCard({
            cardNum: '11111',
            phoneNum: '1111111',
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【getCardList】测试', () => {
    it(`【swan.getCardList】${system}端正常调用`, done => {
        swan.getCardList({
            reserve: 'reserve',
            ext: {},
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getCardList】${system}端正常调用,缺少reserve, ext`, done => {
        swan.getCardList({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.getCardList】${system}端正常调用，complete函数执行`, done => {
        swan.getCardList({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});
describe('API【launchPay】测试', () => {
    it(`【swan.launchPay】${system}端正常调用`, done => {
        swan.launchPay({
            reserve: 'reserve',
            ext: {},
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.launchPay】${system}端正常调用,缺少reserve, ext`, done => {
        swan.launchPay({
            success: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.launchPay】${system}端正常调用，complete函数执行`, done => {
        swan.launchPay({
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
});

describe('API【pullMessage】测试', () => {
    it(`【swan.pullMessage】${system}端正常调用,`, done => {
        swan.pullMessage({
            "action": "com.baidu.channel.swan.imsdk",
            "data": {
                "castId": "1556825487",
                "appid": "405384",
                "myuk": "",
                "begin": "0",
                "end": "9007199254740991",
                "count": "-50"
            },
            success(res) {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.pullMessage】${system}端正常调用, complete正常执行`, done => {
        swan.pullMessage({
            "action": "com.baidu.channel.swan.imsdk",
            "data": {
                "castId": "1556825487",
                "appid": "405384",
                "myuk": "",
                "begin": "0",
                "end": "9007199254740991",
                "count": "-50"
            },
            success: () => {},
            complete: res => {
                console.log(res);
                expect(res).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.pullMessage】${system}端异常调用, 缺少参数action`, done => {
        swan.pullMessage({
            "data": {
                "castId": "1556825487",
                "appid": "405384",
                "myuk": "",
                "begin": "0",
                "end": "9007199254740991",
                "count": "-50"
            },
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
    it(`【swan.pullMessage】${system}端异常调用, 缺少参数data`, done => {
        swan.pullMessage({
            "action": "com.baidu.channel.swan.imsdk",
            fail: err => {
                console.log(err);
                expect(err).to.be.a('object');
                done();
            }
        });
    });
});