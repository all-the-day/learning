// 泛型
// 为什么要用这玩意？

// 对输入类型未知，又不能都使用 any
// 变量会丧失类型
function echo( arg: any ): any {
  return arg
}
// 这 不合理 
const res: string = echo('字符串')  // res any

// 使用泛型
function echof<T>( arg: T ): T {
  return arg
}
const zfc: string = 'jkjl'
const res1 = echof(zfc)  // 类型没有丢失
const res2 = echof(123456)

// 和 元组 一起使用
function swap<T,U>(tuple: [T,U]): [U,T] {
  return [tuple[1], tuple[0]]
}

const res3 = swap(['字符串', 465])
console.log( typeof res3[0] )

//  约束泛型
// 为什么有约束泛型
function whyUseThat<T>(arg: T): T{
  // 在函数内部我们使用了 参数的 length
  // 我们无法保证 一定有该属性
  // console.log( arg.length )
  return arg
}

// use that

function echoWithArr<T>(arg: T[]): T[]{
  // 现在我们可以安全使用 该属性了
  // 但是输入的值如果是其他类型呢
   console.log( arg.length )
   return arg
}

const arrs = echoWithArr([1,2,5])  // no error
// 该函数 如果只能 传 数组 类型，那么它的利用价值就太低了，我们也不可能 cv 一遍函数然后将其 T 改为 T:string 这不合理
// const str = echoWithArr('sss') 

// 我们需要新的解决方案

// 结合 接口 interface, 

interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T{
  console.log( '约束泛型',typeof arg ,arg.length )
  return arg
}

const lenStr = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 11 })
const arr2 = echoWithLength([1,8,6,5])
// 这里 顺便 提到了 鸭子模型 
// 只要 参数可以有 length 这个属性，他就可以给 IWithLength， 不管你是什么类型
// echoWithLength(456)

// class 中使用 泛型
// why use ？

class Queue {
  private data = [];
  push( item:number ){
    return this.data.push(item)
  }
  // 那么 我们限定类型 
  //  just like this
  // 但是这样子这个 class 太单一了，与上面是一样的问题 let's us use 泛型 => 约束泛型
  pop(): number {
    // 不能保证返回的值的类型
    return this.data.shift()
  }
}
const queue = new Queue()
queue.push(1)
// queue.push('str')  // 限定类型后出现了代码提示
// push 了 string 那么 将没有 toFixed(), 但是没有代码提示（编译会报错）
console.log(queue.pop().toFixed())

class Queuer<T> {
  private data = [];
  push( item: T ){
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

//  这样这个class 可以 重复利用， 但是 每次都得，new 有点儿麻烦
const NumberQueuer = new Queuer<number>()  // 这里加入你想要得类型， 但是你想要新类型，就得重新new一个
const StringQueuer = new Queuer<String>()
NumberQueuer.push(5)
console.log(NumberQueuer.pop().toFixed()) // ok
StringQueuer.push('字符串')
// console.log(StringQueuer.pop().toFixed()) // error
console.log(StringQueuer.pop().length) //ok

// 麻烦？ use interface + generics
// 使用接口动态指定类型
// 妈妈再也不用担心你的学习了
interface IQueuer<T, U> { // 没搞懂，为什么这样子做，agin
  key: T,
  value: U
}

let kp1: IQueuer<String, Number> = { key: 'ssss', value: 454645 }
let kp2: IQueuer<Number, String> = { key: 4546, value: 'sfdsaf' }

// 可以用 interface + generics 来表示 类型数组  number[]
let typeArr: number[] = [1,5,6]
let IGArr: Array<number> = [4,5,6,7]

// interface 描述 函数 类型
interface IPlus {
  (a: number, b: number): number
}
function plus(a: number, b: number): number{
  return a + b;
}
const a: IPlus = plus
// 配合泛型 让接口 描述更多类型得 函数类型
interface MoreTypeIConnect<T> {
  (a: T, b: T): T
}
function connect(a: string, b: string): string{
  return a + b;
}
const b: MoreTypeIConnect<string> = connect
const c: MoreTypeIConnect<number> = plus





