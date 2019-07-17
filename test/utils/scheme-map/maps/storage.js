/**
 * @file util/storage
 * @author liuxiaoming02
 * @description 数据存储接口模拟端返回值
 */

export default {
    'baiduboxapp://swanAPI/setStorage': {
        data: {
            status: '0',
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/setStorageSync': {
        data: {
            status: '0',
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/getStorage': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                data: 'content'
            }
        }
    },
    'baiduboxapp://swanAPI/getStorageSync': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                data: 'content'
            }
        }
    },
    'baiduboxapp://swanAPI/getStorageInfo': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                keys: ['key1','key2'],
                currentSize: 110,
                limitSize: 10485760
            }
        }
    },
    'baiduboxapp://swanAPI/getStorageInfoSync': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                keys: ['key1','key2'],
                currentSize: 110,
                limitSize: 10485760
            }
        }
    },
    'baiduboxapp://swanAPI/removeStorage': {
        data: {
            status: '0',
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/removeStorageSync': {
        data: {
            status: '0',
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/clearStorage': {
        data: {
            status: '0',
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/clearStorageSync': {
        data: {
            status: '0',
            message: '调起成功'
        }
    }
};
