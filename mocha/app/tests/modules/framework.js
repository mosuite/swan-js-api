/*eslint-disable */
/**
 * @api for swan-core framework
 * @author sunweinan@baidu.com
 */
export default {
    register() {
        let that = this;
        let noop = () => {};

        describe('boxjs.data.swan-appInfoSync', () => {
            
            let result = boxjs.data.get({
                    name: 'swan-appInfoSync'
                });
            
            it('正确调用', () => {
                expect(result).to.be.an('object');
                expect(result.errCode).to.not.be.ok;
                expect(result.cuid).to.be.ok;
                expect(result.cuid).to.be.a('string');
                expect(result.appid).to.be.ok;
                expect(result.appid).to.be.a('string');
            });

            // 规则开始
            it('CUID:'+ result.cuid,()=>{
                expect(result.cuid).to.be.ok;
            })

        });
        describe('boxjs.data.swan-slaveIdSync', () => {
            // 规则开始
            it('正确调用', () => {
                let result = boxjs.data.get({
                    name: 'swan-slaveIdSync'
                });
                expect(result).to.be.an('object');
                expect(result.errCode).to.not.be.ok;
                expect(result.slaveId).to.be.ok;
                expect(result.slaveId).to.be.a('string');

            });
        });

        describe('boxjs.view.postMessage', () => {
            let webviewid = "1";
            let message  = 'hello';
            // 规则开始
            it('正确调用', () => {
                return boxjs.webView.postMessage({
                    webviewid,
                    message
                }).then(result => {
                    expect(result).to.be.an('object');
                    expect(result.errCode).to.not.be.ok;
                });
            });
            it('异常调用:参数类型:#webviewid not string', (done) => {
                boxjs.webView.postMessage({
                    webviewid: noop,
                    message
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err=> {
                    done();
                });
            });
            it('异常调用:参数必填:#webviewid not required', (done) => {
                boxjs.webView.postMessage({
                    message
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
            it('异常调用:参数必填:#message not required', (done) => {
                boxjs.webView.postMessage({
                    webviewid
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
            it('异常调用:参数类型:#message not string', (done) => {
                boxjs.webView.postMessage({
                    webviewid,
                    message: noop
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
            it('异常调用:参数类型:#message not encode', (done) => {
                boxjs.webView.postMessage({
                    webviewid,
                    message: '你好，我是个中国人 and you ?'
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
        });
        describe('boxjs.log.ubcFlowJar', () => {
            //参数准备
            let flowId = '670';
            let data = [{
                actionId: "action",
                timestamp: 1111111111111
            }];

            // 规则开始
            it('正确调用', () => {
                return boxjs.log({
                    name: 'ubcFlowJar',
                    data: {
                        flowId,
                        data
                    }
                }).then(result=> {
                    expect(result).to.be.an('object');
                });
            });

            it('异常调用:参数必填:#flowId not required', (done) => {
                boxjs.log({
                    name: 'ubcFlowJar',
                    data: {
                        data
                    }
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
            it('异常调用:参数类型:#flowId not string', (done) => {
                boxjs.log({
                    name: 'ubcFlowJar',
                    data: {
                        flowId: {},
                        data
                    }
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
            it('异常调用:参数必填:#data not required', (done) => {
                boxjs.log({
                    name: 'ubcFlowJar',
                    data: {
                        flowId
                    }
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
            it.skip('异常调用:参数类型:#data not array', (done) => {
                boxjs.log({
                    name: 'ubcFlowJar',
                    data: {
                        flowId,
                        data: {}
                    }
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
            it.skip('异常调用:参数类型:#data not array object', (done) => {
                boxjs.log({
                    name: 'ubcFlowJar',
                    data: {
                        flowId,
                        data: [1,2,3]
                    }
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
            it('异常调用:参数类型:#data not have action-id', (done) => {
                boxjs.log({
                    name: 'ubcFlowJar',
                    data: {
                        flowId,
                        data: [{
                            hello:1
                        }]
                    }
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
            it('异常调用:参数类型:#data.timestamp not number', (done) => {
                boxjs.log({
                    name: 'ubcFlowJar',
                    data: {
                        flowId,
                        data: [{
                            hello: 'hello',
                            timestamp:'hello'
                        }]
                    }
                }).then(result => {
                    done(that.error.shouldFail)
                }).catch(err => {
                    done();
                });
            });
            
        });
        describe('boxjs.view.init', () => {
            // 规则开始
            it.skip('正确调用<影响展示>', (done) => {
                boxjs.webView.init().then(result => {
                    try{
                        expect(result).to.be.an('object');
                        expect(result.errCode).to.not.be.ok;
                        expect(result.pageUrl).to.be.ok;
                        expect(result.pageUrl).to.be.a('string');
                        expect(result.wvID).to.be.ok;
                        expect(result.extraData).to.be.ok;
                        expect(result.extraData).to.be.an('object');    
                    }catch(e){
                        done(e)
                    }
                }).catch(done);
            });
        });
    }
}