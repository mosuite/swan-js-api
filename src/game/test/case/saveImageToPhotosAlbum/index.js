/**
 * @file file case for apiDemo-ImageToPhotosAlbum
 * @author shixinzhe@baidu.com
 * result: check done [TODO]
 */

let expect = require('chai').expect;
describe.only('saveImageToPhotosAlbum', function () {
    it.skip('正常调用:临时文件路径', function (done) {
        this.timeout(10000);
        swan.saveImageToPhotosAlbum({
            filePath: './images/component_normal.jpg',
            success: res => {
                function catchError() {
                    expect(res).to.be.an('object');
                }
                done(catchError());
            },
            fail: error => done(error)
        });
    });

    it.skip('正常调用:存储文件路径', function (done) {
        this.timeout(10000);
        swan.saveImageToPhotosAlbum({
            filePath: './images/component_normal.jpg',
            success: res => {
                function catchError() {
                    expect(res).to.be.an('object');
                }
                done(catchError());
            },
            fail: error => done(error)
        });
    });


    it('异常调用:参数必填 #filePath is required', function (done) {
        swan.saveImageToPhotosAlbum({
            fail: () => done(),
            success: () => done(that.error.shouldFail)
        });
    });
});