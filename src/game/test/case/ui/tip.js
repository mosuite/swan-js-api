/**
 * @file file case for apiDemo-audio
 * @author yupeng07@baidu.com
 * result: check done
 */

describe('device', function () {
    const shouldFail = new Error('配置不符合预期，却成功被执行');
    describe('showToast', function () {
        this.timeout(2000);

        let title = "showToastTitle";
        let icon = "success";
        let duration = 1500;
        let mask = true;

        // 防止污染测试环境
        afterEach(done => {
            swan.hideToast();
            setTimeout(done, 500);
        });

        it('正确调用:参数正确', function (done) {
            let params = {
                title,
                icon,
                duration,
                mask,
                success: () => setTimeout(done, 1000),
                fail: done
            };
            swan.showToast(params);
            
        });
        it('异常调用:参数类型 #title should be string', function (done) {
            let params = {
                title: [],
                icon,
                duration,
                mask,
                fail: () => done(),
                success: () => setTimeout(() => done(shouldFail), 1000)
            };
            swan.showToast(params);
        });
        it('异常调用:参数类型 #icon should be string', function (done) {
            let params = {
                title,
                icon: [],
                duration,
                mask,
                fail: () => done(),
                success: () => setTimeout(() => done(shouldFail), 1000)
            };
            swan.showToast(params);
        });
        it('异常调用:参数类型 #duration should be number', function (done) {
            let params = {
                title,
                icon,
                duration: [],
                mask,
                fail: () => done(),
                success: () => setTimeout(() => done(shouldFail), 1000)
            };
            swan.showToast(params);
        });
        it('异常调用:参数类型 #mask should be boolean', function (done) {
            let params = {
                title,
                icon,
                duration,
                mask: 'false',
                fail: () => done(),
                success: () => setTimeout(() => done(shouldFail), 1000)
            };
            swan.showToast(params);
        });
    });

    describe('showLoading', function () {

        let title = "showLoading";
        let mask = true;

        // 防止污染测试环境
        afterEach(done => {
            swan.hideLoading();
            setTimeout(done, 500);
        });

        it('正确调用:参数正确', function (done) {
            let params = {
                title,
                mask,
                success: () => setTimeout(done, 1000),
                fail: done
            };
            swan.showLoading(params);
        });
        it('异常调用:参数必填 #title should be required', function (done) {
            let params = {
                mask,
                fail: () => done(),
                success: () => setTimeout(() => done(shouldFail), 1000)
            };
            swan.showLoading(params);
        });
        it('异常调用:参数类型 #title should be string', function (done) {
            let params = {
                title: [],
                mask,
                fail: () => done(),
                success: () => setTimeout(() => done(shouldFail), 1000)
            };
            swan.showLoading(params);
        });
        it('异常调用:参数类型 #mask should be boolean', function (done) {
            let params = {
                title,
                mask: 'false',
                fail: () => done(),
                success: () => setTimeout(() => done(shouldFail), 1000)
            };
            swan.showLoading(params);
        });
    });

    describe('hideToast', function () {

        it('功能正确 #已有Toast 1s后执行', function (done) {
            swan.showToast({
                title: 'toast 1s',
                duration: 2000,
                success: () => {
                    setTimeout(() => {
                        swan.hideToast();
                        done();
                    }, 1000);
                }
            });
        });
        it('使用正确 #无Toast 1.5s后执行', function (done) {
            setTimeout(() => {
                swan.hideToast();
                done();
            }, 1500)
        });
    });

    describe('hideLoading', function () {

        it('功能正确 #已有Loading 1s后执行', function (done) {
            swan.showLoading({
                title: 'loading 1s',
                success: () => {
                    setTimeout(() => {
                        swan.hideLoading();
                        done();
                    }, 1000)
                },
                fail: done
            });
        });
        it('使用正确 #无Loading 1.5s后执行', function (done) {
            setTimeout(() => {
                swan.hideLoading();
                done();
            }, 1500)
        });
    });

    describe('showModal', function () {
        this.timeout(2500);

        let title = 'showModalTitle';
        let content = 'showModalContent';
        let showCancel = true;
        let cancelText = 'no';
        let cancelColor = '#ff0000';
        let confirmText = 'yes';
        let confirmColor = '#fff000';

        it('正确调用:参数正确', function (done) {
            let params = {
                title,
                content,
                showCancel,
                cancelText,
                cancelColor,
                confirmText,
                confirmColor,
                success: () => done(),
                fail: (error) => done(error)
            };
            swan.showModal(params);
        });
        it('正确调用:参数正确', function (done) {
            let params = {
                title,
                content,
                success: () => done(),
                fail: (error) => done(error)
            };
            swan.showModal(params);
        });
        it('正常调用: showCancel验证', function (done) {
            let params = {
                title,
                content,
                showCancel: false,
                success: () => done(),
                fail: () => done(new Error('正常调用却失败，showCancel验证'))
            };
            swan.showModal(params);
        });
        it('正常调用:参数正确 #complete has used', function (done) {
            let params = {
                title,
                content,
                complete: () => done(),
                fail: () => done(new Error('正常调用却失败，showCancel验证'))
            };
            swan.showModal(params);
        });
        it.skip('异常调用:参数必填 #title & content should be required', function (done) {
            let params = {
                content,
                fail: () => done(),
                success: () => done(new Error('异常调用却成功，title should be required'))
            };
            swan.showModal(params);
        });
        it('异常调用:参数类型 #title should be string', function (done) {
            let params = {
                title: [],
                content,
                fail: () => done(),
                success: () => done(new Error('异常调用却成功，title should be string'))
            };
            swan.showModal(params);
        });
        it('异常调用:参数类型 #content should be string', function (done) {
            let params = {
                title,
                content: [],
                fail: () => done(),
                success: () => done(new Error('异常调用却成功，content should be string'))
            };
            swan.showModal(params);
        });
        // TODO showCancel为字符串'false'依然没有取消按钮 与wx不一致
        it('异常调用:参数类型 #showCancel should be boolean', function (done) {
            let params = {
                title,
                content,
                showCancel: 'false',
                fail: () => done(),
                success: () => done(new Error('异常调用却成功，showCancel should be boolean'))
            };
            swan.showModal(params);
        });
        it('异常调用:参数类型 #cancelText should be string', function (done) {
            let params = {
                title,
                content,
                cancelText: [],
                fail: () => done(),
                success: () => done(new Error('异常调用却成功，cancelText should be string'))
            };
            swan.showModal(params);
        });
        it('异常调用:参数类型 #confirmText should be string', function (done) {
            let params = {
                title,
                content,
                confirmText: [],
                fail: () => done(),
                success: () => done(new Error('异常调用却成功，confirmText should be string'))
            };
            swan.showModal(params);
        });
        // TODO 按钮颜色不对
        it.skip('异常调用:参数类型 #cancelColor should be HexColor', function (done) {
            let params = {
                title,
                content,
                cancelColor: 'yellow',
                fail: () => done(),
                success: () => done(new Error('异常调用却成功，cancelColor should be HexColor'))
            };
            swan.showModal(params);
        });
        // TODO 按钮颜色不对
        it.skip('异常调用:参数类型 #confirmColor should be HexColor', function (done) {
            let params = {
                title,
                content,
                confirmColor: 'yellow',
                fail: () => done(),
                success: () => done(new Error('异常调用却成功，confirmColor should be HexColor'))
            };
            swan.showModal(params);
        });
        it('异常调用:参数类型 #complete has used', function (done) {
            let params = {
                title,
                content,
                confirmText: [],
                complete: () => done(),
                success: () => done(new Error('异常调用却成功，confirmText should be string'))
            };
            swan.showModal(params);
        });
    });

    describe('showActionSheet', function () {
        this.timeout(3000);

        let itemList = ['item1', 'item2'];
        let itemColor = '#ff0000';
        // TODO 安卓不支持修改颜色 始终为蓝色
        it('正确调用:参数正确 #validate itemList & itemColor', function (done) {
            let params = {
                itemList,
                itemColor,
                fail: (error) => done(error.errCode == 1001 ? new Error('正常调用操作取消，' + error.errMsg) : error),
                success: () => done()
            };
            swan.showActionSheet(params);
        });
        it('正确调用:参数正确 #validate itemList', function (done) {
            let params = {
                itemList,
                fail: (error) => done(error.errCode == 1001 ? new Error('正常调用操作取消，' + error.errMsg) : error),
                success: () => done()
            };
            swan.showActionSheet(params);
        });
        // TODO 按钮颜色不对 不支持英文写法
        it.skip('正确调用:参数正确 #validate itemColor', function (done) {
            let params = {
                itemList,
                itemColor: 'red',
                fail: (error) => done(error.errCode == 1001 ? new Error('正常调用操作取消，' + error.errMsg) : error),
                success: () => done()
            };
            swan.showActionSheet(params);
        });
        it('正确调用:参数正确 #complete has used', function (done) {
            let params = {
                itemList,
                fail: (error) => done(error.errCode == 1001 ? new Error('正常调用操作取消，' + error.errMsg) : error),
                complete: () => done()
            };
            swan.showActionSheet(params);
        });
        it('异常调用:参数必填 #itemList should be required', function (done) {
            let params = {
                itemColor,
                fail: () => done(),
                success: (res) => done(new Error('异常调用却成功，itemList should be required'))
            };
            swan.showActionSheet(params);
        });
        it('异常调用:参数类型 #itemList should be Array', function (done) {
            let params = {
                itemList: 123,
                itemColor,
                fail: () => done(),
                success: (res) => done(new Error('异常调用却成功，itemList should be Array'))
            };
            swan.showActionSheet(params);
        });
        it('异常调用:参数类型 #itemList should be String Array', function (done) {
            let params = {
                itemList: [100, [100]],
                itemColor,
                fail: (error) => done(),
                success: (res) => done(new Error('异常调用却成功，itemList should be String Array'))
            };
            swan.showActionSheet(params);
        });
        it('异常调用:参数必填 #complete has used', function (done) {
            let params = {
                success: (res) => done(new Error('异常调用却成功，itemList should be String Array')),
                complete: () => done()
            };
            swan.showActionSheet(params);
        });
    });
});
