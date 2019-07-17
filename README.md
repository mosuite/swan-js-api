# 手百小程序 swan-api

## 基础公共库boxjs

- 通过npm包引入
- [icode 地址](http://icode.baidu.com/repos/baidu/search-fe/boxjs/tree/master)

## 文档更新
- 文档在[bdbox-doc](http://icode.baidu.com/repos/baidu/searchbox-fe/bdbox-doc/tree/master)中

## npm包
- npm包发到`http://registry.npm.baidu-int.com`上。
- 如第一次打包，参考 `http://agroup.baidu.com/box/md/article/456404`
- 之后可以配置.npmrc文件，执行 `sh build.sh` 即可



## 用mocha跑单元测试
- 在模拟器的slave中执行debugDev，获取到 deployPath 和 corePath，并修改deploy.json
- 在命令行中执行 sh build.sh testremote
- [自动化测试流程文档](http://agroup.baidu.com/swandocuments/md/article/1021424)


## 用benchmark跑性能测试
- 在模拟器的slave中执行debugDev，获取到 deployPath 和 corePath，并修改deploy.json
- 在命令行中执行 sh build.sh benchremote
