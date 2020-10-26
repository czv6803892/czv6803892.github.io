# 开发踩坑记录9月
> 基于中台idg框架开发踩坑记录，包括页面结构梳理，项目结构，组件使用，命名规范等等
## 9.1
### 命名规范的意义是保持项目文件命名风格的一致性,不要舍本逐末
### 基于中台开发框架的海报编辑器制作
### 开源协议  

![avatar](../.vuepress/public/image/kaiyuan.png)

### 文件命名不能用中文..不然会报错,别问我怎么知道的..

## 9.8
### 关于dispatcher
中台的 this.$app.dispatcher，是一个低耦合度的一个东西，一般用于兄弟服务之间的通信，在服务内部轻易不要使用。

### 循环写出的item，在内部不需要再去循环。（项目管理服务filter）

### 合作开发
1、不是一手开发，后期接盘的时候，看看api，interface别人是不是已经写过了，不要再写一遍
2、引用路径要避免使用绝对路径，改为使用相对路径，这样在应用调服务的时候可以避免报错

## 9.17
### html5拖拽
tips: 拖拽至目标区域事件，在onDragOver时候需要阻止浏览器默认行为，  
e.preventDefault();不然不会触发ondrop事件（在目标区域释放鼠标）
### 不同组件之间拖拽，this指向不同的问题。
解决方案1： 拖拽事件中，向store中存储数据。  
解决方案2： emit直到数据可以存在同一个父组件中为止。
### call 和 apply 
call 参数要一个一个的给 apply可以以数组形式一起给
eg
```js
const o = {a:1,b:2}
fn(c,d){
  return this.a + this.b + c+ d
}
fn.call(this.o,5,7)// 1+2+5+7
fn.apply(this.o,[5,7])// 1+2+5+7
```
### CSS Sprites
称作精灵图或者雪碧图，一个页面内需要加载零星好几个图片，使用利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字精确的定位出背景图片的位置。  
这样可以将图片整合在一个大图片里面，避免了图片一张一张的加载  
这样做可以有效减少图片的字节，提高渲染性能
### 浏览器内核
Wekbit是一个开源的Web浏览器引擎，也就是浏览器的内核。Apple的Safari, Google的Chrome, Nokia S60平台的默认浏览器，Apple手机的默认浏览器，Android手机的默认浏览器均采用的Webkit作为器浏览器内核。Webkit的采用程度由 此可见一斑，理所当然的成为了当今主流的三大浏览器内核之一。另外两个分别是Gecko和Trident，大名鼎鼎的Firefox便是使用的Gecko 内核，而微软的IE系列则使用的是Trident内核。
另外，搜狗浏览器是双核的，双核并不是指一个页面由2个内核同时处理,而是所有网页（通常是标准通用标记语言的应用超文本标记语言）由webkit内核处理,只有银行网站用IE内核

## 9.22
### get请求 传参
1、放在query后面， 格式 网址？参数=值&参数=值  

```js
url: 'www.oneitfarm.qcloud.com?page=1&limit=10'
```

2、code-generater 适应中台的前端模板代码