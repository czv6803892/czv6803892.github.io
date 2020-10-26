# 牛客刷题 知识点 8.18
1、鼠标移入onmouseover，移出onmouseout
```html
<a href="#" onmouseover="this.style.fontSize='30px'">注册</a>
```
在js里面添加的属性名使用驼峰法，在css里面使用连接线
2、
```typeof
undefined        值未定义
boolean           布尔值
string               字符串
number            数值（整形和浮点）
object                对象或null
function            函数
```
3、
javascript中实现跨域的方式总结  
```
第一种方式：jsonp请求；jsonp的原理是利用script标签的跨域特性，可以不受限制地从其他域中加载资源，类似的标签还有<img>.  
第二种方式：document.domain；这种方式用在主域名相同子域名不同的跨域访问中  
第三种方式：window.name；window的name属性有个特征：在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的，并不会因新页面的载入而进行重置。  
第四种方式：window.postMessage；window.postMessages是html5中实现跨域访问的一种新方式，可以使用它来向其它的window对象发送消息，无论这个window对象是属于同源或不同源。  
第五种方式：CORS；CORS背后的基本思想，就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是应该失败。  
第六种方式：Web Sockets；web sockets原理：在JS创建了web  socket之后，会有一个HTTP请求发送到浏览器以发起连接。取得服务器响应后，建立的连接会使用HTTP升级从HTTP协议交换为web sockt协议。
 ``` 

4、history对象  
length      返回浏览器历史列表中的URL数量  
back()      加载 history 列表中的前一个URL  
forward() 加载 history 列表中的下一个URL  
go()         加载history列表中的某个具体页面。  
