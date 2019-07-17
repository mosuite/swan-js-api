/*eslint-disable */
/**
 * @file demo page for apiDemo
 * @author liwanfeng@baidu.com
 */
export default {
    register() {
        let that = this;
        let noop = () => {};
        // 参数准备
        let path = '/pages/anim_ai/anim_one.json';
        let loop = false;
        let autoPlay = true;
        let action = 'play';
        let hidden = false;
        let slaveId = 'slaveId';
        let viewId = 'viewId';

        // insert
        // 1.必传参数未传或者必传参数类型异常 过多触发会引起程序崩溃
        // 2.必传参数类型异常 正常运行
        // 2.非必传参数 类型异常 正常运行
        describe('insert', function () {
            // 正常调用
            it('正常调用', () => {
                let params = {
                    name: 'swan-animView',
                    data: {
                        path,
                        slaveId,
                        viewId,
                        autoPlay
                    }
                };
                return boxjs.cover.insert(params).then(res => {
                    expect(res).to.be.an('object');
                    expect(res.errCode).to.be.not.ok;
                });
            });

            // 异常调用：必传参数未传 
            it('异常调用:参数必填 #slaveId未传', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        path,
                        slaveId,
                        viewId,
                        autoPlay
                    }
                };
                boxjs.cover.insert(params).then(res => {
                    done(that.error.shouldFail);
                }).catch(error => {
                    done();
                })
            });

            it('异常调用:类型校验 #slaveId not string', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId: {},
                        viewId,
                        path,
                        autoPlay
                    }
                };
                boxjs.cover.insert(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });

            it('异常调用:参数必填 #viewId未传', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId,
                        autoPlay,
                        path
                    }
                };
                boxjs.cover.insert(params).then(res => {
                    done(that.error.shouldFail);
                }).catch(error => {
                    done();
                })
            });

            it('异常调用:类型校验 #viewId not string', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId,
                        viewId: {},
                        path,
                        autoPlay
                    }
                };
                boxjs.cover.insert(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });

            // 异常调用：必传参数未传 
            it('异常调用:参数必填 #path未传', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId,
                        viewId,
                        autoPlay
                    }
                };
                boxjs.cover.insert(params).then(res => {
                    done(that.error.shouldFail);
                }).catch(error => {
                    done();
                })
            });

            it('异常调用:类型校验 #path not string', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        path: 111,
                        slaveId,
                        viewId,
                        autoPlay
                    }
                };
                boxjs.cover.insert(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });

            it('异常调用:类型校验 #loop not Boolean', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        path,
                        slaveId,
                        viewId,
                        autoPlay,
                        loop: {}
                    }
                };
                boxjs.cover.insert(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });

            it('异常调用:类型校验 #autoplay not Boolean', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        path,
                        slaveId,
                        viewId,
                        autoPlay: { },
                        loop
                    }
                };
                boxjs.cover.insert(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });
        });

        // update
        describe('update', function () {
            // 正常调用
            it('正常调用', () => {
                let params = {
                    name: 'swan-animView',
                    data: {
                        path,
                        slaveId,
                        viewId,
                        autoPlay,
                        action
                    }
                };
                return boxjs.cover.update(params).then(res => {
                    expect(res).to.be.an('object');
                    expect(res.errCode).to.be.not.ok;
                });
            })

            // 异常调用：必传参数未传 
            it('异常调用:参数必填 #slaveId未传', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        viewId,
                        autoPlay
                    }
                };
                boxjs.cover.update(params).then(res => {
                    done(that.error.shouldFail);
                }).catch(error => {
                    done();
                })
            });

            it('异常调用:类型校验 #slaveId not string', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId: {},
                        viewId
                    }
                };
                boxjs.cover.update(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });

            it('异常调用:参数必填 #viewId未传', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId,
                        autoPlay
                    }
                };
                boxjs.cover.update(params).then(res => {
                    done(that.error.shouldFail);
                }).catch(error => {
                    done();
                })
            });

            it('异常调用:类型校验 #viewId not string', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId,
                        viewId: {}
                    }
                };
                boxjs.cover.update(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });

            it('异常调用:类型校验 #action not String', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        path,
                        slaveId,
                        viewId,
                        autoPlay,
                        loop,
                        action: 111
                    }
                };
                boxjs.cover.update(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });
        });

        // remove
        describe('remove', function () {
            // 正常调用
            it('正常调用', () => {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId,
                        viewId
                    }
                };
                return boxjs.cover.remove(params).then(res => {
                    expect(res).to.be.an('object');
                    expect(res.errCode).to.be.not.ok;
                });
            })

            // 异常调用：必传参数未传 
            it('异常调用:参数必填 #slaveId未传', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        viewId
                    }
                };
                boxjs.cover.remove(params).then(res => {
                    done(that.error.shouldFail);
                }).catch(error => {
                    done();
                })
            });

            it('异常调用:类型校验 #slaveId not string', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId: {},
                        viewId
                    }
                };
                boxjs.cover.remove(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });

            // 异常调用：必传参数未传 
            it('异常调用:参数必填 #viewId未传', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId
                    }
                };
                boxjs.cover.remove(params).then(res => {
                    done(that.error.shouldFail);
                }).catch(error => {
                    done();
                })
            });

            it('异常调用:类型校验 #viewId not string', function (done) {
                let params = {
                    name: 'swan-animView',
                    data: {
                        slaveId,
                        viewId: {}
                    }
                };
                boxjs.cover.remove(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });
        });

        // ===========animation-view组件 END============= //
        // ===========aiRequest start============= //

        describe('aiRequest', function () {
            let service = 'aip';
            let fileMap = {
                image: '/images/api_logo.png'
            };
            let stringMap = {
                'detect_direction': 'test'
            };
            let api = '/rest/2.0/ocr/v1/driving_license';
            // 正常调用
            it('正常调用', () => {
                let params = {
                    service,
                    fileMap,
                    stringMap,
                    api
                };
                return boxjs.net.aiRequest(params).then(res => {
                    expect(res).to.be.an('object');
                    expect(res.errCode).to.be.not.ok;
                    expect(res.header).to.be.ok;
                    expect(res.header).to.be.a('object');
                    expect(res.body).to.be.a('string');
                    expect(res.body).to.be.ok;
                });
            });

            // 异常调用：必传参数未传 
            it('异常调用:参数必填 #service未传', function (done) {
                let params = {
                    fileMap,
                    stringMap,
                    api
                };
                boxjs.net.aiRequest(params).then(res => {
                    done(that.error.shouldFail);
                }).catch(error => {
                    done();
                })
            });

            it('异常调用:类型校验 #service not string', function (done) {
                let params = {
                    service: 11,
                    fileMap,
                    stringMap,
                    api
                };
                boxjs.net.aiRequest(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });

            it('异常调用:参数必填 #api未传', function (done) {
                let params = {
                    service,
                    fileMap,
                    stringMap
                };
                boxjs.net.aiRequest(params).then(res => {
                    done(that.error.shouldFail);
                }).catch(error => {
                    done();
                })
            });

            it('异常调用:类型校验 #api not string', function (done) {
                let params = {
                    service,
                    fileMap,
                    stringMap,
                    api: 111
                };
                boxjs.net.aiRequest(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });

            // 异常调用：必传参数未传 
            it('异常调用:参数必填 #stringMap未传', function (done) {
                let params = {
                    service,
                    fileMap,
                    api
                };
                boxjs.net.aiRequest(params).then(res => {
                    done(that.error.shouldFail);
                }).catch(error => {
                    done();
                })
            });

            it('异常调用:类型校验 #stringMap not Object', function (done) {
                let params = {
                    service,
                    fileMap,
                    stringMap: 'test',
                    api
                };
                boxjs.net.aiRequest(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });

            it('异常调用:类型校验 #fileMap not Object', function (done) {
                let params = {
                    service,
                    fileMap: 111,
                    stringMap,
                    api
                };
                boxjs.net.aiRequest(params)
                    .then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
            });
        });

    }
};
