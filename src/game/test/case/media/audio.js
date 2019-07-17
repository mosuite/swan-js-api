/**
 * @file file case for apiDemo-audio
 * @author yupeng07@baidu.com
 * result: check done
 */

describe('Audio', function () {
    describe('create', function () {
        let that = {};
        let offFun = done => {
            return () => {
                done('offFunction is fail');
            }
        };
        describe('AudioContext', () => {
            // TODO: 端open接口二级回调没有返回buffered volume 数据
            it('create 正确调用: 校验返回值', function (done) {
                this.timeout(10000);
                const audioCtx = swan.createInnerAudioContext();
                // 本地相对路径测试资源测试
                // audioCtx.src = 'game.mp3';
                // 网络资源测试
                // audioCtx.src = 'https://b.bdstatic.com/searchbox/icms/searchbox/js/countdown.mp3';
                audioCtx.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
                audioCtx.obeyMuteSwitch = false;
                that.audio = audioCtx;
                setTimeout(() => {
                    assert(typeof audioCtx.src === 'string');
                    assert(typeof audioCtx.startTime === 'number');
                    assert(typeof audioCtx.loop === 'boolean');
                    assert(typeof audioCtx.autoplay === 'boolean');
                    assert(typeof audioCtx.obeyMuteSwitch === 'boolean');
                    done();
                }, 5000);
            });
            // TODO: ios暂不支持 onCanplay offCanplay
            it.skip('onCanplay 正确调用', function (done) {
                this.timeout(10000);
                let count = 0;
                that.audio.onCanplay(() => {
                    ++count === 1 && done();
                });
            });
            it.skip('offCanplay 正确调用', function (done) {
                this.timeout(10000);
                let count = 0;
                that.audio.onCanplay(() => {
                    done('offCanplay is fail');
                });
                that.audio.offCanplay();
                setTimeout(done, 5000);
            });
            // 手动取消音频暂停case
            it('play onPlay 正确调用', function (done) {
                this.timeout(5000);
                let count = 0;
                that.audio.onPlay(res => {
                    assert(typeof that.audio.paused === 'boolean');
                    ++count === 1 && done();
                });
                that.audio.play();
            });
            it('offTimeUpdate 正确调用', function (done) {
                this.timeout(10000);
                let count = 0;
                const handler = offFun(done);
                that.audio.onTimeUpdate(handler);
                that.audio.offTimeUpdate(handler);
                setTimeout(done, 5000);
            });
            it('onTimeUpdate 正确调用', function (done) {
                this.timeout(10000);
                let count = 0;
                that.audio.onTimeUpdate(res => {
                    assert(typeof res.currentTime === 'number');
                    assert(typeof res.duration === 'number');
                    ++count === 1 && done();
                });
            });
            it('offPlay 正常调用', function (done) {
                this.timeout(15000);
                let count = 0;
                const handler = offFun(done);
                that.audio.onPlay(handler);
                that.audio.offPlay(handler);
                setTimeout(() => {
                    that.audio.play();
                }, 5000);
                setTimeout(done, 10000);
            });
            it('pause onPause 正确调用', function (done) {
                this.timeout(10000);
                let count = 0;
                that.audio.onPause(() => {
                    ++count === 1 && done();
                });
                setTimeout(() => {
                    that.audio.pause();
                }, 5000);
            });
            it('offPause 正确调用', function (done) {
                this.timeout(15000);
                const handler = offFun(done);
                that.audio.onPause(handler);
                that.audio.offPause(handler);
                setTimeout(() => {
                    that.audio.pause();
                }, 5000);
                setTimeout(done, 10000);
            });
            it('seek onSeeking 正确调用', function (done) {
                this.timeout(3000);
                let count = 0;
                that.audio.onSeeking(() => {
                    ++count === 1 && done();
                });
                that.audio.seek(10);
            });
            it('offSeeking 正常调用', function (done) {
                this.timeout(10000);
                const handler = offFun(done);
                that.audio.onSeeking(handler);
                that.audio.offSeeking(handler);
                setTimeout(() => {
                    that.audio.seek(10);
                }, 2000);
                setTimeout(done, 5000);
            });
            it('onSeeked 正常调用', function (done) {
                this.timeout(10000);
                let count = 0;
                that.audio.onSeeked(() => {
                    ++count === 1 && done();
                });
                that.audio.seek(10);
            });
            it('offSeeked 正常调用', function (done) {
                this.timeout(10000);
                const handler = offFun(done);
                that.audio.onSeeked(handler);
                that.audio.offSeeked(handler);
                setTimeout(() => {
                    that.audio.seek(10);
                }, 2000);
                setTimeout(done, 5000);
            });
            it('stop onStop 正确调用', function (done) {
                let count = 0;
                that.audio.onStop(res => {
                    ++count === 1 && done();
                });
                that.audio.stop();
            });
            it('offStop 正确调用', function (done) {
                this.timeout(10000);
                const handler = offFun(done);
                that.audio.onStop(handler);
                that.audio.offStop(handler);
                setTimeout(() => {
                    that.audio.stop();
                }, 1000);
                setTimeout(done, 5000);
            });
            it('destroy 正确调用', () => {
                assert.throws(() => that.audioCtx.destroy(), Error);
            });
        });
        describe('errorEvent', () => {
            // TODO: ios暂不支持 onError offError
            it.skip('onError 正确调用', function (done) {
                this.timeout(15000);
                that.testAudio = swan.createInnerAudioContext();
                that.testAudio.src = 'http://test.mp3';
                that.testAudio.onError(res => {
                    assert(typeof res === 'object');
                    assert(typeof res.errCode === 'number');
                    done();
                });
            });
            it.skip('offError 正确调用', function (done) {
                this.timeout(15000);
                const handler = offFun(done);
                that.testAudio2 = swan.createInnerAudioContext();
                that.testAudio2.src = 'http://test2.mp3';
                // 监听
                that.testAudio2.offError(handler);
                that.testAudio2.onError(handler);
                setTimeout(done, 10000);
            });
            it('onEnded 正确调用', function (done) {
                this.timeout(15000);
                let count = 0;
                that.testAudio3 = swan.createInnerAudioContext();
                that.testAudio3.src = 'http://b.bdstatic.com/searchbox/icms/searchbox/js/countdown.mp3';
                that.testAudio3.play();
                that.testAudio3.onEnded(() => {
                    that.testAudio3.destroy();
                    ++count === 1 && done();
                });
            });
            it('offEnded 正确调用', function (done) {
                this.timeout(15000);
                that.testAudio4 = swan.createInnerAudioContext();
                that.testAudio4.src = 'http://b.bdstatic.com/searchbox/icms/searchbox/js/countdown.mp3';
                // 监听
                const handler = offFun(done);
                that.audio.onEnded(handler);
                that.audio.offEnded(handler);
                setTimeout(done, 10000);
            });
            // TODO: 暂无复现audio
            it.skip('onWaiting 正确调用', function (done) {
                this.timeout(15000);
                let count = 0;
                that.testAudio5 = swan.createInnerAudioContext();
                that.testAudio5.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
                that.testAudio5.onWaiting(() => {
                    that.testAudio5.destroy();
                    ++count === 1 && done();
                });
            });
            it.skip('offWaiting 正确调用', function (done) {
                this.timeout(15000);
                that.testAudio6 = swan.createInnerAudioContext();
                that.testAudio6.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
                // 监听
                that.testAudio5.offWaiting();
                that.testAudio4.onWaiting(() => {
                    done('offWaiting is fail');
                });
                setTimeout(done, 10000);
            });
        });
    });
});
