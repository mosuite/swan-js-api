/**
 * @file 事件派发器
 * @author  wuxiaopan(wuxiaopan@baidu.com)
 */

import EventsEmitter from './events-emitter';
import {executeByTryCatch} from '../invoker/funcs';

class Event extends EventsEmitter {
    once(type, callback) {
        this.onMessage(type, event => {
            executeByTryCatch(callback, 'at callback', event.data);
        }, {
            once: true
        });
    }

    on(type, callback) {
        this.onMessage(type, event => {
            executeByTryCatch(callback, 'at callback', event.data);
        });
    }

    emit(type, data) {
        this.fireMessage({
            type,
            data
        });
    }
}

export const events = new Event();
