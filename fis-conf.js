/**
 * @file fis-conf.js
 * @author renzhonghua@baidu.com
 */

const deploy = require('./deploy.json');

var date = new Date();
var addZero = function (n) {
    return n >= 10 ? n : '0' + n;
};
var boxjsVersion = date.getFullYear() + '';
boxjsVersion += addZero(date.getMonth() + 1);
boxjsVersion += addZero(date.getDate());
boxjsVersion += addZero(date.getHours());
boxjsVersion += addZero(date.getMinutes());
boxjsVersion += addZero(date.getSeconds());
console.log('编译版本:' + boxjsVersion);

fis.hook('amd');
fis.match('*', {
    release: false
});

fis.set('project.ignore', ['output/**', '.git/**', 'fis-conf.js']);

// ./dist/swan.js的产出
const swanPack = [
    '/node_modules/js-native/index.js',
    '/node_modules/js-native/index.js:deps',
    '/node_modules/js-native/index.js:asyncs',
    '/node_modules/@baidu/events-emitter/dist/index.js',
    '/node_modules/@baidu/events-emitter/dist/index.js:deps',
    '/node_modules/@baidu/events-emitter/dist/index.js:asyncs',
    '/src/boxjs/map/index.js',
    '/src/boxjs/map/index.js:deps',
    '/src/boxjs/map/index.js:asyncs',
    '/src/swan/map/index.js',
    '/src/swan/map/index.js:deps',
    '/src/swan/map/index.js:asyncs',
    '/src/description/index.js',
    '/src/description/index.js:deps',
    '/src/description/index.js:asyncs',
    '/src/boxjs/index.js',
    '/src/boxjs/index.js:deps',
    '/src/boxjs/index.js:asyncs',
    '/src/swan/index.js',
    '/src/swan/index.js:deps',
    '/src/swan/index.js:asyncs',
    '/src/platform/index.js',
    '/src/platform/index.js:deps',
    '/src/platform/index.js:asyncs',
    '/src/invoker/index.js',
    '/src/invoker/index.js:deps',
    '/src/invoker/index.js:asyncs',
    '/src/index.js',
    '/src/index.js:deps',
    '/src/index.js:asyncs'
];

fis
.match('/(src/**).js', {
    rExt: 'js',
    parser: fis.plugin('babel-5.x', {
        optional: ['es7.decorators']
    }, {
        presets: ['es2015', 'stage-0']
    }),
    isMod: true,
    moduleId: '$1',
    release: true
})
.match('/src/index.js', {
    isMod: true,
    moduleId: 'src/index',
    release: true
})
.match('/node_modules/((@baidu/events-emitter/**).js)', {
    isMod: true,
    release: '/$1',
    moduleId: '@baidu/events-emitter'
})
.match('/node_modules/(js-native/index.js)', {
    isMod: true,
    release: '/$1',
    moduleId: 'js-native'
});

fis.media('publish')
    .match('/(src/**).js', {
        rExt: 'js',
        optimizer: fis.plugin('uglify-js', {
            compress: {
                /* eslint-disable fecs-camelcase */
                drop_console: true
                /* eslint-enable fecs-camelcase */
            }
        }),
        parser: fis.plugin('babel-5.x', {
            optional: ['es7.decorators']
        }, {
            presets: ['es2015', 'stage-0']
        }),
        isMod: true,
        moduleId: '$1',
        release: true
    })
    .match('/src/index.js', {
        isMod: true,
        moduleId: 'src/index',
        release: true
    })
    .match('/node_modules/((@baidu/events-emitter/**).js)', {
        isMod: true,
        release: '/$1',
        moduleId: '@baidu/events-emitter'
    });

const test = {
    release: {
        modJs: {
            isMod: true,
            parser: fis.plugin('babel-5.x', {}, {
                presets: ['es2015', 'stage-0']
            }),
            moduleId: '$1'
        },
        noCompile: {
            useCompile: false
        }
    },
    deploy: {
        box: {
            release: './box/$1'
        },
        remoteDeploy: {
            deploy: fis.plugin('local-deliver', {
                to: deploy.deployPath
            }),
            release: './$1'
        },
        //小程序的启动文件被端写死了由core进入
        remoteCore:{
            deploy: fis.plugin('local-deliver', {
                to: deploy.corePath
            }),
            release: './$1'
        }
    }
};


const mocha = {
    pack: {
        packager: fis.plugin('deps-pack', {
            'package/test/core/slaves/lib.js': [
                '/mocha/core/slaves/lib/**.js',
                '/node_modules/@baidu/events-emitter/dist/index.js'
            ].concat(swanPack),
            'package/test/core/slaves/lib.css': [
                '/mocha/core/slaves/lib/**.css'
            ],
            'package/test/core/slaves/js-native.js': [
                '/node_modules/js-native/index.js'
            ],
            'package/test/app/tests/index.js': [
                '/mocha/app/tests/modules/*',
                '/mocha/app/tests/index.js',
                '/mocha/app/tests/index.js:deps',
                '/mocha/app/tests/index.js:asyncs'
            ]
        })
    },
    deploy: {
        mocha: {
            isMod: false,
            release: './mocha/$1'
        }
    }
};

