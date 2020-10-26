# 开发踩坑记录8月
> 基于中台idg框架开发踩坑记录，包括页面结构梳理，项目结构，组件使用，命名规范等等
## 8.5
### 1、应用-服务-子服务-包
中台应用层级关系，基于应用（第一层），服务（第二层可包含子服务），最后一层才是开发的各个包（业务代码）。  
应用可以没有包，也可以没有服务，调用别的服务。  
中台包（Packages）和npm包是不同的。  
调用链：requestStack
![avatar](../.vuepress/public/image/topu.png)

### 2、SessionStorage
全局存取。
### 3、递归的应用

### 4、treeSelect
>基于中台iview，select和tree组件实现。  
select-dropdownMenu  
tree-render

### 5、前端方法，产品化开发
模块化开发思维  
先写前端方法，使开发效率得到提升。  

## 8.6
### 1、JSON对象替换键名

```js
var json = [
    {
        "Id":"3972679ef2c04151972b376dd88e6413",
        "T_CourseId":"7a4494aae1804d3e94094583249750fe",
        "CourseName":"英语",
        "Code":"english"
    },
    {
        "Id":"5665d803e7994b26a56c6287d12c2090",
        "T_CourseId":"75761ad2ce23498c9f9db134ab844aec",
        "CourseName":"药物化学",
        "Code":"ywhx"
    }
]
```
怎么使用js高效的将其中的CourseName更改为title，得到结果如下：
```js
[
    {
        "Id":"3972679ef2c04151972b376dd88e6413",
        "T_CourseId":"7a4494aae1804d3e94094583249750fe",
        "title":"英语",
        "Code":"english"
    },
    {
        "Id":"5665d803e7994b26a56c6287d12c2090",
        "T_CourseId":"75761ad2ce23498c9f9db134ab844aec",
        "title":"药物化学",
        "Code":"ywhx"
    }
]
```
先将json对象转为json字符串，再替换你要替换的属性名，最后再转为json对象
```js
json=JSON.parse(JSON.stringify(json).replace(/CourseName/g,"title"));
```
 ### 2、组件要写TAG，方便调试
 ### 3、前端开发要注重用户体验
 不同分辨率下的组件尺寸
 ```ts
 <Input class='xs:w-full xl:w-1/3 md:w-1/4' />
 ```
 总条数小于10，分页隐藏
 ```ts
 {
   this.total < 10 &&
   <Page total={this.total} on-on-change={this.handlePageChange}/>
 }
 ```
 ### 4、组件内部不能直接耦合路由参数
 应当在page中拿到路由参数，再用Prop传入组件。

 ## 8.11
 ### 项目开发应写开发文档
 ### cookie/localStorage/sessionStorage 
 > 移步 至专题

## 8.18
### @idg/dispatcher
状态管理的一种方式。
组件通信现在可以: this.$app.dispatcher
                emit/prop
                vuex
                sessionStorage/localStorage 等等

### 如无必要，勿增实体
有效的解耦和拆分是必要的
### 写日报模板
  
1. 持续优化xxx   
2. 重构了xxx     
3. 梳理xxx，总结xxx 
4. 排查xxx问题 
5. 改进了xxx逻辑，性能得到提升 
6. 通过 xxx 降低了 xxx 至 xxx 
7. 为了 xxx 重新设计了 xxx 
8. 为了 xxx 通过 xxx 完成了 xxx 
9. 通过 xxx 优化了 xxx 为 xxx 
10. 为了 xxx 将 xxx 应用到了 xxx 
11. 通过 xxx 提高了 xxx 至 xxx 
12. 为了 xxx 通过 xxx 将 xxx 集成 
13. 为了 xxx 通过 xxx 成立了 xxx


## 8.20
### switch => map
类似可以使用switch的场景都可以用map来替代  
因为switch并不是一个好的选择(击穿性)  
如果非要用switch 不能丢掉break和default  
```ts
switch(key: string){
    case '1':
        // do something
    break;
    .
    .
    .
    default:
    break;
    // break:跳出循环 return:跳出函数
}
```
应换用map写法
```ts
const map:{[index:string: JSX.Element]} = {
    key: value,
    .
    .
    .
}
return map[key] || '';
```

### 使用对象扩展运算符,命名需要规范(驼峰+复数)
错误: ...ProjectGroup  
正确: ...projectGroups

## 8.24

### slice
```js
const arr = [1,2,3,4,5];
arr.slice(0,2)
// consoloe.log
// [1,2,3]
```
### loadAsh find
```js
const json = [
    {id:1,value:1},
    {id:2,vlaue:2},
]
_.find(json,{id:1})
// console.log
// {id:1,value:1}
```

### sonar 
sonar 扫描代码，质量管理
### 安装jdk，配置环境变量
略


## 8.25
### Array: forEach and map
forEach，无返回值（undefined），低扩展性，在回调中操作原数组会改变原数组。
map，返回一个新数组,可链式调用，扩展性高，速度快，反正我用map，不管sonar报错。
### git config  change

## 8.31开发日志
### 父组件调用子组件方法
```ts
this.$ref.child.method();
//idg写法
@Ref('child') public readonly $child: Child
this.$child.method();
```
### ts2349:无法调用..类型缺少调用签名的表达式.
```ts
// 错误
labels: A[]|B[]|C[]
// 正确
labels: Array<A|B|C>
```
