/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author sunweinan@baidu.com
 */
export default {
    register() {
        let that = this;
        let noop = () => {};
        describe('storage', function () {
            describe('setStorage', function () {
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
                        success(res) {
                            function catchError() {
                                expect(swan.getStorageSync(key)).to.be.equal(data);
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
                        success(res) {
                            function catchError() {
                                expect(swan.getStorageSync(key2)).to.be.deep.equal(data2);
                            }
                            done(catchError());
                        },
                        fail: done
                    };
                    swan.setStorage(params);
                });
                it('异常调用:参数必填 #key not required', function (done) {
                    let params = {
                        data,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setStorage(params);
                });
                it('异常调用:参数类型 #key not string', function (done) {
                    let params = {
                        key: [],
                        data,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setStorage(params);
                });
                it('异常调用:参数必填 #data not required', function (done) {
                    let params = {
                        key,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setStorage(params);
                });
                it('异常调用:参数类型 #data not string || object', function (done) {
                    let params = {
                        key,
                        data: false,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.setStorage(params);
                });
            });
            describe('setStorageSync', () => {
                // 测试参数准备
                let key = 'setStorageSyncKey1';
                let data = 'setStorageSyncData1';
                let key2 = 'setStorageSyncKey2';
                let data2 = {
                    value: 'setStorageSyncData2'
                };
                // 规则开始
                it('正确调用:data<String>验证已成功存储', () => {
                    swan.setStorageSync(key, data);
                    expect(swan.getStorageSync(key)).to.be.deep.equal(data);
                });
                it('正确调用:data<Object>验证已成功存储', () => {
                    swan.setStorageSync(key2, data2);
                    expect(swan.getStorageSync(key2)).to.be.deep.equal(data2);
                });
                it('异常调用:参数必填 #key not required', () => {
                    expect(() => swan.setStorageSync(null, data)).to.throw(Error);
                });
                it('异常调用:参数类型 #key not string', () => {
                    expect(() => swan.setStorageSync(false, data)).to.throw(Error);
                });
                it('异常调用:参数必填 #data not required', () => {
                    expect(() => swan.setStorageSync(key, null)).to.throw(Error);
                });
                it('异常调用:参数必填 #data not string||object', () => {
                    expect(() => swan.setStorageSync(key, false)).to.throw(Error);
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
                });
                // 规则开始
                it('正确调用:验证返回结果格式且已与存入的相符', function (done) {
                    let params = {
                        key,
                        success(res) {
                            function catchError() {
                                expect(res.data).to.be.deep.equal(data);
                            }
                            done(catchError());
                        },
                        fail: done
                    };
                    swan.getStorage(params);
                });
                it('异常调用:参数必填 #key not required', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.getStorage(params);
                });
                it('异常调用:参数类型 #key not string', function (done) {
                    let params = {
                        key: false,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
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
                });
                // 规则开始
                it('正确调用:验证与存入结果相同', () => {
                    expect(swan.getStorageSync(key)).to.be.deep.equal(data);
                });
                it('异常调用:参数必填 #key not required', () => {
                    expect(() => swan.getStorageSync()).to.throw(Error);
                });
                it('异常调用:参数类型 #key must string', () => {
                    expect(() => swan.getStorageSync(false)).to.throw(Error);
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
                });
                // 规则开始
                it('正确调用:验证返回结果格式', function (done) {
                    let params = {
                        success(res) {
                            function catchError() {
                                expect(res.keys).to.be.an('array');
                                expect(res.keys).to.be.not.empty;
                                expect(res.currentSize).to.be.a('number');
                                expect(res.limitSize).to.be.a('number');
                            }
                            done(catchError());
                        },
                        fail: done
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
                });
                // 规则开始
                it('正确调用:验证返回结果格式', () => {
                    let res = swan.getStorageInfoSync();
                    expect(res.keys).to.be.an('array');
                    expect(res.keys).to.be.not.empty;
                    expect(res.currentSize).to.be.a('number');
                    expect(res.limitSize).to.be.a('number');
                });
            });
            describe('removeStorage', function () {
                // 测试参数准备
                const key = 'removeStorage';
                const data = {
                    value: 'removeStorage'
                };
                // 开始前准备，存入一个storage
                beforeEach(() => {
                    swan.setStorageSync(key, data);
                });
                // 规则开始
                it('正确调用:验证移除后已不在storage里', function (done) {
                    let params = {
                        key,
                        success(res) {
                            function catchError() {
                                expect(swan.getStorageSync(key)).to.not.be.ok;
                            }
                            done(catchError());
                        },
                        fail: done
                    };
                    swan.removeStorage(params);
                });
                it('异常调用:参数必填 #key not required', function (done) {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    swan.removeStorage(params);
                });
                it('异常调用:参数必填 #key not string', function (done) {
                    let params = {
                        key: false,
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
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
                });
                // 规则开始
                it('正确调用:验证移除后已不在storage里', () => {
                    swan.removeStorageSync(key);
                    expect(swan.getStorageSync(key)).to.not.be.ok;
                });
                it('异常调用:参数必填 #key not required', () => {
                    expect(() => swan.removeStorageSync()).to.throw(Error);
                });
            });
            describe('clearStorage', function () {
                // 测试参数准备
                const key = 'clearStorage';
                const data = {
                    value: 'clearStorage'
                };
                // 开始前准备，存入一个storage
                beforeEach(() => {
                    swan.setStorageSync(key, data);
                });
                // 规则开始
                it('正确调用:验证移除后storage列表已空', function (done) {
                    let params = {
                        success(res) {
                            function catchError() {
                                let result = swan.getStorageInfoSync(key);
                                expect(result.keys).to.be.an('array');
                                expect(result.keys).to.be.empty;
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
                    value: 'clearStorageSync'
                };
                // 开始前准备，存入一个storage
                beforeEach(() => {
                    swan.setStorageSync(key, data);
                });
                // 规则开始
                it('正确调用:验证移除后storage列表已空', function () {
                    swan.clearStorageSync();
                    let result = swan.getStorageInfoSync(key);
                    expect(result.keys).to.be.an('array');
                    expect(result.keys).to.be.empty;
                });
            });
        });
        // ===========数据存储API END============= //
    }
}