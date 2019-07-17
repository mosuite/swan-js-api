/**
 * @file test/index
 * @author lijia30@baidu.com
 * @description naSwan相关方法测试入口
 */
import {functionList} from './utils/constant'

window._naSwan = undefined;
window.swanGlobal = undefined;

window.webkit = {
    messageHandlers: {}
};
require('./specs/_naSwan.spec');
// require('./specs/iosDetect-SwanGlobal.spec');
// require('./specs/androidDetect-SwanGlobal.spec');

functionList.forEach(key => {
    require(`./specs/${key}`);
});