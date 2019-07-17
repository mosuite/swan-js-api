/**
 * @file demo page for apiDemo
 * @author liwanfeng@baidu.com
 */
/* globals Page, swan */

export default {
    register() {
        let that = this;
        const uploadUrl = 'https://smartapp.baidu.com/mappconsole/api/checkFile';
        const downloadUrl = 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf';

        describe('uploadFile', function () {
            let tempFilePath;
            it('正常调用', function (done) {
                this.timeout(10000);
                swan.downloadFile({
                    url: downloadUrl,
                    success(res) {
                        console.log('tempFilePath', res.tempFilePath);
                        tempFilePath = res.tempFilePath;
                        swan.uploadFile({
                            url: uploadUrl,
                            filePath: tempFilePath,
                            name: 'myfile',
                            success: res => {
                                let count = 0;
                                try {
                                    expect(res).to.be.an('object');
                                    expect(res.data).to.be.an('object');
                                    expect(res.statusCode).to.be.an('number');
                                } catch (e) {
                                    ++count && done(e);
                                }

                                ++count === 1 && done();
                            },
                            fail: err => done(err)
                        });
                    }
                });
            });
            it('异常调用:参数必填 #filePath is required', function (done) {
                swan.uploadFile({
                    url: uploadUrl,
                    name: 'myfile',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it.skip('异常调用:参数类型 #filePath must be string', function (done) {
                swan.uploadFile({
                    url: uploadUrl,
                    name: 'myfile',
                    filePath: that.constant.number,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it('异常调用:参数必填 #url is required', function (done) {
                swan.uploadFile({
                    name: 'myfile',
                    filePath: tempFilePath,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it.skip('异常调用:参数类型 #url muste be string', function (done) {
                swan.uploadFile({
                    url: that.constant.number,
                    name: 'myfile',
                    filePath: tempFilePath,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it('异常调用:参数必填 #name is required', function (done) {
                swan.uploadFile({
                    url: uploadUrl,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it.skip('异常调用:参数类型 #name must be string', function (done) {
                swan.uploadFile({
                    url: uploadUrl,
                    filePath: tempFilePath,
                    name: that.constant.number,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it('异常调用:参数类型 #header must be object', function (done) {
                swan.uploadFile({
                    url: uploadUrl,
                    filePath: tempFilePath,
                    name: 'myfile',
                    header: that.constant.string,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it.skip('异常调用:参数类型 #formData must be object', function (done) {
                swan.uploadFile({
                    url: uploadUrl,
                    filePath: tempFilePath,
                    name: 'myfile',
                    formData: that.constant.number,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it.skip('异常调用:参数类型 #success must be function', function (done) {
                swan.uploadFile({
                    url: uploadUrl,
                    filePath: tempFilePath,
                    name: 'myfile',
                    fail: () => done(),
                    success: that.constant.number
                });
            });
        });

        describe('uploadTask', function () {
            it('正常调用:onProgressUpdate', function (done) {
                this.timeout(10000);
                swan.downloadFile({
                    url: downloadUrl,
                    success(res) {
                        let task = swan.uploadFile({
                            url: uploadUrl,
                            filePath: res.tempFilePath,
                            name: 'myfile'
                        });
                        let count = 0;
                        task.onProgressUpdate(res => {
                            ++count === 1 && done();
                        });
                    }
                });
            });

            it('onProgressUpdate:返回值类型校验', function (done) {
                this.timeout(10000);
                swan.downloadFile({
                    url: downloadUrl,
                    success(res) {
                        let task = swan.uploadFile({
                            url: uploadUrl,
                            filePath: res.tempFilePath,
                            name: 'myfile',
                            fail(err) {
                                swan.showToast({
                                    title: 'upload Fail'
                                });
                            }
                        });
                        let count = 0;
                        task.onProgressUpdate(res => {
                            try {
                                expect(res).to.be.an('object');
                                expect(res.progress).to.be.an('number');
                                expect(res.totalBytesSent).to.be.an('number');
                                expect(res.totalBytesExpectedToSend).to.be.an('number');
                            } catch (e) {
                                ++count === 1 && done(e);
                            }
                            ++count === 1 && done();
                        });
                    }
                });
            });
        });
    }
}