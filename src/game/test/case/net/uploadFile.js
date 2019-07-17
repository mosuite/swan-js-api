/**
 * @file file case for apiDemo-uploadFile
 * @author yanghongxue@baidu.com
 * result: check done
 */

describe('net', function () {

    const shouldFail = new Error('配置不符合预期，却成功被执行');
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
                    		console.log('res', JSON.stringify(res));
                            let count = 0;
                            try {
                                assert(typeof res === 'object');
                                assert(typeof res.data === 'object');
                                assert(typeof res.statusCode === 'number');
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
                success: () => done(shouldFail)
            });
        });
        it('异常调用:参数类型 #filePath must be string', function (done) {
            swan.uploadFile({
                url: uploadUrl,
                name: 'myfile',
                filePath: 1234,
                fail: () => done(),
                success: () => done(shouldFail)
            });
        });
        it('异常调用:参数必填 #url is required', function (done) {
            swan.uploadFile({
                name: 'myfile',
                filePath: tempFilePath,
                fail: () => done(),
                success: () => done(shouldFail)
            });
        });
        it('异常调用:参数类型 #url muste be string', function (done) {
            swan.uploadFile({
                url: 1234,
                name: 'myfile',
                filePath: tempFilePath,
                fail: () => done(),
                success: () => done(shouldFail)
            });
        });
        it('异常调用:参数必填 #name is required', function (done) {
            swan.uploadFile({
                url: uploadUrl,
                fail: () => done(),
                success: () => done(shouldFail)
            });
        });
        it('异常调用:参数类型 #name must be string', function (done) {
            swan.uploadFile({
                url: uploadUrl,
                filePath: tempFilePath,
                name: 1234,
                fail: () => done(),
                success: () => done(shouldFail)
            });
        });
        it('异常调用:参数类型 #formData must be object', function (done) {
            swan.uploadFile({
                url: uploadUrl,
                filePath: tempFilePath,
                name: 'myfile',
                formData: 1234,
                fail: () => done(),
                success: () => done(shouldFail)
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
                            assert(typeof res === 'object');
                            assert(typeof res.progress === 'number');
                            assert(typeof res.totalBytesSent === 'number');
                            assert(typeof res.totalBytesExpectedToSend === 'number');
                        } catch (e) {
                            ++count === 1 && done(e);
                        }
                        ++count === 1 && done();
                    });
                }
            });
        });
    });

    describe('abort', function() {
        it('abort:返回值类型校验', function (done) {
            this.timeout(15000);
            let task;
            swan.downloadFile({
                url: downloadUrl,
                success(res) {
                    task = swan.uploadFile({
                        url: uploadUrl,
                        filePath: res.tempFilePath,
                        name: 'myfile',
                        success: (res) => {
                            console.log('----success',res);
                            done(shouldFail);
                        },
                        fail: (err) => {
                            console.log('----fail',err);
                            done();
                        }
                    });
                    setTimeout(() => {
                        task.abort();
                    }, 10);
                }
            });
        });
    });
});