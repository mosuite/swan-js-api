/**
 * @file util/ai
 * @author bailonggang
 * @description  ai模拟端返回值
 */

export default {
    'baiduboxapp://swanAPI/aiRequest': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/ocr/v1/idcard': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxxx","direction":0,"image_status":"normal","idcard_type":"normal",\
                "edit_tool":"Adobe Photoshop CS3 Windows","words_result":{"住址":{"location":{"left":267,\
                "top":453,"width":459,"height":99},"words":"南京市江宁区弘景大道3889号"},"公民身份号码":\
                {"location":{"left":443,"top":681,"width":589,"height":45},"words":"330881199904173914"},\
                "出生":{"location":{"left":270,"top":355,"width":357,"height":45},"words":"19990417"},\
                "姓名":{"location":{"left":267,"top":176,"width":152,"height":50},"words":"伍云龙"},"性别":\
                {"location":{"left":269,"top":262,"width":33,"height":52},"words":"男"},"民族":{"location":\
                {"left":492,"top":279,"width":30,"height":37},"words":"汉"}},"words_result_num":6}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/ocr/v1/bankcard': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxx","result":{"bank_card_number":"622500000000000",\
                "bank_name":"招商银行","bank_card_type":1}}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/ocr/v1/driving_license': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxx","direction":-1,"words_result_num":10,"words_result":{"证号":\
                {"words":"3208231999053090"},"有效期限":{"words":"6年"},"准驾车型":{"words":"B2"},"有效起始日期":\
                {"words":"20101125"},"住址":{"words":"江苏省南通市海门镇秀山新城"},"姓名":{"words":"小欧欧"},"国籍":\
                {"words":"中国"},"出生日期":{"words":"19990530"},"性别":{"words":"男"},"初次领证日期":\
                {"words":"20100125"}}}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/ocr/v1/vehicle_license': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxx","direction":0,"words_result_num":10,"words_result":{"品牌型号":{"words":"保时捷GT37182RUCRE"},"发证日期":{"words":"20160104"},"使用性质":{"words":"非营运"},"发动机号码":{"words":"20832"},"号牌号码":{"words":"苏A001"},"所有人":{"words":"圆圆"},"住址":{"words":"南京市江宁区弘景大道"},"注册日期":{"words":"20160104"},"车辆识别代号":{"words":"HCE58"},"车辆类型":{"words":"小型轿车"}}}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/antispam/v2/spam': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"result":{"spam":0,"reject":[],"review":[],"pass":[{"label":1,"score":0.3,"hit":[]},{"label":2,"score":0.33,"hit":[]},{"label":3,"score":0.2,"hit":[]},{"label":4,"score":0.31,"hit":[]},{"label":5,"score":0.19,"hit":[]}]},"log_id":"xxx"}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/text2audio': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"filePath": "xxxxx"}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/solution/v1/img_censor/user_defined': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxx","conclusion":"不合规","conclusionType":2,"data":[{"msg":"存在色情内容","probability":0.94308,"type":1},{"msg":"存在性感内容","probability":0.94308,"type":2},{"msg":"存在暴恐内容","probability":0.94308,"type":3},{"msg":"存在恶心内容","probability":0.9688154,"type":4},{"msg":"存在政治敏感内容","stars":[{"probability":0.94308,"name":"习近平"},{"probability":0.44308,"name":"彭丽媛"}],"type":8},{"msg":"存在二维码内容","probability":0.94308,"type":6},{"msg":"存在水印码内容","probability":0.94308,"type":5},{"msg":"存在条形码内容","probability":0.94308,"type":7},{"msg":"包含联系方式","probability":0.94308,"words":"包含联系方式","type":8}]}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/image-classify/v2/advanced_general': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxxx","result_num":5,"result":[{"score":0.371429,"root":"","keyword":"Shop BGM & J-Clef 카페이야기 Vol.7 (商店音乐 & J-Clef 咖啡故事 Vol.7)"},{"score":0.25045,"root":"商品-容器","keyword":"水壶"},{"score":0.169905,"root":"商品-生活用品","keyword":"功夫茶具"},{"score":0.095448,"root":"交通工具-汽车","keyword":"汽车"},{"score":0.019755,"root":"商品-食物","keyword":"咖啡"}]}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/image-classify/v1/object_detect': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxx","result":{"width":671,"top":147,"left":94,"height":243}}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/image-classify/v1/car': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxxx","location_result":{"width":434,"top":119,"height":246,"left":110},\
                "result":[{"score":0.99993008375168,"name":"宝马X3","year":"2016"}],"color_result":"白色"}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/image-classify/v2/dish': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxx","result_num":5,"result":[{"calorie":"119","has_calorie":true,"name":\
                "小炒黄牛肉","probability":"0.137841"},{"calorie":"22","has_calorie":true,"name":"牛肉粒",\
                "probability":"0.0870818"},{"calorie":"120","has_calorie":true,"name":"炒牛肉",\
                "probability":"0.0813015"}]}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/image-classify/v2/logo': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxx","result_num":1,"result":[{"type":0,"name":"百度","probability":\
                0.99999850988388,"location":{"width":160,"top":88,"left":201,"height":165}}]}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/image-classify/v1/animal': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxx","result":[{"score":"0.989849","name":"国宝大熊猫"},{"score":"0.00507955",\
                "name":"秦岭四宝"},{"score":"0.00143795","name":"团团圆圆"},{"score":"0.000770976",\
                "name":"棕色大熊猫"}]}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/image-classify/v1/plant': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"log_id":"xxx","result":[{"score":0.33590477705002,"name":"荷花"},{"score":0.16884732246399,\
                "name":"莲花池"},{"score":0.13957330584526,"name":"莲花"}]}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/face/v3/detect': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"face_num":1,"face_list":[{"face_token":"35235asfas21421fakghktyfdgh68bio","location":\
                {"left":117,"top":131,"width":172,"height":170,"rotation":4},"face_probability":1,"angle":\
                {"yaw":-0.34859421849251,"pitch":1.9135693311691,"roll":2.3033397197723},"landmark":\
                [{"x":161.74819946289,"y":163.30244445801}],"landmark72":[{"x":115.86531066895,"y":170.0546875}],\
                "age":29.298097610474,"beauty":55.128883361816,"expression":{"type":"smile","probability":\
                0.5543018579483},"gender":{"type":"male","probability":0.99979132413864},"glasses":{"type":\
                "sun","probability":0.99999964237213},"race":{"type":"yellow","probability":0.99999976158142},\
                "face_shape":{"type":"triangle","probability":0.5543018579483},"quality":{"occlusion":{"left_eye":0,\
                "right_eye":0,"nose":0,"mouth":0,"left_cheek":0.0064102564938366,"right_cheek":0.0057411273010075,\
                "chin":0},"blur":1.1886881756684e-10,"illumination":141,"completeness":1}}]}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/face/v3/match': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"score":44.3,"face_list":[{"face_token":"fid1"},{"face_token":"fid2"}]}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/face/v3/search': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"face_token":"fid","user_list":[{"group_id":"test1","user_id":"u333333",\
                "user_info":"Test User","score":99.3}]}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/face/v3/person/verify': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"score":44.3}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/face/v3/person/idmatch': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/face/v1/faceliveness/sessioncode': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"err_no":0,"err_msg":"SUCCESS","result":{"session_id":"S59faeeebb9111890355690",\
                "code":"9940"},"timestamp":1509617387,"cached":0,"serverlogid":"0587756642"}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rest/2.0/face/v1/faceliveness/verify': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"err_no":0,"err_msg":"success","result":{"score":0.984654366,"thresholds":{"frr_1e-4":0.05,\
                "frr_1e-3":0.3,"frr_1e-2":0.9},"code":{"create":"5789","identify":"5789"},"pic_list":[{"face_id":\
                5745745747,"pic":"gsagaheryzxv..."},{"face_id":5745745747,"pic":"gsagaheryzxv..."}]},"timestamp":\
                1509611848,"cached":0,"serverlogid":"2248375729"}'
            }
        }
    },
    'baiduboxapp://swanAPI/aiRequest/rpc/2.0/nlp/v1/lexer_custom': {
        data: {
            status: '0',
            message: '调起成功',
            header: '',
            data: {
                body: '{"text":"百度是一家高科技公司","items":[{"byte_length":4,"byte_offset":0,"formal":"","item":\
                "百度","ne":"ORG","pos":"","uri":"","loc_details":[],"basic_words":["百度"]},{"byte_length":2,\
                "byte_offset":4,"formal":"","item":"是","ne":"","pos":"v","uri":"","loc_details":[],"basic_words":\
                ["是"]},{"byte_length":4,"byte_offset":6,"formal":"","item":"一家","ne":"","pos":"m","uri":"",\
                "loc_details":[],"basic_words":["一","家"]},{"byte_length":6,"byte_offset":10,"formal":"","item":\
                "高科技","ne":"","pos":"n","uri":"","loc_details":[],"basic_words":["高","科技"]},{"byte_length":4,\
                "byte_offset":16,"formal":"","item":"公司","ne":"","pos":"n","uri":"","loc_details":[],\
                "basic_words":["公司"]}]}'
            }
        }
    },
    'baiduboxapp://swanAPI/voiceRecognize/start': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        },
        onStart: {
            status: '0',
            message: '调起成功',
            data: {}
        },
        onRecognize: {
            status: '0',
            message: '调起成功',
            data: {}
        },
        onFinish: {
            status: '0',
            message: '调起成功',
            data: {}
        },
        onError: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/voiceRecognize/stop': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/voiceRecognize/cancel': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    }
};