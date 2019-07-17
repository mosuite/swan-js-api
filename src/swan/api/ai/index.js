/**
 * @file 小程序接入AI能力统一暴露出口
 * @author zengqingzhuang(zengqingzhuang@baidu.com)
 *          lijia(lijia30@baidu.com)
 */
/* eslint-disable fecs-camelcase */

import $ from '../../../utils/_core';
import {swanNative} from '../../container';
import {executeCallback, paramsInOrder} from '../../../invoker/funcs';
import {getCallbacks} from '../../../utils/filter';
import {aiParser} from '../../../utils/parser';
import getVoiceRecognizer from './voice-recognizer';

const checkParams = (value, description) => {
    if (value == null) {
        return description.isRequired ? 1 : 0;
    }
    let value_valid = false;
    switch (typeof (description.value)) {
        case 'string':
            switch (description.value) {
                case 'string':
                case 'boolean':
                case 'number':
                case 'function':
                case 'object':
                    value_valid = typeof value === description.value;
                    break;
                case 'Array':
                    value_valid = value instanceof Array;
                    break;

            }
            if (!value_valid) {
                return 2;
            }
            break;
        case 'object': {
            if (value && typeof value === 'object') {
                value_valid = true;
                for (let key in description.value) {
                    value_valid = !checkParams(value[key], description.value[key]);
                    if (!value_valid) {
                        break;
                    }
                }
            } else if (description.value.oneOf && typeof value === 'string') {
                value_valid = description.value.oneOf.includes(value);
                if (!value_valid) {
                    return 3;
                }
                break;
            }
        }

    }
};

const aiParmasCheck = (params = {}, paramsArr) => {
    paramsArr.forEach(item => {
        let errMsg = '';
        switch (checkParams(params[item.name], item)) {
            case 1:
                errMsg = ' is required.';
                break;
            case 2:
                errMsg = ' type error. must be ' + JSON.stringify(item.value || 'Array');
                break;
            case 3:
                errMsg = ' type error, must be oneOf ' + JSON.stringify(item.value.oneOf);
                break;

        }
        if (errMsg) {
            throw new Error(`[jsNative Argument Error]:${item.name}${errMsg}`);
        }
    });

};

