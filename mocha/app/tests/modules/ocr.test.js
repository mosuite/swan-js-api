/**
 * @file file page for ai.ocr
 * @author gaoxiang17@baidu.com
 *         wuxiaopan(wuxiaopan@baidu.com)
 */
export default {
    register() {
        let that = this;

        describe('ocrIdCard', function () {
            let detect_direction = 'true';
            let id_card_side = 'front';
            let image = '';
            let detect_risk = 'true';
            before(function (done) {
                this.timeout(10000);
                swan.downloadFile({
                    url: 'https://ws4.sinaimg.cn/large/0069RVTdly1fu8ammy15hj30g40c30tg.jpg',
                    success(res) {
                        image = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用:参数正确 #validate image', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    detect_direction,
                    detect_risk,
                    success(res) {
                        console.log('ocrIdCard', res);
                        function catchError() {
                            try {
                                expect(res.direction).to.be.a('number');
                                expect(res.image_status).to.be.a('string');
                                expect(res.risk_type).to.be.a('string');
                                // expect(res.risk_type).to.equal('normal');
                                expect(res.edit_tool).to.not.exist;
                                expect(res.log_id).to.be.a('number');
                                expect(res.words_result_num).to.be.a('number');
                                expect(res.words_result).to.be.an('object');
                                for(let word in res.words_result) {
                                    expect(res.words_result[word].location).to.be.an('object');
                                    expect(res.words_result[word].location).to.have.property('width');
                                    expect(res.words_result[word].location).to.have.property('height');
                                    expect(res.words_result[word].location).to.have.property('top');
                                    expect(res.words_result[word].location).to.have.property('left');
                                    for (let props in res.words_result[word].location) {
                                        expect(res.words_result[word].location[props]).to.be.a('number');
                                    }
                                    expect(res.words_result[word].words).to.be.a('string');
                                }
                            } catch(e) {
                                return e;
                            }
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.ai.ocrIdCard(params);
            });
            it('正确调用:参数正确 #validate detect_direction = false & detect_risk = false', function (done) {
                this.timeout(5000);
                let params = {
                    detect_direction: 'false',
                    image,
                    detect_risk: 'false',
                    success(res) {
                        function catchError() {
                            try {
                                // expect(res.direction).to.not.exist;
                                expect(res.risk_type).to.not.exist;
                            } catch(e) {
                                return e;
                            }
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.ai.ocrIdCard(params);
            });
            it('正确调用:参数正确 #validate detect_direction & id_card_side & detect_risk', function (done) {
                this.timeout(5000);
                let params = {
                    detect_direction,
                    id_card_side,
                    image,
                    detect_risk,
                    success: res => done(),
                    fail: done
                };
                swan.ai.ocrIdCard(params);
            });
            it('错误调用：必填参数 #image should be required', function(done) {
                let params = {
                    success(res) {
                        done(that.error.shouldFail);
                    },
                    fail: () => done(),
                }
                swan.ai.ocrIdCard(params);
            });
            // FIXME: 传string array 会导致崩溃，待问题修复后放开，后面几个skip一样的问题
            it.skip('错误调用：参数类型 #image should be string', function (done) {
                let params = {
                    image: [image],
                    success: res => done(that.error.shouldFail),
                    fail: done()
                }
                swan.ai.ocrIdCard(params);
            });
            it('错误调用：参数类型 #detect_direction should be false|true', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    detect_direction: 'ture',
                    success: res => done(that.error.shouldFail),
                    fail: () => done()
                }
                swan.ai.ocrIdCard(params);
            });
            it('错误调用：参数类型 #id_card_side should be string', function (done) {
                let params = {
                    image,
                    id_card_side: [id_card_side],
                    detect_direction: 'false',
                    success: res => done(that.error.shouldFail),
                    fail: () => done()
                }
                swan.ai.ocrIdCard(params);
            });
            it('错误调用：参数类型 #id_card_side should be front|back', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    id_card_side: 'fron',
                    success: res => done(that.error.shouldFail),
                    fail: () => done()
                }
                swan.ai.ocrIdCard(params);
            });
            it('错误调用：参数类型 #detect_risk should be false|true', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    detect_risk: 'ture',
                    success: res => done(that.error.shouldFail),
                    fail: () => done()
                }
                swan.ai.ocrIdCard(params);
            });
        });

        describe('ocrBankCard', function () {
            let image = '';
            before(function (done) {
                this.timeout(10000);
                swan.downloadFile({
                    // TODO: 可能会有版权问题
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534226784897&di=907150b02a2c6d0c45625efac3225821&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2FC%2FCF%2FCF41F38B2A9C6B3254AD4B1D55482028.jpg',
                    success(res) {
                        image = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用:参数正确 #validate image', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    success(res) {
                        function catchError() {
                            try {
                                expect(res.log_id).to.be.a('number');
                                expect(res.result).to.be.an('object');
                                expect(res.result.bank_card_number).to.be.a('string');
                                expect(res.result.bank_name).to.be.a('string');
                                expect(res.result.bank_card_type).to.be.a('number');

                                expect([0, 1, 2]).to.include(res.result.bank_card_type);
                            } catch (e) {
                                return e;
                            }
                        }
                        done(catchError());
                    },
                    fail: (error) => done(error)
                };
                swan.ai.ocrBankCard(params);
            });
            it('错误调用：必填参数 #image should be required', function (done) {
                let params = {
                    success: () => done(that.error.shouldFail),
                    fail: () => done(),
                }
                swan.ai.ocrBankCard(params);
            });
            it.skip('错误调用：参数类型 #image should be string', function (done) {
                let params = {
                    image: [image],
                    success: () => done(that.error.shouldFail),
                    fail: () => done(),
                }
                swan.ai.ocrBankCard(params);
            });
        });

        describe('ocrDrivingLicense', function () {
            let image = '';
            let detect_direction = 'true';
            let unified_valid_period = 'true';
            before(function (done) {
                this.timeout(10000);
                swan.downloadFile({
                    url: 'https://ws4.sinaimg.cn/large/0069RVTdly1fu8anpn4mdj30al07974k.jpg',
                    success(res) {
                        image = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用:参数正确 #validate image', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    success(res) {
                        function catchError() {
                            try {
                                expect(res.log_id).to.be.a('number');
                                expect(res.words_result_num).to.be.a('number');
                                expect(res.words_result).to.be.a('object');
                                for (let word in res.words_result) {
                                    expect(res.words_result[word].words).to.be.a('string');
                                }
                            } catch (e) {
                                return e;
                            }
                        }
                        done(catchError());
                    },
                    fail: (error) => done(error)
                };
                swan.ai.ocrDrivingLicense(params);
            });

            it('正确调用:参数正确 #validate image & detect_direction = false & unified_valid_period = false', function (done) {
                let params = {
                    image,
                    detect_direction: 'false',
                    unified_valid_period: 'false',
                    success(res) {
                        try {
                            console.log('ocrDrivingLicense', JSON.stringify(res));
                            expect(res.log_id).to.be.a('number');
                            // expect(res.direction).to.not.exist;
                            expect(res.words_result_num).to.be.a('number');
                            expect(res.words_result).to.be.a('object');
                            for (let word in res.words_result) {
                                expect(res.words_result[word].words).to.be.a('string');
                            }
                            done();
                        } catch (e) {
                            done(e);
                        }
                    },
                    fail: (error) => done(error)
                };
                swan.ai.ocrDrivingLicense(params);
            });
            it('正确调用:参数正确 #validate image & detect_direction = true & unified_valid_period = true', function (done) {
                let params = {
                    image,
                    detect_direction,
                    unified_valid_period,
                    success(res) {
                        try {
                            console.log('ocrDrivingLicense', JSON.stringify(res));
                            expect(res.log_id).to.be.a('number');
                            expect(res.words_result_num).to.be.a('number');
                            expect(res.words_result).to.be.a('object');
                            for (let word in res.words_result) {
                                expect(res.words_result[word].words).to.be.a('string');
                            }
                            done();
                        } catch (e) {
                            done(e);
                        }
                    },
                    fail: (error) => done(error)
                };
                swan.ai.ocrDrivingLicense(params);
            });
            it('错误调用:必填参数 #image should be required', function (done) {
                let params = {
                    success: () => done(that.error.shouldFail),
                    fail: () => done(),
                }
                swan.ai.ocrDrivingLicense(params);
            });
            it.skip('错误调用:参数类型 #image should be string', function (done) {
                let params = {
                    image: [image],
                    success: () => done(that.error.shouldFail),
                    fail: () => done(),
                }
                swan.ai.ocrDrivingLicense(params);
            });
        });

        describe('ocrVehicleLicense', function () {
            let image = '';
            let detect_direction = 'true';
            let accuracy = 'normal';

            function catchError(res) {
                try {
                    console.log('ocrDrivingLicense', JSON.stringify(res));
                    expect(res.log_id).to.be.a('number');
                    // expect(res.direction).to.not.exist;
                    expect(res.words_result_num).to.be.a('number');
                    expect(res.words_result).to.be.a('object');
                    for (let word in res.words_result) {
                        expect(res.words_result[word].words).to.be.a('string');
                    }
                } catch (e) {
                    return e;
                }
            }

            before(function (done) {
                this.timeout(10000);
                swan.downloadFile({
                    url: 'https://ws2.sinaimg.cn/large/0069RVTdly1fu8an5qsjzj30hs0dctad.jpg',
                    success(res) {
                        image = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用:参数正确 #validate image', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    success(res) {
                        done(catchError(res));
                    },
                    fail: (error) => done(error)
                };
                swan.ai.ocrVehicleLicense(params);
            });
            it('正确调用:参数正确 #validate image & detect_direction = false & accuracy = "others"', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    detect_direction: 'false',
                    accuracy: 'others',
                    success(res) {
                        done(catchError(res));
                    },
                    fail: (error) => done(error)
                };
                swan.ai.ocrVehicleLicense(params);
            });
            it('正确调用:参数正确 #validate image & detect_direction = true & accuracy = "normal"', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    detect_direction,
                    accuracy,
                    success(res) {
                        done(catchError(res));
                    },
                    fail: (error) => done(error)
                };
                swan.ai.ocrVehicleLicense(params);
            });
            it('错误调用:必填参数 #image should be required', function (done) {
                let params = {
                    success: () => done(that.error.shouldFail),
                    fail: () => done(),
                }
                swan.ai.ocrVehicleLicense(params);
            });
            it.skip('错误调用:参数类型 #image should be string', function (done) {
                let params = {
                    image: [image],
                    success: () => done(that.error.shouldFail),
                    fail: () => done(),
                }
                swan.ai.ocrVehicleLicense(params);
            });
            it.skip('错误调用:参数类型 #accuracy should be string', function (done) {
                let params = {
                    image: image,
                    accuracy: [accuracy],
                    success: () => done(that.error.shouldFail),
                    fail: () => done(),
                }
                swan.ai.ocrVehicleLicense(params);
            });
        });
    }
}
