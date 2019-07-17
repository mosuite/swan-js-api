/**
 * @file demo page for apiDemo
 * @author liwanfeng@baidu.com
 */
/* globals Page, swan */
export default {
    register() {
        let that = this;

        describe.skip('chooseImage', function () {
            function checkType(res) {
                try {
                    expect(res).to.be.an('object');
                    expect(res.tempFilePaths).to.be.an('array');
                    expect(res.tempFiles).to.be.an('array');
                    expect(res.tempFiles[0].path).to.be.an('string');
                    expect(res.tempFiles[0].size).to.be.an('number');
                } catch (e) {
                    return e;
                }
            }

            it('正常调用', function (done) {
                this.timeout(10000);
                swan.chooseImage({
                    success: res => {
                        done(checkType(res));
                    },
                    fail: error => done(error)
                });
            });

            it(`正常调用: sizeType = ['original']`, function (done) {
                this.timeout(10000);
                swan.chooseImage({
                    sizeType: ['original'],
                    success: res => {
                        done(checkType(res));
                    },
                    fail: error => done(error)
                });
            });

            it(`正常调用: sizeType = ['compressed']`, function (done) {
                this.timeout(10000);
                swan.chooseImage({
                    sizeType: ['compressed'],
                    success: res => {
                        done(checkType(res));
                    },
                    fail: error => done(error)
                });
            });

            it(`正常调用: sourceType = ['camera']`, function (done) {
                this.timeout(10000);
                swan.chooseImage({
                    sourceType: ['camera'],
                    success: res => {
                        done(checkType(res));
                    },
                    fail: error => done(error)
                });
            });

            it(`正常调用: sourceType = ['album']`, function (done) {
                this.timeout(10000);
                swan.chooseImage({
                    sourceType: ['album'],
                    success: res => {
                        done(checkType(res));
                    },
                    fail: error => done(error)
                });
            });

            it('异常调用:参数范围 #count [0, 9]', function (done) {
                this.timeout(10000);
                swan.chooseImage({
                    count: 12,
                    success: res => {
                        done(checkType(res));
                    },
                    fail: error => done(error)
                });
            });
        });

        describe('previewImage', function () {
            function checkType(res) {
                try {
                    expect(res).to.be.an('object');
                } catch (e) {
                    return (e);
                }
            }
            const current = 'https://lvyou.baidu.com/static/qianfan/lvyou/kingkong/pics/aaa.png';
            const urls = [
                'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png',
                'https://lvyou.baidu.com/static/qianfan/lvyou/kingkong/pics/aaa.png',
                'https://www.baidu.com/img/bd_logo1.png'
            ];
            it.skip('正常调用', function (done) {
                swan.previewImage({
                    urls,
                    success: res => {
                        done(checkType(res));
                    },
                    fail: error => done(error)
                });
            });

            it('异常调用:参数必填 urls is required', function (done) {
                swan.previewImage({
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });

            it('异常调用:参数类型 urls must be StringArray', function (done) {
                swan.previewImage({
                    current,
                    urls: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
        });

        describe('getImageInfo', function () {
            let tempFilePath;

            function checkType(res) {
                try {
                    expect(res).to.be.an('object');
                    expect(res.width).to.be.an('number');
                    expect(res.height).to.be.an('number');
                    expect(res.path).to.be.an('string');
                    expect(res.orientation).to.be.an('string');
                    expect(res.type).to.be.an('string');
                } catch (e) {
                    return (e);
                }
            }

            it('正常调用:临时文件路径', function (done) {
                this.timeout(10000);
                swan.downloadFile({
                    url: 'https://ws1.sinaimg.cn/large/006tNc79ly1ftq0htaf83j31is06etc2.jpg',
                    success(res) {
                        tempFilePath = res.tempFilePath;
                        swan.getImageInfo({
                            src: tempFilePath,
                            success: res => {
                                done(checkType(res));
                            },
                            fail: error => done(error)
                        });
                    }
                });
            });

            it('正常调用:存储文件路径', function (done) {
                swan.getImageInfo({
                    src: '/images/component_normal.png',
                    success: res => {
                        done(checkType(res));
                    },
                    fail: error => done(error)
                });
            });

            it('正常调用:网络图片路径', function (done) {
                swan.getImageInfo({
                    src: 'https://ws1.sinaimg.cn/large/006tNc79ly1ftq0htaf83j31is06etc2.jpg',
                    success: res => {
                        done(checkType(res));
                    },
                    fail: error => done(error)
                });
            });

            it('异常调用:参数必填 #src is required', function (done) {
                swan.getImageInfo({
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
        });

        describe('saveImageToPhotosAlbum', function () {
            it.skip('正常调用:临时文件路径', function (done) {
                this.timeout(10000);
                swan.saveImageToPhotosAlbum({
                    filePath: '/images/component_normal.png',
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                });
            });

            it.skip('正常调用:存储文件路径', function (done) {
                this.timeout(10000);
                swan.saveImageToPhotosAlbum({
                    filePath: '/images/component_normal.png',
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                });
            });


            it('异常调用:参数必填 #filePath is required', function (done) {
                swan.saveImageToPhotosAlbum({
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
        });
    }
}