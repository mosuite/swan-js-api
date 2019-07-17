/**
 * @file 转发能力
 * @author yupeng07
 */

import {boxjs} from '../../../boxjs/index';
import {swanNative} from '../../../swan/container';
import {QueueSet} from '@baidu/events-emitter';
import {
    global,
    globalNative
} from '../../../utils/global';
import {isAndroid} from '../../../platform';
import {getEventEmitterHandle} from '../../../utils/common';
import {SHOWCASE_APPKEY} from './constant';
import {createInvokePromise} from '../../../invoker/funcs';

let listenerHandle = new QueueSet();
let appInfo = {};
const SHARE_APP_MESSAGE = 'share_app_message_' + Date.now();
const SHARE_SUCCESS = 'share_app_sucess_' + Date.now();
const SHARE_FAIL = 'share_app_fail_' + Date.now();

class Share {
    constructor() {
        let shareInfo = {};
        this.initAppInfo();
        const shareBtnClick = event => {
            let runTask = listenerHandle.get(SHARE_APP_MESSAGE).queue;
            runTask.forEach(handler => {
                let res = handler(event);
                if (res) {
                    shareInfo = res;
                }
            });
            this.shareAppMessage(shareInfo, 'menu');
        };
        // 侦听全局事件
        globalNative.addEventListener && globalNative.addEventListener('sharebtn', shareBtnClick);
    }

    initAppInfo() {
        if (!appInfo.appid) {
            appInfo = boxjs.data.get({
                name: 'swan-appInfoSync'
            });
        }
    }

    filter(opt) {
        let self = this;
        let defaultUrl = 'https://b.bdstatic.com/searchbox/icms/searchbox/img/LOGO300x300.jpg';

        // 回调函数
        global[SHARE_SUCCESS] = function (res) {
            self.eventEmitter.trigger('shareSuccess', {
                ext: res || ''
            });
            opt.success && opt.success(res);
            opt.complete && opt.complete();
        };
        global[SHARE_FAIL] = function (res) {
            self.eventEmitter.trigger('shareFail', {
                ext: res || ''
            });
            opt.fail && opt.fail(res);
            opt.complete && opt.complete(res);
        };
        // 小游戏类型，中间页通过id获取调起口令和scheme
        let query = ['activity_id=71'];

        this.initAppInfo();
        appInfo.appid && query.push(`appid=${appInfo.appid}`);

        let url = opt.query || '';
        // 进行query参数整合: [key1=data1&key2=data2 转化为 "kay1":"data1","key2":"data2"]
        if (url) {
            let queryData = {};
            try {
                let queryArray = url.split('&');
                for (let i = 0; i < queryArray.length; i++) {
                    queryData[queryArray[i].split('=')[0]] = queryArray[i].split('=')[1];
                }
                url = JSON.stringify(queryData).replace('{', '').replace('}', '');
            } catch (e) {
                let res = {
                    errMsg: 'Please check the the legality of opts.query. '
                };
                opt.fail && opt.fail(res);
                opt.complete && opt.complete(res);
            }
            query.push(`url=?minigame_query={${encodeURIComponent(url)}}`);
        }

        let linkUrl = `https://mbd.baidu.com/ma/landingpage?t=smartapp_share&${query.join('&')}`;

        if (SHOWCASE_APPKEY.indexOf(appInfo.appid.split('_')[0]) !== -1 && opt.shareUrl) {
            linkUrl = opt.shareUrl;
        }

        let imageTag = this.checkImageUrl(opt.imageUrl || '');
        let iconTag = this.checkImageUrl(opt.iconUrl || '');
        let iconUrl = (iconTag && opt.iconUrl) || (imageTag && opt.imageUrl) || defaultUrl;

        !imageTag && (opt.imageUrl && delete opt.imageUrl);
        !iconTag && (opt.iconUrl && delete opt.iconUrl);

        let type = opt.type || 'url';

        if (type !== 'image' && imageTag && opt.imageUrl) {
            iconUrl = opt.imageUrl;
        }

        if (isAndroid) {
            const typeMap = {
                audio: '2',
                image: '3',
                video: '4',
                url: '1'
            };
            type = typeMap[type];
        }

        const pannel = ['ugc_forward', 'weixin_friend', 'weixin_timeline', 'baiduhi', 'sinaweibo'];
        // shareDefaultConfig.categoryData: {ugc_scheme: `baiduboxapp://v6/ugc/publish?upgrade=0&params=${ugcParams}&callback=${SHARE_SUCCESS}`};
        const shareDefaultConfig = {
            pannel: isAndroid ? [...pannel] : [...pannel, 'qqfriend', 'qqdenglu', 'screenshot', 'others'],
            linkUrl,
            type,
            iconUrl,
            categoryData: {},
            source: 'swan-game',
            shareSuccessCB: SHARE_SUCCESS,
            shareErrorCB: SHARE_FAIL,
            successCallback: SHARE_SUCCESS,
            errorCallback: SHARE_FAIL
        };

        return {
            title: appInfo.appname || '百度小游戏',
            content: '世界很复杂，百度更懂你',
            iconUrl: defaultUrl,
            imageUrl: defaultUrl,
            ...opt,
            ...shareDefaultConfig
        };
    }

    shareAppMessage(obj, from) {
        let shareData = this.filter(obj);
        this.eventEmitter = getEventEmitterHandle();
        // 转发日志
        this.eventEmitter.trigger('shareAction', {
            from: from ? from : 'button',
            title: shareData.title ? shareData.title : ''
        });
        createInvokePromise(swanNative, 'openShare', shareData);
    }

    onShareAppMessage(handler) {
        listenerHandle.pushTo(SHARE_APP_MESSAGE, handler);
    }

    offShareAppMessage(handler) {
        let handlers = listenerHandle.get(SHARE_APP_MESSAGE).queue;
        for (let i = handlers.length - 1; i >= 0; i--) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1);
            }
        }
    }

    // 检查当前url是否合法 目前只支持网络图片进行分享配置
    checkImageUrl(url) {
        return url.match('http://') || url.match('https://');
    }
}

export default new Share();