/**
 * @file file case for apiDemo-recorder
 * @author yanghongxue@baidu.com
 * result: - -
 */

describe.skip('Recorder', function () {
    let that = {};
    let options = {
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 96000,
        format: 'aac'
    };
    it('getRecorderManager start 正常调用', function (done) {
        this.timeout(5000);
        const recorderManager = swan.getRecorderManager();
        that.recorder = recorderManager;
        assert.ok(recorderManager);
    });
    it('start onStart 正常调用', function (done) {
        this.timeout(10000);
        let count = 0;
        that.recorder.onStart(res => {
            ++count === 1 && done();
        });
        that.recorder.start({
            options,
            success: res => {
                swan.showToast({
                    title: 'success'
                });
            },
            fail: err => {
                swan.showToast({
                    title: 'fail' + JSON.stringify(err)
                });
            }
        });
    });
    it('pause 正常调用', function (done) {
        this.timeout(5000);
        let count = 0;
        that.recorderManager.onPause(() => {
            ++count === 1 && done();
        });
        setTimeout(that.recorderManager.pause, 2000);
    });
});
