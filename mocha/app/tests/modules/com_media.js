/*eslint-disable */
/**
 * @file demo page for apiDemo
 * @author wulinfei@baidu.com
 */

export default {
    register() {
        let that = this;
        let noop = () => {};

        let deepCopy = this.deepCopy;
        describe('com_media', function () {
            describe('video-update', function () {
                let globalData = {
                    slaveId: '1',
                    videoId: '1',
                    src: 'https://m.baidu.com',
                    position: {
                        left: '0',
                        top: '0',
                        width: '375',
                        height: '20'
                    },
                    initialTime: 'string',
                    duration: 'string',
                    controls: false,
                    autoplay: false,
                    loop: false,
                    muted: false,
                    objectFit: 'string',
                    poster: 'string'
                };
                it('正常调用: 参数正确', () => {
                    let mediaData = deepCopy(globalData);
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    return boxjs.media.video(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用:参数必填 #slaveId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.slaveId;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #slaveId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.slaveId = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #videoId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.videoId;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #videoId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.videoId = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #src not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.src = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #postion not object', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.position = 1;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #initialTime not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.initialTime = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #duration not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.duration = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #controls not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.controls = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #autoplay not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.autoplay = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #loop not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.loop = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #muted not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.muted = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #objectFit not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.objectFit = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #poster not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.poster = noop
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            describe('video-open', function () {
                let globalData = {
                    slaveId: '1',
                    videoId: 'myVideo',
                    src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
                    position: {
                        left: '0',
                        top: '0',
                        width: '375',
                        height: '20'
                    },
                    initialTime: 'string',
                    duration: 'string',
                    controls: false,
                    autoplay: false,
                    loop: false,
                    muted: false,
                    objectFit: 'string',
                    poster: 'string'
                }
                it('正常调用: 参数正确', () => {
                    let mediaData = deepCopy(globalData);
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    return boxjs.media.video(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用:参数必填 #slaveId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.slaveId;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #videoId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.videoId;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #videoId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.videoId = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #src not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.src = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #position not object', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.position = 234;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #initialTime not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.initialTime = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #duration not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.duration = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #controls not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.controls = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #autoplay not blooean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.autoplay = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #loop not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.loop = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(taht.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #muted not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.muted = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #objectFit not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.objectFit = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #poster not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.poster = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            describe('video-play', () => {
                it('正常调用: 参数正确', () => {
                    let params = {
                        type: 'play',
                        data: {
                            videoId: '1'
                        }
                    };
                    return boxjs.media.video(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用:参数必填 #videoId not required', function (done) {;
                    let params = {
                        type: 'play',
                        data: {}
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #videoId not string', function (done) {
                    let params = {
                        type: 'play',
                        data: {
                            videoId: noop
                        }
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            describe('video-pause', function () {
                it('正常调用: 参数正确', () => {
                    let params = {
                        type: 'pause',
                        data: {
                            videoId: '1'
                        }
                    };
                    return boxjs.media.video(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用:参数必填 #videoId not required', function (done) {;
                    let params = {
                        type: 'pause',
                        data: {}
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #videoId not string', function (done) {
                    let params = {
                        type: 'pause',
                        data: {
                            videoId: []
                        }
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            describe('video-seek', function () {
                it('正常调用: 参数正确', () => {
                    let params = {
                        type: 'seek',
                        data: {
                            videoId: '1',
                            position: '12'
                        }
                    };
                    return boxjs.media.video(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用:参数必填 #videoId not required', function (done) {;
                    let params = {
                        type: 'seek',
                        data: {
                            position: '12'
                        }
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #videoId not string', function (done) {
                    let params = {
                        type: 'seek',
                        data: {
                            videoId: [],
                            position: '12'
                        }
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #postion not required', function (done) {;
                    let params = {
                        type: 'seek',
                        data: {
                            videoId: '12'
                        }
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #position not string', function (done) {
                    let params = {
                        type: 'seek',
                        data: {
                            videoId: '2',
                            position: []
                        }
                    };
                    boxjs.media.video(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            // 用户授权问题
            describe.skip('camera-update<授权问题>', function () {
                let globalData = {
                    slaveId: '1',
                    cameraId: '1',
                    position: {
                        height: 0,
                        left: 0,
                        top: 337,
                        width: 0
                    },
                    devicePosition: 'font',
                    flash: 'on'
                };

                it('正常调用: 参数正确', () => {
                    let mediaData = deepCopy(globalData);
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    return boxjs.media.camera(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用: 参数必填#slaveId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.slaveId;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 类型校验#slaveId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.slaveId = noop
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 参数必填#videoId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.videoId;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 类型校验#videoId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.videoId = noop
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 类型校验#position not object', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.position = 123;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 类型校验#devicePosition not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.devicePosition = noop
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 类型校验#flash not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.flash = noop
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            describe.skip('camera-insert<授权问题>', function () {
                let globalData = {
                    slaveId: '1',
                    cameraId: '1',
                    position: {
                        height: 0,
                        left: 0,
                        top: 337,
                        width: 0
                    },
                    devicePosition: 'font',
                    flash: 'on'
                };

                it('正常调用: 参数正确', () => {
                    let mediaData = deepCopy(globalData);
                    let params = {
                        type: 'insert',
                        data: mediaData
                    };
                    return boxjs.media.camera(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用: 参数必填#slaveId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.slaveId;
                    let params = {
                        type: 'insert',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 类型校验#slaveId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.slaveId = noop
                    let params = {
                        type: 'insert',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 参数必填#videoId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.videoId;
                    let params = {
                        type: 'insert',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 类型校验#videoId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.videoId = noop
                    let params = {
                        type: 'insert',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 类型校验#position not object', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.position = 123;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 类型校验#devicePosition not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.devicePosition = noop
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用: 类型校验#flash not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.flash = noop
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.camera(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });

            describe('live-update<授权问题>', function () {
                let globalData = {
                    slaveId: '1',
                    liveId: '1',
                    src: 'https://m.baidu.com',
                    position: {
                        left: '0',
                        top: '0',
                        width: '375',
                        height: '20'
                    },
                    autoplay: false,
                    muted: true,
                    orientation: 'vertical',
                    objectFit: 'contain',
                    backgroundMute: false,
                    minCache: 1,
                    maxCache: 3
                };
                it('正常调用: 参数正确', () => {
                    let mediaData = deepCopy(globalData);
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    return boxjs.media.live(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用:参数必填 #slaveId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.slaveId;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #slaveId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.slaveId = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #liveId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.liveId;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #videoId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.videoId = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #src not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.src = noop
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #postion not object', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.position = 13456;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #autoplay not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.autoplay = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #muted not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.muted = noop;
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #orientation not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.orientation = noop
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #objectFit not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.objectFit = noop
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #backgroundMute not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.backgroundMute = 'skdf';
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #minCache not number', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.minCache = '234';
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #maxCache not number', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.maxCache = 'wer';
                    let params = {
                        type: 'update',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });
            describe('live-open<授权问题>', function () {
                let globalData = {
                    slaveId: '1',
                    liveId: '1',
                    src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
                    position: {
                        left: '0',
                        top: '0',
                        width: '375',
                        height: '20'
                    },
                    autoplay: false,
                    muted: true,
                    orientation: 'vertical',
                    objectFit: 'contain',
                    backgroundMute: false,
                    minCache: 1,
                    maxCache: 3
                };
                it('正常调用: 参数正确', () => {
                    let mediaData = deepCopy(globalData);
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    return boxjs.media.live(params)
                        .then(res => {
                            expect(res).to.be.an('object');
                            expect(res.errCode).to.not.be.ok;
                        });
                });

                it('异常调用:参数必填 #slaveId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.slaveId;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #slaveId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.slaveId = noop;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:参数必填 #liveId not required', function (done) {
                    let mediaData = deepCopy(globalData);
                    delete mediaData.liveId;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #liveId not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.liveId = noop
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #src not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.src = noop
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #postion not object', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.position = 13456;
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #autoplay not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.autoplay = 'ad';
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #muted not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.muted = 'sdf';
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #orientation not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.orientation = noop
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #objectFit not string', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.objectFit = noop
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #backgroundMute not boolean', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.backgroundMute = 'skdf';
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #minCache not number', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.minCache = '234';
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });

                it('异常调用:类型校验 #maxCache not number', function (done) {
                    let mediaData = deepCopy(globalData);
                    mediaData.maxCache = 'wer';
                    let params = {
                        type: 'open',
                        data: mediaData
                    };
                    boxjs.media.live(params)
                        .then(res => {
                            done(that.error.shouldFail);
                        }).catch(err => {
                            done();
                        });
                });
            });


        })

    }
}