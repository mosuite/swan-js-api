# Change Log
## [2.0.0] - 2018-10-19
### Added
- 直连支付消息支持。
- getVoiceManger: 语音识别。
- getImageInfo: 支持网络图片 && 相对路径。
- openBdboxWebview: 小程序调起手百页面（对内）。
- openIM: 调起客服。

### Changed
- 分享 ICON 优化: 默认取各小程序的 ICON。

## [1.15.10] - 2018-10-18
### Changed
- 修复 CanvasContext.draw 调用时序问题。

## [1.15.9] - 2018-10-11
### Changed
- 兼容 BackgroundAudioManager 属性 update 时安卓重新播放的 Bug。
- 兼容 BackgroundAudioManager iOS 返回值错误导致前端报错的问题。
- BackgroundAudioManager 监听方法逻辑调整。

## [1.15.6] - 2018-09-25
### Added
- canvasGetImageData: 获取 canvas 区域隐含的像素数据。
- canvasPutImageData: 将像素数据绘制到画布。

## [1.15.5] - 2018-09-21
### Changed
- 分享支持转发。

## [1.15.4] - 2018-09-20
### Changed
- 分享渠道补充。

## [1.15.3] - 2018-09-18
### Changed
- 去除不维护接口的参数校验。如 requestPayment

## [1.15.2] - 2018-09-18
### Added
- 参数校验。

### Changed
- API 重构。

## [1.15.0] - 2018-09-14
### Added
- getUpdateManager。
- requestWeChatPayment。
- preloadSubPackage。
- isLoginSync。
- navigateToSmartGameProgram。
- showToast 支持 mask、image。
- LivePlayerContext 支持 pause、resume。

### Changed
- showToast icon 默认值更改为 success。

## [1.14.8] - 2018-09-13
### Changed
- Android 开放微博分享渠道。
- getUserInfo 字段透传。
- 删除 iOS saveImageToPhotosAlbum 误返回的 bduss。

## [1.14.7] - 2018-09-11
### Added
- openAdWebPage

## [1.14.5] - 2018-09-04
### Added
- request 支持 responseType。

### Changed
- API 日志优化。
- 步行导航兼容安卓 4.4。

## [1.14.4] - 2018-08-30
### Changed
- fix filter 后回调丢失的Bug。

## [1.14.3] - 2018-08-30
### Changed
- complete 回调补充返回值。
- Android 去除`系统分享`分享渠道。
- 修复分享面板调起时回调 success 的问题。

## [1.14.2] - 2018-08-28
### Changed
- 删除 canvas 属性的 get 方法(fix 栈溢出问题)。
- 音频 seek 方法支持 number 参数

## [1.14.1] - 2018-08-24
### Changed
- 删除 getAppInfoSync 缓存。

## [1.14.0] - 2018-08-24
### Added
- setEnableDebug。
- getFormId(Boxjs)。

## [1.13.6] - 2018-08-23
### Changed
- getAppInfoSync 增加缓存。

## [1.13.5] - 2018-08-16
### Changed
- 同步 API 调用日志补充。
- innerAudioContext update 逻辑优化。
- AI 二期优化(增加失败回调 && BugFix)。

## [1.13.4] - 2018-08-14
### Changed
- chooseAddress: 兼容安卓返回参数不一致的问题(countryName => countyName)。

## [1.13.3] - 2018-08-09
### Added
- API 调用结果上报 ubc。
- AI 接口返回值字段调整(对齐网络相关接口，将 body 字段 改为 data)。

## [1.13.0] - 2018-08-03
### Added
- chooseLocation。
- getCommonSysInfo。
- image 支持 bdfile 文件。

### Changed
- showToast, showLoading 优化。

# Change Log
## [1.12.6] - 2018-07-31
### Changed
- canIUse 二期。
- 小程序跳转支持 from 统计。

## [1.12.5] - 2018-07-26
### Changed
- 规避 createCanvasContext 调用时机过早，导致 getSlaveId 报错的问题。

## [1.12.4] - 2018-07-26
### Added
- getExtConfig, getExtConfigSync。
- navigateToSmartProgram, navigateBackSmartProgram。
- API 回迁部分: WebSocket(H5), createCanvasContext, createInnerAudioContext, getBackgroundAudioManager, createCameraContext, createARCameraContext

### Changed
- 提取公共逻辑(创建二级Promise、执行开发者回调等)。
- 开发者 success 中有异常时，不再执行 fail 回调。

## [1.12.3] - 2018-07-19
### Added
- requestTask: 增加取消请求能力。

### Changed
- 修复连续调用某些 API （request, downloadFile, uploadFile 等）时，二级回调函数被覆盖导致先调用的无法收到结果的 bug。
- 删除误挂载在 swan 上的 closeSpringback。

## [1.12.2] - 2018-07-17
### Changed
- 回滚 requestTask。

## [1.12.1] - 2018-07-17
### Changed
- showModal: 修复 title 和 content 传值为 boolean 类型时 iOS 崩溃的 bug。

## [1.12.0] - 2018-07-13
### Added
- requestTask: 增加取消请求能力。
- onMemoryWarning: 内存管理。
- openWalkNavigation: AR 步行导航。
- livePlayerContext: requestFullScreen && exitFullScreen。

### Changed
- master & slave 通信优化: 10.10 开始，iOS 改用新的 `BBAMNPPostMessageBridge`，Android 改用 `Bdbox_aiapps_jsbridge.setData`。
- previewImage: 增加 from 参数，适应框架升级。

## [1.11.10] - 2018-07-02
### Changed
- 更新长隆动物园 appKey。

## [1.11.9] - 2018-07-02
### Changed
- navigateToMiniProgram: appid => appKey
- openShare: 更换默认分享 icon 为小程序 logo。

## [1.11.8] - 2018-06-28
### Changed
- openShare: 分享链接判断逻辑前置。
- SHOWCASE_APPKEY: +智能小程序学院。

## [1.11.5] - 2018-06-28
### Changed
- RecorderManager: start 支持回调（for showcase）。

## [1.11.4] - 2018-06-27
### Changed
- getSetting/openSetting: scope 列表补齐 && 返回值修复。