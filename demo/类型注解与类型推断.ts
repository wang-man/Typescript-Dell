// type annottation 类型注解，我们自己来告诉TS变量是什么类型
let count: number;
count = 123

// type inference 类型推断，TS会自动尝试分析变量的类型
let myName = 'man'
// myName = 123       // 这里

// 两者关系：如果TS能够自动分析变量类型，我们就什么也不需要做
// 如果TS无法分析变量类型，我们就需要使用类型注解

const number1 = 123
const number2 = 456

const totalNumber = number1 + number2



function getTotal(number1: number, number2: any) {
  return number1 + number2
}

const result = getTotal(3, 4)     // 函数也是一个样

