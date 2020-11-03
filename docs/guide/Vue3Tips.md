# Vue3 要点总结
## setup（） 一个新的钩子函数，在created之前，befroeCreated 之后执行
vue3取消了，beforeCreated和created两个钩子，统一用setup代替，data，methods，componnet等全部都用对应的新增Api写在setup（）函数中。
```js
setup(props, context) {
    context.attrs
    context.slots
    context.parent
    context.root
    context.emit
    context.refs
    
    return {
        
    }
  }

```  
props: 用来接收 props 数据  
context 用来定义上下文, 上下文对象中包含了一些有用的属性，这些属性在 vue 2.x 中需要通过 this 才能访问到, 在 setup() 函数中无法访问到 this，是个 undefined
返回值: return {}, 返回响应式数据, 模版中需要使用的函数

## reactive函数
reactive() 函数接收一个普通对象，返回一个响应式的数据对象, 想要使用创建的响应式数据也很简单，创建出来之后，在setup中return出去，直接在template中调用即可
```js
<template>
  {{name}} // test
<template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
export default defineComponent({
  setup(props, context) {
  
    let state = reactive({
      name: 'test'
    });
    
    return state
  }
});
</script>

```  
## ref()函数
ref() 函数用来根据给定的值创建一个响应式的数据对象，ref() 函数调用的返回值是一个对象，这个对象上只包含一个 value 属性, 只在setup函数内部访问ref函数需要加.value
```js
<template>
    <div class="mine">
        {{count}} // 10
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const count = ref<number>(10)
    // 在js 中获取ref 中定义的值, 需要通过value属性
    console.log(count.value);
    const obj=reactive({
      t:100,
      count // 通过reactive来获取ref的值时，不需要使用.value 属性
    })
    return {
       count
    }
   }
});
</script>
```
## isRef()函数
用来判断某个值是否是ref（）创建出来的对象  
比如： ``` isRef(count) // true of false ``` 

## computed
只读
`const age = computed((count)=>count++)`  
可读可写
```
const age = computed({
  get: () => age.value +1,
  set: ()= > age.value+value,
})
```

## watch
对于用reactive声明的数据源，修改数据源会触发watch回调，打印变更前后的值。  
对于用ref声明的数据源，修改age，会打印变更后的值。  
## 同时监听多个值
```js
const state = reactive<Person>({name:'师哥', age:22})
watch(
  [()=>state.age,()=>state.name],
  ([newName,newAge],[oldName,oldAge])=>{
    console.log(newName);
    console.log(newAge);
    console.log(oldName);
    console.log(oldAge);
  }
)
state.age = 100;
state.name='
```