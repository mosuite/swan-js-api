/**
 * @file 转发
 * @author yupeng07
 * result: check done
 */
describe('share', function () {
    // 测试参数准备
    const shouldFail = function (name) {
        let str = name ? name : '';
        str += '---配置不符合预期，却成功被执行';
        return new Error(str);
    };
    describe('shareAppMessage', function () {
        // 规则开始
        it('正确调用:调起分享面板', function () {
            let params = {
                iconUrl: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/game_share_icon.png',
                imageUrl: 'http://b.bdstatic.com/searchbox/icms/searchbox/img/%E5%B0%8F%E6%9C%89%E5%90%8D%E6%B0%94H5.png',
                title: 'shareTest',
                content: 'testtest',
                query: 'test1=abc&test2=abc&test3=abc',
                success: res => {
                    console.log('share success', JSON.stringify(res));
                },
                fail: err => {
                    console.log('share fail', JSON.stringify(err));
                }
            };
            swan.shareAppMessage(params);
        });
        it('正确调用:侦听分享按钮点击，需要手动点击触发', function () {
            swan.onShareAppMessage(() => {
                return {
                    title: 'test',
                    success: res => {
                        console.log('onShareAppMessage share success', JSON.stringify(res));
                    },
                    fail: err => {
                        console.log('onShareAppMessage share fail', JSON.stringify(err));
                    }
                }
            });
        });
        it('正确调用:隐藏分享按钮，需要手动点击查看', function () {
            swan.hideShareMenu();
            setTimeout(()=>{
                swan.showShareMenu();
            }, 5000)
        });
        it('正确调用:显示分享按钮，需要手动点击查看', function () {
            before(() => {
                swan.hideShareMenu();
            });
            swan.showShareMenu();
        });
    });
});