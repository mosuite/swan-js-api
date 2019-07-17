/**
 * @file file case for apiDemo-setting
 * @author yupeng07@baidu.com
 * result: check done [授权]
 */

describe('openApi', function () {
    describe('getSetting', function () {
        it('正常调用', function (done) {
            let params = {
                success: res => {
                    console.log('getSetting', JSON.stringify(res));
                    assert(typeof res === 'object');
                    assert(typeof res.authSetting === 'object');
                    done();
                },
                fail: done
            };
            swan.getSetting(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                success() {
                },
                complete: () => done()
            };
            swan.getSetting(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                success: 100,
                complete: () => done()
            };
            swan.getSetting(params);
        });
    });
    describe('openSetting', function () {
        // appkey替换 CdKRXT4IrCwTD6LIBS7DIlL8rmbKx58N
        it('正常调用', function (done) {
            let params = {
                success: res => {
                    console.log('openSetting', JSON.stringify(res));
                    assert(typeof res === 'object');
                    assert(typeof res.authSetting === 'object');
                    done();
                },
                fail: done
            };
            swan.openSetting(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                success() {
                },
                complete: () => done()
            };
            swan.openSetting(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                success: 100,
                complete: () => done()
            };
            swan.openSetting(params);
        });
    });
});
