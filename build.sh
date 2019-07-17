currentPath=`pwd`;
receivezip=./receivezip

rm -rf dist
rm -rf output
mkdir output
mkdir dist

#非使用中，这个的结果蜜汁尴尬。
if [ "$1" = "fis" ]; then
    rm -rf ./dist
    rm -rf ./output
    fis3 release -d ./output
    cp -rf ./output/src/* ./dist/
    echo '\n============== 已生成dist文件 ==============\n'

# 更换为线上使用
elif [ "$1" = "" ]; then
    npm install --registry https://registry.npm.taobao.org
    rm -rf ./dist;
    rm -rf ./output;
    npm run build;

    mkdir -p ./output;
    cp -rf ./dist ./output;
    cp package.json ./output;
    cp .npmrc ./output;
    cp tools/removeScript.js ./output;
    cd ./output;
    zip -r box.zip ./*;
    rm -rf ./dist;
    rm -rf package.json;

#原实际上线使用了这个，不建议继续使用
elif [ "$1" = "publish" ]; then

    npm install --registry https://registry.npm.taobao.org

    fis3 release publish -d ./output
    cp -rf ./output/src/* ./dist/

    cd ./output
    rm -rf ./dist
    rm -rf ./@baidu
    mkdir -p ./dist
    mv ./src/* ./dist
    cp ../package.json ./
    cp ../.npmrc ./
    cp ../tools/removeScript.js ./
    rm -rf ./src
    zip -r box.zip ./*
    rm -rf ./dist
    rm -rf package.json

elif [ "$1" = "test" ]; then
    # 把swan-api生成小程序box，等待agile的回调。全部流程接入后再强制开启
    export PATH=/home/fis/node/v6/bin:$PATH;
    npm install --always-auth=false

    fis3 release test -d ./output
    echo '\n============== 已产出单元测试文件 ============\n'

    cd $currentPath/output/box/app/
    zip -q -r ./app.zip ./*
    curl -H "Expect:"  -F "data=@$currentPath/output/box/app/app.zip" -F "schemaType=app" -F "uploadPath=luban" $receivezip
    echo '\n============== 单测core已上传 ==============\n'

    cd $currentPath/output/box/core/
    zip -q -r ./core.zip ./*
    curl -H "Expect:"  -F "data=@$currentPath/output/box/core/core.zip" -F "schemaType=core" -F "uploadPath=luban" $receivezip
    echo '\n============== 单测app已上传 ==============\n'
    echo 'skip zip'

elif [ "$1" = "testremote" ]; then
    find ./* -name '*.map' -exec rm -rf {} \;
    fis3 release testremote -d ./output
    echo '\n============== 已复制到swancatch ==============\n'
elif [ "$1" = "benchremote" ]; then
    fis3 release benchremote -d ./output
    echo '\n============== 已复制到swancatch ==============\n'
elif [ "$1" = "fisold" ]; then
    fis3 release -d ./output
    cp -rf ./output/src/* ./dist/
    echo '\n============== 已生成dist文件 ==============\n'
fi

echo '\n============== build 已完成=============\n'

