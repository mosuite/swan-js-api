/**
 * @file Native 组件渲染状态存储与管理
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

/* global Map, _naSwan */
import {events} from './event';
import {parseMessage} from './parser';
import {hasNoGlobal} from './global';

const globalENV = hasNoGlobal ? document : _naSwan;

/**
 * 存储 NA 组件渲染状态
 * @type {Map}
 */
export const componentsMap = new Map();

/**
 * 获取存储组件渲染状态的 Key
 *
 * @param  {string} slaveId       webViewId
 * @param  {string} componentName 组件名称
 * @param  {string} domId         domId
 * @return {string}               Key
 */
export const getComponentId = ({
    slaveId,
    componentName,
    domId
}) => [slaveId, componentName, domId].join('_');

/**
 * 监听 componentStateChange
 *
 * @param  {Object} event
 */
events.on('componentStateChange', event => {
    // console.warn('componentStateChange', event);
    const {slaveId, componentName, domId, state, sanId} = event;

    // 存储组件的 sanId 供操作时使用
    const componentId = getComponentId({slaveId, domId, componentName});

    switch (state) {
        case 'insert':
            componentsMap.set(componentId, sanId);
            // 派发相应的组件事件，执行组件渲染前的调用
            events.emit(componentId, event);
            break;
        case 'remove':
            componentsMap.set(componentId, '');
            break;
    }
});

/**
 * 监听 master 和 slave 通信 message 事件
 *
 * @param  {Event} event message 事件
 */
globalENV.addEventListener('message', event => {
    if (event.message) {
        let message = parseMessage(event.message);
        events.emit(message.type, message);
    }
});

/**
 * 统一的 Native 组件端能力操作方法
 *
 * @param  {string} componentId 组件的标识
 * @param  {Function} fn 需要执行的函数
 * @param  {Object} context 执行函数的上下文
 */
export function nativeOperateMethod(componentId, fn, context) {
    if (componentsMap.get(componentId)) {
        fn.apply(context);
    }
    else {
        events.once(componentId, event => {
            fn.apply(context);
        });
    }
}
