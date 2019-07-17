/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author sunweinan@baidu.com
 */
export default {
    register() {
        let that = this;
console.log('====================file.test==================')
        describe('saveFile', function () {

            let tempFilePath = null;

            // 先下载一个文件、为API必需的tempFilePath服务
            before(function (done) {
                swan.downloadFile({
                    url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
                    success(res) {
                        tempFilePath = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用:结果类型 #validate res.saveFilePath type', function (done) {
                let params = {
                    tempFilePath,
                    success(res) {
                        function catchError() {
                            expect(res.savedFilePath).to.be.a('string');
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.saveFile(params);
            });
            it('异常调用:参数必填 #tempFilePath should be required', function (done) {
                let params = {
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.saveFile(params);
            });
            it('异常调用:参数类型 #tempFilePath should be string', function (done) {
                let params = {
                    tempFilePath: 100,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.saveFile(params);
            });
        });

        describe('getFileInfo', function () {
            let filePath;

            before(function (done) {
                swan.downloadFile({
                    url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
                    success(res) {
                        filePath = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用:结果类型 #provide filePath validate res type', function (done) {
                let params = {
                    filePath,
                    success(res) {
                        function catchError() {
                            expect(res.size).to.be.a('number');
                            expect(res.digest).to.be.a('string');
                            expect(res.errMsg).to.be.a('number');
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.getFileInfo(params);
            });
            it('正确调用:结果类型 #provide filePath & digestAlgorithm validate res type', function (done) {
                let params = {
                    filePath,
                    digestAlgorithm: 'sha1',
                    success(res) {
                        function catchError() {
                            expect(res.size).to.be.a('number');
                            expect(res.digest).to.be.a('string');
                            expect(res.errMsg).to.be.a('number');
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.getFileInfo(params);
            });
            it('异常调用:参数必填 #filePath should be required', function (done) {
                let params = {
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.getFileInfo(params);
            });
            it('异常调用:参数类型 #filePath should be string', function (done) {
                let params = {
                    filePath: 123,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.getFileInfo(params);
            });
            it('异常调用:参数类型 #digestAlgorithm should be string', function (done) {
                let params = {
                    filePath,
                    digestAlgorithm: 123,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.getFileInfo(params);
            });
            it('异常调用:参数类型 #digestAlgorithm should be md5/sha1', function (done) {
                let params = {
                    digestAlgorithm: 'sdh',
                    filePath,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.getFileInfo(params);
            });
        });

        describe('getSavedFileList', function () {

            // 先下载一个文件、保存到临时目录里. 为API的查询服务
            before(function (done) {
                swan.downloadFile({
                    url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
                    success(res) {
                        swan.saveFile({
                            tempFilePath: res.tempFilePath,
                            success() {
                                done();
                            }
                        });
                    }
                });
            });

            it('正确调用:结果类型 #validate res.filelist type', function (done) {
                let params = {
                    success(res) {
                        function catchError() {
                            expect(res.fileList).to.exist;
                            expect(res.fileList).to.not.be.empty;
                            expect(res.fileList).to.be.an('array');
                            expect(res.fileList[0].filePath).to.be.a('string');
                            expect(res.fileList[0].createTime).to.be.a('number');
                            expect(res.fileList[0].size).to.be.a('number');
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.getSavedFileList(params);
            });
        });

        describe('getSavedFileInfo', function () {

            let filePath = null;

            // 先下载一个文件、保存到临时目录里.
            // 再通过通过拿到临时目录文件存储路径，为API的必需的filePath服务
            before(function (done) {
                swan.downloadFile({
                    url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
                    success(res) {
                        swan.saveFile({
                            tempFilePath: res.tempFilePath,
                            success() {
                                swan.getSavedFileList({
                                    success(res) {
                                        filePath = res.fileList[0].filePath;
                                        done();
                                    }
                                });
                            }
                        });
                    }
                });
            });

            it('正确调用:结果类型 #validate res type', function (done) {
                let params = {
                    filePath,
                    success(res) {
                        function catchError() {
                            expect(res.size).to.be.a('number');
                            expect(res.createTime).to.be.a('number');
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.getSavedFileInfo(params);
            });
            it('异常调用:参数必填 #filePath should be required', function (done) {
                let params = {
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.getSavedFileInfo(params);
            });
            it('异常调用:参数类型 #filePath should be string', function (done) {
                let params = {
                    filePath: 123,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.getSavedFileInfo(params);
            });
        });

        describe('removeSavedFile', function () {

            let filePath = null;

            // 先下载一个文件、保存到临时目录里.
            // 再通过通过拿到临时目录文件存储路径，为API必需的filePath服务
            beforeEach(function (done) {
                swan.downloadFile({
                    url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
                    success(res) {
                        swan.saveFile({
                            tempFilePath: res.tempFilePath,
                            success() {
                                swan.getSavedFileList({
                                    success(res) {
                                        filePath = res.fileList[0].filePath;
                                        done();
                                    }
                                });
                            }
                        });
                    }
                });
            });

            it('正确调用:验证文件已经被删除 #validate file should be deleted', function (done) {
                let params = {
                    filePath,
                    success(res) {
                        swan.getSavedFileInfo({
                            filePath,
                            fail(err) {
                                expect(err.errCode).to.be.not.equal(0);
                                done();
                            },
                            success: () => done(that.error.shouldFail)
                        });
                    }
                };
                swan.removeSavedFile(params);
            });
            it('异常调用:参数必填 #filePath should be required', function (done) {
                let params = {
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.removeSavedFile(params);
            });
            it('异常调用:参数类型 #filePath should be string', function (done) {
                let params = {
                    filePath: 123,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.removeSavedFile(params);
            });
        });

        // 跳出影响报告展示，单例测试请改成only
        describe.skip('openDocument(影响报告展示)', function () {

            let filePath = '';

            // 先下载一个文件、为API必需的filePath服务.
            beforeEach(function (done) {
                swan.downloadFile({
                    url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
                    success(res) {
                        filePath = res.tempFilePath;
                        done();
                    }
                });
            });

            it('正确调用: #provide filePath', function (done) {
                let params = {
                    filePath,
                    success(res) {
                        done();
                    },
                    fail: done
                };
                swan.openDocument(params);
            });
            it('正确调用: #provide filePath && fileType', function (done) {
                let params = {
                    filePath,
                    fileType: 'pdf',
                    success(res) {
                        done();
                    },
                    fail: done
                };
                swan.openDocument(params);
            });
            it('异常调用:参数异常 #provide filePath and error fileType', function (done) {
                let params = {
                    filePath,
                    fileType: 'xls',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openDocument(params);
            });
            it('异常调用:参数必填 #filePath should be required', function (done) {
                let params = {
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openDocument(params);
            });
            it('异常调用:参数类型 #filePath should be string', function (done) {
                let params = {
                    filePath: 100,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openDocument(params);
            });
            it('异常调用:参数类型 #fileType should be string', function (done) {
                let params = {
                    filePath,
                    fileType: 100,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openDocument(params);
            });
            it('异常调用:参数类型 #fileType should be supported', function (done) {
                let params = {
                    filePath,
                    fileType: 'swn',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.openDocument(params);
            });
        });

    }
}