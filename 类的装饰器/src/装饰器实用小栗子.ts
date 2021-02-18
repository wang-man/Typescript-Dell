
function methodsDecorator(msg: string) {    // 动态传参
  return function (target: any, method: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;        // 1.将原有的方法拿到
    descriptor.value = function () {    // 2.然后重写这个方法
      try {
        fn()                            // 3.调用原来的方法
      } catch (error) {
        console.log(msg)
      }
    }
  }

}


let userInfo: any = null;


class Test8 {
  @methodsDecorator('userInfo.name出错')      // 传参
  getName() {
    return userInfo.name
  }

  @methodsDecorator('userInfo.age出错')
  getAge() {
    return userInfo.age
  }
}

const test8 = new Test8();
console.log(test8.getName())
console.log(test8.getAge())