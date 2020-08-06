# 开发踩坑记录7月
> 基于中台idg框架开发踩坑记录，包括页面结构梳理，项目结构，组件使用，命名规范等等
## 7.21
### 1、get || $store
#### tips:  get&set  要配合使用，否则会捕获报错‘property xxx has no setter’   
example:
```typescript
public get statusName(){
    return this.$store.state.statusName
}
public set statusName(){
    this.name = this.statusName
}
```

### 2、prop命名规范
#### 因为HTML5对于prop的大小写不敏感，所以prop属性命名时要用kebab-case命名法
example:
```typescript
// father
<father status-name={this.name} />
// son
@Prop() public statusName:string

```
<p style='color:red'>错误示范：statusName,status...</p>

### 3、emit使用范例
example:
```typescript
// son
function(){
    this.$emit(refresh)
}
// father
<father on-refresh={this.handleRefresh} />
```

### 4、如无必要，不做拆分
例如project-management训练，page中不要包含太多组件，导致传值复杂化。但在必要的业务场景，需要依照业务要求进行组件的拆分以减少代码量并提升可读性。

### 5、对于prop传入的数据，需要watch实现父子数据的同步更新
example:
```typescript
// father
<fater status-name={this.statusName}/>
//son
@Prop() public statusName:string;
@Watch('statusName')
public statusNameChange(val){
    this.statusName = val;
}
```

## 7.22
###  开发拖拽组件有感
今日开发拖拽组件，使用Vue Demo迁移至中台TS项目中，发现很多报错我目前无法解决，询问代哥得知，在今后如果出现iview无法直接实现的需求，尽可能去寻找第三方开源Vue组件库可以满足需求的组件，并引入使用，避免自己写组件，导致代码不可能。

### 敢于重构代码
对于今天再次对project-management的开发工作，总结出了：对于内部需要参数频繁传递的组件，在保证代码行数不太多，可读性尚可的情况下，不要再去进行拆分。




## 7.23
### Only Do What I Should Do
为保持低代码量，高代码可读性和可维护性，不做需求之外的事，但应保留入口。不写无用组件，方法，如无必要不要用Vuex。<br/>
`Vuex一句话总结:`用prop，emit做不了或做起来太繁琐的事情，采用vuex做（store）。<br/>  
场景一：组件多层嵌套，且兄弟组件需要传参。<br/>
场景二：多个组件共享同一个状态 <br/>


### Vuex核心概念
`Store`：Vuex 使用一个 Store 对象管理应用的状态，一个 Store 包括 State, Getter, Mutation, Action 四个属性。  
`State`：状态管理的数据源（和Vue的Data有点类似）  
`Getter`：将State进行过滤后输出。(不能改变State，有点类似SQL的Select语句)
`Mutation`：改变State的唯一途径（严格模式下），只能同步操作。
```js
state:{
  isShowModal:boolean = false;
}
mutation:{
  showModal(){
    this.state.isShowModal = true
  }
}
// 组件调用

// 获取
public get isShowModal(){
  return this.$store.stae.isShowModal
}
// 改变,可传参
this.$store.commit('showModal',params)
```

`Action`:对State的异步操作可以（暂时没用过）
`Module`：当Store对象过于庞大时，可根据具体的业务需求分为多个Module/  


### 第三方库vuedraggable
个人文档整理：（暂无）

## 7.24
### webpack相关
使用vuedraggable遇到的问题  
按照教程import并在组件中引入
```ts
import draggable from 'vuedraggable'
@Component({
  depends:[],
  components:draggable
})
```
页面报错：<div style='color:red'>TypeError: cannot assign to read only property exports of obejct</div>

依赖引入导出方法  
```js
// ES6
import xxx from '../xxx'
export xxx

// CommonJS
require('../xx')
module.exports = {}
```
由于WebPack2不允许两种写法混合使用，所以在项目中引入第三方依赖的时候可能会出现报错
解决方法:  
1、依赖改成统一写法  
2、babel config 
```js
typeSource='unambiguous'//  script module(默认) unambiguous(遇到require识别成commonjs，遇到import识别成ES6)
```
commonJs 和ES6 在此处皆为模块化标准

### 数组去重

```js
const arr = [1,2,2,3,3,4,5]
const newArr = ...new Set(arr)
consloe.log(newArr)// [1,2,3,4,5]
```

### git 相关
```
git changelog => 日志
git rebase => 合并分支，修改时间节点合并至线性时间线
git merge => 保留所有操作记录，对修改时间节点不做操作
```

## 7.28
### 业务和接口不要耦合
>在写数据结构(interface)的时候，接口请求和返回的数据结构和页面接口不要耦合。
### @antv/g6 
>官方文档：https://antv.vision/zh/

antv相关：TODO.........
### Vue 路由相关
#### 传参
1、第一种方法(页面刷新数据不会丢失)
```tsx
<div onClick={this.insurance(2)}>查看详情</div>

public insurance(id){
  this.$router.push({
    path:`/particulars/${id}`,
  })
  // 也可以用name匹配，在path后添加参数，页面刷新参数就不会丢失
}
```
这样参数会直接跟在路由后面
需要对应路由配置：
```tsx
{
  path:'/particulars/:id',
  name:'particulars',
  component: particulars,
}
```
在组件中想要获取参数：
```tsx
this.$route.params.id
```
3、第二种方法 path匹配路由，query传递参数
```tsx
{
    path: '/particulars',
    name: 'particulars',
    component: particulars
   }
insurance(id){
  this.$router.push({
    path:'particulars',
    query:{
      id:id
    }
  })
}
```
获取参数:
```tsx
this.$route.query.id
```