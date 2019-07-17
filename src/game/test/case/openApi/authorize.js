/**
 * @file file case for apiDemo-authorize
 * @author yupeng07@baidu.com
 * result: check done [授权]
 */

describe('openApi', function () {
    const shouldFail = new Error('配置不符合预期，却成功被执行');
    describe('authorize<用户授权问题>', function () {
        let scope = 'scope.userInfo';
        it('正常调用', function (done) {
            let params = {
                scope,
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
        it('正确调用: #complete has used', function (done) {
            let params = {
                scope: 'scope.userLocation',
                success() {
                },
                complete: done
            };
            swan.authorize(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                success: 100,
                complete: done
            };
            swan.authorize(params);
        });
        it('异常调用：#scope length equal 0', function (done) {
            let params = {
                scope: '',
                fail: () => done(),
                success: () => done(shouldFail)
            };
            swan.authorize(params);
        });
        it('异常调用：#scope no String', function (done) {
            let params = {
                scope: [],
                fail: () => done(),
                success: () => done(shouldFail)
            };
            swan.authorize(params);
        });
        it('异常调用：#scope no require', function (done) {
            let params = {
                fail: () => done(),
                success: () => done(shouldFail)
            };
            swan.authorize(params);
        });
        it('异常调用：参数类型 #success must function', function (done) {
            let params = {
                success: 100,
                fail: () => done()
            };
            swan.authorize(params);
        });
    });
});
