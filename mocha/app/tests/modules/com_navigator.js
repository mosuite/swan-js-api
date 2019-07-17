/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author xiongyang@baidu.com
 */

export default {
    register() {
        let that = this;
        let noop = ()=>{};

        // 测试数据准备
        let url = 'tests/demo'

        // navigateTo
        describe('navigateTo', function() {
            // 正常调用
            it('正确调用', () => {
                let params = {
                    url,
                    callback: noop
                };
                return boxjs.webView.navigateTo(params).then(res => {
                    expect(res).to.be.an('object');
                    expect(res.errCode).to.be.not.ok;
                })
            })

            // 异常调用
            it('异常调用:#url 缺失', function(done) {
                let params = {
                    callback: noop
                }
                boxjs.webView.navigateTo(params).then(res => {
                    done(that.error.shouldFail)
                }).catch(error => {
                    done()
                })
            })
            it('异常调用:#url 路径错误', function(done) {
                let params = {
                    url: 'pages/canvas/canvasss',
                    callback: noop
                }
                boxjs.webView.navigateTo(params).then(res => {
                    done(that.error.shouldFail)
                }).catch(error => {
                    done()
                })
            })
            it('异常调用:#url 类型错误', function(done) {
                let params = {
                    url: noop,
                    callback: noop
                }
                boxjs.webView.navigateTo(params).then(res => {
                    done(that.error.shouldFail)
                }).catch(error => {
                    done()
                })
            })

        });

        // redirectTo
        describe('redirectTo', function() {

            // 正常调用
            it('正确调用', () => {
                let params = {
                    url,
                    callback: noop
                };
                return boxjs.webView.redirectTo(params).then(res => {
                    expect(res).to.be.an('object');
                    expect(res.errCode).to.be.not.ok;
                })
            })

            // 异常调用 引起崩溃
            it.skip('异常调用:#url 缺失', function(done) {
                let params = {
                    callback: noop
                }
                boxjs.webView.redirectTo(params).then(res => {
                    done(that.error.shouldFail)
                }).catch(error => {
                    done()
                })
            })
            it.skip('异常调用:#url 路径错误', function(done) {
                let params = {
                    url: 'pages/storage/canvasss',
                    callback: noop
                }
                boxjs.webView.redirectTo(params).then(res => {
                    done(that.error.shouldFail)
                }).catch(error => {
                    done()
                })
            })
            it.skip('异常调用:#url 类型错误', function(done) {
                let params = {
                    url: noop,
                    callback: noop
                }
                boxjs.webView.redirectTo(params).then(res => {
                    done(that.error.shouldFail)
                }).catch(error => {
                    done()
                })
            })

        });

        // navigateBack
        describe.skip('navigateBack', function() {
            // dalata类型为num，非必填
            // 正常调用
            it('正确调用', () => {
                let params = {
                    delta: 1,
                }
                return boxjs.webView.navigateBack(params).then(res => {
                    expect(res).to.be.an('object');
                    expect(res.errCode).to.be.not.ok;
                })
            })

            // 异常调用
            it('异常调用:#delta 类型错误', function(done) {
                let params = {
                    delta: noop,
                }
                boxjs.webView.navigateBack(params).then(res => {
                    done(that.error.shouldFail)
                }).catch(error => {
                    done()
                })
            })
        });

        // reLaunch
        describe.skip('reLaunch', function() {
            // 正常调用
            it('正确调用', () => {
                let params = {
                    url,
                    callback: noop
                }
                boxjs.webView.reLaunch(params).then(res => {
                    done()
                }).catch(error => {
                    done(error)
                })
            })
        });

        // switchTab
        describe.skip('switchTab', function() {
            // 正确调用
            it('正确调用', () => {
                let params = {
                    url,
                }
                return boxjs.webView.switchTab(params).then(res => {
                    expect(res).to.be.an('object');
                    expect(res.errCode).to.be.not.ok;
                })
            })

            // 异常调用
            it('异常调用:#url 缺失', function(done) {
                let params = {}
                boxjs.webView.switchTab(params).then(res => {
                    done(that.error.shouldFail)
                }).catch(error => {
                    done()
                })
            })
            it('异常调用:#url 路径错误', function(done) {
                let params = {
                    url: 'pages/canvas/canvasss',
                }
                boxjs.webView.switchTab(params).then(res => {
                    done(that.error.shouldFail)
                }).catch(error => {
                    done()
                })
            })
            it('异常调用:#url 类型错误', function(done) {
                let params = {
                    url: noop,
                }
                boxjs.webView.switchTab(params).then(res => {
                    done(that.error.shouldFail)
                }).catch(error => {
                    done()
                })
            })

        });

    }
}