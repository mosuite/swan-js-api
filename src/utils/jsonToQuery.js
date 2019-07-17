
import $ from './_core';
/* eslint-disable */

/**
 * 将对象转成url，但是没有添加对数组支持
 * @memberOf Bdbox.utils
 * @name jsonToQuery
 * @function
 * @param  {Object} json 待处理的json对象
 * @return {string}  str  处理之后的string字符串
 */
module.exports = function(json) {
    if ($.isString(json)) {
        return json;
    }
    var arr = [];
    for (var i in json) {
        arr.push(i + '=' + json[i]);
    }
    return arr.join('&');
};
