/**
 * @file constant
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */



export const HOST_NAME_LIST = {
    baiduboxapp: 'baidu'
};

/**
 * 不需要将 number 转换为 string 的 API
 * @type {Array}
 */
export const CANCEL_CONVERT_LIST = [
    'request',
    /ai\.(?!getVoiceRecognizer)\w+/,
    'uploadFile',
    'sendSocketMessage',
    'requestWeChatPayment',
    'requestPolymerPayment',
    'statisticEvent',
    'statisticFlowJar',
    'recognizeImage',
    'setMenuOpacity'
];

export const noop = () => {};

/**
 * 常用的参数校验
 * @const {Object}
 */
export const PARAMS_CHECK = {
    string: '',
    Number: 1,
    Boolean: true,

    filePath: {filePath: ''},
    url: {url: ''},
    key: {key: ''},
    index: {index: 1},
    image: {image: ''},
    src: {src: ''}
};

/**
 * 可自定义分享 URL 的 appKey 列表
 * @const {Object}
 */
export const SHOWCASE_APPKEY = [
    '8lhmDzo6RvfvSi6H7fHrsn49KkHIh0GG', // 世界杯
    'luNr3qiNzFQ6Cem5tVgOoQ5dAy5FVk1w', // 长隆动物园
    '79RKhZ2BTvyyHitg4W3Xle4kkFgwwXyp', // 长隆动物园
    'wFxG7nwxhmtGpAs32CQnSxUGKhX7QsgL', // 嘻哈
    'frQ5XpOCpnq00kpFyPRtIgvgMjMgQGyB', // 智能小程序学院
    '56XTv0y3lwgdUIlhemaxGL0w8djy4LsF', // 星动小程序
    'i2UoL6iWVUjaSpHLA4ftCxO2SNCdkTf0', // 跨年-活动主页
    'C1TRNiF3DoBa1nDdHige0DYSF3vswPYy', // 跨年-聚合页
    'xaLEmskv0hYqWkbGPmGrNueg0yHscQbb', // 百宝箱
    'fbLH5ZCMoFz7kRhht9FWvK2wmvfz8TVr', // 幸运日历盒
    'GzeN9cN8HLYksfxA9vPjVwnKxuCdddUr', // 抢票日历小程序
    'HDd8ONN4l7lgBS0WCdGITMAR3Skc9XhV', // 超值年货节小程序
    'uSTqbBp5u8egzErCpTiPrAOumDjAXWMU' // 全民小视频
];

/**
 * 开发者入参与客户端权限的映射
 * @const {Object}
 */
export const SCOPE_MAP = {
    'scope.userInfo': 'snsapi_userinfo',
    'scope.mobile': 'mobile',
    'scope.userLocation': 'mapp_location',
    'scope.writePhotosAlbum': 'mapp_images',
    'scope.address': 'mapp_choose_address',
    'scope.invoiceTitle': 'mapp_choose_invoice',
    'scope.camera': 'mapp_camera',
    'scope.record': 'mapp_record'
};

/**
 * 开发者入参与客户端pid的映射(语音pid)
 * @const {Object}
 */
export const PID_MAP = {
    input: '1706',
    search: '1707'
};

/**
 * 小程序打开小程序的渠道号
 * @type {string}
 */
export const PROGRAM_LAUNCH_SCENE = '1170000000000000';

/**
 * 时长打点 API 列表
 * @type {Array}
 */
export const DURATION_LOG_LIST = [
    'login', 'checkSession', 'getUserInfo',
    'requestPolymerPayment', 'requestAliPayment',
    'requestPayment', 'requestWeChatPayment'
];

/**
 * 多模相机垂类映射列表
 * @type {Object}
 */
export const IMAGE_RECOGNIZE_MAP = {
    'BARCODE': '扫一扫',
    'QUESTION': '拍题',
    'TRANSLATE': '翻译'
};

export const SUPPORT_IMAGE_RECOGNIZE_TIP = ['BARCODE'];
