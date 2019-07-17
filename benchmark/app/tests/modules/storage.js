/*eslint-disable */
/**
 * @file file page for apiDemo
 * @author sunweinan@baidu.com
 */

import onek from 'onek';

export default {
    register() {
        let that = this;
        let getId = () => {
            var id = Math.random() * 1000;   
            return parseInt(id, 10); 
        };


        swan.clearStorage();


        let previewImageBench = new Benchmark('previewImage', {
            defer: true,
            minSamples: 900,
            fn: function(deferred) {
                swan.previewImage({
                    urls: [
                        'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png',
                        'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png',
                        'http://www.51testing.com/templates/default/images/jtwz_a.jpg'
                    ],
                    source: 'swan',
                    current: 'http://www.51testing.com/templates/default/images/jtwz_a.jpg'
                });
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                //requestBench.run({ async: true });
            }
        })
        //.run({ async: true });


        let requestBench = new Benchmark('request', {
            defer: true,
            minSamples: 900,
            fn: function(deferred) {
                swan.request({
                    url: 'http://sfc.baidu.com/shopping/nianhuo/bimai',
                    method: 'POST',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    dataType: 'json',
                    data: {
                        tabname: '美食酒水'
                    },
                    success: function (res) {
                        deferred.resolve(res);
                    },
                    fail: function (err) {
                        deferred.resolve(err);
                    }
                });
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);

                //previewImageBench.run({ async: true });
            }
        })
        //.run({ async: true });


        let getNetworkTypeBench = new Benchmark('getNetworkType', {
            defer: true,
            minSamples: 900,
            fn: function(deferred) {
                swan.getNetworkType({
                    success: function (res) {
                        deferred.resolve(res);
                    },
                    fail: function (err) {
                        deferred.resolve(err);
                    }
                });
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                requestBench.run({ async: true });
            }
        })
        //.run({ async: true });

        let getSystemInfoBench = new Benchmark('getSystemInfo', {
            defer: true,
            minSamples: 1300,
            fn: function(deferred) {
                swan.getSystemInfo({
                    success: function (res) {
                        deferred.resolve(res);
                    },
                    fail: function (err) {
                        deferred.resolve(err);
                    }
                });
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                getNetworkTypeBench.run({ async: true });
            }
        })
        //.run({ async: true });


        let openinputBench = new Benchmark('openinput', {
            defer: true,
            minSamples: 900,
            fn: function(deferred) {
                boxjs.ui.open({
                    name: 'swan-input',
                    data: {
                        id: getId(),
                        cb: 'openinput',
                        type: 'text',
                        value: 'valuevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevalu' + getId()
                    }
                })
                .then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.resolve(err);
                });
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                updateinputBench.run({ async: true });
            }
        })
        //.run({ async: true });


        let updateinputBench = new Benchmark('updateinput', {
            defer: true,
            minSamples: 900,
            fn: function(deferred) {
                boxjs.ui.update({
                    name: 'swan-input',
                    data: {
                        id: getId(),
                        type: 'text',
                        value: '1111valuevaluevaluevaluevaluevaluevalevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevalu' + getId()
                    }
                })
                .then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.resolve(err);
                });
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                closeinputBench.run();
            }
        })
        //.run({ async: true });

        let closeinputBench = new Benchmark('closeinput', {
            defer: true,
            minSamples: 1100,
            fn: function(deferred) {
                boxjs.ui.close({
                    name: 'swan-input',
                    data: {
                        id: getId()
                    }
                })
                .then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.resolve(err);
                });
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                //webviewInsertBench.run();
            }
        })
        //.run({ async: true });


        let webviewInsertBench = new Benchmark('webviewInsert', {
            defer: true,
            minSamples: 1000,
            fn: function(deferred) {
                boxjs.webView.insert({
                    src: 'https://m.baidu.com',
                    slaveId: getId() + '',
                    parentId: '1',
                    viewId: '1'
                })
                .then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.resolve(err);
                });
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                //webviewUpdateBench.run();
            }
        })
        //.run({ async: true });

        let webviewUpdateBench = new Benchmark('webviewUpdate', {
            defer: true,
            minSamples: 1000,
            fn: function(deferred) {
                boxjs.webView.update({
                    src: 'https://baijiahao.baidu.com',
                    slaveId: getId() + '',
                    parentId: '1',
                    viewId: '1'
                })
                .then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.resolve(err);
                });
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                //webviewRemoveBench.run({ async: true });
            }
        })
        //.run({ async: true });

        let webviewRemoveBench = new Benchmark('webviewRemove', {
            defer: true,
            minSamples: 1000,
            fn: function(deferred) {
                boxjs.webView.remove({
                    slaveId: getId() + '',
                    parentId: '1',
                    viewId: '1'
                })
                .then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.resolve(err);
                });
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                //closespringbackBench.run({ async: true });
            }
        })
        //.run({ async: true });


        let closespringbackBench = new Benchmark('closespringback', {
            defer: true,
            minSamples: 1000,
            fn: function(deferred) {
                boxjs.ui.close({
                    name: 'swan-springback'
                 }).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.resolve(err);
                });
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                //openspringbackBench.run({ async: true });
            }
        })
        //.run({ async: true });

        let openspringbackBench = new Benchmark('openspringback', {
            defer: true,
            minSamples: 1000,
            fn: function(deferred) {
                boxjs.ui.open({
                    name: 'swan-springback'
                 }).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.resolve(err);
                });
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                //slaveIdSyncBench.run();
            }
        })
        //.run({ async: true });

        

        let postMessageBench = new Benchmark('postMessage', {
            defer: true,
            minSamples: 1000,
            fn: function(deferred) {
                boxjs.webView.postMessage({
                    webviewid: 'master',
                    message: 'message' + onek.data
                }).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.resolve(err);
                });
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                getSystemInfoBench.run({ async: true });
            }
        })
        //.run({ async: true });



        let clearStorageBench = new Benchmark('clearStorage', {
            defer: true,
            minSamples: 700,
            fn: function(deferred) {
                swan.clearStorage({
                    success: function (res) {
                        deferred.resolve(res);
                    },
                    fail: function (err) {
                        deferred.resolve(err);
                    }
                });
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
            }
        })
        //.run({ async: true });


        let removeStorageBench = new Benchmark('removeStorage', {
            defer: true,
            minSamples: 700,
            fn: function(deferred) {
                swan.removeStorage({
                    key: 'key' + getId(),
                    success: function (res) {
                        deferred.resolve(res);
                    },
                    fail: function (err) {
                        deferred.resolve(err);
                    }
                });
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                clearStorageBench.run({ async: true });
            }
        })
        //.run({ async: true });


        let getStorageInfoBench = new Benchmark('getStorageInfo', {
            defer: true,
            minSamples: 700,
            fn: function(deferred) {
                swan.getStorageInfo({
                    success: function (res) {
                        deferred.resolve(res);
                    },
                    fail: function (err) {
                        deferred.resolve(err);
                    }
                });
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                removeStorageBench.run({ async: true });
            }
        })
        //.run({ async: true });


        let getStorageBench = new Benchmark('getStorage', {
            defer: true,
            minSamples: 700,
            fn: function(deferred) {
                swan.getStorage({
                    key: 'key' + getId(),
                    success: function (res) {
                        deferred.resolve(res);
                    },
                    fail: function (err) {
                        deferred.resolve(err);
                    }
                });
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                postMessageBench.run({ async: true });
            }
        })
        //.run({ async: true });


        let setStorageBench = new Benchmark('setStorage', {
            defer: true,
            minSamples: 1000,
            fn: function(deferred) {
                swan.setStorage({
                    key: 'key' + getId(),
                    data: 'value' + getId(),
                    success: function (res) {
                        deferred.resolve(res);
                    },
                    fail: function (err) {
                        deferred.resolve(err);
                    }
                });
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                getStorageBench.run({ async: true });
            }
        })
        //.run({ async: true });





