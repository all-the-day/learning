// 类型别名

type PlusType = (x: number, y: number) => number

function sum(x: number, y: number): number{
  return x + y
}
const sum2: (x: number, y: number) => number = sum // 为了少写代码  使用 type aliases
const sum3: PlusType = sum // 这其实也称不上什么 别名，就是 代码变量 提取 罢了

//  联合类型 + type aliases
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver ): string {
  if(typeof n === 'string'){
    return n
  }else{
    return n()
  }
}

// 断言
// 类型断言 与 约束泛型 有什么区别？
function getLength( input: string | number ): number {
  // 断言 它是 string 类型  写法一
  // 你比编译器更了解这里得类型
  const str = input as String 
  if(str.length){
    return str.length
  }else{
    const number = input as Number
    return number.toString().length
  }

  // 写法二
  if( (<string>input).length ){
    return (<string>input).length
  }else{
    return input.toString().length
  }
}