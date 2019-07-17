/**
 * @file file case for apiDemo-image
 * @author yupeng07@baidu.com
 * result: check done
 */

describe('net', function () {
    this.timeout(10000);
    const shouldFail = new Error('配置不符合预期，却成功被执行');
    const downloadUrl = 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf';
    const downloadUrl2 = 'https://lvyou.baidu.com/static/qianfan/lvyou/kingkong/pics/aaa.png';
    const downloadUrl3 = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
    const filePath = 'bdfile://usr/test.pdf';
    const filePath2 = 'bdfile://usr/test.png';
    const filePath3 = 'bdfile://usr/test.mp3';

    describe('downloadFile', function () {
        it('正确调用:无 filePath', function (done) {
            let task = swan.downloadFile({
                url: downloadUrl,
                success: res => {
                    // swan.showModal({
                    //     content: JSON.stringify(res)
                    // });
                    assert(typeof res === 'object');
                    assert(typeof res.tempFilePath === 'string');
                    done();
                },
                fail: done
            });
            // swan.showModal({
            //     title:'1231231',
            //     content: JSON.stringify(task)
            // });
            task.onProgressUpdate(({progress, totalBytesWritten, totalBytesExpectedToWrite}) => {
                swan.showModal({
                    title:'1231231',
                    content: '12222222222222222222222222222222222222222222222222222222222222222222222'
                });
            });
        });
        it.skip('正确调用  小游戏缺少filepath参数', function (done) {
            let task = swan.downloadFile({
                header: {
                    'Cache-Control': 'no-cache'
                },
                filePath: filePath2,
                url: downloadUrl2,
                success: res => {
                    swan.showModal({
                        content: JSON.stringify(res)
                    });
                    console.log('downloadFile', res);
                    assert(typeof res === 'object');
                    assert(res.filePath === filePath2);
                    done();
                },
                fail: done
            });
            task.onProgressUpdate(({progress, totalBytesWritten, totalBytesExpectedToWrite}) => {
                swan.showModal({
                    content: `===============downloadFile progress:${progress}%, ${totalBytesWritten}/${totalBytesExpectedToWrite}`
                });
            })
        });
        it('abort 正确调用', function (done) {
            this.timeout(10000);
            let count = 0;
            let task = swan.downloadFile({
                header: {
                    'Cache-Control': 'no-cache'
                },
                url: downloadUrl3,
                success: res => {
                    // swan.showToast({
                    //     title: JSON.stringify(res),
                    //     duration: 2000
                    // });
                    console.log('downloadFileTask.abort', res);
                    done(shouldFail);
                },
                fail: done
            });
            task.onProgressUpdate(({progress, totalBytesWritten, totalBytesExpectedToWrite}) => {
                ++ count;
                task.abort();
                swan.showModal({
                    title:'1231231',
                    content: '12222222222222222222222222222222222222222222222222222222222222222222222'
                });
            });
            setTimeout(() => {
                count === 1 && done();
            }, 8000);
        });
        it('异常调用:参数类型 #url not string', function (done) {
            swan.downloadFile({
                header: {
                    'Cache-Control': 'no-cache'
                },
                url: 0,
                fail: () => done(),
                success: () => done(shouldFail)
            });
        });
        it('异常调用:参数必填 #url not required', function (done) {
            swan.downloadFile({
                header: {
                    'Cache-Control': 'no-cache'
                },
                fail: () => done(),
                success: () => done(shouldFail)
            });
        });
        it('异常调用:参数类型 #header not object', function (done) {
            swan.downloadFile({
                header: 0,
                url: downloadUrl,
                fail: () => done(),
                success: () => done(shouldFail)
            });
        });
    });
});
