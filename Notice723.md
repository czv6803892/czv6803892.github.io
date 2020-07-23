# 开发踩坑记录
> 基于中台idg框架开发踩坑记录，包括页面结构梳理，项目结构，组件使用，命名规范等等

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

### 使用vuedraggable遇到的问题
按照教程import并在组件中引入
```ts
import draggable from 'vuedraggable'
@Component({
  depends:[],
  components:draggable
})
```
页面报错：<div style='color:red'>TypeError: cannot assign to read only property exports of obejct</div>
解决方案：
```ts
module.exports = ...
// change to
export default
```
原因：因为Webpack2不允许import和module.exports同时出现，所以可以一律改用ES6写法。  
或者下载babel插件（待补充）

## test

