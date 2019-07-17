/**
 * @file test/index
 * @author lijia30@baidu.com
 * @description naSwan相关方法测试入口
 */

 window._naSwan = {
    getEnvVariables: () => {
        return "{\"scheme\":\"unittest\", \"sdkExtension\":\"/Users/sylvia/Library/Developer/CoreSimulator/Devices/6B73CCDF-5F1E-4688-8F74-67532E1ADFC8/data/Containers/Data/Application/1087C5EF-9333-4180-91A4-422A039AA25E/Documents/SwanCaches/swan-core-extension/preset/1.0.0\", \"udid\":\"\", \"host\":\"\", \"port\":\"0\", \"isDebugSdk\":\"1\", \"ctsServerAddress\":{\"master\":[\"\"], \"slave\":[\"\"]}}"
    },
    bindId(){},
    setData(webviewId, message) {
        return {
            status: "0",
            message: "调用成功"
        };
    }
}

window.swanGlobal = {};

require('./specs/andr-data-transport-v8.spec');
require('./specs/_naSwanExist.spec');
require('./specs/androidDetect-SwanGlobal.spec');
