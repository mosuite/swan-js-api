/**
 * @file file case for apiDemo-lifecycle
 * @author yanghongxue@baidu.com
 * result: check done
 */

describe('lifecycle', function () {
    describe('getLaunchOptionsSync', function () {
        it('正确调用:验证返回结果格式及各参数', function () {
            const optiontionInfo = swan.getLaunchOptionsSync();
            console.log('getLaunchOptionsSync', JSON.stringify(optiontionInfo));
            assert(typeof optiontionInfo.scene === 'number');
            assert(typeof optiontionInfo.query === 'object');
            assert(typeof optiontionInfo.referrerInfo === 'object');
        });
    });
});
