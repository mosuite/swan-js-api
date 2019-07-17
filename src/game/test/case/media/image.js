/**
 * @file file case for apiDemo-image
 * @author yupeng07@baidu.com
 * result: check done
 */

describe('media', function () {
    const shouldFail = new Error('配置不符合预期，却成功被执行');
    describe.skip('previewImage<跳出单测，影响展示>', function () {
        let current = 'https://lvyou.baidu.com/static/qianfan/lvyou/kingkong/pics/aaa.png';
        let urls = [
            'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png',
            'https://lvyou.baidu.com/static/qianfan/lvyou/kingkong/pics/aaa.png',
            'https://www.baidu.com/img/bd_logo1.png'
        ];
        it('正常调用', function (done) {
            swan.previewImage({
                current,
                urls,
                success: res => {
                    assert(typeof res === 'object');
                    done();
                },
                fail: done
            });
        });
        it('异常调用:参数必填 #urls not required', function (done) {
            swan.previewImage({
                current,
                fail: () => done(),
                success: () => done(shouldFail)
            });
        });
        it('异常调用:参数类型 #urls not array', function (done) {
            swan.previewImage({
                current,
                urls: 'sssss',
                fail: () => done(),
                success: () => done(shouldFail)
            });
        });
    });
    describe('chooseImage<真机调试>', function () {
        it('正常调用:全参数调用', function (done) {
            this.timeout(20000);
            swan.chooseImage({
                count: 2,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success: res => {
                    assert(typeof res === 'object');
                    assert(typeof res.tempFiles === 'object');
                    assert(typeof res.tempFilePaths === 'object');
                    done();
                },
                fail: done
            });
        });
        it('正常调用:1张相册图片', function (done) {
            this.timeout(20000);
            swan.chooseImage({
                count: 1,
                sizeType: ['original'],
                sourceType: ['album'],
                success: res => {
                    assert(typeof res === 'object');
                    assert(typeof res.tempFiles === 'object');
                    assert(typeof res.tempFiles[0].path === 'string');
                    assert(typeof res.tempFiles[0].size === 'number');
                    assert(typeof res.tempFilePaths === 'object');
                    assert(typeof res.tempFilePaths[0] === 'string');
                    done();
                },
                fail: done
            });
        });
        it('正常调用:1张相机压缩图', function (done) {
            this.timeout(20000);
            swan.chooseImage({
                count: 1,
                sizeType: ['compressed'],
                sourceType: ['camera'],
                success: res => {
                    assert(typeof res === 'object');
                    assert(typeof res.tempFiles === 'object');
                    assert(typeof res.tempFilePaths === 'object');
                    done();
                },
                fail: done
            });
        });
        it('正常调用:默认值校验 count is null ', function (done) {
            this.timeout(20000);
            swan.chooseImage({
                sizeType: ['compressed'],
                sourceType: ['camera'],
                success: () => done(),
                fail: done
            });
        });
        it('正常调用:默认值校验 sizeType is null', function (done) {
            this.timeout(20000);
            swan.chooseImage({
                count: 1,
                sourceType: ['camera'],
                success: () => done(),
                fail: done
            });
        });
        it('正常调用:默认值校验 sourceType is null', function (done) {
            this.timeout(20000);
            swan.chooseImage({
                count: 1,
                sizeType: ['compressed'],
                success: () => done(),
                fail: done
            });
        });
    });
});
