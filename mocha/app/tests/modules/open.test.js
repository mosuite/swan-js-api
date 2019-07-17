/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author xiongyang@baidu.com
 */
export default {
    register() {
        let that = this;
        describe('api-device', function () {
            // login 真机测试
            describe('login<单测均通过，跳出影响展示>', function () {
                it('正常调用', function (done) {
                    this.timeout(200000)
                    let params = {
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.code).to.be.a('string');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.login(params);
                });
            });

            // checkSession
            describe.skip('checkSession<需要登录，跳出页面>', function () {
                it('正常调用', function (done) {
                    let params = {
                        success: () => done(),
                        fail: (error) => done(error)
                    };
                    swan.checkSession(params);
                });
            });

            // authorize
            describe('authorize<用户授权问题>', function () {
                let scope = 'scope.userInfo';
                it('正常调用', function (done) {
                    this.timeout(200000)
                    let params = {
                        scope,
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.errMsg).to.be.a('string');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.authorize(params);
                });
                it('异常调用：#scope length equal 0', function (done) {
                    let params = {
                        scope: '',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.authorize(params);
                });
                it('异常调用：#scope no String', function (done) {
                    let params = {
                        scope: [],
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.authorize(params);
                });
                it('异常调用：#scope no require', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.authorize(params);
                });
            });

            //getSwanId
            describe('getSwanId', () => {
                it('正确调用', function (done) {
                    this.timeout(15000);
                    let params = {
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.errno).to.be.an('string');
                                expect(res.errmsg).to.be.an('string');
                                expect(res.data).to.be.an('object');
                                expect(res.data.swanid).to.be.an('string');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.getSwanId(params);
                });
            });


            // getUserInfo
            describe.skip('getUserInfo<需要登录，跳出页面>', function () {
                it('正常调用', function (done) {
                    let params = {
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.userinfo).to.be.an('object');
                                expect(res.data).to.be.a('string');
                                expect(res.iv).to.be.a('string');
                                expect(res.userinfo.headimgurl).to.be.a('string');
                                expect(res.userinfo.nickname).to.be.a('string');
                                expect(res.userinfo.sex).to.be.a('string');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.getUserInfo(params);
                });
            });

            // openSetting
            describe.skip('openSetting<单测均通过，跳出影响展示>', function () {  
                it('正常调用', function (done) {
                    this.timeout(50000);
                    let params = {
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.authSetting).to.be.an('object');
                                expect(res.authSetting['scope.userInfo']).to.be.a('boolean');
                                expect(res.authSetting['scope.userLocation']).to.be.a('boolean');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.openSetting(params);
                });
            });

            // getSetting
            describe('getSetting', function () {
                it('正常调用', function (done) {
                    this.timeout(50000);
                    let params = {
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.authSetting).to.be.an('object');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.getSetting(params);
                });
            });

            // requestPayment 真机测试 无测试参数orderInfo
            describe.skip('requestPayment<需真机>', function () {
                it('正常调用', function (done) {
                    let params = {
                        orderInfo: {},
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.requestPayment(params);
                });
                it('异常调用：参数类型 #success not required', function (done) {
                    let params = {
                        orderInfo: {},
                        fail: () => done(),
                    };
                    swan.requestPayment(params);
                });
                it('异常调用:参数必填 #orderInfo not required', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.requestPayment(params);
                });
                it('异常调用:参数必填 #orderInfo number', function (done) {
                    let params = {
                        orderInfo: 123,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.requestPayment(params);
                });
                it('异常调用:参数必填 #orderInfo bollean', function (done) {
                    let params = {
                        orderInfo: true,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.requestPayment(params);
                });
            });

            // requestAliPayment 需要orderInfo测试数据
            describe.skip('requestAliPayment<需真机>', function () {
                it('正常调用', function (done) {
                    let params = {
                        orderInfo: 'test',
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.requestAliPayment(params);
                });
                it('异常调用:参数类型 #orderInfo not string', function (done) {
                    let params = {
                        orderInfo: [],
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.requestAliPayment(params);
                });
                it('异常调用:参数类型 #orderInfo not required', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.requestAliPayment(params);
                });
            });

            // requestPolymerPayment
            describe.skip('requestPolymerPayment<跳出页面>', function () {
                // this.timeout(50000);
                let orderInfo;
                let bannedChannels = ['ApplePay'];
                // 规则开始
                beforeEach((done) => {
                    swan.request({
                        url: 'https://mbd.baidu.com/ma/nuomi/createorder',
                        success: res => {
                            let data = res.data;
                            if (data.errno !== 0) {
                                return;
                            };
                            orderInfo = data.data;
                            done();
                        },
                    })
                })
                it('正常调用', function (done) {
                    let params = {
                        orderInfo,
                        bannedChannels,
                        success: () => done(),
                        fail: (error) => done(error)
                    };
                    swan.requestPolymerPayment(params);
                })

                it('异常调用: #orderInfo no require', function (done) {
                    let params = {
                        bannedChannels,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.requestPolymerPayment(params);
                });
                it('异常调用: #orderInfo no object', function (done) {
                    let params = {
                        orderInfo: 123,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.requestPolymerPayment(params);
                });
                it('异常调用: #bannedChannels no StringArray', function (done) {
                    let params = {
                        bannedChannels: 'test',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.requestPolymerPayment(params);
                });
                it('异常调用: #complete has used', function (done) {
                    let params = {
                        success: 100,
                        complete: done
                    };
                    swan.requestPolymerPayment(params);
                });
            });

            // navigateToMiniProgram 真机侧试 需有相关小程序appid参数
            describe.skip('navigateToMiniProgram<需真机>', function () {
                // 测试数据
                let appid = '1hAF7G0O92Kd8p2TET6m7UjBhkbnzebE';
                let path = 'pages/index/index';
                let extraData = {
                    from: 'baidu'
                };
                // 开始测试
                it('正常调用', function (done) {
                    this.timeout(50000)
                    let params = {
                        success(res) {
                            appid,
                            path,
                            extraData,
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.errMsg).to.be.a('string');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.navigateToMiniProgram(params);
                });
                it('正常调用: #path no length', function (done) {
                    let params = {
                        appid,
                        path: '',
                        extraData,
                        success: () => done()
                    };
                    swan.navigateToMiniProgram(params);
                });

                it('异常调用: #appid no length', function (done) {
                    let params = {
                        appid: '',
                        path,
                        extraData,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToMiniProgram(params);
                });
                it('异常调用: #appid no num', function (done) {
                    let params = {
                        appid: [12, 3],
                        path,
                        extraData,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToMiniProgram(params);
                });
                it('异常调用: #appid no require', function (done) {
                    let params = {
                        path,
                        extraData,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToMiniProgram(params);
                });
                it('异常调用: #path no require', function (done) {
                    let params = {
                        appid,
                        extraData,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToMiniProgram(params);
                });
                it('异常调用: #path no string', function (done) {
                    let params = {
                        appid,
                        path: [],
                        extraData,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToMiniProgram(params);
                });

                it('异常调用: #extraData no extraData', function (done) {
                    let params = {
                        appid,
                        path,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToMiniProgram(params);
                });
                it('异常调用: #extraData no obj', function (done) {
                    let params = {
                        appid,
                        path,
                        extraData: 'asd',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToMiniProgram(params);
                });
            });

            // navigateBackMiniProgram  真机测试
            describe.skip('navigateBackMiniProgram<需真机>', function () {
                it('正常调用', function (done) {
                    let params = {
                        extraData: {
                            to: 'baidu'
                        },
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.errMsg).to.be.a('string');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.navigateBackMiniProgram(params);
                });
                it('异常调用: #extraData no require', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateBackMiniProgram(params);
                });
                it('异常调用: #extraData no obj', function (done) {
                    let params = {
                        extraData: 123,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateBackMiniProgram(params);
                });
            });

             // navigateToSmartProgram 真机侧试 需有相关小程序appid参数
            describe.skip('navigateToSmartProgram<需真机>', function () {
                // 测试数据
                let appid = '1hAF7G0O92Kd8p2TET6m7UjBhkbnzebE';
                let path = 'pages/index/index';
                let extraData = {
                    from: 'baidu'
                };
                // 开始测试
                it('正常调用', function (done) {
                    this.timeout(50000)
                    let params = {
                        success(res) {
                            appid,
                            path,
                            extraData,
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.errMsg).to.be.a('string');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.navigateToSmartProgram(params);
                });
                it('正常调用: #path no length', function (done) {
                    let params = {
                        appid,
                        path: '',
                        extraData,
                        success: () => done()
                    };
                    swan.navigateToSmartProgram(params);
                });

                it('异常调用: #appid no length', function (done) {
                    let params = {
                        appid: '',
                        path,
                        extraData,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToSmartProgram(params);
                });
                it('异常调用: #appid no num', function (done) {
                    let params = {
                        appid: [12, 3],
                        path,
                        extraData,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToSmartProgram(params);
                });
                it('异常调用: #appid no require', function (done) {
                    let params = {
                        path,
                        extraData,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToSmartProgram(params);
                });
                it('异常调用: #path no require', function (done) {
                    let params = {
                        appid,
                        extraData,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToSmartProgram(params);
                });
                it('异常调用: #path no string', function (done) {
                    let params = {
                        appid,
                        path: [],
                        extraData,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToSmartProgram(params);
                });

                it('异常调用: #extraData no extraData', function (done) {
                    let params = {
                        appid,
                        path,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToSmartProgram(params);
                });
                it('异常调用: #extraData no obj', function (done) {
                    let params = {
                        appid,
                        path,
                        extraData: 'asd',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateToSmartProgram(params);
                });
                it('异常调用：参数类型 #success must function', function (done) {
                    let params = {
                        appid,
                        path,
                        extraData,
                        success: 100,
                        fail: () => done(),
                    };
                    swan.navigateToSmartProgram(params);
                });
            });

            // navigateBackSmartProgram  真机测试
            describe.skip('navigateBackSmartProgram<需真机>', function () {
                it('正常调用', function (done) {
                    let params = {
                        extraData: {
                            to: 'baidu'
                        },
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.errMsg).to.be.a('string');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.navigateBackSmartProgram(params);
                });
                it('异常调用: #extraData no require', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateBackSmartProgram(params);
                });
                it('异常调用: #extraData no obj', function (done) {
                    let params = {
                        extraData: 123,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.navigateBackSmartProgram(params);
                });
                it('异常调用：参数类型 #success must function', function (done) {
                    let params = {
                        extraData: {
                            to: 'baidu'
                        },
                        success: 100,
                        fail: () => done(),
                    };
                    swan.navigateBackSmartProgram(params);
                });
            });
        })

    }
}