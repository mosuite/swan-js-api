/**
 * @file file case for apiDemo-socketTask
 * @author yanghongxue@baidu.com
 * result: check done
 */

describe('SocketTask', function () {
    let that = this;
    const noop = () => {};
    const socket1 = 'ws://echo.websocket.org';
    const socket2 = 'ws://123.207.167.163:9010/ajaxchattest';
    const shouldFail = function (name) {
        let str = name ? name : '';
        str += '---配置不符合预期，却成功被执行'
        return new Error(str);
    }
    describe('close',function () {
        it('正常调用:参数合法', function (done) {
            this.timeout(10000);
            let params = {
                code: 1002,
                reason: 'try close',
                success: () => done(),
                fail: done
            };
            that.socket = swan.connectSocket({
                url: socket1,
                success: () => {
                    that.socket.close(params);
                }
            });
        });
        it('正常调用', function (done) {
            this.timeout(5000);
            let params = {
                success: () => done(),
                fail: done
            };
            that.socket = swan.connectSocket({
                url: socket1,
                success: () => {
                    that.socket.close(params);
                }
            });
        });
    });

    describe('onOpen',function () {
        it('正常调用', function (done) {
            this.timeout(10000);
            that.socket = swan.connectSocket({
                url: socket1,
                fail: done
            });

            that.socket.onOpen((res) => {
                assert(typeof res.header === 'object');
                done();
            });
        });
    });

    describe('onClose',function () {
        it('正常调用', function (done) {
            this.timeout(15000);
            that.socket = swan.connectSocket({
                url: socket2,
                fail: err => done(new Error('connectSocket is fail:' + err))
            });
            that.socket.onClose(() => {
                done();
            });
            that.socket.onOpen(() => {
                setTimeout(function () {
                    that.socket.close({
                        code: 1002,
                        reason: 'closeSocket',
                        fail: err => done(new Error('close 调用异常:' + err))
                    });
                }, 1000);
            });
                
        });
    });

    describe('onMessage',function () {
        it('正常调用', function (done) {
            this.timeout(15000);
            let count = 0;
            that.socket = swan.connectSocket({
                url: socket1,
                fail: (err) => done(new Error('connectSocket is fail:' + err))
            });

            that.socket.onMessage((res) => {
                assert(typeof res === 'object');
                assert.ok(res.data);
                ++count === 1 && done();
                that.socket.close();
            });

            that.socket.onOpen(res => {
                that.socket.send({
                    data: 'test onMessage'
                });
            });
        });
    });

    describe('send',function () {
        it('正常调用', function (done) {
            this.timeout(10000);
            that.socket = swan.connectSocket({
                url: socket1,
                fail: (err) => done(new Error('connectSocket is fail:' + err))
            });
            that.socket.onOpen(() => {
                that.socket.send({
                    data: 'test Task send',
                    success: () => {
                        that.socket.close();
                        done();
                    },
                    fail: (err) => done(new Error('socket send error:' + err))
                });
            });
        });
    });
    // TODO: Android 执行onClose 而非onError
    describe.skip('onError',function () {
        it('正常调用', function (done) {
            let count = 0;
            this.timeout(40000);
            setTimeout(() => {
                that.socket2 = swan.connectSocket({
                    url: 'ws://test.com',
                    fail: err => done(new Error('connectSocket is fail:' + err))
                });

                that.socket2.onError((res) => {
                    console.log('onErroronErroronErroronErroronErroronErroronError');
                    assert(typeof res.errMsg === 'string');
                    ++count === 1 && done();
                });
            }, 20000);
        });
    });
});