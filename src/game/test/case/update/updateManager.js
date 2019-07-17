/**
 * @file file case for apiDemo-update
 * @author yanghongxue@baidu.com
 * result: - -
 */

describe('update', function () {
    let that = {};
    this.timeout(2000);

    it('正确调用:参数正确', function (done) {
        let updateManager = swan.getUpdateManager();
        console.log('= updateManager =', updateManager);

        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log('= onCheckForUpdate =', res.hasUpdate);
        });

        updateManager.onUpdateReady(function (res) {
            swan.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success(res) {
                    console.log('= onUpdateReady =', res.hasUpdate);
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate();
                    }
                }
          });

        });

        updateManager.onUpdateFailed(function (err) {
            // 新的版本下载失败
            console.log('= onUpdateFailed =', err);
        });
    });
});
