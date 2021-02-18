// 参数装饰器第一个参数：原型，第二个：函数名，第三个：参数位置
function paramDecorator(target: any, method: string, paramIndex: number) {
  console.log(target)
  console.log(method)
  console.log(paramIndex)
}

class Test7 {
  getInfo(@paramDecorator name: string, age: number) {
    console.log(name, age)
  }
}