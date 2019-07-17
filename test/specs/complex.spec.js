/**
 * @file spec/complex
 * @author bailonggang
 * @description  boxjs/complex单测
 */

import $ from '../../src/utils/_core';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';
import {createAdAppInstallManager, getAppInfo} from '../../src/boxjs/complex';
import {events} from '../../src/utils/event';
import {mockMasterManager, getSchemeParmas} from '../utils/mockMethod';
import {normalMethod} from '../utils/constant';
import {swan} from '../../src/swan/index';
import schemeMap from '../utils/scheme-map';

const mockMethodCallBack = scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    const res = schemeMap[schemeStr]

    if (params.onProgressUpdate) {
        window[params.onProgressUpdate](JSON.stringify(res.onProgressUpdate));
    }

    if (params) {
        window[callback](JSON.stringify(res.data));
        if (params.cb) {
            window[params.cb](JSON.stringify(res.data));
        }
    } 
};

const mockTTsManagerCallBack = status => scheme => {
    const {params, schemeStr, callback} = getSchemeParmas(scheme);
    const res = schemeMap[schemeStr]

    if (params) {
        window[callback](JSON.stringify(res.data));
        if (params.cb) {
            window[params.cb](JSON.stringify(res[status]));
        }
    } 
}

const mockMethod = mockFn => {
    window.Bdbox_android_jsbridge = {
        dispatch: mockFn
    };
    window.webkit = {
        messageHandlers: {
            bridge: {
                postMessage: mockFn
            }
        }
    };
};


describe('API【createAdAppInstallManager】测试', () => {
    after(normalMethod);

    it(`【createAdAppInstallManager】${system}端正常调用`, done => {
        const adApp = createAdAppInstallManager({});
        expect(adApp).to.be.a('object');
        done();
    });

    it(`【createAdAppInstallManager】${system}端正常调用，start方法`, done => {
        const adApp = createAdAppInstallManager({});
        adApp.start({
            success: res => {
                done();
            }
        });
    });

    it(`【createAdAppInstallManager】${system}端正常调用，pause方法`, done => {
        const adApp = createAdAppInstallManager({});
        adApp.pause({
            success: res => {
                done();
            }
        });
    });

    it(`【createAdAppInstallManager】${system}端正常调用，resume方法`, done => {
        const adApp = createAdAppInstallManager({});
        adApp.resume({
            success: res => {
                done();
            }
        });
    });

    it(`【createAdAppInstallManager】${system}端正常调用，cancel方法`, done => {
        const adApp = createAdAppInstallManager({});
        adApp.cancel({
            success: res => {
                done();
            }
        });
    });

    it(`【createAdAppInstallManager】${system}端正常调用，install方法`, done => {
        const adApp = createAdAppInstallManager({});
        adApp.install({
            success: res => {
                done();
            }
        });
    });

    it(`【createAdAppInstallManager】${system}端正常调用，queryState方法`, done => {
        const adApp = createAdAppInstallManager({});
        adApp.queryState({
            success: res => {
                done();
            }
        });
    });

    it(`【createAdAppInstallManager】${system}端正常调用，onProgressUpdate方法`, done => {
        mockMethod(mockMethodCallBack);
        const adApp = createAdAppInstallManager({});
        adApp.onProgressUpdate(res => {
            done();
        });

        adApp.start({});
    });
});

describe('API【getAppInfo】测试', () => {
    it(`【getAppInfo】${system}端正常调用`, done => {
        const appInfo = getAppInfo();
        appInfo.then(res => {
            done();
        });

        events.emit('responseGetAppInfo', {
            value: {
                appInfo: 'test'
            }
        });
    });

    it(`【getAppInfo】${system}端正常调用，masterManager`, done => {
        mockMasterManager();
        const appInfo = getAppInfo();
        appInfo.then(res => {
            done();
        });
    });
});



describe('API【createAppInstallManager】测试', () => {
    after(normalMethod);

    it(`【createAppInstallManager】${system}端正常调用`, done => {
        const app = swan.createAppInstallManager({});
        expect(app).to.be.a('object');
        done();
    });

    it(`【createAppInstallManager】${system}端正常调用，start方法`, done => {
        const app = swan.createAppInstallManager({});
        app.start();
        done();
    });

    it(`【createAppInstallManager】${system}端正常调用，pause方法`, done => {
        const app = swan.createAppInstallManager({});
        app.pause();
        done();
    });

    it(`【createAppInstallManager】${system}端正常调用，resume方法`, done => {
        const app = swan.createAppInstallManager({});
        app.resume();
        done();
    });

    it(`【createAppInstallManager】${system}端正常调用，cancel方法`, done => {
        const app = swan.createAppInstallManager({});
        app.cancel();
        done();
    });

    it(`【createAppInstallManager】${system}端正常调用，install方法`, done => {
        const app = swan.createAppInstallManager({});
        app.install();
        done();
    });

    it(`【createAppInstallManager】${system}端正常调用，queryState方法`, done => {
        const app = swan.createAppInstallManager({});
        app.queryState();
        done();
    });

    it(`【createAppInstallManager】${system}端正常调用，onProgressUpdate方法`, done => {
        mockMethod(mockMethodCallBack);
        const app = swan.createAppInstallManager({});
        app.onProgressUpdate(res => {
            done();
        });
        
        app.start({});
    });
});