const aiMethodList = [
    {
        name: 'faceDetect',
        specialCheck(params) {
            let description = [
                {name: 'image', value: 'string', isRequired: true},
                {name: 'image_type', value: {oneOf: ['URL', 'BASE64', 'FACE_TOKEN']}, isRequired: true},
                {name: 'face_field', value: 'string', isRequired: false},
                {name: 'max_face_num', value: 'string', isRequired: false},
                {name: 'face_type', value: 'string', isRequired: false}
            ];
            try {
                aiParmasCheck(params, description);
            } catch (e) {
                return e.message;
            }
        },
        filter(params) {
            const {
                image_type,
                face_field,
                max_face_num,
                face_type,
                image
            } = params;
            const stringMap = {
                image_type,
                face_field,
                max_face_num,
                face_type
            };
            const fileMap = {

            };

            if (image_type === 'BASE64') {
                fileMap['image'] = image;
            } else {
                stringMap['image'] = image;
            }


            return {
                service: 'aip',
                api: '/rest/2.0/face/v3/detect',
                stringMap,
                fileMap,
                ...getCallbacks(params)
            };
        }
    },

    {
        name: 'faceMatch',
        specialCheck(params = {}) {
            if (!params.data || !$.isArray(params.data)) {
                return '`[jsNative Argument Error]: data is required and should be type of Array';
            }
            let description = [
                {name: 'image', value: 'string', isRequired: true},
                {name: 'image_type', value: {oneOf: ['URL', 'BASE64', 'FACE_TOKEN']}, isRequired: true},
                {name: 'quality_control', value: 'string', isRequired: false},
                {name: 'liveness_control', value: 'string', isRequired: false},
                {name: 'face_type', value: 'string', isRequired: false}
            ];
            try {
                params.data.forEach(item => {
                    aiParmasCheck(item, description);
                });
            } catch (e) {
                return e.message;
            }
        },
        filter(params) {
            const data = params && params.data || {};
            let stringMap = {};
            let fileMap = {};

            $.isArray(data) && data.forEach((item, index) => {
                let {
                    image_type,
                    face_type,
                    quality_control,
                    liveness_control,
                    image
                } = item;

                stringMap[`image_type_${index}`] = image_type;
                stringMap[`face_type_${index}`] = face_type;
                stringMap[`quality_control_${index}`] = quality_control;
                stringMap[`liveness_control_${index}`] = liveness_control;

                if (image_type === 'BASE64') {
                    fileMap[`image_${index}`] = image;
                } else {
                    stringMap[`image_${index}`] = image;
                }
                index++;
            });

            return {
                service: 'aip',
                api: '/rest/2.0/face/v3/match',
                stringMap,
                fileMap,
                ...getCallbacks(params)
            };
        }
    },

    {
        name: 'faceSearch',
        specialCheck(params) {
            let description = [
                {name: 'image', value: 'string', isRequired: true},
                {name: 'image_type', value: {oneOf: ['URL', 'BASE64', 'FACE_TOKEN']}, isRequired: true},
                {name: 'group_id_list', value: 'string', isRequired: true},
                {name: 'quality_control', value: 'string', isRequired: false},
                {name: 'liveness_control', value: 'string', isRequired: false},
                {name: 'max_face_num', value: 'string', isRequired: false},
                {name: 'user_id', value: 'string', isRequired: false}
            ];
            try {
                aiParmasCheck(params, description);
            } catch (e) {
                return e.message;
            }
        },
        filter(params) {
            const {
                image,
                image_type,
                group_id_list,
                quality_control,
                liveness_control,
                user_id,
                max_user_num
            } = params;

            const stringMap = {
                image_type,
                group_id_list,
                quality_control,
                liveness_control,
                user_id,
                max_user_num
            };
            const fileMap = {};
            if (image_type === 'BASE64') {
                fileMap['image'] = image;
            } else {
                stringMap['image'] = image;
            }
            return {
                service: 'aip',
                api: '/rest/2.0/face/v3/search',
                stringMap,
                fileMap,
                ...getCallbacks(params)
            };
        }
    },

    {
        name: 'facePersonVerify',
        specialCheck(params) {
            let description = [
                {name: 'image', value: 'string', isRequired: true},
                {name: 'image_type', value: {oneOf: ['URL', 'BASE64', 'FACE_TOKEN']}, isRequired: true},
                {name: 'id_card_number', value: 'string', isRequired: true},
                {name: 'name', value: 'string', isRequired: true},
                {name: 'quality_control', value: 'string', isRequired: false},
                {name: 'liveness_control', value: 'string', isRequired: false}
            ];
            try {
                aiParmasCheck(params, description);
            } catch (e) {
                return e.message;
            }
        },
        filter(params) {
            const {
                image,
                image_type,
                id_card_number,
                name,
                quality_control,
                liveness_control
            } = params;

            const stringMap = {
                image_type,
                id_card_number,
                name,
                quality_control,
                liveness_control
            };
            const fileMap = {};
            if (image_type === 'BASE64') {
                fileMap['image'] = image;
            } else {
                stringMap['image'] = image;
            }
            return {
                service: 'aip',
                api: '/rest/2.0/face/v3/person/verify',
                stringMap,
                fileMap,
                ...getCallbacks(params)
            };
        }
    },

    {
        name: 'facePersonIdmatch',
        specialCheck(params) {
            let description = [
                {name: 'id_card_number', value: 'string', isRequired: true},
                {name: 'name', value: 'string', isRequired: true}
            ];
            try {
                aiParmasCheck(params, description);
            } catch (e) {
                return e.message;
            }
        },
        filter(params) {
            const {id_card_number, name} = params;
            return {
                service: 'aip',
                api: '/rest/2.0/face/v3/person/idmatch',
                stringMap: {
                    id_card_number,
                    name
                },
                ...getCallbacks(params)
            };
        }
    },

    {
        name: 'faceVerify',
        specialCheck(params = {}) {
            if (!params.data || !$.isArray(params.data)) {
                return '`[jsNative Argument Error]: data is required and should be type of Array';
            }
            let description = [
                {name: 'image', value: 'string', isRequired: true},
                {name: 'image_type', value: {oneOf: ['URL', 'BASE64', 'FACE_TOKEN']}, isRequired: true},
                {name: 'face_filed', value: 'string', isRequired: false}
            ];
            try {
                params.data.forEach(item => {
                    aiParmasCheck(item, description);
                });
            } catch (e) {
                return e.message;
            }
        },
        filter(params) {
            const data = params && params.data || {};

            let stringMap = {};
            let fileMap = {};

            $.isArray(data) && data.forEach((item, index) => {
                let {
                    image_type,
                    face_field,
                    image
                } = item;

                stringMap[`image_type_${index}`] = image_type;
                stringMap[`face_field_${index}`] = face_field;

                if (image_type === 'BASE64') {
                    fileMap[`image_${index}`] = image;
                } else {
                    stringMap[`image_${index}`] = image;
                }
                index++;

            });

            return {
                service: 'aip',
                api: '/rest/2.0/face/v3/match',
                stringMap,
                fileMap,
                ...getCallbacks(params)
            };
        }
    },

    {
        name: 'faceLivenessSessioncode',
        specialCheck(params) {
            let description = [
                {name: 'appid', value: 'string', isRequired: true}
            ];
            try {
                aiParmasCheck(params, description);
            } catch (e) {
                return e.message;
            }
        },
        filter(params) {
            return {
                service: 'aip',
                api: '/rest/2.0/face/v1/faceliveness/sessioncode',
                stringMap: {
                    appid: params.appid
                },
                ...getCallbacks(params)
            };
        }
    },

    {
        name: 'faceLivenessVerify',
        specialCheck(params) {
            let description = [
                {name: 'video_base64', value: 'string', isRequired: true},
                {name: 'session_id', value: 'string', isRequired: false}
            ];
            try {
                aiParmasCheck(params, description);
            } catch (e) {
                return e.message;
            }
        },
        filter(params) {
            const {video_base64, session_id} = params;
            return {
                service: 'aip',
                api: '/rest/2.0/face/v1/faceliveness/verify',
                stringMap: {
                    video_base64,
                    session_id
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'nlpLexerCustom',
        specialCheck(params) {
            let description = [
                {name: 'text', value: 'string', isRequired: true}
            ];
            try {
                aiParmasCheck(params, description);
            } catch (e) {
                return e.message;
            }
        },
        filter(params) {
            return {
                service: 'aip',
                api: '/rpc/2.0/nlp/v1/lexer_custom',
                stringMap: {
                    text: params.text
                },
                ...getCallbacks(params)
            };
        }
    },

    {
        name: 'ocrIdCard',
        filter(params) {
            const {
                detect_direction,
                id_card_side = 'front',
                detect_risk,
                image
            } = params;
            return {
                service: 'aip',
                api: '/rest/2.0/ocr/v1/idcard',
                stringMap: {
                    detect_direction,
                    id_card_side,
                    detect_risk
                },
                fileMap: {
                    image
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'ocrBankCard',
        filter(params) {
            return {
                service: 'aip',
                api: '/rest/2.0/ocr/v1/bankcard',
                stringMap: {
                    string_key: 'bank'
                },
                fileMap: {
                    image: params.image
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'ocrDrivingLicense',
        filter(params) {
            const {detect_direction, unified_valid_period, image} = params;
            return {
                service: 'aip',
                api: '/rest/2.0/ocr/v1/driving_license',
                stringMap: {
                    string_key: 'driving',
                    detect_direction,
                    unified_valid_period
                },
                fileMap: {
                    image
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'ocrVehicleLicense',
        filter(params) {
            const {detect_direction, accuracy, image} = params;
            return {
                service: 'aip',
                api: '/rest/2.0/ocr/v1/vehicle_license',
                stringMap: {
                    string_key: 'vehicle',
                    detect_direction,
                    accuracy
                },
                fileMap: {
                    image
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'textReview',
        filter(params) {
            return {
                service: 'aip',
                api: '/rest/2.0/antispam/v2/spam',
                stringMap: {
                    content: params.content
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'textToAudio',
        filter(params) {
            const {
                tex,
                ctp = 1,
                spd = 5,
                pit = 5,
                vol = 5,
                per = 0
            } = params;

            return {
                service: 'tsn',
                api: '/text2audio',
                stringMap: {
                    tex,
                    lan: 'zh',
                    ctp,
                    spd,
                    pit,
                    vol,
                    per
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'imageAudit',
        filter(params) {
            const {image, imgUrl} = params;
            return {
                service: 'aip',
                api: '/rest/2.0/solution/v1/img_censor/user_defined',
                stringMap: {
                    string_key: 0
                },
                fileMap: {
                    image,
                    imgUrl
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'advancedGeneralIdentify',
        filter(params) {
            return {
                service: 'aip',
                api: '/rest/2.0/image-classify/v2/advanced_general',
                stringMap: {
                    string_key: 'general'
                },
                fileMap: {
                    image: params.image
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'objectDetectIdentify',
        filter(params) {
            const {with_face, image} = params;
            return {
                service: 'aip',
                api: '/rest/2.0/image-classify/v1/object_detect',
                stringMap: {
                    with_face,
                    string_key: 'img_censor'
                },
                fileMap: {
                    image
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'dishClassify',
        filter(params) {
            const {top_num, filter_threshold = 0.95, image} = params;
            return {
                service: 'aip',
                api: '/rest/2.0/image-classify/v2/dish',
                stringMap: {
                    top_num,
                    filter_threshold
                },
                fileMap: {
                    image
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'carClassify',
        filter(params) {
            const {top_num, image} = params;
            return {
                service: 'aip',
                api: '/rest/2.0/image-classify/v1/car',
                stringMap: {
                    top_num,
                    string_key: 'car'
                },
                fileMap: {
                    image
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'logoClassify',
        filter(params) {
            const {custom_lib, image} = params;
            return {
                service: 'aip',
                api: '/rest/2.0/image-classify/v2/logo',
                stringMap: {
                    custom_lib,
                    string_key: 'logo'
                },
                fileMap: {
                    image
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'animalClassify',
        filter(params) {
            const {top_num, image} = params;
            return {
                service: 'aip',
                api: '/rest/2.0/image-classify/v1/animal',
                stringMap: {
                    top_num,
                    string_key: 'animal'
                },
                fileMap: {
                    image
                },
                ...getCallbacks(params)
            };
        }
    },
    {
        name: 'plantClassify',
        filter(params) {
            return {
                service: 'aip',
                api: '/rest/2.0/image-classify/v1/plant',
                stringMap: {
                    string_key: 'plant'
                },
                fileMap: {
                    image: params.image
                },
                ...getCallbacks(params)
            };
        }
    }
];

/**
 * invoke
 *
 * @param  {string} apiName API 名称
 * @param  {Object} params  调起参数
 */
function nativeInvoke(apiName, params) {
    let invokePromise = new Promise((resolve, reject) => {

        params = Object.assign(params, {
            innerCallback(res) {
                res = $.isString(res) ? JSON.parse(res) : res;
                if (+res.status === 0) {
                    let result = aiParser(res);
                    let data = result.data;

                    // 失败情况的处理
                    if (data) {
                        let errCode = data.errno || data.error_code || data.err_no;
                        let errMsg = data.errmsg || data.error_msg || data.err_msg;
                        errCode && reject({
                            errCode,
                            errMsg
                        });
                    }
                    resolve(data);
                } else {
                    reject(res);
                }
            }
        });

        swanNative.invoke(apiName, paramsInOrder(swanNative, apiName, params));
    });
    executeCallback({
        apiName,
        promise: invokePromise
    }, params);
}

export const aiApiConfigs = aiMethodList.reduce((apiConfigs, item) => {
    apiConfigs[`ai.${item.name}`] = {
        filter: item.filter,
        proxyHandler: params => nativeInvoke(`ai.${item.name}`, params)
    };
    if (item.specialCheck) {
        apiConfigs[`ai.${item.name}`].specialCheck = item.specialCheck;
    }
    return apiConfigs;
}, {
    'ai.getVoiceRecognizer': getVoiceRecognizer
});
