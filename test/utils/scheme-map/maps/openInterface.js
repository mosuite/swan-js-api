/**
 * @file util/openInterface
 * @author bailonggang
 * @description  开放接口模拟端返回值
 */

export default {
    'baiduboxapp://swanAPI/login': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                code: '510aad0f5676f65ee04e4b4e4f25ba24'
            }
        }
    },
    'baiduboxapp://swanAPI/checkSession': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                errno: 0,
                error: '',
                result: true
            }
        }
    },
    'baiduboxapp://swanAPI/isLoginSync': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                result: true
            }
        }
    },
    'baiduboxapp://swanAPI/authorize': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/getSwanId': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                tipmsg: '',
                request_id: '',
                errno: '',
                errmsg: '',
                data: {
                    swanid: 'SmmMq8vka5vAFf6MAqEkTQ4aWmbStHTNXPdQjN3xSZJTUooDUMHwyf9E64PLcvhTbGBejm9hxMuR',
                    swanid_old: 'S8SdRhhPhmPXJTwDfRCyJhYj7XXSb3VgwBSGgGbtPdruetz3eVsqSkPsQDWZ1W3XesP85bYc2EWmHhRNR88r',
                    swanid_old_signature: 'b42018c6af7358f92b53749880d1f6bb',
                    swanid_signature: 'b7832e0aeac9ccf2980847c31734729b'
                }
            }
        }
    },
    'baiduboxapp://swanAPI/openSetting': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/getSetting': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://callShare': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/chooseAddress': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                userName: 'xxx',
                postalCode: '100001',
                provinceName: '北京市',
                cityName: '海淀区',
                countyName: '海淀区',
                detailInfo: '百度科技园',
                telNumber: '18700000000',
                nationalCode: 'cn'
            }
        }
    },
    'baiduboxapp://swanAPI/chooseInvoiceTitle': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                type: '0',
                title: '百度',
                taxNumber: 'xxxxxx',
                companyAddress: '百度科技园',
                telephone: '18700000000',
                bankName: 'xx银行',
                bankAccount: 'xx'
            }
        }
    },
    'baiduboxapp://swanAPI/openSetting': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/getSetting': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://BDWallet/requestPolymerPayment': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://BDWallet/requestAliPayment': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://BDWallet/requestPayment': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://BDWallet/requestWeChatPayment': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/im/pullMsg': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    }
};