/**
 * @file demo page for apiDemo
 * @author liwanfeng@baidu.com
 */
/* globals swan */

export default {
    register() {
        let that = this;
        const url = 'https://sfc.baidu.com/shopping/nianhuo/bimai';

        describe('request', function () {
            it('正常调用(request)', function (done) {
                this.timeout(15000);
                swan.request({
                    url,
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                            expect(res.data).to.be.an('object');
                            expect(res.statusCode).to.be.an('number');
                            expect(res.header).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                });
            });
            it('正常调用(requestTask:abort)', function (done) {
                let task = swan.request({
                    url,
                    success: res => done(new Error('取消请求后，请求仍然成功')),
                    fail: error => done()
                });
                setTimeout(() => {
                    task.abort();
                }, 500);
            });
            it('异常调用:参数必填 #url is required', function (done) {
                swan.request({
                    data: {
                        tabname: '美食酒水'
                    },
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it.skip('异常调用:参数类型 #url must be string', function (done) {
                swan.request({
                    url: that.constant.number,
                    data: {
                        tabname: '美食酒水'
                    },
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it.skip('异常调用:参数类型 #header must be object(崩溃)', function (done) {
                swan.request({
                    url,
                    header: that.constant.string,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it.skip('异常调用:参数类型 #method must be string(崩溃)', function (done) {
                swan.request({
                    url,
                    method: that.constant.number,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
            it.skip('异常调用:参数类型 #dataType must string(崩溃)', function (done) {
                swan.request({
                    url,
                    dataType: that.constant.number,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                });
            });
        });
    }
}