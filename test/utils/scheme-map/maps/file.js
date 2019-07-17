/**
 * @file util/file
 * @author bailonggang
 * @description  file相关端能力模拟端返回值
 */

export default {
    'baiduboxapp://swanAPI/file/save': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/file/getInfo': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                size: 100,
                digest: 'xxx'
            }
        }
    },
    'baiduboxapp://swanAPI/file/getSavedFileList': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                errMsg: 'ok',
                fileList: [
                    {
                        filePath: 'xxx',
                        createTime: '1552910931258',
                        size: 1024
                    }
                ]
            }
        }
    },
    'baiduboxapp://swanAPI/file/getSavedFileInfo': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                size: 1024,
                createTime: '1552910931258'
            }
        }
    },
    'baiduboxapp://swanAPI/file/removeSavedFile': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    },
    'baiduboxapp://swanAPI/file/openDocument': {
        data: {
            status: '0',
            message: '调起成功',
            data: {}
        }
    }
};