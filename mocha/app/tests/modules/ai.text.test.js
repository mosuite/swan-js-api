/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author meijishuang@baidu.com
 */

export default {
    register() {
        let that = this;
        // textReview
        describe('textReview', function () {
            it('正常调用', function (done) {
                swan.ai.textReview({
                    content: '待审核文本',
                    success: function (res) {
                        expect(res.result).to.be.an('object');
                        expect(res.log_id).to.be.a('string');
                        expect(res.result.spam).to.be.a('number');
                        expect(res.result.review).to.be.an('array');
                        expect(res.result.pass).to.be.an('array');
                        expect(res.result.label).to.be.a('number');
                        expect(res.result.score).to.be.a('number');
                        expect(res.result.hit).to.be.an('array');
                        done();
                    },
                    fail: () => done()
                });
            });
            it('异常调用 content为空', function (done) {
                swan.ai.textReview({
                    content: '',
                    success: () => done(that.error.shouldFail),
                    fail: () => done()
                });
            });
            it('异常调用 content不传', function (done) {
                swan.ai.textReview({
                    success: () => done(that.error.shouldFail),
                    fail: () => done()
                });
            });
            it('异常调用 content为boolean', function (done) {
                swan.ai.textReview({
                    content: true,
                    success: () => done(that.error.shouldFail),
                    fail: () => done()
                });
            });
            it('异常调用 content为对象', function (done) {
                swan.ai.textReview({
                    content: {},
                    success: () => done(that.error.shouldFail),
                    fail: () => done()
                });
            });
        });
        // textToAudio
        describe('textToAudio', function () {
            it('正常调用',function(done){
                swan.ai.textToAudio({
                    tex: '需合成的文本',
                    ctp: 1,
                    lan: 'zh',
                    success: function (res) {
                       console.log('textToAudiores:'+JSON.stringify(res))
                       expect(res.data).to.be.an('object');

                    },
                    fail: () => done()
                });
            });
            it('异常调用 必填都不填校验',function(done){
                swan.ai.textToAudio({
                    success: () => done(that.error.shouldFail),
                    fail: () => done()
                });
            });
            it('异常调用 必填都传空',function(done){
                swan.ai.textToAudio({
                    tex: '',
                    ctp: '',
                    lan: '',
                    success: () => done(that.error.shouldFail),
                    fail: () => done()
                });
            });
            it('异常调用 必填都填boolean',function(done){
                swan.ai.textToAudio({
                    tex: true,
                    ctp: true,
                    lan: true,
                    success: () => done(that.error.shouldFail),
                    fail: () => done()
                });
            });
            it('异常调用 必填都填对象',function(done){
                swan.ai.textToAudio({
                    tex: {},
                    ctp: {},
                    lan: {},
                    success: () => done(that.error.shouldFail),
                    fail: () => done()
                });
            });
        });
    }
};