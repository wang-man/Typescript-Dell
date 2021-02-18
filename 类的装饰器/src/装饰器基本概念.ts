// 类的装饰器是一个函数，接受一个类为参数


function decorator1(someClass: object) {
  console.log('装饰器1');   // 后打印
}

function decorator2(someClass: object) {
  console.log('装饰器2');  // 先打印
}


// 装饰器的绑定顺序是由下往上
@decorator1
@decorator2
class Test1 { }