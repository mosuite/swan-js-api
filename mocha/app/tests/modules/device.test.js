/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author xiongyang@baidu.com
 */

export default {
    register() {
        let that = this;
        // 系统信息 网络状态 震动 打电话 剪贴板 截屏
        describe('api-device', function () {
            // 内存报警
            describe.skip('onMemoryWarning', function () {
                it('正确调用', function () {
                    swan.onMemoryWarning(function (res) {
                        expect(res).to.be.an('object');
                        expect(res.level).to.be.a('number');
                    });
                });
            });
            // 手机联系人
            describe.skip('addPhoneContact', function () {
                this.timeout(40000);
                it('正确调用', function () {
                    let param = {
                        firstName: 'affsdf',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    }
                    swan.addPhoneContact(param);
                });
                it('异常调用 名字为boolean', function (done) {
                    let param = {
                        firstName: true,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    }
                    swan.addPhoneContact(param);
                });
                it('异常调用 名字为‘’', function (done) {
                    let param = {
                        firstName: '',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    }
                    swan.addPhoneContact(param);
                });
                it('异常调用 只调用middleName', function (done) {
                    let param = {
                        middleName: '222',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    }
                    swan.addPhoneContact(param);
                });
            });

            describe('getSystemInfo', function () {
                this.timeout(1000);
                // 规则开始
                // it('正确调用:验证返回结果格式及各参数', function (done) {
                //     let params = {
                //         success(res) {
                //             function catchError() {
                //                 expect(res).to.be.an('object');
                //                 expect(res.brand).to.be.ok;
                //                 expect(res.model).to.be.ok;
                //                 expect(res.pixelRatio).to.be.ok;
                //                 expect(res.screenWidth).to.be.ok;
                //                 expect(res.screenHeight).to.be.ok;
                //                 expect(res.windowWidth).to.be.ok;
                //                 expect(res.windowHeight).to.be.ok;
                //                 expect(res.version).to.be.ok;
                //                 expect(res.platform).to.be.ok;
                //                 expect(res.system).to.be.ok;
                //                 expect(res.fontSizeSetting).to.be.ok;
                //                 expect(res.language).to.be.ok;
                //             }
                //             done(catchError());
                //         },
                //         fail: done
                //     };
                //     swan.getSystemInfo(params);
                // });
                // it('异常调用: #success not require1', function (done) {
                //     let params = {
                //         complete: done
                //     };
                //     swan.getSystemInfo(params);
                // });
                it('正常调用: #complete has used', function (done) {
                    let params = {
                        success: 100,
                        complete: done
                    };
                    swan.getSystemInfo(params);
                });
            });

            // getSystemInfoSync
            describe('getSystemInfoSync', function () {
                it('正确调用:验证返回结果格式及各参数', function () {
                    let res = swan.getSystemInfoSync();
                    expect(res).to.be.an('object');
                    expect(res.brand).to.be.ok;
                    expect(res.model).to.be.ok;
                    expect(res.pixelRatio).to.be.ok;
                    expect(res.screenWidth).to.be.ok;
                    expect(res.screenHeight).to.be.ok;
                    expect(res.windowWidth).to.be.ok;
                    expect(res.windowHeight).to.be.ok;
                    expect(res.version).to.be.ok;
                    expect(res.platform).to.be.ok;
                    expect(res.system).to.be.ok;
                    expect(res.fontSizeSetting).to.be.ok;
                    expect(res.language).to.be.ok;
                });
            });
            // getNetworkType
            describe('getNetworkType', function () {
                this.timeout(1000);
                // 规则开始
                it('正确调用:验证返回结果格式', function (done) {
                    let params = {
                        success(res) {
                            function catchError() {
                                expect(res).to.be.an('object');
                                expect(res.networkType).to.be.ok;
                            }
                            done(catchError());
                        },
                        fail: done
                    };
                    swan.getNetworkType(params);
                });
                it('异常调用: #success not require1', function (done) {
                    let params = {
                        complete: done
                    };
                    swan.getNetworkType(params);
                });
                it('正常调用: #complete has used', function (done) {
                    let params = {
                        success: 100,
                        complete: done
                    };
                    swan.getNetworkType(params);
                });

            });
            // onNetworkStatusChange 人工断网校验
            describe.skip('onNetworkStatusChange<需要人工断网>', function () {
                this.timeout(10000);
                // 规则开始
                it('正确调用', function (done) {
                    swan.onNetworkStatusChange(function (res) {
                        expect(res).to.be.an('object');
                        expect(res.isConnected).to.be.a('boolean');
                        expect(res.networkType).to.be.a('string');
                        swan.showToast({
                            title: 'res:' + JSON.stringify(res),
                            duration: 1000
                        });
                    });
                    setTimeout(() => {
                        done();
                    }, 10000);
                });
            });

            // 振动 长
            describe('vibrateLong', function () {
                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.vibrateLong(params);
                });

                it('正常调用: 参数正确', function (done) {
                    let params = {
                        success: () => done(),
                        fail: done
                    };
                    swan.vibrateLong(params);
                });
            });
            // vibrateShort
            describe('vibrateShort', function () {
                this.timeout(1000);
                it('正常调用', function (done) {
                    let params = {
                        success: () => done(),
                        fail: (error) => done(error)
                    };
                    swan.vibrateShort(params);
                });
                it('正确调用: #complete has used', function (done) {
                    let params = {
                        success() {},
                        complete: done
                    };
                    swan.vibrateShort(params);
                });
                it('异常调用: #complete has used', function (done) {
                    let params = {
                        success: 10,
                        complete: done
                    };
                    swan.vibrateShort(params);
                });

            });

            // makePhoneCall
            describe.skip('makePhoneCall<真机ok，模拟器报错>', function () {
                this.timeout(3000);
                it('正确调用', function (done) {
                    let params = {
                        phoneNumber: '10086',
                        success: () => done(),
                        fail: (error) => done(error)
                    };
                    swan.makePhoneCall(params);
                });

                it('正确调用: #complete has used', function (done) {
                    let params = {
                        phoneNumber: '10086',
                        complete: done
                    };
                    swan.makePhoneCall(params);
                });

                it('异常调用: #complete has used 没有phoneNumber参数 调用了fail', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail),
                        complete: done
                    };
                    swan.makePhoneCall(params);
                });

                it('异常调用：号码为空', function (done) {
                    let params = {
                        phoneNumber: '',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.makePhoneCall(params);
                });

                it('异常调用：号码长度过长', function (done) {
                    let params = {
                        phoneNumber: '21321312312312312312',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.makePhoneCall(params);
                });

                it('异常调用：号码为number', function (done) {
                    let params = {
                        phoneNumber: 10086,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.makePhoneCall(params);
                });

                it('异常调用：号码为字母字符串', function (done) {
                    let params = {
                        phoneNumber: 'asdasdasdasdasdasdasd',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.makePhoneCall(params);
                });

                it('异常调用：号码为 null', function (done) {
                    let params = {
                        phoneNumber: null,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.makePhoneCall(params);
                });

                it('异常调用：号码为object', function (done) {
                    let params = {
                        phoneNumber: {
                            name: 'panda'
                        },
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.makePhoneCall(params);
                });

                it('异常调用：号码为boolean', function (done) {
                    let params = {
                        phoneNumber: true,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.makePhoneCall(params);
                });

                it('异常调用:参数必填 #phoneNumber not required', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.makePhoneCall(params);
                });

            });

            // setClipboardData
            describe('setClipboardData', function () {
                this.timeout(1000);
                it('正常调用', function (done) {
                    let params = {
                        data: 'baiduTest',
                        success: () => done(),
                        fail: (error) => done(error)
                    };
                    swan.setClipboardData(params);
                });

                it('正确调用: #complete has used', function (done) {
                    let params = {
                        data: 'baiduTest',
                        complete: done
                    };
                    swan.setClipboardData(params);
                });

                it('异常调用: #complete has used', function (done) {
                    let params = {
                        success: 100,
                        complete: done
                    };
                    swan.setClipboardData(params);
                });

                it('异常调用：#data 传空值', function (done) {
                    let params = {
                        data: '',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setClipboardData(params);
                });

                it('异常调用：#data 为number', function (done) {
                    let params = {
                        data: [],
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setClipboardData(params);
                });

                it('异常调用：#data 为obj', function (done) {
                    let params = {
                        data: {
                            name: 'panda'
                        },
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setClipboardData(params);
                });

                it('异常调用：#data 为boolean', function (done) {
                    let params = {
                        data: true,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setClipboardData(params);
                });

                it('异常调用:参数必填 #data not required', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setClipboardData(params);
                });

            });

            // getClipboardData
            describe('getClipboardData', function () {
                this.timeout(1000);
                // 开始前准备，存入一个字符串
                beforeEach(() => {
                    swan.setClipboardData({
                        data: 'baiduTest'
                    });
                })
                it('正常调用：验证正确获取粘贴板内容与格式', function (done) {
                    let params = {
                        success(res) {
                            function catchError() {
                                expect(res.data).to.be.deep.equal('baiduTest');
                            }
                            done(catchError());
                        },
                        fail: (error) => done(error)
                    };
                    swan.getClipboardData(params);
                });
                it('正确调用: #complete has used', function (done) {
                    let params = {
                        success() {},
                        complete: done
                    };
                    swan.getClipboardData(params);
                });
                it('异常调用: #complete has used', function (done) {
                    let params = {
                        success: 100,
                        complete: done
                    };
                    swan.getClipboardData(params);
                });
            });


            // canIUse
            describe('caniuse', () => {
                it('执行swan.canIUse("view.hover-class") => true 结果正确', () => {
                    expect(swan.canIUse("view.hover-class")).to.be.ok;
                });
                it('执行swan.canIUse("scroll-view.scroll-x") => true 结果正确', () => {
                    expect(swan.canIUse('scroll-view.scroll-x')).to.be.ok;
                });
                it('执行swan.canIUse("cover-view") => true 结果正确', () => {
                    expect(swan.canIUse('cover-view')).to.be.ok;
                });
                it('执行swan.canIUse("button.size.default") => true 结果正确', () => {
                    expect(swan.canIUse('button.size.default')).to.be.ok;
                });
                it('执行swan.canIUse("input.hover-class") => true 结果正确', () => {
                    expect(swan.canIUse('button.size.default')).to.be.ok;
                });


                it('执行swan.canIUse("request.object.success.data") => true 结果正确', () => {
                    expect(swan.canIUse('request.object.success.data')).to.be.ok;
                });


                it('执行swan.canIUse("getSavedFileList") => true 结果正确', () => {
                    expect(swan.canIUse('getSavedFileList')).to.be.ok;
                });
                it('执行swan.canIUse("getSavedFileList.object") => true 结果正确', () => {
                    expect(swan.canIUse('getSavedFileList.object')).to.be.ok;
                });
                it('执行swan.canIUse("getSavedFileList.object.success") => true 结果正确', () => {
                    expect(swan.canIUse('getSavedFileList.object.success')).to.be.ok;
                });
                it('执行swan.canIUse("getSavedFileList.object.success.fileList.filePath") => true 结果正确', () => {
                    expect(swan.canIUse('getSavedFileList.object.success.fileList.filePath')).to.be.ok;
                });
                it('执行swan.canIUse("getSavedFileList.object.success.fileList") => true 结果正确', () => {
                    expect(swan.canIUse('getSavedFileList.object.success.fileList')).to.be.ok;
                });


                it('执行swan.canIUse("map") => true 结果正确', () => {
                    expect(swan.canIUse('map')).to.be.ok;
                });
                it('执行swan.canIUse("map.markers.id") => true 结果正确', () => {
                    expect(swan.canIUse('map.markers.id')).to.be.ok;
                });
                it('执行swan.canIUse("map.circles.color") => true 结果正确', () => {
                    expect(swan.canIUse('map.circles.color')).to.be.ok;
                });
                it('执行swan.canIUse("map.scale") => true 结果正确', () => {
                    expect(swan.canIUse('map.scale')).to.be.ok;
                });


                it('执行swan.canIUse("swiper-item") => true 结果正确', () => {
                    expect(swan.canIUse('swiper-item')).to.be.ok;
                });


                it('执行swan.canIUse("createAnimation.object.duration") => true 结果正确', () => {
                    expect(swan.canIUse('createAnimation.object.duration')).to.be.ok;
                });
                it('执行swan.canIUse("createAnimation.object.timingFunction.linear") => true 结果正确', () => {
                    expect(swan.canIUse('createAnimation.object.timingFunction.linear')).to.be.ok;
                });



                it('执行swan.canIUse("view.a") => false 结果正确', () => {
                    expect(swan.canIUse("view.a")).to.not.be.ok;
                });
                it('执行swan.canIUse("getSavedFileList.object.success") => false 结果正确', () => {
                    expect(swan.canIUse('getSavedFileList.object.succeaa')).to.not.be.ok;
                });
                it('执行swan.canIUse("getSavedFileList.object.success.fileList") => false 结果正确', () => {
                    expect(swan.canIUse('getSavedFileList.object.success.fileLi')).to.not.be.ok;
                });

                it('执行swan.canIUse("map.id") => false 结果正确', () => {
                    expect(swan.canIUse('map.id')).to.not.be.ok;
                });
                it('执行swan.canIUse("map.id.markers") => false 结果正确', () => {
                    expect(swan.canIUse('map.id.markers')).to.not.be.ok;
                });

                it('执行swan.canIUse("createAnimation.timingFunction") => false 结果正确', () => {
                    expect(swan.canIUse('createAnimation.timingFunction')).to.not.be.ok;
                });
            });
        });

        // 加速度计
        describe.skip('Accelerometer', function () {
            describe('onAccelerometerChange', function () {
                it('正确调用:参数正确', function () {
                    // this.timeout(12000);
                    let params = function (res) {
                        expect(res).to.be.an('object');
                    };
                    swan.onAccelerometerChange(params);
                });
            });

            describe('startAccelerometer', function () {
                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.startAccelerometer(params);
                });

                it('正常调用: 参数正确', function (done) {
                    let params = {
                        success: () => done(),
                        fail: done
                    };
                    swan.startAccelerometer(params);
                });
            });

            describe('stopAccelerometer', function () {
                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.stopAccelerometer(params);
                });

                it('正常调用: 参数正确', function (done) {
                    let params = {
                        success: () => done(),
                        fail: done
                    };
                    swan.stopAccelerometer(params);
                });
            });
        });

        // 屏幕亮度
        describe('Screen', function () {

            describe('setScreenBrightness', function () {
                let value = 0.5;
                it('异常调用 #complete has used value没填', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.setScreenBrightness(params);
                });

                it('正常调用: 参数正确', function (done) {
                    let params = {
                        value,
                        success: () => done(),
                        fail: done
                    };
                    swan.setScreenBrightness(params);
                });

                it('异常调用:参数必填 #value not required', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setScreenBrightness(params);
                });

                it('异常调用:参数必填 #value 超过范围 3432', function (done) {
                    let params = {
                        value: 3432,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setScreenBrightness(params);
                });

                it('异常调用:参数必填 #value 超过范围 -23', function (done) {
                    let params = {
                        value: -23,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setScreenBrightness(params);
                });

                it('异常调用:参数必填 #value 为空', function (done) {
                    let params = {
                        value: '',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setScreenBrightness(params);
                });

                it('异常调用:类型校验 #value not Number', function (done) {
                    let params = {
                        value: 'ww',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setScreenBrightness(params);
                });
            });

            describe('getScreenBrightness', function () {
                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.getScreenBrightness(params);
                });
                it('正常调用: 参数正确', function (done) {
                    let params = {
                        success(res) {
                            expect(res).to.be.an('object');
                            expect(res.value).to.be.deep.equal(0.5);
                            done();
                        },
                        fail: done
                    };
                    swan.getScreenBrightness(params);
                });
            });

            describe('setKeepScreenOn', function () {
                let keepScreenOn = false;
                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.setKeepScreenOn(params);
                });

                it('正常调用: 参数正确', function (done) {
                    let params = {
                        keepScreenOn,
                        success: () => done(),
                        fail: done
                    };
                    swan.setKeepScreenOn(params);
                });

                it('异常调用:参数必填 #keepScreenOn not required', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setKeepScreenOn(params);
                });

                it('异常调用:类型校验 #keepScreenOn 为"33"', function (done) {
                    let params = {
                        keepScreenOn: '33',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setKeepScreenOn(params);
                });

                it('异常调用:类型校验 #keepScreenOn 为"true"', function (done) {
                    let params = {
                        keepScreenOn: 'true',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setKeepScreenOn(params);
                });
            });
        });

        // 罗盘
        describe.skip('Compass', function () {

            describe('onCompassChange', function () {
                it('正确调用:参数正确', function (done) {
                    // this.timeout(5000);
                    let params = function (res) {
                        done();
                    };
                    swan.onAccelerometerChange(params, done);
                });
            });

            describe('startCompass', function () {
                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.startCompass(params);
                });

                it('正常调用: 参数正确', function (done) {
                    let params = {
                        success: () => done(),
                        fail: done
                    };
                    swan.startCompass(params);
                });
            });

            describe('stopCompass', function () {
                it('异常调用 #complete has used', function (done) {
                    let params = {
                        complete: () => done(),
                        success: 100
                    };
                    swan.stopCompass(params);
                });

                it('正常调用: 参数正确', function (done) {
                    let params = {
                        success: () => done(),
                        fail: done
                    };
                    swan.stopCompass(params);
                });
            });
        });

        // 扫码
        describe.skip('scanCode', function () {
            let onlyFromCamera = true;
            let scanType = ['qrCode'];

            it('异常调用 #complete has used', function (done) {
                this.timeout(4000);
                setTimeout(() => {
                    let params = {
                        complete: () => done(),
                        success: 100,
                        onlyFromCamera,
                        scanType
                    };
                    swan.scanCode(params);
                }, 2000);
            });

            it('正确调用:参数正确', function (done) {
                this.timeout(7000);
                setTimeout(() => {
                    let params = {
                        onlyFromCamera,
                        scanType,
                        success: () => done(),
                        fail: done
                    };
                    swan.scanCode(params);
                }, 5000);
            });

            it('异常调用:类型校验 #onlyFromCamera not Boolean', function (done) {
                this.timeout(8000);
                setTimeout(() => {
                    let params = {
                        onlyFromCamera: 'qwer',
                        scanType,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.scanCode(params);
                }, 6000);
            });

            it('异常调用:类型校验 #scanType not array', function (done) {
                this.timeout(11000);
                setTimeout(() => {
                    let params = {
                        onlyFromCamera,
                        scanType: 'qwer',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.scanCode(params);
                }, 9000);
            });
        });
    }
};