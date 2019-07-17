/**
 * @file for tests report page
 * @author sunweinan@baidu.com
 * com_navigator导致页面跳出或崩溃，不在此引入。
 * internalapi文件内绑定swan-core提供的方法，暂未引入，
 */

/* globals mocha, chai, boxjs, swan */

import swaninterface from 'src/index';
const noop = () => {};
const modules = [
    // 网络
    'request.test',
    'upload.test',
    // 'download.test',
    // 'web-socket.test',
    // // 媒体
    // 'image.test',
    // 'manager.test',
    // 'audio.test',
    // 'video.test',
    // // // 文件
    //  'file.test',
    // // // 数据缓存
    // // 'storage.test',
    // // // 位置
    // 'location.test',
    // // 设备
    // 'device.test',
    // // 界面
    // 'ui.test',
    // // 开放接口
    'open.test',
    // // AI ocr (光学字符识别)
    'ocr.test',
    'ai.test'
];
class Ajax {
    static handdleStateChange(xhr, success, fail) {
        // readyState == 4说明请求已完成
        if (xhr.readyState === 4) {
            let response = xhr.responseText;

            try {
                response = typeof response !== 'object' ? JSON.parse(response) : response;
            } catch (e) {
                fail(response);
                return;
            }

            if ((xhr.status !== 200 && xhr.status !== 304 || response.errno !== 0)) {
                fail(response || xhr);
                return;
            }
            success(response);
        }
    }

    static qs(json) {
        if (!json) {
            return '';
        }
        return Object.keys(json).map(key => {
            if (json[key] === undefined) {
                return '';
            }
            json[key] = typeof json[key] === 'object' ? JSON.stringify(json[key]) : json[key];
            return `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`;
        }).join('&');
    }
    static post({
        url,
        body,
        success,
        fail
    }) {
        var xhr = new XMLHttpRequest();

        // 使用post请求
        xhr.open('post', url);

        // 如果使用 post 发送数据 必须设置如下内容
        // 修改了 发送给 服务器的 请求报文的 内容
        // 如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // 发送
        // post请求 发送的数据 写在 send方法中
        // 格式 name=jack&age=18 字符串的格式
        xhr.send(this.qs(body));

        // 注册事件
        xhr.onreadystatechange = () => Ajax.handdleStateChange(xhr, success, fail);

    }
    static get({
        url,
        params,
        success,
        fail
    }) {
        // XMLHttpRequest对象用于在后台与服务器交换数据
        let xhr = new XMLHttpRequest();
        url = url + (url.indexOf('?') > -1 ? '&' : '?') + this.qs(params);

        xhr.open('GET', url, true);

        xhr.send();

        xhr.onreadystatechange = () => Ajax.handdleStateChange(xhr, success, fail);
    }
}

class CreateMocha {

    constructor() {
        Object.assign(window, swaninterface);
        window.expect = chai.expect;
    }

    log(params, msg) {
        let that = this;
        params.msg = msg;
        Ajax.get({
            url: that.api.log,
            params,
            fail: noop,
            success: noop
        });
    }
    _config() {
        let that = this;

        this.timeout = 100000;
        this.taskStatus = 0;
        this.taskStatusMessage = {
            0: 'no start',
            1: 'test running',
            2: 'test running end',
            3: 'success',
            4: 'fail',
            5: 'test run timemout',
            100: 'other error'
        };

        this.api = {
            sendResults: 'http://luban.nuomi.com/monitorapp/addtestresult',
            queryTask: 'http://luban.nuomi.com/log/local/querytask',
            callAgile: 'http://luban.nuomi.com/log/compatibility/jobcallback',
            createTask: 'http://luban.nuomi.com/log/local/starttask',
            log: 'http://cp01-swn.epc.baidu.com:8090/api/showquery'
        };
        this.constant = {
            object: {
                key: 'value'
            },
            number: 100,
            string: 'this is string'
        };
        this.error = {
            shouldFail: new Error('参数不符合预期，却成功被执行'),
            noTabBar: new Error('程序错误，当页没有tabBar'),
            manualyCancel: new Error('测试中使用了手动点击取消导致测试失败')
        };
        this.appInfo = boxjs.data.get({
            name: 'swan-appInfoSync'
        });
        this.systemInfo = swan.getSystemInfoSync();
        this.task = {
            jobId: null,
            deviceid: 'CFF86A31CD49FE7B7447489F8DB6B0E73CFE0EC92FHDPCDMLSR',
            system: that.systemInfo.system,
            username: 'wuxiaopan',
            email: 'wuxiaopan@baidu.com',
            upperLimit: JSON.stringify({
                android: 1,
                ios: 92
            })
        };

        mocha.setup('bdd');
        mocha.results = {
            total: 0,
            failNum: 0,
            passNum: 0,
            skipNum: 0,
            failedSuites: {},
            startTime: new Date().getTime(),
            endTime: 0
        };
    }

    deepCopy(init) {
        let endData = {};
        try {
            endData = JSON.parse(JSON.stringify(init));
        } catch (e) {
            console.log(e);
        }
        return endData;
    }