// -------------------------------------sync-------------------------------------------------------
        
        
        let clearStorageSyncBench = new Benchmark('clearStorageSync', {
            minSamples: 500,
            fn: function() {
                swan.clearStorageSync();
            },
            // onCycle: function(event) {
            //     console.log(String(event.target))
            // },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                //getSystemInfoSyncBench.run();
            }
        })
        //.run();


        let removeStorageSyncBench = new Benchmark('removeStorageSync', {
            minSamples: 500,
            fn: function() {
                let key = 'key' + getId();
                swan.removeStorageSync(key);
            },
            // onCycle: function(event) {
            //     console.log(String(event.target))
            // },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                clearStorageSyncBench.run();
            }
        })
        //.run();


        
        let getStorageInfoSyncBench = new Benchmark('getStorageInfoSync', {
            minSamples: 500,
            fn: function() {
                swan.getStorageInfoSync();
            },
            // onCycle: function(event) {
            //     console.log(String(event.target))
            // },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                removeStorageSyncBench.run();
            }
        })
        //.run();


        let getStorageSyncBench = new Benchmark('getStorageSync', {
            minSamples: 500,
            fn: function() {
                let key = 'key' + getId();
                swan.getStorageSync(key);
            },
            // onCycle: function(event) {
            //     console.log(String(event.target))
            // },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                getStorageInfoSyncBench.run();
            }
        })
        //.run();


        let setStorageSyncBench = new Benchmark('setStorageSync', {
            minSamples: 600,
            fn: function() {
                let key = 'key' + getId();
                let value = 'data' + getId();
                swan.setStorageSync(key, value);
            },
            // onCycle: function(event) {
            //     console.log(String(event.target))
            // },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                removeStorageSyncBench.run();
            }
        })
        //.run();


        let getSystemInfoSyncBench = new Benchmark('getSystemInfoSync', {
            minSamples: 800,
            fn: function() {
                swan.getSystemInfoSync();
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                //getAppinfoSyncBench.run();
            }
        })
        //.run();


        let getAppinfoSyncBench = new Benchmark('getAppinfoSync', {
            minSamples: 800,
            fn: function() {
                boxjs.data.get({name: 'swan-appInfoSync'});
            },
            onCycle: function(event) {
                console.log(String(event.target))
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
                getSystemInfoSyncBench.run();
            }
        })
        .run();


        let slaveIdSyncBench = new Benchmark('getSlaveIdSync', {
            minSamples: 800,
            fn: function() {
                boxjs.data.get({name: 'swan-slaveIdSync'});
            },
            onComplete: function() {
                let node = document.createElement('p');
                node.innerHTML = this.name + ':::' + this.stats.mean;
                document.getElementById('bench').appendChild(node);
            }
        })
        //.run();

    }
}