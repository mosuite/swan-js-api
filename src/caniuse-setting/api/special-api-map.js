/**
 * @file special-api-map
 * @description special api contains context
 * @author lijia(lijia30@baidu.com)
 */

// 前端特殊处理包含上下文的复杂API
export const specialAPIMap = {
    createCanvasContext: [],
    canvasContext: [{
        setFillStyle: ['color']
    }, {
        setStrokeStyle: ['color']
    }, {
        setShadow: ['color', 'offsetX', 'offsetY', 'blur']
    }, {
        createLinearGradient: ['x0', 'y0', 'x1', 'y1']
    }, {
        createCircularGradient: ['x', 'y', 'r']
    }, {
        addColorStop: ['stop', 'color']
    }, {
        setLineWidth: ['lineWidth']
    }, {
        setLineCap: ['lineCap']
    }, {
        setLineJoin: ['lineJoin']
    }, {
        setLineDash: ['pattern', 'offset']
    }, {
        setMiterLimit: ['miterLimit']
    }, {
        rect: ['x', 'y', 'width', 'height']
    }, {
        fillRect: ['x', 'y', 'width', 'height']
    }, {
        strokeRect: ['x', 'y', 'width', 'height']
    }, {
        clearRect: ['x', 'y', 'width', 'height']
    }, {
        fill: []
    }, {
        stroke: []
    }, {
        beginPath: []
    }, {
        closePath: []
    }, {
        moveTo: ['x', 'y']
    }, {
        lineTo: ['x', 'y']
    }, {
        arc: ['x', 'y', 'r', 'sAngle', 'eAngle', 'counterclockwise']
    }, {
        bezierCurveTo: ['x', 'y', 'cp1x', 'cp1y', 'cp2x', 'cp2y']
    }, {
        quadraticCurveTo: ['x', 'y', 'cpx', 'cpy']
    }, {
        save: []
    }, {
        restore: []
    }, {
        draw: ['callback']
    }, {
        rotate: ['rotate']
    }, {
        scale: ['scaleWidth', 'scaleHeight']
    }, {
        translate: ['x', 'y']
    }, 'clip', {
        setFontSize: ['fontSize']
    }, {
        fillText: ['text', 'x', 'y', 'maxWidth']
    }, {
        setTextAlign: [{
            'align': ['left', 'center', 'right']
        }]
    }, {
        setTextBaseline: [{
            'textBaseline': ['top', 'bottom', 'middle', 'normal']
        }]
    }, {
        drawImage: ['imageResource', 'dx', 'dy', 'dWidth', 'dHeight', 'sx', 'sy', 'sWidth', 'sHeight']
    }, {
        setGlobalAlpha: ['alpha']
    }, {
        measureText: ['text']
    }, {
        arcTo: ['x1', 'y1', 'x2', 'y2', 'radius']
    }, {
        strokeText: ['text', 'maxWidth', 'x', 'y']
    }, {
        setLineDashOffset: ['value']
    }, {
        createPattern: ['image', 'repetition']
    }, {
        font: [{'value': ['style', 'weight', 'size', 'family']}]
    }, {
        setTransform: ['scaleX', 'scaleY', 'skewX', 'skewY', 'translateX', 'translateY']
    }, {
        bezierCurveTo: ['cp1x', 'cp1y', 'cp2x', 'cp2y', 'x', 'y']
    }, {
        quadraticCurveTo: ['cpx', 'cpy', 'x', 'y']
    }],
    createLivePlayerContext: ['domId'],
    createCameraContext: [],
    createVideoContext: [],
    onSocketOpen: [{
        callback: ['header']
    }],
    onSocketError: ['callback'],
    onSocketMessage: [{
        callback: ['data']
    }],
    onSocketClose: ['callback'],
    SocketTask: [{
        send: ['data', 'success', 'fail', 'complete']
    }, {
        close: ['code', 'reason', 'success', 'fail', 'complete']
    }, {
        onMessage: [{
            callback: ['data']
        }]
    }, {
        onOpen: [{
            callback: ['data']
        }]
    }, {
        onClose: [{
            callback: ['data']
        }]
    },{
        onError: [{
            callback: ['data']
        }]
    }],
    request: [
        {
            object: ['url', 'data', 'header', {
                method: ['OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'CONNECT']
            }, 'dataType', 'success', 'fail', 'complete', {
                responseType: ['text', 'arraybuffer']
            }
            ]},
        {
            success: ['data', 'statusCode', 'header']
        }
    ],
    requestTask: ['abort'],
    downloadTask: [{
        onProgressUpdate: ['progress', 'totalBytesWritten', 'totalBytesExpectedToWrite']
    }],
    uploadTask: [{
        onProgressUpdate: ['progress', 'totalBytesSent', 'totalBytesExpectedToSend']
    }],
    getRecorderManager: [],
    recorderManager: [
        {
            onStart: ['callback']
        },
        {
            onPause: ['callback']
        },
        {
            onStop: [{
                callback: ['tempFilePath']
            }]
        },
        {
            onError: [{
                callback: ['errMsg']
            }]
        }
    ],
    getBackgroundAudioManager: [],
    createInnerAudioContext: [],
    innerAudioContext: ['src', 'startTime', 'autoplay', 'loop', 'duration', 'currentTime',
        'paused', 'obeyMuteSwitch', 'volume', {
            onEnded: ['callback']
        }, {
            onTimeUpdate: ['callback']
        }, {
            onError: ['callback']
        }, {
            onWaiting: ['callback']
        }, {
            onSeeking: ['callback']
        }, {
            onSeeked: ['callback']
        }, {
            offCanplay: ['callback']
        }, {
            offPlay: ['callback']
        }, {
            offCanplay: ['callback']
        }, {
            offPause: ['callback']
        }, {
            offStop: ['callback']
        }, {
            offEnded: ['callback']
        }, {
            offTimeUpdate: ['callback']
        }, {
            offError: ['callback']
        }, {
            offWaiting: ['callback']
        }, {
            offSeeking: ['callback']
        }, {
            offSeeked: ['callback']
        }],
    backgroundAudioManager: ['src', 'startTime', 'duration', 'currentTime',
        'paused', 'title', 'epname', 'singer',
        'coverImgUrl', {
            onCanplay: ['callback']
        }, {
            onPlay: ['callback']
        }, {
            onPause: ['callback']
        }, {
            onStop: ['callback']
        }, {
            onEnded: ['callback']
        }, {
            onTimeUpdate: ['callback']
        }, {
            onError: ['callback']
        }, {
            onWaiting: ['callback']
        }
    ],
    createMapContext: ['mapId'],
    startAccelerometer: [{
        object: ['success', 'fail', 'complete', {
            interval: ['game', 'ui', 'normal']
        }]
    }],
    onUserCaptureScreen:[],
    onAccelerometerChange:  [{
        callback: ['x', 'y', 'z']
    }],
    onCompassChange: [{
        callback: ['direction']
    }],
    getExtConfig:  [{
        object: ['fail', 'complete', {
            success: ['extConfig']
        }]
    }],
    getExtConfigSync:  [{
        return: ['extConfig']
    }],
    setNavigationBarColor: [{
        object: ['frontColor', 'backgroundColor', 'success', 'fail', 'complete', {
            'animation': ['duration', {
                'timingFunc': ['linear', 'easeIn', 'easeOut', 'easeInOut']
            }]
        }]
    }, {
        success: ['errMsg']
    }],
    navigateTo:  [{
        object: ['url', 'success', 'fail', 'complete']
    }],
    redirectTo: [{
        object: ['url', 'success', 'fail', 'complete']
    }],
    reLaunch:  [{
        object: ['url', 'success', 'fail', 'complete']
    }],
    switchTab:  [{
        object: ['url', 'success', 'fail', 'complete']
    }],
    navigateBack: [{
        object: ['delta']
    }],
    createAnimation:  [{
        object: ['duration', {
            timingFunction: ['linear', 'ease', 'ease-in', 'ease-in-out', 'ease-out', 'step-start', 'step-end']
        }, 'delay', 'transformOrigin']
    }],
    animation: ['opacity', 'backgroundColor', 'width', 'height', 'top', 'left',
        'bottom', 'right', 'rotate', 'rotateX', 'rotateY', 'rotateZ',
        'rotate3d', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'scale3d',
        'translate', 'translateX', 'translateY', 'translateZ', 'translate3d',
        'skew', 'skewX', 'skewY', 'matrix', 'matrix3d'
    ],
    onPullDownRefresh: [],
    createIntersectionObserver:  [{
        options: ['thresholds', 'initialRatio', 'selectAll']
    }],
    IntersectionObserver: [{
        'relativeTo': ['left', 'right', 'top', 'bottom']
    }, {
        'relativeToViewport': ['left', 'right', 'top', 'bottom']
    },
        {
            observe: ['intersectionRatio', 'time', {
                intersectionRect: ['left', 'right', 'top', 'bottom']
            }, {
                boundingClientRect: ['left', 'right', 'top', 'bottom']
            }, {
                relativeRect: ['left', 'right', 'top', 'bottom']
            }]
        }, 'disconnect'],
    createSelectorQuery: [],
    selectorQuery: ['in', 'select', 'selectAll', 'selectViewport', 'exec'],
    nodesRef:  ['boundingClientRect', 'scrollOffset', {
        fields: ['id', 'dataset', 'rect', 'size', 'scrollOffset', 'properties', 'computedStyle']
    }, 'exec'],
    isLoginSync: [{
        return: ['isLogin']
    }],
    'Session Key': ['code', 'client_id', 'sk', {
        return: ['openid', 'session_key', 'error', 'error_description']
    }],
    authorize:[{
        object: [{
            scope: ['userInfo', 'userLocation', 'writePhotosAlbum', 'address', 'invoiceTitle', 'record', 'camera']
        }, {
            success: ['errMsg']
        }, 'fail', 'complete']
    }],
    requestPolymerPayment: [{
        object: [{
            bannedChannels: ['Alipay', 'BDWallet', 'WeChat']
        }, {
            orderInfo: ['dealId', 'appKey', 'totalAmount', 'tpOrderId', 'dealTitle', 'rsaSign', 'bizInfo']
        }, 'success', 'fail', 'complete']
    }],
    onShareAppMessage: [{
        object: ['from', 'currentTarget', 'title', 'content', 'imageUrl', 'path', 'success', 'fail', 'complete']
    }],
    getTemplateLibraryList: ['offset', 'count'],
    getTemplateLibraryById: ['id'],
    addTemplate: ['id', 'keyword_id_list'],
    getTemplateList: ['offset', 'count'],
    deleteTemplate: ['template_id'],
    sendTemplateMessage: ['template_id', 'touser', 'data', 'page', 'scene_id', 'scene_type'],
    reportAnalytics:  ['eventName', 'data'],
    getUpdateManager: [],
    updateManager: [{
        onCheckForUpdate: ['hasUpdate']
    }, 'onUpdateReady', 'onUpdateFailed', 'applyUpdate'],
    createARCameraContext: [],
    getVoiceRecognizer: [],



}
