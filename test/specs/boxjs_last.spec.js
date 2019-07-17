/**
 * @file spec/boxjs最后部分
 * @author bailonggang
 * @description  boxjs最后部分接口单测
 */

import $ from '../../src/utils/_core';
import {boxjs} from '../../src/boxjs';
import {describe} from 'mocha';
const expect = require('chai').expect;
const system = $.isIOS ? 'ios' : 'android';

describe('API【performpanel】测试', () => {
    it(`【boxjs.performpanel】${system}端正常调用`, done => {
        boxjs.log({
            name: 'performpanel',
            data: {
                data: []
            }
        }).then(() => {
            done();
        });
    });

    it(`【boxjs.performpanel】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.log({
            name: 'performpanel',
            data: {
                data: []
            }
        }).finally(() => {
            done();
        });
    });

    it(`【boxjs.performpanel】${system}端正常调用，data参数不传`, done => {
        boxjs.log({
            name: 'performpanel',
            data: {}
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('data is required.');
            done();
        });
    });

    it(`【boxjs.performpanel】${system}端正常调用，data参数类型错误`, done => {
        boxjs.log({
            name: 'performpanel',
            data: {
                data: {}
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('data type error. must be "Array"');
            done();
        });
    });
});

describe('API【ubcFlowJar】测试', () => {
    it(`【boxjs.ubcFlowJar】${system}端正常调用`, done => {
        boxjs.log({
            name: 'ubcFlowJar',
            data: {
                flowId: '',
                data: []
            }
        }).then(() => {
            done();
        });
    });

    it(`【boxjs.ubcFlowJar】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.log({
            name: 'ubcFlowJar',
            data: {
                flowId: '',
                data: []
            }
        }).finally(() => {
            done();
        });
    });

    it(`【boxjs.ubcFlowJar】${system}端正常调用，data参数不传`, done => {
        boxjs.log({
            name: 'ubcFlowJar',
            data: {
                flowId: '',
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('data is required.');
            done();
        });
    });

    it(`【boxjs.ubcFlowJar】${system}端正常调用，data参数类型错误`, done => {
        boxjs.log({
            name: 'ubcFlowJar',
            data: {
                flowId: '',
                data: {}
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('data type error. must be "Array"');
            done();
        });
    });

    it(`【boxjs.ubcFlowJar】${system}端正常调用，flowId参数不传`, done => {
        boxjs.log({
            name: 'ubcFlowJar',
            data: {
                data: []
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('flowId is required.');
            done();
        });
    });

    it(`【boxjs.ubcFlowJar】${system}端正常调用，flowId参数类型错误`, done => {
        boxjs.log({
            name: 'ubcFlowJar',
            data: {
                flowId: {},
                data: []
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('flowId type error. must be "string"');
            done();
        });
    });
});

describe('API【openStatisticFlowJar】测试', () => {
    it(`【boxjs.openStatisticFlowJar】${system}端正常调用`, done => {
        boxjs.log({
            name: 'statisticFlowJar',
            data: {
                groupId: '',
                bizId: '',
                data: []
            }
        }).then(() => {
            done();
        });
    });

    it(`【boxjs.openStatisticFlowJar】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.log({
            name: 'statisticFlowJar',
            data: {
                groupId: '',
                bizId: '',
                data: []
            }
        }).finally(() => {
            done();
        });
    });

    it(`【boxjs.openStatisticFlowJar】${system}端正常调用，data参数不传`, done => {
        boxjs.log({
            name: 'statisticFlowJar',
            data: {
                groupId: '',
                bizId: ''
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('data is required.');
            done();
        });
    });

    it(`【boxjs.openStatisticFlowJar】${system}端正常调用，data参数类型错误`, done => {
        boxjs.log({
            name: 'statisticFlowJar',
            data: {
                groupId: '',
                bizId: '',
                data: {}
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('data type error. must be "Array"');
            done();
        });
    });

    it(`【boxjs.openStatisticFlowJar】${system}端正常调用，groupId参数不传`, done => {
        boxjs.log({
            name: 'statisticFlowJar',
            data: {
                bizId: '',
                data: []
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('groupId is required.');
            done();
        });
    });

    it(`【boxjs.openStatisticFlowJar】${system}端正常调用，groupId参数类型错误`, done => {
        boxjs.log({
            name: 'statisticFlowJar',
            data: {
                groupId: {},
                bizId: '',
                data: []
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('groupId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.openStatisticFlowJar】${system}端正常调用，bizId参数不传`, done => {
        boxjs.log({
            name: 'statisticFlowJar',
            data: {
                groupId: '',
                data: []
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('bizId is required.');
            done();
        });
    });

    it(`【boxjs.openStatisticFlowJar】${system}端正常调用，bizId参数类型错误`, done => {
        boxjs.log({
            name: 'statisticFlowJar',
            data: {
                groupId: '',
                bizId: {},
                data: []
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('bizId type error. must be "string"');
            done();
        });
    });
});

describe('API【getLaunchAppInfo】测试', () => {
    it(`【boxjs.getLaunchAppInfo】${system}端正常调用`, done => {
        boxjs.data.get({
            name: 'swan-launchAppInfo',
            data: {
                cb: ''
            }
        }).then(() => {
            done();
        });
    });

    it(`【boxjs.getLaunchAppInfo】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.data.get({
            name: 'swan-launchAppInfo',
            data: {
                cb: ''
            }
        }).finally(() => {
            done();
        });
    });

    it(`【boxjs.getLaunchAppInfo】${system}端正常调用，cb参数不传`, done => {
        boxjs.data.get({
            name: 'swan-launchAppInfo',
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('cb is required.');
            done();
        });
    });

    it(`【boxjs.getLaunchAppInfo】${system}端正常调用，cb参数类型错误`, done => {
        boxjs.data.get({
            name: 'swan-launchAppInfo',
            data: {
                cb: {}
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('cb type error. must be "string"');
            done();
        });
    });
});

describe('API【openApp】测试', () => {
    it(`【boxjs.openApp】${system}端正常调用`, done => {
        boxjs.ui.open({
            name: 'swan-app',
            data: {
                open: '',
                download: {},
                url: '',
                isNeedDownload: false,
                invokAnyWay: false
            }
        }).then(() => {
            done();
        });
    });

    it(`【boxjs.openApp】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.ui.open({
            name: 'swan-app',
            data: {
                open: '',
                download: {},
                url: '',
                isNeedDownload: false,
                invokAnyWay: false
            }
        }).finally(() => {
            done();
        });
    });

    it(`【boxjs.openApp】${system}端正常调用，open参数不传`, done => {
        boxjs.ui.open({
            name: 'swan-app',
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('open is required.');
            done();
        });
    });

    it(`【boxjs.openApp】${system}端正常调用，open参数类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-app',
            data: {
                open: {}
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('open type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.openApp】${system}端正常调用，download参数类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-app',
            data: {
                open: '',
                download: ''
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('download type error. must be "Object"');
            done();
        });
    });

    it(`【boxjs.openApp】${system}端正常调用，url参数类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-app',
            data: {
                open: '',
                download: {},
                url: {}
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('url type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.openApp】${system}端正常调用，isNeedDownload参数类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-app',
            data: {
                open: '',
                download: {},
                url: '',
                isNeedDownload: []
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('isNeedDownload type error. must be "boolean"');
            done();
        });
    });

    it(`【boxjs.openApp】${system}端正常调用，invokAnyWay参数类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-app',
            data: {
                open: '',
                download: {},
                url: '',
                isNeedDownload: false,
                invokAnyWay: []
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('invokAnyWay type error. must be "boolean"');
            done();
        });
    });
});

describe('API【launch】测试', () => {
    it(`【boxjs.launch】${system}端正常调用`, done => {
        boxjs.webView.launch({
            appid: '',
            url: '',
            navi: '',
            from: '',
            extraData: ''
        }).then(() => {
            done();
        });
    });

    it(`【boxjs.launch】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.webView.launch({
            appid: '',
            url: '',
            navi: '',
            from: '',
            extraData: ''
        }).finally(() => {
            done();
        });
    });

    it(`【boxjs.launch】${system}端正常调用，appid参数不传`, done => {
        boxjs.webView.launch({
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('appid is required.');
            done();
        });
    });

    it(`【boxjs.launch】${system}端正常调用，appid参数类型错误`, done => {
        boxjs.webView.launch({
            appid: {}
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('appid type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.launch】${system}端正常调用，url参数类型错误`, done => {
        boxjs.webView.launch({
            appid: '',
            url: {}
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('url type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.launch】${system}端正常调用，navi参数类型错误`, done => {
        boxjs.webView.launch({
            appid: '',
            url: '',
            navi: {}
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('navi type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.launch】${system}端正常调用，from参数类型错误`, done => {
        boxjs.webView.launch({
            appid: '',
            url: '',
            navi: '',
            from: {}
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('from type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.launch】${system}端正常调用，extraData参数类型错误`, done => {
        boxjs.webView.launch({
            appid: '',
            url: '',
            navi: '',
            from: '',
            extraData: false
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('extraData type error, must be oneOfType ["string","Object"]');
            done();
        });
    });
});

describe('API【exit】测试', () => {
    it(`【boxjs.exit】${system}端正常调用`, done => {
        boxjs.webView.exit().then(() => {
            done();
        });
    });

    it(`【boxjs.exit】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.webView.exit().finally(() => {
            done();
        });
    });
});

if (system === 'android') {
describe('API【openPreventPullDownRefresh】测试', () => {
    
    it(`【boxjs.openPreventPullDownRefresh】${system}端正常调用`, done => {
        boxjs.ui.open({
            name: 'swan-preventPullDownRefresh',
            data: {
                slaveId: '',
                prevent: false
            }
        }).then(() => {
            done();
        });
    });

    it(`【boxjs.openPreventPullDownRefresh】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.ui.open({
            name: 'swan-preventPullDownRefresh',
            data: {
                slaveId: '',
                prevent: false
            }
        }).finally(() => {
            done();
        });
    });

    it(`【boxjs.openPreventPullDownRefresh】${system}端正常调用，slaveId参数不传`, done => {
        boxjs.ui.open({
            name: 'swan-preventPullDownRefresh',
            data: {
                prevent: false
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('slaveId is required.');
            done();
        });
    });

    it(`【boxjs.openPreventPullDownRefresh】${system}端正常调用，slaveId参数类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-preventPullDownRefresh',
            data: {
                slaveId: {},
                prevent: false
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('slaveId type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.openPreventPullDownRefresh】${system}端正常调用，prevent参数不传`, done => {
        boxjs.ui.open({
            name: 'swan-preventPullDownRefresh',
            data: {
                slaveId: ''
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('prevent is required.');
            done();
        });
    });

    it(`【boxjs.openPreventPullDownRefresh】${system}端正常调用，prevent参数类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-preventPullDownRefresh',
            data: {
                slaveId: '',
                prevent: {}
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('prevent type error. must be "boolean"');
            done();
        });
    });

});
}

describe('API【setSanIncData2Console】测试', () => {
    it(`【boxjs.setSanIncData2Console】${system}端正常调用`, done => {
        boxjs.data.set({
            name: 'swan-sanIncData2Console',
            data: {
                incData: {}
            }
        }).then(() => {
            done();
        });
    });

    it(`【boxjs.setSanIncData2Console】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.data.set({
            name: 'swan-sanIncData2Console',
            data: {
                incData: {}
            }
        }).finally(() => {
            done();
        });
    });

    it(`【boxjs.setSanIncData2Console】${system}端正常调用，incData参数不传`, done => {
        boxjs.data.set({
            name: 'swan-sanIncData2Console',
            data: {}
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('incData is required.');
            done();
        });
    });

    it(`【boxjs.setSanIncData2Console】${system}端正常调用，name参数类型错误`, done => {
        boxjs.data.set({
            name: 'swan-sanIncData2Console',
            data: {
                incData: ''
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('incData type error. must be "Object"');
            done();
        });
    });
});

describe('API【setSanFullData2Console】测试', () => {
    it(`【boxjs.setSanFullData2Console】${system}端正常调用`, done => {
        boxjs.data.set({
            name: 'swan-sanFullData2Console',
            data: {
                fullData: []
            }
        }).then(() => {
            done();
        });
    });

    it(`【boxjs.setSanFullData2Console】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.data.set({
            name: 'swan-sanFullData2Console',
            data: {
                fullData: []
            }
        }).finally(() => {
            done();
        });
    });

    it(`【boxjs.setSanFullData2Console】${system}端正常调用，fullData参数不传`, done => {
        boxjs.data.set({
            name: 'swan-sanFullData2Console',
            data: {}
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('fullData is required.');
            done();
        });
    });

    it(`【boxjs.setSanFullData2Console】${system}端正常调用，name参数类型错误`, done => {
        boxjs.data.set({
            name: 'swan-sanFullData2Console',
            data: {
                fullData: ''
            }
        }).catch(err => {
            expect(err).to.be.a('error');
            expect(err.message).to.be.include('fullData type error. must be "Array"');
            done();
        });
    });
});

describe('API【getSanDataFromActiveSlave】测试', () => {
    it(`【boxjs.getSanDataFromActiveSlave】${system}端正常调用`, done => {
        boxjs.data.get({
            name: 'swan-sanDataFromActiveSlave'
        }).then(() => {
            done();
        });
    });

    it(`【boxjs.getSanDataFromActiveSlave】${system}端正常调用，complete函数正常执行`, done => {
        boxjs.data.get({
            name: 'swan-sanDataFromActiveSlave'
        }).finally(() => {
            done();
        });
    });
});