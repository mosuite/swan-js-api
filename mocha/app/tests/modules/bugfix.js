/**
 * @file file page for apiDemo
 * @author wuxiaopan@baidu.com
 */

/* globals swan */

export default {
    register() {
        /**
         * bug: 连续调用某些 API 时，先调用的可能无法收到回调的问题。
         */

        describe('downloadFile: 连续调用', () => {
            it('正确调用', function (done) {
                this.timeout(6000);
                let successCount = 0;
                swan.downloadFile({
                    url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
                    success(res) {
                        successCount++;
                    }
                });
                swan.downloadFile({
                    url: 'https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf',
                    success(res) {
                        successCount++;
                    }
                });
                setTimeout(function () {
                    successCount === 2 && done();
                }, 5000);
            });
        });

        describe('request: 连续调用', () => {
            it('正确调用', function (done) {
                this.timeout(6000);
                let successCount = 0;
                swan.request({
                    url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
                    dataType: 'json',
                    data: {
                        tabname: '美食酒水'
                    },
                    success: res => {
                        successCount++;
                    }
                });
                swan.request({
                    url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
                    dataType: 'json',
                    data: {
                        tabname: '美食酒水'
                    },
                    success: res => {
                        successCount++;
                    }
                });
                setTimeout(function () {
                    successCount === 2 && done();
                }, 5000);
            });
        });

        describe('connectSocket: 连续调用', () => {
            it('正确调用', function (done) {
                this.timeout(4000);
                let successCount = 0;
                let fisrtTask = swan.connectSocket({
                    url: 'wss://echo.websocket.org'
                });
                fisrtTask.onOpen(res => {
                    successCount++;
                });
                let secondTask = swan.connectSocket({
                    url: 'wss://echo.websocket.org'
                });
                secondTask.onOpen(res => {
                    successCount++;
                });
                setTimeout(function () {
                    successCount === 2 && done();
                }, 3000);
            });
        });
    }
}
