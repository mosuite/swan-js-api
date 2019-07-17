/**
 * @file has-return-api-map
 * @description  apis has return attr
 * @author lijia(lijia30@baidu.com)
 */
// 包含返回值
export const returnAPIMap = {
    'ai.ocrIdCard': [{
        success: ['direction', 'image_status', 'risk_type', 'edit_tool',
            'log_id', 'words_result', 'words_result_num', 'location', 'left', 'top',
            'width', 'height', 'words'
        ]
    }],
    'ai.ocrDrivingLicense': [{
        success: ['log_id', 'words_result_num', {
            'words_result': ['words']
        }]
    }],
    'ai.ocrVehicleLicense': [{
        success: ['log_id', 'words_result_num', {
            'words_result': ['words']
        }]
    }],
    'ai.textToAudio': [{
        success: ['filePath']
    }],
    'ai.ocrBankCard': [{
        success: ['log_id', 'result']
    }, {
        result: ['bank_card_number', 'bank_name', 'bank_card_type']
    }],
    'ai.imageAudit': [{
        success: ['log_id', 'conclusion', 'conclusionType', 'data', 'type', 'msg', 'probability', 'stars', 'words']
    }],
    'ai.advancedGeneralIdentify': [{
        success: ['log_id', 'result_num', 'result', 'keyword', 'score', 'root']
    }],
    'ai.objectDetectIdentify': [{
        success: ['log_id', 'result', 'left', 'top', 'width', 'height']
    }],
    'ai.carClassify': [{
        success: ['log_id', 'color_result', 'result', 'name', 'score', 'year', 'location_result',
            'left', 'top', 'width', 'height']
    }],
    'ai.dishClassify': [{
        success: ['log_id', 'result_num', 'result', 'name', 'calorie', 'probability']
    }],
    'ai.logoClassify': [{
        success: ['log_id', 'result_num', 'result', {
            location: ['left', 'top', 'width', 'height']
        }, 'name', 'type', 'name', 'probability']
    }],
    'ai.animalClassify': [{
        success: ['log_id', 'result', 'name', 'score']
    }],
    'ai.plantClassify': [{
        success: ['log_id', 'result', 'name', 'score']
    }],
    'ai.textReview': [{
        success: ['log_id', 'result']
    }, {
        result: ['spam', 'reject', 'review', 'pass', 'label', 'score', 'hit']
    }],
    saveFile: [{
        success: ['savedFilePath']
    }],
    getFileInfo: [{
        success: ['size', 'digest']
    }],
    getSavedFileList: [{
        success: [{
            fileList: ['filePath', 'createTime', 'size']
        }]
    }],
    getSavedFileInfo: [{
        success: ['size', 'createTime']
    }],
    chooseImage: [{
        success: ['tempFilePaths', 'tempFiles', {
            tempFiles: ['path', 'size']
        }]
    }],
    uploadFile: [{
        success: ['data', 'statusCode']
    }],
    downloadFile: [{
        success: ['tempFilePath', 'statusCode']
    }],
    getImageInfo: [{
        success: ['width', 'height', 'path', {
            'orientation': ['up', 'down', 'left', 'right', 'up-mirrored',
                'down-mirrored', 'left-mirrored', 'right-mirrored']
        }, 'type']
    }],
    chooseVideo: [{
        success: ['tempFilePath', 'duration', 'size', 'height', 'width']
    }],
    getStorage: [{
        success: ['data']
    }],
    getStorageInfo: [{
        success: ['keys', 'currentSize', 'limitSize']
    }],
    chooseLocation: [{
        success: ['name', 'address', 'latitude', 'longitude']
    }],
    getLocation: [{
        success: ['latitude', 'longitude', 'speed', 'accuracy', 'altitude',
            'verticalAccuracy', 'horizontalAccuracy', 'street', 'cityCode',
            'city', 'country', 'province', 'streetNumber', 'district'
        ]
    }],
    getSystemInfo: [{
        success: ['screenWidth', 'screenHeight', 'brand',
            'fontSizeSetting', 'model', 'pixelRatio', 'windowWidth', 'windowHeight',
            'language', 'version', 'system', 'platform', 'statusBarHeight', 'SDKVersion'
        ]
    }],
    getSystemInfoSync: [{
        return: ['brand', 'fontSizeSetting', 'screenWidth', 'screenHeight',
            'SDKVersion', 'model', 'pixelRatio', 'windowWidth', 'windowHeight',
            'language', 'version', 'system', 'platform', 'statusBarHeight'
        ]
    }],
    onMemoryWarning: [{
        callback: ['level']
    }],
    getNetworkType: [{
        success: ['networkType']
    }],
    scanCode: [{
        success: ['result', 'scanType', 'charSet']
    }],
    getScreenBrightness: [{
        success: ['value']
    }],
    onNetworkStatusChange: [{
        callback: ['isConnected', {
            networkType: ['wifi', '2g', '3g', '4g', 'none', 'unknown']
        }]
    }],
    getClipboardData: [{
        success: ['data']
    }],
    showToast: [{
        icon: ['success', 'loading', 'none']
    }],
    showModal: [{
        success: ['confirm', 'cancel']
    }],
    showActionSheet: [{
        success: ['tapIndex']
    }],
    login: [{
        success: ['code']
    }],
    getSwanId: [{
        success: ['errno', 'data', 'errmsg']
    }],
    getUserInfo: [{
        success: [{
            userInfo: ['nickName', 'avatarUrl', 'gender']
        }, 'data', 'iv']
    }],
    openSetting: [{
        success: ['authSetting']
    }],
    getSetting: [{
        success: ['authSetting']
    }],
    chooseAddress: [{
        success: ['userName', 'postalCode', 'provinceName', 'cityName', 'countryName',
            'detailInfo', 'telNumber', 'nationalCode'
        ]
    }],
    chooseInvoiceTitle: [{
        success: ['type', 'title', 'taxNumber', 'companyAddress', 'telephone',
            'bankName', 'bankAccount'
        ]
    }],
    videoContext: [{
        requestFullScreen: ['success', 'fail', 'complete']
    }, {
        exitFullScreen: ['success', 'fail', 'complete']
    }],
    livePlayerContext: [{
        requestFullScreen: ['direction', 'success', 'fail', 'complete']
    }, {
        exitFullScreen: ['success', 'fail', 'complete']
    }]
};