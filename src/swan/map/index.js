/**
 * @file src/swan/map/index.js
 * @author renzhonghua@baidu.com
 * @description swan上的外部case使用的端能力
 */

import $ from '../../utils/_core';
import {global} from '../../utils/global';
import {
    getParamsCBName,
    executeByTryCatch
} from '../../invoker/funcs';
import {createAppInstallManager} from '../api/download-install-app';
import {
    jsonParse,
    resNeedDecode,
    settingThunkHandle,
    base64ToUint8,
    getStorageAllThunkHandler
} from '../../utils/parser';
import {SHOWCASE_APPKEY, SCOPE_MAP, IMAGE_RECOGNIZE_MAP} from '../../utils/constant';
import {getCurrentAccessUri} from '../../utils/common';
import getAppInfo from '../../utils/get-app-info';
import {
    uint8ToBase64,
    moreParamsKey,
    navigateToProgramFilter,
    navigateBackProgramFilter,
    recoginzeImageParamsCheck,
    convertCanvasIdToSanId
} from '../../utils/filter';
import createVideoContext from '../api/video-context';
import getUpdateManager from '../api/update-manager';
import {
    request,
    uploadFile,
    downloadFile,
    WebSocket
} from '../api/network/index';
import {aiApiConfigs} from '../api/ai';
import {createInnerAudioContext, getBackgroundAudioManager} from '../api/audio';
import createCanvasContext from '../api/canvas';
import paymentAPI from '../api/payment';
import addPhoneContact from '../api/add-phone-contact';
import {createCameraContext} from '../api/camera/index';
import getRecorderManager from '../api/recorder-manager';

import {
    startCompass,
    onCompassChange,
    startAccelerometer,
    onAccelerometerChange,
    onMemoryWarning,
    onNetworkStatusChange,
    onDeviceMotionChange,
    startDeviceMotionListening
} from '../api/device/index';

import {
    setMetaDescription,
    setMetaKeywords,
    setDocumentTitle,
    setPageInfo
} from '../api/webinfo/index';

import createMapContext from '../api/map-context';
import createLivePlayerContext from '../api/live-context';
import getImageInfo from '../api/get-image-info';
import {getExtConfig, getExtConfigSync} from '../api/get-ext-config';
import getEnvInfoSync from '../api/get-env-info-sync';
import openAppByURL from '../api/open-app-by-url';
import {swanDescription} from '../../description';
import {createARCameraContext} from '../api/camera/index';

let APIMap = swanDescription.reduce((map, item) => {
    let {args, name} = item;

    if (!name.match(/\./)) {
        map[name] = {};
        args.forEach(itemArg => {
            if (itemArg.name === 'cb') {
                map[name].paramsCBName = true;
            }
        });
    }
    return map;
}, {});

