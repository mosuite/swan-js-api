/**
 * @file file case for apiDemo-requestPolymerPayment
 * @author yanghongxue@baidu.com
 * result: check done
 */

describe.skip('requestPolymerPayment<跳出页面>', function () {
    this.timeout(50000);
    const shouldFail = new Error('配置不符合预期，却成功被执行');
    let orderInfo;
    let bannedChannels = ['ApplePay'];
    // 规则开始
    beforeEach((done) => {
        swan.request({
            url: 'https://mbd.baidu.com/ma/nuomi/createorder',
            success: res => {
                let data = res.data;
                if (data.errno !== 0) {
                    return;
                }
                orderInfo = data.data;
                done();
            }
        });
    });
    it('正常调用', function (done) {
        let params = {
            orderInfo,
            bannedChannels,
            success: (res) => done(),
            fail: done
        };
        swan.requestPolymerPayment(params);
    });
    it('异常调用: #orderInfo no require', function (done) {
        let params = {
            bannedChannels,
            fail: () => done(),
            success: () => done(shouldFail)
        };
        swan.requestPolymerPayment(params);
    });
    it('异常调用: #orderInfo no object', function (done) {
        let params = {
            orderInfo: 123,
            fail: () => done(),
            success: (res) => done(shouldFail)
        };
        swan.requestPolymerPayment(params);
    });
    it('异常调用: #bannedChannels no StringArray', function (done) {
        let params = {
            bannedChannels: 'test',
            fail: () => done(),
            success: () => done(shouldFail)
        };
        swan.requestPolymerPayment(params);
    });
    it('异常调用: #complete has used', function (done) {
        let params = {
            success: 100,
            complete: done
        };
        swan.requestPolymerPayment(params);
    });
});