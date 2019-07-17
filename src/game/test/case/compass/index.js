/**
 * @file file case for apiDemo-compass
 * @author shixinzhe@baidu.com
 * result: check done [TODO]
 */

describe.only('Compass', function () {

    describe('onCompassChange', function () {
        it('正确调用:参数正确', function (done) {
            // this.timeout(5000);
            let params = function (res) {
                done();
            };
            swan.onCompassChange(params, done);
        });
    });

    describe('startCompass', function () {
        it('异常调用 #complete has used', function (done) {
            let params = {
                complete: () => done(),
                success: 100
            };
            swan.startCompass(params);
        });

        it('正常调用: 参数正确', function (done) {
            let params = {
                success: () => done(),
                fail: done
            };
            swan.startCompass(params);
        });
    });

    describe('stopCompass', function () {
        it('异常调用 #complete has used', function (done) {
            let params = {
                complete: () => done(),
                success: 100
            };
            swan.stopCompass(params);
        });

        it('正常调用: 参数正确', function (done) {
            let params = {
                success: () => done(),
                fail: done
            };
            swan.stopCompass(params);
        });
    });
});