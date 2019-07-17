/**
 * @file file page for apiDemo
 * @author wuxiaopan@baidu.com
 */
/* globals Page, swan */

export default {
    register() {
        let that = this;
        const url = 'wss://echo.websocket.org';
        /**
         * 执行相关操作
         * @param  {Object} socket socket对象
         * @param  {Function} action 需要执行的函数
         * @return {undefined}       undefined
         */
        const excute = (socket, action) => {
            if (socket.readyState === 1) {
                socket.close({
                    success(res) {
                        action();
                    },
                    fail(err) {
                        console.log('socket close fail', err);
                    }
                });
                return;
            }
            action();
        };

        describe('connectSocket', () => {
            it('正确调用', function (done) {
                that.socket = swan.connectSocket({
                    url,
                    success: res => {
                        console.log('taskid', res.socketTaskId);
                        done();
                    },
                    fail: err => done(err)
                });
                expect(that.socket).to.be.an('object');
            });

            it('异常调用:必需参数:url is required', function (done) {
                that.socket.close({
                    success: res => {
                        that.socket = swan.connectSocket({
                            success: res => {
                                that.socket.close();
                                done(res);
                            },
                            fail: err => done()
                        });
                    },
                    fail: done
                });
            });

            it('异常调用:参数类型:url must be String', function (done) {
                this.timeout(10000);
                function action() {
                    that.socket = swan.connectSocket({
                        url: 100,
                        success: res => {
                            that.socket.close();
                            done(res)
                        },
                        fail: err => done()
                    });
                }
                excute(that.socket, action);
            });

            it('正常调用:执行逻辑:complete', function (done) {
                function action() {
                    that.socket = swan.connectSocket({
                        url,
                        complete: () => {
                            that.socket.close();
                            done();
                        }
                    });
                }
                excute(that.socket, action);
            });

            it('异常调用:执行逻辑:complete', function (done) {
                function action() {
                    that.socket = swan.connectSocket({
                        url: 100,
                        complete: () => {
                            that.socket.close();
                            done();
                        }
                    });
                }
                excute(that.socket, action);
            });
        });

        describe('onSocketOpen', () => {
            it('正确调用', function (done) {
                this.timeout(10000);
                function action() {
                    swan.onSocketOpen(res => {
                        expect(res.header).to.be.an('object');
                        done();
                    });
                    setTimeout(() => {
                        console.log('taskQueue', window.taskQueue);
                        that.socket = swan.connectSocket({
                            url,
                            success: res => {
                                setTimeout(function () {
                                    that.socket.close();
                                }, 3000);
                            },
                            fail(err) {
                                console.log('connectSocket fail', err);
                                done(err);
                            }
                        });
                    }, 2000);
                }
                excute(that.socket, action);
            });
        });

        describe('onSocketError', () => {
            it('正确调用', function (done) {
                this.timeout(10000);
                function action() {
                    let count = 0;
                    swan.onSocketError(err => {
                        ++count === 0 && done();
                    });
                    that.socket = swan.connectSocket({
                        url: 'wss://xxx.xxx.org',
                        fail(err) {
                            console.log('connect fail', err);
                        }
                    });
                }
                excute(that.socket, action);
            });
        });

        describe('sendSocketMessage', () => {
            it('正确调用:String', function (done) {
                this.timeout(10000);
                function action() {
                    that.socket = swan.connectSocket({
                        url,
                        fail(err) {
                            console.log('connectSocket fail', err);
                        }
                    });
                    that.socket.onOpen(res => {
                        console.log('socket open', res);
                        swan.sendSocketMessage({
                            data: 'dataType: string',
                            success: () => {
                                that.socket.close();
                                done();
                            },
                            fail(err) {
                                done(err);
                            }
                        });
                    });
                }
                excute(that.socket, action);
            });

            it('正确调用:ArrayBuffer', function (done) {
                this.timeout(10000);
                function action() {
                    that.socket = swan.connectSocket({
                        url,
                        fail(err) {
                            console.log('connectSocket fail', err);
                        }
                    });
                    that.socket.onOpen(res => {
                        console.log('socket open', res);
                        let buffer = new ArrayBuffer(10000);
                        let dataView = new DataView(buffer);
                        let int8View = new Int8Array(buffer);
                        dataView.setInt32(0, 0x1234ABCD);
                        swan.sendSocketMessage({
                            data: buffer,
                            success: () => {
                                that.socket.close();
                                done();
                            },
                            fail(err) {
                                done(err);
                            }
                        });
                    });
                }
                setTimeout(() => {
                    excute(that.socket, action)
                }, 2000);
            });
        });

        describe('closeSocket', () => {
            it('正确调用', function (done) {
                this.timeout(10000);
                function action() {
                    let count = 0;
                    that.socket = swan.connectSocket({
                        url,
                        success(res) {
                            swan.closeSocket({
                                success: () => {
                                    ++count === 1 && done();
                                },
                                fail: (err) => done(err)
                            });
                        },
                        fail(err) {
                            console.log('connectSocket fail', err);
                        }
                    });
                }

                excute(that.socket, action);
            });
        });

        describe('onSocketClose', () => {
            it('正确调用', function (done) {
                this.timeout(10000);
                function action() {
                    swan.onSocketClose(res => {
                        done();
                    });
                    that.socket = swan.connectSocket({
                        url,
                        success: function (res) {
                            console.log('connect success');
                            that.socket.onClose(() => {
                                done();
                            });
                            that.socket.close();
                        },
                        fail(err) {
                            console.log('connectSocket fail', err);
                            done(err);
                        }
                    });

                }

                excute(that.socket, action);
            });
        });

    }
}