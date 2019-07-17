fis3 release publish -d ./output
mkdir -p ./dist
cp -rf ./output/src/* ./dist/
mkdir ./package
mv ./package.json ./package
cp ./src/game/package.json ./
npm publish
rm ./package.json
mv ./package/package.json ./
rm -r ./package