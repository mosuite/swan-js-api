/**
 * @file file page for apiDemo
 * @author wuxiaopan@baidu.com
 */
/* globals Page, swan */

// 各个方法本身没有 success、fail 回调，因此以事件回调(如 onPlay、onPause)作为判断逻辑

export default {
    register() {
        let that = this;

        describe('getBackgroundAudioManager', () => {
            function checkType(data) {
                try {
                    expect(data).to.be.an('object');
                    expect(data.src).to.be.an('string');
                    expect(data.duration).to.be.an('number');
                    expect(data.currentTime).to.be.an('number');

                    expect(data.play).to.be.an('function');
                    expect(data.pause).to.be.an('function');
                    expect(data.stop).to.be.an('function');
                    expect(data.seek).to.be.an('function');
                    expect(data.onCanplay).to.be.an('function');
                    expect(data.onPlay).to.be.an('function');
                    expect(data.onPause).to.be.an('function');
                    expect(data.onStop).to.be.an('function');
                    expect(data.onEnded).to.be.an('function');
                    expect(data.onTimeUpdate).to.be.an('function');
                    expect(data.onError).to.be.an('function');
                    expect(data.onPrev).to.be.an('function');
                    expect(data.onNext).to.be.an('function');
                    expect(data.onWaiting).to.be.an('function');
                } catch (e) {
                    return e;
                }
            }

            it('正常调用', function (done) {
                this.timeout(10000);
                that.bgAudio = swan.getBackgroundAudioManager();
                that.bgAudio.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
                console.log('bgAudio', that.bgAudio);
                setTimeout(() => {
                    // that.bgAudio.play();
                    done(checkType(that.bgAudio));
                }, 5000);
            });

            it('play 正确调用', function (done) {
                let count = 0;
                that.bgAudio.onPlay(res => {
                    ++count === 1 && done();
                });
                that.bgAudio.play();
            });

            it('pause 正确调用', function (done) {
                let count = 0;
                that.bgAudio.onPause(res => {
                    ++count === 1 && done();
                });
                that.bgAudio.pause();
            });

            it('seek 正确调用', function (done) {
                this.timeout(3000);
                that.bgAudio.seek({
                    position: 10
                });
                setTimeout(done, 2000);
            });

            it('stop 正确调用', function (done) {
                let count = 0;
                that.bgAudio.onStop(res => {
                    ++count === 1 && done();
                });
                that.bgAudio.stop();
            });
        });

        describe('createInnerAudioContext', () => {
            function checkType(data) {
                try {
                    expect(data).to.be.an('object');
                    expect(data.src).to.be.an('string');
                    expect(data.startTime).to.be.an('number');
                    expect(data.autoplay).to.be.an('boolean');
                    expect(data.loop).to.be.an('boolean');
                    expect(data.duration).to.be.an('number');
                    expect(data.currentTime).to.be.an('number');
                    expect(data.paused).to.be.an('boolean');

                    expect(data.play).to.be.an('function');
                    expect(data.pause).to.be.an('function');
                    expect(data.stop).to.be.an('function');
                    expect(data.seek).to.be.an('function');
                    expect(data.destroy).to.be.an('function');

                    expect(data.onCanplay).to.be.an('function');
                    expect(data.onPlay).to.be.an('function');
                    expect(data.onPause).to.be.an('function');
                    expect(data.onStop).to.be.an('function');
                    expect(data.onEnded).to.be.an('function');
                    expect(data.onTimeUpdate).to.be.an('function');
                    expect(data.onError).to.be.an('function');
                    expect(data.onWaiting).to.be.an('function');
                    expect(data.onSeeking).to.be.an('function');
                    expect(data.onSeeked).to.be.an('function');
                } catch (e) {
                    return e;
                }
            }

            it('正常调用', function (done) {
                this.timeout(10000);
                that.audio = swan.createInnerAudioContext();
                that.audio.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
                setTimeout(() => {
                    console.log('audio', that.audio);
                    // that.audio.play();
                    done(checkType(that.audio));
                }, 5000);
            });

            it('play 正确调用', function (done) {
                this.timeout(5000);
                let count = 0;
                that.audio.onPlay(res => {
                    ++count === 1 && done();
                });
                that.audio.play();
            });

            it('pause 正确调用', function (done) {
                let count = 0;
                that.audio.onPause(res => {
                    ++count === 1 && done();
                });
                that.audio.pause();
            });

            it('seek 正确调用', function (done) {
                this.timeout(3000);
                that.audio.seek({
                    position: 10
                });
                setTimeout(done, 2000);
            });

            it('stop 正确调用', function (done) {
                let count = 0;
                that.audio.onStop(res => {
                    ++count === 1 && done();
                });
                that.audio.stop();
            });
        });
    }
};
