/**
 * @file demo page for apiDemo
 * @author wuxiaopan@baidu.com
 */
/* globals Page, swan */
export default {
    register() {
        let that = this;

        describe.skip('chooseVideo', function () {
            function checkType(res) {
                try {
                    expect(res).to.be.an('object');
                    expect(res.duration).to.be.an('string');
                    expect(res.size).to.be.an('array');
                    expect(res.width).to.be.an('number');
                    expect(res.height).to.be.an('number');
                } catch (e) {
                    return e;
                }
            }

            it('正常调用', function (done) {
                this.timeout(10000);
                swan.chooseVideo({
                    success: res => {
                        done(checkType(res));
                    },
                    fail: error => done(error)
                });
            });

            // it(`正常调用: sourceType = ['album']`, function (done) {
            //     this.timeout(10000);
            //     swan.chooseVideo({
            //         sourceType: ['album'],
            //         success: res => {
            //             done(checkType(res));
            //         },
            //         fail: error => done(error)
            //     });
            // });

            // it(`正常调用: sourceType = ['camera']`, function (done) {
            //     this.timeout(10000);
            //     swan.chooseVideo({
            //         sourceType: ['camera'],
            //         success: res => {
            //             done(checkType(res));
            //         },
            //         fail: error => done(error)
            //     });
            // });
        });

        describe.skip('saveVideoToPhotosAlbum', function () {
            it('正常调用', function (done) {
                this.timeout(20000);
                swan.chooseVideo({
                    success: res => {
                        swan.saveVideoToPhotosAlbum({
                            filePath: res.tempFilePath,
                            success: res => {
                                done();
                            },
                            fail: error => done(error)
                        });
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