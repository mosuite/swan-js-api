/**
 * @file file page for apiDemo
 * @author wuxiaopan@baidu.com
 */
/* globals Page, swan */

// 各个方法本身没有 success、fail 回调，因此以事件回调(如 onSpeak、onStart等)作为判断逻辑
// 由于没有取消监听的方法，因此需要计数器以避免回调之间相关干扰。

export default {
    register() {
        let that = this;
        const params = {
            text: '这是一段tts测试文字',
            speed: 4,
            pitch: 4,
            speaker: 0
        };
        describe('getTTSManager', function () {
            function checkType(tts) {
                try {
                    expect(tts).to.be.an('object');
                    expect(tts.speak).to.be.an('function');
                    expect(tts.pause).to.be.an('function');
                    expect(tts.resume).to.be.an('function');
                    expect(tts.stop).to.be.an('function');
                    expect(tts.onSpeak).to.be.an('function');
                    expect(tts.onPause).to.be.an('function');
                    expect(tts.onStop).to.be.an('function');
                    expect(tts.onEnded).to.be.an('function');
                    expect(tts.onError).to.be.an('function');
                } catch (e) {
                    return e;
                }
            }

            it('正常调用', function (done) {
                that.tts = swan.getTTSManager();
                done(checkType(that.tts));
            });

            it('speak 正确调用', function (done) {
                let count = 0;
                that.tts.onSpeak(res => {
                    ++count === 1 && done();
                });
                that.tts.speak(params);
            });

            it('speak 异常调用:参数类型 #text is required', function (done) {
                let count = 0;
                this.timeout(5000);
                let params2 = {
                    speed: 4,
                    pitch: 4,
                    speaker: 0
                };
                that.tts.onSpeak(res => {
                    ++count === 1 && done(that.error.shouldFail);
                });
                that.tts.speak(params2);
                setTimeout(res => {
                    count++;
                    done();
                }, 3000);
            });

            it('pause 正确调用', function (done) {
                let count = 0;
                this.timeout(5000);
                that.tts.onPause(res => {
                    ++count === 1 && done();
                });
                that.tts.speak(params);
                setTimeout(that.tts.pause, 2000);
            });

            it('resume 正确调用', function (done) {
                this.timeout(5000);
                that.tts.onSpeak(res => {
                    done();
                });
                that.tts.resume();
            });

            it('stop 正确调用', function (done) {
                let count = 0;
                that.tts.onStop(res => {
                    ++count === 1 && done();
                });
                that.tts.speak(params);
                setTimeout(that.tts.stop, 2000);
            });
        });

        describe.skip('getRecorderManager', function () {
            const options = {
                sampleRate: 44100,
                numberOfChannels: 1,
                encodeBitRate: 96000,
                format: 'aac'
            };
            function checkType(recorderManager) {
                try {
                    expect(recorderManager).to.be.an('object');
                    expect(recorderManager.start).to.be.an('function');
                    expect(recorderManager.pause).to.be.an('function');
                    expect(recorderManager.resume).to.be.an('function');
                    expect(recorderManager.stop).to.be.an('function');
                    expect(recorderManager.onStart).to.be.an('function');
                    expect(recorderManager.onPause).to.be.an('function');
                    expect(recorderManager.onStop).to.be.an('function');
                    expect(recorderManager.onError).to.be.an('function');
                } catch (e) {
                    return e;
                }
            }

            it('正常调用', function (done) {
                that.recorderManager = swan.getRecorderManager();
                done(checkType(that.recorderManager));
            });

            it('start 正确调用', function (done) {
                this.timeout(5000);
                let count = 0;
                that.recorderManager.onError(err => {
                    swan.showToast({
                        title: 'error' + JSON.stringify(err)
                    });
                });
                that.recorderManager.onStart(res => {
                    ++count === 1 && done();
                });
                that.recorderManager.start({
                    ...options,
                    success(res) {
                        swan.showToast({
                            title: 'success'
                        });
                    },
                    fail(err) {
                        swan.showToast({
                            title: 'fail' + JSON.stringify(err)
                        });
                    }
                });
            });

            it('pause 正确调用', function (done) {
                let count = 0;
                this.timeout(5000);
                that.recorderManager.onPause(res => {
                    ++count === 1 && done();
                });
                setTimeout(that.recorderManager.pause, 2000);
            });

            it('resume 正确调用', function (done) {
                this.timeout(5000);
                that.recorderManager.onStart(res => {
                    done();
                });
                that.recorderManager.resume();
            });

            it('stop 正确调用', function (done) {
                let count = 0;
                this.timeout(5000);
                that.recorderManager.onStop(res => {
                    ++count === 1 && done();
                });
                setTimeout(that.recorderManager.stop, 2000);
            });
        });
    }
};
