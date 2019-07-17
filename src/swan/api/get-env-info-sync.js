/**
 * @file getEnvInfoSync
 * @author wuxiaopan(wuxiopan@baidu.com)
 */
import {boxjs} from '../../boxjs/index';
import {schema} from '../../utils/scheme-info';

export default function getEnvInfoSync() {
    let {SDKVersion} = boxjs.device.systemInfo({type: 'sync'});

    let {appId, appname, appLaunchScheme} = boxjs.data.get({name: 'swan-appInfoSync'});
    let privateParamsRegx = /(_baiduboxapp|callback|upgrade).*?(&|$)/g;
    appLaunchScheme = appLaunchScheme.replace(privateParamsRegx, '');

    return {
        appKey: appId,
        appName: appname,
        lastAppURL: appLaunchScheme,
        sdkVersion: SDKVersion,
        scheme: schema
    };
}
