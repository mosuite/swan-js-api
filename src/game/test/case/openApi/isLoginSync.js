/**
 * @file file case for apiDemo-isLoginSync
 * @author renzhonghua@baidu.com
 * result: --
 */

describe('openApi', function () {

    describe('isLoginSync', function () {
        it('正常调用', function () {
            let loginStat = swan.isLoginSync();
            console.log('loginStat', loginStat)
            assert.ok(typeof loginStat === 'object');
            assert.ok(typeof loginStat.isLogin === 'boolean');

        });
    });

});
