### 基础类型
  1. String
  2. Number
  3. Boolean
  4. Array
  5. Tuple
  6. enum
  7. any
  8. void
  9. Object
  10. Class
  11. Interface
* tuple
> tuple 元组 一定程度上限定了数据类型得数组
* interface

> 对对象得形状进行描述
> 对类进行抽象
> Duck Typing (鸭子类型/模型)
> 接口 对对象的形状进行描述
> 接口 可以继承接口
```typescript
// 可选属性 ?
// 只读属性 readonly
// readonly 是用在属性上的
// const 用在变量上
interface IPerson {
  readonly id: number;
  name: string;
  age?: number;
}
```

* 函数类型 与 类型推断（编译器？）
```typescript
const add = function add( x: number, y: number, z:number = 10 ): number {
  if(typeof z === "number"){
    return x + y +z
  }
  return x+y
}

const add2 = add // 编译器自动类型推断
// const add3: string = add  不能自动类型推断
// 定义一个函数类型 (x: type,...) => type 
const add4: (x: number, y: number, z?:number) => number = add
```

* class
> 类（class）: 定义了一切事物的抽象特点
> 对象（object）: 类的实例
> 面向对象（OOP）三大特性：封装、继承、多态

```typescript
// 继承
class Dog extends Animal
// 方法重写
// 修饰符
// public
// private 只能在类中进行访问
// protected 子类可以访问，遗产 子女 可以继承
// readonly 只读
// static
```

* enum

> 枚举常用于 常量值、计算值
> 字符串枚举
> 常量(const)枚举 提升性能

* 泛型（generics）

```typescript
// 使用泛型
function echo<T>( arg: T ): T {
  return arg
}
// 泛型 + 元组
function swap<T,U>(tuple: [T,U]): [U,T] {
  return [tuple[1], tuple[0]]
}
// 约束泛型 （结合 接口）
interface IWithLength {
  length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T{
  console.log( '约束泛型',typeof arg ,arg.length )
  return arg
}

// class 中使用泛型
class Queue<T> {
  private data = [];
  push( item: T ){
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const NumberQueue = new Queue<number>() 
const StringQueue = new Queue<String>()

// class + 接口 + 泛型 

interface IQueue<T, U>{
  key: T,
  value: U 
}
let kp1: IQueue<String, Number> = { key: 'duoban', value: 123 }
let kp2: IQueue<Number, String> = { key: 123, value: 'duoban' }

// 接口 + 函数类型 + 泛型
interface MoreTypeIConnect<T> {
  (a: T, b: T): T  // 函数类型
}
function connect(a: string, b: string): string{
  return a + b;
}
const b: MoreTypeIConnect<string> = connect
const c: MoreTypeIConnect<number> = plus

```
* 类型别名
> 其实就是为了偷懒 提取代码

```typescript
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number{
  return x + y
}
const sum1: (x: number, y: number) => number = sum // 未使用
const sum2: PlusType = sum // 使用

// 联合类型 + 类型别名
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver ): string {
  if(typeof n === 'string'){
    return n
  }else{
    return n()
  }
}
```
* 断言
> 你比计算机更懂你的代码 🙃




  
