/**
 * @file demo page for apiDemo
 * @author liwanfeng@baidu.com
 */
/* globals Page, swan */

export default {
    register() {
        let that = this;
        const number = 100;
        const downloadUrl = 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf';

        describe('downloadFile', function () {
            it('正确调用', function (done) {
                swan.downloadFile({
                    header: {
                        'Cache-Control': 'no-cache'
                    },
                    url: downloadUrl,
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                });
            });
            it('异常调用:参数类型 #url not string', function (done) {
                swan.downloadFile({
                    header: {
                        'Cache-Control': 'no-cache'
                    },
                    url: number,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it('异常调用:参数必填 #url not required', function (done) {
                swan.downloadFile({
                    header: {
                        'Cache-Control': 'no-cache'
                    },
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it('异常调用:参数类型 #header not object', function (done) {
                swan.downloadFile({
                    header: number,
                    url: downloadUrl,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
        });
    }
}