fis.match('::package', {
        packager: fis.plugin('deps-pack', {
            'package/lib/swan.js': swanPack
        })
    }).match('package/lib/(swan).js', {
        release: './dist/$1'
    });


// 单测生成小程序结构在./box/中
fis.media('test')
    .match('::package', mocha.pack)
    .match('mocha/(**)', mocha.deploy.mocha)
    .match('mocha/(core/**.html)', test.release.noCompile)
    .match('mocha/(core/**.html)', test.deploy.box)
    .match('package/test/(core/**)', test.deploy.box)
    .match('mocha/app/(**).js', test.release.modJs)
    .match('mocha/(app/*/*)', test.deploy.box)
    .match('mocha/(app/**.json)', test.deploy.box)
    .match('package/test/(app/**)', test.deploy.box)
    .match('::package', {
        packager: fis.plugin('deps-pack', {
            'package/lib/swan.js': swanPack
        })
    }).match('package/lib/(swan).js', {
        release: './dist/$1'
    });

// 直接替换swanCatch，适合在模拟器中跑测试报告
fis.media('testremote')
    .match('::package', mocha.pack)
    .match('mocha/(**)', mocha.deploy.mocha)
    .match('mocha/core/**.html', test.release.noCompile)
    .match('mocha/core/(**.html)', test.deploy.remoteCore)
    .match('package/test/core/(**)', test.deploy.remoteCore)
    .match('mocha/app/(**).js', test.release.modJs)
    .match('mocha/app/(*/*)', test.deploy.remoteDeploy)
    .match('mocha/app/(**.json)', test.deploy.remoteDeploy)
    .match('package/test/app/(**)', test.deploy.remoteDeploy);



fis.media('prod').match('*.js', {
    optimizer: fis.plugin('uglify-js')
});


const benchmark = {
    pack: {
        packager: fis.plugin('deps-pack', {
            'package/test/core/slaves/lib.js': [
                '/benchmark/core/slaves/lib/lodash.js',
                '/benchmark/core/slaves/lib/platform.js',
                '/benchmark/core/slaves/lib/benchmark.js',
                '/benchmark/core/slaves/lib/require.js',
                '/node_modules/@baidu/events-emitter/dist/index.js'
            ].concat(swanPack),
            'package/test/app/tests/index.js': [
                '/benchmark/app/tests/modules/*',
                '/benchmark/app/tests/index.js',
                '/benchmark/app/tests/index.js:deps',
                '/benchmark/app/tests/index.js:asyncs'
            ]
        })
    },
    deploy: {
        benchmark: {
            isMod: false,
            release: './benchmark/$1'
        }
    }
};

// 直接替换swanCatch，适合在模拟器中跑测试报告
fis.media('benchremote')
    .match('::package', benchmark.pack)
    .match('benchmark/(**)', benchmark.deploy.benchmark)
    .match('benchmark/core/**.html', test.release.noCompile)
    .match('benchmark/core/(**.html)', test.deploy.remoteCore)
    .match('package/test/core/(**)', test.deploy.remoteCore)
    .match('benchmark/app/(**).js', test.release.modJs)
    .match('benchmark/app/(*/*)', test.deploy.remoteDeploy)
    .match('benchmark/app/(**.json)', test.deploy.remoteDeploy)
    .match('package/test/app/(**)', test.deploy.remoteDeploy)
    .match('::package', {
        packager: fis.plugin('deps-pack', {
            'package/lib/swan.js': swanPack
        })
    }).match('package/lib/(swan).js', {
        release: './dist/$1'
    });


// 单测生成小程序结构在./box/中
fis.media('bench')
    .match('::package', benchmark.pack)
    .match('benchmark/(**)', benchmark.deploy.benchmark)
    .match('benchmark/(core/**.html)', test.release.noCompile)
    .match('benchmark/(core/**.html)', test.deploy.box)
    .match('package/test/(core/**)', test.deploy.box)
    .match('benchmark/app/(**).js', test.release.modJs)
    .match('benchmark/(app/*/*)', test.deploy.box)
    .match('benchmark/(app/**.json)', test.deploy.box)
    .match('package/test/(app/**)', test.deploy.box)
    .match('::package', {
        packager: fis.plugin('deps-pack', {
            'package/lib/swan.js': swanPack
        })
    }).match('package/lib/(swan).js', {
        release: './dist/$1'
    });
