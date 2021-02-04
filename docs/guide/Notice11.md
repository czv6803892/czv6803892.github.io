# 开发踩坑记录11月
> 基于中台idg框架开发踩坑记录，包括页面结构梳理，项目结构，组件使用，命名规范等等

## 11.2 leetCode记录
### 中间件
任务注册，任务编排，任务调度

## 11.3 开发记录
### 应用市场V2业务逻辑
模块代办：开发者中心，用户中心，市场管理
其中开发者中心和用户中心由应用管理服务跳转而来。
### 树(基础概念 来自 Wikipedia)
>节点的度：一个节点含有的子树的个数称为该节点的度；  
树的度：一棵树中，最大的节点度称为树的度；  
叶节点或终端节点：度为零的节点；  
非终端节点或分支节点：度不为零的节点；  
父亲节点或父节点：若一个节点含有子节点，则这个节点称为其子节点的父节点；  
孩子节点或子节点：一个节点含有的子树的根节点称为该节点的子节点；  
兄弟节点：具有相同父节点的节点互称为兄弟节点；  
节点的层次：从根开始定义起，根为第1层，根的子节点为第2层，以此类推；  
深度：对于任意节点n,n的深度为从根到n的唯一路径长，根的深度为0；  
高度：对于任意节点n,n的高度为从n到一片树叶的最长路径长，所有树叶的高度为0；  
堂兄弟节点：父节点在同一层的节点互为堂兄弟；  
节点的祖先：从根到该节点所经分支上的所有节点；  
子孙：以某节点为根的子树中任一节点都称为该节点的子孙；  
森林：由m（m>=0）棵互不相交的树的集合称为森林。  


### k8s && pod


### CI/CD(持续集成/持续交付)  
Continuous Intergration/Continous Delivery
以及
持续测试/持续部署(Continous Testing/Continous Deployment)
> https://linux.cn/article-9926-1.html   
#### 持续是什么意思？
· 频繁发布  
例子：设备更新  
通常，这可以通过很少甚至无需用户的交互或掌握的知识来完成。  
· 自动化流程  
如题，需要高效高频地完成构建，测试，分析，版本控制，以及某些情况下的部署。 自动化流程是十分必要的。   
· 可重复  
自动化流程在给定相同输入的情况下始终具有相同的行为，则这个过程应该是可重复的，比如我们把某个历史版本的代码作为输入，应该得到对应享同的可交付产出。  
·快速迭代  
通过自动化流程，将源代码最终转化为交付物的过程。自动化负责大部分工作，但自动化处理的过程可能仍然很慢。比如一轮集成测试下来耗时可能就要大半天。  

#### 持续交付管道
将源代码转换为可发布产品的多个不同的任务task和作业job通常串联成一个软件“管道”，一个自动流程成功完成后会启动管道中的下一个流程。这些管道有许多不同的叫法，例如持续交付管道、部署管道和软件开发管道。大体上讲，程序管理者在管道执行时管理管道各部分的定义、运行、监控和报告。

#### todo...

## 11.11
### 借助loadash 获取url中所有参数
```ts
public getQueryString() {
    const url = decodeURI(window.location.href);
    const res: { [index: string]: string } = {};
    const urlData = _.split(url, '?').length > 1 ? _.split(url, '?')[1] : null;
    if (!urlData) {
      return null;
    }
    const paramsArr = _.split(urlData, '&');
    _.forEach(paramsArr, (item) => {
      const key = _.split(item, '=')[0];
      const value = _.split(item, '=')[1];
      res[key] = value;
    });
    return res;
  }
```
### flutter 跨端原理
flutter绘制页面的使用了ikia，与chrome同，将指令转换为二进制，直接作用于显卡。
### 浏览器内核
视频流，strem，解码转码，音频，js引擎（V8）
### 中台
可以理解为后台退化，让后台专注于极细的颗粒度工作，前台只用对接需求。  
中台可复用或者说复制，中台包括了许多成熟的解决方案和自动化流程。  
前后台可以换，只需要控制输入，就可以根据需求进行输出。

