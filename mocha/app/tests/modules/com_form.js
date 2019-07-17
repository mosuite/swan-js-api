/*eslint-disable */
/**
 * @file demo page for apiDemo
 * @author wulinfei@baidu.com
 */
export default {
    register() {
        let that = this;
        let noop = () => {};
        let deepCopy = this.deepCopy;
        window.noop = noop;
        describe('com_form<skip崩溃退出的异常用例>', function () {

            describe('swan-input', function () {
                let globalData = {
                    value: 'wjwi',
                    type: 'text',
                    password: '0',
                    placeholder: 'haha',
                    maxlength: '20',
                    cursorSpacing: '0',
                    confirmType: 'send',
                    confirmHold: '0',
                    cursor: '2',
                    selectionStart: '2',
                    selectionEnd: '10',
                    adjustPosition: '0',
                    style: {
                        'fontSize': '16',
                        'fontWeight': 'normal',
                        'color': '#000000',
                        'textAlign': 'left'
                    },
                    position: {
                        'left': '1',
                        'top': '5',
                        'width': '200',
                        'height': '20'
                    },
                    cb: 'noop'
                };
                it('正常调用: 参数正确', () => {
                    let inputData = deepCopy(globalData);
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    return boxjs.ui.open(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it.skip('异常调用:类型校验 #value not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.value = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #type not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.type = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params).then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
                });

                it.skip('异常调用:类型校验 #password not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.password = [];
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params).then(res => {
                        done(that.error.shouldFail);
                    }).catch(err => {
                        done();
                    });
                });

                it.skip('异常调用:类型校验 #placeholder not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.placeholder = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #maxlength not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.maxlength = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #cursorSpacing not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.cursorSpacing = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #confirmType not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.confirmType = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #confirmHold not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.confirmHold = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #cursor not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.cursor = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #selectionStart not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.selectionStart = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #selectionEnd not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.selectionEnd = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #adjustPosition not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.adjustPosition = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #style not object', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.style = 234;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #position not object', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.position = 234;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #cb not required', function (done) {
                    let inputData = deepCopy(globalData);
                    delete inputData.cb;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it.skip('异常调用:类型校验 #cb not string', function (done) {
                    let inputData = deepCopy(globalData);
                    inputData.cb = noop;
                    let params = {
                        name: 'swan-input',
                        data: inputData
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            // input组件不存在
            describe.skip('updateInput<input不存在>', function () {
                it('正常调用: 参数正确', () => {
                    let params = {
                        name: 'swan-input'
                    };
                    return boxjs.ui.update(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });
            });

            describe('closeInput', function () {
                it('正常调用: 参数正确', () => {
                    let params = {
                        name: 'swan-input'
                    };
                    return boxjs.ui.close(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });
            });

            describe.skip('showDatePickerView', function () {
                // this.timeout(5000);

                it('正常调用: 参数正确<单测通过,影响展示>', () => {
                    let params = {
                        name: 'swan-datePickerView',
                        data: {
                            start: '10:27',
                            end: '10:50',
                            value: '10:35',
                            mode: 'time',
                            fields: 'day',
                            disabled: false
                        }
                    };
                    return boxjs.ui.open(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });
                it('异常调用:类型校验 #strat not string', function (done) {
                    let params = {
                        name: 'swan-datePickerView',
                        data: {
                            start: noop,
                            end: '10:50',
                            value: '10:35',
                            mode: 'time',
                            fields: 'day',
                            disabled: false
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #end not string', function (done) {
                    let params = {
                        name: 'swan-datePickerView',
                        data: {
                            start: '10:27',
                            end: noop,
                            value: '10:35',
                            mode: 'time',
                            fields: 'day',
                            disabled: false
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #value not string', function (done) {
                    let params = {
                        name: 'swan-datePickerView',
                        data: {
                            start: '10:27',
                            end: '10:50',
                            value: noop,
                            mode: 'time',
                            fields: 'day',
                            disabled: false
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #mode not string', function (done) {
                    let params = {
                        name: 'swan-datePickerView',
                        data: {
                            start: '10:27',
                            end: '10:50',
                            value: '10:35',
                            mode: noop,
                            fields: 'day',
                            disabled: false
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #fields not string', function (done) {
                    let params = {
                        name: 'swan-datePickerView',
                        data: {
                            start: '10:27',
                            end: '10:50',
                            value: '10:35',
                            mode: 'time',
                            fields: noop,
                            disabled: false
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #disabled not boolean', function (done) {
                    let params = {
                        name: 'swan-datePickerView',
                        data: {
                            start: '10:27',
                            end: '10:50',
                            value: '10:35',
                            mode: 'time',
                            fields: 'day',
                            disabled: 'w3erf'
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            describe.skip('openPicker', function () {
                this.timeout(4000);
                it('正常调用: 参数正确<单测通过,影响展示>', () => {
                    let params = {
                        name: 'utils-picker',
                        data: {
                            array: ["a", "b"],
                            current: 1
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用:参数必填 #array not required', function (done) {
                    let params = {
                        name: 'utils-picker',
                        data: {
                            current: 1
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #array not array', function (done) {
                    let params = {
                        name: 'utils-picker',
                        data: {
                            array: 2134,
                            current: 1
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #current not required', function (done) {
                    let params = {
                        name: 'utils-picker',
                        data: {
                            array: ["a", "b"]
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型必填 #current not number', function (done) {
                    let params = {
                        name: 'utils-picker',
                        data: {
                            array: ["a", "b"],
                            current: 'as'
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            describe.skip('openMultipicker', function () {
                this.timeout(4000);
                it('正常调用: 参数正确<单测通过,影响展示>', () => {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            array: [
                                ["a", "b"],
                                ["c", "d"]
                            ],
                            current: [0, 0, 0],
                            cb: 'string'
                        }
                    };
                    return boxjs.ui.open(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });
                it('异常调用:参数必填 #array not required', function (done) {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            current: [0, 0, 0],
                            cb: 'string'
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #array not array', function (done) {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            array: 1234,
                            current: 0,
                            cb: 'string'
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #current not array', function (done) {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            array: [
                                ["a", "b"],
                                ["c", "d"]
                            ],
                            current: 1234,
                            cb: 'string'
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #current not required', function (done) {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            array: [
                                ["a", "b"],
                                ["c", "d"]
                            ],
                            cb: 'string'
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #cb not required', function (done) {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            array: [
                                ["a", "b"],
                                ["c", "d"]
                            ],
                            current: [0, 0, 0]
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #cb not string', function (done) {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            array: [
                                ["a", "b"],
                                ["c", "d"]
                            ],
                            current: [0, 0, 0],
                            cb: noop
                        }
                    };
                    boxjs.ui.open(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            describe('getRegionData', function () {
                let params = {
                    name: 'swan-regionData'
                };
                it('正常调用: 参数正确', () => {
                    return boxjs.data.get(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });
            });

            // 找不到调起协议对应的端能力方法
            describe('updateMultipicker', function () {
                it('正常调用: 参数正确', () => {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            array: [
                                ["a", "b"],
                                ["c", "d"]
                            ],
                            current: 0,
                            column: 0
                        }
                    };
                    return boxjs.ui.update(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用:参数必填 #arrray not arrary', function (done) {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            array: 3455,
                            current: 0,
                            column: 0
                        }
                    };
                    boxjs.ui.update(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #current not number', function (done) {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            array: [
                                ["a", "b"],
                                ["c", "d"]
                            ],
                            current: 'abc',
                            column: 0
                        }
                    };
                    boxjs.ui.update(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #column not number', function (done) {
                    let params = {
                        name: 'utils-multiPicker',
                        data: {
                            array: [
                                ["a", "b"],
                                ["c", "d"]
                            ],
                            current: 0,
                            column: 'abc'
                        }
                    };
                    boxjs.ui.update(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            describe('vibrateShort', function () {
                it('正常调用: 参数正确', () => {
                    return boxjs.device.vibrateShort()
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });
            });
        })
    }
}