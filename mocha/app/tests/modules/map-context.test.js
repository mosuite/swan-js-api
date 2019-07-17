/*eslint-disable */
/**
 * @file demo page for apiDemo
 * @author wulinfei@baidu.com
 */
export default {
    register() {
        let that = this;

        describe.skip('mapContext<需要map组件支撑>', function () {
            describe('createMapContext', function () {
                it('正确调用：参数正确', function () {
                    that.mapContext = swan.createMapContext('myMap');
                    expect(that.mapContext).to.be.ok;
                });
            });

            describe('createMapContext: getCenterLocation', function () {
                it('正确调用：参数正确', function (done) {
                    let params = {
                        success: (res) => {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.latitude).to.be.a('number');
                                expect(res.longitude).to.be.a('number');
                            }
                            done(catchError());
                        },
                        fail: done
                    };
                    this.mapContext.getCenterLocation(params);
                });
            });

            describe('createMapContext: translateMarker', function () {
                it('正确调用：参数正确', function (done) {
                    let params = {
                        markerId: 0,
                        autoRotate: true,
                        duration: 1000,
                        destination: {
                            latitude: 23.10229,
                            longitude: 113.3345211
                        },
                        animationEnd() {
                            done();
                        },
                        fail: done
                    };
                    this.mapContext.translateMarker(params).to.not.throw(Error);
                });

                it('异常调用：markerId not required', function (done) {
                    let params = {
                        autoRotate: true,
                        duration: 1000,
                        destination: {
                            latitude: 23.10229,
                            longitude: 113.3345211
                        },
                        animationEnd() {
                            done(that.error.shouldFail);
                        },
                        fail: () => done()
                    };
                    this.mapContext.translateMarker(params);
                });

                it('异常调用：duration not required', function (done) {
                    let params = {
                        markerId: 0,
                        autoRotate: true,
                        duration: 1000,
                        animationEnd() {
                            done(that.error.shouldFail);
                        },
                        fail: () => done()
                    };
                    this.mapContext.translateMarker(params);
                });

                it('异常调用：autoRotate not required', function (done) {
                    let params = {
                        markerId: 0,
                        duration: 1000,
                        destination: {
                            latitude: 23.10229,
                            longitude: 113.3345211
                        },
                        animationEnd() {
                            done(that.error.shouldFail);
                        },
                        fail: done
                    };
                    this.mapContext.translateMarker(params);
                });

                it('异常调用：markerId not number', function (done) {
                    let params = {
                        markerId: false,
                        autoRotate: true,
                        duration: 1000,
                        destination: {
                            latitude: 23.10229,
                            longitude: 113.3345211
                        },
                        animationEnd() {
                            done(that.error.shouldFail);
                        },
                        fail: () => done()
                    };
                    this.mapContext.translateMarker(params);
                });

                it('异常调用：autoRotate not Boolean', function (done) {
                    let params = {
                        markerId: 0,
                        autoRotate: [],
                        duration: 1000,
                        destination: {
                            latitude: 23.10229,
                            longitude: 113.3345211
                        },
                        animationEnd() {
                            done(that.error.shouldFail);
                        },
                        fail: () => done()
                    };
                    this.mapContext.translateMarker(params);
                });

                it('异常调用：destination not Object', function (done) {
                    let params = {
                        markerId: 0,
                        autoRotate: true,
                        duration: 1000,
                        destination: false,
                        animationEnd() {
                            done(that.error.shouldFail);
                        },
                        fail: () => done()
                    };
                    this.mapContext.translateMarker(params);
                });

                it('异常调用：duration not number', function (done) {
                    let params = {
                        markerId: 0,
                        autoRotate: true,
                        duration: [],
                        destination: {
                            latitude: 23.10229,
                            longitude: 113.3345211
                        },
                        animationEnd() {
                            done(that.error.shouldFail);
                        },
                        fail: () => done()
                    };
                    this.mapContext.translateMarker(params);
                });
            });

            describe('createMapContext: includePoints', function () {
                it('正确调用：参数正确', function () {
                    let params = {
                        padding: [10],
                        points: [{
                            latitude: 23,
                            longitude: 113.3
                        }, {
                            latitude: 23,
                            longitude: 113.3345211
                        }]
                    };
                    this.mapContext.includePoints(params).to.not.throw(Error);
                });
            });

            describe('createMapContext: moveToLocation', function () {
                it('正确调用：参数正确', function () {
                    let params = {
                        padding: [10],
                        points: [{
                            latitude: 23,
                            longitude: 113.3
                        }, {
                            latitude: 23,
                            longitude: 113.3345211
                        }]
                    };
                    this.mapContext.moveToLocation(params).to.not.throw(Error);
                });
            });

            describe('createMapContext: getRegion', function () {
                it('正确调用：参数正确', function (done) {
                    let params = {
                        success: (res) => {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.southwest).to.be.a('number');
                                expect(res.northeast).to.be.a('number');
                            }
                            done(catchError());
                        },
                        fail: done
                    };
                    this.mapContext.getRegion(params);
                });
            });

            describe('createMapContext: getScale', function () {
                it('正确调用：参数正确', function (done) {
                    let params = {
                        success: (res) => {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.scale).to.be.a('number');
                            }
                            done(catchError());
                        },
                        fail: done
                    };
                    this.mapContext.getScale(params);
                });
            });

        });
    }
}