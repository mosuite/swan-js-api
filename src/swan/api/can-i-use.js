/**
 * @file index
 * @description can i use 入口文件
 * @author lijia(lijia30@baidu.com)
 */
import {APIMap} from '../../caniuse-setting/api/api-caniuse-map';
import {componentMap} from '../../caniuse-setting/component-caniuse-map';
import {appJsonMap} from '../../caniuse-setting/appJson-caniuse-map';

const canIUseMap = Object.assign(componentMap, APIMap, appJsonMap);
const keyFilter = (arr, key) => {
    return arr.filter(item => {
        if (typeof item === 'string') {
            return item === key;
        } else {
            return Object.keys(item)[0] === key;
        }
    });
};

export const canIUse = opt => {
    let result = false;
    if (opt) {
        let path = opt.split('.');
        // 对于AI类API进行处理 key为'ai.xx';
        if (path[0] === 'ai') {
            path[0] = `${path[0]}.${path[1]}`;
            path.splice(1, 1);
        }
        let ObjMap = canIUseMap[path[0]];
        if (ObjMap) {
            path.splice(0, 1);
            if (path.length > 0) {
                path.reduce((map, key) => {
                    let keyMap = keyFilter(map, key);
                    if (keyMap.length > 0) {
                        result = true;
                        return typeof keyMap[0] === 'string' ? [] : keyMap[0][key];
                    } else {
                        result = false;
                        return [];
                    }

                }, ObjMap);
            } else {
                result = true;
            }

        }
    }
    return result;

};
