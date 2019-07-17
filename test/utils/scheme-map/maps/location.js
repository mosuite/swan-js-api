/**
 * @file util/scheme-map
 * @author lijia30@baidu.com
 * @description  端能力scheme与模拟端返回映射关系
 */

export default {
    'baiduboxapp://swanAPI/getLocation': {
        data: {
            status: 0,
            message: '调起成功',
            data: {
                'speed': -1,
                'longitude': -122.406417,
                'countryCode': '54003',
                'latitude': 37.785834,
                'province': 'California',
                'verticalAccuracy': -1,
                'cityCode': '54537',
                'street': 'Ellis Street',
                'city': 'San Francisco',
                'accuracy': 5,
                'district': '',
                'altitude': 0,
                'country': 'United States',
                'streetNumber': '',
                'horizontalAccuracy': 5
            }
        }
    },
    'baiduboxapp://swanAPI/map/chooseLocation': {
        data: {
            status: 0,
            message: '调起成功',
            data: {
                address: 'Ellis Street, San Francisco, California, United States',
                latitude: 37.78583401977729,
                longitude: -122.40641699999992,
                name: ''
            }
        }
    },
    'baiduboxapp://swanAPI/map/openLocation': {
        data: {
            status: 0,
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/map/moveToLocation': {
        data: {
            status: 0,
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/map/getCenterLocation': {
        data: {
            status: 0,
            message: '调起成功',
            data: {
                'longitude': -122.40641699999992,
                'latitude': 37.78583401977729
            }
        }
    },

    'baiduboxapp://swanAPI/map/getScale': {
        data: {
            status: 0,
            message: '调起成功',
            data: {
                scale: 16
            }
        }
    },
    'baiduboxapp://swanAPI/map/includePoints': {
        data: {
            status: 0,
            message: '调起成功'
        }
    },
    'baiduboxapp://swanAPI/map/getRegion': {
        data: {
            status: 0,
            message: '调起成功',
            data: {
                'northeast': {
                    'longitude': 116.30129126739908,
                    'latitude': 40.06086326864367
                },
                'southwest': {
                    'longitude': 116.2595200611851,
                    'latitude': 40.03678452604784
                }
            }
        }
    }

}
