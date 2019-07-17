/**
 * @file spec/request
 * @author lijia30@baidu.com
 * @description  request API接口
 */
import {swan} from '../../src/swan/index';
import {boxjs} from '../../src/boxjs';
const expect = require('chai').expect;
import $ from '../../src/utils/_core';
import {request} from '../../src/swan/api/network/request';
import {adRequest} from '../../src/boxjs/complex/adRequest';

const system = $.isIOS ? 'ios' : 'android';

describe('API【request】测试', () => {
    it(`【swan.request】${system}端正常调用`, done => {
        swan.request({
            url: 'http://baidu.xin.com/home/config_item',
            data: {
                cityid: '201'
            },
            header: {
                'content-type': 'text/plain' // 默认值
            },
            success: res => {
                expect(res).to.be.a('object');
                expect(res.header).to.be.a('object');
                expect(res.statusCode).to.be.equal(200);
                expect(res.data).to.be.a('object');
                done();
            }
        })
    });

    it(`【swan.request】${system}端正常调用, responseType为arrayBuffer`, done => {
        swan.request({
            url: 'http://baidu.xin.com/home/config_item',
            responseType:'arrayBuffer',
            data: {
                cityid: '202'
            },
            success: res => {
                expect(res).to.be.a('object');
                expect(res.header).to.be.a('object');
                expect(res.statusCode).to.be.equal(200);
                expect(res.data).to.be.a('arrayBuffer');
                done();
            }
        })
    });

    it(`【swan.request】${system}端异常调用，未传入url参数`, done => {
        swan.request({
            data: {
                cityid: '201'
            },
            header: {
                'content-type': 'text/plain' // 默认值
            },
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal(`request:fail parameter error: invalid url "undefined"`);
                done();
            }
        })
    });

    it(`【swan.request】${system}端正常调用，调用abort方法`, done => {
        const task = swan.request({
            url: 'http://baidu.xin.com/home/config_item',
            data: {
                cityid: '201'
            },
            header: {
                'content-type': 'text/plain' // 默认值
            },
            success: res => {
                done();
            }
        });
        task.abort({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
            }
        });
    });

    it(`【swan.request】${system}端正常调用，调用abort方法客户端一级回调已经返回`, done => {
        const task = swan.request({
            url: 'http://baidu.xin.com/home/config_item',
            data: {
                cityid: '201'
            },
            header: {
                'content-type': 'text/plain' // 默认值
            },
            success: res => {
               done();
            }
        });
        task._requestState = true;
        task.abort({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;

            }
        });
    });

    it('request function --- 当swan.request参数url不合法，正确处理', done => {
        let url = 'test://teststs'
        request({
            url: url,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal(`request:fail parameter error: invalid url "${url}"`);
                done();
            }
        })
    });

    it('request function --- request应正确返回一个RequestTask, 包含属性_reqId和_requestState，并且有abort方法', () => {
        let task = request({url: 'http://baidu.xin.com/home/config_item'});
        expect(task).to.be.a('object');
        expect(task.hasOwnProperty('_reqId')).to.be.ok;
        expect(task.hasOwnProperty('_requestState')).to.be.ok;
        expect(task.abort).to.be.a('function');
    });

    it('request function --- request属性_reqId和_requestState改变值', done => {
        let task = request({
            url: 'http://baidu.xin.com/home/config_item',
            success: res => {
                expect(task._requestState).to.be.true;
                done();
            }

        });
    });

    it('request function --- request能够对传入参数进行正确处理', () => {
        let params = {url: 'http://baidu.xin.com/home/config_item', header: true};
        request(params);
        expect(params.header).to.be.a('object');
        expect(params.header).to.be.empty;
        expect(params.method).to.be.equal('GET');

        let params2 = {
            url: 'http://baidu.xin.com/home/config_item',
            header: {
                'Content-TYPE': 'application/json',
                'referer': 'http://www.baidu.com',
                'test': 'aaaa',
            },
            method: 'post'
        };
        request(params2);
        expect(Object.keys(params2.header)[0]).to.be.equal('content-type');
        expect(Object.keys(params2.header)[2]).to.be.equal('test');
        expect(params2.method).to.be.equal('POST');

    })
});



