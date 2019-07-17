/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author wulinfei@baidu.com
 */

export default {
    register() {
        let that = this;
        describe.skip('getExtConfig<需要小程序真实环境>', function () {
            // 规则开始
            it('正确调用:验证返回结果格式及各参数', function (done) {
                let params = {
                    success(res) {
                        function catchError() {
                            expect(res).to.be.an('object');
                            expect(res.extConfig).to.be.ok;
                        }
                        done(catchError());
                    },
                    fail: done
                };
                swan.getExtConfig(params);
            });
        });

        describe.skip('getExtConfigSync<需要小程序真实环境>', function () {
            //规则开始
            it('正确调用:验证返回结果格式及各参数', function (done) {
                let res = swan.getExtConfigSync();
                expect(res).to.be.an('object');
                expect(res.extConfig).to.be.ok;
            });
        });
    }
}