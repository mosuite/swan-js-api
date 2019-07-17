
import $ from '../utils/_core';
/* eslint-disable */
/**
 * 获取框的版本号
 * @memberOf Bdbox.utils
 * @name getVersion
 * @function
 * @return {String} version 返回框的版本号
 * @author wangyongqing01
 * @version  $Id: getVersion.js 175996 2014-05-16 00:48:03Z wangyongqing01 $
 */

var str = navigator.userAgent;
function getVersion(reg,index) {
    var version = '0';
    if (!index) {
        index = 1;
    }
    var reg = reg;
    if (reg.exec(str)) {
        version = reg.exec(str)[index];
    }
    return version;
}

var getVersionTool = {
    getBoxVersion: function() {
        var back = 0;
        if ($.isBox) {
            var a = '';
            if (a = /swan-(?!native\/)([a-zA-Z0-9]+)\/([\d+\.]+)/.exec(str)) {
                back = a [2];
            } else {
                a = /baiduboxapp\/([\d+.]+)/.exec(str)
                back = a[1];
            }
        }

        return back;
    },
    getHostVersion: function() {
        let reg = /swan-(?!native\/)([a-zA-Z0-9]+)\/([\d+\.]+)/;
        return getVersion(reg, 2);
    },

    getSdkVersion: function() {
        var reg = /swan\/([\d+.]+)/;
        return getVersion(reg, 1);
    },

}

module.exports = getVersionTool;
