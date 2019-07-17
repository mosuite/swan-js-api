/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author sunweinan@baidu.com
 */
export default {
    register() {
        let that = this;

        describe('showToast', function () {
            this.timeout(1500);

            let title = "showToastTitle";
            let icon = "success";
            let duration = 1000;
            let mask = true;

            // 防止污染测试环境
            afterEach(() => {
                setTimeout(swan.hideToast, 1200);
            });

            it('正确调用:参数正确', function (done) {
                let params = {
                    title,
                    icon,
                    duration,
                    mask,
                    success: () => done(),
                    fail: (error) => done(error)
                };
                swan.showToast(params);
            });
            it('异常调用:参数类型 #title should be string', function (done) {
                let params = {
                    title: 123,
                    icon,
                    duration,
                    mask,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showToast(params);
            });
            it('异常调用:参数类型 #title should be less than 15 characters', function (done) {
                let params = {
                    title: 'onetwothreefour',
                    icon,
                    duration,
                    mask,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showToast(params);
            });
            it('异常调用:参数类型 #icon should be string', function (done) {
                let params = {
                    title,
                    icon: 123,
                    duration,
                    mask,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showToast(params);
            });
            it('异常调用:参数类型 #icon should be success/normal', function (done) {
                let params = {
                    title,
                    icon: 'failed',
                    duration,
                    mask,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showToast(params);
            });
            it('异常调用:参数类型 #duration should be number', function (done) {
                let params = {
                    title,
                    icon,
                    duration: '123',
                    mask,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
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
                    success: () => done(that.error.shouldFail)
                };
                swan.showToast(params);
            });
        });

        describe('showLoading', function () {

            let title = "showLoading";
            let mask = true;

            // 防止污染测试环境
            afterEach(() => {
                setTimeout(swan.hideLoading, 1000)
            });

            it('正确调用:参数正确', function (done) {
                let params = {
                    title,
                    mask,
                    success: () => done(),
                    fail: (error) => done(error)
                };
                swan.showLoading(params);
            });
            it('异常调用:参数必填 #title should be required', function (done) {
                let params = {
                    mask,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showLoading(params);
            });
            it('异常调用:参数类型 #title should be string', function (done) {
                let params = {
                    title: '123',
                    mask,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showLoading(params);
            });
            it('异常调用:参数类型 #mask should be boolean', function (done) {
                let params = {
                    title,
                    mask: 'false',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
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

        describe.skip('showModal<影响展示>', function () {
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
            it('异常调用:参数必填 #title should be required', function (done) {
                let params = {
                    content,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showModal(params);
            });
            it('异常调用:参数必填 #content should be required', function (done) {
                let params = {
                    title,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showModal(params);
            });
            it('异常调用:参数类型 #title should be string', function (done) {
                let params = {
                    title: 123,
                    content,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showModal(params);
            });
            it('异常调用:参数类型 #content should be string', function (done) {
                let params = {
                    title,
                    content: 123,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showModal(params);
            });
            it('异常调用:参数类型 #showCancel should be boolean', function (done) {
                let params = {
                    title,
                    content,
                    showCancel: 'false',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showModal(params);
            });
            it('异常调用:参数类型 #cancelText should be string', function (done) {
                let params = {
                    title,
                    content,
                    cancelText: 123,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showModal(params);
            });
            it('异常调用:参数类型 #cancelColor should be HexColor', function (done) {
                let params = {
                    title,
                    content,
                    cancelColor: 'red',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showModal(params);
            });
            it('异常调用:参数类型 #confirmText should be string', function (done) {
                let params = {
                    title,
                    content,
                    confirmText: 123,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showModal(params);
            });
            it('异常调用:参数类型 #confirmColor should be HexColor', function (done) {
                let params = {
                    title,
                    content,
                    confirmColor: 'red',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showModal(params);
            });
        });

        describe.skip('showActionSheet<影响展示>', function () {
            this.timeout(3000);

            let itemList = ['item1', 'item2'];
            let itemcolor = '#ff000';

            it('正确调用:参数正确 #validate itemList & itemcolor', function (done) {
                let params = {
                    itemList,
                    itemcolor,
                    fail: (error) => done(error.errCode == 1001 ? that.error.manualyCancel : error),
                    success: () => done()
                };
                swan.showActionSheet(params);
            });
            it('正确调用:参数正确 #validate itemList', function (done) {
                let params = {
                    itemList,
                    fail: (error) => done(error.errCode == 1001 ? that.error.manualyCancel : error),
                    success: () => done()
                };
                swan.showActionSheet(params);
            });
            it('异常调用:参数必填 #itemList should be required', function (done) {
                let params = {
                    itemcolor,
                    fail: (error) => done(error.errCode == 1001 ? that.error.manualyCancel : null),
                    success: () => done(that.error.shouldFail)
                };
                swan.showActionSheet(params);
            });
            it('异常调用:参数类型 #itemList should be Array', function (done) {
                let params = {
                    itemList: 123,
                    itemcolor,
                    fail: (error) => done(error.errCode == 1001 ? that.error.manualyCancel : null),
                    success: () => done(that.error.shouldFail)
                };
                swan.showActionSheet(params);
            });
            it.skip('异常调用:参数类型 #itemList should be String Array', function (done) {
                let params = {
                    itemList: [100, [100]],
                    itemcolor,
                    fail: (error) => done(error.errCode == 1001 ? that.error.manualyCancel : null),
                    success: () => done(that.error.shouldFail)
                };
                swan.showActionSheet(params);
            });
            it('异常调用:参数类型 #itemcolor should be HexColor', function (done) {
                let params = {
                    itemList,
                    itemcolor: 'red',
                    fail: (error) => done(error.errCode == 1001 ? that.error.manualyCancel : null),
                    success: () => done(that.error.shouldFail)
                };
                swan.showActionSheet(params);
            });
        });

        describe('setNavigationBarTitle', function () {
            this.timeout(500);

            let title = "setNavigationBarTitle";

            it('正确调用:参数正确', function (done) {
                let params = {
                    title,
                    success: () => done(),
                    fail: (error) => done(error)
                };
                swan.setNavigationBarTitle(params);
            });
            it('异常调用:参数必填 #title should be required', function (done) {
                let params = {
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setNavigationBarTitle(params);
            });
            it('异常调用:参数类型 #title should be string', function (done) {
                let params = {
                    title: 123,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setNavigationBarTitle(params);
            });
        });

        describe('showNavigationBarLoading', function () {

            it('正确调用', function (done) {
                swan.showNavigationBarLoading();
                done();
            });
            afterEach(() => {
                setTimeout((done) => {
                    swan.hideNavigationBarLoading();
                }, 2000);
            });
        });

        describe('hideNavigationBarLoading', function () {
            this.timeout(3000);
            // 前提
            beforeEach(() => {
                swan.showNavigationBarLoading();
            });

            it('正确调用:2s后隐藏loading', function (done) {
                setTimeout(() => {
                    swan.hideNavigationBarLoading();
                    done();
                }, 2000)
            });
        });
        describe('setNavigationBarColor', function () {

            let frontColor = "#000000";
            let backgroundColor = "#ff0000";
            let animation = {
                duration: 1000,
                timingFunc: 'linear'
            }

            it('异常调用:参数必填 #frontColor should be required', function (done) {
                let params = {
                    backgroundColor,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setNavigationBarColor(params);
            });
            it('异常调用:参数类型 #frontColor should be #000000/#ffffff', function (done) {
                let params = {
                    frontColor: "#0f0f0f",
                    backgroundColor,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setNavigationBarColor(params);
            });
            it('异常调用:参数必填 #backgroundColor should be required', function (done) {
                let params = {
                    frontColor,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setNavigationBarColor(params);
            });
            it('异常调用:参数类型 #backgroundColor should be string', function (done) {
                let params = {
                    frontColor,
                    backgroundColor: 121212,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setNavigationBarColor(params);
            });
            it('异常调用:参数类型 #backgroundColor should be color value', function (done) {
                let params = {
                    frontColor,
                    backgroundColor: 'red',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setNavigationBarColor(params);
            });
            it('异常调用:参数类型 #animation should be Object', function (done) {
                let params = {
                    frontColor,
                    backgroundColor,
                    animation: 'test',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setNavigationBarColor(params);
            });
            it('异常调用:参数类型 #duration should be number', function (done) {
                let params = {
                    frontColor,
                    backgroundColor,
                    animation: {
                        duration: '1'
                    },
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setNavigationBarColor(params);
            });
            it('异常调用:参数类型 #timingFunc should be string', function (done) {
                let params = {
                    frontColor,
                    backgroundColor,
                    animation: {
                        timingFunc: 100
                    },
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setNavigationBarColor(params);
            });
            it('正确调用:参数正确', function (done) {
                let params = {
                    frontColor,
                    backgroundColor: "#ffffff",
                    animation,
                    success: () => done(),
                    fail: (error) => done(error)
                };
                swan.setNavigationBarColor(params);
            });
        });

        describe('setTabBarBadge', function () {

            let index = '0';
            let text = 'n1024';

            it('异常调用:参数必填 #index should be required', function (done) {
                let params = {
                    text,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarBadge(params);
            });
            it('异常调用:参数必填 #text should be required', function (done) {
                let params = {
                    index,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarBadge(params);
            });
            it('异常调用:参数类型 #index should be number', function (done) {
                let params = {
                    index,
                    text: '123',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarBadge(params);
            });
            it('异常调用:参数类型 #text should be string', function (done) {
                let params = {
                    index,
                    text: 123,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarBadge(params);
            });
            it('正确调用:参数正确,超过4个显示...', function (done) {
                let params = {
                    index,
                    text,
                    success: () => done(),
                    fail(error) {
                        try {
                            // 1001为单测页面没有tabbar
                            expect(error.errCode).to.be.equal(1001);
                            done(that.error.noTabBar)
                        } catch (e) {
                            done(e);
                        }
                    }
                };
                swan.setTabBarBadge(params);
            });
        });

        describe('removeTabBarBadge', function () {

            let index = 1;

            it('正确调用:参数正确', function (done) {
                let params = {
                    index,
                    success: () => done(),
                    fail: done
                };
                swan.removeTabBarBadge(params);
            });
            it('异常调用:参数必填 #index should be required', function (done) {
                let params = {
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.removeTabBarBadge(params);
            });
            it('异常调用:参数类型 #index should be number', function (done) {
                let params = {
                    index: '1',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.removeTabBarBadge(params);
            });
        });

        describe('showTabBarRedDot', function () {

            let index = 1;

            it('正确调用:参数正确', function (done) {
                let params = {
                    index,
                    success: () => done(),
                    fail: done
                };
                swan.showTabBarRedDot(params);
            });
            it('异常调用:参数必填 #index should be required', function (done) {
                let params = {
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showTabBarRedDot(params);
            });
            it('异常调用:参数类型 #index should be number', function (done) {
                let params = {
                    index: '1',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.showTabBarRedDot(params);
            });
        });

        describe('hideTabBarRedDot', function () {

            let index = 1;

            it('正确调用:参数正确', function (done) {
                let params = {
                    index,
                    success: () => done(),
                    fail: done
                };
                swan.hideTabBarRedDot(params);
            });
            it('异常调用:参数必填 #index should be required', function (done) {
                let params = {
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.hideTabBarRedDot(params);
            });
            it('异常调用:参数类型 #index should be number', function (done) {
                let params = {
                    index: '1',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.hideTabBarRedDot(params);
            });
        });

        describe('setTabBarStyle', function () {

            let color = '#f00000';
            let selectedColor = '#ff0000';
            let backgroundColor = '#fff000';
            let borderStyle = 'black';

            it('正常调用:参数正确', function (done) {
                let params = {
                    color,
                    selectedColor,
                    backgroundColor,
                    borderStyle,
                    fail: done,
                    success: () => done()
                };
                swan.setTabBarStyle(params);
            });
            it('异常调用:参数必填 #color should be required', function (done) {
                let params = {
                    selectedColor,
                    backgroundColor,
                    borderStyle,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarStyle(params);
            });
            it('异常调用:参数类型 #color should be hexcolor', function (done) {
                let params = {
                    color: 'red',
                    selectedColor,
                    backgroundColor,
                    borderStyle,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarStyle(params);
            });
            it('异常调用:参数必填 #selectedColor should be required', function (done) {
                let params = {
                    color,
                    backgroundColor,
                    borderStyle,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarStyle(params);
            });
            it('异常调用:参数类型 #selectedColor should be hexcolor', function (done) {
                let params = {
                    color,
                    selectedColor: 'red',
                    backgroundColor,
                    borderStyle,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarStyle(params);
            });
            it('异常调用:参数必填 #backgroudColor should be required', function (done) {
                let params = {
                    color,
                    selectedColor,
                    borderStyle,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarStyle(params);
            });
            it('异常调用:参数类型 #backgroudColor should be colorhex', function (done) {
                let params = {
                    color,
                    selectedColor,
                    backgroundColor: 'red',
                    borderStyle,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarStyle(params);
            });
            it('异常调用:参数必填 #borderStyle should be required', function (done) {
                let params = {
                    color,
                    selectedColor,
                    backgroundColor,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarStyle(params);
            });
            it('异常调用:参数类型 #borderStyle should be string', function (done) {
                let params = {
                    color,
                    selectedColor,
                    backgroundColor,
                    borderStyle: 123,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarStyle(params);
            });
            it('异常调用:参数类型 #borderStyle should be black/white', function (done) {
                let params = {
                    color,
                    selectedColor,
                    backgroundColor,
                    borderStyle: 'gray',
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarStyle(params);
            });
        });

        describe('setTabBarItem', function () {

            let index = 1;
            let text = 'TAB1';
            let iconPath = '/images/component_normal.png';
            let selectedIconPath = '/images/component_selected.png'

            it('异常调用:参数必填 #index should be required', function (done) {
                let params = {
                    text,
                    iconPath,
                    selectedIconPath,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarItem(params);
            });
            it('异常调用:参数类型 #index should be number', function (done) {
                let params = {
                    index: '1',
                    text,
                    iconPath,
                    selectedIconPath,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarItem(params);
            });
            it('异常调用:参数必填 #text should be required', function (done) {
                let params = {
                    index,
                    iconPath,
                    selectedIconPath,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarItem(params);
            });

            it('异常调用:参数类型 #text should be string', function (done) {
                let params = {
                    index,
                    text: 123,
                    iconPath,
                    selectedIconPath,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarItem(params);
            });
            it('异常调用:参数必填 #iconPath should be required', function (done) {
                let params = {
                    text,
                    index,
                    selectedIconPath,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarItem(params);
            });
            it('异常调用:参数类型 #iconPath should be string', function (done) {
                let params = {
                    index,
                    text,
                    iconPath: 100,
                    selectedIconPath,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarItem(params);
            });
            it('异常调用:参数必填 #selectedIconPath should be required', function (done) {
                let params = {
                    index,
                    iconPath,
                    text,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarItem(params);
            });
            it('异常调用:参数类型 #selectedIconPath should be string', function (done) {
                let params = {
                    index,
                    iconPath,
                    iconPath,
                    selectedIconPath: 100,
                    fail: () => done(),
                    success: () => done(that.error.shouldFail)
                };
                swan.setTabBarItem(params);
            });
            it('正确调用:参数正确', function (done) {
                let params = {
                    index,
                    text,
                    iconPath,
                    selectedIconPath,
                    success: () => done(),
                    fail: done
                };
                swan.setTabBarItem(params);
            });
        });

        describe('showTabBar', function () {

            it('正确调用:参数正确', function (done) {
                let params = {
                    success: () => done(),
                    fail: done
                };
                swan.showTabBar(params);
            });

        });

        describe('hideTabBar', function () {

            it('正确调用:参数正确', function (done) {
                let params = {
                    success: () => done(),
                    fail: done
                };
                swan.hideTabBar(params);
            });
        });

        // // ===========pulldown START============= //
        describe('startPullDownRefresh', function () {

            let oriEnablePullDownRefresh;

            before(function(done) {
                oriEnablePullDownRefresh = window.enablePullDownRefresh;
                window.enablePullDownRefresh = true;
                done();
            });

            after(function (done) {
                window.enablePullDownRefresh = oriEnablePullDownRefresh;
                done();
            });

            it('正确调用', function (done) {
                let params = {
                    success: () => done(),
                    fail: (err) => done(err)
                };
                swan.startPullDownRefresh(params);
            });
        });

        describe('stopPullDownRefresh', function () {
            let oriEnablePullDownRefresh;

            before(function (done) {
                oriEnablePullDownRefresh = window.enablePullDownRefresh;
                window.enablePullDownRefresh = true;
                done();
            });

            after(function (done) {
                window.enablePullDownRefresh = oriEnablePullDownRefresh;
                done();
            });

            it('正确调用', function (done) {
                let params = {
                    success: () => done(),
                    fail: (err) => done(err)
                };
                swan.stopPullDownRefresh(params);
            });
        });

    }
}