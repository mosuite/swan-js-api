/**
 * @file file case for apiDemo-getUserInfo
 * @author yanghongxue@baidu.com
 * result: check done
 */

describe('getUserInfo<需要登录，跳出页面>', function () {
    // 注意：有效appKey配置 ubTVGA6te1aVHTPsq2oH4jsHObs3pdUk
    const shouldFail = new Error('配置不符合预期，却成功被执行');
    it('正常调用', function (done) {
        let params = {
            swanIdList: ['SFn37A9DBiAHorJmdBPmXvbYUnDdcfGB6bM72HeCZmsT5TvLeFC9nBBHCBmsF1fCdi6HcowrjzrnK9n25975tn4H'],
            success(res) {
                function catchError() {
                    assert(typeof res === 'object');
                    assert(typeof res.data === 'string');
                    assert(typeof res.iv === 'string');
                    assert(typeof res.userinfo === 'object');
                    assert(typeof res.userinfo.headimgurl === 'string');
                    assert(typeof res.userinfo.nickname === 'string');
                    assert(typeof res.userinfo.sex === 'string');
                }
                done(catchError());
            },
            fail: (error) => done(error)
        };
        swan.getUserInfo(params);
    });
    it('正常调用', function (done) {
        let params = {
            swanIdList: ['selfSwanId'],
            success(res) {
                function catchError() {
                    assert(typeof res === 'object');
                    assert(typeof res.data === 'string');
                    assert(typeof res.iv === 'string');
                    assert(typeof res.userinfo === 'object');
                    assert(typeof res.userinfo.headimgurl === 'string');
                    assert(typeof res.userinfo.nickname === 'string');
                    assert(typeof res.userinfo.sex === 'string');
                }
                done(catchError());
            },
            fail: (error) => done(error)
        };
        swan.getUserInfo(params);
    });
    it('正常调用', function (done) {
        let params = {
            success(res) {
                function catchError() {
                    assert(typeof res === 'object');
                    assert(typeof res.data === 'string');
                    assert(typeof res.iv === 'string');
                    assert(typeof res.userinfo === 'object');
                    assert(typeof res.userinfo.headimgurl === 'string');
                    assert(typeof res.userinfo.nickname === 'string');
                    assert(typeof res.userinfo.sex === 'string');
                }
                done(catchError());
            },
            fail: (error) => done(error)
        };
        swan.getUserInfo(params);
    });
});