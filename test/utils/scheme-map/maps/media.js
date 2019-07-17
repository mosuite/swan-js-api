/**
 * @file util/scheme-map
 * @author lijia30@baidu.com
 * @description  端能力scheme与模拟端返回映射关系
 */

export default {
    'baiduboxapp://swanAPI/imageRecognition': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                barcodeResult: {
                    codeType: 'QRCODE',
                    result: 'https://smartapp.baidu.com'
                }
            }
        }
    },
    'baiduboxapp://swanAPI/chooseImage': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                tempFilePaths: 'http://127.0.0.1:8199/program/155289156902750.png',
                tempFiles: [
                    {
                        path: 'http://127.0.0.1:8199/program/155289156902750.png',
                        size: 1111
                    }
                ]
            }
        }
    },
    'baiduboxapp://swanAPI/chooseAlbum': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                tempFilePaths: 'http://127.0.0.1:8199/program/155289156902750.png',
                tempFiles: [
                    {
                        path: 'http://127.0.0.1:8199/program/155289156902750.png',
                        size: 1111,
                        type: 'video',
                        duration: 10,
                        height: 223,
                        width: 100
                    }
                ]
            }
        }
    },
    'baiduboxapp://utils/previewImage': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/getImageInfo': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                width: 1,
                path: 'https://www.baidu.com/img/bd_logo1.png',
                height: 1,
                orientation: 'up',
                type: 'png'
            }
        },
        failData: {
            status: '10001',
            message: '调起失败',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/saveImageToPhotosAlbum': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/audio/setInnerAudioOption': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/chooseVideo': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/saveVideoToPhotosAlbum': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/recorder/start': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/recorder/pause': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/recorder/resume': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/recorder/stop': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/backgroundAudio/open': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        },
        failData: {
            status: '10001',
            message: '调起失败',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/backgroundAudio/update': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/backgroundAudio/play': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/backgroundAudio/pause': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/backgroundAudio/stop': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/backgroundAudio/seek': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/backgroundAudio/getParamsSync': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/audio/open': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/audio/update': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/audio/play': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        },
        failData: {
            status: '10001',
            message: '调起失败',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/audio/pause': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/audio/stop': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/audio/seek': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/audio/close': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/video/open': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/video/play': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/video/pause': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/video/seek': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/video/sendDanmu': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/video/fullScreen': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/video/showStatusBar': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/video/hideStatusBar': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/live/play': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                slaveId: 1,
                liveId: 'myVideo'
            }
        }
    },
    'baiduboxapp://swanAPI/live/stop': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/live/pause': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/live/resume': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/live/mute': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/live/fullScreen': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/camera/takePhoto': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                tempImagePath: '/xxx/xxx/xxx.jpg'
            }
        }
    },
    'baiduboxapp://swanAPI/camera/startRecord': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/camera/stopRecord': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                tempThumbPath: '/xxx/xxx/xxx.jpg',
                tempVideoPath: '/xxx/xxx/xxx.jpg'
            }
        }
    },
    'baiduboxapp://swanAPI/ARCamera/takePhoto': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                tempImagePath: '/xxx/xxx/xxx.jpg'
            }
        }
    },
    'baiduboxapp://swanAPI/ARCamera/startRecord': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/ARCamera/update': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/ARCamera/stopRecord': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                tempThumbPath: '/xxx/xxx/xxx.jpg',
                tempVideoPath: '/xxx/xxx/xxx.jpg'
            }
        }
    }
};