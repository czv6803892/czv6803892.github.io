# 开发踩坑记录12月
> 基于中台idg框架开发踩坑记录，包括页面结构梳理，项目结构，组件使用，命名规范等等

## 12.1开发记录
### Virtual DoM
history: 1、Web的早期，通常页面都是静态的，页面内容不会发生变化，如果数据发生了变化，就需要重新请求页面，得到基于新的数据渲染出的新的页面。  
2、后来，到了JQ阶段，用户只需要在数据变化的时候手动操作DOM API修改DOM节点就可以局部刷新页面。  
3、因为浏览器JS脚本进程和渲染进程互斥，JS操作DOM会先于渲染进程运行， 大量的DOM操作会影响页面的渲染速度，于是出现了mvvm框架，程序员不用再手动操作DOM。

#### React 核心思想
Virtual Dom  
![avatar](https://segmentfault.com/img/remote/1460000007694395)  
初次渲染时，首先将数据渲染为Virtual DOM，然后由Virtual DOM生成DOM。  
![avatar](https://segmentfault.com/img/remote/1460000007694396)  
数据更新时，渲染得到新的VD，与上次得到的VD进行Diff，得到需要所有需要在DOM上进行的变更，然后在patch过程中应用到DOM上实现UI的同步更新。  

### 小程序开发框架
响应式 like
```jsx
<view>Hello {{name}}!</view>
.
.
var helloData={
  name:'Weixin'
}
.
Page({
  data: helloData
})
```
多端适配  
动态栅格布局

## 12.4
### 基于Vue的前端架构  
#### 技术栈
Vue+vue-router+vuex， iview或者elementUI，或其他等等， 工具库选用loadash；样式库tailwind等等
#### 脚手架
搭建NPM私服。  
使用Node环境开发CLI工具。（此处详情见<a>xxx</a>）  
基于@vue/cli搭建基础的模板。  
根据业务需求定义各种开发中可能用到的功能（组件库、状态管理、过滤器、指令、CSS内置变量、CSS Mixins、表单验证、工具函数等）。  
性能优化，例如对iview组件库进行二次优化和封装。  
#### 开发规范
编码规范、命名规则、目录结构等等  
静态资源的使用规范  
单元测试、提交线上测试规范  
git提交记录和多人协作规范  
#### css预处理器的选择
sass/scss  
less  
stylus等  
局部样式： 一般采用scoped方案  
```vue
<style lang="scss" scoped>
  ...
</style> 
```  
全局样式：全局样式，目录@/styles  
variable.scss: 全局变量管理  
mixins.scss:全局Mixins管理  
global.scss:全局样式  
其中 variable.scss 和 mixins.scss 会优先于 global.css 加载，并且可以不通过 import 的方式在项目中任何位置使用这些变量和 mixins。  
```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/styles/variable.scss';
        @import '@/styles/mixins.scss';
        `,
      },
    },
  },
}
```
#### 体验优化
页面载入进度条：  
使用 <a>nprogress</a> 对路由跳转时做一个伪进度条，这样做在网络不好的情况下可以让用户知道页面已经在加载了；  
```js
import NProgress from 'nprogress';

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});
```
美化滚动条：  
可有可无  
<br/>
静态资源加载页面：  
首次加载页面时，会产生大量的白屏时间，这时做一个 loading 效果看起来会很友好，其实很简单，直接在 public/index.html 里写一些静态的样式即可。  

#### 移动端100vh问题
<br/>
在移动端使用 100vh 时，发现在 Chrome、Safari 浏览器中，因为浏览器栏和一些导航栏、链接栏导致不一样的呈现：

你以为的 100vh === 视口高度

实际上 100vh === 视口高度 + 浏览器工具栏（地址栏等等）的高度  
解决方案  
安装vh-check npm install vh-check --save
```js
import vhCheck from 'vh-check';
vhCheck('browser-address-bar');

```
定义一个CSS Mixin  
```scss
@mixin vh($height: 100vh) {
  height: $height;
  height: calc(#{$height} - var(--browser-address-bar, 0px));
}

```

#### 组件库覆盖样式
1、less && less-loader  
优点：方便快捷，可以修改class，覆盖默认变量。  
缺点是： 必须引入 .less文件，引入后将会讲所有的组件样式全部引入，导致打包后的css体积过大  
2、使用JavaScript对象  
通过JS对象的方式可以修改内置变量，需要对Less进行配置：  
```js
// vue.config.js
const modifyVars = require('./src/styles/antdTheme.js');

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars,
        },
      },
    },
  },
}
```  
进一步优化，通过babel-plugin-import使 ant-design-vue的组件样式可以按需加载：  
```js
// babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true },
    ],
  ],
};
```
优点是按需引入，缺点是不能使用class进行样式覆盖。