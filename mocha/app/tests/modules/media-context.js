/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author liwanfeng@baidu.com
 */
export default {
    register() {
        let that = this;
        let noop = () => {};
        describe('media-context', () => {
            describe('createVideoContext', () => {
                // 规则开始
                it('异常调用:不存在的DOMID', () => {
                    expect(() => swan.createVideoContext('myVideo2')).to.throw(Error);
                });
                it('正确调用', () => {
                    that.videoCtx = swan.createVideoContext('myVideo');
                    expect(that.videoCtx).to.be.ok;
                });
            });

            describe('createVideoContext: play', () => {
                // 规则开始
                it('正确调用', () => {
                    expect(() => that.videoCtx.play()).to.not.throw(Error);
                });
            });

            describe('createVideoContext: pause', () => {
                // 规则开始
                it('正确调用', () => {
                    expect(() => that.videoCtx.pause()).to.not.throw(Error);
                });
            });

            describe('createVideoContext: seek', () => {
                let position = 11;
                // 规则开始
                it('正确调用', () => {
                    expect(() => that.videoCtx.seek({
                        position
                    })).to.not.throw(Error);
                });
                it('异常调用:参数必填 #position not required', () => {
                    expect(() => that.videoCtx.seek()).to.throw(Error);
                });
                it('异常调用:参数类型 #position not number/string', () => {
                    expect(() => that.videoCtx.seek({
                        position: {}
                    })).to.throw(Error);
                });
            });

            describe.skip('createVideoContext: playbackRate<包暂不支持>', () => {
                let rate = 0.5;
                // 规则开始
                it('正确调用', () => {
                    expect(() => that.videoCtx.playbackRate({
                        rate
                    })).to.not.throw(Error);
                });
                it('异常调用:参数必填 #rate not required', () => {
                    expect(() => that.videoCtx.playbackRate()).to.throw(Error);
                });
                it('异常调用:参数类型 #rate not number/string', () => {
                    expect(() => that.videoCtx.playbackRate({
                        rate: {}
                    })).to.throw(Error);
                });
                it('异常调用:参数类型 #rate not support', () => {
                    expect(() => that.videoCtx.playbackRate({
                        rate: 100
                    })).to.throw(Error);
                });
            });

            describe('createVideoContext: sendDanmu', () => {
                let danmu = {
                    text: 'tetstttt',
                    color: '#333333'
                };
                // 规则开始
                it('正确调用', () => {
                    expect(() => that.videoCtx.sendDanmu(danmu)).to.not.throw(Error);
                });
                it('异常调用:参数类型 #danmu not object', () => {
                    expect(() => that.videoCtx.sendDanmu(111)).to.throw(Error);
                });
            });

            describe('createVideoContext: requestFullScreen', () => {
                // 规则开始
                it('正确调用', () => {
                    expect(() => that.videoCtx.requestFullScreen()).to.not.throw(Error);
                });
            });

            describe('createVideoContext: exitFullScreen', () => {
                // 规则开始
                it('正确调用', () => {
                    expect(() => that.videoCtx.exitFullScreen()).to.not.throw(Error);
                });
            });
            // 测试参数准备
            describe('createLivePlayerContext', () => {
                // 规则开始
                it('异常调用:不存在的DOMID', () => {
                    expect(() => swan.createLivePlayerContext('myLive2')).to.throw(Error);
                });
                it('正确调用', () => {
                    that.liveCtx = swan.createLivePlayerContext('myLive');
                    expect(that.liveCtx).to.be.ok;
                });
            });

            describe('createLivePlayerContext: stop', () => {
                // 规则开始
                it('正确调用', done => {
                    let params = {
                        success: res => {
                            function catchError() {
                                expect(res).to.be.ok;
                            }
                            done(catchError());
                        },
                        fail: error => done(error)
                    };
                    that.liveCtx.stop(params);
                });
            });

            describe('createLivePlayerContext: mute', () => {
                let direction = 90;
                // 规则开始
                it('正确调用', done => {
                    let params = {
                        success: res => {
                            function catchError() {
                                expect(res).to.be.ok;
                            }
                            done(catchError());
                        },
                        fail: error => done(error)
                    };
                    that.liveCtx.mute(params);
                });
            });

            describe.skip('createLivePlayerContext: requestFullScreen', () => {
                // 规则开始
                it('正确调用', done => {
                    let params = {
                        direction,
                        success: res => {
                            function catchError() {
                                expect(res).to.be.ok;
                            }
                            done(catchError());
                        },
                        fail: error => done(error)
                    };
                    ctx.requestFullScreen(params);
                });
                it('异常调用:参数必填 #direction not required', done => {
                    let params = {
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    that.liveCtx.requestFullScreen(params);
                });
                it('异常调用:参数类型 #direction not number', done => {
                    let params = {
                        direction: 'test',
                        fail: () => done(),
                        success: () => done(that.error.shouldFail)
                    };
                    that.liveCtx.requestFullScreen(params);
                });
            });

            describe.skip('createLivePlayerContext: exitFullScreen', () => {
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
                    that.liveCtx.exitFullScreen(params);
                });
            });
        })
    }
}