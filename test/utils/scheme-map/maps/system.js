/**
 * @file util/scheme-map
 * @author lijia30@baidu.com
 * @description  端能力scheme与模拟端返回映射关系
 */

import {callbackRes} from '../../constant';

export default {
    'baiduboxapp://utils/getSystemInfoSync': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                'batteryLevel': -1,
                'version': '11.3.0.0',
                'system': 'iOS 11.4',
                'brand': 'iPhone',
                'windowHeight': 603,
                'host': 'baiduboxapp',
                'pixelRatio': 2,
                'screenHeight': 667,
                'SDKVersion': '3.10.32',
                'statusBarHeight': 20,
                'language': 'zh_CN',
                'platform': 'ios',
                'devicePixelRatio': 2,
                'windowWidth': 375,
                'model': 'iPhone Simulator <x86-64>',
                'screenWidth': 375,
                'fontSizeSetting': 2
            }
        }
    },
    'baiduboxapp://utils/getSystemInfo': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                'batteryLevel': -1,
                'version': '11.3.0.0',
                'system': 'iOS 11.4',
                'brand': 'iPhone',
                'windowHeight': 603,
                'host': 'baiduboxapp',
                'pixelRatio': 2,
                'screenHeight': 667,
                'SDKVersion': '3.10.32',
                'statusBarHeight': 20,
                'language': 'zh_CN',
                'platform': 'ios',
                'devicePixelRatio': 2,
                'windowWidth': 375,
                'model': 'iPhone Simulator <x86-64>',
                'screenWidth': 375,
                'fontSizeSetting': 2
            }
        }
    },
    'baiduboxapp://swanAPI/memoryWarning': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                level: 10
            }
        }
    },
    'baiduboxapp://utils/getNetworkType': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                networkType: 'wifi'
            }
        }
    },
    'baiduboxapp://utils/setClipboardData': {
        data: callbackRes,
        failData: {
            status: '202',
            message: '解析失败，请检查参数是否正确'
        }
    },
    'baiduboxapp://utils/getClipboardData': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                data: 'baidu'
            }
        }
    },
    'baiduboxapp://swanAPI/getAppInfoSync': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                'cuid': 'EDDB222487D1155A225B30F3952AA21664A142031OMRNMLFMHH',
                'showBy': 'user',
                'appLaunchScheme': 'baiduboxapp://swanAPI/launch?params={\'appid\':\'4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c\'}&from=1201004510074000',
                'clkid': '',
                'scene': '1201004510074000',
                'iconUrl': 'https://b.bdstatic.com/searchbox/mappconsole/image/20180502/1525250801121271.png',
                'extraData': {},
                'appId': '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c',
                'appname': '智能小程序官方示例',
                'appid': '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c',
                'mtjCuid': 'EDDB222487D1155A225B30F3952AA21664A142031OMRNMLFMHH',
                'srcAppId': '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c',
                'srcAppPage': 'page/index'
            }
        }
    },
    'baiduboxapp://swanAPI/getCommonSysInfo': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                cuid: 'EDDB222487D1155A225B30F3952AA21664A142031OMRNMLFMHH',
                baidu_id: '20A8BE4B04D25D1D081A020EB46D192A:FG=1',
                sid: '126891_114550_128941_130409_114745_129857_130057_120149_130061_130178_107316_118890_118862_118840_118830_118792_130385_129565_129751_130129',
                uid: 't6s1q8sCCrVvfrHeUo0tqA',
                zid: '',
                imei: 'qwq100001',
            }
        }
    },
    'baiduboxapp://swanAPI/getSlaveIdSync': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                slaveId: '1'
            }
        }
    }
}