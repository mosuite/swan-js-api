/**
 * @file util/scheme-map
 * @author lijia30@baidu.com
 * @description  端能力scheme与模拟端返回映射关系
 */
import {callbackRes} from '../../constant'
export default {
    'baiduboxapp://swanAPI/showToast': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/showLoading': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/dismissToast': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/hideToast': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/hideLoading': {
        data: callbackRes
    },
    'baiduboxapp://utils/showModal': {
        data: {
            status: 0,
            message: '调起成功',
            data: {
                type: 'cancel'
            }
        }
    },

    'baiduboxapp://swanAPI/showActionSheet': {
        data: {
            status: 0,
            message: '调起成功',
            data: {
                tapIndex: 1
            }
        }
    },
    'baiduboxapp://swanAPI/showFavoriteGuide': {
        data: {
            status: 0,
            message: '调起成功',
            data: {
                action: 0
            }
        }
    },
    'baiduboxapp://swanAPI/showOpenAppGuide': {
        data: {
            status: 0,
            message: '调起成功',
        }
    },
    'baiduboxapp://swanAPI/hideOpenAppGuide': {
        data: {
            status: 0,
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/addFavor': {
        data: {
            status: 0,
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/deleteFavor': {
        data: {
            status: 0,
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/getFavor': {
        data: {
            status: 0,
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/isFavor': {
        data: {
            status: 0,
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/topFavor': {
        data: {
            status: 0,
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/getHistory': {
        data: {
            status: 0,
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/deleteHistory': {
        data: {
            status: 0,
            message: '调起成功'
        }
    }


}