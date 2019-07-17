/*eslint-disable */
/**
 * @file demo page for apiDemo
 * @author wulinfei@baidu.com
 */
export default {
    register() {
        let that = this;
        let noop = () => {};

        describe('getLocation', function () {

            let type = 'wgs84';
            let altitude = true;

            it('正确调用:参数正确', function (done) {
                this.timeout(15000);
                let params = {
                    type,
                    altitude,
                    success: (res) => {
                        function catchError() {
                            expect(res).to.be.an('object');
                            expect(res.latitude).to.be.a('number');
                            expect(res.longitude).to.be.a('number');
                            expect(res.speed).to.be.a('number');
                            expect(res.accuracy).to.be.a('number');
                            expect(res.altitude).to.be.a('number');
                            expect(res.verticalAccuracy).to.be.a('number');
                            expect(res.horizontalAccuracy).to.be.a('number');
                        }
                        done(catchError());
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
                    success: () => done(that.error.shouldFail)
                };
                swan.getLocation(params);
            });

            it('异常调用:类型校验 #altitude not Boolean', function (done) {
                let params = {
                    type,
                    altitude: 100,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.getLocation(params);
            });
        });

        describe('openLocation', function () {
            it.skip('正确调用:参数正确<单测通过，影响展示>', function (done) {
                let params = {
                    latitude: 0,
                    longitude: 0,
                    scale: 18,
                    success: () => done(),
                    fail: (err) => done(err)
                };
                swan.openLocation(params);
            });
            
            it('异常调用:参数必填 #latitude not required', function (done) {
                let params = {
                    longitude: 0,
                    scale: 18,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openLocation(params);
            });

            it('异常调用:类型校验 #longitude not required', function (done) {
                let params = {
                    latitude: 0,
                    scale: 18,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openLocation(params);
            });

            it('异常调用:类型校验 #latitude 超出指定范围', function (done) {
                let params = {
                    latitude: 222,
                    longitude: 0,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openLocation(params);
            });

            it('异常调用:类型校验 #latitude not Float<单测不通过所以影响展示>', function (done) {
                let params = {
                    latitude: [],
                    longitude: 0,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openLocation(params);
            });

            it('异常调用:类型校验 #longitude 超出指定范围', function (done) {
                let params = {
                    latitude: 0,
                    longitude: 222,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openLocation(params);
            });

            it('异常调用:类型校验 #longitude not Float', function (done) {
                let params = {
                    latitude: 0,
                    longitude: [],
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openLocation(params);
            });

            it.skip('异常调用:类型校验 #scale not INT<单测不通过所以影响展示>', function (done) {
                let params = {
                    latitude: 0,
                    longitude: 0,
                    scale: [],
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openLocation(params);
            });

            it.skip('异常调用:类型校验 #name not String<单测不通过所以影响展示>', function (done) {
                let params = {
                    latitude: 0,
                    longitude: 0,
                    name: [],
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openLocation(params);
            });

            it.skip('异常调用:类型校验 #address not String<单测不通过所以影响展示>', function (done) {
                let params = {
                    latitude: 0,
                    longitude: 0,
                    address: [],
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openLocation(params);
            });
        });

    }
}