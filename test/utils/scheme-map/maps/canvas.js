/**
 * @file util/canvas
 * @author bailonggang
 * @description  canvas模拟端返回值
 */

import {callbackRes} from '../../constant'

export default {
    'baiduboxapp://swanAPI/canvas/getImageData': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                width: 100,
                height: 100,
                data: []
            }
        }
    },
    'baiduboxapp://swanAPI/canvas/putImageData': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/canvas/toTempFilePath': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                tempFilePath: ''
            }
        }
    },
    'baiduboxapp://swanAPI/canvas/measureTextSync': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                width: 10
            }
        }
    },
    'baiduboxapp://swanAPI/canvas/insert': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/canvas/remove': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/canvas/update': {
        data: callbackRes
    }
};