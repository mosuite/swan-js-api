/**
 * @file file case for apiDemo-vibrate
 * @author yupeng07@baidu.com
 * result: check done
 */

describe('Vibrate', function () {
    describe('vibrateLong', function () {
        it('正常调用: 参数正确', function (done) {
            let params = {
                success: () => setTimeout(done, 1000),
                fail: done
            };
            swan.vibrateLong(params);
        });
        it('异常调用 #complete has used', function (done) {
            let params = {
                complete: () => setTimeout(done, 1000),
                success: 100
            };
            swan.vibrateLong(params);
        });
    });
    describe('vibrateShort', function () {
        it('正常调用', function (done) {
            let params = {
                success: () => setTimeout(done, 1000),
                fail: done
            };
            swan.vibrateShort(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                success() {},
                complete: () => setTimeout(done, 1000)
            };
            swan.vibrateShort(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                success: 10,
                complete: () => setTimeout(done, 1000)
            };
            swan.vibrateShort(params);
        });

    });
});
