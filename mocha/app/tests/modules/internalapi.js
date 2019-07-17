/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author liwanfeng@baidu.com
 */
export default {
    register() {
        let that = this;
        let noop = () => {};

        let action = 'com.baidu.channel.swan.imsdk'
        describe('registerReceiver', function() {
            let castId = '567496',
                castUrl = 'http://su.bcebos.com/v1/liveshowstatic/live_567124.m3u8?authorization=bce-auth-v1/3a9861ff96dd472f875791b14cb0b6a1/2018-05-04T02:52:38Z/86400/host/5fa0c646071b3714b881d01bf603fbbb243d1990d3484e733a65eee69f9a37b6';
            it('正常调用:', function(done) {
                swan.register({
                    action,
                    data: {
                        castId,
                        castUrl
                    },
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                })
            });
            it('异常调用:参数必填 #action not required', function(done) {
                swan.register({
                    data: {
                        castId,
                        castUrl
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #action not string', function(done) {
                swan.register({
                    action: [],
                    data: {
                        castId,
                        castUrl
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #data not required', function(done) {
                swan.register({
                    action,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #data not object', function(done) {
                swan.register({
                    action,
                    data: 'test',
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #castId in data not required', function(done) {
                swan.register({
                    action,
                    data: {
                        castUrl
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #castId in data not String/Number', function(done) {
                swan.register({
                    action,
                    data: {
                        castId: {},
                        castUrl
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #success not required', function(done) {
                swan.register({
                    action,
                    data: {
                        castId,
                        castUrl
                    },
                    fail: () => done()
                });
            });
            it('异常调用:参数类型 #success not function', function(done) {
                swan.register({
                    action,
                    data: {
                        castId,
                        castUrl
                    },
                    success: 100,
                    fail: () => done()
                });
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    action,
                    data: {
                        castId,
                        castUrl
                    },
                    success() {},
                    complete: done
                };
                swan.register(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    action,
                    data: {
                        castId,
                        castUrl
                    },
                    complete: done
                };
                swan.register(params);
            });
        });

        describe('unRegister', function() {
            let castId = '567496';
            it('正常调用:', function(done) {
                swan.unRegister({
                    action,
                    data: {
                        castId
                    },
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                })
            });
            it('异常调用:参数必填 #action not required', function(done) {
                swan.unRegister({
                    data: {
                        castId
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #action not string', function(done) {
                swan.unRegister({
                    action: [],
                    data: {
                        castId
                    },
                    fail: function(err) {
                        expect(err.errCode).to.be.not.equal(0);
                        done();
                    }
                });
            });
            it('异常调用:参数必填 #data not required', function(done) {
                swan.unRegister({
                    action,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #data not object', function(done) {
                swan.unRegister({
                    action,
                    data: 'test',
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #castId in data not required', function(done) {
                swan.unRegister({
                    action,
                    data: {},
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #castId in data not String/Number', function(done) {
                swan.unRegister({
                    action,
                    data: {
                        castId: {}
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #success not required', function(done) {
                swan.unRegister({
                    action,
                    data: {
                        castId
                    },
                    fail: () => done()
                });
            });
            it('异常调用:参数类型 #success not function', function(done) {
                swan.unRegister({
                    action,
                    data: {
                        castId
                    },
                    success: 100,
                    fail: () => done()
                });
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    action,
                    data: {
                        castId
                    },
                    success() {},
                    complete: done
                };
                swan.unRegister(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    action,
                    data: {
                        castId
                    },
                    complete: done
                };
                swan.unRegister(params);
            });
        });

        describe('pullMessage', function() {
            let castId = '567496',
                appid = 405384,
                myuk = 'XXX',
                begin = '0',
                end = Number.MAX_SAFE_INTEGER,
                count = '-20';
            it('正常调用:', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        begin,
                        end,
                        count
                    },
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                })
            });
            it('异常调用:参数必填 #action not required', function(done) {
                swan.pullMessage({
                    data: {
                        castId,
                        appid,
                        myuk,
                        begin,
                        end,
                        count
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #action not string', function(done) {
                swan.pullMessage({
                    action: [],
                    data: {
                        castId,
                        appid,
                        myuk,
                        begin,
                        end,
                        count
                    },
                    fail: function(err) {
                        expect(err.errCode).to.be.not.equal(0);
                        done();
                    }
                });
            });
            it('异常调用:参数类型 #appid in data not String/Number', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid: {},
                        myuk,
                        begin,
                        end,
                        count
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #myuk in data not String', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid,
                        myuk: [],
                        begin,
                        end,
                        count
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #castId in data not required', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        appid,
                        myuk,
                        begin,
                        end,
                        count
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #castId in data not String/Number', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId: {},
                        appid,
                        myuk,
                        begin,
                        end,
                        count
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #begin in data not required', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        end,
                        count
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #begin in data not String/Number', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        begin: {},
                        end,
                        count
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #end in data not required', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        beigin,
                        count
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #end in data not String/Number', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        beigin,
                        end: {},
                        count
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #count in data not required', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        beigin,
                        end
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #count in data not String/Number', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        beigin,
                        end,
                        count: {}
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #data not required', function(done) {
                swan.pullMessage({
                    action,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #data not object', function(done) {
                swan.pullMessage({
                    action,
                    data: 'test',
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #success not required', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        begin,
                        end,
                        count
                    },
                    fail: () => done()
                });
            });
            it('异常调用:参数类型 #success not function', function(done) {
                swan.pullMessage({
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        begin,
                        end,
                        count
                    },
                    success: 100,
                    fail: () => done()
                });
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        begin,
                        end,
                        count
                    },
                    success() {},
                    complete: done
                };
                swan.pullMessage(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    action,
                    data: {
                        castId,
                        appid,
                        myuk,
                        begin,
                        end,
                        count
                    },
                    complete: done
                };
                swan.pullMessage(params);
            });
        });

        describe('sendBroadcast', function() {
            let castId = '567496',
                msgID = '1999999999999',
                room_id = 1234,
                type = 100,
                uid = 12345678,
                name = 'Tom',
                at_uid = 1357924680,
                at_name = 'Jerry',
                content = '主播你好';
            it('正常调用', function(done) {
                swan.sendBroadcast({
                    action,
                    data: {
                        castId,
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        },
                        msgID
                    },
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                })
            });
            it('异常调用:参数必填 #action not required', function(done) {
                swan.sendBroadcast({
                    data: {
                        castId,
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        },
                        msgID
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #action not string', function(done) {
                swan.sendBroadcast({
                    action: [],
                    data: {
                        castId,
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        },
                        msgID
                    },
                    fail: function(err) {
                        expect(err.errCode).to.be.not.equal(0);
                        done();
                    }
                });
            });
            it('异常调用:参数必填 #castId in data not required', function(done) {
                swan.sendBroadcast({
                    action,
                    data: {
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        },
                        msgID
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #castId in data not String/Number', function(done) {
                swan.sendBroadcast({
                    action,
                    data: {
                        castId: {},
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        },
                        msgID
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #msgObj in data not required', function(done) {
                swan.sendBroadcast({
                    action,
                    data: {
                        castId,
                        msgID
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #msgObj in data not object', function(done) {
                swan.sendBroadcast({
                    action,
                    data: {
                        castId,
                        msgObj: 11,
                        msgID
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #msgId in data not required', function(done) {
                swan.sendBroadcast({
                    action,
                    data: {
                        castId,
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        }
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #msgId in data not String', function(done) {
                swan.sendBroadcast({
                    action,
                    data: {
                        castId,
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        },
                        msgID: {}
                    },
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #data not required', function(done) {
                swan.sendBroadcast({
                    action,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #data not object', function(done) {
                swan.sendBroadcast({
                    action,
                    data: 'test',
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #success not required', function(done) {
                swan.sendBroadcast({
                    action,
                    data: {
                        castId,
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        },
                        msgID
                    },
                    fail: () => done()
                });
            });
            it('异常调用:参数类型 #success not function', function(done) {
                swan.sendBroadcast({
                    action,
                    data: {
                        castId,
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        },
                        msgID
                    },
                    success: 100,
                    fail: () => done()
                });
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    action,
                    data: {
                        castId,
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        },
                        msgID
                    },
                    success() {},
                    complete: done
                };
                swan.sendBroadcast(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    action,
                    data: {
                        castId,
                        msgObj: {
                            room_id,
                            type,
                            uid,
                            name,
                            at_uid,
                            at_name,
                            content
                        },
                        msgID
                    },
                    complete: done
                };
                swan.sendBroadcast(params);
            });
        });

        describe('getBDUSS', function() {
            it('正常调用:', function(done) {
                swan.getBDUSS({
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                })
            });
            it('异常调用:参数必填 #success not required', function(done) {
                swan.getBDUSS({
                    fail: () => done()
                });
            });
            it('异常调用:参数类型 #success not function', function(done) {
                swan.getBDUSS({
                    success: 100,
                    fail: () => done()
                });
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    success() {},
                    complete: done
                };
                swan.getBDUSS(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    complete: done
                };
                swan.getBDUSS(params);
            });
        });

        describe('getHistory', function() {
            it('正常调用:', function(done) {
                swan.getHistory({
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                })
            });
            it('异常调用:参数必填 #success not required', function(done) {
                swan.getHistory({
                    fail: () => done()
                });
            });
            it('异常调用:参数类型 #success not function', function(done) {
                swan.getHistory({
                    success: 100,
                    fail: () => done()
                });
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    success() {},
                    complete: done
                };
                swan.getHistory(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    complete: done
                };
                swan.getHistory(params);
            });
        });

        describe('deleteHistory', function() {
            it('正常调用:', function(done) {
                let params = {
                    success: () => done(),
                    fail: error => done(error)
                };
                swan.deleteHistory(params);
            });
            it('异常调用:参数必填 #success not required', function(done) {
                swan.deleteHistory({
                    fail: () => done()
                });
            });
            it('异常调用:参数类型 #success not function', function(done) {
                swan.deleteHistory({
                    success: 100,
                    fail: () => done()
                });
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    success() {},
                    complete: done
                };
                swan.deleteHistory(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    complete: done
                };
                swan.deleteHistory(params);
            });
        });

        describe('follow', function() {
            let actionType = '1',
                type = 'media',
                thirdID = '91883jfjasdnj99',
                sfrom = 'sbox',
                source = 'comment_detail';
            it('正常调用:', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID,
                    sfrom,
                    source,
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                }
                swan.follow(params);
            });
            it('异常调用:参数类型 #thirdID not string/number', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID: {},
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.follow(params);
            });
            it('异常调用:参数类型 #store not string', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID,
                    sfrom,
                    source,
                    store: [],
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.follow(params);
            });
            it('异常调用:参数类型 #sfrom not string', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID,
                    sfrom: [],
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.follow(params);
            });
            it('异常调用:参数必填 #actionType not required', function(done) {
                let params = {
                    type,
                    thirdID,
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.follow(params);
            });
            it('异常调用:参数类型 #actionType not string', function(done) {
                let params = {
                    actionType: [],
                    type,
                    thirdID,
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.follow(params);
            });
            it('异常调用:参数必填 #type not required', function(done) {
                swan.follow({
                    actionType,
                    thirdID,
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #type not string', function(done) {
                let params = {
                    actionType,
                    type: [],
                    thirdID,
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.follow(params);
            });
            it('异常调用:参数必填 #thirdID not required', function(done) {
                let params = {
                    actionType,
                    type,
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.follow(params);
            });
            it('异常调用:参数类型 #thirdID not string', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID: [],
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.follow(params);
            });
            it('异常调用:参数必填 #source not required', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID,
                    sfrom,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.follow(params);
            });
            it('异常调用:参数类型 #source not string', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID,
                    sfrom,
                    source: [],
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.follow(params);
            });
            it('异常调用:参数必填 #success not required', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID,
                    sfrom,
                    source,
                    fail: () => done()
                };
                swan.follow(params);
            });
            it('异常调用:参数类型 #success not function', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID,
                    sfrom,
                    source,
                    success: 100,
                    fail: () => done()
                };
                swan.follow(params);
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID,
                    sfrom,
                    source,
                    success() {},
                    complete: done
                };
                swan.follow(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    actionType,
                    type,
                    thirdID,
                    sfrom,
                    source,
                    complete: done
                };
                swan.follow(params);
            });
        });

        describe('getFollowStatus', function() {
            let type = 'media',
                thirdID = '91883jfjasdnj99',
                sfrom = 'sbox',
                source = 'comment_detail';
            it('正常调用:', function(done) {
                let params = {
                    type,
                    thirdID,
                    sfrom,
                    source,
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                }
                swan.getFollowStatus(params);
            });
            it('异常调用:参数类型 #thirdID not string/number', function(done) {
                let params = {
                    type,
                    thirdID: {},
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.getFollowStatus(params);
            });
            it('异常调用:参数类型 #store not string', function(done) {
                let params = {
                    type,
                    thirdID,
                    sfrom,
                    source,
                    store: [],
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.getFollowStatus(params);
            });
            it('异常调用:参数类型 #sfrom not string', function(done) {
                let params = {
                    type,
                    thirdID,
                    sfrom: [],
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.getFollowStatus(params);
            });
            it('异常调用:参数必填 #type not required', function(done) {
                let params = {
                    thirdID,
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.getFollowStatus(params);
            });
            it('异常调用:参数类型 #type not string', function(done) {
                let params = {
                    type: [],
                    thirdID,
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.getFollowStatus(params);
            });
            it('异常调用:参数必填 #thirdID not required', function(done) {
                let params = {
                    type,
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.getFollowStatus(params);
            });
            it('异常调用:参数类型 #thirdID not string', function(done) {
                let params = {
                    type,
                    thirdID: [],
                    sfrom,
                    source,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.getFollowStatus(params);
            });
            it('异常调用:参数必填 #source not required', function(done) {
                let params = {
                    type,
                    thirdID,
                    sfrom,
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.getFollowStatus(params);
            });
            it('异常调用:参数类型 #source not string', function(done) {
                let params = {
                    type,
                    thirdID,
                    sfrom,
                    source: [],
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                };
                swan.getFollowStatus(params);
            });
            it('异常调用:参数必填 #success not required', function(done) {
                let params = {
                    type,
                    thirdID,
                    sfrom,
                    source,
                    fail: () => done()
                };
                swan.getFollowStatus(params);
            });
            it('异常调用:参数类型 #success not function', function(done) {
                let params = {
                    type,
                    thirdID,
                    sfrom,
                    source,
                    success: 100,
                    fail: () => done()
                };
                swan.getFollowStatus(params);
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    type,
                    thirdID,
                    sfrom,
                    source,
                    success() {},
                    complete: done
                };
                swan.getFollowStatus(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    type,
                    thirdID,
                    sfrom,
                    source,
                    complete: done
                };
                swan.getFollowStatus(params);
            });
        });

        describe.skip('requestWalletPolymerPayment', function() {
            let orderinfo = {};
            // 先获取支付所需要的订单信息
            it('正常调用:', function(done) {
                swan.requestWalletPolymerPayment({
                    orderinfo,
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                })
            });
            it('异常调用:参数必填 #orderinfo not required', function(done) {
                swan.requestWalletPolymerPayment({
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数类型 #orderinfo not object', function(done) {
                swan.requestWalletPolymerPayment({
                    orderinfo: 'emmm',
                    fail: () => done(),
                    success: () => done(new Error('配置不符合预期，却成功被执行'))
                });
            });
            it('异常调用:参数必填 #success not required', function(done) {
                swan.requestWalletPolymerPayment({
                    orderinfo,
                    fail: () => done()
                });
            });
            it('异常调用:参数类型 #success not function', function(done) {
                swan.requestWalletPolymerPayment({
                    orderinfo,
                    success: 100,
                    fail: () => done()
                });
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    orderinfo,
                    success() {},
                    complete: done
                };
                swan.requestWalletPolymerPayment(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    orderinfo,
                    complete: done
                };
                swan.requestWalletPolymerPayment(params);
            });
        });

        describe('getIDFA', function() {
            it('正常调用:', function(done) {
                swan.getIDFA({
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                })
            });
            it('异常调用:参数必填 #success not required', function(done) {
                swan.getIDFA({
                    fail: () => done()
                });
            });
            it('异常调用:参数类型 #success not function', function(done) {
                swan.getIDFA({
                    success: 100,
                    fail: () => done()
                });
            });
            it('正确调用: #complete has used', function(done) {
                let params = {
                    success() {},
                    complete: done
                };
                swan.getIDFA(params);
            });
            it('异常调用: #complete has used', function(done) {
                let params = {
                    complete: done
                };
                swan.getIDFA(params);
            });
        });
    }
}