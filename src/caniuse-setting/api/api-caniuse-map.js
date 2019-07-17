/**
 * @file api-caniuse-map
 * @description can i use map of api
 * @author lijia(lijia30@baidu.com)
 */
import {swanDescription} from '../../description';
import {swanMap} from '../../swan/map';
import {specialAPIMap} from './special-api-map';
import {returnAPIMap} from './return-api-map';

// map中name与description中name不一致的api处理
let needProcessMap = {
    camera: 'cameraContext',
    recorder: 'recorderManager',
    audio: 'innerAudioContext',
    backgroundAudio: 'backgroundAudioManager',
    map: 'mapContext',
    live: 'livePlayerContext',
    ARCamera: 'ARCameraContext',
    video: 'videoContext',
    voiceRecognizer: 'voiceRecognizer'
}

// 通过description获取API--->args的map
let APIMap = swanDescription.reduce((result, item) => {
        let nameArr = item.name.split('.');
        // description中的具有上下文API的处理
        let needProcessDesc = needProcessMap[nameArr[0]];
        if (nameArr.length > 1 && needProcessDesc) {
            let obj = {};
            // 端上的fullScreen通过布尔值进行控制 前端拆分为exitFullScreen 和 requestFullScreen 两个方法
            if (item.args.length > 0 && nameArr[1] !== 'fullScreen') {
                obj[nameArr[1]] = item.args.reduce((arr, args) => {
                    // onProgressUpdate 前端封装成方法
                    if (args.name !== 'cb' && args.name !== 'onProgressUpdate') {
                        arr.push(args.name);
                    }
                    return arr;
                },[]);
                if (result[needProcessDesc]) {
                    result[needProcessDesc].push(obj);
                } else {
                    result[needProcessDesc] = [obj];
                }
            }
        } else if (swanMap[item.name]) {
            result[item.name] = [];
            let obj = {};
            if (item.args.length > 0) {
                obj.object = item.args.reduce((arr, args) => {
                    if (args.name !== 'cb') {
                        arr.push(args.name);
                    }
                    return arr;
                },[]);
                result[item.name].push(obj);
            }
        }
    return result;
}, {});


APIMap = Object.assign(APIMap, specialAPIMap);

for (let key in returnAPIMap) {
    APIMap[key] = APIMap[key].concat(returnAPIMap[key]);
}
export {
    APIMap
}