## 11.12
### V8
1.1渲染引擎  
能够将HTML/CSS/JS文本以及相应的资源文件转换成图像结果。  
不同厂商开发了不同的渲染引擎，如IE：Tridend，FireFox：Gecko，Safari，Chrome，Andriod等：Webkit。    
Webkit 是由苹果2005年发起的一个开源项目。更有甚者，开发出了基于WebKit的支持HTML5的web操作系统(如：Chrome OS、Web OS)。
![avatar](https://pic1.zhimg.com/v2-959135939fe2cbc2d9a437ef81dff328_r.jpg)

1.2 网页渲染流程
![avatar](https://pic4.zhimg.com/80/v2-ad0a86d3faf223164a9bd22658feadc3_720w.png)
首先是网页内容，输入到HTML解析器，HTML解析器解析，然后构建DOM树，在这期间如果遇到JavaScript代码则交给JavaScript引擎处理；如果来自CSS解析器的样式信息，构建一个内部绘图模型。该模型由布局模块计算模型内部各个元素的位置和大小信息，最后由绘图模块完成从该模型到图像的绘制。在网页渲染的过程中，大致可分为下面3个阶段。  
一、从输入URL到生成DOM树。  
二、从DOM树倒构建WebKit绘图上下文  
三、绘图上下文到最终图像呈现

### 在线Room服务
熟悉了网盘的使用流程，其他没啥好值得注意的

## 11.16
### Symbol
JS基础类型  
symbol数据是一个全局唯一的值，可以避免冲突  
```js
  const forerverpx = {
    cName: 'px'
  }
  // object 方式
  const cName = Symbol('cName');
  const forverpx = {
    [cName]: 'px'
  }
  // symbol 方式
```
如上代码，调用者只有在cName和Symbol都拿到的时候，才可以修改这个值，而对象直接``forverpx.cName = '师哥'``就可以修改

Symbol静态方法（在类定义上的方法，不需要实例化即可调用的方法）  
symbol.for && symbol.keyFor  
当Symbol.for被调用时，它首先会判断传入的key是否有被创建过，如果没有，则创建一个新唯一值。如果有，则返回之前的唯一值。
```js
const symbolOne = Symbol.for('foreverpx')
const symbolTwo = Symbol.for('foreverpx')
console.log(symbolOne === symbolTwo); //true

```

### iterator 迭代器
迭代器对象包含一个next方法，不停的调用next（）就可以依次迭代对象里面的属性了。  
总的来说Symbol更像一个工具集，这个集合既能让你去生成一个全局唯一的值，也能在运行时去修改很多原始对象的默认行为。


### 基本数据类型和引用数据类型
基本：创建时候在栈上直接分配一块内存用于存储。  
引用：首先在栈上创建一个引用，而对象的具体内容都存储在堆内存上，然后由栈上的引用指向堆中对象的地址。  


## 11.17 开发日志
### TypeScript 编辑器是如合工作的？
ts文本会先被解析为token流（就是单纯地按照分隔符去分割文本），接着token会被转换为AST，也就是抽象语法树  
![avatar](https://tva1.sinaimg.cn/large/007S8ZIlly1gh5nqa41bpj309106lt8z.jpg)  
binder 则根据 AST 信息生成 Symbol（TypeScript 中的一个数据结构）。拿上面的图来说，就是 number 节点。    
当我们需要类型检查的时候， checker 会根据前面生成的 AST 和 symbols 生成类型检查结果。  
当我们需要生成 JS 文件的时候，emitter 同样会根据前面生成的 AST 和 symbols 生成 JS 文件。  
### const 声明的变量比如const a =
则a 的类型会收敛成1.  
if语句内的a一定是string，因此if语句内类型会被收缩为string；  
Typescript 如果可以 100% 确定你的类型，并且这个类型要比你定义的或者 Typescript 自动推导的范围更小，那么就会发生类型收缩就行了。  

### @types 是npm包的scope声明文件
### 埋点
前端埋点方案：1、代码埋点（在代码里面写埋点逻辑）2、可视化埋点（借助第三方工具实现埋点，分析，也属于无埋点）3、无埋点  
1、代码埋点：  
命令式埋点：在一些事件操作的回调函数中进行埋点，埋点的数据和方法可能多种多样的，比如图片上带数据，ajax发送数据等。  
声明式埋点：将埋点信息封装在自定义属性中，通过sdk识别自定义属性然后获取埋点数据。
2、无埋点  
优势：不需要关注埋点逻辑  
缺点：给数据传输增加压力、无法定制
![avatar](https://user-gold-cdn.xitu.io/2019/5/28/16afc25e328e032d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

3、可视化埋点  
优点：通过集成sdk，运营可自主选择，操作便捷。  
缺点：   
无法定制详细的业务数据，比如 金额、商品数量等，该类数据需要实时变化；  
需要统一规范，无法用在不同的设备上，比如某些特殊的设备imei并不能识别。  
![avatar](https://user-gold-cdn.xitu.io/2019/5/28/16afc27c61da2054?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 11.18 开发日志
### WebSocket
WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议，与HTTP协议的关系仅仅为有交集。  
Websocket只需要一次握手就可以与服务器建立长连接，且服务器可以主动与客户端通信。  
当服务器完成协议升级后（HTTP -> WebSocket），服务端就可以主动推送信息给客户端了。
支持WebSocket的浏览器有Chrome，Safari，FX等。

### ajax轮询
ajax轮询的原理就是让浏览器隔几秒就发一次请求，询问服务器是否有新信息。
### long poll
与ajax轮询原理差不多，都是采取轮询的方式，不过采取的是阻塞模型，也就是说，客户端发起连接后，如果没有消息，就一直不反悔response给客户端。直到有消息才返回，返回完之后，客户端再次建立连接，周而复始。  

### ajax轮询与long poll的确定
其实这两种方式都是非常消耗资源的，ajax轮询需要服务器有很快的处理速度和资源，long poll需要有很高的并发能力。（很多的场地），而且http协议是一个无状态协议，在通信结束后并不会保存上一次通信的相关信息。  

### WebSocket 与Socket
软件通信有七层结构，下三层结构偏向与数据通信，上三层更偏向于数据处理，中间的传输层则是连接上三层与下三层之间的桥梁，每一层都做不同的工作，上层协议依赖与下层协议。基于这个通信结构的概念。  
Socket 其实并不是一个协议，是应用层与 TCP/IP 协议族通信的中间软件抽象层，它是一组接口。当两台主机通信时，让Socket去组织数据，以符合指定的协议。TCP 连接则更依靠于底层的 IP 协议，IP 协议的连接则依赖于链路层等更低层次。  
WebSocket 则是一个典型的应用层协议。  
总的来说：Socket 是传输控制层协议，WebSocket 是应用层协议。   

### 手写Promise
```js
     class JPromise{
        constructor(executor){
            function resolve(value){

            }
            function reject(error){

            }
            try {
                executor(resolve,reject);
            } catch (error) {
                console.log(error);
            }
        }
    }
```

## 11.23开发记录
### Deno
Deno也是一个编写服务端JS的新工具，它的功能与Node不相上下，使用V8引擎开发。  
安装：```iwr https://deno.land/x/install/install.ps1 -useb|iex```  
异步import依赖（重要）  
实现了Node差不多的功能，目前只发布了第一个版本，没有做到100%浏览器兼容。  
需要时间迭代优化  
Demo：Deno天气预报服务 (Input: 城市名称, Output: 格式化的天气预报输出)
```ts
import { parse } from "https://deno.land/std@0.61.0/flags/mod.ts";
import AsciiTable from "https://deno.land/x/ascii_table/mod.ts";

const args = parse(Deno.args);

if (args.city === undefined) {
  console.error("No city supplied");
  Deno.exit();
}

// 你自己的API密钥
const appid = "xxxxxxxx";
const apiKey = "xxxxxxxxx";

const res = await fetch(
  `https://yiketianqi.com/api?version=v9&appid=${appid}&appsecret=${apiKey}`,
);
const data = await res.json();

interface forecastItem {
  day: string;
  wea: string;
  tem: string;
  air_level: string;
}

const forecast = data.data.map((item: forecastItem) => [
  item.day, // 日期
  item.wea, // 天气
  item.tem, // 实时温度
  item.air_level, // 空气质量等级
]);

const table = AsciiTable.fromJSON({
  title: `${args.city}七日天气预报`,
  heading: ["日期", "天气", "温度", "空气质量"],
  rows: forecast,
});

console.log(table.toString());

```

### NextTick
官方定义：在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。  
`
Vue.nextIck(()=>{});
`  
`
this.$nextTick(()=>{});
`
created（）钩子执行的时候DOM其实并未进行任何渲染，所以得放在nextTick中去获取DOM，与其对应的钩子是mounted（）。

#### Event-Loop
js是单线程执行，当然，现在又有了一个worker创造了多线程环境，但是worker受限很多，js执行是有一个执行栈，主要分了，宏任务（macro-task）和微任务（micro-task）  
宏任务有那些

setTimeout  
I/O  
setInterval  
setImmediate  
主线程  
MessageChannel  

微任务有那些

Promise 系列 .then .catch .finally  
process.nexttick  
MutationObserver  

```js
console.log(1)

setTimeout(() => {
  console.log(8)
}, 2000)

setTimeout(() => {
  console.log(3)
  Promise.resolve().then(() => {
    console.log(4)
  })
  setTimeout(() => {
    console.log(6)
  }, 3000)
}, 1000)

new Promise((resolve, reject) => {
  console.log(5)
  resolve()
}).then(() => {
  console.log(7)
})

console.log(2)

```
输出：1,5,2,7,3,4,8,6  
解析：  
主线程 (宏任务) 打印 1 - 5 - 2 【new Promise 会立即执行，不属于，微任务】  
执行所有微任务 promise.then 打印 7  
在执行栈中抛出一个【可以执行的 -> 到时间，虽然，第一个 setTimeout 首先注册，在任务队列栈底】宏任务执行 3 - 4  
在执行所有微任务 【没有】  
在抛出一个宏任务执行 8  
在执行所有微任务 【没有】  
在抛出一个宏任务执行 6  
任务执行完毕  
1 5 2 7 3 4 8 6  

回到nextTick  
源码执行流程  
宏任务 检测 setImmediate ----- 不能 ----> 降级 MessageChannel ------不能-----> 降级 setTimeout
微任务 Promise ---- 不能 ---> 微任务注册微宏任务
上面的 flushCallbacks 就是你要执行的函数  
在Vue中的例子
```js
  // 盗用官方的一个例子
  Vue.component('example', {
  template: '<span>{{ message }}</span>',
  data: function () {
    return {
      message: '未更新'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = '已更新'
      console.log(this.$el.textContent) // => '未更新'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => '已更新'
      })
    }
  }
})
// 在 updateMessage 方法中，更新数据，立即获取更新后的 dom 是获取不到的，所以得把获取 dom 加到事件队列的栈，异步获取更新后的dom  

```  
主线程更新前 ---> 遇到宏任务或微任务 ---> 放入栈 ---> 主线程执行完成，更新完成 ----> 执行栈 ---- > 获取更新后的dom

### 微前端
#### 路由切换的分发问题  

远程拉取机制，远程拉取机制通常会采用fetch API来首先获取到微应用的HTML内容，然后通过解析将微应用的JavaScript和CSS进行抽离，采用eval方法来运行JavaScript，并将CSS和HTML内容append到基座应用中留给微应用的展示区域，当微应用切换走时，同步卸载这些内容，这就构成的当前应用的展示流程。    
对于路由分发而言，以采用vue-router开发的基座SPA应用来举例，主要是下面这个流程：  

当浏览器的路径变化后，vue-router会监听hashchange或者popstate事件，从而获取到路由切换的时机。  
最先接收到这个变化的是基座的router，通过查询注册信息可以获取到转发到那个微应用，经过一些逻辑处理后，采用修改hash方法或者pushState方法来路由信息推送给微应用的路由，微应用可以是手动监听hashchange或者popstate事件接收，或者采用React-router，vue-router接管路由，后面的逻辑就由微应用自己控制。
#### 主微应用的隔离问题
CSS隔离: Module,或者命名空，或者webpack的postcss插件，在打包时添加特定的前缀。  
JS隔离：结合with关键字和window.Proxy对象来实现浏览器端的沙箱机制。
#### 通信问题
在基座应用中会定义事件中心Event，每个微应用分别来注册时间，当被触发事件时再由事件中心统一分发，这就构成了基本的通信机制。

## 11.24
## ts lint
"array-type":[false]
解决array<T>和T[]报错的问题

## 11.27
### 新窗口推路由(传参)
```ts
const temp = this.$router.resolve({
  name:'xxx' // or path:'xxx',
  params:{} // or query:{}
})
window.open(temp.href, '_blank')
```