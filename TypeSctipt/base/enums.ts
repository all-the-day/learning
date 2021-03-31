
// 枚举
// 一连串的常量
// 双向映射

// 常量值 计算值

enum DirectionOne{
  up,
  Down,
  Left,
  Righ 
}
console.log(DirectionOne.up)
console.log(DirectionOne[0]) 

enum Direction{
  up = 'UP',
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
console.log(Direction.up)
console.log(Direction[0]) 

// 字符串枚举
enum DirectionString{
  up = 'UP',
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
console.log(DirectionString.up)
console.log(DirectionString[0])  // undefined


// 常量枚举  提升性能
const enum ConstDirectionString{
  up = 'UP',
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
const value = 'DOWN'
if( value === ConstDirectionString.Down ){
  console.log('Go on!')
}