    register() {
        return new Promise(resolve => {
            let that = this;
            let tests = modules.map(mod => `tests/modules/${mod}`);
            require(tests, function () {
                Array.from(arguments).forEach(test => {
                    test.register.call(that);
                });
                resolve();
            });
        });
    }


    start() {
        let that = this;

        return new Promise((resolve, reject) => {
            that.taskStatus = 1;
            mocha.run(() => {
                that.taskStatus = 2;
                resolve();
            });
            setTimeout(() => {
                if (that.taskStatus < 2) {
                    that.taskStatus = 5;
                    reject(new Error('单测运行时间超时'));
                }
            }, that.timeout);
        });
    }

    createTask() {
        console.log('==========createTask==========');

        let that = this;
        return new Promise((resolve, reject) => {
            let params = {
                /* eslint-disable fecs-camelcase */
                user_name: that.task.username,
                device_id: that.task.deviceid,
                test_suite_id: 581
                /* eslint-disable fecs-camelcase */
            };
            console.log('params:', params);
            Ajax.get({
                url: that.api.createTask,
                params,
                success(res) {
                    console.log('result', res);
                    if (res.data && res.data.jobId) {
                        that.task.jobId = res.data.jobId;
                        resolve();
                    } else {
                        reject(new Error('createTask false'));
                    }
                },
                fail: reject
            });
        });
    }

    queryTask() {
        console.log('==========queryTask==========');
        let that = this;
        return new Promise((resolve, reject) => {
            let params = {
                query_type: 2,
                local_device_id: that.task.deviceid
            };
            console.log('params:', params);
            that.log(params, 'querytask-params');
            Ajax.get({
                url: that.api.queryTask,
                params,
                success(res) {
                    console.log('result', res);
                    if (res.data && res.data.id) {
                        that.task.jobId = res.data.id;
                        that.task.email = res.data.creator + '@baidu.com';
                        that.task.username = res.data.creator;
                        that.log(res, 'querytask-success');
                        resolve();
                    } else {
                        that.log(res, 'querytask-failed');
                        that.createTask().then(resolve).catch(reject);
                    }
                },
                fail: reject
            });
        });
    }

    callAgile(taskStatus) {
        console.log('==========callAgile==========');
        let that = this;
        const isFailed = taskStatus === 3 || that.taskStatus !== 3;
        return new Promise((resolve, reject) => {
            let params = {
                type: 'local',
                callback_info: JSON.stringify([{
                    job_id: that.task.jobId,
                    status: isFailed ? 3 : 2,
                    errno: isFailed ? 1 : 0,
                    msg: that.taskStatusMessage[that.taskStatus]
                }])
            };
            console.log('params:', params);
            that.log(params, 'callAgile-params');
            Ajax.get({
                url: that.api.callAgile,
                params,
                success(res) {
                    console.log('result', res);
                    that.log(res, 'callAgile-success');
                    resolve();
                },
                fail: reject
            });

        });
    }

    finished(err) {
        console.log('==========finished==========');
        err && console.log(err);
    }

    sendResults() {
        console.log('=======sendResults=======');
        let that = this;

        return new Promise((resolve, reject) => {
            let params = this.deepCopy(mocha.results);
            params.failedSuites = JSON.stringify(params.failedSuites);
            Object.assign(params, that.task);
            that.log(params, '=======sendResults-params=======');
            console.log('params:', params);
            Ajax.post({
                url: that.api.sendResults,
                body: params,
                success(res) {
                    console.log('result', res);
                    that.log(that.deepCopy(res), 'sendResultsSuccess');
                    that.taskStatus = res.data.result === 0 ? 3 : 4;
                    resolve();
                },
                fail(err) {
                    that.log(err, 'sendResultsFailed');
                    that.taskStatus = 100;
                    reject(err);
                }
            });
        });
    }

    makeResults() {
        this.analyseSuite(mocha.suite);
        mocha.results.endTime = new Date().getTime();
        mocha.results.duration = (mocha.results.endTime - mocha.results.startTime) / 1000;
        mocha.results.total = mocha.results.passNum + mocha.results.failNum + mocha.results.skipNum;
    }

    analyseSuite(suite) {
        let that = this;
        let tests = suite.tests;

        tests && tests.length && tests.forEach(test => {
            test.state === 'passed' && mocha.results.passNum++;
            test.pending === true && mocha.results.skipNum++;
            if (test.state === 'failed') {
                let temp = mocha.results.failedSuites[suite.title] = mocha.results.failedSuites[suite.title] || [];
                temp.push(test.title);
                mocha.results.failNum++;
            }
        });

        suite.suites && suite.suites.length && suite.suites.forEach(suite => that.analyseSuite.call(that, suite));
    }

    load() {
        let that = this;
        this._config();
        that.register()
            .then(that.queryTask.bind(that))
            .then(that.start.bind(that))
            .then(that.makeResults.bind(that))
            .then(that.sendResults.bind(that))
            .then(that.callAgile.bind(that))
            .then(that.finished.bind(that))
            .catch(e => {
                console.log('err', e);
                // 捕捉到异常，通知 agile 失败
                that.callAgile(3);
                that.log({
                    e
                });
            });
    }
}

export default new CreateMocha();
