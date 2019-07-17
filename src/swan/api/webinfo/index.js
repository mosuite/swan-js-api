/**
 * @file 设置页面meta信息
 * @author liuxiaoming02(liuxiaoming02@baidu.com)
 */

/**
 * 设置小程序 description meta 信息
 *
 * @param  {Object} params 参数
 */
export function setMetaDescription(params = {}) {
    (params.success && typeof params.success === 'function') && params.success();
    (params.complete && typeof params.complete === 'function') && params.complete();
}

/**
 * 设置小程序 keywords meta 信息
 *
 * @param  {Object} params 参数
 */
export function setMetaKeywords(params = {}) {
    (params.success && typeof params.success === 'function') && params.success();
    (params.complete && typeof params.complete === 'function') && params.complete();
}

/**
 * 动态设置当前页面的标题
 *
 * @param  {Object} params 参数
 */
export function setDocumentTitle(params = {}) {
    (params.success && typeof params.success === 'function') && params.success();
    (params.complete && typeof params.complete === 'function') && params.complete();
}

/**
 * 设置小程序基础信息 包括标题、关键字、页面描述以及图片信息、视频信息等。
 *
 * @param  {Object} params 参数
 */
export function setPageInfo(params = {}) {
    (params.success && typeof params.success === 'function') && params.success();
    (params.complete && typeof params.complete === 'function') && params.complete();
}