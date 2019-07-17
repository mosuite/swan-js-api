/**
 * @file file case for apiDemo-systemInfo
 * @author yupeng07@baidu.com
 * result: check done
 */
// TODO: fontSizeSetting 双端不一致 IOS 1~4 Android 0~3
describe('device', function () {
    describe('getSystemInfo', function () {
        this.timeout(1000);
        // 规则开始
        it('正确调用:验证返回结果格式及各参数', function (done) {
            let params = {
                success(res) {
                    console.log('getSystemInfo', res);
                    assert.ok(typeof res === 'object');
                    assert.ok(typeof res.brand);
                    assert.ok(typeof res.model);
                    assert.ok(typeof res.pixelRatio);
                    assert.ok(typeof res.screenWidth);
                    assert.ok(typeof res.screenHeight);
                    assert.ok(typeof res.windowWidth);
                    assert.ok(typeof res.windowHeight);
                    assert.ok(typeof res.version);
                    assert.ok(typeof res.platform);
                    assert.ok(typeof res.system);
                    assert.ok(typeof res.fontSizeSetting);
                    assert.ok(typeof res.language);
                    done();
                },
                fail: done
            };
            swan.getSystemInfo(params);
        });
        it('异常调用: #success not require1', function (done) {
            let params = {
                complete: () => done()
            };
            swan.getSystemInfo(params);
        });
        it('正常调用: #complete has used', function (done) {
            let params = {
                success: 100,
                complete: () => done()
            };
            swan.getSystemInfo(params);
        });
    });

    // getSystemInfoSync
    describe('getSystemInfoSync', function () {
        it('正确调用:验证返回结果格式及各参数', function () {
            let res = swan.getSystemInfoSync();
            console.log('getSystemInfoSync', res);
            assert.ok(typeof res === 'object');
            assert.ok(typeof res.brand);
            assert.ok(typeof res.model);
            assert.ok(typeof res.pixelRatio);
            assert.ok(typeof res.screenWidth);
            assert.ok(typeof res.screenHeight);
            assert.ok(typeof res.windowWidth);
            assert.ok(typeof res.windowHeight);
            assert.ok(typeof res.version);
            assert.ok(typeof res.platform);
            assert.ok(typeof res.system);
            assert.ok(typeof res.fontSizeSetting);
            assert.ok(typeof res.language);
        });
    });
});
