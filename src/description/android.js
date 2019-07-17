/**
 * @file src/description/android.js
 * @author renzhonghua@baidu.com
 * @description
 */



export const androidSpecialMap = [
    {
        name: 'preventPullDownRefresh.insert',
        authority: 'v38/swan',
        path: '/preventPullDownRefresh',
        args: [
            {name: 'slaveId', value: 'string='},
            {name: 'prevent', value: 'boolean='}
        ]
    },
    {
        name: 'openAdApp.insert',
        authority: 'v44/swan',
        path: '/openApp4Ad',
        args: [
            {name: 'name', value: 'string='}
        ]
    },
    {
        name: 'hideToast',
        authority: 'v11/swan',
        path: '/hideToast',
        args: []
    }
];
