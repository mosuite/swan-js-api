/**
 * @file api/getAppInfoSync
 * @author yanghongxue@baidu.com
 * @description getAppInfoSync
 */

export const getLaunchOptionsSync = boxjs => {
    let appInfo = boxjs.data.get({name: 'swan-appInfoSync'});
    let appLaunchScheme = appInfo.appLaunchScheme || '';
    let hasQuery = appLaunchScheme && appLaunchScheme.indexOf('minigame_query');
    let query = {};

    // 对当前scheme的query字段进行解析 不进行全scheme回传
    // eq: baiduboxapp://swangame/demo/?minigame_query={"test1":"abc","test2":"abc","test3":"abc"}&_baiduboxapp={"from":"7001"}
    if (hasQuery >= 0) {
        try {
            appLaunchScheme = decodeURIComponent(appLaunchScheme);
            let queryStr = /(?:minigame_query\s?=\s?[{])([^>]*?)(?:}&)/g.exec(appLaunchScheme)[1];
            query = JSON.parse('{' + queryStr + '}');
        } catch (e) {
            console.warn('query check error:', e);
        }
    }
    return {
        scene: !isNaN(appInfo.scene) ? parseInt(appInfo.scene, 10) : -1,
        query: query,
        referrerInfo: {
            appId: appInfo.srcAppId || '',
            extraData: appInfo.extraData || {}
        }
    };
};