describe('API【adRequest】测试', () => {
    it(`【boxjs.adRequest】${system}端正常调用`, done => {
        boxjs.adRequest({
            url: 'http://xin.baidu.com/home/config_item',
            data: {
                cityid: '201'
            },
            header: {
                'content-type': 'text/plain' // 默认值
            },
            success: res => {
                expect(res).to.be.a('object');
                expect(res.header).to.be.a('object');
                expect(res.statusCode).to.be.equal(200);
                expect(res.data).to.be.a('object');
                done();
            }
        })
    });

    it(`【boxjs.adRequest】${system}端正常调用, responseType为arrayBuffer`, done => {
        boxjs.adRequest({
            url: 'http://xin.baidu.com/home/config_item',
            responseType:'arrayBuffer',
            data: {
                cityid: '202'
            },
            success: res => {
                expect(res).to.be.a('object');
                expect(res.header).to.be.a('object');
                expect(res.statusCode).to.be.equal(200);
                expect(res.data).to.be.a('arrayBuffer');
                done();
            }
        })
    });

    it(`【boxjs.adRequest】${system}端异常调用，未传入url参数`, done => {
        boxjs.adRequest({
            data: {
                cityid: '201'
            },
            header: {
                'content-type': 'text/plain' // 默认值
            },
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal(`AdRequest:fail parameter error: invalid url "undefined"`);
                done();
            }
        })
    });

    it(`【boxjs.adRequest】${system}端正常调用，调用abort方法`, done => {
        const task = boxjs.adRequest({
            url: 'http://xin.baidu.com/home/config_item',
            data: {
                cityid: '201'
            },
            header: {
                'content-type': 'text/plain' // 默认值
            },
            success: res => {
                done();
            }
        });
        task.abort({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;
            }
        });
    });

    it(`【boxjs.adRequest】${system}端正常调用，调用abort方法客户端一级回调已经返回`, done => {
        const task = boxjs.adRequest({
            url: 'http://xin.baidu.com/home/config_item',
            data: {
                cityid: '201'
            },
            header: {
                'content-type': 'text/plain' // 默认值
            },
            success: res => {
                done();
            }
        });
        task._adRequestState = true;
        task.abort({
            success: res => {
                expect(res).to.be.a('object');
                expect(res).to.be.empty;

            }
        });
    });

    it('request function --- 当boxjs.adRequest参数url不合法，正确处理', done => {
        let url = 'test://teststs'
        adRequest({
            url: url,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal(`AdRequest:fail parameter error: invalid url "${url}"`);
                done();
            }
        })
    });

    it('request function --- 当boxjs.adRequest参数url不合法，正确处理', done => {
        let url = 'http://teststs'
        adRequest({
            url: url,
            fail: err => {
                expect(err).to.be.a('object');
                expect(err.errCode).to.be.equal(904);
                expect(err.errMsg).to.be.equal(`AdRequest:fail parameter error: invalid url "${url}"`);
                done();
            }
        })
    });

    it('request function --- adRequest应正确返回一个AdRequestTask, 包含属性_adReqId和_adRequestState，并且有abort方法', () => {
        let task = adRequest({url: 'http://xin.baidu.com/home/config_item'});

        expect(task).to.be.a('object');
        expect(task.hasOwnProperty('_adReqId')).to.be.ok;
        expect(task.hasOwnProperty('_adRequestState')).to.be.ok;
        expect(task.abort).to.be.a('function');
    });

    it('request function --- adRequest属性_adReqId和_adRequestState改变值', done => {
        let task = adRequest({
            url: 'http://xin.baidu.com/home/config_item',
            success: res => {
                expect(task._adRequestState).to.be.true;
                done();
            }

        });
    });

    it('request function --- adRequest能够对传入参数进行正确处理', () => {
        let params = {url: 'http://xin.baidu.com/home/config_item', header: true};
        adRequest(params);
        expect(params.header).to.be.a('object');
        expect(params.header).to.be.empty;
        expect(params.method).to.be.equal('GET');

        let params2 = {
            url: 'http://xin.baidu.com/home/config_item',
            header: {
                'Content-TYPE': 'application/json',
                'referer': 'http://www.baidu.com',
                'test': 'aaaa',
            },
            method: 'post'
        };
        adRequest(params2);
        expect(Object.keys(params2.header)[0]).to.be.equal('content-type');
        expect(Object.keys(params2.header)[2]).to.be.equal('test');
        expect(params2.method).to.be.equal('POST');

    })
});






