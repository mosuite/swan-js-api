
/*eslint-disable */
/**
 * @file file page for 小程序语音
 * @author wulinfei@baidu.com
 */


export default {
    register() {
        let that = this;
        let noop = () => {};
        
        describe.skip('getVoiceRecognizer', () => {
            const options = {
                mode: 'dnn',
                longSpeech: false
            };
            function checkType(voiceRecognizer) {
                try {
                    expect(voiceRecognizer).to.be.an('object');
                    expect(voiceRecognizer.start).to.be.an('function');
                    expect(voiceRecognizer.stop).to.be.an('function');
                    expect(voiceRecognizer.cancel).to.be.an('function');
                    expect(voiceRecognizer.onStart).to.be.an('function');
                    expect(voiceRecognizer.onRecognize).to.be.an('function');
                    expect(voiceRecognizer.onFinish).to.be.an('function');
                    expect(voiceRecognizer.onError).to.be.an('function');
                } catch (e) {
                    return e;
                }
            }

            it('正常调用', function (done) {
                that.voiceRecognizer = swan.ai.getVoiceRecognizer();
                done(checkType(that.voiceRecognizer));
            });

            it('start 正确调用', function (done) {
                this.timeout(5000);
                let count = 0;
                that.voiceRecognizer.onError(err => {
                    swan.showToast({
                        title: 'error' + JSON.stringify(err)
                    });
                });
                that.voiceRecognizer.onStart(res => {
                    ++count === 1 && done();
                });
                that.voiceRecognizer.start({
                    ...options
                });
            });

            it('cancanl 正确调用', function () {
                this.timeout(5000);
                that.voiceRecognizer.cancel();
            });

            it('stop 正确调用', function () {
                this.timeout(5000);
                that.voiceRecognizer.stop();
            });
        })
    }
}