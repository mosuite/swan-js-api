/**
 * @file file case for apiDemo-accelerometer
 * @author shixinzhe@baidu.com
 * result: check done [TODO]
 */

let expect = require('chai').expect;

describe.only('Accelerometer', function () {
    describe('onAccelerometerChange', function () {
        it('正确调用:参数正确', function () {
            // this.timeout(12000);
            let params = function (res) {
                expect(res).to.be.an('object');
            };
            swan.onAccelerometerChange(params);
        });
    });

    describe('startAccelerometer', function () {
        it('异常调用 #complete has used', function (done) {
            let params = {
                complete: () => done(),
                success: 100
            };
            swan.startAccelerometer(params);
        });

        it('正常调用: 参数正确', function (done) {
            let params = {
                success: () => done(),
                fail: done
            };
            swan.startAccelerometer(params);
        });
    });

    describe('stopAccelerometer', function () {
        it('异常调用 #complete has used', function (done) {
            let params = {
                complete: () => done(),
                success: 100
            };
            swan.stopAccelerometer(params);
        });

        it('正常调用: 参数正确', function (done) {
            let params = {
                success: () => done(),
                fail: done
            };
            swan.stopAccelerometer(params);
        });
    });
});