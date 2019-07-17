/**
 * @file spec/request
 * @author lijia30@baidu.com
 * @description  request API接口
 */
import {swan} from '../../src/swan/index';
const expect = require('chai').expect;
import $ from '../../src/utils/_core';
import {connectSocket} from '../../src/swan/api/network/web-socket';
import {getSchemeParmas} from '../utils/mockMethod';
import schemeMap from '../utils/scheme-map';
import {normalMethod} from '../utils/constant';


const system = $.isIOS ? 'ios' : 'android';


const onOpenMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].data));
    setTimeout(() => {
        window[params.cb.onOpen](
            JSON.stringify(schemeMap[schemeStr].onOpenData));
            window.onClose = params.cb.onClose;
            window.onError = params.cb.onError;
            window.onMessage = params.cb.onMessage;
    }, 50);
};


const noDataMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].noConnectData));
}



const onOpenMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: onOpenMockMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: onOpenMockMethod
            }
        }
    };
};

const onCloseMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].data));
    setTimeout(() => {
        let func = window.onClose;
        window[func](JSON.stringify(schemeMap[schemeStr].onCloseData));
    }, 50);
};

const onMessageMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].onMessageData));
    setTimeout(() => {
        let func = window.onMessage;
        window[func](JSON.stringify(schemeMap[schemeStr].onMessageData));
    }, 50);
};

const onErrorMockMethod = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    window[callback](JSON.stringify(schemeMap[schemeStr].data));
    setTimeout(() => {
        let func = window.onError;
        window[func](JSON.stringify(schemeMap[schemeStr].onErrorData));
    }, 50);
};

const onCloseMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: onCloseMockMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: onCloseMockMethod
            }
        }
    };
};

const onMessageMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: onMessageMockMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: onMessageMockMethod
            }
        }
    };
};

const onErrorMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch: onErrorMockMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: onErrorMockMethod
            }
        }
    };
};

const noDataMethod = () => {
    window.Bdbox_android_jsbridge = {
        dispatch:  noDataMockMethod
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: noDataMockMethod
            }
        }
    };
}



describe('API【websocket】测试', () => {
    afterEach(() => {
        normalMethod();
    })
    it(`【swan.connectSocket】${system}端正常调用， 成功建立webSocket链接, 相关方法正常触发`, done => {
        onOpenMethod();
        let connection = swan.connectSocket({
            url: 'wss://echo.websocket.org',
            success: res => {
                expect(res).to.be.a('object');
                expect(res).has.key('socketTaskId');
                expect(connection).to.be.a('object');
                expect(connection.socketTaskId).to.be.equal(res.socketTaskId);
                expect(connection.hasOwnProperty('__handlers')).to.be.ok;
                expect(connection.hasOwnProperty('CONNECTING')).to.be.ok;
                expect(connection.hasOwnProperty('OPEN')).to.be.ok;
                expect(connection.hasOwnProperty('CLOSING')).to.be.ok;
                expect(connection.hasOwnProperty('CLOSED')).to.be.ok;
                expect(connection.hasOwnProperty('readyState')).to.be.ok;
                expect(connection.send).to.be.a('function');
                expect(connection.close).to.be.a('function');
            }
        });
        swan.onSocketClose(res => {
            expect(res).to.be.equal(undefined);
            done();
        })
        swan.onSocketOpen(res => {
            console.log('on Open')
            onMessageMethod();
            swan.sendSocketMessage({
                data: new ArrayBuffer()
            });
            swan.onSocketMessage(res => {
                expect(res).to.be.a('object');
            });
            onErrorMethod();
            swan.sendSocketMessage({
                data: 'test'
            })
            swan.onSocketError(res => {
                console.log(11111,res);
                expect(res).to.be.a('object');
            })
            onCloseMethod();
            swan.closeSocket();

        })

    });

    it(`【swan.connectSocket】${system}端异常调用，未传入url`, done => {
        swan.connectSocket({
            fail: err => {
                expect(err.message).to.be.equal('[jsNative Argument Error]url is required.')
                done();
            }
        })
    });


    it('connectWebsocket function 应该返回一个SocketTask, 如果端能力调用成功，但链接失败，SocketTask状态正确',  done => {
        noDataMethod();
        let url = 'wss://echo.test.websocket.org';
        let connection = connectSocket({
            url,
            fail: err => {
                expect(connection.readyState === connection.CLOSED);
                done();
            }
        });
    });

    it('socketTask readyState不为Open时，send方法调用失败', done => {
        noDataMethod();
        let url = 'wss://echo.test.websocket.org';
        let connection = connectSocket({
            url,
            fail: err => {
                done();
            }
        });
        connection.send({
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errMsg).to.be.equal('SocketTask.readyState is not OPEN');
                done();
            }
        });
    });
});

