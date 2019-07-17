/**
 * @file spec/picker
 * @author liuxiaoming02@baidu.com
 * @description boxjs/openPicker
 *              boxjs/openMultiPicker, boxjs/updateMultiPicker
 *              boxjs/opendatePicker, boxjs/getRegionData
 */
import {boxjs} from '../../src/boxjs';
const expect = require('chai').expect;
import $ from '../../src/utils/_core';
const system = $.isIOS ? 'ios' : 'android';

describe('API【openPicker】测试', () => {
    it(`【boxjs.openPicker】${system}端正常调用`, done => {
        boxjs.ui.open({
            name: 'utils-picker',
            data: {
                title: 'picker title',
                array: ['星期一', '星期二', '星期三'],
                current: 'picker test'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            done();
        });
    });

    it(`【boxjs.openPicker】${system}端正常调用，不传参数`, done => {
        boxjs.ui.open({name: 'utils-picker'}).then(res => {
            expect(res).to.be.a('object');
            done();
        });
    });

    it(`【boxjs.openPicker】${system}端异常调用，title类型错误`, done => {
        boxjs.ui.open({
            name: 'utils-picker',
            data: {
                title: ['picker title'],
                array: ['星期一', '星期二', '星期三'],
                current: 'picker test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]title type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.openPicker】${system}端异常调用，array类型错误`, done => {
        boxjs.ui.open({
            name: 'utils-picker',
            data: {
                title: 'picker title',
                array: '星期一',
                current: 'picker test'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]array type error. must be "Array"');
            done();
        });
    });

    it(`【boxjs.openPicker】${system}端异常调用，current类型错误`, done => {
        boxjs.ui.open({
            name: 'utils-picker',
            data: {
                title: 'picker title',
                array: ['星期一', '星期二', '星期三'],
                current: ['3']
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]current type error. must be "string"');
            done();
        });
    });
});

describe('API【openMultiPicker】测试', () => {
    it(`【boxjs.openMultiPicker】${system}端正常调用`, done => {
        boxjs.ui.open({
            name: 'utils-multiPicker',
            data: {
                title: 'multipicker title',
                array: ['星期一', '星期二', '星期三'],
                current: [1, 1, 1],
                cb: 'cb'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            done();
        })
    });

    it(`【boxjs.openMultiPicker】${system}端正常调用，不传参数`, done => {
        boxjs.ui.open({name: 'utils-multiPicker'}).then(res => {
            expect(res).to.be.a('object');
            done();
        });
    });

    it(`【boxjs.openMultiPicker】${system}端异常调用，title类型错误`, done => {
        boxjs.ui.open({
            name: 'utils-multiPicker',
            data: {
                title: ['multipicker title'],
                array: ['星期一', '星期二', '星期三'],
                current: [1, 1, 1],
                cb: 'cb'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]title type error. must be "string"');
            done();
        });
    });

    it(`【boxjs.openMultiPicker】${system}端异常调用，array类型错误`, done => {
        boxjs.ui.open({
            name: 'utils-multiPicker',
            data: {
                title: 'multipicker title',
                array: '星期一',
                current: [1, 1, 1],
                cb: 'cb'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]array type error. must be "Array"');
            done();
        });
    });

    it(`【boxjs.openMultiPicker】${system}端异常调用，current类型错误`, done => {
        boxjs.ui.open({
            name: 'utils-multiPicker',
            data: {
                title: 'multipicker title',
                array: ['星期一', '星期二', '星期三'],
                current: '1, 1',
                cb: 'cb'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]current type error. must be "Array"');
            done();
        });
    });

    it(`【boxjs.openMultiPicker】${system}端异常调用，cb类型错误`, done => {
        boxjs.ui.open({
            name: 'utils-multiPicker',
            data: {
                title: 'multipicker title',
                array: ['星期一', '星期二', '星期三'],
                current: [1, 1, 1],
                cb: {}
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]cb type error. must be "string"');
            done();
        })
    });
});

describe('API【updateMultiPicker】测试', () => {
    it(`【boxjs.updateMultiPicker】${system}端正常调用`, done => {
        boxjs.ui.update({
            name: 'utils-multiPicker',
            data: {
                column: '2',
                array: ['蛔虫'],
                current: '0'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            done();
        })
    });

    it(`【boxjs.updateMultiPicker】${system}端正常调用，不传参数`, done => {
        boxjs.ui.update({name: 'utils-multiPicker'}).then(res => {
            expect(res).to.be.a('object');
            done();
        })
    });

    it(`【boxjs.updateMultiPicker】${system}端异常调用，column类型错误`, done => {
        boxjs.ui.update({
            name: 'utils-multiPicker',
            data: {
                column: ['2', '3'],
                array: ['蛔虫'],
                current: '0'
            }
        }).catch( err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]column type error. must be "string"');
            done();
        })
    });

    it(`【boxjs.updateMultiPicker】${system}端异常调用，array类型错误`, done => {
        boxjs.ui.update({
            name: 'utils-multiPicker',
            data: {
                column: '2',
                array: '蛔虫',
                current: '0'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]array type error. must be "Array"');
            done();
        })
    });

    it(`【boxjs.updateMultiPicker】${system}端异常调用，current类型错误`, done => {
        boxjs.ui.update({
            name: 'utils-multiPicker',
            data: {
                column: '2',
                array: ['蛔虫'],
                current: ['0']
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]current type error. must be "string"');
            done();
        })
    });
});

describe('API【opendatePicker】测试', () => {
    it(`【boxjs.opendatePicker】${system}端正常调用`, done => {
        boxjs.ui.open({
            name: 'swan-datePicker',
            data: {
                start: '1',
                end: '4',
                mode: 'mode',
                value: 'tihuan',
                fields: '22'
            }
        }).then(res => {
            expect(res).to.be.a('object');
            done();
        })
    });

    it(`【boxjs.opendatePicker】${system}端正常调用，不传参数`, done => {
        boxjs.ui.open({name: 'swan-datePicker'}).then(res => {
            expect(res).to.be.a('object');
            done();
        })
    });

    it(`【boxjs.opendatePicker】${system}端异常调用，start类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-datePicker',
            data: {
                start: ['1'],
                end: '4',
                mode: 'mode',
                value: 'tihuan',
                fields: '22'
            }
        }).catch( err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]start type error. must be "string"');
            done();
        })
    });

    it(`【boxjs.opendatePicker】${system}端异常调用，end类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-datePicker',
            data: {
                start: '1',
                end: ['4'],
                mode: 'mode',
                value: 'tihuan',
                fields: '22'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]end type error. must be "string"');
            done();
        })
    });

    it(`【boxjs.opendatePicker】${system}端异常调用，mode类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-datePicker',
            data: {
                start: '1',
                end: '4',
                mode: ['mode'],
                value: 'tihuan',
                fields: '22'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]mode type error. must be "string"');
            done();
        })
    });

    it(`【boxjs.opendatePicker】${system}端异常调用，value类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-datePicker',
            data: {
                start: '1',
                end: '4',
                mode: 'mode',
                value: {},
                fields: '22'
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]value type error. must be "string"');
            done();
        })
    });

    it(`【boxjs.opendatePicker】${system}端异常调用，fields类型错误`, done => {
        boxjs.ui.open({
            name: 'swan-datePicker',
            data: {
                start: '1',
                end: '4',
                mode: 'mode',
                value: 'tihuan',
                fields: ['22']
            }
        }).catch(err => {
            expect(err.message).to.be.equal('[jsNative Argument Error]fields type error. must be "string"');
            done();
        })
    });
});

describe('API【getRegionData】测试', () => {
    it(`【boxjs.getRegionData】${system}端正常调用`, done => {
        boxjs.data.get({name: 'swan-regionData'}).then(res => {
            expect(res).to.be.a('object');
            done();
        });
    });
});

