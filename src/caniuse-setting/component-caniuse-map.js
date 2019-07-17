/**
 * @file component-caniuse-map
 * @description can i use map of component
 * @author lijia(lijia30@baidu.com)
 */

export const componentMap = {
    view: ['hover-class', 'hover-stop-propagation', 'hover-start-time', 'hover-stay-time'],
    'scroll-view': ['scroll-x', 'scroll-y', 'upper-threshold', 'lower-threshold', 'scroll-top',
        'scroll-left', 'scroll-into-view', 'scroll-with-animation', 'bindscrolltoupper',
        'bindscrolltolower', 'bindscroll'
    ],
    swiper: ['indicator-color', 'indicator-active-color', 'indicator-dots', 'autoplay',
        'current', 'interval', 'duration', 'circular', 'vertical', 'bindchange',
        'current-item-id', 'previous-margin', 'next-margin', 'display-multiple-items', 'bindanimationfinish'
    ],
    'swiper-item': ['item-id'],
    'movable-area': ['scale-area'],
    'movable-view': ['direction',
        'inertia', 'out-of-bounds', 'x', 'y', 'damping', 'friction', 'disabled', 'scale', 'scale-min',
        'scale-max', 'scale-value', 'animation', 'bindchange', 'bindscale', 'htouchmove', 'vtouchmove'
    ],
    'cover-view': [],
    'cover-image': ['src', 'bindload', 'binderror'],
    icon: [{
        type: ['success', 'success_no_circle', 'info', 'warn', 'waiting',
            'cancel', 'download', 'search', 'clear', 'personal', 'setting', 'top',
            'close', 'checkboxSelected', 'radioSelected', 'radioUnselect'
        ]
    }, 'size', 'color'],
    text: ['selectable', {
        space: ['ensp', 'emsp', 'nbsp']
    }],
    'rich-text': [{
        nodes: ['name', 'attrs', 'children']
    }],
    progress: ['percent', 'show-info', 'stroke-width', 'color', 'activeColor',
        'backgroundColor', 'active', 'active-mode'
    ],
    'animation-view': ['path', 'loop', 'autoplay', 'action', 'hidden'],
    button: [
        {
            size: ['default', 'mini']
        },
        {
            type: ['primary', 'default', 'warn']
        },
        {
            'open-type': ['share', 'getUserInfo', 'getPhoneNumber', 'contact', 'openSetting']
        },
        'form-type', 'plain', 'hover-stop-propagation',
        'hover-class', 'hover-start-time', 'hover-stay-time', 'bindgetuserinfo', 'bindgetphonenumber',
        'bindcontact', 'bindopensetting'
    ],
    form: ['bindsubmit', 'bindreset'],
    'checkbox-group': ['bindchange'],
    checkbox: ['value', 'disabled', 'checked', 'color', 'report-submit'],
    input: ['value',
        {
            type: ['text', 'number', 'digit']
        }, 'password', 'placeholder', 'placeholder-style', 'placeholder-class', 'disabled',
        'maxlength', 'cursor-spacing', 'confirm-type', 'focus', 'bindinput', 'bindfocus',
        'bindblur', 'bindconfirm',
        {
            'confirm-type': ['send', 'search', 'next', 'go', 'done']
        }, 'confirm-hold', 'cursor', 'selection-start', 'selection-end', 'adjust-position'
    ],
    label: ['for'],
    'picker-view': ['value', 'indicator-style', 'bindchange', 'indicator-class',
        'mask-style', 'mask-class'],
    picker: [
        {
            mode: [{
                selector: ['range', 'range-key', 'value', 'bindchange', 'disabled', 'title', 'bindcancel']
            },
            {
                date: ['value', 'start', 'end', 'bindchange', 'disabled', 'bindcancel', {
                    fields: ['year', 'month', 'day']
                }]
            },
            {
                time: ['value', 'start', 'end', 'bindchange', 'disabled', 'bindcancel']
            },
            {
                multiSelector: ['range', 'range-key', 'value', 'bindcolumnchange', 'bindchange',
                    'disabled', 'title', 'bindcancel'
                ]
            },
            {
                region: ['value', 'custom-item', 'bindchange', 'disabled', 'title', 'bindcancel']
            }]
        }
    ],
    'radio-group': ['bindchange'],
    radio: ['value', 'checked', 'disabled', 'color'],

    slider: ['min', 'max', 'step', 'disabled', 'value', 'activeColor',
        'backgroundColor', 'show-value', 'bindchange', 'bindchanging', 'block-size', 'block-color'
    ],

    switch: ['checked', {
            type: ['switch', 'checkbox']
        }, 'color', 'bindchange', 'disabled'
    ],
    textarea: ['value', 'placeholder', 'placeholder-style', 'placeholder-class', 'disabled', 'maxlength',
        'bindfocus', 'focus', 'auto-height', 'fixed', 'cursor-spacing', 'bindfocus', 'bindblur',
        'bindlinechange', 'bindinput', 'bindconfirm', 'show-confirm-bar', 'selection-start',
        'selection-end', 'adjust-position', 'cursor', 'auto-focus'
    ],

    navigator: ['url',
        {
            'open-type': ['navigate', 'redirect', 'switchTab', 'reLaunch', 'navigateBack']
        }, 'delta', 'hover-class', 'hover-stop-propagation', 'hover-start-time', 'hover-stay-time'
    ],
    audio: ['id', 'src', 'loop', 'controls', 'poster', 'name', 'author',
        'binderror', 'bindplay', 'bindpause', 'bindtimeupdate', 'bindended'
    ],
    image: ['src',
        {
            mode: ['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix',
            'top', 'bottom', 'center', 'left', 'right', 'top left',
            'top right', 'bottom left', 'bottom right']
        }, 'lazy-load', 'binderror', 'bindload'
    ],
    video: ['src', 'initial-time', 'duration', 'controls', 'autoplay', 'loop', 'muted', 'objectFit',
        'poster', 'bindplay', 'bindpause', 'bindended', 'bindtimeupdate', 'bindfullscreenchange', 'page-gesture',
        'show-progress', 'show-fullscreen-btn', 'enable-progress-gesture', 'danmu-list', 'danmu-btn',
        'enable-danmu', 'show-play-btn', 'show-center-play-btn', 'bindwaiting', 'binderror'
    ],
    camera: ['device-position', 'flash', 'bindstop', 'binderror'],
    'live-player': ['id', 'src', 'autoplay', 'muted', 'object-fit', 'background-mute', 'min-cache',
        'max-cache', 'bindstatechange', 'bindnetstatus', 'orientation', 'bindfullscreenchange'
    ],
    map: ['longitude', 'latitude', 'scale', {
        markers: ['id', 'latitude', 'longitude', 'title', 'iconPath', 'rotate',
            'alpha', 'width', 'height', {
                callout: ['content', 'color', 'fontSize', 'borderRadius', 'bgColor',
                    'padding', 'display', {
                        textAlign: ['left', 'right', 'center']
                    }
                ]
            }, {
                label: ['content', 'color', 'fontSize', 'x', 'y', 'borderWidth',
                    'borderColor', 'borderRadius', 'bgColor', 'padding', {
                        textAlign: ['left', 'right', 'center']
                    }
                ]
            }, 'anchor'
        ]
    },
        {
            circles: ['latitude', 'longitude', 'color', 'fillColor', 'radius', 'strokeWidth']
        },
        {
            controls: ['id', 'position', 'iconPath', 'clickable']
        },
        {
            position: ['left', 'top', 'width', 'height']
        },
        'include-points', 'show-location', 'bindmarkertap', 'bindcontroltap', 'bindregionchange',
        'bindcallouttap', 'bindtap',
        {
            polyline: ['points', 'color', 'width', 'dottedLine', 'arrowLine', 'borderColor',
                'borderWidth', 'arrowIconPath'
            ]
        },
        'bindupdated'
    ],
    canvas: ['canvas-id', 'disable-scroll', 'bindtouchstart', 'bindtouchmove',
        'bindtouchend', 'bindtouchcancel', 'bindlongtap', 'binderror'
    ],
    'web-view': ['src', 'bindmessage'],
    'open-data': [{
        type: ['userNickName', 'userAvatarUrl', 'userGender']
    }]
};
