/**
 * @file util/scheme-map
 * @author lijia30@baidu.com
 * @description  端能力scheme与模拟端返回映射关系
 */
import {callbackRes} from '../../constant'
export default {
    'baiduboxapp://swanAPI/setNavigationBarTitle': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/hideNavigationBarLoading': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/showNavigationBarLoading': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/setNavigationBarColor': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/menu/setMenuOpacity': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/confirmSwanClose': {
        data: callbackRes
    },

}