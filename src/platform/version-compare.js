
/* eslint-disable */


/**
 * 版本比较；
 * @memberOf Bdbox.utils
 * @name version_compare
 * @param  {String} version1 第一个版本号
 * @param  {String} version2 第二个版本号
 * @return {Nubmer} num  version1==version2返回0；version1>version2返回1；小于返回-1
 * @author wangyongqing01
 * @version $Id: version_compare.js 175996 2014-05-16 00:48:03Z wangyongqing01 $
 * @example
 * var version_compare = require('common:bdbox/utils/version_compare');
 * var getVersion = require('common:bdbox/utils/getVersion');
 * version_compare(getVersion(), '4.7.1');
 * //version1==version2返回0；
 * //version1>version2返回1；
 * //小于返回-1
 */
module.exports = function(version1, version2) {
    version2 += '';
    version1 += '';

    var a = version1.split('.'),
        b = version2.split('.'),
        i = 0,
        len = Math.max(a.length, b.length);

    for (; i < len; i++) {
        if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
            return 1;
        } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
            return -1;
        }
    }
    return 0;
};

