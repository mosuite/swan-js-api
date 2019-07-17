/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author sunweinan@baidu.com
 */
export default {
    register() {
        let that = this;
        let noop = () => {};
        let url = '/pages/canvas/canvas';

        // ===========createCameraContext API START============= //

        describe('createCameraContext', () => {
            // 规则开始
            it('正确调用', () => {
                that.cameraCtx = swan.createCameraContext();
                expect(that.cameraCtx).to.be.ok;
            });
        });

        describe('createCameraContext: takePhoto', () => {
            // 规则开始
            it('正确调用', () => {
                let params = {
                    success: res => {
                        function catchError(done) {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                };
                that.cameraCtx.takePhoto(params);
            });
            it('异常调用:参数类型 #params not object', () => {
                expect(() => that.cameraCtx.takePhoto(111)).to.throw(Error);
            });
            it('异常调用:参数类型 #quality not string', done => {
                let params = {
                    quality: [],
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                that.cameraCtx.takePhoto(params);
            });
        });

        describe('createCameraContext: startRecord', () => {
            // 规则开始
            it('正确调用', done => {
                let params = {
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                };
                that.cameraCtx.startRecord(params);
            });
            it('异常调用:参数类型 #params not object', () => {
                expect(() => that.cameraCtx.startRecord(111)).to.throw(Error);
            });
        });

        describe('createCameraContext: stopRecord', () => {
            // 规则开始
            it('正确调用', done => {
                let params = {
                    success: res => {
                        function catchError() {
                            expect(res).to.be.an('object');
                            expect(res.tempThumbPath).to.be.ok;
                            expect(res.tempVideoPath).to.be.ok;
                        }
                        done(catchError());
                    },
                    fail: error => done(error)
                };
                that.cameraCtx.stopRecord(params);
            });
            it('异常调用:参数类型 #params not object', () => {
                expect(() => that.cameraCtx.stopRecord(111)).to.throw(Error);
            });
        });

        // // ===========导航 END============= //
        // // ===========animation START============= //
        describe('createAnimation&&animation', function () {
            // this.timeout(5500);

            // 测试参数准备
            let duration = 3000;
            let timingFunction = "ease-in";
            let delay = 1000;
            let transformOrigin = '50% 50%';

            // 规则开始
            it('异常调用:参数类型 #duration not number', () => {
                let params = {
                    duration: 'test',
                    timingFunction,
                    delay,
                    transformOrigin
                };
                expect(() => swan.createAnimation(params)).to.throw(Error);
            });
            it('异常调用:参数类型 #timingFunction not legal', () => {
                let params = {
                    duration,
                    timingFunction: "test",
                    delay,
                    transformOrigin
                };
                expect(() => swan.createAnimation(params)).to.throw(Error);
            });
            it('异常调用:参数类型 #delay not number', () => {
                let params = {
                    duration,
                    timingFunction,
                    delay: 'test',
                    transformOrigin
                };
                expect(() => swan.createAnimation(params)).to.throw(Error);
            });
            it('异常调用:参数类型 #transformOrigin not string', () => {
                let params = {
                    duration,
                    timingFunction,
                    delay,
                    transformOrigin: []
                };
                expect(() => swan.createAnimation(params)).to.throw(Error);
            });
            it('正确调用:#createAnimation 参数正确', function () {
                let params = {
                    duration,
                    timingFunction,
                    delay,
                    transformOrigin
                };
                let animation = swan.createAnimation(params);
                expect(animation).to.be.an('object');
            });
            it('正确调用:#animation 各方法可用性', function () {
                let params = {
                    duration,
                    timingFunction,
                    delay,
                    transformOrigin
                };

                let animation = swan.createAnimation(params);

                animation.backgroundColor('#f00000');
                animation.opacity(0.8);
                animation.width(200).height(200);
                animation.top(200).bottom(200);
                animation.left(200).right(200);

                animation.rotate(90);
                animation.rotateX(-90);
                animation.rotateY(-90);
                animation.rotateZ(-90);
                animation.rotate3d(1, 1, 1, 90);

                animation.scale(90);
                animation.scaleX(-90);
                animation.scaleY(-90);
                animation.scaleZ(-120);
                animation.scale3d(1, 1, 1, 90);

                animation.translate(90);
                animation.translateX(-90);
                animation.translateY(-90);
                animation.translateZ(-120);
                animation.translate3d(1, 1, 1, 90);

                animation.skew(90);
                animation.skewX(-90);
                animation.skewY(-120);

                animation.matrix3d((1, 0, 0, 0, 0, Math.cos(30), Math.sin(30), 0, 0, -Math.sin(30), Math.cos(30), 0, 0, 0, 0, 1))
                animation.matrix(1, 0, 0, 1, 30, 30);

            });

            it('正确调用:验证链式调用返回自身', function () {
                let params = {
                    duration,
                    timingFunction,
                    delay,
                    transformOrigin
                };

                let animation = swan.createAnimation(params);
                let res = animation.backgroundColor('#f00000');

                expect(animation).to.be.equal(res);
            });

            it('正确调用:验证动画队列配置', function () {
                let params = {
                    duration,
                    timingFunction,
                    delay,
                    transformOrigin
                };

                let animation = swan.createAnimation(params);

                animation.rotate(90).translateY(10).step();
                animation.rotate(-90).translateY(-10).step();

                let animationExport = animation.export();

                expect(animationExport).to.be.an('object');
                expect(animationExport.commandSetQueue).to.be.an('array');
                expect(animationExport.configuration).to.be.an('object');
            });
        });
        // // ===========animation END============= //

        describe('canvas', () => {
            describe('createCanvasContext', () => {
                // 规则开始
                it('异常调用:不存在的DOMID', () => {
                    expect(() => swan.createCanvasContext('myCanvas2')).to.throw(Error);
                });
                it('正确调用', () => {
                    let ctx = swan.createCanvasContext('myCanvas');
                    expect(ctx).to.be.ok;
                    ctx.setFillStyle('red')
                    ctx.fillRect(10, 10, 150, 75)
                    ctx.draw()
                    that.ctx = ctx;
                });
            });

            describe('setFillStyle', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    expect(() => that.ctx.setFillStyle('red')).to.not.throw(Error);
                });
                it('异常调用:参数必填 #color', () => {
                    expect(() => that.ctx.setFillStyle()).to.throw(Error);
                });
                it('异常调用:参数类型 #color not hex', () => {
                    expect(() => that.ctx.setFillStyle('color')).to.throw(Error);
                });
                it('异常调用:参数类型 #color not string', () => {
                    expect(() => that.ctx.setFillStyle(100)).to.throw(Error);
                });
            });

            describe('setStrokeStyle', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    expect(() => that.ctx.setStrokeStyle('red')).to.not.throw(Error);
                });
                it('异常调用:参数必填 #color', () => {
                    expect(() => that.ctx.setStrokeStyle()).to.throw(Error);
                });
                it('异常调用:参数类型 #color not hex', () => {
                    expect(() => that.ctx.setStrokeStyle('color')).to.throw(Error);
                });
                it('异常调用:参数类型 #color not string', () => {
                    expect(() => that.ctx.setStrokeStyle(100)).to.throw(Error);
                });
            });

            describe('setShadow', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    expect(() => that.ctx.setShadow(10, 50, 50, 'blue')).to.not.throw(Error);
                });
                it('异常调用:参数必填 #blur', () => {
                    expect(() => that.ctx.setShadow(10, 50, undefined, 'blue')).to.throw(Error);
                });
                it('异常调用:参数类型 #blur not number', () => {
                    expect(() => that.ctx.setShadow(10, 50, 'blur', 'blue')).to.throw(Error);
                });
                it('异常调用:参数类型 #blur < min', () => {
                    expect(() => that.ctx.setShadow(10, 50, -2, 'blue')).to.throw(Error);
                });
                it('异常调用:参数类型 #blur > max', () => {
                    expect(() => that.ctx.setShadow(10, 50, 101, 'blue')).to.throw(Error);
                });
                it('异常调用:参数必填 #offsetX', () => {
                    expect(() => that.ctx.setShadow(undefined, 50, 50, 'blue')).to.throw(Error);
                });
                it('异常调用:参数类型 #offsetX not number', () => {
                    expect(() => that.ctx.setShadow('offsetX', 50, 50, 'blue')).to.throw(Error);
                });
                it('异常调用:参数必填 #offsetY', () => {
                    expect(() => that.ctx.setShadow(10, undefined, 50, 'blue')).to.throw(Error);
                });
                it('异常调用:参数类型 #offsetY not number', () => {
                    expect(() => that.ctx.setShadow(10, 'offsetY', 50, 'blue')).to.throw(Error);
                });
                it('异常调用:参数必填 #color', () => {
                    expect(() => that.ctx.setShadow(10, 50, 50)).to.throw(Error);
                });
                it('异常调用:参数类型 #color not hex', () => {
                    expect(() => that.ctx.setShadow(10, 50, 50, 'color')).to.throw(Error);
                });
                it('异常调用:参数类型 #color not string', () => {
                    expect(() => that.ctx.setShadow(10, 50, 50, 50)).to.throw(Error);
                });
            });

            describe('createLinearGradient', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.grd = that.ctx.createLinearGradient(0, 0, 200, 0);
                });
                it('异常调用:参数必填 #x0', () => {
                    expect(() => that.ctx.createLinearGradient(undefined, 0, 200, 0)).to.throw(Error);
                });
                it('异常调用:参数类型 #x0 not number', () => {
                    expect(() => that.ctx.createLinearGradient('x0', 0, 200, 0)).to.throw(Error);
                });
                it('异常调用:参数必填 #y0', () => {
                    expect(() => that.ctx.createLinearGradient(0, undefined, 200, 0)).to.throw(Error);
                });
                it('异常调用:参数类型 #y0 not number', () => {
                    expect(() => that.ctx.createLinearGradient(0, 'y0', 200, 0)).to.throw(Error);
                });
                it('异常调用:参数必填 #x1', () => {
                    expect(() => that.ctx.createLinearGradient(0, 0, undefined, 0)).to.throw(Error);
                });
                it('异常调用:参数类型 #x1 not number', () => {
                    expect(() => that.ctx.createLinearGradient(0, 0, 'x1', 0)).to.throw(Error);
                });
                it('异常调用:参数必填 #y1', () => {
                    expect(() => that.ctx.createLinearGradient(0, 0, 200, undefined)).to.throw(Error);
                });
                it('异常调用:参数类型 y1 not number', () => {
                    expect(() => that.ctx.createLinearGradient(0, 0, 200, 'y1')).to.throw(Error);
                });
            });

            describe('addColorStop', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                    expect(that.grd).to.be.ok;
                })

                // 参数准备
                let stop = 0.15;
                let color = 'orange';

                // 规则开始
                it('正确调用', () => {
                    expect(() => that.grd.addColorStop(stop, color)).to.not.throw(Error);
                });
                it('异常调用:参数类型 #stop not number', () => {
                    expect(() => that.grd.addColorStop('stop', color)).to.throw(Error);
                });
                it('异常调用:参数类型 #stop not in minrange', () => {
                    expect(() => that.grd.addColorStop(-0.2, color)).to.throw(Error);
                });
                it('异常调用:参数类型 #stop not in maxrange', () => {
                    expect(() => that.grd.addColorStop(1.2, color)).to.throw(Error);
                });
                it('异常调用:参数类型 #color not Color', () => {
                    expect(() => that.grd.addColorStop(stop, noop)).to.throw(Error);
                });
            });

            describe('setLineCap', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })
                // 参数准备
                let lineCap = 'butt';

                // 规则开始
                it('正确调用', () => {
                    expect(() => that.ctx.setLineCap(lineCap)).to.not.throw(Error);
                });
                it('异常调用:参数类型 #lineCap not string', () => {
                    expect(() => that.ctx.setLineCap(noop)).to.throw(Error);
                });
                it('异常调用:参数类型 #lineCap not support', () => {
                    expect(() => that.ctx.setLineCap('lineCap')).to.throw(Error);
                });
            });

            describe('setLineJoin', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })
                // 参数准备
                let lineJoin = 'bevel';

                // 规则开始
                it('正确调用', () => {
                    expect(() => that.ctx.setLineJoin(lineJoin)).to.not.throw(Error);
                });
                it('异常调用:参数类型 #lineJoin not string', () => {
                    expect(() => that.ctx.setLineJoin(noop)).to.throw(Error);
                });
                it('异常调用:参数类型 #lineJoin not support', () => {
                    expect(() => that.ctx.setLineJoin('lineJoin')).to.throw(Error);
                });
            });

            describe('setLineDash', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 参数准备
                let pattern = [10, 20];
                let offset = 5;

                // 规则开始
                it('正确调用', () => {
                    expect(() => that.ctx.setLineDash(pattern, offset)).to.not.throw(Error);
                });
                it('异常调用:参数类型 #pattern not array', () => {
                    expect(() => that.ctx.setLineDash(noop, offset)).to.throw(Error);
                });
                it('异常调用:参数类型 #pattern not arraynumber', () => {
                    expect(() => that.ctx.setLineDash(['aa', 'bb'], offset)).to.throw(Error);
                });
                it('异常调用:参数类型 #pattern very big or small', () => {
                    expect(() => that.ctx.setLineDash([10000000000000, -100000000000], offset)).to.throw(Error);
                });
                it('异常调用:参数类型 #offset not number', () => {
                    expect(() => that.ctx.setLineDash(pattern, 'offset')).to.throw(Error);
                });
                //异常case导致程序无响应，不通过
                it('异常调用:参数类型 #offset very big', () => {
                    expect(() => that.ctx.setLineDash(pattern, 10000000000000)).to.throw(Error);
                });
            });

            describe('setMiterLimit', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })
                // 参数准备
                let miterLimit = 1;

                // 规则开始
                it('正确调用', () => {
                    expect(() => that.ctx.setMiterLimit(miterLimit)).to.not.throw(Error);
                });
                it('异常调用:参数类型 #miterLimit not number', () => {
                    expect(() => that.ctx.setMiterLimit(noop)).to.throw(Error);
                });
            });

            describe('rect', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.rect(10, 10, 150, 75);
                });
                it('异常调用:参数类型 #x not number', () => {
                    expect(() => that.ctx.rect(noop, 10, 150, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #y not number', () => {
                    expect(() => that.ctx.rect(10, noop, 150, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #width not number', () => {
                    expect(() => that.ctx.rect(10, 10, noop, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #height not number', () => {
                    expect(() => that.ctx.rect(10, 10, 150, noop)).to.throw(Error);
                });
            });

            describe('fillRect', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.fillRect(10, 10, 150, 75);
                });
                it('异常调用:参数类型 #x not number', () => {
                    expect(() => that.ctx.fillRect(noop, 10, 150, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #y not number', () => {
                    expect(() => that.ctx.fillRect(10, noop, 150, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #width not number', () => {
                    expect(() => that.ctx.fillRect(10, 10, noop, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #height not number', () => {
                    expect(() => that.ctx.fillRect(10, 10, 150, noop)).to.throw(Error);
                });
            });

            describe('strokeRect', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.strokeRect(10, 10, 150, 75);
                });
                it('异常调用:参数类型 #x not number', () => {
                    expect(() => that.ctx.strokeRect(noop, 10, 150, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #y not number', () => {
                    expect(() => that.ctx.strokeRect(10, noop, 150, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #width not number', () => {
                    expect(() => that.ctx.strokeRect(10, 10, noop, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #height not number', () => {
                    expect(() => that.ctx.strokeRect(10, 10, 150, noop)).to.throw(Error);
                });
            });

            describe('clearRect', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.clearRect(10, 10, 150, 75);
                });
                it('异常调用:参数类型 #x not number', () => {
                    expect(() => that.ctx.clearRect(noop, 10, 150, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #y not number', () => {
                    expect(() => that.ctx.clearRect(10, noop, 150, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #width not number', () => {
                    expect(() => that.ctx.clearRect(10, 10, noop, 75)).to.throw(Error);
                });
                it('异常调用:参数类型 #height not number', () => {
                    expect(() => that.ctx.clearRect(10, 10, 150, noop)).to.throw(Error);
                });
            });

            describe('fill', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.fill();
                });
            });



            describe('beginPath', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.beginPath();
                });
            });

            describe('closePath', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.closePath();
                });
            });

            describe('stroke', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.stroke();
                });
            });
            describe('moveTo', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.moveTo(10, 10);
                });
                it('异常调用:参数类型 #x not number', () => {
                    expect(() => that.ctx.moveTo(noop, 10)).to.throw(Error);
                });
                it('异常调用:参数类型 #y not number', () => {
                    expect(() => that.ctx.moveTo(10, noop)).to.throw(Error);
                });
            });

            describe('lineTo', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.lineTo(10, 10);
                });
                it('异常调用:参数类型 #x not number', () => {
                    expect(() => that.ctx.lineTo(noop, 10)).to.throw(Error);
                });
                it('异常调用:参数类型 #y not number', () => {
                    expect(() => that.ctx.lineTo(10, noop)).to.throw(Error);
                });
            });

            describe('arc', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
                });
                it('异常调用:参数类型 #x not number', () => {
                    expect(() => that.ctx.arc(noop, 75, 50, 0, 2 * Math.PI)).to.throw(Error);
                });
                it('异常调用:参数类型 #y not number', () => {
                    expect(() => that.ctx.arc(100, noop, 50, 0, 2 * Math.PI)).to.throw(Error);
                });
                it('异常调用:参数类型 #r not number', () => {
                    expect(() => that.ctx.arc(100, 75, noop, 0, 2 * Math.PI)).to.throw(Error);
                });
                it('异常调用:参数类型 #sAngle not number', () => {
                    expect(() => that.ctx.arc(100, 75, 50, noop, 2 * Math.PI)).to.throw(Error);
                });
                it('异常调用:参数类型 #eAngle not number', () => {
                    expect(() => that.ctx.arc(100, 75, noop, 0, noop)).to.throw(Error);
                });
                it('异常调用:参数类型 #counterclockwise not boolean', () => {
                    expect(() => that.ctx.arc(100, 75, 50, 0, 2 * Math.PI, noop)).to.throw(Error);
                });

            });

            describe('bezierCurveTo', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.bezierCurveTo(100, 25, 75, 25, 50, 50);
                });
                it('异常调用:参数类型 #cp1x not number', () => {
                    expect(() => that.ctx.bezierCurveTo(noop, 25, 75, 25, 50, 50)).to.throw(Error);
                });
                it('异常调用:参数类型 #cp1y not number', () => {
                    expect(() => that.ctx.bezierCurveTo(100, noop, 75, 25, 50, 50)).to.throw(Error);
                });
                it('异常调用:参数类型 #cp2x not number', () => {
                    expect(() => that.ctx.bezierCurveTo(100, 25, noop, 25, 50, 50)).to.throw(Error);
                });
                it('异常调用:参数类型 #cp2y not number', () => {
                    expect(() => that.ctx.bezierCurveTo(100, 25, 75, noop, 50, 50)).to.throw(Error);
                });
                it('异常调用:参数类型 #x not number', () => {
                    expect(() => that.ctx.bezierCurveTo(100, 25, 75, 25, noop, 50)).to.throw(Error);
                });
                it('异常调用:参数类型 #y not number', () => {
                    expect(() => that.ctx.bezierCurveTo(100, 25, 75, 25, 50, noop)).to.throw(Error);
                });
            });

            describe('quadraticCurveTo', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.bezierCurveTo(100, 25, 75, 25);
                });
                it('异常调用:参数类型 #cpx not number', () => {
                    expect(() => that.ctx.bezierCurveTo(noop, 25, 75, 25)).to.throw(Error);
                });
                it('异常调用:参数类型 #cpy not number', () => {
                    expect(() => that.ctx.bezierCurveTo(100, noop, 75, 25)).to.throw(Error);
                });
                it('异常调用:参数类型 #x not number', () => {
                    expect(() => that.ctx.bezierCurveTo(100, 25, noop, 25)).to.throw(Error);
                });
                it('异常调用:参数类型 #y not number', () => {
                    expect(() => that.ctx.bezierCurveTo(100, 25, 75, noop)).to.throw(Error);
                });
            });

            describe('save', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.save();
                });
            });

            describe('draw', () => {
                beforeEach(() => {
                    expect(that.ctx).to.be.ok;
                })

                // 规则开始
                it('正确调用', () => {
                    that.ctx.draw({
                        reserve: true,
                        callback: noop
                    });
                });
                it('异常调用:参数类型 #option not object', () => {
                    expect(() => that.ctx.draw(1)).to.throw(Error);
                });
                it('异常调用:参数类型 #reserve not boolean', () => {
                    expect(() => that.ctx.draw({
                        reserve: noop,
                        callback: noop
                    })).to.throw(Error);
                });
                it('异常调用:参数类型 #callback not function', () => {
                    expect(() => that.ctx.draw({
                        reserve: true,
                        callback: 123
                    })).to.throw(Error);
                });
            });
        })
    }
}