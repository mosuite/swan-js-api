/**
 * @file file case for apiDemo-storage
 * @author yupeng07@baidu.com
 * result: check done [TODO]
 */

describe('storage', function() {
    const noop = () => {};
    const shouldFail = function (name) {
        let str = name ? name : '';
        str += '---配置不符合预期，却成功被执行'
        return new Error(str);
    }
    beforeEach(() => {
        swan.clearStorageSync();
    });
    describe('setStorage', function() {
        // 测试参数准备
        let key = 'setStorage1';
        let data = 'setStorageData';

        let key2 = 'setStorage2';
        let data2 = {
            value: 'setStorageData'
        };

        // 规则开始
        it('正确调用:data<String> 验证已成功存储', function (done) {
            let params = {
                key,
                data,
                success: (res) => {
                    function catchError() {
                        assert.deepEqual(swan.getStorageSync(key), data);
                    }
                    done(catchError());
                },
                fail: done
            };
            swan.setStorage(params);
        });
        it('正确调用:data<Object> 验证已成功存储', function (done) {
            let params = {
                key: key2,
                data: data2,
                success: (res) => {
                    function catchError() {
                        assert.deepEqual(swan.getStorageSync(key2), data2);
                    }
                    done(catchError());
                },
                fail: done
            };
            swan.setStorage(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                key,
                data,
                complete: () => done()
            };
            swan.setStorage(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                complete: () => done()
            };
            swan.setStorage(params);
        });
        it('异常调用:参数必填 #key not required', function (done) {
            let params = {
                data,
                success: (res) => done(shouldFail('setStorage # key not required')),
                fail: () => done()
            };
            swan.setStorage(params);
        });
        it('异常调用:参数类型 #key not string', function (done) {
            let params = {
                key: [],
                data,
                success: (res) => done(shouldFail()),
                fail: () => done()
            };
            swan.setStorage(params);
        });
        it('异常调用:参数必填 #data not required', function (done) {
            let params = {
                key,
                success: (res) => done(shouldFail('setStorage # data not required')),
                fail: () => done()
            };
            swan.setStorage(params);
        });
        it('异常调用:参数类型 #data not string || object', function (done) {
            let params = {
                key,
                data: false,
                success: () => done(shouldFail('setStorage-#data not string || object')),
                fail: () => done()
            };
            swan.setStorage(params);
        });
    });

    describe('setStorageSync', function() {

        // 测试参数准备
        let key = 'setStorageSyncKey1';
        let data = 'setStorageSyncData1';

        let key2 = 'setStorageSyncKey2';
        let data2 = {
            value: 'setStorageSyncData2'
        };
        //规则开始
        it('正确调用:data<String>验证已成功存储', function () {
            swan.setStorageSync(key, data);
            assert.deepEqual(swan.getStorageSync(key), data);
        });
        it('正确调用:data<Object>验证已成功存储', function () {
            swan.setStorageSync(key2, data2);
            assert.deepEqual(swan.getStorageSync(key2), data2);
        });
        it('异常调用:参数必填 #key not required', () => {
            let res = swan.setStorageSync(null, data);
            assert.ok(res.errCode);
        });
        it('异常调用:参数类型 #key not string', () => {
            let res = swan.setStorageSync([], data);
            assert.ok(res.errCode);
        });
        // TODO: boxjs底层不应进行类型转换
        it('异常调用:参数必填 #data not required', () => {
            let res = swan.setStorageSync(key);
            assert.ok(res.errCode, 'setStorageSync # data not required');
        });
        // TODO: boxjs底层不应进行类型转换
        it('异常调用:参数必填 #data not string||object', () => {
            let res = swan.setStorageSync(key, []);
            assert.ok(res.errCode, 'setStorageSync # data not string||object');
        });
    });

    describe('getStorage', function () {

        // 测试参数准备
        const key = 'node';
        const data = {
            engine: 'V8',
            syntax: 'javascript'
        };

        // 开始前准备，存入一个storage
        beforeEach(() => {
            swan.setStorageSync(key, data);
        })

        // 规则开始
        it('正确调用:验证返回结果格式且已与存入的相符', function (done) {
            let params = {
                key,
                success: (res) => {
                    function catchError() {
                        assert.deepEqual(res.data, data);
                    }
                    done(catchError());
                },
                fail: done
            };
            swan.getStorage(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                key,
                success: noop,
                complete: () => done()
            };
            swan.getStorage(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                complete: () => done()
            };
            swan.getStorage(params);
        });
        // todo boxjs底层不应进行类型转换
        it('异常调用:参数必填 #key not required', function (done) {
            let params = {
                success: () => done(shouldFail('getStorage # key not required')),
                fail: () => done()
            };
            swan.getStorage(params);
        });
        it('异常调用:参数类型 #key not string', function (done) {
            let params = {
                key: [],
                fail: () => done()
            };
            swan.getStorage(params);
        });
    });

    describe('getStorageSync', () => {

        // 测试参数准备
        const key = 'php';
        const data = {
            alias: '世界上最好的语言'
        };

        // 开始前准备，存入一个storage
        beforeEach(() => {
            swan.setStorageSync(key, data);
        })

        //规则开始
        it('正确调用:验证与存入结果相同', () => {
            assert.deepEqual(swan.getStorageSync(key), data);
        });
        it('异常调用:参数必填 #key not required', () => {
            const res = swan.getStorageSync();
            assert.ok(res.errCode);
        });
        it('异常调用:参数类型 #key must string', () => {
            const res = swan.getStorageSync([]);
            assert.ok(res.errCode);
        });
    });

    describe('getStorageInfo', function () {

        // 测试参数准备
        const key = 'getStorageInfo';
        const data = {
            value: 'getStorageInfo'
        };

        // 开始前准备，存入一个storage
        beforeEach(() => {
            swan.setStorageSync(key, data);
        })

        // 规则开始
        it('正确调用:验证返回结果格式', function (done) {
            let params = {
                success(res) {
                    assert.ok(Object.prototype.toString.call(res.keys) === '[object Array]');
                    assert.ok(res.keys.length > 0);
                    assert.ok(Object.prototype.toString.call(res.currentSize) === '[object Number]');
                    assert.ok(Object.prototype.toString.call(res.limitSize) === '[object Number]');
                    done();
                },
                fail: done
            };
            swan.getStorageInfo(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                success() {},
                complete: () => done()
            };
            swan.getStorageInfo(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                complete: () => done()
            };
            swan.getStorageInfo(params);
        });
    });

    describe('getStorageInfoSync', () => {

        // 测试参数准备
        const key = 'getStorageInfoSync';
        const data = {
            value: 'getStorageInfoSync'
        };

        // 开始前准备，存入一个storage,确保storage有值
        beforeEach(() => {
            swan.setStorageSync(key, data);
        })

        //规则开始
        it('正确调用:验证返回结果格式', () => {
            let res = swan.getStorageInfoSync();
            assert.ok(Object.prototype.toString.call(res.keys) === '[object Array]');
            assert.ok(res.keys.length > 0);
            assert.ok(Object.prototype.toString.call(res.currentSize) === '[object Number]');
            assert.ok(Object.prototype.toString.call(res.limitSize) === '[object Number]');
        });
    });

    describe('removeStorage', function () {

        // 测试参数准备
        const key = 'removeStorage';
        const data = {
            value: "removeStorage"
        };

        // 开始前准备，存入一个storage
        beforeEach(() => {
            swan.setStorageSync(key, data);
        })

        // 规则开始
        it('正确调用:验证移除后已不在storage里', function (done) {
            let params = {
                key,
                success(res) {
                    function catchError() {
                        assert.ok(!swan.getStorageSync(key));
                    }
                    done(catchError());
                },
                fail: done
            };
            swan.removeStorage(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                key,
                success: noop,
                complete: () => done()
            };
            swan.removeStorage(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                complete: () => done()
            };
            swan.removeStorage(params);
        });
        it('异常调用:参数必填 #key not required', function (done) {
            let params = {
                fail: () => done(),
                success: () => done(shouldFail('removeStorage # key not required'))
            };
            swan.removeStorage(params);
        });
        it('异常调用:参数必填 #key not string', function (done) {
            let params = {
                key: [],
                fail: () => done(),
                success: () => done(shouldFail('removeStorage # key not string'))
            };
            swan.removeStorage(params);
        });
    });

    describe('removeStorageSync', () => {

        // 测试参数准备
        const key = 'removeStorageSync';
        const data = {
            value: 'removeStorageSync'
        };

        // 开始前准备，存入一个storage
        beforeEach(() => {
            swan.setStorageSync(key, data);
        })

        //规则开始
        it('异常调用:参数必填 #key not required', () => {
            const res = swan.removeStorageSync();
            assert.ok(res.errCode);
        });
        it('异常调用:参数类型 #key must string', () => {
            const res = swan.removeStorageSync([]);
            assert.ok(res.errCode);
        });
        it('正确调用:验证移除后已不在storage里', () => {
            swan.removeStorageSync(key);
            assert.ok(!swan.getStorageSync(key));
        });
    });

    describe('clearStorage', function () {

        // 测试参数准备
        const key = 'clearStorage';
        const data = {
            value: "clearStorage"
        };

        // 开始前准备，存入一个storage
        beforeEach(() => {
            swan.setStorageSync(key, data);
        })

        // 规则开始
        it('正确调用:验证移除后storage列表已空', function (done) {
            let params = {
                success(res) {
                    function catchError() {
                        const result = swan.getStorageInfoSync(key);
                        assert.ok(Object.prototype.toString.call(result.keys) === '[object Array]');
                        assert.ok(result.keys.length === 0);
                    }
                    done(catchError());
                },
                fail: done
            };
            swan.clearStorage(params);
        });
    });

    describe('clearStorageSync', function () {

        // 测试参数准备
        const key = 'clearStorageSync';
        const data = {
            value: "clearStorageSync"
        };

        // 开始前准备，存入一个storage
        beforeEach(() => {
            swan.setStorageSync(key, data);
        })

        // 规则开始
        it('正确调用:验证移除后storage列表已空', function () {
            swan.clearStorageSync();
            const result = swan.getStorageInfoSync(key);
            assert.ok(Object.prototype.toString.call(result.keys) === '[object Array]');
            assert.ok(result.keys.length === 0);
        });
    });
});