/**
 * @file util/accelerometer
 * @author liuxiaoming02@baidu.com
 * @description  accelerometer端能力模拟端返回
 */

export default {
    'baiduboxapp://swanAPI/startAccelerometer': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                x: 12,
                y: 30,
                z: 40
            }
        }
    },
    'baiduboxapp://swanAPI/stopAccelerometer': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    }
};