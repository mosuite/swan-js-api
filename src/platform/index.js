/**
 * @file platform/index.js
 * @author renzhonghua@baidu.com
 * @description 对swanjs提供一些版本判断相关的api
 */

import $ from '../utils/_core';
import versionCompare from './version-compare';
import getVersionTool from './get-version';
import detect from './detect';

module.exports = {
    versionCompare,
    isIOS: () => $.isIOS,
    isAndroid: () => $.isAndroid,
    os: $.isIOS ? 'ios' : ($.isAndroid ? 'android' : 'none'),
    osVersion: () => detect().version,
    isBox: $.isBoxApp,
    boxVersion: getVersionTool.getBoxVersion,
    host: $.getHost(),
    hostVersion: getVersionTool.getHostVersion(),
    sdkVersion: getVersionTool.getSdkVersion()
};
