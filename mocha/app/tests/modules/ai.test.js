/**
 * @file file page for ai.ocr
 * @author wuxiaopan@baidu.com
 */

/* globals swan, before */

export default {
    register() {
        describe('carClassify', function () {
            let image = '';

            before(function (done) {
                this.timeout(5000);
                swan.downloadFile({
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533272788247&di=7d547e1a4aac605737aafb500c21e501&imgtype=0&src=http%3A%2F%2Fwww.cnr.cn%2F2013qcpd%2Fjkxc%2F201402%2FW020140207286212557623.jpg',
                    success(res) {
                        image = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    success(res) {
                        console.log('carClassify', res);
                        function catchError() {
                            try {
                                expect(res).to.be.a('object');
                                expect(res.log_id).to.be.a('number');
                                expect(res.color_result).to.be.a('string');
                                expect(res.location_result).to.be.a('object');
                                expect(res.result).to.be.an('array');
                                let item = res.result[0];
                                expect(item.name).to.be.a('string');
                                expect(item.score).to.be.an('number');
                                expect(item.year).to.be.a('string');
                            } catch (e) {
                                return e;
                            }
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.ai.carClassify(params);
            });
        });

        describe('dishClassify', function () {
            let image = '';

            before(function (done) {
                this.timeout(5000);
                swan.downloadFile({
                    url: 'http://www.gsccp.com/wp-content/uploads/2015/11/%E9%95%BF%E6%B2%99%E8%8F%9C%E8%B0%B1%E6%91%84%E5%BD%B1.%E3%80%90%E9%9D%92%E5%B9%B4%E9%A4%90%E5%8E%85%E3%80%91%E6%9C%80%E6%96%B0%E8%8F%9C%E5%93%81%E6%8B%8D%E6%91%84.%E9%95%BF%E6%B2%99%E4%B8%93%E4%B8%9A%E7%94%B5%E5%AD%90%E8%8F%9C%E8%B0%B1%E6%91%84%E5%BD%B1-%E9%95%BF%E6%B2%99%E4%B8%93%E4%B8%9A%E8%8F%9C%E8%B0%B1%E6%8B%8D%E7%85%A7-%E6%B9%96%E5%8D%97%E7%94%B5%E5%AD%90%E8%8F%9C%E8%B0%B1%E6%91%84%E5%BD%B1-%E9%95%BF%E6%B2%99%E8%8F%9C%E8%B0%B1%E6%8B%8D%E6%91%84-%E9%95%BF%E6%B2%99%E8%8F%9C%E5%93%81%E6%8B%8D%E6%91%84-%E9%95%BF%E6%B2%99%E4%B8%93%E4%B8%9A%E8%8F%9C%E8%B0%B1%E8%AE%BE%E8%AE%A1-6.jpg',
                    success(res) {
                        image = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用', function (done) {
                this.timeout(10000);
                let params = {
                    image,
                    success(res) {
                        function catchError() {
                            console.log('dishClassify', res);
                            try {
                                expect(res).to.be.a('object');
                                expect(res.log_id).to.be.a('number');
                                expect(res.result_num).to.be.a('number');
                                expect(res.result).to.be.a('array');
                                let item = res.result[0];
                                expect(item.name).to.be.a('string');
                                expect(item.calorie).to.be.a('string');
                                expect(item.probability).to.be.a('string');
                            } catch (e) {
                                return e;
                            }
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.ai.dishClassify(params);
            });
        });

        describe('logoClassify', function () {
            let image = '';

            before(function (done) {
                this.timeout(5000);
                swan.downloadFile({
                    url: 'https://www.baidu.com/img/bd_logo1.png?where=super',
                    success(res) {
                        image = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    success(res) {
                        function catchError() {
                            console.log('logoClassify', res);
                            try {
                                expect(res).to.be.a('object');
                                expect(res.log_id).to.be.a('number');
                                expect(res.result_num).to.be.a('number');
                                expect(res.result).to.be.an('array');
                                let item = res.result[0];
                                expect(item.name).to.be.a('string');
                                expect(item.location).to.be.a('object');
                                expect(item.location.left).to.be.a('number');
                                expect(item.location.top).to.be.a('number');
                                expect(item.location.width).to.be.a('number');
                                expect(item.location.height).to.be.a('number');
                            } catch (e) {
                                return e;
                            }
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.ai.logoClassify(params);
            });
        });

        describe('animalClassify', function () {
            let image = '';

            before(function (done) {
                this.timeout(5000);
                swan.downloadFile({
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1257454246,4258873559&fm=27&gp=0.jpg',
                    success(res) {
                        image = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    success(res) {
                        function catchError() {
                            console.log('animalClassify', res);
                            try {
                                expect(res).to.be.a('object');
                                expect(res.log_id).to.be.a('number');
                                expect(res.result).to.be.an('array');
                                let item = res.result[0];
                                expect(item.name).to.be.a('string');
                                // expect(item.score).to.be.a('number');
                            } catch (e) {
                                return e;
                            }
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.ai.animalClassify(params);
            });
        });

        describe('plantClassify', function () {
            let image = '';

            before(function (done) {
                this.timeout(5000);
                swan.downloadFile({
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533275106255&di=ff9e2838e2ecb4a10a5b0995d69e08bb&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201503%2F27%2F20150327225116_KnZr4.jpeg',
                    success(res) {
                        image = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用', function (done) {
                this.timeout(5000);
                let params = {
                    image,
                    success(res) {
                        function catchError() {
                            console.log('plantClassify', res);
                            try {
                                expect(res).to.be.a('object');
                                expect(res.log_id).to.be.a('number');
                                expect(res.result).to.be.an('array');
                                let item = res.result[0];
                                expect(item.name).to.be.a('string');
                                expect(item.score).to.be.a('number');
                            } catch (e) {
                                return e;
                            }
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.ai.plantClassify(params);
            });
        });
    }
};
