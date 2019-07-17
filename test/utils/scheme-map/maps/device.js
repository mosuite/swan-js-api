/**
 * @file util/makePhoneCall
 * @author shixinzhe
 * @description  设备模拟端返回值
 */

export default {
    'baiduboxapp://swanAPI/startCompass': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                direction: 0
            }
        }
    },
    'baiduboxapp://swanAPI/stopCompass': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/scanCode': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                charSet: 'ascii',
                result: 'https://smartapp.baidu.com/mappconsole/api/packagescheme?appKey=38te8bGL8NrnHGVkcOcWAFW7eMZCTXLC&packageId=78335',
                scanType: 'QR_CODE'
            }
        }
    },
    'baiduboxapp://swanAPI/brightness/set': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/brightness/get': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                value: 0.5
            }
        }
    },
    'baiduboxapp://swanAPI/brightness/keepScreenOn': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                keepScreenOn: true
            }
        }
    },
    "baiduboxapp://swanAPI/getBatteryInfoSync": {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                level: 50,
                isCharging: true
            }
        }
    },
    "baiduboxapp://swanAPI/getBatteryInfo": {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                level: 50,
                isCharging: true
            }
        }
    },
    'baiduboxapp://swanAPI/networkStatusChange': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    }
};