let specialAPIMap = {
    createARCameraContext,
    openAppByURL,
    getEnvInfoSync,
    createLivePlayerContext,
    ...aiApiConfigs,
    ...WebSocket,
    ...paymentAPI,
    createMapContext,
    onMemoryWarning,
    onNetworkStatusChange,
    getRecorderManager,
    getUpdateManager,
    createVideoContext,
    createCameraContext,
    createInnerAudioContext,
    getBackgroundAudioManager,
    createCanvasContext,
    onAccelerometerChange,
    startAccelerometer,
    onDeviceMotionChange,
    startDeviceMotionListening,
    startCompass,
    onCompassChange,
    addPhoneContact,
    getExtConfig,
    getExtConfigSync,
    request,
    setMetaDescription,
    setMetaKeywords,
    setDocumentTitle,
    setPageInfo,
    getImageInfo,
    downloadFile,
    uploadFile,
    createAppInstallManager,
    setMenuOpacity: {
        specialCheck(params = {}) {
            if ($.isNumber(params.alpha)) {
                if (params.alpha * 10 < 1 || params.alpha * 10 > 10) {
                    return 'alpha should between [0.1, 1]';
                }
            }
        }
    },
    chooseAlbum: {
        defaultParam: {
            count: 9,
            mode: 'single',
            compressed: true
        },
        parser: resNeedDecode
    },
    showToast: {
        defaultParam: {
            duration: 2000,
            mask: false
        },
        specialCheck(params) {
            return !params.title ? 'title is required' : '';
        },
        filter(params) {
            const ICON_TYPE = {
                none: '1',
                loading: '3'
            };
            params.time = params.duration;
            params.message = params.title;
            params.type = !params.image && ICON_TYPE[params.icon] && params.image !== '' ? ICON_TYPE[params.icon] : '2';
            if (params.image) {
                params.image = global.masterManager.getPathFromFront(params.image);
            }
            delete params.duration;
            return params;
        }
    },
    showTabBar: {
        defaultParam: {
            animation: false
        }
    },
    hideTabBar: {
        defaultParam: {
            animation: false
        }
    },
    chooseImage: {
        defaultParam: {
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera']
        },
        parser: resNeedDecode
    },
    chooseAlbum: {
        defaultParam: {
            count: 9,
            mode: 'single',
            compressed: true
        },
        parser: resNeedDecode
    },
    saveImageToPhotosAlbum: {
        parser: resNeedDecode
    },
    canvasToTempFilePath: {
        defaultParam: {
            x: 0,
            y: 0,
            fileType: 'png',
            quality: 1
        },
        filter: convertCanvasIdToSanId,
        paramsCBName: getParamsCBName,
        parser: resNeedDecode
    },
    getSetting: {
        parser: settingThunkHandle
    },
    openSetting: {
        parser: settingThunkHandle
    },
    getUserInfo: {
        parser(res) {
            res = jsonParse(res);
            if (res.status === 0
                && res.data
                && res.data.userinfo) {
                res.data.userInfo = res.data.userinfo;
                delete res.data.userinfo;
                let userInfo = res.data.userInfo;
                userInfo.nickName = userInfo.shoubainickname;
                userInfo.avatarUrl = userInfo.headimgurl;
                userInfo.gender = userInfo.sex;
                delete userInfo.nickname;
                delete userInfo.shoubainickname;
                delete userInfo.headimgurl;
                delete userInfo.sex;
            }
            return res;
        }
    },
    authorize: {
        filter(params) {
            params.scope = SCOPE_MAP[params.scope] || params.scope;
            return params;
        },
        parser(res) {
            let response = jsonParse(res);
            if (response.status === 0) {
                response.data = {
                    errMsg: '授权成功'
                };
            }
            return response;
        }
    },
    login: {
        filter(params) {
            $.isNumber(params.timeout) || delete params.timeout;
            return params;
        }
    },
    showLoading: {
        defaultParam: {
            mask: false
        },
        specialCheck(params) {
            return !params.title ? 'title is required' : '';
        }
    },
    previewImage: {
        specialCheck(params) {
            return !params.urls && !params.images ? 'one of the parmas either urls or images is required' : '';
        },
        filter(params) {
            params.from = 'swan';
            return params;
        }
    },
    setNavigationBarColor: {
        specialCheck(params) {
            let frontColor = params.frontColor;
            return ['#ffffff', '#000000'].indexOf(frontColor) === -1
                ? `invalid frontColor "${frontColor}"`
                : '';
        }
    },
    setStorage: {
        filter(params) {
            params.key = params.key && encodeURIComponent(params.key);
            params.data = params.data && encodeURIComponent(JSON.stringify(params.data));
            return params;
        }
    },
    setStorageSync: {
        filter(...args) {
            let params = moreParamsKey(args, ['key', 'data']);
            params.key = params.key && encodeURIComponent(params.key);
            params.data = params.data && encodeURIComponent(JSON.stringify(params.data));
            return params;
        }
    },
    getStorage: {
        filter(params) {
            params.key = params.key && encodeURIComponent(params.key);
            return params;
        },
        thunk(res) {
            if (res.data && res.data.data) {
                let result = '';
                try {
                    result = JSON.parse(decodeURIComponent(res.data.data));
                } catch (e) {
                    result = decodeURIComponent(res.data.data);
                }
                res.data.data = result;
            }
            return res;
        }
    },
    getStorageSync: {
        filter(...args) {
            let params = moreParamsKey(args, ['key']);
            params.key = params.key && encodeURIComponent(params.key);
            return params;
        },
        thunk(res) {
            if (res.data && res.data.data || res.data && res.data.data === '') {
                let result = '';
                try {
                    result = JSON.parse(decodeURIComponent(res.data.data));
                } catch (e) {
                    result = decodeURIComponent(res.data.data);
                }
                return {
                    status: res.status,
                    data: result
                };
            }
            return res;
        }
    },
    getStorageInfo: {
        thunk: getStorageAllThunkHandler
    },
    getStorageInfoSync: {
        thunk: getStorageAllThunkHandler
    },
    removeStorage: {
        filter(params) {
            params.key = params.key && encodeURIComponent(params.key);
            return params;
        }
    },
    removeStorageSync: {
        filter(...args) {
            let params = moreParamsKey(args, ['key']);
            params.key = params.key && encodeURIComponent(params.key);
            return params;
        }
    },
    showModal: {
        defaultParam: {
            title: '',
            content: '',
            confirmText: '确定',
            cancelText: '取消',
            showCancel: true
        },
        specialCheck(params) {
            return typeof params.confirmText !== 'string' || typeof params.cancelText !== 'string'
            ? 'confirmText cancelText should be string'
            : params.confirmText.replace(/[^\x00-\xff]/g, '++').length > 8
                ? 'confirmText length should not be larger than 4 Chinese characters'
                : params.cancelText.replace(/[^\x00-\xff]/g, '++').length > 8
                    ? 'cancelText length should not be larger than 4 Chinese characters'
                    : '';
        },
        thunk(res) {
            if (+res.status === 0 && res.data && res.data.type) {
                res.data[res.data.type] = true;
                delete res.data.type;
            }
            return res;
        }
    },
    showActionSheet: {
        defaultParam: {
            itemList: []
        },
        specialCheck(params) {
            return params.itemList.length > 6
                ? 'itemList should not be larger than 6'
                : '';
        }
    },
    chooseVideo: {
        defaultParam: {
            compressed: true,
            camera: ['front', 'back'],
            sourceType: ['album', 'camera']
        },
        parser: resNeedDecode
    },
    chooseAddress: {
        parser: resNeedDecode
    },
    chooseInvoiceTitle: {
        parser: resNeedDecode
    },
    saveVideoToPhotosAlbum: {
        parser: resNeedDecode
    },
    getFileInfo: {
        specialCheck(params) {
            let digestAlgorithm = params.digestAlgorithm;
            if (digestAlgorithm !== undefined) {
                return ['md5', 'sha1'].indexOf(digestAlgorithm) === -1
                    ? `invalid digestAlgorithm "${digestAlgorithm}"`
                    : '';
            }
        }
    },
    navigateToMiniProgram: {
        filter: navigateToProgramFilter
    },
    navigateToSmartProgram: {
        filter: navigateToProgramFilter
    },
    navigateBackMiniProgram: {
        filter: navigateBackProgramFilter
    },
    navigateBackSmartProgram: {
        filter: navigateBackProgramFilter
    },
    canvasPutImageData: {
        filter(params) {
            return {
                ...convertCanvasIdToSanId(params),
                data: uint8ToBase64(params.data)
            };
        }
    },
    canvasGetImageData: {
        filter: convertCanvasIdToSanId,
        parser(res) {
            res = jsonParse(res);
            if (res.status === 0) {
                res.data.data = base64ToUint8(res.data.data);
            }
            return res;
        }
    },
    openShare: {
        filter(params) {
            let query = [];
            let appInfo = getAppInfo();
            const appid = appInfo.appid;

            // 如果content没有传，优先使用小程序简介，兜底使用百度默认值
            if (!params.content) {
                params.content = appInfo.appDesc || '世界很复杂，百度更懂你';
            }

            appid && query.push(`appid=${appid}`);

            // 默认取当前页作为分享的 path
            const url = params.path || getCurrentAccessUri();
            url && query.push(`url=${encodeURIComponent(url)}`);
            let linkUrl = `https://mbd.baidu.com/ma/landingpage?t=smartapp_share&${query.join('&')}`;

            let imageUrl = appInfo.iconUrl || 'https://b.bdstatic.com/searchbox/icms/searchbox/img/LOGO300x300.jpg';
            let type = $.isAndroid ? '1' : 'url';
            /* eslint-disable fecs-camelcase */
            const ugcParams = encodeURIComponent(JSON.stringify({
                url: '/searchbox?action=ugc&cmd=177',
                publishType: '5',
                placeholder: '说说你的想法...',
                topic_pageurl: 'baiduboxapp://v1/easybrowse/open?url=http%3A%2F%2Fmbd.baidu.com%2Fwebpage%3Ftype%3Dtopic%26action%3Dsearch&style=%7b%22menumode%22%3a%222%22%2c%22showtoolbar%22%3a%221%22%7d&newbrowser=1',
                at_pageurl: 'baiduboxapp://v1/easybrowse/open?newbrowser=1&style=%7B%22menumode%22%3A%222%22%2C%22showtoolbar%22%3A%221%22%7D&url=https%3A%2F%2Fmbd.baidu.com%2Fwebpage%3Ftype%3Dtopic%26action%3Dat',
                reference_dt: {
                    url: linkUrl,
                    title: params.title || appInfo.appname,
                    ref_type: 'imagetext',
                    account_type: 'swan',
                    thumbpic: imageUrl,
                    channel: 'swan_details_share_collect_comment '
                },
                source_from: 'swan',
                ext_info: {share_type: 'forward'}
            }));

            /* eslint-enable fecs-camelcase */
            let defaultPannel = $.isAndroid
            ? ['ugc_forward', 'weixin_friend', 'weixin_timeline',
                'baiduhi', 'sinaweibo']
            : ['ugc_forward', 'weixin_friend', 'weixin_timeline', 'qqfriend', 'qqdenglu',
            'baiduhi', 'sinaweibo', 'screenshot', 'others'];

            // callback
            const successCallback = getParamsCBName();
            global[successCallback] = res => {
                executeByTryCatch(params.success, 'at api openShare success callback function', res);
                executeByTryCatch(params.complete, 'at api openShare complete callback function', res);
            };

            const shareDefaultConfig = {
                defaultPannel,
                pannel: params.pannel || [],
                linkUrl,
                type,
                imageUrl,
                /* eslint-disable */
                categoryData: {ugc_scheme: `baiduboxapp://v6/ugc/publish?upgrade=0&params=${ugcParams}&callback=${successCallback}`},
                /* eslint-disable */
                source: 'swan',
                snapshot: true,
                forceLightTheme: true
            };

            return {...params, ...shareDefaultConfig};
        }
    },
    pageScrollTo: {
        defaultParam: {
            duration: 300
        },
        filter(params) {
            let top = params.scrollTop;
            let duration = params.duration;

            // 空字符串或小于 0 -> {scrollTop: 0, duraction: 0}
            // 非数值或者非数值类的字符串 -> {duraction: 300}
            if (!(($.isNumber(top) || $.isString(top)) && !isNaN(+top))) {
                delete params.scrollTop;
            } else {
                params.scrollTop = top < 0 ? 0 : +top;
            }
            params.duration = ($.isNumber(duration) || $.isString(duration)) && !isNaN(+duration)
            ? duration < 0 ? 0 : +duration : 300;
            return params;
        }
    },
    getHistory: {
        parser: resNeedDecode
    },
    deleteHistory: {
        parser: resNeedDecode
    },
    setBackgroundTextStyle: {
        specialCheck(params) {
            let textStyle = params.textStyle;
            return ['light', 'dark'].indexOf(textStyle) === -1
                ? `invalid textStyle "${textStyle}"`
                : '';
        }
    },
    recognizeImage: {
        defaultParam: {
            index: 0,
            showTitle: false
        },
        specialCheck: recoginzeImageParamsCheck,
        filter(params) {
            let categoryList = params.categoryList.map(item => {
                return {
                    category: item,
                    name: params.categoryList.length === 1 && !params.showTitle ? '' : IMAGE_RECOGNIZE_MAP[item]
                };
            });
            params.categoryList = categoryList;
            params.currentIndex = params.index;
            delete params.index;
            delete params.showTitle;
            return params;

        }
    },
    getMenuButtonBoundingClientRect: {
        isSync: true
    },
    setClipboardData: {
        specialCheck(params) {
            return !params.data ? 'data is required and should not be an empty string' : '';
        }
    },
    setTabBarBadge: {
        specialCheck(params) {
            return !params.text ? 'text is required and should not be an empty string' : '';
        }
    },
    makePhoneCall: {
        specialCheck(params) {
            return !params.phoneNumber ? 'phoneNumber is required and should not be an empty string' : '';
        }
    }
};

for (let item in specialAPIMap) {
    if (APIMap[item] && $.isObject(specialAPIMap[item])) {
        Object.assign(APIMap[item], specialAPIMap[item]);
    } else {
        APIMap[item] = specialAPIMap[item];
    }
}

export const swanMap = APIMap;
