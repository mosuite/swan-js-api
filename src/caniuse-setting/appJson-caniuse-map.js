/**
 * @file api-caniuse-map
 * @description can i use map of api
 * @author lijia(lijia30@baidu.com)
 */

export const appJsonMap = {
    appjson: [
        {
            pages: []
        },
        {
            window: ['navigationBarBackgroundColor', 'navigationBarTextStyle', 'navigationBarTitleText',
                'navigationStyle', 'backgroundColor', 'backgroundTextStyle', 'enablePullDownRefresh',
                'onReachBottomDistance']
        },
        {
            networkTimeout: ['request', 'connectSocket', 'uploadFile', 'downloadFile']
        },
        {
            tabBar: ['color', 'backgroundColor', 'borderStyle', 'list', 'selectedColor']
        },
        'preloadRule', 'subpackages'
    ]
};