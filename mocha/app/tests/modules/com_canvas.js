/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author xiongyang@baidu.com
 */

export default {
    register() {
        let that = this;
        let noop = () => {};

        describe('com_canvas', () => {
            // 测试数据准备 与双端人员已确认 各个参数都为必填
            let canvasId = 'myCanvas';
            let slaveId = '1';
            let hide = '1';
            let disableScroll = '1';
            let gesture = '1';
            let position = {
                height: 0,
                left: 0,
                top: 337,
                width: 0,
            };

            // 测试开始
            // insertCanvas
            describe('insertCanvas', () => {
                it('正确调用', () => {
                    return boxjs.canvas.insert({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        expect(res).to.be.an('object');
                        expect(res.errCode).to.be.not.ok;
                    })
                })

                // 异常调用: 参数缺失
                it('异常调用：#canvasId not requird', (done) => {
                    boxjs.canvas.insert({
                        slaveId,
                        hide,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#slaveId not requird', (done) => {
                    boxjs.canvas.insert({
                        canvasId,
                        hide,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#hide not requird', (done) => {
                    boxjs.canvas.insert({
                        canvasId,
                        slaveId,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#disableScroll not requird', (done) => {
                    boxjs.canvas.insert({
                        canvasId,
                        slaveId,
                        hide,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#gesture not requird', (done) => {
                    boxjs.canvas.insert({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#position not requird', (done) => {
                    boxjs.canvas.insert({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll,
                        gesture
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用: 参数类型异常
                it('异常调用：#canvasId not string', (done) => {
                    boxjs.canvas.insert({
                        canvasId: [],
                        slaveId,
                        hide,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#slaveId not string', (done) => {
                    boxjs.canvas.insert({
                        canvasId,
                        slaveId: [],
                        hide,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#hide not string', (done) => {
                    boxjs.canvas.insert({
                        canvasId,
                        slaveId,
                        hide: {},
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#disableScroll not string', (done) => {
                    boxjs.canvas.insert({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll: {},
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#gesture not string', (done) => {
                    boxjs.canvas.insert({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll,
                        gesture: [],
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#position not obj', (done) => {
                    boxjs.canvas.insert({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll,
                        gesture,
                        position: false
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
            });

            // updateCanvas
            describe('updateCanvas', function () {
                // 正确调用
                it('正确调用', () => {
                    return boxjs.canvas.update({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        expect(res).to.be.an('object');
                        expect(res.errCode).to.be.not.ok;
                    })
                })

                // 异常调用：无该canvas
                it('异常调用：#canvasId not', (done) => {
                    boxjs.canvas.update({
                        canvasId: 'sss',
                        slaveId,
                        hide,
                        disableScroll,
                        gesture: [],
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用: 参数缺失
                it('异常调用：#canvasId not requird', (done) => {
                    boxjs.canvas.update({
                        slaveId,
                        hide,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                it('异常调用：#slaveId not requird', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        hide,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#hide not requird', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        slaveId,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#disableScroll not requird', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        slaveId,
                        hide,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#gesture not requird', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#position not requird', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll,
                        gesture
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用: 参数类型异常
                it('异常调用：#canvasId not string', (done) => {
                    boxjs.canvas.update({
                        canvasId: [],
                        slaveId,
                        hide,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#slaveId not string', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        slaveId: [],
                        hide,
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#hide not string', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        slaveId,
                        hide: {},
                        disableScroll,
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#disableScroll not string', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll: {},
                        gesture,
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#gesture not string', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll,
                        gesture: [],
                        position
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#position not obj', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        slaveId,
                        hide,
                        disableScroll,
                        gesture,
                        position: false
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
            });

            // removeCanvas
            describe('removeCanvas', () => {
                // 正确调用
                it('正确调用', () => {
                    return boxjs.canvas.remove({
                        canvasId,
                        slaveId,
                    }).then(res => {
                        expect(res).to.be.an('object');
                        expect(res.errCode).to.be.not.ok;
                    })
                })

                // 异常调用：无该canvas
                it('异常调用：#canvas no', (done) => {
                    boxjs.canvas.remove({
                        canvasId: '123',
                        slaveId,
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用 参数缺失
                it('异常调用：#canvasId not require', (done) => {
                    boxjs.canvas.update({
                        slaveId,
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#slaveId not require', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

                // 异常调用 参数类型异常
                it('异常调用：#canvasId not string', (done) => {
                    boxjs.canvas.update({
                        canvasId: {},
                        slaveId,
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })
                it('异常调用：#slaveId not string', (done) => {
                    boxjs.canvas.update({
                        canvasId,
                        slaveId: 123,
                    }).then(res => {
                        done(this.error.shouldFail)
                    }).catch(error => {
                        done()
                    })
                })

            });
        })
    }
}