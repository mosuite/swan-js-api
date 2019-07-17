/**
 * @file file case for apiDemo-request
 * @author yanghongxue@baidu.com
 * result: check done
 */

describe('request', function () {
    const that = this;
    const fileUrl = 'https://sfc.baidu.com/shopping/nianhuo/bimai';
    const feedurl = 'https://feed.baidu.com/feed/api/wise/feedlist?sid=125135_108266_115652_120126_125175_118895_118875_118851_118833_118804_107319_123970_125019_125006_117330_124978_117431_122789_125084_124752_124619_125311_123984_124560_124109_125171_114820_124525_124938_125041_124770_124030_110085_124868_123290_120659&ssid=9b01d1eed0a1d1a931333134a831&from=0&pu=sz%25401320_2001%252Cta%2540iphone_1_11.0_3_604&qid=3424678754&clickDownload=0&tabId=1&page=3&sessionId=15342190247288&crids=&startlistnum=37&rfs=7&loadeditems=newsThree%2CtypeLargePics%2CecomAds&_=1534219058152&callback=jsonp9';
    it('正常调用: 返回参数校验', function (done) {
        this.timeout(15000);
        swan.request({
            url: 'https://tcdn1.cqll.jiulingwan.com/baidugame/resource/config/config_68a4bde3.bin?v2',
            method: 'GET',
            responseType: 'arraybuffer',
            success: res => {
                assert(typeof res === 'object');
                assert.ok(res.data);
                assert(typeof res.statusCode === 'number');
                assert(typeof res.header === 'object');
                done();
            },
            fail: done
        });
    });
    it('正常调用: 返回参数为arraybuffer校验', function (done) {
        this.timeout(15000);
        swan.request({
            url: 'https://tcdn1.cqll.jiulingwan.com/baidugame/resource/config/config_68a4bde3.bin',
            dataType: 'json',
            responseType: 'arraybuffer',
            success: res => {
                console.log('== dataType-data:', Object.prototype.toString.call(res.data));
                assert(typeof res === 'object');
                assert.ok(res.data);
                assert(typeof res.statusCode === 'number');
                assert(typeof res.header === 'object');
                done();
            },
            fail: (err) => done(new Error('取消请求后，请求仍然成功:', err))
        });
    });
    it('正常调用: 返回参数为大写ArrayBuffer校验', function (done) {
        this.timeout(15000);
        swan.request({
            url: 'https://tcdn1.cqll.jiulingwan.com/baidugame/resource/config/config_68a4bde3.bin',
            dataType: 'json',
            responseType: 'ArrayBuffer',
            success: res => {
                console.log('== dataType-data:', Object.prototype.toString.call(res.data));
                assert(typeof res === 'object');
                assert.ok(res.data);
                assert(typeof res.statusCode === 'number');
                assert(typeof res.header === 'object');
                done();
            },
            fail: (err) => done(new Error('取消请求后，请求仍然成功:', err))
        });
    });
    it('requestTask.abort 正常调用', function (done) {
        this.timeout(15000);
        let task = swan.request({
            url: feedurl,
            success: res => done(new Error('取消请求后，请求仍然成功:' + res)),
            fail: () => done()
        });
        setTimeout(() => {
            task.abort();
        }, 200);
    });
    it('正常调用:参数类型 #data is object', function (done) {
        this.timeout(10000);
        let task = swan.request({
            url: fileUrl,
            data: {
                tabname: '美食酒水'
            },
            success: () => done(),
            fail: error => done(new Error('正常调用却失败，data is object'))
        });
    });
    it('正常调用:参数类型 #data is string', function (done) {
        this.timeout(10000);
        swan.request({
            url: fileUrl,
            data: 'data must be object',
            success: () => done(),
            fail: () => done(new Error('正常调用却失败，data is string'))
        });
    });
    it('正常调用:参数类型兼容 #method、dataType、header is number', function (done) {
        this.timeout(10000);
        swan.request({
            url: fileUrl,
            method: 123,
            dataType: 123,
            header: 123,
            data: 'data must be object',
            success: () => done(),
            fail: () => done(new Error('正常调用却失败，data is string'))
        });
    });
    it('异常调用:参数必填 #url not required', function (done) {
        swan.request({
            data: {
                tabname: '美食酒水'
            },
            fail: () => done(),
            success: () => done(new Error('无url 却成功调用'))
        });
    });
    it('异常调用:参数类型 #url must be string', function (done) {
        swan.request({
            url: {},
            data: {
                tabname: '美食酒水'
            },
            fail: () => done(),
            success: () => done(new Error('url is object, 却成功调用'))
        });
    });
});