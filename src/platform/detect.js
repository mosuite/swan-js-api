
/* eslint-disable */


/**
 * 探测ua，已经集成到zepto，**不需要**单独引用，直接用Zepto.os
 * Zepto.os里面没有微信微博的判断方法，如果使用，请单独引入detect模块
 * @memberOf Bdbox.utils
 * @name detect
 * @function
 * @param  {String} ua userAgent字符串
 * @return {Object} obj  返回对象
 * @example
 * if(Bdbox.os.android){alert(Bdbox.os.version);}
 * if(Bdbox.os.isWechat){
 *     alert('微信');
 * }
 * if(Bdbox.os.isWeibo){
 *     alert('微博');
 * }
 * //部分userAgent可能是后注入的，所以需要重新获取
 * var os = Bdbox.utils.detect();
 * if(os.isWechat){
 *     alert('微信');
 * }
 * //还可以传入一个userAgent
 * var os = Bdbox.utils.detect(userAgent);
 * console.log(os);
 *
 * @author wangyongqing01
 * $Id: detect.js 286951 2016-03-17 09:28:35Z wangyongqing01 $
 */
import {hasNoGlobal} from '../utils/global';

var definedUA = navigator.userAgent;

function detect(ua) {
    var os = {
        name: 'unknown',
        version: 0
    };

    ua = ua || definedUA;
    if (hasNoGlobal) {
        var android = ua.match(/(Android);?\s+([\d.]+)?/);
        if (android) {
            os.android = true;
            os.version = android[2];
            os.name = 'android';
            return os;
        }

        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
            ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
            iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
        if (iphone && !ipod) {
            os.ios = os.iphone = true;
            os.version = iphone[2].replace(/_/g, '.');
            os.name = 'ios';
            return os;
        }
        if (ipad) {
            os.ios = os.ipad = true;
            os.name = 'ios';
            os.version = ipad[2].replace(/_/g, '.');
            return os;
        }
        if (ipod) {
            os.name = 'ios';
            os.ios = os.ipod = true;
            os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
            return os;
        }
    } else {
        var android = ua.match(/(P1)\s([\d/.]+)/);
        if (android) {
            os.android = true;
            os.version = android[2];
            os.name = 'android';
            return os;
        }
        var ios = ua.match(/(P2)\s([\d/.]+)/);
        if (ios) {
            os.ios = true;
            os.name = 'ios';
            os.version = ios[2];
            return os;
        }
    }

    return os;
};

module.exports = detect;
