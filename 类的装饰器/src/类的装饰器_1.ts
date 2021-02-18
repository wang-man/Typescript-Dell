// 类的装饰器是一个函数，接受一个类为参数

// 可以用一个函数包住这个装饰器返回，这样在函数内部就可以做一些其他的处理。
function decorator(flag: boolean) {
  if (flag) {

    return function (constructor: any) {
      constructor.prototype.getName = function () { // 装饰器通过在类的原型上添加属性和方法来装饰这个类
        return 'man'
      }
    }
  } else {
    return function () {

    }
  }
}

@decorator(false)
class Test2 { }

const test = new Test2();

console.log((test as any).getName()); // 原型的方式并不能让ts判断test被装饰过