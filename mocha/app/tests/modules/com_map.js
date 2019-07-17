/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author xiongyang@baidu.com
 */
export default {
    register() {
        let that = this;
        let noop = () => {};
        describe('com_map<skip崩溃退出的异常用例>', function () {
            // 参数准备
            let mapId = 'myMap';
            let slaveId = 'slaveId';
            let longitude = '116.280412';
            let latitude = '40.052751';
            let position = {
                "left": "20",
                "top": "20",
                "width": "375",
                "height": "200"
            };

            // create
            //1.必传参数未传或者必传参数类型异常 过多触发会引起程序崩溃
            //2.必传参数类型异常 正常运行
            //2.非必传参数 类型异常 正常运行
            describe('create', function () {
                // 正常调用
                it('正常调用', () => {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude,
                            latitude
                        },
                    };
                    return boxjs.map.operate(params).then(res => {
                        expect(res).to.be.an('object');
                        expect(res.errCode).to.be.not.ok;
                    })
                })

                // 异常调用：必传参数未传 
                it('异常调用: #mapId未传', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            slaveId,
                            longitude,
                            latitude
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                });
                it.skip('异常调用: #slaveId未传', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            longitude,
                            latitude
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                });
                it.skip('异常调用: #longitude未传', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            latitude
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                });
                it.skip('异常调用: #latitude未传', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                });

                // 异常调用 参数类型异常
                it.skip('异常调用: #mapId not string', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId: [],
                            slaveId,
                            longitude,
                            latitude
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                });
                it.skip('异常调用: #slaveId not string', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId: [],
                            longitude,
                            latitude
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                });
                it.skip('异常调用: #longitude not string', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude: [],
                            latitude
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                });
                it.skip('异常调用: #latitude not string', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude,
                            latitude: noop
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                });
                it.skip('异常调用: #scale not string', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude,
                            latitude,
                            scale: [],
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #markers not obj', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude,
                            latitude,
                            markers: true,
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #polyline not obj', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude,
                            latitude,
                            polyline: [],
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #circles not obj', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude,
                            latitude,
                            circles: true,
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #controls not obj', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude,
                            latitude,
                            controls: true,
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #includePoints not obj', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude,
                            latitude,
                            includePoints: true,
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #showLocation not boolean', function (done) {
                    let params = {
                        type: 'create',
                        data: {
                            mapId,
                            slaveId,
                            longitude,
                            latitude,
                            showLocation: 123,
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
            });

            // update
            describe('update', function () {
                it('正常调用', () => {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId,
                            position
                        },
                    };
                    return boxjs.map.operate(params).then(res => {
                        expect(res).to.be.an('object');
                        expect(res.errCode).to.be.not.ok;
                    })
                })

                // 异常调用：无该mapid
                it('异常调用: #无该mapid', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId: 'myMapsss',
                            slaveId,
                            position
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用：必传参数未传
                it('异常调用: #mapId未传', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            slaveId,
                            position
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #slaveId未传', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            position
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #position未传', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用：必传类型异常
                it.skip('异常调用: #mapid not string', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId: noop,
                            slaveId,
                            position
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #slaveId not string', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId: noop,
                            position
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #position not string', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId,
                            position: []
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用：非必传 类型异常
                it.skip('异常调用: #scale not string', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId,
                            position,
                            scale: true
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #markers not obj', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId,
                            position,
                            markers: 123
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #polyline not obj', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId,
                            position,
                            polyline: 123
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #circles not obj', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId,
                            position,
                            circles: 123
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #controls not obj', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId,
                            position,
                            scale: 123
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #includePoints not obj', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId,
                            position,
                            includePoints: true
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #showLocation not boolean', function (done) {
                    let params = {
                        type: 'update',
                        data: {
                            mapId,
                            slaveId,
                            position,
                            showLocation: 123
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

            });

            // remove
            describe('remove', function () {
                this.timeout(5000);
                
                before(function (done) {
                    setTimeout(()=>{
                        done();
                    },3000);
                });

                // 正确调用
                it('正常调用', () => {
                        let params = {
                            type: 'remove',
                            data: {
                                mapId,
                                slaveId,
                            }
                        };
                        return boxjs.map.operate(params).then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.be.not.ok;
                        })
                })

                // 异常调用 无该mapid
                it('异常调用: #无该mapId', function (done) {
                    let params = {
                        type: 'remove',
                        data: {
                            mapId: '123myMap',
                            slaveId,
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用 必传缺失
                it('异常调用: #mapId未传', function (done) {
                    let params = {
                        type: 'remove',
                        data: {
                            slaveId,
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it.skip('异常调用: #slaveId未传', function (done) {
                    let params = {
                        type: 'remove',
                        data: {
                            mapId,
                        },
                    };
                    boxjs.map.operate(params).then(res => {
                        done(that.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用 必传类型异常
                it.skip('异常调用: #mapId not string', function (done) {
                    let params = {
                        type: 'remove',
                        data: {
                            mapId: [],
                            slaveId,
                        }
                    };
                    boxjs.map.operate(params).then(res => {
                        done()
                    }).catch(error => {
                        done(error)
                    })
                })
                it.skip('异常调用: #slaveId not string', function (done) {
                    let params = {
                        type: 'remove',
                        data: {
                            mapId,
                            slaveId: [],
                        }
                    };
                    boxjs.map.operate(params).then(res => {
                        done()
                    }).catch(error => {
                        done(error)
                    })
                })
            });

        })


    }
}