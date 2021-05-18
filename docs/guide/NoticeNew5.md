# 2021年 开发踩坑记录5月
> 基于中台idg框架开发踩坑记录，包括页面结构梳理，项目结构，组件使用，命名规范等等

## 5.14
### 类图
首先，看动物矩形框，它代表一个类（Class）。类图分三层，第一层显示类的名称，如果是抽象类，则就用斜体显示。第二层是类的特性，通常就是字段和属性。第三层是类的操作，通常是方法或行为。前面的符号，+ 表示public，- 表示private，# 表示protected。  

实线+空心三角形 - 类继承  
虚线+空心三角形 - 实现接口  
实线箭头 - 类的关联关系（一个类知道另一个类）  
空心的菱形+实线箭头 - 类的聚合关系（A可以包含B，但B不是A的一部分）  
实心菱形+实现箭头- 类的组合关系（例子：一个鸟拥有两个翅膀）  


## 5.18
### 动态规划
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。  
解：n层楼梯有n-1层和n-2层两种方法和，以此类推。

```js
var climbStairs = function(n) {
    let f = new Map();
    f[1] = 1;
    f[2] = 2;
    if(n<=2){
        return f[n]
    }
    for(let i =3; i<=n; i++){
        f[n] = f[n-1] + f[n-2]
    }
    return f[n]
};
```

### 求正整数x的平方根
#### 牛顿迭代法：
https://en.wikipedia.org/wiki/Integer_square_root#Using_only_integer_division  

```js
var mySqrt = function(x) {
    if(x<=1){
        return x
    }
    let r = x;
    while(r>x/r){
        r = (r+x/r)/2;
    }
    return Math.floor(r)
};
```

### XML
#### 1.什么是 XML?
XML 指可扩展标记语言（EXtensible Markup Language）  
XML 是一种标记语言，很类似 HTML  
XML 的设计宗旨是传输数据，而非显示数据  
XML 标签没有被预定义。您需要自行定义标签。  
XML 被设计为具有自我描述性。  
XML 是 W3C 的推荐标准  

#### 2.XML 与 HTML 的主要差异
XML 不是 HTML 的替代。

XML 和 HTML 为不同的目的而设计：

XML 被设计为传输和存储数据，其焦点是数据的内容。

HTML 被设计用来显示数据，其焦点是数据的外观。

HTML 旨在显示信息，而 XML 旨在传输信息。