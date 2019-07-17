/**
 * @file util/scheme-map
 * @author lijia30@baidu.com
 * @description  端能力scheme与模拟端返回映射关系
 */
import {callbackRes} from '../../constant'
export default {
    'baiduboxapp://swanAPI/guidePushSetting': {
        data: {
            ...callbackRes,
            data: {
                authorized: true,
                canceled: false
            }
        }
    },
    'baiduboxapp://swanAPI/map/openWalkNavigation': {
        data: {
            ...callbackRes,
            data: {
                status:  0,
                message: 'success'
            }
        }
    }

}