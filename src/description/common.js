/**
 * @file src/description/common.js
 * @author renzhonghua@baidu.com
 * @description
 */


// 描述信息命名规则：
// 1、insert/update/remove为组件框架使用的端能力后缀，尽量使用 insert/update/remove后缀 的形式
// 2、swan上的desc避开 insert/update/remove后缀
// 3、百度私有能力desc，端上会和开放的能力一起下发，私有能力desc命名有baidu前缀


// 开源宿主调试
export const openSourceDebugList = [
    {
        name: 'downloadExtension',
        authority: 'v40/swan',
        path: '/debug/downloadExtension',
        args: [
            {name: 'url', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'getDebugConfig',
        authority: 'v40/swan',
        path: '/debug/getDebugConfig',
        args: []
    },
    {
        name: 'setDebugConfig',
        authority: 'v40/swan',
        path: '/debug/setDebugConfig',
        args: [
            {
                name: 'config', value: 'object='
            }
        ]
    },
    {
        name: 'setCtsConfig',
        authority: 'v40/swan',
        path: '/debug/setCtsConfig',
        args: [
            {name: 'loadCts', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'setExtensionConfig',
        authority: 'v40/swan',
        path: '/debug/setExtensionConfig',
        args: [
            {name: 'useExtension', value: 'string='}
        ]
    },
    {
        name: 'replaceSwanCore',
        authority: 'v40/swan',
        path: '/debug/replaceSwanCore',
        args: [
            {name: 'url', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'setReplaceSwanCoreConfig',
        authority: 'v40/swan',
        path: '/debug/setReplaceSwanCoreConfig',
        args: [
            {name: 'emitReplaceSwanCore', value: 'string='}
        ]
    }
];

export const synclist = [
    {
        name: 'getSystemInfoSync',
        authority: 'v19/utils',
        path: '/getSystemInfoSync',
        args: []
    },
    {
        name: 'getStorageInfoSync',
        authority: 'v19/swan',
        path: '/getStorageInfoSync',
        args: []
    },
    {
        name: 'clearStorageSync',
        authority: 'v19/swan',
        path: '/clearStorageSync',
        args: []
    },
    {
        name: 'getStorageSync',
        authority: 'v19/swan',
        path: '/getStorageSync',
        args: [
            {name: 'key', value: 'string='}
        ]
    },
    {
        name: 'setStorageSync',
        authority: 'v19/swan',
        path: '/setStorageSync',
        args: [
            {name: 'key', value: 'string='},
            {name: 'data', value: '*='}
        ]
    },
    {
        name: 'removeStorageSync',
        authority: 'v19/swan',
        path: '/removeStorageSync',
        args: [
            {name: 'key', value: 'string='}
        ]
    },
    {
        name: 'isLoginSync',
        authority: 'v34/swan',
        path: '/isLoginSync',
        args: []
    },
    {
        name: 'canvas.measureTextSync',
        authority: 'v29/swan',
        path: '/canvas/measureTextSync',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'canvasId', value: 'string='},
            {name: 'text', value: 'string'},
            {name: 'font', value: 'string'}
        ]
    },
    {
        name: 'backgroundAudio.getParamsSync',
        authority: 'v26/swan',
        path: '/backgroundAudio/getParamsSync',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'param', value: 'string='}
        ]
    },
    {
        name: 'getMenuButtonBoundingClientRect',
        authority: 'v42/swan',
        path: '/getMenuButtonBoundingClientRect',
        args: []
    },
    {
        name: 'getBatteryInfoSync',
        authority: 'v44/swan',
        path: '/getBatteryInfoSync',
        args: []
    },
    {
        name: 'getCommonSysInfoSync',
        authority: 'v32/utils',
        path: '/getCommonSysInfoSync',
        args: []
    },
    {
        name: 'getSlaveIdSync',
        authority: 'v19/swan',
        path: '/getSlaveIdSync',
        args: []
    },
    {
        name: 'getAppInfoSync',
        authority: 'v19/swan',
        path: '/getAppInfoSync',
        args: []
    }
];

export const asynclist = [
    {
        name: 'getPhoneContacts',
        authority: 'v44/swan',
        path: '/getPhoneContacts',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'setMenuOpacity',
        // 上线改为45
        authority: 'v45/swan',
        path: '/menu/setMenuOpacity',
        args: [
            {name: 'alpha', value: 'number='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'live.play',
        authority: 'v26/swan',
        path: '/live/play',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'liveId', value: 'string='}
        ]
    },
    {
        name: 'live.stop',
        authority: 'v26/swan',
        path: '/live/stop',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'liveId', value: 'string='}
        ]
    },
    {
        name: 'live.pause',
        authority: 'v34/swan',
        path: '/live/pause',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'liveId', value: 'string='}
        ]
    },
    {
        name: 'live.resume',
        authority: 'v34/swan',
        path: '/live/resume',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'liveId', value: 'string='}
        ]
    },
    {
        name: 'live.mute',
        authority: 'v26/swan',
        path: '/live/mute',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'liveId', value: 'string='},
            {name: 'muted', value: 'boolean='}
        ]
    },
    {
        name: 'live.fullScreen',
        authority: 'v26/swan',
        path: '/live/fullScreen',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'liveId', value: 'string='},
            {name: 'fullScreen', value: 'boolean='},
            {name: 'direction', value: 'string'}
        ]
    },
    {
        name: 'map.getScale',
        authority: 'v26/swan',
        path: '/map/getScale',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'mapId', value: 'string='}
        ]
    },
    {
        name: 'map.getRegion',
        authority: 'v26/swan',
        path: '/map/getRegion',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'mapId', value: 'string='}
        ]
    },
    {
        name: 'map.includePoints',
        authority: 'v26/swan',
        path: '/map/includePoints',
        args: [
            {name: 'points', value: 'Array='},
            {name: 'padding', value: 'Array'},
            {name: 'slaveId', value: 'string='},
            {name: 'mapId', value: 'string='}
        ]
    },
    {
        name: 'map.translateMarker',
        authority: 'v26/swan',
        path: '/map/translateMarker',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'mapId', value: 'string='},
            {name: 'markerId', value: 'string='},
            {name: 'destination', value: 'object='},
            {name: 'autoRotate', value: 'boolean='},
            {name: 'rotate', value: 'string='},
            {name: 'duration', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'map.moveToLocation',
        authority: 'v26/swan',
        path: '/map/moveToLocation',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'mapId', value: 'string='}
        ]
    },
    {
        name: 'map.getCenterLocation',
        authority: 'v26/swan',
        path: '/map/getCenterLocation',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'mapId', value: 'string='}
        ]
    },
    {
        name: 'onMemoryWarning',
        authority: 'v31/swan',
        path: '/memoryWarning',
        args: [{name: 'cb', value: 'string='}]
    },
    {
        name: 'onNetworkStatusChange',
        authority: 'v22/swan',
        path: '/networkStatusChange',
        args: [{name: 'cb', value: 'string='}]
    },
    {
        name: 'recorder.start',
        authority: 'v27/swan',
        path: '/recorder/start',
        args: [
            {name: 'duration', value: 'string'},
            {name: 'sampleRate', value: 'string'},
            {name: 'numberOfChannels', value: 'string'},
            {name: 'encodeBitRate', value: 'string'},
            {name: 'format', value: 'string'},
            {name: 'cb', value: 'object='}
        ]
    },
    {
        name: 'recorder.pause',
        authority: 'v27/swan',
        path: '/recorder/pause',
        args: []
    },
    {
        name: 'recorder.resume',
        authority: 'v27/swan',
        path: '/recorder/resume',
        args: []
    },
    {
        name: 'recorder.stop',
        authority: 'v27/swan',
        path: '/recorder/stop',
        args: []
    },
    {
        name: 'request',
        authority: 'v19/swan',
        path: '/request',
        args: [
            {name: 'url', value: 'string='},
            {name: 'data', value: 'string|object'},
            {name: 'header', value: 'object'},
            {name: 'method', value: 'string'},
            {name: 'dataType', value: 'string'},
            {name: 'responseType', value: 'string'},
            {name: 'ping', value: 'boolean'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'updateManager.applyUpdate',
        authority: 'v34/swan',
        path: '/applyUpdate',
        args: []
    },
    {
        name: 'video.play',
        authority: 'v22/swan',
        path: '/video/play',
        args: [
            {name: 'videoId', value: 'string='},
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'video.pause',
        authority: 'v22/swan',
        path: '/video/pause',
        args: [
            {name: 'videoId', value: 'string='},
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'video.seek',
        authority: 'v22/swan',
        path: '/video/seek',
        args: [
            {name: 'videoId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'position', value: 'string='}
        ]
    },
    {
        name: 'video.sendDanmu',
        authority: 'v22/swan',
        path: '/video/sendDanmu',
        args: [
            {name: 'videoId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'text', value: 'string'},
            {name: 'color', value: 'string'}
        ]
    },
    {
        name: 'video.fullScreen',
        authority: 'v22/swan',
        path: '/video/fullScreen',
        args: [
            {name: 'videoId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'fullScreen', value: 'boolean='}
        ]
    },
    {
        name: 'video.showStatusBar',
        authority: 'v34/swan',
        path: '/video/showStatusBar',
        args: [
            {name: 'videoId', value: 'string='},
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'video.hideStatusBar',
        authority: 'v34/swan',
        path: '/video/hideStatusBar',
        args: [
            {name: 'videoId', value: 'string='},
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'voiceRecognizer.start',
        authority: 'v36/swan',
        path: '/voiceRecognize/start',
        args: [
            {name: 'vad', value: 'string='},
            {name: 'isLongSpeech', value: 'boolean='},
            {name: 'cb', value: 'object='},
            {name: 'pid', value: 'string='},
            {name: 'voiceServerPath', value: 'string='}
        ]
    },
    {
        name: 'voiceRecognizer.stop',
        authority: 'v36/swan',
        path: '/voiceRecognize/stop',
        args: []
    },
    {
        name: 'voiceRecognizer.cancel',
        authority: 'v36/swan',
        path: '/voiceRecognize/cancel',
        args: []
    },
    {
        name: 'showToast',
        authority: 'v11/swan',
        path: '/showToast',
        args: [
            {name: 'title', value: 'string='},
            {name: 'message', value: 'string'},
            {name: 'icon', value: 'string'},
            {name: 'mask', value: 'boolean'},
            {name: 'time', value: 'string='},
            {name: 'type', value: 'string='},
            {name: 'image', value: 'string'}
        ]
    },
    {
        name: 'getPhoneNumber',
        authority: 'v19/swan',
        path: '/getPhoneNumber',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'setTabBarBadge',
        authority: 'v22/swan',
        path: '/setTabBarBadge',
        args: [
            {name: 'index', value: 'string='},
            {name: 'text', value: 'string='}
        ]
    },
    {
        name: 'removeTabBarBadge',
        authority: 'v22/swan',
        path: '/closeTabBarBadge',
        args: [
            {name: 'index', value: 'string='}
        ]
    },
    {
        name: 'showTabBarRedDot',
        authority: 'v22/swan',
        path: '/openTabBarRedDot',
        args: [
            {name: 'index', value: 'string='}
        ]
    },
    {
        name: 'hideTabBarRedDot',
        authority: 'v22/swan',
        path: '/closeTabBarRedDot',
        args: [
            {name: 'index', value: 'string='}
        ]
    },
    {
        name: 'setTabBarStyle',
        authority: 'v22/swan',
        path: '/setTabBarStyle',
        args: [
            {name: 'color', value: 'string'},
            {name: 'selectedColor', value: 'string'},
            {name: 'backgroundColor', value: 'string'},
            {name: 'borderStyle', value:
                {
                    oneOf: ['black', 'white']
                }
            }
        ]
    },
    {
        name: 'setTabBarItem',
        authority: 'v22/swan',
        path: '/setTabBarItem',
        args: [
            {name: 'index', value: 'string='},
            {name: 'text', value: 'string'},
            {name: 'iconPath', value: 'string'},
            {name: 'selectedIconPath', value: 'string'}
        ]
    },
    {
        name: 'showTabBar',
        authority: 'v22/swan',
        path: '/openTabBar',
        args: [
            {name: 'animation', value: 'boolean='}
        ]
    },
    {
        name: 'hideTabBar',
        authority: 'v22/swan',
        path: '/closeTabBar',
        args: [
            {name: 'animation', value: 'boolean='}
        ]
    },
    {
        name: 'vibrateShort',
        authority: 'v22/swan',
        path: '/vibrateShort',
        args: []
    },
    {
        name: 'getImageInfo',
        authority: 'v22/swan',
        path: '/getImageInfo',
        args: [
            {name: 'src', value: 'string='}
        ]
    },
    {
        name: 'chooseImage',
        authority: 'v22/swan',
        path: '/chooseImage',
        args: [
            {name: 'count', value: 'string'},
            {name: 'sizeType', value: 'string[]'},
            {name: 'sourceType', value: 'string[]'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'saveImageToPhotosAlbum',
        authority: 'v22/swan',
        path: '/saveImageToPhotosAlbum',
        args: [
            {name: 'filePath', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'canvasToTempFilePath',
        authority: 'v22/swan',
        path: '/canvas/toTempFilePath',
        args: [
            {name: 'canvasId', value: 'string='},
            {name: 'x', value: 'string'},
            {name: 'y', value: 'string'},
            {name: 'width', value: 'string'},
            {name: 'height', value: 'string'},
            {name: 'destWidth', value: 'string'},
            {name: 'destHeight', value: 'string'},
            {name: 'fileType', value: 'string'},
            {name: 'quality', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'openLocation',
        authority: 'v26/swan',
        path: '/map/openLocation',
        args: [
            {name: 'latitude', value: 'string='},
            {name: 'longitude', value: 'string='},
            {name: 'name', value: 'string'},
            {name: 'address', value: 'string'},
            {name: 'scale', value: 'string'}
        ]
    },
    {
        name: 'login',
        authority: 'v19/swan',
        path: '/login',
        args: [
            {name: 'cb', value: 'string='},
            {name: 'timeout', value: 'string'}
        ]
    },
    {
        name: 'getSetting',
        authority: 'v19/swan',
        path: '/getSetting',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'openSetting',
        authority: 'v19/swan',
        path: '/openSetting',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'getLocation',
        authority: 'v19/swan',
        path: '/getLocation',
        args: [
            {name: 'type', value: 'string'},
            {name: 'altitude', value: 'boolean'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'getUserInfo',
        authority: 'v19/swan',
        path: '/getUserInfo',
        args: [
            {name: 'cb', value: 'string='}

        ]
    },
    {
        name: 'checkSession',
        authority: 'v19/swan',
        path: '/checkSession',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'authorize',
        authority: 'v19/swan',
        path: '/authorize',
        args: [
            {name: 'scope', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'showLoading',
        authority: 'v19/swan',
        path: '/showLoading',
        args: [
            {name: 'title', value: 'string='},
            {name: 'mask', value: 'boolean'}
        ]
    },
    {
        name: 'hideLoading',
        authority: 'v19/swan',
        path: '/hideLoading',
        args: []
    },
    {
        name: 'previewImage',
        authority: 'v19/utils',
        path: '/previewImage',
        args: [
            {name: 'urls', value: 'string[]'},
            {name: 'images', value: 'Object[]'},
            {name: 'current', value: 'string'}
        ]
    },
    {
        name: 'hideKeyboard',
        authority: 'v19/utils',
        path: '/hideKeyboard',
        args: []
    },
    {
        name: 'getNetworkType',
        authority: 'v19/utils',
        path: '/getNetworkType',
        args: []
    },
    {
        name: 'getSystemInfo',
        authority: 'v19/utils',
        path: '/getSystemInfo',
        args: []
    },
    {
        name: 'getClipboardData',
        authority: 'v19/utils',
        path: '/getClipboardData',
        args: []
    },
    {
        name: 'setClipboardData',
        authority: 'v19/utils',
        path: '/setClipboardData',
        args: [
            {name: 'data', value: 'string='}
        ]
    },
    {
        name: 'setNavigationBarColor',
        authority: 'v19/swan',
        path: '/setNavigationBarColor',
        args: [
            {name: 'frontColor', value: 'string='},
            {name: 'backgroundColor', value: 'string='},
            {name: 'animation', value: 'object'}
        ]
    },
    {
        name: 'setNavigationBarTitle',
        authority: 'v19/swan',
        path: '/setNavigationBarTitle',
        args: [
            {name: 'title', value: 'string='}
        ]
    },
    {
        name: 'showNavigationBarLoading',
        authority: 'v19/swan',
        path: '/showNavigationBarLoading',
        args: []
    },
    {
        name: 'hideNavigationBarLoading',
        authority: 'v19/swan',
        path: '/hideNavigationBarLoading',
        args: []
    },
    {
        name: 'makePhoneCall',
        authority: 'v19/utils',
        path: '/makePhoneCall',
        args: [
            {name: 'phoneNumber', value: 'string='}
        ]
    },
    {
        name: 'getStorageInfo',
        authority: 'v19/swan',
        path: '/getStorageInfo',
        args: []
    },
    {
        name: 'clearStorage',
        authority: 'v19/swan',
        path: '/clearStorage',
        args: []
    },
    {
        name: 'getStorage',
        authority: 'v19/swan',
        path: '/getStorage',
        args: [
            {name: 'key', value: 'string='}
        ]
    },
    {
        name: 'setStorage',
        authority: 'v19/swan',
        path: '/setStorage',
        args: [
            {name: 'key', value: 'string='},
            {name: 'data', value: '*='}
        ]
    },
    {
        name: 'removeStorage',
        authority: 'v19/swan',
        path: '/removeStorage',
        args: [
            {name: 'key', value: 'string='}
        ]
    },
    {
        name: 'showModal',
        authority: 'v19/utils',
        path: '/showModal',
        args: [
            {name: 'title', value: 'string='},
            {name: 'content', value: 'string='},
            {name: 'showCancel', value: 'boolean'},
            {name: 'cancelText', value: 'string'},
            {name: 'confirmText', value: 'string'},
            {name: 'cancelColor', value: 'string'},
            {name: 'confirmColor', value: 'string'}
        ]
    },
    {
        name: 'showActionSheet',
        authority: 'v42/swan',
        path: '/showActionSheet',
        args: [
            {name: 'itemList', value: 'string[]='},
            {name: 'itemColor', value: 'string'}
        ]
    },
    {
        name: 'startPullDownRefresh',
        authority: 'v19/swan',
        path: '/startPullDownRefresh',
        args: []
    },
    {
        name: 'stopPullDownRefresh',
        authority: 'v19/swan',
        path: '/stopPullDownRefresh',
        args: []
    },
    {
        name: 'saveFile',
        authority: 'v22/swan',
        path: '/file/save',
        args: [
            {name: 'tempFilePath', value: 'string='}
        ]
    },
    {
        name: 'getSavedFileList',
        authority: 'v22/swan',
        path: '/file/getSavedFileList',
        args: []
    },
    {
        name: 'getSavedFileInfo',
        authority: 'v22/swan',
        path: '/file/getSavedFileInfo',
        args: [
            {name: 'filePath', value: 'string='}
        ]
    },
    {
        name: 'removeSavedFile',
        authority: 'v22/swan',
        path: '/file/removeSavedFile',
        args: [
            {name: 'filePath', value: 'string='}
        ]
    },
    {
        name: 'openDocument',
        authority: 'v22/swan',
        path: '/file/openDocument',
        args: [
            {name: 'filePath', value: 'string='},
            {name: 'fileType', value: 'string'}
        ]
    },
    {
        name: 'getSwanId',
        authority: 'v24/swan',
        path: '/getSwanId',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'stopAccelerometer',
        authority: 'v26/swan',
        path: '/stopAccelerometer',
        args: []
    },
    {
        name: 'setScreenBrightness',
        authority: 'v26/swan',
        path: '/brightness/set',
        args: [
            {name: 'value', value: 'string='}
        ]
    },
    {
        name: 'stopCompass',
        authority: 'v26/swan',
        path: '/stopCompass',
        args: []
    },
    {
        name: 'getScreenBrightness',
        authority: 'v26/swan',
        path: '/brightness/get',
        args: []
    },
    {
        name: 'setKeepScreenOn',
        authority: 'v26/swan',
        path: '/brightness/keepScreenOn',
        args: [
            {name: 'keepScreenOn', value: 'boolean='}
        ]
    },
    {
        name: 'vibrateLong',
        authority: 'v26/swan',
        path: '/vibrateLong',
        args: []
    },
    {
        name: 'chooseVideo',
        authority: 'v27/swan',
        path: '/chooseVideo',
        args: [
            {name: 'cb', value: 'string='},
            {name: 'sourceType', value: 'string[]'},
            {name: 'compressed', value: 'boolean'},
            {name: 'maxDuration', value: 'string'}
        ]
    },
    {
        name: 'chooseAddress',
        authority: 'v26/swan',
        path: '/chooseAddress',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'chooseInvoiceTitle',
        authority: 'v26/swan',
        path: '/chooseInvoiceTitle',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'scanCode',
        authority: 'v27/swan',
        path: '/scanCode',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'recommendSimilarProducts',
        authority: 'v27/swan',
        path: '/recommendSimilarProducts',
        args: [
            {name: 'cb', value: 'string='},
            {name: 'data', value: 'object'}
        ]
    },
    {
        name: 'recommendProducts',
        authority: 'v27/swan',
        path: '/recommendProducts',
        args: [
            {name: 'cb', value: 'string='},
            {name: 'data', value: 'object'}
        ]
    },
    {
        name: 'saveVideoToPhotosAlbum',
        authority: 'v28/swan',
        path: '/saveVideoToPhotosAlbum',
        args: [
            {name: 'filePath', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'getFileInfo',
        authority: 'v28/swan',
        path: '/file/getInfo',
        args: [
            {name: 'filePath', value: 'string='},
            {name: 'digestAlgorithm', value: 'string'}
        ]
    },
    {
        name: 'chooseLocation',
        authority: 'v32/swan',
        path: '/map/chooseLocation',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'setEnableDebug',
        authority: 'v33/swan',
        path: '/sConsole/debugSwitch',
        args: [
            {name: 'enableDebug', value: 'boolean='}
        ]
    },
    {
        name: 'loadSubPackage',
        authority: 'v34/swan',
        path: '/preloadSubPackage',
        args: [
            {name: 'root', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'canvasPutImageData',
        authority: 'v35/swan',
        path: '/canvas/putImageData',
        args: [
            {name: 'cb', value: 'string='},
            {name: 'data', value: 'string='},
            {name: 'canvasId', value: 'string='},
            {name: 'x', value: 'string='},
            {name: 'y', value: 'string='},
            {name: 'width', value: 'string='},
            {name: 'height', value: 'string'}
        ]
    },
    {
        name: 'canvasGetImageData',
        authority: 'v35/swan',
        path: '/canvas/getImageData',
        args: [
            {name: 'cb', value: 'string='},
            {name: 'canvasId', value: 'string='},
            {name: 'x', value: 'string='},
            {name: 'y', value: 'string='},
            {name: 'width', value: 'string='},
            {name: 'height', value: 'string='}
        ]
    },
    {
        name: 'openTabopt',
        authority: 'v36/feed',
        path: '/tabopt',
        args: [
            {name: 'upgrade', value: 'string'},
            {name: 'action', value: 'string'},
            {name: 'tab_id', value: 'string'},
            {name: 'tabinfo', value: 'object'},
            {name: 'tabindex', value: 'string'},
            {name: 'tabselected', value: 'string'}
        ]
    },
    {
        name: 'openShare',
        authority: 'v44/swan',
        path: '/share',
        args: [
            {name: 'title', value: 'string'},
            {name: 'content', value: 'string'},
            {name: 'imageUrl', value: 'string'},
            {name: 'path', value: 'string'},
            {name: 'pannel', value: 'Array='},
            {name: 'defaultPannel', value: 'Array='},
            {name: 'linkUrl', value: 'string='},
            {
                name: 'mediaType',
                value: {
                    oneOf: ['ugc_forward', 'weixin_friend', 'weixin_timeline',
                        'baiduhi',  'sinaweibo', 'qqfriend', 'qqdenglu']
                }
            },
            {name: 'categoryData', value: 'object='},
            {name: 'type', value: 'string='},
            {name: 'source', value: 'string='},
            {name: 'shareUrl', value: 'string'},
            {name: 'minver', value: 'string'},
            {name: 'command', value: 'object'},
            {name: 'banner', value: 'object'},
            {name: 'categoryInfo', value: 'object'},
            {name: 'cb', value: 'string='},
            {name: 'snapshot', value: 'boolean='},
            {name: 'forceLightTheme', value: 'boolean='}
        ]
    },
    {
        name: 'canvas.drawCanvas',
        authority: 'v22/swan',
        path: '/canvas/drawCanvas',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'canvasId', value: 'string='},
            {name: 'actions', value: 'string='},
            {name: 'cb', value: 'string='},
            {name: 'reserve', value: 'string'}
        ]
    },
    {
        name: 'requestPolymerPayment',
        authority: 'v26/BDWallet',
        path: '/requestPolymerPayment',
        args: [
            {name: 'orderInfo', value: 'object='},
            {name: 'bannedChannels', value: 'string[]'},
            {name: 'cb', value: 'string='},
            {name: 'from', value: 'string'}
        ]
    },
    {
        name: 'requestAliPayment',
        authority: 'v22/BDWallet',
        path: '/requestAliPayment',
        args: [
            {name: 'orderInfo', value: 'string='},
            {name: 'cb', value: 'string='},
            {name: 'from', value: 'string'}
        ]
    },
    {
        name: 'requestPayment',
        authority: 'v22/BDWallet',
        path: '/requestPayment',
        args: [
            {name: 'orderInfo', value: 'string='},
            {name: 'cb', value: 'string='},
            {name: 'from', value: 'string'}
        ]
    },
    {
        name: 'requestWeChatPayment',
        authority: 'v34/BDWallet',
        path: '/requestWeChatPayment',
        args: [
            {name: 'src', value: 'string='},
            {name: 'extraData', value: 'Object='},
            {name: 'cb', value: 'string'},
            {name: 'from', value: 'string'},
            {name: 'version', value: 'string'}
        ]
    },
    {
        name: 'sendSocketMessage',
        authority: 'v30/swan',
        path: '/webSocket/send',
        args: [
            {name: 'taskID', value: 'string='},
            {name: 'data', value: 'string='},
            {name: 'dataType', value: 'string='}
        ]
    },
    {
        name: 'closeSocket',
        authority: 'v30/swan',
        path: '/webSocket/close',
        args: [
            {name: 'taskID', value: 'string='},
            {name: 'code', value: 'string'},
            {name: 'reason', value: 'string'}
        ]
    },
    {
        name: 'connectSocket',
        authority: 'v30/swan',
        path: '/webSocket/connect',
        args: [
            {name: 'url', value: 'string='},
            {name: 'header', value: 'object'},
            {name: 'method', value: 'string'},
            {name: 'protocols', value: 'Array'},
            {name: 'cb', value: 'object='}
        ]
    },
    {
        name: 'startAccelerometer',
        authority: 'v26/swan',
        path: '/startAccelerometer',
        args: [
            {name: 'interval', value: 'string'},
            {name: 'cb', value: 'string='}
        ]

    },
    {
        name: 'addPhoneContact',
        authority: 'v30/swan',
        path: '/setPhoneContact',
        args: [
            {name: 'action', value: 'string='},
            {name: 'cb', value: 'string='},
            {name: 'firstName', value: 'string='},
            {name: 'photoFilePath', value: 'string'},
            {name: 'nickName', value: 'string'},
            {name: 'lastName', value: 'string'},
            {name: 'middleName', value: 'string'},
            {name: 'remark', value: 'string'},
            {name: 'mobilePhoneNumber', value: 'string'},
            {name: 'weChatNumber', value: 'string'},
            {name: 'addressCountry', value: 'string'},
            {name: 'addressState', value: 'string'},
            {name: 'addressCity', value: 'string'},
            {name: 'addressStreet', value: 'string'},
            {name: 'addressPostalCode', value: 'string'},
            {name: 'organization', value: 'string'},
            {name: 'title', value: 'string'},
            {name: 'workFaxNumber', value: 'string'},
            {name: 'workPhoneNumber', value: 'string'},
            {name: 'hostNumber', value: 'string'},
            {name: 'email', value: 'string'},
            {name: 'url', value: 'string'},
            {name: 'workAddressCountry', value: 'string'},
            {name: 'workAddressState', value: 'string'},
            {name: 'workAddressCity', value: 'string'},
            {name: 'workAddressStreet', value: 'string'},
            {name: 'workAddressPostalCode', value: 'string'},
            {name: 'homeFaxNumber', value: 'string'},
            {name: 'homePhoneNumber', value: 'string'},
            {name: 'homeAddressCountry', value: 'string'},
            {name: 'homeAddressState', value: 'string'},
            {name: 'homeAddressCity', value: 'string'},
            {name: 'homeAddressStreet', value: 'string'},
            {name: 'homeAddressPostalCode', value: 'string'}
        ]
    },
    {
        name: 'ARCamera.takePhoto',
        authority: 'v29/swan',
        path: '/ARCamera/takePhoto',
        args: [
            {name: 'slaveId', value: 'string'},
            {name: 'ARCameraId', value: 'string'}
        ]
    },
    {
        name: 'ARCamera.retake',
        authority: 'v29/swan',
        path: '/ARCamera/update',
        args: [
            {name: 'slaveId', value: 'string'},
            {name: 'ARCameraId', value: 'string'},
            {name: 'reset', value: 'boolean'}
        ]
    },
    {
        name: 'ARCamera.startRecord',
        authority: 'v29/swan',
        path: '/ARCamera/startRecord',
        args: [
            {name: 'slaveId', value: 'string'},
            {name: 'ARCameraId', value: 'string'},
            {name: 'onProgressUpdate', value: 'string'},
            {name: 'stopCallback', value: 'string'}
        ]
    },
    {
        name: 'ARCamera.stopRecord',
        authority: 'v29/swan',
        path: '/ARCamera/stopRecord',
        args: [
            {name: 'slaveId', value: 'string'},
            {name: 'ARCameraId', value: 'string'}
        ]
    },
    {
        name: 'camera.takePhoto',
        authority: 'v24/swan',
        path: '/camera/takePhoto',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'quality', value: 'string'}
        ]
    },
    {
        name: 'camera.startRecord',
        authority: 'v24/swan',
        path: '/camera/startRecord',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'timeoutCallback', value: 'string='}
        ]
    },
    {
        name: 'camera.stopRecord',
        authority: 'v24/swan',
        path: '/camera/stopRecord',
        args: [
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'startCompass',
        authority: 'v26/swan',
        path: '/startCompass',
        args: [{name: 'cb', value: 'string='}]
    },
    {
        name: 'cancelRequest',
        authority: 'v22/swan',
        path: '/cancelRequest',
        args: [
            {name: 'cancelTag', value: 'string'},
            {name: 'taskIdentifier', value: 'string'}
        ]
    },
    {
        name: 'downloadFile',
        authority: 'v22/swan',
        path: '/downloadFile',
        args: [
            {name: 'url', value: 'string='},
            {name: 'filePath', value: 'string'},
            {name: 'header', value: 'object'},
            {name: 'onProgressUpdate', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'uploadFile',
        authority: 'v22/swan',
        path: '/uploadFile',
        args: [
            {name: 'url', value: 'string='},
            {name: 'header', value: 'object'},
            {name: 'filePath', value: 'string='},
            {name: 'formData', value: 'object'},
            {name: 'name', value: 'string='},
            {name: 'onProgressUpdate', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'pageScrollTo',
        authority: 'v37/swan',
        path: '/pageScrollTo',
        args: [
            {name: 'scrollTop', value: 'string|number='},
            {name: 'duration', value: 'string|number'}
        ]
    },
    {
        name: 'getHistory',
        authority: 'v24/swan',
        path: '/getHistory',
        args: [{name: 'cb', value: 'string='}]
    },
    {
        name: 'deleteHistory',
        authority: 'v24/swan',
        path: '/deleteHistory',
        args: [
            {name: 'appid', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'addFavor',
        authority: 'v38/swan',
        path: '/addFavor',
        args: [
            {name: 'appid', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'deleteFavor',
        authority: 'v38/swan',
        path: '/deleteFavor',
        args: [
            {name: 'appid', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'getFavor',
        authority: 'v38/swan',
        path: '/getFavor',
        args: [{name: 'cb', value: 'string='}]
    },
    {
        name: 'checkFavor',
        authority: 'v38/swan',
        path: '/isFavor',
        args: [
            {name: 'appid', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'setTopFavor',
        authority: 'v38/swan',
        path: '/topFavor',
        args: [
            {name: 'appid', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'setBackgroundTextStyle',
        authority: 'v41/swan',
        path: '/setBackgroundTextStyle',
        args: [
            {name: 'textStyle', value: 'string='}
        ]
    },
    {
        name: 'setBackgroundColor',
        authority: 'v41/swan',
        path: '/setBackgroundColor',
        args: [
            {name: 'backgroundColor', value: 'string'},
            {name: 'backgroundColorTop', value: 'string'},
            {name: 'backgroundColorBottom', value: 'string'}
        ]
    },
    {
        name: 'setInnerAudioOption',
        authority: 'v41/swan',
        path: '/audio/setInnerAudioOption',
        args: [
            {name: 'mixWithOther', value: 'boolean'}
        ]
    },
    {
        name: 'appInstallManager.install',
        authority: 'v41/swan',
        path: '/installApp',
        args: [
            {
                name: 'type',
                value: {
                    oneOf: ['queryStatus', 'startDownload', 'pauseDownload',
                        'cancelDownload', 'installApp', 'resumeDownload']
                }
            },
            {name: 'url', value: 'string'},
            {name: 'appId', value: 'string'},
            {name: 'name', value: 'string'},
            {name: 'onProgressUpdate', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'isAppInstalled',
        authority: 'v41/swan',
        path: '/checkAppInstalled',
        args: [
            {name: 'name', value: 'string='}
        ]
    },
    {
        name: 'recognizeImage',
        authority: 'v43/swan',
        path: '/imageRecognition',
        args: [
            {name: 'currentIndex', value: 'number'},
            {name: 'categoryList', value: 'object[]='},
            {name: 'customTips', value: 'Object'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'showFavoriteGuide',
        authority: 'v43/swan',
        path: '/showFavoriteGuide',
        args: [
            {
                name: 'type',
                value: {
                    oneOf: ['bar', 'bar-autohide', 'tip']
                }
            },
            {name: 'content', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'showOpenAppGuide',
        // 上线改为V44
        authority: 'v44/swan',
        path: '/showOpenAppGuide',
        args: [
            {name: 'name', value: 'string'},
            {name: 'scheme', value: 'string='},
            {name: 'downloadUrl', value: 'string='},
            {name: 'style', value: 'Object'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'hideOpenAppGuide',
        authority: 'v44/swan',
        path: '/hideOpenAppGuide',
        args: []
    },
    {
        name: 'getBatteryInfo',
        authority: 'v44/swan',
        path: '/getBatteryInfo',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'startDeviceMotionListening',
        authority: 'v44/swan',
        path: '/startDeviceMotion',
        args: [
            {name: 'interval', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'stopDeviceMotionListening',
        authority: 'v44/swan',
        path: '/stopDeviceMotion',
        args: []
    },
    {
        name: 'animView.insert',
        authority: 'v29/swan',
        path: '/animView/insert',
        args: [
            {name: 'gesture', value: 'string='},
            {name: 'hide', value: 'string='},
            {name: 'sanId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'position', value: 'Object='},
            {name: 'style', value: 'Object='},
            {name: 'loop', value: 'boolean='},
            {name: 'autoPlay', value: 'boolean='},
            {name: 'path', value: 'string='},
            {name: 'action', value: 'string='},
            {name: 'parentId', value: 'string='}
        ]
    },
    {
        name: 'animView.update',
        authority: 'v29/swan',
        path: '/animView/update',
        args: [
            {name: 'gesture', value: 'string='},
            {name: 'hide', value: 'string='},
            {name: 'sanId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'position', value: 'Object='},
            {name: 'style', value: 'Object='},
            {name: 'loop', value: 'boolean='},
            {name: 'autoPlay', value: 'boolean='},
            {name: 'path', value: 'string='},
            {name: 'action', value: 'string='},
            {name: 'parentId', value: 'string='}
        ]
    },
    {
        name: 'animView.remove',
        authority: 'v29/swan',
        path: '/animView/remove',
        args: [
            {name: 'sanId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='}
        ]
    },
    // ar-camera
    {
        name: 'ARCamera.insert',
        authority: 'v29/swan',
        path: '/ARCamera/insert',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'ARCameraId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'hide', value: 'boolean='},
            {name: 'ARKey', value: 'string='},
            {name: 'ARType', value: 'string='},
            {name: 'flash', value: 'string='},
            {name: 'position', value: 'Object='}
        ]
    },
    {
        name: 'ARCamera.update',
        authority: 'v29/swan',
        path: '/ARCamera/update',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'ARCameraId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'hide', value: 'boolean='},
            {name: 'ARKey', value: 'string='},
            {name: 'ARType', value: 'string='},
            {name: 'flash', value: 'string='},
            {name: 'position', value: 'Object='}
        ]
    },
    {
        name: 'ARCamera.remove',
        authority: 'v29/swan',
        path: '/ARCamera/remove',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'ARCameraId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='}
        ]
    },
    // button
    {
        name: 'button.insert',
        authority: 'v37/swan',
        path: '/button/insert',
        args: [
            {name: 'gesture', value: 'string'},
            {name: 'slaveId', value: 'string='},
            {name: 'hide', value: 'string'},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'position', value: 'Object'},
            {name: 'style', value: 'Object'},
            {name: 'buttonId', value: 'string='},
            {name: 'text', value: 'string='}
        ]
    },
    {
        name: 'button.update',
        authority: 'v37/swan',
        path: '/button/update',
        args: [
            {name: 'gesture', value: 'string'},
            {name: 'slaveId', value: 'string='},
            {name: 'hide', value: 'string'},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'position', value: 'Object'},
            {name: 'style', value: 'Object'},
            {name: 'buttonId', value: 'string='},
            {name: 'text', value: 'string='}
        ]
    },
    {
        name: 'button.remove',
        authority: 'v37/swan',
        path: '/button/remove',
        args: [
            {name: 'gesture', value: 'string'},
            {name: 'slaveId', value: 'string='},
            {name: 'hide', value: 'string'},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'position', value: 'Object'},
            {name: 'style', value: 'Object'},
            {name: 'buttonId', value: 'string='}
        ]
    },
    // camera
    {
        name: 'camera.insert',
        authority: 'v24/swan',
        path: '/camera/insert',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'cameraId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'hide', value: 'boolean='},
            {name: 'devicePosition', value: 'string='},
            {name: 'flash', value: 'string='},
            {name: 'position', value: 'Object='}
        ]
    },
    {
        name: 'camera.update',
        authority: 'v24/swan',
        path: '/camera/update',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'cameraId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'hide', value: 'boolean='},
            {name: 'devicePosition', value: 'string='},
            {name: 'flash', value: 'string='},
            {name: 'position', value: 'Object='}
        ]
    },
    {
        name: 'camera.remove',
        authority: 'v36/swan',
        path: '/camera/remove',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'cameraId', value: 'string='},
            {name: 'viewId', value: 'string='}
        ]
    },
    // canvas
    {
        name: 'canvas.insert',
        authority: 'v22/swan',
        path: '/canvas/insert',
        args: [
            {name: 'canvasId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'hide', value: 'string='},
            {name: 'disableScroll', value: 'string='},
            {name: 'gesture', value: 'string='},
            {name: 'position', value: 'Object='}
        ]
    },
    {
        name: 'canvas.update',
        authority: 'v22/swan',
        path: '/canvas/update',
        args: [
            {name: 'canvasId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'hide', value: 'string='},
            {name: 'disableScroll', value: 'string='},
            {name: 'gesture', value: 'string='},
            {name: 'position', value: 'Object='}
        ]
    },
    {
        name: 'canvas.remove',
        authority: 'v22/swan',
        path: '/canvas/remove',
        args: [
            {name: 'canvasId', value: 'string='},
            {name: 'slaveId', value: 'string='}
        ]
    },
    // cover-view
    {
        name: 'coverView.insert',
        authority: 'v26/swan',
        path: '/coverview/insert',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'hide', value: 'string='},
            {name: 'gesture', value: 'string='},
            {name: 'position', value: 'Object='},
            {name: 'style', value: 'Object='},
            {name: 'text', value: 'string='},
            {name: 'scrollTop', value: 'string='}
        ]
    },
    {
        name: 'coverView.update',
        authority: 'v26/swan',
        path: '/coverview/update',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'hide', value: 'string='},
            {name: 'gesture', value: 'string='},
            {name: 'position', value: 'Object='},
            {name: 'style', value: 'Object='},
            {name: 'text', value: 'string='},
            {name: 'scrollTop', value: 'string='},
            {name: 'transition', value: 'Object'}
        ]
    },
    {
        name: 'coverView.remove',
        authority: 'v26/swan',
        path: '/coverview/remove',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='}
        ]
    },
    // cover-image
    {
        name: 'coverImage.insert',
        authority: 'v26/swan',
        path: '/coverimage/insert',
        args: [
            {name: 'gesture', value: 'string'},
            {name: 'slaveId', value: 'string='},
            {name: 'hide', value: 'string'},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'position', value: 'Object'},
            {name: 'style', value: 'Object'},
            {name: 'src', value: 'string='},
            {name: 'loadState', value: 'boolean='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'coverImage.update',
        authority: 'v26/swan',
        path: '/coverimage/update',
        args: [
            {name: 'gesture', value: 'string'},
            {name: 'slaveId', value: 'string='},
            {name: 'hide', value: 'string'},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='},
            {name: 'position', value: 'Object'},
            {name: 'style', value: 'Object'},
            {name: 'src', value: 'string='},
            {name: 'loadState', value: 'boolean='},
            {name: 'transition', value: 'Object'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'coverImage.remove',
        authority: 'v26/swan',
        path: '/coverimage/remove',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='}
        ]
    },
    // image
    {
        name: 'getLocalImgData',
        authority: 'v32/swan',
        path: '/getLocalImgData',
        args: [
            {name: 'filePath', value: 'string'}
        ]
    },
    // input
    {
        name: 'input.insert',
        authority: 'v22/swan',
        path: '/openInput',
        args: [
            {name: 'id', value: 'string'},
            {name: 'slaveId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'type', value: 'string'},
            {name: 'value', value: 'string'},
            {name: 'maxLength', value: 'string'},
            {name: 'password', value: 'string'},
            {name: 'style', value: 'Object'},
            {name: 'position', value: 'Object'},
            {name: 'cursorSpacing', value: 'string'},
            {name: 'cursor', value: 'string'},
            {name: 'focus', value: 'string'},
            {name: 'hide', value: 'string'},
            {name: 'placeholder', value: 'string'},
            {name: 'placeholderStyle', value: 'Object'},
            {name: 'confirmHold', value: 'string'},
            {name: 'confirmType', value: 'string'},
            {name: 'selectionStart', value: 'string'},
            {name: 'selectionEnd', value: 'string'},
            {name: 'adjustPosition', value: 'string'},
            {name: 'cb', value: 'string'}
        ]
    },
    {
        name: 'input.update',
        authority: 'v22/swan',
        path: '/updateInput',
        args: [
            {name: 'id', value: 'string'},
            {name: 'slaveId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'type', value: 'string'},
            {name: 'value', value: 'string'},
            {name: 'maxLength', value: 'string'},
            {name: 'password', value: 'string'},
            {name: 'style', value: 'Object'},
            {name: 'position', value: 'Object'},
            {name: 'cursorSpacing', value: 'string'},
            {name: 'cursor', value: 'string'},
            {name: 'focus', value: 'string'},
            {name: 'hide', value: 'string'},
            {name: 'placeholder', value: 'string'},
            {name: 'placeholderStyle', value: 'Object'},
            {name: 'confirmHold', value: 'string'},
            {name: 'confirmType', value: 'string'},
            {name: 'selectionStart', value: 'string'},
            {name: 'selectionEnd', value: 'string'},
            {name: 'adjustPosition', value: 'string'}
        ]
    },
    {
        name: 'input.remove',
        authority: 'v22/swan',
        path: '/closeInput',
        args: [
            {name: 'id', value: 'string'},
            {name: 'slaveId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'type', value: 'string'},
            {name: 'value', value: 'string'},
            {name: 'maxLength', value: 'string'},
            {name: 'password', value: 'string'},
            {name: 'style', value: 'Object'},
            {name: 'position', value: 'Object'},
            {name: 'cursorSpacing', value: 'string'},
            {name: 'cursor', value: 'string'},
            {name: 'focus', value: 'string'},
            {name: 'hide', value: 'string'},
            {name: 'placeholder', value: 'string'},
            {name: 'placeholderStyle', value: 'Object'},
            {name: 'confirmHold', value: 'string'},
            {name: 'confirmType', value: 'string'},
            {name: 'selectionStart', value: 'string'},
            {name: 'selectionEnd', value: 'string'},
            {name: 'adjustPosition', value: 'string'}
        ]
    },
    // map
    {
        name: 'map.insert',
        authority: 'v26/swan',
        path: '/map/create',
        args: [
            {name: 'mapId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'position', value: 'Object'},
            {name: 'hide', value: 'boolean'},
            {name: 'showLocation', value: 'boolean'},
            {name: 'enable3D', value: 'boolean'},
            {name: 'enableRotate', value: 'boolean'},
            {name: 'enableScroll', value: 'boolean'},
            {name: 'enableZoom', value: 'boolean'},
            {name: 'enableOverlooking', value: 'boolean'},
            {name: 'showCompass', value: 'boolean'},
            {name: 'subkey', value: 'string'},
            {name: 'longitude', value: 'string'},
            {name: 'latitude', value: 'string'},
            {name: 'scale', value: 'string'},
            {name: 'markers', value: 'Array'},
            {name: 'polyline', value: 'Array'},
            {name: 'polygons', value: 'Array'},
            {name: 'circles', value: 'Array'},
            {name: 'controls', value: 'Array'},
            {name: 'includePoints', value: 'Array'}
        ]
    },
    {
        name: 'map.update',
        authority: 'v26/swan',
        path: '/map/update',
        args: [
            {name: 'mapId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'position', value: 'Object'},
            {name: 'hide', value: 'boolean'},
            {name: 'showLocation', value: 'boolean'},
            {name: 'enable3D', value: 'boolean'},
            {name: 'enableRotate', value: 'boolean'},
            {name: 'enableScroll', value: 'boolean'},
            {name: 'enableZoom', value: 'boolean'},
            {name: 'enableOverlooking', value: 'boolean'},
            {name: 'showCompass', value: 'boolean'},
            {name: 'subkey', value: 'string'},
            {name: 'longitude', value: 'string'},
            {name: 'latitude', value: 'string'},
            {name: 'scale', value: 'string'},
            {name: 'markers', value: 'Array'},
            {name: 'polyline', value: 'Array'},
            {name: 'polygons', value: 'Array'},
            {name: 'circles', value: 'Array'},
            {name: 'controls', value: 'Array'},
            {name: 'includePoints', value: 'Array'}
        ]
    },
    {
        name: 'map.remove',
        authority: 'v26/swan',
        path: '/map/remove',
        args: [
            {name: 'mapId', value: 'string='},
            {name: 'slaveId', value: 'string='}
        ]
    },
    // picker
    {
        name: 'picker.insert',
        authority: 'v22/utils',
        path: '/openPicker',
        args: [
            {name: 'title', value: 'string'},
            {name: 'array', value: 'Array'},
            {name: 'current', value: 'string'}
        ]
    },
    {
        name: 'multiPicker.insert',
        authority: 'v22/utils',
        path: '/openMultiPicker',
        args: [
            {name: 'title', value: 'string'},
            {name: 'array', value: 'Array'},
            {name: 'current', value: 'Array'},
            {name: 'cb', value: 'string'}
        ]
    },
    {
        name: 'multiPicker.update',
        authority: 'v22/utils',
        path: '/updateMultiPicker',
        args: [
            {name: 'column', value: 'string'},
            {name: 'array', value: 'Array'},
            {name: 'current', value: 'string'}
        ]
    },
    {
        name: 'datePicker.insert',
        authority: 'v19/utils',
        path: '/showDatePickerView',
        args: [
            {name: 'start', value: 'string'},
            {name: 'end', value: 'string'},
            {name: 'mode', value: 'string'},
            {name: 'value', value: 'string'},
            {name: 'fields', value: 'string'}
        ]
    },
    {
        name: 'getRegionData',
        authority: 'v22/swan',
        path: '/getRegionData',
        args: []
    },
    // textarea
    {
        name: 'textarea.insert',
        authority: 'v29/swan',
        path: '/openTextarea',
        args: [
            {name: 'slaveId', value: 'string'},
            {name: 'inputId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'disabled', value: 'string'},
            {name: 'placeholder', value: 'string'},
            {name: 'value', value: 'string'},
            {name: 'maxLength', value: 'string'},
            {name: 'style', value: 'Object'},
            {name: 'position', value: 'Object'},
            {name: 'focus', value: 'string'},
            {name: 'cursor', value: 'string'},
            {name: 'cursorSpacing', value: 'string'},
            {name: 'selectionStart', value: 'string'},
            {name: 'selectionEnd', value: 'string'},
            {name: 'showConfirmBar', value: 'string'},
            {name: 'adjustPosition', value: 'string'},
            {name: 'fixed', value: 'string'},
            {name: 'autoHeight', value: 'string'},
            {name: 'placeholderStyle', value: 'Object'},
            {name: 'hide', value: 'string'},
            {name: 'cb', value: 'string'}
        ]
    },
    {
        name: 'textarea.update',
        authority: 'v29/swan',
        path: '/updateTextarea',
        args: [
            {name: 'slaveId', value: 'string'},
            {name: 'inputId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'disabled', value: 'string'},
            {name: 'placeholder', value: 'string'},
            {name: 'value', value: 'string'},
            {name: 'maxLength', value: 'string'},
            {name: 'style', value: 'Object'},
            {name: 'position', value: 'Object'},
            {name: 'focus', value: 'string'},
            {name: 'cursor', value: 'string'},
            {name: 'cursorSpacing', value: 'string'},
            {name: 'selectionStart', value: 'string'},
            {name: 'selectionEnd', value: 'string'},
            {name: 'showConfirmBar', value: 'string'},
            {name: 'adjustPosition', value: 'string'},
            {name: 'fixed', value: 'string'},
            {name: 'autoHeight', value: 'string'},
            {name: 'placeholderStyle', value: 'Object'},
            {name: 'hide', value: 'string'},
            {name: 'cb', value: 'string'}
        ]
    },
    {
        name: 'textarea.remove',
        authority: 'v29/swan',
        path: '/closeTextarea',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'inputId', value: 'string='},
            {name: 'viewId', value: 'string='},
            {name: 'parentId', value: 'string='}
        ]
    },
    // video
    {
        name: 'video.insert',
        authority: 'v22/swan',
        path: '/video/open',
        args: [
            {name: 'gesture', value: 'string'},
            {name: 'videoId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'sanId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'src', value: 'string'},
            {name: 'initialTime', value: 'string'},
            {name: 'duration', value: 'string'},
            {name: 'objectFit', value: 'string'},
            {name: 'poster', value: 'string'},
            {name: 'slaveId', value: 'string'},
            {name: 'position', value: 'Object'},
            {name: 'controls', value: 'boolean'},
            {name: 'autoplay', value: 'boolean'},
            {name: 'loop', value: 'boolean'},
            {name: 'muted', value: 'boolean'},
            {name: 'showPlayBtn', value: 'boolean'},
            {name: 'showCenterPlayBtn', value: 'boolean'},
            {name: 'showMuteBtn', value: 'boolean'},
            {name: 'danmuList', value: 'Array'},
            {name: 'enableDanmu', value: 'boolean'},
            {name: 'danmuBtn', value: 'boolean'},
            {name: 'hide', value: 'boolean'},
            {name: 'pageGesture', value: 'boolean'},
            {name: 'showProgress', value: 'boolean'},
            {name: 'direction', value: 'string'},
            {name: 'showFullscreenBtn', value: 'boolean'},
            {name: 'enableProgressGesture', value: 'boolean'}
        ]
    },
    {
        name: 'video.update',
        authority: 'v22/swan',
        path: '/video/update',
        args: [
            {name: 'gesture', value: 'string'},
            {name: 'videoId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'sanId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'src', value: 'string'},
            {name: 'initialTime', value: 'string'},
            {name: 'duration', value: 'string'},
            {name: 'objectFit', value: 'string'},
            {name: 'poster', value: 'string'},
            {name: 'slaveId', value: 'string'},
            {name: 'position', value: 'Object'},
            {name: 'controls', value: 'boolean'},
            {name: 'autoplay', value: 'boolean'},
            {name: 'loop', value: 'boolean'},
            {name: 'muted', value: 'boolean'},
            {name: 'showPlayBtn', value: 'boolean'},
            {name: 'showCenterPlayBtn', value: 'boolean'},
            {name: 'showMuteBtn', value: 'boolean'},
            {name: 'danmuList', value: 'Array'},
            {name: 'enableDanmu', value: 'boolean'},
            {name: 'danmuBtn', value: 'boolean'},
            {name: 'hide', value: 'boolean'},
            {name: 'pageGesture', value: 'boolean'},
            {name: 'showProgress', value: 'boolean'},
            {name: 'direction', value: 'string'},
            {name: 'showFullscreenBtn', value: 'boolean'},
            {name: 'enableProgressGesture', value: 'boolean'}
        ]
    },
    {
        name: 'video.remove',
        authority: 'v36/swan',
        path: '/video/remove',
        args: [
            {name: 'videoId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'sanId', value: 'string'},
            {name: 'slaveId', value: 'string'}
        ]
    },
    // live-player
    {
        name: 'live.insert',
        authority: 'v22/swan',
        path: '/live/open',
        args: [
            {name: 'gesture', value: 'string'},
            {name: 'hide', value: 'boolean'},
            {name: 'slaveId', value: 'string'},
            {name: 'liveId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'src', value: 'string'},
            {name: 'position', value: 'Object'},
            {name: 'autoplay', value: 'boolean'},
            {name: 'muted', value: 'boolean'},
            {name: 'orientation', value: 'string'},
            {name: 'objectFit', value: 'string'},
            {name: 'backgroundMute', value: 'boolean'},
            {name: 'minCache', value: 'string'},
            {name: 'maxCache', value: 'string'}
        ]
    },
    {
        name: 'live.update',
        authority: 'v22/swan',
        path: '/live/update',
        args: [
            {name: 'gesture', value: 'string'},
            {name: 'hide', value: 'boolean'},
            {name: 'slaveId', value: 'string'},
            {name: 'liveId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'src', value: 'string'},
            {name: 'position', value: 'Object'},
            {name: 'autoplay', value: 'boolean'},
            {name: 'muted', value: 'boolean'},
            {name: 'orientation', value: 'string'},
            {name: 'objectFit', value: 'string'},
            {name: 'backgroundMute', value: 'boolean'},
            {name: 'minCache', value: 'string'},
            {name: 'maxCache', value: 'string'}
        ]
    },
    {
        name: 'live.remove',
        authority: 'v36/swan',
        path: '/live/remove',
        args: [
            {name: 'slaveId', value: 'string'},
            {name: 'liveId', value: 'string'},
            {name: 'viewId', value: 'string'}
        ]
    },
    // webview
    {
        name: 'webView.insert',
        authority: 'v19/swan',
        path: '/insertWebView',
        args: [
            {name: 'slaveId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'hide', value: 'boolean'},
            {name: 'src', value: 'string'}
        ]
    },
    {
        name: 'webView.update',
        authority: 'v19/swan',
        path: '/updateWebView',
        args: [
            {name: 'slaveId', value: 'string'},
            {name: 'viewId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'hide', value: 'boolean'},
            {name: 'src', value: 'string'}
        ]
    },
    {
        name: 'webView.remove',
        authority: 'v19/swan',
        path: '/removeWebView',
        args: [
            {name: 'slaveId', value: 'string'},
            {name: 'parentId', value: 'string'},
            {name: 'viewId', value: 'string'}
        ]
    },
    {
        name: 'webView.navigateTo',
        authority: 'v19/swan',
        path: '/navigateTo',
        args: [
            {name: 'url', value: 'string='},
            {name: 'initData', value: 'Object'},
            {name: 'startTime', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'webView.navigateBack',
        authority: 'v19/swan',
        path: '/navigateBack',
        args: [
            {name: 'delta', value: 'string='},
            {name: 'startTime', value: 'string'}
        ]
    },
    {
        name: 'webView.redirectTo',
        authority: 'v19/swan',
        path: '/redirectTo',
        args: [
            {name: 'url', value: 'string='},
            {name: 'initData', value: 'Object'},
            {name: 'startTime', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'webView.reLaunch',
        authority: 'v19/swan',
        path: '/reLaunch',
        args: [
            {name: 'url', value: 'string='},
            {name: 'initData', value: 'Object'},
            {name: 'startTime', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'webView.switchTab',
        authority: 'v19/swan',
        path: '/switchTab',
        args: [
            {name: 'url', value: 'string='},
            {name: 'startTime', value: 'string'}
        ]
    },
    {
        name: 'getFormId',
        authority: 'v19/swan',
        path: '/getFormId',
        args: [{name: 'cb', value: 'string'}]
    },
    {
        name: 'IM.insert',
        authority: 'v36/message',
        path: '/deliverMnpAppKey',
        args: [{name: 'appKey', value: 'string='}]
    },
    {
        name: 'springback.insert',
        authority: 'v30/swan',
        path: '/openSpringback',
        args: []
    },
    {
        name: 'springback.remove',
        authority: 'v28/swan',
        path: '/closeSpringback',
        args: []
    },
    {
        name: 'adWebview.insert',
        authority: 'v30/swan',
        path: '/openAdWebPage',
        args: [{name: 'url', value: 'string='}]
    },
    {
        name: 'statisticEvent',
        authority: 'v40/swan',
        path: '/openStatisticEvent',
        args: [
            {name: 'groupId', value: 'string='},
            {name: 'bizId', value: 'string='},
            {name: 'eventName', value: 'string='},
            {name: 'content', value: 'Object='},
            {name: 'appVersion', value: 'string'},
            {name: 'swanType', value: 'string'}
        ]
    },
    {
        name: 'performpanel',
        authority: 'v28/swan',
        path: '/performancePanel',
        args: [
            {name: 'data', value: 'Array='}
        ]
    },
    {
        name: 'ubcFlowJar',
        authority: 'v22/swan',
        path: '/ubcFlowJar',
        args: [
            {name: 'flowId', value: 'string='},
            {name: 'ext', value: 'Object'},
            {name: 'data', value: 'Array='}
        ]
    },
    {
        name: 'statisticFlowJar',
        authority: 'v40/swan',
        path: '/openStatisticFlowJar',
        args: [
            {name: 'groupId', value: 'string='},
            {name: 'bizId', value: 'string='},
            {name: 'data', value: 'Array='}
        ]
    },
    {
        name: 'getLaunchAppInfo',
        authority: 'v38/swan',
        path: '/getLaunchAppInfo',
        args: [
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'app.insert',
        authority: 'v37/swan',
        path: '/openApp',
        args: [
            {name: 'open', value: 'string='},
            {name: 'download', value: 'Object'},
            {name: 'url', value: 'string'},
            {name: 'isNeedDownload', value: 'boolean'},
            {name: 'invokAnyWay', value: 'boolean'}
        ]
    },
    {
        name: 'webView.launch',
        authority: 'v19/swan',
        path: '/launch',
        args: [
            {name: 'appid', value: 'string='},
            {name: 'url', value: 'string'},
            {name: 'navi', value: 'string'},
            {name: 'from', value: 'string'},
            {name: 'extraData', value: 'string|Object'}
        ]
    },
    {
        name: 'webView.exit',
        authority: 'v37/swan',
        path: '/exit',
        args: []
    },
    {
        name: 'installApp4Ad',
        authority: 'v41/swan',
        path: '/installApp4Ad',
        args: [
            {
                name: 'type',
                value: {
                    oneOf: ['queryStatus', 'startDownload', 'pauseDownload',
                        'cancelDownload', 'installApp', 'resumeDownload']
                }
            },
            {name: 'url', value: 'string'},
            {name: 'appId', value: 'string'},
            {name: 'name', value: 'string'},
            {name: 'onProgressUpdate', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'setSanIncData2Console',
        authority: 'v30/swan',
        path: '/sConsole/sanIncData2Console',
        args: [{name: 'incData', value: 'Object='}]
    },
    {
        name: 'setSanFullData2Console',
        authority: 'v30/swan',
        path: '/sConsole/sanFullData2Console',
        args: [{name: 'fullData', value: 'Array='}]
    },
    {
        name: 'getSanDataFromActiveSlave',
        authority: 'v30/swan',
        path: '/sConsole/getSanDataFromActiveSlave',
        args: []
    },
    {
        name: 'ai.faceDetect',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'image_type': 'string',
                    'face_field': 'string=',
                    'max_face_num': 'number=',
                    'face_type': 'string='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 人脸识别 -> 人脸对比
    {
        name: 'ai.faceMatch',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {name: 'stringMap', value: 'Object='},
            {name: 'fileMap', value: 'Object='}
        ]
    },
    // 人脸识别 -> 人脸搜索
    {
        name: 'ai.faceSearch',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'image_type': 'string',
                    'group_id_list': 'string',
                    'quality_control': 'string=',
                    'liveness_control': 'string=',
                    'user_id': 'string=',
                    'max_user_num': 'number='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 人脸识别 -> 身份验证 -> 公安验证
    {
        name: 'ai.facePersonVerify',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'image_type': 'string',
                    'id_card_number': 'string',
                    name: 'string',
                    'quality_control': 'string=',
                    'liveness_control': 'string='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 人脸识别 -> 身份验证 -> 身份证与名字对比
    {
        name: 'ai.facePersonIdmatch',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'id_card_number': 'string',
                    name: 'string'
                }
            }
        ]
    },
    // 人脸识别 -> 在线活体检测
    {
        name: 'ai.faceVerify',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {name: 'stringMap', value: 'Object='},
            {name: 'fileMap', value: 'Object='}
        ]
    },
    // 人脸识别 -> H5活体检测 -> 语音校验码
    {
        name: 'ai.faceLivenessSessioncode',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    appid: 'string'
                }
            }
        ]
    },
    // 人脸识别 -> H5活体检测 -> 视频活体检测
    {
        name: 'ai.faceLivenessVerify',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'video_base64': 'string',
                    'session_id': 'string='
                }
            }
        ]
    },
    // 自然语言 -> 词法分析
    {
        name: 'ai.nlpLexerCustom',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    text: 'string'
                }
            }
        ]
    },
    // 文字识别 -> 身份证识别
    {
        name: 'ai.ocrIdCard',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'detect_direction': 'boolean=',
                    'id_card_side': 'string',
                    'detect_risk': 'boolean='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 文字识别 -> 银行卡识别
    {
        name: 'ai.ocrBankCard',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'string_key': 'string='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 文字识别 -> 驾驶证识别
    {
        name: 'ai.ocrDrivingLicense',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'string_key': 'string',
                    'detect_direction': 'string=',
                    'unified_valid_period': 'boolean='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 文字识别 -> 行驶证识别
    {
        name: 'ai.ocrVehicleLicense',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'string_key': 'string',
                    'detect_direction': 'string=',
                    accuracy: 'string='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 自然语言 -> 文本审核
    {
        name: 'ai.textReview',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    content: 'string'
                }
            }
        ]
    },
    // 语音合成
    {
        name: 'ai.textToAudio',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    tex: 'string',
                    ctp: 'string=',
                    lan: 'string=',
                    spd: 'string=',
                    pit: 'string=',
                    vol: 'string=',
                    per: 'string='
                }
            }
        ]
    },
    // 图像识别 -> 图像审核
    {
        name: 'ai.imageAudit',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'string_key': 'string'
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string=',
                    imageUrl: 'string='
                }
            }
        ]
    },
    // 图像识别 -> 通用图像分析 -> 通用物体和场景识别高级版
    {
        name: 'ai.advancedGeneralIdentify',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'string_key': 'string'
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 图像识别 -> 通用图像分析 -> 图像主体检测
    {
        name: 'ai.objectDetectIdentify',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'string_key': 'string',
                    'with_face': 'number='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 图像识别 -> 细粒度图像识别 -> 菜品识别
    {
        name: 'ai.dishClassify',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'top_num': 'number=',
                    'filter_threshold': 'number'
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 图像识别 -> 车辆分析-车型识别
    {
        name: 'ai.carClassify',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'string_key': 'string',
                    'top_num': 'number='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 图像识别 -> 细粒度图像识别—logo商标识别
    {
        name: 'ai.logoClassify',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'string_key': 'string=',
                    'custom_lib': 'boolean='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 图像识别 -> 细粒度图像识别—动物识别
    {
        name: 'ai.animalClassify',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'string_key': 'string',
                    'top_num': 'number='
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    // 图像识别 -> 细粒度图像识别—植物识别
    {
        name: 'ai.plantClassify',
        authority: 'v29/swan',
        path: '/aiRequest',
        args: [
            {name: 'service', value: 'string='},
            {name: 'api', value: 'string='},
            {
                name: 'stringMap',
                value: {
                    'string_key': 'string'
                }
            },
            {
                name: 'fileMap',
                value: {
                    image: 'string'
                }
            }
        ]
    },
    {
        name: 'audio.open',
        authority: 'v24/swan',
        path: '/audio/open',
        args: [
            {name: 'src', value: 'string'},
            {name: 'audioId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'cb', value: 'object='},
            {name: 'startTime', value: 'string'},
            {name: 'loop', value: 'string'},
            {name: 'volume', value: 'string'},
            {name: 'obeyMuteSwitch', value: 'string'}
        ]
    },
    {
        name: 'audio.renew',
        authority: 'v24/swan',
        path: '/audio/update',
        args: [
            {name: 'audioId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'startTime', value: 'string'},
            {name: 'loop', value: 'string'},
            {name: 'volume', value: 'string'},
            {name: 'obeyMuteSwitch', value: 'string'}
        ]
    },
    {
        name: 'audio.play',
        authority: 'v24/swan',
        path: '/audio/play',
        args: [
            {name: 'audioId', value: 'string='},
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'audio.pause',
        authority: 'v24/swan',
        path: '/audio/pause',
        args: [
            {name: 'audioId', value: 'string='},
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'audio.stop',
        authority: 'v24/swan',
        path: '/audio/stop',
        args: [
            {name: 'audioId', value: 'string='},
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'audio.seek',
        authority: 'v24/swan',
        path: '/audio/seek',
        args: [
            {name: 'audioId', value: 'string='},
            {name: 'slaveId', value: 'string='},
            {name: 'position', value: 'string'}
        ]
    },
    {
        name: 'audio.close',
        authority: 'v24/swan',
        path: '/audio/close',
        args: [
            {name: 'audioId', value: 'string='},
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'backgroundAudio.renew',
        authority: 'v26/swan',
        path: '/backgroundAudio/update',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'src', value: 'string'},
            {name: 'startTime', value: 'string'},
            {name: 'title', value: 'string'},
            {name: 'epname', value: 'string'},
            {name: 'singer', value: 'string'},
            {name: 'coverImgUrl', value: 'string'},
            {name: 'webUrl', value: 'string'},
            {name: 'protocol', value: 'string'},
            {name: 'lrcURL', value: 'string'}
        ]
    },
    {
        name: 'backgroundAudio.open',
        authority: 'v26/swan',
        path: '/backgroundAudio/open',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'cb', value: 'Object='},
            {name: 'src', value: 'string='},
            {name: 'startTime', value: 'string'},
            {name: 'title', value: 'string='},
            {name: 'epname', value: 'string'},
            {name: 'singer', value: 'string'},
            {name: 'coverImgUrl', value: 'string'},
            {name: 'webUrl', value: 'string'},
            {name: 'protocol', value: 'string'},
            {name: 'lrcURL', value: 'string'}
        ]
    },
    {
        name: 'backgroundAudio.play',
        authority: 'v26/swan',
        path: '/backgroundAudio/play',
        args: [
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'backgroundAudio.pause',
        authority: 'v26/swan',
        path: '/backgroundAudio/pause',
        args: [
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'backgroundAudio.stop',
        authority: 'v26/swan',
        path: '/backgroundAudio/stop',
        args: [
            {name: 'slaveId', value: 'string='}
        ]
    },
    {
        name: 'backgroundAudio.seek',
        authority: 'v26/swan',
        path: '/backgroundAudio/seek',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'position', value: 'string'}
        ]
    },
    {
        name: 'navigateToSmartProgram',
        authority: 'v38/swan',
        path: '/navigateToProgram',
        args: [
            {name: 'appKey', value: 'string='},
            {name: 'cb', value: 'string='},
            {name: 'path', value: 'string'},
            {name: 'from', value: 'string'},
            {name: 'extraData', value: 'Object'},
            {name: 'ubc', value: 'Object'}
        ]
    },
    {
        name: 'chooseAlbum',
        authority: 'v44/swan',
        path: '/chooseAlbum',
        args: [
            {name: 'count', value: 'string'},
            {name: 'mode', value: 'string'},
            {name: 'compressed', value: 'boolean'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'faceVerify.insert',
        authority: 'v44/swan',
        path: '/faceVerify',
        args: [
            {name: 'cb', value: 'string='}
        ]

    },
    {
        name: 'faceResultVerify',
        // 上线改为46
        authority: 'v45/swan',
        path: '/faceResultVerify',
        args: [
            {name: 'callbackKey', value: 'string='},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'confirmAppClose',
        // 上线改为45
        authority: 'v44/swan',
        path: '/confirmSwanClose',
        args: [
            {name: 'content', value: 'string'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'adRequest',
        authority: 'v44/swan',
        path: '/adRequest',
        args: [
            {name: 'url', value: 'string='},
            {name: 'extParams', value: 'object'},
            {name: 'data', value: 'string|object'},
            {name: 'header', value: 'object'},
            {name: 'method', value: 'string'},
            {name: 'dataType', value: 'string'},
            {name: 'responseType', value: 'string'},
            {name: 'ping', value: 'boolean'},
            {name: 'cb', value: 'string='}
        ]
    },
    {
        name: 'sconsole.insert',
        authority: 'v11/swan',
        path: '/sconsole/show',
        args: []
    },
    {
        name: 'sconsole.remove',
        authority: 'v11/swan',
        path: '/sconsole/hide',
        args: []
    },
    {
        name: 'openAdWebPage',
        authority: 'v38/swan',
        path: '/openAdLandingPage',
        args: [{name: 'url', value: 'string='}]
    },
    {
        name: 'postMessage',
        authority: 'v19/swan',
        path: '/postMessage',
        args: [
            {name: 'webviewid', value: 'string='},
            {name: 'message', value: 'string='}
        ]
    }
];
