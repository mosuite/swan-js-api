/* eslint-disable */
/**
 * @file swan-compilation/watch.js for watch swan-core workspace and zip&upload swan-core
 * @author suwneinan(sunweinan@baidu.com)
 * @shell node watch
 * @shell node watch disable=uploadCore,remoteCore,watchWorkSpace
 * @arguments disable=uploadCore: 不上传swancore到开发机
 * @arguments disable=remoteCore: 不更新swancore到swancatch
 * @arguments disable=watchWorkSpace: 不监听workspace
 */

const watch = require('watch');
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');

const fromMyDev = require('./deploy.json');
const appPath = fromMyDev.deployPath;
const corePath = fromMyDev.corePath;
const devPath = String(execSync('pwd')).replace('\n','');

//目录设置`
class Watch{
  constructor(){
    this.options();
    this.init();
  }

  initOption(){
    this.disabled = {};
    this.receiveApi = `http://cp01-swn.epc.baidu.com:8090/api/receivezip`,
    this.uploadAppPath = this.uploadCorePath = 'luban-renzhonghua';
    // this.uploadAppPath = this.uploadCorePath = 'luban-test';
    this.uploadCoreName = 'core';
    this.uploadAppName = 'app';
  }

  options(){
    this.initOption();
    this.arguments = process.argv.splice(2);

    let uploadCorePath = this.arguments.find(v => v.includes('uploadCorePath='));
    uploadCorePath && (this.uploadCorePath = uploadCorePath.replace('uploadCorePath=',''));

    let uploadCoreName = this.arguments.find(v => v.includes('uploadCoreName='));
    uploadCoreName && (this.uploadCoreName = uploadCoreName.replace('uploadCoreName=',''));

    let uploadAppPath = this.arguments.find(v => v.includes('uploadAppPath='));
    uploadAppPath && (this.uploadAppPath = uploadAppPath.replace('uploadAppPath=',''));

    let uploadAppName = this.arguments.find(v => v.includes('uploadAppName='));
    uploadAppName && (this.uploadAppName = uploadAppName.replace('uploadAppName=',''));

    // console.log(this.uploadCorePath)
    let disableArguments = this.arguments.find(v => v.includes('disable='));
    disableArguments && disableArguments.replace('disable=','').split(',').forEach(v=>this.disabled[v] = true);

  }

  print(s,highlight = 37){
    let str = String(s);
    console.log('\x1b[' + highlight + 'm%s\x1b[0m', str)

  }

  execs({tasks,msg,success,fail}){
    const shell = tasks.join(' && ');

    this.print(`\r \n START ===========${msg}=========== \r \n`,36);
    this.print(shell);

    let p = exec(shell, err => {
        if(err){
          this.print(`\r \n FAILED ===========${msg}=========== \r \n`,31)
          this.print(err);
          fail && fail();
        }else{
          this.print(`\r \n SUCCESS ===========${msg}=========== \r \n`,32)
          success && success();
        }
    });

    p.stdout.on('data',this.print);
    p.stderr.on('data',this.print);

  }

  watchTestBox(){
    this.execs({
      tasks:[
        `fis3 release bench -d ./output --watch`
      ],
      msg: '启动deply:output/box增量更新(core and app)'
    });
  }

  watchTestRemote(){
    this.execs({
      tasks:[
        `fis3 release benchremote -d ./output --watch`
      ],
      msg:'启动SwanCatch:增量更新(core and app)'
    }); 
  }


  uploadCore(){
    return new Promise(resolve => {
      clearTimeout(this.delayToUploadCore)
      this.delayToUploadCore = setTimeout(()=>{

        let formData = ` -F "data=@${devPath}/output/box/core/core.zip"`;
        formData += ` -F "schemaType=core"`;
        this.uploadCorePath && (formData += ` -F "uploadPath=${this.uploadCorePath}"`);
        this.uploadCoreName && (formData += ` -F "fileName=${this.uploadCoreName}"`);
        
        this.execs({
          tasks:[
            `cd ${devPath}/output/box/core`,
            `zip -q -r ./core.zip ./*`,
            `curl -H "Expect:" ${formData} ${this.receiveApi}`
          ],
          msg: 'zip core',
          success:resolve
        });
      },1000)
    })
  }

  uploadApp(){
    return new Promise(resolve => {
      clearTimeout(this.delayToUploadApp)
      this.delayToUploadApp = setTimeout(()=>{

        let formData = ` -F "data=@${devPath}/output/box/app/app.zip"`;
        formData += ` -F "schemaType=app"`;
        this.uploadAppPath && (formData += ` -F "uploadPath=${this.uploadAppPath}"`);
        this.uploadAppName && (formData += ` -F "fileName=${this.uploadAppName}"`);

        this.execs({
          tasks:[
            `cd ${devPath}/output/box/app`,
            `zip -q -r ./app.zip ./*`,
            `curl -H "Expect:" ${formData} ${this.receiveApi}`
          ],
          msg: 'zip app',
          success:resolve
        });
      },1000)
    })
  }

  make(){
    !this.disabled.uploadCore && this.uploadCore();
    !this.disabled.uploadApp &&  this.uploadApp();
  }

  createMonitor(){
      let that = this;
      try{
        execSync('mkdir -p ' + devPath + '/output/box/')  
      }catch(e){
        console.log(e)
      }

      watch.createMonitor(devPath+'/output/box/', { filter:f=> !/zip/.test(f)}, monitor =>{
          monitor.on("created", (f, stat) => {
            clearTimeout(that.monitorDelay)
            that.monitorDelay = setTimeout(function(){
              that.print(`\r \n ===========有新创建的文件，重新注册监听文件夹=========== \r \n`,33)
              monitor.stop();
              that.createMonitor();
              that.make();
            },2000);
            that.print('fileCreate:'+f);

          });

          monitor.on("changed", (f, curr, prev) => {
            that.print('fileChanged:'+f);
            that.make();
          });
      });
  }


  init(){

      this.watchTestRemote();
      this.watchTestBox();
      this.createMonitor();
  }
}

new Watch();


