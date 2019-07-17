var fs = require('fs');
var path = require('path');//解析需要遍历的文件夹
var filePath = path.resolve('./maps');


fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径

                var filedir = path.join(filePath, filename);
                fs.readFile(filedir, 'utf-8', function (error, data) {
                    if (/baiduboxapp:\/\/v\d+\//.test(data)) {
                        console.log('data1::',data)
                        var newdata = data.replace(/v\d+\//g, '');
                        console.log("data2:::",newdata)

                        fs.writeFile(filedir, newdata, function(err, d){
                            err && console.log(err)
                        });
                    }

                    
                });
            });
        }
    });