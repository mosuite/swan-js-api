
// /*eslint-disable */
// /**
//  * @file file page for apiDemo
//  * @author wulinfei@baidu.com
//  */

// export default {
//     register() {
//         let that = this;
//         let noop = () => {};

//         // 跳过 依赖canvas组件
//         describe.skip('canvasGetImageData', () => {
//             let canvasId = 'myCanvas'
//             let x = 0;
//             let y = 0;
//             let width = 100;
//             let height = 100;

//             it('正确调用', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     width,
//                     height,
//                     success: res => {
//                         function catchError() {
//                             expect(res).to.be.an('object');
//                             expect(res.width).to.be.a('number');
//                             expect(res.height).to.be.a('number');
//                             expect(res.data).to.be.an('array');
//                         }
//                         done(catchError());
//                     },
//                     fail: err => done(err)
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数必填 #canvasId not required', (done) => {
//                 let params = {
//                     x,
//                     y,
//                     width,
//                     height,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数校验 #canvasId not string', (done) => {
//                 let params = {
//                     canvasId: {},
//                     x,
//                     y,
//                     width,
//                     height,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数必填 #x not required', (done) => {
//                 let params = {
//                     canvasId,
//                     y,
//                     width,
//                     height,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数校验 #x not number', (done) => {
//                 let params = {
//                     canvasId,
//                     x: {},
//                     y,
//                     width,
//                     height,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数必填 #y not required', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     width,
//                     height,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数校验 #y not number', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y: {},
//                     width,
//                     height,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数必填 #width not required', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     height,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数校验 #width not number', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     width: {},
//                     height,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数必填 #height not required', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     width,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数校验 #height not number', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     width,
//                     height: {},
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });
//         },

//         describe.skip('canvasPutImageData', () => {
//             let canvasId = 'myCanvas'
//             let x = 0;
//             let y = 0;
//             let width = 100;
//             let height = 100;
//             let data = new Uint8ClampedArray([255, 0, 0, 1]);

//             it('正确调用', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     width,
//                     height,
//                     data,
//                     success: res => {
//                         function catchError() {
//                             expect(res).to.be.an('object');
//                         }
//                         done(catchError());
//                     },
//                     fail: err => done(err)
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数必填 #canvasId not required', (done) => {
//                 let params = {
//                     x,
//                     y,
//                     width,
//                     height,
//                     data,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数校验 #canvasId not string', (done) => {
//                 let params = {
//                     canvasId: {},
//                     x,
//                     y,
//                     width,
//                     height,
//                     data,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数必填 #x not required', (done) => {
//                 let params = {
//                     canvasId,
//                     y,
//                     width,
//                     height,
//                     data,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasGetImageData(params);
//             });

//             it('异常调用: 参数校验 #x not number', (done) => {
//                 let params = {
//                     canvasId,
//                     x: {},
//                     y,
//                     width,
//                     height,
//                     data,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数必填 #y not required', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     width,
//                     height,
//                     data,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数校验 #y not number', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y: {},
//                     width,
//                     height,
//                     data,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数必填 #width not required', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     height,
//                     data,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数校验 #width not number', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     width: {},
//                     height,
//                     data,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数必填 #height not required', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     width,
//                     data,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数校验 #height not number', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     width,
//                     height: {},
//                     data,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数必填 #data not required', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     width,
//                     height,
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });

//             it('异常调用: 参数校验 #data not array', (done) => {
//                 let params = {
//                     canvasId,
//                     x,
//                     y,
//                     width,
//                     height,
//                     data: {},
//                     success: () => done(that.error.shouldFail),
//                     fail: () => done()
//                 }
//                 swan.canvasPutImageData(params);
//             });
//         }
//     }
// }