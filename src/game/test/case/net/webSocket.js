/**
 * @file file case for apiDemo-websocket
 * @author yanghongxue@baidu.com
 * result: check done
 */

describe('webSocket', function () {
    let that = {};
    const noop = () => {};
    const socket1 = 'ws://echo.websocket.org';
    const socket2 = 'ws://123.207.167.163:9010/ajaxchattest';
    const shouldFail = function (name) {
        let str = name ? name : '';
        str += '---配置不符合预期，却成功被执行'
        return new Error(str);
    }

    describe('connectSocket', function () {
        it('正确调用: #url is available', function (done) {
            this.timeout(5000);
            that.socket = swan.connectSocket({
                url: socket1,
                success: (res) => {
                    assert(typeof res.socketTaskId === 'string');
                    that.socket.close();
                    done();
                },
                fail: done
            });
        });
        it('正确调用: #complete has used', function (done) {
            that.socket = swan.connectSocket({
                url: socket1,
                complete: () => done()
            });
        });
        it('正确调用: #url is not available', function (done) {
            that.socket = swan.connectSocket({
                url: 'ws://sss.com',
                method: 'CONNECT',
                protocolsArray: [],
                success: res => {
                    assert(typeof res.socketTaskId === 'string');
                    that.socket.close();
                    done();
                },
                fail: () => done()
            });
        });
        it('异常调用 #url not required', function (done) {
            let params = {
                protocolsArray: [],
                success: () => {
                    done(new Error('参数不符合预期，却成功被执行'));
                },
                fail: () => done()
            };
            that.socket = swan.connectSocket(params);
        });
        it('异常调用 #url must string', function (done) {
            let params = {
                url: noop,
                protocolsArray: [],
                success: () => done(new Error('参数不符合预期，却成功被执行')),
                fail: () => {
                    done();
                }
            };
            that.socket = swan.connectSocket(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                url: '1234',
                data: {},
                complete: () => {
                    that.socket.close();
                    done();
                }
            };
            that.socket = swan.connectSocket(params);
        });
        it('异常调用: #succee not function', function (done) {
            let params = {
                url: socket1,
                success: 100,
                fail: () => {
                    that.socket.close();
                    done();
                }
            };
            that.socket = swan.connectSocket(params);
        });
    });

    describe('onSocketOpen', function () {
        it('正常调用:参数正确', function (done) {
            this.timeout(5000);
            let count = 0;
            swan.onSocketOpen((res) => {
                assert(typeof res.header === 'object');
                that.socket.close();
                ++count === 1 && done();
            });
            setTimeout(() => {
                that.socket = swan.connectSocket({
                    url: socket1
                });
            }, 1000);
        });
    });

    describe('onSocketError', function () {
        it('正常调用:参数正确', function (done) {
            this.timeout(20000);
            let count = 0;
            swan.onSocketError(err => {
                assert(typeof err === 'object');
                that.socket.close();
                ++count === 1 && done();
            });
            that.socket = swan.connectSocket({
                url: 'wss://xxx.xxx.org',
                fail: err => done(err)
            });
        });
    });

    describe('sendSocketMessage', function () {
        let data1 = 'sendMessage string';
        before(function() {
            that.socket = swan.connectSocket({
                url: socket1
            });
        });
        it('正常调用: #data is string', function (done) {
            this.timeout(10000);
            let count = 0;
            that.socket.onOpen(res => {
                swan.sendSocketMessage({
                    data: 'dataType: string',
                    success: () => {
                        ++count === 1 && done();
                    },
                    fail: err => done(err)
                });
            });
        });
        it('正常调用: #data is Array', function (done) {
            this.timeout(10000);
            let count = 0;
            let data  = new ArrayBuffer(40);
            swan.sendSocketMessage({
                data: data,
                success: () => {
                    ++count === 1 && done();
                },
                fail: err => done(err)
            });
        });
        it('异常调用: #data not required', function (done) {
            this.timeout(10000);
            let count = 0;
            swan.sendSocketMessage({
                success: () => done(shouldFail('data not required')),
                fail: () => {
                    ++count === 1 && done();
                }
            });
        });
        it('异常调用: #complete has used', function (done) {
            this.timeout(10000);
            let count = 0;
            swan.sendSocketMessage({
                data: data1,
                success: 100,
                complete: () => {
                    ++count === 1 && done();
                }
            });
        });
        after(function () {
            that.socket.close();
        });
    });

    describe('closeSocket', function () {
        beforeEach(function() {
            that.socket = swan.connectSocket({
                url: socket1
            });
        });
        it('正常调用:参数合法', function (done) {
            let count = 0;
            let params = {
                code: 1002,
                reason: 'error message',
                success: () => {
                    ++count === 1 && done();
                }
            };
            that.socket.onOpen(() => {
                swan.closeSocket(params);
            });
        });

        it('异常调用:#params is null', function (done) {
            let count = 0;
            let params = {
                success: () => done(shouldFail('params is null')),
                fail: () => {
                    ++count === 1 && done();
                }
            };
            that.socket.onOpen(() => {
                swan.closeSocket(params);
            });
        });

        it('异常调用:#reason used Number', function (done) {
            let count = 0;
            let params = {
                reason: 1006,
                success: () => done(shouldFail('reason used Number')),
                fail: () => {
                    ++count === 1 && done();
                }
            };
            that.socket.onOpen(() => {
                swan.closeSocket(params);
            });
        });

        afterEach(function () {
            that.socket.close();
        });
    });

    describe('onSocketMessage', function () {
        afterEach(function() {
            that.socket.close();
        });
        let data = 'sendMessage string';
        it('正常调用: listen sendSocketMessage', function (done) {
            this.timeout(10000);
            let count = 0;
            swan.onSocketMessage((res) => {
                assert(typeof res === 'object');
                assert(typeof res.data === 'string');
                assert.deepEqual(res.data, data);
                that.socket.close();
                ++count === 1 && done();
            });
            setTimeout(() => {
                that.socket = swan.connectSocket({
                    url: socket1,
                    fail: err => done(err)
                });
                that.socket.onOpen(res => {
                    swan.sendSocketMessage({
                        data: data
                    });
                });
            }, 2000);
        });

        it('正常调用: listen Task send', function (done) {
            this.timeout(10000);
            let count = 0;
            swan.onSocketMessage(res => {
                assert(typeof res === 'object');
                assert(typeof res.data === 'string');
                assert.deepEqual(res.data, data);
                that.socket.close();
                ++count === 1 && done();
            });
            setTimeout(() => {
                that.socket = swan.connectSocket({
                    url: socket1,
                    fail: err => done(err)
                });
                that.socket.onOpen(res => {
                    that.socket.send({
                        data: data
                    });
                });
            }, 2000);
        });
    });
    
    describe('onSocketClose', function () {
        it('正常调用:参数合法', function (done) {
            this.timeout(25000);
            let count = 0;
            swan.onSocketClose(() => {
                ++count === 1 && done();
            });
            that.socket = swan.connectSocket({
                url: socket1,
                fail: done
            });
            that.socket.onOpen(() => {
                that.socket.close();
            });
        });
    });
});