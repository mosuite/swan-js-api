/**
 * @file file case for apiDemo-login
 * @author yupeng07@baidu.com
 * result: check done [授权]
 */

describe('openApi', function () {
    // 注意： login 真机测试
    before(done => {
        let params = {
            scope:'scope.userInfo',
            success(res) {
                console.log('authorize', JSON.stringify(res));
                assert(typeof res === 'object');
                assert(typeof res.errMsg === 'string');
                done();
            },
            fail: done
        };
        swan.authorize(params);
    });
    describe('login<跳出单测，影响展示>', function () {
        it('正常调用', function (done) {
            let params = {
                success(res) {
                    console.log('login success', JSON.stringify(res));
                    swan.showToast({
                        title: JSON.stringify(res),
                        duration: 2000
                    });
                    assert(typeof res === 'object');
                    assert(typeof res.code === 'string');
                    done();
                },
                fail: done
            };
            swan.login(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                success() {
                },
                complete: done
            };
            swan.login(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                success: 100,
                complete: done
            };
            swan.login(params);
        });
    });

    describe('checkSession<需要登录，跳出页面>', function () {

        it('正常调用', function (done) {
            let params = {
                success: () => done(),
                fail: done
            };
            swan.checkSession(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                success() {
                },
                complete: done
            };
            swan.checkSession(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                success: 100,
                complete: done
            };
            swan.checkSession(params);
        });
        it('异常调用：参数类型 #success must function', function (done) {
            let params = {
                success: 100,
                fail: () => done(),
            };
            swan.checkSession(params);
        });
    });
});
