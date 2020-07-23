# 开发踩坑记录
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

12313