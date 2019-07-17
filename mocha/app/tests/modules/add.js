/*eslint-disable */
/**
 * @file demo page for apiDemo
 * @author wulinfei@baidu.com
 */

export default {
    register() {
        let that = this;
        let noop = () => {};

        describe('add10.7v', () => {
            // 跳出影响报告展示，单例测试请改成only
            describe.skip('chooseInvoiceTitle<跳出影响报告展示>', function () {
                it('异常调用 #complete has used', function (done) {
                    // this.timeout(20000);
                    setTimeout(() => {
                        let params = {
                            complete: () => done()
                        };
                        swan.chooseInvoiceTitle(params);
                    }, 4000);
                });

                it('正确调用:参数正确', function (done) {
                    // this.timeout(20000);
                    setTimeout(() => {
                        let params = {
                            fail: done,
                            success: () => done()
                        };
                        swan.chooseInvoiceTitle(params);
                    }, 4000);

                });

                it('异常调用 #succee not function', function (done) {
                    // this.timeout(20000);
                    setTimeout(() => {
                        let params = {
                            fail: done,
                            success: 100
                        };
                        swan.chooseInvoiceTitle(params);
                    }, 4000);
                });
            });

            // 跳出影响报告展示，单例测试请改成only
            describe.skip('chooseAddress<跳出影响报告展示>', function () {
                //需要时间限制
                it('异常调用 #complete has used', function (done) {
                    // this.timeout(20000);
                    setTimeout(() => {
                        let params = {
                            complete: () => done(),
                            succee: 100
                        };
                        swan.chooseAddress(params);
                    }, 4000);
                });

                it('正常调用 #参数正确', function (done) {
                    // this.timeout(20000);
                    setTimeout(() => {
                        let params = {
                            success: () => done(),
                            fail: done
                        };
                        swan.chooseAddress(params);
                    }, 4000);
                });

            });

            

            

            

            // 跳出影响报告展示，单例测试请改成only
            describe.skip('showConsole<跳出影响报告展示>', function () {
                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.showConsole(params);
                });

                it('正常调用: 参数正确', function (done) {
                    let params = {
                        success: () => done(),
                        fail: done
                    };
                    swan.showConsole(params);
                });
            });

            // 跳出影响报告展示，单例测试请改成only
            describe.skip('hideConsole<跳出影响报告展示>', function () {
                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.hideConsole(params);
                });

                it('正常调用: 参数正确', function (done) {
                    let params = {
                        success: () => done(),
                        fail: done
                    };
                    swan.hideConsole(params);
                });
            });

        })

        describe('add10.85v',()=>{
            describe('getFileInfo', function () {
                this.timeout(12000);
                let digestAlgorithm = 'md5';
                let filePath;
                setTimeout(() => {
                    swan.chooseVideo({
                        sourceType: ['camera'],
                        maxDuration: 60,
                        camera: 'back',
                        success: res => {
                            filePath = res.tempFilePath;
                        }
                    });
                }, 1000);

                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100,
                        filePath,
                        digestAlgorithm
                    };
                    swan.getFileInfo(params);
                });

                it('正确调用:参数正确', function (done) {
                    this.timeout(6000);
                    setTimeout(() => {
                        let params = {
                            filePath,
                            digestAlgorithm,
                            success: () => done(),
                            fail: done
                        };
                        swan.getFileInfo(params);
                    }, 4000);
                });

                it('异常调用:参数必填 #filePath not required', function (done) {
                    this.timeout(7000);
                    setTimeout(() => {
                        let params = {
                            digestAlgorithm,
                            fail: () => done(),
                            success: () => done(that.error.shouldFail)
                        };
                        swan.getFileInfo(params);
                    }, 5000);
                });

                it('异常调用:类型校验 #filePath not string', function (done) {
                    this.timeout(8000);
                    setTimeout(() => {
                        let params = {
                            filePath: 123,
                            digestAlgorithm,
                            fail: () => done(),
                            success: () => done(that.error.shouldFail)
                        };
                        swan.getFileInfo(params);
                    }, 6000);
                });

                it('异常调用:类型校验 #digestAlgorithm not string', function (done) {
                    this.timeout(9000);
                    setTimeout(() => {
                        let params = {
                            digestAlgorithm: 123,
                            filePath,
                            fail: () => done(),
                            success: () => done(that.error.shouldFail)
                        };
                        swan.getFileInfo(params);
                    }, 7000)
                });
            });

            describe('recommendSimilarProducts', function () {
                let data = {
                    'result_size': 20
                };

                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100,
                        data
                    };
                    swan.recommendSimilarProducts(params);
                });

                it('正确调用:参数正确', function (done) {
                    this.timeout(2000);

                    let params = {
                        data,
                        success: () => done(),
                        fail: done
                    };
                    swan.recommendSimilarProducts(params);
                });

                it('异常调用:参数必填 #data not required', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.recommendSimilarProducts(params);
                });

                it('异常调用:类型校验 #data not object', function (done) {
                    let params = {
                        data: 'qwer',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.recommendSimilarProducts(params);
                });
            });

            describe('recommendProducts', function () {
                let data = {
                    'result_size': 20
                };

                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100,
                        data
                    };
                    swan.recommendProducts(params);
                });

                it('正确调用:参数正确', function (done) {
                    this.timeout(2000);

                    let params = {
                        data,
                        success: () => done(),
                        fail: done
                    };
                    swan.recommendProducts(params);
                });

                it('异常调用:参数必填 #data not required', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.recommendProducts(params);
                });

                it('异常调用:类型校验 #data not object', function (done) {
                    let params = {
                        data: 'qwer',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.recommendProducts(params);
                });
            });

            describe.skip('closeSpringback', function () {

                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.closeSpringback(params);
                });

                it('正确调用:参数正确', function (done) {
                    this.timeout(2000);

                    let params = {
                        success: () => done(),
                        fail: done
                    };
                    swan.closeSpringback(params);
                });
            });

            describe('performpanel', function () {
                let opt = [{
                        slaveId: '670',
                        actionName: 'pageInitRenderStart',
                        timestamp: '123'
                    }, {
                        slaveId: '670',
                        actionName: 'pageInitRenderEnd',
                        timestamp: '456'
                    }];

                it('正确调用:参数正确', () => {
                    this.timeout(2000);
                    let params = {
                        name: 'performpanel',
                        data: {
                            data: opt
                        }
                    };
                    return boxjs.log(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用:类型校验 #data not array', function (done) {
                    let params = {
                        name: 'performpanel',
                        data: {
                            data: '123'
                        }
                    };
                    boxjs.log(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #data not required', function (done) {
                    let params = {
                        name: 'performpanel'
                    };
                    boxjs.log(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });
        
        })
    }
}