/**
 * @file file case for apiDemo-audio
 * @author yupeng07@baidu.com
 * result: check done [授权]
 */

describe('Location1', function () {
    describe('getLocation', function () {
        let type = 'wgs84';
        let altitude = true;
        const shouldFail = new Error('配置不符合预期，却成功被执行');
        before((done) => {
            let params = {
                scope: 'scope.userLocation',
                success: () => {
                    swan.showToast({
                        title: 'scope.userLocation',
                        duration: 2000
                    });
                    done()
                }
            };
            swan.authorize(params);
        })
        it('正确调用:参数正确', function (done) {
            this.timeout(5000);
            let params = {
                type,
                altitude,
                success: (res) => {
                    swan.showToast({
                        title: JSON.stringify(res),
                        duration: 2000
                    });
                    console.log('getLocation', JSON.stringify(res));
                    assert.ok(typeof res === 'object');
                    assert.ok(typeof res.latitude === 'number');
                    assert.ok(typeof res.longitude === 'number');
                    assert.ok(typeof res.speed === 'number');
                    assert.ok(typeof res.accuracy === 'number');
                    assert.ok(typeof res.altitude === 'number');
                    assert.ok(typeof res.verticalAccuracy === 'number');
                    assert.ok(typeof res.horizontalAccuracy === 'number');
                    done();
                },
                fail: done
            };
            swan.getLocation(params);
        });

        it('正确调用:高度信息', function (done) {
            let params = {
                type,
                altitude: false,
                success: (res) => {
                    console.log('getLocation altitude:false', JSON.stringify(res));
                    assert.ok(typeof res === 'object');
                    assert.ok(typeof res.latitude === 'number');
                    assert.ok(typeof res.longitude === 'number');
                    assert.ok(typeof res.speed === 'number');
                    assert.ok(typeof res.accuracy === 'number');
                    assert.ok(typeof res.altitude === 'number');
                    assert.ok(typeof res.verticalAccuracy === 'number');
                    assert.ok(typeof res.horizontalAccuracy === 'number');
                    done();
                },
                fail: done
            };
            swan.getLocation(params);
        });

        it('异常调用:类型校验 #type not string', function (done) {
            let params = {
                type: false,
                altitude,
                fail: () => done(),
                success: () => done(shouldFail)
            };
            swan.getLocation(params);
        });

        it('异常调用:类型校验 #altitude not Boolean', function (done) {
            let params = {
                type,
                altitude: 100,
                fail: () => done(),
                success: () => done(shouldFail)
            };
            swan.getLocation(params);
        });
    });
});
