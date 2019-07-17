/**
 * @file util/scheme-map
 * @author lijia30@baidu.com
 * @description  端能力scheme与模拟端返回映射关系
 */

import {callbackRes} from '../../constant';

export default {
    'baiduboxapp://swanAPI/request': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                "header": {
                    "Content-Encoding": "gzip",
                    "Set-Cookie": "uid=rBAKHVyI2PiWiQk+BMWdAg==; expires=Thu, 12-Mar-20 10:18:32 GMT; path=/,NSC_my_yjo_xfc_puifs=ffffffffaf18140c45525d5f4f58455e445a4a423660;expires=Wed, 13-Mar-2019 11:33:22 GMT;path=/;secure;httponly",
                    "Server": "nginx",
                    "Cache-Control": "no-store",
                    "turbonet-tcp": "26640",
                    "turbonet-header": "226",
                    "turbonet-send": "96",
                    "turbonet-address-list": "223.202.87.200",
                    "turbonet-ssl": "22581",
                    "turbonet-cached": "0",
                    "turbonet-ttfb": "34603",
                    "turbonet-protocol": "http/1.1",
                    "Date": "Wed, 13 Mar 2019 10:18:32 GMT",
                    "Connection": "keep-alive",
                    "turbonet-dns": "4857",
                    "Transfer-Encoding": "chunked",
                    "Access-Control-Allow-Credentials": "true",
                    "turbonet-total-log": "",
                    "Content-Type": "application/json",
                    "turbonet-resolve-type": "7",
                    "X-ME-IS-XIN": "d1601022",
                    "turbonet-body": "1615",
                    "turbonet-socket-reused": "0"
                },
                "statusCode": 200,
                "data": {
                    "message": "操作成功",
                    "data": {
                        "tools_icon": [{
                            "title": "买车商城",
                            "type": 1,
                            "img_url": "http://c2.xinstatic.com/f4/20180809/1445/5b6be31ae4c37980537.png"
                        }, {
                            "title": "一成购",
                            "type": 2,
                            "img_url": "http://c2.xinstatic.com/f4/20180809/1445/5b6be31ad68ff589023.png"
                        }, {
                            "title": "超值好车",
                            "type": 4,
                            "img_url": "http://c2.xinstatic.com/f4/20180809/1445/5b6be31ad765a907991.png"
                        }, {
                            "title": "3天无理由",
                            "type": 5,
                            "img_url": "http://c2.xinstatic.com/f4/20180809/1445/5b6be31a96194208686.png"
                        }],
                        "price_list": [{
                            "title": "5万以下",
                            "pricemin": 0,
                            "pricemax": 5
                        }, {
                            "title": "5-8万",
                            "pricemin": 5,
                            "pricemax": 8
                        }, {
                            "title": "8-10万",
                            "pricemin": 8,
                            "pricemax": 10
                        }, {
                            "title": "10-20万",
                            "pricemin": 10,
                            "pricemax": 20
                        }],
                        "recom_text_list": [{
                            "type": 1,
                            "text": "SUV"
                        }, {
                            "type": 2,
                            "text": "MPV"
                        }, {
                            "type": 3,
                            "text": "三厢轿车"
                        }, {
                            "type": 4,
                            "text": "两厢轿车"
                        }],
                        "brand_list": [{
                            "brandid": 84,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_84.png",
                            "brandname": "大众"
                        }, {
                            "brandid": 89,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_89.png",
                            "brandname": "丰田"
                        }, {
                            "brandid": 59,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_59.png",
                            "brandname": "本田"
                        }, {
                            "brandid": 62,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_62.png",
                            "brandname": "奥迪"
                        }, {
                            "brandid": 38,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_38.png",
                            "brandname": "宝马"
                        }, {
                            "brandid": 47,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_47.png",
                            "brandname": "奔驰"
                        }, {
                            "brandid": 34,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_34.png",
                            "brandname": "别克"
                        }, {
                            "brandid": 15,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_15.png",
                            "brandname": "日产"
                        }],
                        "brand_publicity": [{
                            "type": 1,
                            "img_url": "http://s6.xinstatic.com/m/img/app/px1c.png",
                            "target_url": "http://m.xin.com/service/?from=app"
                        }, {
                            "type": 2,
                            "img_url": "http://s6.xinstatic.com/m/img/app/px2c.png"
                        }],
                        "banner_list": [{
                            "is_need_jump": 0,
                            "link_to_url": "https://m.xin.com/shop?from=wechat",
                            "title": "优信网上商城服务介绍",
                            "img_url": "http://c1.xinstatic.com/f3/20180717/1911/5b4dceddd9980148474.jpg"
                        }, {
                            "is_need_jump": 0,
                            "link_to_url": "https://h5.xin.com/app/purchaseintro?from=wechat",
                            "title": "一成购介绍",
                            "img_url": "http://c1.xinstatic.com/f3/20180717/1912/5b4dcf0982e8d378561.jpg"
                        }]
                    },
                    "code": 2
                }
            }
        },
        arrayBufferData: {
            "status": "0",
            "message": "调起成功",
            "data": "%7B%22header%22:%7B%22Content-Encoding%22:%22gzip%22,%22Set-Cookie%22:%22uid=rBAKHFyI6GnBE1LUBPswAg==;%20expires=Thu,%2012-Mar-20%2011:24:25%20GMT;%20path=%5C\/,NSC_my_yjo_xfc_puifs=ffffffffaf18140d45525d5f4f58455e445a4a423660;expires=Wed,%2013-Mar-2019%2012:39:15%20GMT;path=%5C\/;secure;httponly%22,%22Server%22:%22nginx%22,%22Cache-Control%22:%22no-store%22,%22turbonet-tcp%22:%2223060%22,%22turbonet-header%22:%22113%22,%22turbonet-send%22:%2274%22,%22turbonet-address-list%22:%22223.202.87.200%22,%22turbonet-ssl%22:%2217946%22,%22turbonet-cached%22:%220%22,%22turbonet-ttfb%22:%2231896%22,%22turbonet-protocol%22:%22http%5C\/1.1%22,%22Date%22:%22Wed,%2013%20Mar%202019%2011:24:25%20GMT%22,%22Connection%22:%22keep-alive%22,%22turbonet-dns%22:%224906%22,%22Transfer-Encoding%22:%22chunked%22,%22Access-Control-Allow-Credentials%22:%22true%22,%22turbonet-total-log%22:%22%22,%22Content-Type%22:%22application%5C\/json%22,%22turbonet-resolve-type%22:%227%22,%22X-ME-IS-XIN%22:%22d1601021%22,%22turbonet-body%22:%22275%22,%22turbonet-socket-reused%22:%220%22%7D,%22statusCode%22:200,%22data%22:%22eyJjb2RlIjoyLCJtZXNzYWdlIjoiXHU2NGNkXHU0ZjVjXHU2MjEwXHU1MjlmIiwiZGF0YSI6eyJiYW5uZXJfbGlzdCI6W3siaW1nX3VybCI6Imh0dHA6XC9cL2MxLnhpbnN0YXRpYy5jb21cL2YzXC8yMDE4MDcxN1wvMTkxMVwvNWI0ZGNlZGRkOTk4MDE0ODQ3NC5qcGciLCJpc19uZWVkX2p1bXAiOjAsImxpbmtfdG9fdXJsIjoiaHR0cHM6XC9cL20ueGluLmNvbVwvc2hvcD9mcm9tPXdlY2hhdCIsInRpdGxlIjoiXHU0ZjE4XHU0ZmUxXHU3ZjUxXHU0ZTBhXHU1NTQ2XHU1N2NlXHU2NzBkXHU1MmExXHU0ZWNiXHU3ZWNkIn0seyJpbWdfdXJsIjoiaHR0cDpcL1wvYzEueGluc3RhdGljLmNvbVwvZjNcLzIwMTgwNzE3XC8xOTEyXC81YjRkY2YwOTgyZThkMzc4NTYxLmpwZyIsImlzX25lZWRfanVtcCI6MCwibGlua190b191cmwiOiJodHRwczpcL1wvaDUueGluLmNvbVwvYXBwXC9wdXJjaGFzZWludHJvP2Zyb209d2VjaGF0IiwidGl0bGUiOiJcdTRlMDBcdTYyMTBcdThkMmRcdTRlY2JcdTdlY2QifV0sInRvb2xzX2ljb24iOlt7InRpdGxlIjoiXHU0ZTcwXHU4ZjY2XHU1NTQ2XHU1N2NlIiwidHlwZSI6MSwiaW1nX3VybCI6Imh0dHA6XC9cL2MyLnhpbnN0YXRpYy5jb21cL2Y0XC8yMDE4MDgwOVwvMTQ0NVwvNWI2YmUzMWFlNGMzNzk4MDUzNy5wbmcifSx7InRpdGxlIjoiXHU1MjA2XHU2NzFmXHU4ZDJkIiwidHlwZSI6MywiaW1nX3VybCI6Imh0dHA6XC9cL2MyLnhpbnN0YXRpYy5jb21cL2Y0XC8yMDE4MDgwOVwvMTQ0NVwvNWI2YmUzMWFkNjhmZjU4OTAyMy5wbmcifSx7InRpdGxlIjoiXHU4ZDg1XHU1MDNjXHU1OTdkXHU4ZjY2IiwidHlwZSI6NCwiaW1nX3VybCI6Imh0dHA6XC9cL2MyLnhpbnN0YXRpYy5jb21cL2Y0XC8yMDE4MDgwOVwvMTQ0NVwvNWI2YmUzMWFkNzY1YTkwNzk5MS5wbmcifSx7InRpdGxlIjoiXHU0ZWNhXHU2NWU1XHU2NWIwXHU0ZTBhIiwidHlwZSI6NiwiaW1nX3VybCI6Imh0dHA6XC9cL2M0LnhpbnN0YXRpYy5jb21cL2Y0XC8yMDE4MDgyMVwvMTc0MlwvNWI3YmRlNjk4MDJlMTk2NDYwNy5wbmcifV0sInByaWNlX2xpc3QiOlt7InRpdGxlIjoiNVx1NGUwN1x1NGVlNVx1NGUwYiIsInByaWNlbWluIjowLCJwcmljZW1heCI6NX0seyJ0aXRsZSI6IjUtOFx1NGUwNyIsInByaWNlbWluIjo1LCJwcmljZW1heCI6OH0seyJ0aXRsZSI6IjgtMTBcdTRlMDciLCJwcmljZW1pbiI6OCwicHJpY2VtYXgiOjEwfSx7InRpdGxlIjoiMTAtMjBcdTRlMDciLCJwcmljZW1pbiI6MTAsInByaWNlbWF4IjoyMH1dLCJyZWNvbV90ZXh0X2xpc3QiOlt7InRleHQiOiJTVVYiLCJ0eXBlIjoxfSx7InRleHQiOiJNUFYiLCJ0eXBlIjoyfSx7InRleHQiOiJcdTRlMDlcdTUzYTJcdThmN2ZcdThmNjYiLCJ0eXBlIjozfSx7InRleHQiOiJcdTRlMjRcdTUzYTJcdThmN2ZcdThmNjYiLCJ0eXBlIjo0fV0sImJyYW5kX2xpc3QiOlt7ImJyYW5kaWQiOjg0LCJicmFuZG5hbWUiOiJcdTU5MjdcdTRmMTciLCJicmFuZGltZyI6Imh0dHA6XC9cL3MxLnhpbnN0YXRpYy5jb21cL3hpblwvaW1hZ2VzXC9icmFuZC0xMDBcL2JfODQucG5nIn0seyJicmFuZGlkIjo4OSwiYnJhbmRuYW1lIjoiXHU0ZTMwXHU3NTMwIiwiYnJhbmRpbWciOiJodHRwOlwvXC9zMS54aW5zdGF0aWMuY29tXC94aW5cL2ltYWdlc1wvYnJhbmQtMTAwXC9iXzg5LnBuZyJ9LHsiYnJhbmRpZCI6NTksImJyYW5kbmFtZSI6Ilx1NjcyY1x1NzUzMCIsImJyYW5kaW1nIjoiaHR0cDpcL1wvczEueGluc3RhdGljLmNvbVwveGluXC9pbWFnZXNcL2JyYW5kLTEwMFwvYl81OS5wbmcifSx7ImJyYW5kaWQiOjYyLCJicmFuZG5hbWUiOiJcdTU5NjVcdThmZWEiLCJicmFuZGltZyI6Imh0dHA6XC9cL3MxLnhpbnN0YXRpYy5jb21cL3hpblwvaW1hZ2VzXC9icmFuZC0xMDBcL2JfNjIucG5nIn0seyJicmFuZGlkIjozOCwiYnJhbmRuYW1lIjoiXHU1YjlkXHU5YTZjIiwiYnJhbmRpbWciOiJodHRwOlwvXC9zMS54aW5zdGF0aWMuY29tXC94aW5cL2ltYWdlc1wvYnJhbmQtMTAwXC9iXzM4LnBuZyJ9LHsiYnJhbmRpZCI6NDcsImJyYW5kbmFtZSI6Ilx1NTk1NFx1OWE3MCIsImJyYW5kaW1nIjoiaHR0cDpcL1wvczEueGluc3RhdGljLmNvbVwveGluXC9pbWFnZXNcL2JyYW5kLTEwMFwvYl80Ny5wbmcifSx7ImJyYW5kaWQiOjM0LCJicmFuZG5hbWUiOiJcdTUyMmJcdTUxNGIiLCJicmFuZGltZyI6Imh0dHA6XC9cL3MxLnhpbnN0YXRpYy5jb21cL3hpblwvaW1hZ2VzXC9icmFuZC0xMDBcL2JfMzQucG5nIn0seyJicmFuZGlkIjoxNSwiYnJhbmRuYW1lIjoiXHU2NWU1XHU0ZWE3IiwiYnJhbmRpbWciOiJodHRwOlwvXC9zMS54aW5zdGF0aWMuY29tXC94aW5cL2ltYWdlc1wvYnJhbmQtMTAwXC9iXzE1LnBuZyJ9XSwiYnJhbmRfcHVibGljaXR5IjpbeyJ0eXBlIjoxLCJpbWdfdXJsIjoiaHR0cDpcL1wvczYueGluc3RhdGljLmNvbVwvbVwvaW1nXC9hcHBcL3B4MWMucG5nIiwidGFyZ2V0X3VybCI6Imh0dHA6XC9cL20ueGluLmNvbVwvc2VydmljZVwvP2Zyb209YXBwIn0seyJ0eXBlIjoyLCJpbWdfdXJsIjoiaHR0cDpcL1wvczYueGluc3RhdGljLmNvbVwvbVwvaW1nXC9hcHBcL3B4MmMucG5nIn1dfX0=%22%7D"
        }
    },
    'baiduboxapp://swanAPI/adRequest': {
        data: {
            status: '0',
            message: '调起成功',
            data: {
                "header": {
                    "Content-Encoding": "gzip",
                    "Set-Cookie": "uid=rBAKHVyI2PiWiQk+BMWdAg==; expires=Thu, 12-Mar-20 10:18:32 GMT; path=/,NSC_my_yjo_xfc_puifs=ffffffffaf18140c45525d5f4f58455e445a4a423660;expires=Wed, 13-Mar-2019 11:33:22 GMT;path=/;secure;httponly",
                    "Server": "nginx",
                    "Cache-Control": "no-store",
                    "turbonet-tcp": "26640",
                    "turbonet-header": "226",
                    "turbonet-send": "96",
                    "turbonet-address-list": "223.202.87.200",
                    "turbonet-ssl": "22581",
                    "turbonet-cached": "0",
                    "turbonet-ttfb": "34603",
                    "turbonet-protocol": "http/1.1",
                    "Date": "Wed, 13 Mar 2019 10:18:32 GMT",
                    "Connection": "keep-alive",
                    "turbonet-dns": "4857",
                    "Transfer-Encoding": "chunked",
                    "Access-Control-Allow-Credentials": "true",
                    "turbonet-total-log": "",
                    "Content-Type": "application/json",
                    "turbonet-resolve-type": "7",
                    "X-ME-IS-XIN": "d1601022",
                    "turbonet-body": "1615",
                    "turbonet-socket-reused": "0"
                },
                "statusCode": 200,
                "data": {
                    "message": "操作成功",
                    "data": {
                        "tools_icon": [{
                            "title": "买车商城",
                            "type": 1,
                            "img_url": "http://c2.xinstatic.com/f4/20180809/1445/5b6be31ae4c37980537.png"
                        }, {
                            "title": "一成购",
                            "type": 2,
                            "img_url": "http://c2.xinstatic.com/f4/20180809/1445/5b6be31ad68ff589023.png"
                        }, {
                            "title": "超值好车",
                            "type": 4,
                            "img_url": "http://c2.xinstatic.com/f4/20180809/1445/5b6be31ad765a907991.png"
                        }, {
                            "title": "3天无理由",
                            "type": 5,
                            "img_url": "http://c2.xinstatic.com/f4/20180809/1445/5b6be31a96194208686.png"
                        }],
                        "price_list": [{
                            "title": "5万以下",
                            "pricemin": 0,
                            "pricemax": 5
                        }, {
                            "title": "5-8万",
                            "pricemin": 5,
                            "pricemax": 8
                        }, {
                            "title": "8-10万",
                            "pricemin": 8,
                            "pricemax": 10
                        }, {
                            "title": "10-20万",
                            "pricemin": 10,
                            "pricemax": 20
                        }],
                        "recom_text_list": [{
                            "type": 1,
                            "text": "SUV"
                        }, {
                            "type": 2,
                            "text": "MPV"
                        }, {
                            "type": 3,
                            "text": "三厢轿车"
                        }, {
                            "type": 4,
                            "text": "两厢轿车"
                        }],
                        "brand_list": [{
                            "brandid": 84,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_84.png",
                            "brandname": "大众"
                        }, {
                            "brandid": 89,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_89.png",
                            "brandname": "丰田"
                        }, {
                            "brandid": 59,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_59.png",
                            "brandname": "本田"
                        }, {
                            "brandid": 62,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_62.png",
                            "brandname": "奥迪"
                        }, {
                            "brandid": 38,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_38.png",
                            "brandname": "宝马"
                        }, {
                            "brandid": 47,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_47.png",
                            "brandname": "奔驰"
                        }, {
                            "brandid": 34,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_34.png",
                            "brandname": "别克"
                        }, {
                            "brandid": 15,
                            "brandimg": "http://s1.xinstatic.com/xin/images/brand-100/b_15.png",
                            "brandname": "日产"
                        }],
                        "brand_publicity": [{
                            "type": 1,
                            "img_url": "http://s6.xinstatic.com/m/img/app/px1c.png",
                            "target_url": "http://m.xin.com/service/?from=app"
                        }, {
                            "type": 2,
                            "img_url": "http://s6.xinstatic.com/m/img/app/px2c.png"
                        }],
                        "banner_list": [{
                            "is_need_jump": 0,
                            "link_to_url": "https://m.xin.com/shop?from=wechat",
                            "title": "优信网上商城服务介绍",
                            "img_url": "http://c1.xinstatic.com/f3/20180717/1911/5b4dceddd9980148474.jpg"
                        }, {
                            "is_need_jump": 0,
                            "link_to_url": "https://h5.xin.com/app/purchaseintro?from=wechat",
                            "title": "一成购介绍",
                            "img_url": "http://c1.xinstatic.com/f3/20180717/1912/5b4dcf0982e8d378561.jpg"
                        }]
                    },
                    "code": 2
                }
            }
        },
        arrayBufferData: {
            "status": "0",
            "message": "调起成功",
            "data": "%7B%22header%22:%7B%22Content-Encoding%22:%22gzip%22,%22Set-Cookie%22:%22uid=rBAKHFyI6GnBE1LUBPswAg==;%20expires=Thu,%2012-Mar-20%2011:24:25%20GMT;%20path=%5C\/,NSC_my_yjo_xfc_puifs=ffffffffaf18140d45525d5f4f58455e445a4a423660;expires=Wed,%2013-Mar-2019%2012:39:15%20GMT;path=%5C\/;secure;httponly%22,%22Server%22:%22nginx%22,%22Cache-Control%22:%22no-store%22,%22turbonet-tcp%22:%2223060%22,%22turbonet-header%22:%22113%22,%22turbonet-send%22:%2274%22,%22turbonet-address-list%22:%22223.202.87.200%22,%22turbonet-ssl%22:%2217946%22,%22turbonet-cached%22:%220%22,%22turbonet-ttfb%22:%2231896%22,%22turbonet-protocol%22:%22http%5C\/1.1%22,%22Date%22:%22Wed,%2013%20Mar%202019%2011:24:25%20GMT%22,%22Connection%22:%22keep-alive%22,%22turbonet-dns%22:%224906%22,%22Transfer-Encoding%22:%22chunked%22,%22Access-Control-Allow-Credentials%22:%22true%22,%22turbonet-total-log%22:%22%22,%22Content-Type%22:%22application%5C\/json%22,%22turbonet-resolve-type%22:%227%22,%22X-ME-IS-XIN%22:%22d1601021%22,%22turbonet-body%22:%22275%22,%22turbonet-socket-reused%22:%220%22%7D,%22statusCode%22:200,%22data%22:%22eyJjb2RlIjoyLCJtZXNzYWdlIjoiXHU2NGNkXHU0ZjVjXHU2MjEwXHU1MjlmIiwiZGF0YSI6eyJiYW5uZXJfbGlzdCI6W3siaW1nX3VybCI6Imh0dHA6XC9cL2MxLnhpbnN0YXRpYy5jb21cL2YzXC8yMDE4MDcxN1wvMTkxMVwvNWI0ZGNlZGRkOTk4MDE0ODQ3NC5qcGciLCJpc19uZWVkX2p1bXAiOjAsImxpbmtfdG9fdXJsIjoiaHR0cHM6XC9cL20ueGluLmNvbVwvc2hvcD9mcm9tPXdlY2hhdCIsInRpdGxlIjoiXHU0ZjE4XHU0ZmUxXHU3ZjUxXHU0ZTBhXHU1NTQ2XHU1N2NlXHU2NzBkXHU1MmExXHU0ZWNiXHU3ZWNkIn0seyJpbWdfdXJsIjoiaHR0cDpcL1wvYzEueGluc3RhdGljLmNvbVwvZjNcLzIwMTgwNzE3XC8xOTEyXC81YjRkY2YwOTgyZThkMzc4NTYxLmpwZyIsImlzX25lZWRfanVtcCI6MCwibGlua190b191cmwiOiJodHRwczpcL1wvaDUueGluLmNvbVwvYXBwXC9wdXJjaGFzZWludHJvP2Zyb209d2VjaGF0IiwidGl0bGUiOiJcdTRlMDBcdTYyMTBcdThkMmRcdTRlY2JcdTdlY2QifV0sInRvb2xzX2ljb24iOlt7InRpdGxlIjoiXHU0ZTcwXHU4ZjY2XHU1NTQ2XHU1N2NlIiwidHlwZSI6MSwiaW1nX3VybCI6Imh0dHA6XC9cL2MyLnhpbnN0YXRpYy5jb21cL2Y0XC8yMDE4MDgwOVwvMTQ0NVwvNWI2YmUzMWFlNGMzNzk4MDUzNy5wbmcifSx7InRpdGxlIjoiXHU1MjA2XHU2NzFmXHU4ZDJkIiwidHlwZSI6MywiaW1nX3VybCI6Imh0dHA6XC9cL2MyLnhpbnN0YXRpYy5jb21cL2Y0XC8yMDE4MDgwOVwvMTQ0NVwvNWI2YmUzMWFkNjhmZjU4OTAyMy5wbmcifSx7InRpdGxlIjoiXHU4ZDg1XHU1MDNjXHU1OTdkXHU4ZjY2IiwidHlwZSI6NCwiaW1nX3VybCI6Imh0dHA6XC9cL2MyLnhpbnN0YXRpYy5jb21cL2Y0XC8yMDE4MDgwOVwvMTQ0NVwvNWI2YmUzMWFkNzY1YTkwNzk5MS5wbmcifSx7InRpdGxlIjoiXHU0ZWNhXHU2NWU1XHU2NWIwXHU0ZTBhIiwidHlwZSI6NiwiaW1nX3VybCI6Imh0dHA6XC9cL2M0LnhpbnN0YXRpYy5jb21cL2Y0XC8yMDE4MDgyMVwvMTc0MlwvNWI3YmRlNjk4MDJlMTk2NDYwNy5wbmcifV0sInByaWNlX2xpc3QiOlt7InRpdGxlIjoiNVx1NGUwN1x1NGVlNVx1NGUwYiIsInByaWNlbWluIjowLCJwcmljZW1heCI6NX0seyJ0aXRsZSI6IjUtOFx1NGUwNyIsInByaWNlbWluIjo1LCJwcmljZW1heCI6OH0seyJ0aXRsZSI6IjgtMTBcdTRlMDciLCJwcmljZW1pbiI6OCwicHJpY2VtYXgiOjEwfSx7InRpdGxlIjoiMTAtMjBcdTRlMDciLCJwcmljZW1pbiI6MTAsInByaWNlbWF4IjoyMH1dLCJyZWNvbV90ZXh0X2xpc3QiOlt7InRleHQiOiJTVVYiLCJ0eXBlIjoxfSx7InRleHQiOiJNUFYiLCJ0eXBlIjoyfSx7InRleHQiOiJcdTRlMDlcdTUzYTJcdThmN2ZcdThmNjYiLCJ0eXBlIjozfSx7InRleHQiOiJcdTRlMjRcdTUzYTJcdThmN2ZcdThmNjYiLCJ0eXBlIjo0fV0sImJyYW5kX2xpc3QiOlt7ImJyYW5kaWQiOjg0LCJicmFuZG5hbWUiOiJcdTU5MjdcdTRmMTciLCJicmFuZGltZyI6Imh0dHA6XC9cL3MxLnhpbnN0YXRpYy5jb21cL3hpblwvaW1hZ2VzXC9icmFuZC0xMDBcL2JfODQucG5nIn0seyJicmFuZGlkIjo4OSwiYnJhbmRuYW1lIjoiXHU0ZTMwXHU3NTMwIiwiYnJhbmRpbWciOiJodHRwOlwvXC9zMS54aW5zdGF0aWMuY29tXC94aW5cL2ltYWdlc1wvYnJhbmQtMTAwXC9iXzg5LnBuZyJ9LHsiYnJhbmRpZCI6NTksImJyYW5kbmFtZSI6Ilx1NjcyY1x1NzUzMCIsImJyYW5kaW1nIjoiaHR0cDpcL1wvczEueGluc3RhdGljLmNvbVwveGluXC9pbWFnZXNcL2JyYW5kLTEwMFwvYl81OS5wbmcifSx7ImJyYW5kaWQiOjYyLCJicmFuZG5hbWUiOiJcdTU5NjVcdThmZWEiLCJicmFuZGltZyI6Imh0dHA6XC9cL3MxLnhpbnN0YXRpYy5jb21cL3hpblwvaW1hZ2VzXC9icmFuZC0xMDBcL2JfNjIucG5nIn0seyJicmFuZGlkIjozOCwiYnJhbmRuYW1lIjoiXHU1YjlkXHU5YTZjIiwiYnJhbmRpbWciOiJodHRwOlwvXC9zMS54aW5zdGF0aWMuY29tXC94aW5cL2ltYWdlc1wvYnJhbmQtMTAwXC9iXzM4LnBuZyJ9LHsiYnJhbmRpZCI6NDcsImJyYW5kbmFtZSI6Ilx1NTk1NFx1OWE3MCIsImJyYW5kaW1nIjoiaHR0cDpcL1wvczEueGluc3RhdGljLmNvbVwveGluXC9pbWFnZXNcL2JyYW5kLTEwMFwvYl80Ny5wbmcifSx7ImJyYW5kaWQiOjM0LCJicmFuZG5hbWUiOiJcdTUyMmJcdTUxNGIiLCJicmFuZGltZyI6Imh0dHA6XC9cL3MxLnhpbnN0YXRpYy5jb21cL3hpblwvaW1hZ2VzXC9icmFuZC0xMDBcL2JfMzQucG5nIn0seyJicmFuZGlkIjoxNSwiYnJhbmRuYW1lIjoiXHU2NWU1XHU0ZWE3IiwiYnJhbmRpbWciOiJodHRwOlwvXC9zMS54aW5zdGF0aWMuY29tXC94aW5cL2ltYWdlc1wvYnJhbmQtMTAwXC9iXzE1LnBuZyJ9XSwiYnJhbmRfcHVibGljaXR5IjpbeyJ0eXBlIjoxLCJpbWdfdXJsIjoiaHR0cDpcL1wvczYueGluc3RhdGljLmNvbVwvbVwvaW1nXC9hcHBcL3B4MWMucG5nIiwidGFyZ2V0X3VybCI6Imh0dHA6XC9cL20ueGluLmNvbVwvc2VydmljZVwvP2Zyb209YXBwIn0seyJ0eXBlIjoyLCJpbWdfdXJsIjoiaHR0cDpcL1wvczYueGluc3RhdGljLmNvbVwvbVwvaW1nXC9hcHBcL3B4MmMucG5nIn1dfX0=%22%7D"
        }
    },
    'baiduboxapp://swanAPI/cancelRequest': {
        data: callbackRes
    },
    'baiduboxapp://swanAPI/webSocket/close': {
        data: callbackRes,
        onCloseData: {
            status: "0",
            message: "websocket close"
        }

    },
    'baiduboxapp://swanAPI/webSocket/send': {
        data: callbackRes,
        onMessageData: {
            status: "0",
            message: "websocket open success",
            data: {
                data: 'test',
                dataType: 'arrayBuffer'
            }
        },
        onErrorData: {
            status: "0",
            message: "websocket error",
            data: {
                data: 'err'
            }
        }

    },
    'baiduboxapp://swanAPI/webSocket/connect':{
        data: {
            status: "0",
            message: "调起成功",
            data: {
                errno: "0",
                task: {
                    id: "203bf1ebdfcfb391d412a7ca0a0ef540"
                }
            }
        },
        noConnectData: {
            status: "0",
            message: "调起成功",
            data: {
                errno: "1",
            }
        },
        onOpenData: {
            status: "0",
            message: "websocket open success",
            data: {
                "header": {
                    "Sec-WebSocket-Accept": "sBUQO0WkB7MN4TlSbBypvhSwgIo=",
                    "Upgrade": "websocket",
                    "Connection": "Upgrade",
                    "Server": "Kaazing Gateway",
                    "Date": "Thu, 14 Mar 2019 08:09:26 GMT"
                }
            }
        },
        onMessageData: {
            status: "0",
            message: "websocket open success",
            data: {
                data: 'test',
                dataType: 'arrayBuffer'
            }
        }
    },
    'baiduboxapp://swanAPI/downloadFile': {
        data: {
            status: 0,
            message: "调起成功",
            data: {
                statusCode: 200,
                tempFilePath: 'bdfile://tmp_b952308097828e772329d0ff3c9466f1.html'
            }
        },
        progressData: {
            status: 0,
                message: 'progress',
            data: {
                progress: 11,
                totalBytesWritten: 122,
                totalBytesExpectedToWrite: 233

            }
        }
    },
    'baiduboxapp://swanAPI/uploadFile': {
        data: {
            status: 0,
            message: "调起成功",
            data: {
                statusCode: 200,
                data: {
                    errno: 111,
                    errMsg: '未登录'
                }
            }
        },
        progressData: {
            status: 0,
            message: 'progress',
            data: {
                progress: 11,
                totalBytesSent: 122,
                totalBytesExpectedToSend: 233

            }
        }
    },
    'baiduboxapp://swanAPI/cancelRequest': {
        data: {
            status: 0,
            message: "调起成功"
        },
    },
}