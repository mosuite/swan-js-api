/**
 * @file getUpdateManager
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

/* global _naSwan */
import {swanNative} from '../container';
import {hasNoGlobal} from '../../utils/global';
import {events} from '../../utils/event';

const globalENV  = hasNoGlobal ? document : _naSwan;
globalENV.addEventListener('updateStatusChange', updateStatusChange, false);

// 用于存储小程序更新状态的变量
let checkForUpdateResult; // 是否有新的版本 {hasUpdate: Boolean}
let isUpdateReady; // 新版本下载完成
let isUpdateFailed; // 新版本下载失败

/**
 * 处理客户端派发的 updateStatusChange 事件
 *
 * @param  {Object} event 事件参数
 * @return {undefined}
 */
function updateStatusChange(event) {
    let eventType = event.eventType;
    let eventData;
    switch (eventType) {
        case 'checkForUpdate':
            checkForUpdateResult = JSON.parse(event.data);
            eventData = checkForUpdateResult;
            break;
        case 'updateReady':
            isUpdateReady = true;
            break;
        case 'updateFailed':
            isUpdateFailed = true;
            break;
    }
    events.emit(eventType, eventData);
}

const updateManager = {
    onCheckForUpdate(callback) {
        checkForUpdateResult
        ? typeof callback === 'function' && callback(checkForUpdateResult)
        : events.once('checkForUpdate', callback);
    },

    onUpdateReady(callback) {
        isUpdateReady
        ? typeof callback === 'function' && callback()
        : events.once('updateReady', callback);
    },

    onUpdateFailed(callback) {
        isUpdateFailed
        ? typeof callback === 'function' && callback()
        : events.once('updateFailed', callback);
    },

    applyUpdate() {
        if (!isUpdateReady) {
            console.error('applyUpdate:fail update is not ready');
            return;
        }
        swanNative.invoke('updateManager.applyUpdate', []);
    }
};

export default () => updateManager;
