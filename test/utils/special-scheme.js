/**
 * @file util/special-scheme
 * @author lijia30@baidu.com
 * @description  一些特殊情况的scheme判断
 */

export default class SpecialScheme {
    _isArrayBufferRequest(scheme, params) {
        return scheme === 'baiduboxapp://swanAPI/request' && params.responseType === 'arraybuffer';
    }
}