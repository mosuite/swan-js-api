/**
 * @file file case for apiDemo-getSwanId
 * @author renzhonghua@baidu.com
 * result: --
 */

describe('openApi', function () {
    describe('getSwanId', function () {
        it('正常调用', function (done) {
            let params = {
                success: res => {
                    console.log('getSwanId', JSON.stringify(res));
                    assert(typeof res === 'object');
                    assert(typeof res.data === 'object');
                    assert(typeof res.data.swanid === 'string');
                    done();
                },
                fail: done
            };
            swan.getSwanId(params);
        });
        it('正确调用: #complete has used', function (done) {
            let params = {
                success() {
                },
                complete: () => done()
            };
            swan.getSwanId(params);
        });
        it('异常调用: #complete has used', function (done) {
            let params = {
                success: 100,
                complete: () => done()
            };
            swan.getSwanId(params);
        });

    });

});