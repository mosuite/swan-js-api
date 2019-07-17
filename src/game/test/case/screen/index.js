/**
 * @file file case for apiDemo-Screen
 * @author shixinzhe@baidu.com
 * result: check done [TODO]
 */

let expect = require('chai').expect;

describe.only('Screen', function () {

    describe('setScreenBrightness', function () {
        let value = 0.5;
        it('异常调用 #complete has used value没填', function (done) {
            let params = {
                complete: () => done(),
                success: 100
            };
            swan.setScreenBrightness(params);
        });

        it('正常调用: 参数正确', function (done) {
            let params = {
                value,
                success: () => done(),
                fail: done
            };
            swan.setScreenBrightness(params);
        });

        it('异常调用:参数必填 #value not required', function (done) {
            let params = {
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setScreenBrightness(params);
        });

        it('异常调用:参数必填 #value 超过范围 3432', function (done) {
            let params = {
                value: 3432,
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setScreenBrightness(params);
        });

        it('异常调用:参数必填 #value 超过范围 -23', function (done) {
            let params = {
                value: -23,
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setScreenBrightness(params);
        });

        it('异常调用:参数必填 #value 为空', function (done) {
            let params = {
                value: '',
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setScreenBrightness(params);
        });

        it('异常调用:类型校验 #value not Number', function (done) {
            let params = {
                value: 'ww',
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setScreenBrightness(params);
        });
    });

    describe('getScreenBrightness', function () {
        it('异常调用 #complete has used', function (done) {
            let params = {
                complete: () => done(),
                success: 100
            };
            swan.getScreenBrightness(params);
        });
        it('正常调用: 参数正确', function (done) {
            let params = {
                success(res) {
                    expect(res).to.be.an('object');
                    expect(res.value).to.be.equal(0.5);
                    expect(res.value).to.be.deep.equal(0.5);
                    done();
                },
                fail: done
            };
            swan.getScreenBrightness(params);
        });
    });

    describe('setKeepScreenOn', function () {
        let keepScreenOn = false;
        it('异常调用 #complete has used', function (done) {
            let params = {
                complete: () => done(),
                success: 100
            };
            swan.setKeepScreenOn(params);
        });

        it('正常调用: 参数正确', function (done) {
            let params = {
                keepScreenOn,
                success: () => done(),
                fail: done
            };
            swan.setKeepScreenOn(params);
        });

        it('异常调用:参数必填 #keepScreenOn not required', function (done) {
            let params = {
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setKeepScreenOn(params);
        });

        it('异常调用:类型校验 #keepScreenOn 为"33"', function (done) {
            let params = {
                keepScreenOn: '33',
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setKeepScreenOn(params);
        });

        it('异常调用:类型校验 #keepScreenOn 为"true"', function (done) {
            let params = {
                keepScreenOn: 'true',
                fail: () => done(),
                success: () => done(that.error.shouldFail)
            };
            swan.setKeepScreenOn(params);
        });
    });
});