/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author xiongyang@baidu.com
 */

export default {
    register() {
        let that = this;
        let noop = () => {};

        // 测试数据准备
        let src = 'tests/demo';
        let slaveId = boxjs.data.get({
            name: 'swan-slaveIdSync'
        });
        
        // webView_insert
        describe('com_webview', () => {
            
            //此组件单例返回返回参数402 鉴权问题
            describe('webView_insert', function () {
                // 正常调用
                it('正确调用', () => {
                    let params = {
                        src,
                        slaveId
                    }
                    return boxjs.webView.insert(params).then(res => {
                        expect(res).to.be.an('object');
                        expect(res.errCode).to.be.not.ok;
                    })
                })

                // 异常调用 src不存在
                it('异常调用:#src 不存在', function (done) {
                    let params = {
                        src: 'pages/storage/storagesss',
                        slaveId
                    }
                    boxjs.webView.insert(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用 必填字段缺少
                it('异常调用:#url 缺失', function (done) {
                    let params = {
                        slaveId
                    }
                    boxjs.webView.insert(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用:#slaveId 缺失', function (done) {
                    let params = {
                        src,
                    }
                    boxjs.webView.insert(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用 类型异常
                it('异常调用:#src not string', function (done) {
                    let params = {
                        src: true,
                        slaveId
                    }
                    boxjs.webView.insert(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用:#slaveId not string', function (done) {
                    let params = {
                        src,
                        slaveId: true
                    }
                    boxjs.webView.insert(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

            });

            // webView_update
            describe('webView_update', function () {
                // 正常调用
                it('正确调用', () => {
                    let params = {
                        src,
                        slaveId
                    }
                    return boxjs.webView.update(params).then(res => {
                        expect(res).to.be.an('object');
                        expect(res.errCode).to.be.not.ok;
                    })
                })

                // 异常调用 src不存在
                it('异常调用:#src 不存在', function (done) {
                    let params = {
                        src: '123pages/storage/storage',
                        slaveId
                    }
                    boxjs.webView.update(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用 必填字段缺少
                it('异常调用:#url 缺失', function (done) {
                    let params = {
                        slaveId
                    }
                    boxjs.webView.update(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用:#slaveId 缺失', function (done) {
                    let params = {
                        src,
                    }
                    boxjs.webView.update(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用 类型异常
                it('异常调用:#src not string', function (done) {
                    let params = {
                        src: true,
                        slaveId
                    }
                    boxjs.webView.update(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用:#slaveId not string', function (done) {
                    let params = {
                        src,
                        slaveId: true
                    }
                    boxjs.webView.update(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
            });

            // webView_remove
            describe('webView_remove', function () {
                // 正常调用
                it('正确调用', () => {
                    let params = {
                        slaveId
                    };
                    return boxjs.webView.remove(params).then(res => {
                        expect(res).to.be.an('object');
                        expect(res.errCode).to.be.not.ok;
                    })
                })

                // 异常调用 字段缺少
                it('异常调用:#slaveId 缺失', function (done) {
                    let params = {};
                    boxjs.webView.remove(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用 类型异常
                it('异常调用:#slaveId not string', function (done) {
                    let params = {
                        slaveId: {}
                    }
                    boxjs.webView.remove(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

            });
        })
    }
}