/*eslint-disable */
/**
 * @file for tests report page
 * @author sunweinan@baidu.com
 * h5-ignore-api文件为swan-core框架提供的h5能力， 不在此引入。
 * com_navigator导致页面跳出或崩溃，不在此引入。
 * internalapi文件内绑定swan-core提供的方法，暂未引入，
 */

import swanInterface from 'src/swanInterface';
const noop = ()=>{};
const modules = [
    //'compontents',
    'storage'
];
class Ajax {
  static handdleStateChange(xhr,success,fail){
      // readyState == 4说明请求已完成
      if(xhr.readyState == 4 ){
          let response = xhr.responseText;

          try{
            response = typeof response != 'object' 
                ? JSON.parse(response)
                : response
                ;
          }catch(e){
            fail(response);
            return;
          }

          if((xhr.status != 200 && xhr.status != 304 || response.errno != 0)){
            fail(response || xhr);  
            return;
          }
          success(response);
      }
  }

  static qs(json){
        if (!json) return ''
           return Object.keys(json).map(key => {
             if (json[key] === undefined) return '';
             json[key] = typeof json[key] === 'object' ? JSON.stringify(json[key]) : json[key];
             return encodeURIComponent(key) + '=' +
                    encodeURIComponent(json[key])
           }).join('&')
  }
  static post({url,body,success,fail}){
    var xhr = new XMLHttpRequest();
 
        // 使用post请求
        xhr.open('post',url);
 
        // 如果 使用post发送数据 必须 设置 如下内容
        // 修改了 发送给 服务器的 请求报文的 内容
        // 如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        // 发送
        // post请求 发送的数据 写在 send方法中
        // 格式 name=jack&age=18 字符串的格式
        xhr.send(this.qs(body));
 
        // 注册事件
        xhr.onreadystatechange = () => Ajax.handdleStateChange(xhr,success,fail);

  }
  static get({url,params,success, fail}) {
    // XMLHttpRequest对象用于在后台与服务器交换数据   
    let xhr = new XMLHttpRequest();           
    url =  url + (url.indexOf('?')>-1 ? '&' :'?')+ this.qs(params);

    xhr.open('GET', url, true);
    
    xhr.send();

    xhr.onreadystatechange = () => Ajax.handdleStateChange(xhr,success,fail);
  }
}

class createBench {
    
    constructor(){
        const swanAPI = new swanInterface();
        window.boxjs = swanAPI.boxjs;
    }

    register(){
        let that = this;
        let tests = modules.map(mod => `tests/modules/${mod}`);
        require(tests, function() {
            Array.from(arguments).forEach(test => test.register.call(that));
        })
    }


    load(){
        this.register();
    }
}

export default new createBench();
