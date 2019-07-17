/**
 * @file 上传文件
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

import {DownloadTask} from './download-file';

class UploadTask extends DownloadTask {
    get _module() {
        return 'uploadFile';
    }
}

export const uploadFile = (params = {}) => {
    let task = new UploadTask();
    return task._invokeBoxJs(params);
};
