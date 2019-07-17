/**
 * @file file case for apiDemo-clipboard
 * @author shixinzhe@baidu.com
 * result: check done [TODO]
 */

let expect = require('chai').expect;

describe.only('ClipboardData', function () {
    describe('setClipboardData', function () {
        this.timeout(1000);
        it('正常调用', function (done) {
            let params = {
                data: 'baiduTest',
                success: () => done(),
                fail: (error) => done(error)
            };
            swan.setClipboardData(params);
        });
    
        it('正确调用: #complete has used', function (done) {
            let params = {
                data: 'baiduTest',
                complete: () => {
                    done();
                }
            };
            swan.setClipboardData(params);
        });
    
        it('异常调用: #complete has used', function (done) {
            let params = {
                success: 100,
                complete: () => {
                    done();
                }
            };
            swan.setClipboardData(params);
        });
    
        it('异常调用：#data 传空值', function (done) {
            let params = {
                data: '',
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setClipboardData(params);
        });
    
        it('异常调用：#data 为number', function (done) {
            let params = {
                data: [],
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setClipboardData(params);
        });
    
        it('异常调用：#data 为obj', function (done) {
            let params = {
                data: {
                    name: 'panda'
                },
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setClipboardData(params);
        });
    
        it('异常调用：#data 为boolean', function (done) {
            let params = {
                data: true,
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setClipboardData(params);
        });
    
        it('异常调用:参数必填 #data not required', function (done) {
            let params = {
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setClipboardData(params);
        });
    
    });
    describe('getClipboardData', function () {
        this.timeout(1000);
        // 开始前准备，存入一个字符串
        beforeEach(() => {
            swan.setClipboardData({
                data: 'baiduTest'
            });
        })
        it('正常调用：验证正确获取粘贴板内容与格式', function (done) {
            let params = {
                success(res) {
                    function catchError() {
                        expect(res.data).to.be.deep.equal('baiduTest');
                    }
                    done(catchError());
                },
                fail: (error) => done(error)
            };
            swan.getClipboardData(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                success() {},
                complete: () => {
                    done();
                } 
            };
            swan.getClipboardData(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                success: 100,
                complete: () => {
                    done();
                }
            };
            swan.getClipboardData(params);
        });
    });
});