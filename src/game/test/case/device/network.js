/**
 * @file file case for apiDemo-audio
 * @author yupeng07@baidu.com
 * result: check done
 */

describe('Network', function () {
    describe('getNetworkType', function () {
        it('正确调用:验证返回结果格式', function (done) {
            let params = {
                success(res) {
                    console.log('getNetworkType success', JSON.stringify(res));
                    assert(typeof res === 'object');
                    assert.ok(res.networkType);
                    swan.showToast({
                        title: 'getNetworkType:' + JSON.stringify(res),
                        duration: 2000
                    });
                    done();
                },
                fail: done
            };
            swan.getNetworkType(params);
        });
        it('异常调用: #success not require1', function (done) {
            let params = {
                complete: () => done()
            };
            swan.getNetworkType(params);
        });
        it('正常调用: #complete has used', function (done) {
            let params = {
                success: 100,
                complete: () => done()
            };
            swan.getNetworkType(params);
        });
    });
    // 操作方式：人工断网查看 toast校验
    describe('onNetworkStatusChange<需要人工断网 查看toast>', function () {
        this.timeout(10000);
        it('正确调用', function (done) {
            swan.onNetworkStatusChange(function (res) {
                console.log('onNetworkStatusChange success', JSON.stringify(res));
                assert(typeof res === 'object');
                assert(typeof res.isConnected === 'boolean');
                assert(typeof res.networkType === 'string');
                swan.showToast({
                    title: 'onNetworkStatusChange:' + JSON.stringify(res),
                    duration: 2000
                });
                done();
            });
        });
    });
});
