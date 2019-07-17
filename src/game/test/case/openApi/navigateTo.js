/**
 * @file file case for apiDemo-navigateToMiniProgram & back
 * @author yanghongxue@baidu.com
 * result: - -
 */

const shouldFail = new Error('配置不符合预期，却成功被执行');
let appKey = 'duG5QNDKyzwIn2RUGObsiwql4vU6wEwU';
let path = 'pages/index/index';
let extraData = {
    from: 'baidu'
};

describe('navigateToMiniProgram<需真机测试>', function () {
    // 测试数据:
    // 斗兽棋 BGWofSGhwN2I0hWSgxogvnHN86EGL3Ta  小程序
    // 传奇来了Demo 4U3gV5Ia0W1IBsT4piS4n5phKy0RYeuC 小游戏
    it.skip('正常调用', function (done) {
        this.timeout(50000)
        let params = {
            appKey,
            success: (res) => {
                console.log('=== success', res);
                done();
            },
            fail: (error) => {
                console.log('=== fail', error);
                done(error);
            }
        };
        swan.navigateToMiniProgram(params);
    });
    it.skip('正常调用: #path no length', function (done) {
        let params = {
            appKey,
            path: '',
            extraData,
            success: (res) => {
                console.log('=== success', res);
                done();
            },
            fail: (error) => {
                console.log('=== fail', error);
                done(error);
            }
        };
        swan.navigateToMiniProgram(params);
    });

    it('异常调用: #appKey no length', function (done) {
        let params = {
            appKey: '',
            path,
            extraData,
            fail: () => done(),
            success: () => done(shouldFail)
        };
        swan.navigateToMiniProgram(params);
    });
    it('异常调用: #appKey no num', function (done) {
        let params = {
            appKey: [12, 3],
            path,
            extraData,
            fail: () => done(),
            success: () => done(shouldFail)
        };
        swan.navigateToMiniProgram(params);
    });
    it('异常调用: #appKey no require', function (done) {
        let params = {
            path,
            extraData,
            fail: () => done(),
            success: () => done(shouldFail)
        };
        swan.navigateToMiniProgram(params);
    });
});

// navigateBackMiniProgram  真机测试
describe('navigateBackMiniProgram<需真机>', function () {
    it('正常调用', function (done) {
        let params = {
            extraData: {
                to: 'baidu'
            },
            success(res) {
                console.log('navigateBackMiniProgram success', res);
                done();
            },
            fail: (error) => done(error)
        };
        swan.navigateBackMiniProgram(params);
    });
    it('异常调用: #extraData no require', function (done) {
        let params = {
            fail: () => done(),
            success: () => done(shouldFail)
        };
        swan.navigateBackMiniProgram(params);
    });
    it('异常调用: #extraData no obj', function (done) {
        let params = {
            extraData: 123,
            fail: () => done(),
            success: () => done(shouldFail)
        };
        swan.navigateBackMiniProgram(params);
    });
});