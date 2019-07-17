/**
 * @file util/boxjs最后一部分
 * @author bailonggang
 * @description  boxjs最后一部分模拟端返回值
 */

export default {
    'baiduboxapp://swanAPI/performancePanel': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/ubcFlowJar': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/openStatisticFlowJar': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/getLaunchAppInfo': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                ext: []
            }
        },
        errExt: {
            status: '0',
            message: '调起成功',
            data: {
                ext: ['{"strategy":{"daily_duration":"","launch_count":""}}']
            }
        },
        extValueTwo: {
            status: '0',
            message: '调起成功',
            data: {
                forbidden: true,
                visitDuration: 1,
                launchCount: 1,
                ext: ['{"strategy":{"daily_duration":"2","launch_count":"2"}}']
            }
        },
        extValueOne: {
            status: '0',
            message: '调起成功',
            data: {
                forbidden: true,
                visitDuration: 1,
                launchCount: 100,
                ext: ['{"strategy":{"daily_duration":"1","launch_count":"1"}}']
            }
        },
        extKeyPackageName: {
            status: '0',
            message: '调起成功',
            data: {
                forbidden: true,
                visitDuration: 1,
                launchCount: 1,
                ext: ['{"package_name":["smartapp"]}']
            }
        },
        openFail: {
            status: '0',
            message: '调起成功',
            data: {
                forbidden: true,
                visitDuration: 1,
                launchCount: 1,
                ext: ['{"package_name":["smartapp"]}']
            }
        }
    },
    'baiduboxapp://swanAPI/openApp': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        },
        openFail: {
            status: '202'
        }
    },
    'baiduboxapp://swanAPI/launch': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/exit': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/preventPullDownRefresh': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/installApp4Ad': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        },
        onProgressUpdate: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/installApp': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        },
        onProgressUpdate: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/checkAppInstalled': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/sConsole/sanIncData2Console': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/sConsole/sanFullData2Console': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/sConsole/getSanDataFromActiveSlave': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://tts/speak': {
        data: {
            status: 0,
            message: '调起成功'
        },
        0: {
            status: 0,
            message: '调起成功'
        },
        1: {
            status: 1,
            message: '调起成功'
        },
        2: {
            status: 2,
            message: '调起成功'
        },
        3: {
            status: 3,
            message: '调起成功'
        },
        5: {
            status: 5,
            message: '调起成功'
        }
    }
};