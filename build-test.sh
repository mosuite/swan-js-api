rm -rf mocha/output
rm -rf box.zip

npm run build:test
echo '\n============== webpack打包完成 ==============\n'
rm -rf ./mocha/output/core/index.js
mv -f mocha/output/test/ ./mocha/output/core/
cd ./mocha/output/core/
zip -r core.zip ./
cp ./core.zip ../../../../fis/
echo '\n============== 已生成core.zip文件 ==============\n'
cd ../app
zip -r app.zip ./
echo '\n============== 已生成app.zip文件 ==============\n'
cp ./app.zip ../../../../fis/


cd ../../../../fis/

fis3 release remote


