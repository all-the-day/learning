
let myname: string = 'myname'


let notSure: any = 's'
notSure = 'maybe is string'
notSure.myname

let numberOrString: number | string = 246546
numberOrString = 'jdljsk'

let arrOfNumbers: number[] = [1,5,6,89,5]
let arrOfString: string[] = ['s','d']

// 元组 一定程度上限定了数据类型的数组
let user: [string, number] = ['duoban', 34333]

//  接口 interface

// 对对象的形状（shape）进行描述
// 对类（class）进行抽象
// Duck Typing (鸭子类型)

// 可选属性 ?
// 只读属性 readonly

// readonly 是用在属性上的
// const 用在变量上

interface IPerson {
  readonly id: number;
  name: string;
  age?: number;
}

let duoban: IPerson ={
  id: 12456,
  name: 'duoban',
  age: 23,
}

// 函数和类型推断


// function add( x: number, y: number, z:number = 10 ): number {
//   if(typeof z === "number"){
//     return x + y +z
//   }
//   return x+y
// }

// let res = add( 2,8, 25 )

const add = function add( x: number, y: number, z:number = 10 ): number {
  if(typeof z === "number"){
    return x + y +z
  }
  return x+y
}

const add2 = add
// const add3: string = add  不能
const add4: (x: number, y: number, z?:number) => number = add
// 类型推断


//  类

// 类（class）: 定义了一切事物的抽象特点
// 对象（object）: 类的实例
// 面向对象（OOP）三大特性：封装、继承、多态


class Animal {
  readonly name: string;
  static categoies: string[] = ['mammal','bird'];
  static isAnimal(a: any){
    return a instanceof Animal
  }
  constructor(name: string){
    this.name = name
  }

  run() {
    return `${ this.name } is runing`
  }
}
const snake = new Animal('Lily');

console.log( snake.name  )

//  继承
class Dog extends Animal {
  bark(){
    return `${this.name} is 汪汪汪`
  }
}
const xiaohei = new Dog('小黑')

// 方法重写
class Cat extends Animal {
  constructor(name: string){
    super(name)
    // console.log( this.name )
  }
  run() {
    return `喵喵喵 ${ super.run() }`
  }
}

const miaomiao = new Cat('毛毛')
// console.log( miaomiao.run() )

// 修饰符
// public
// private 只能在类中进行访问
// protected 子类可以访问，遗产 子女 可以继承
// readonly 只读

// static
console.log( Animal.categoies )
console.log( Animal.isAnimal(snake))