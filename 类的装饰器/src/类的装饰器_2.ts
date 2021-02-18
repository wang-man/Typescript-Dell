
// 最为正确的装饰方式是在类里通过extends扩展这个类

// 定义一个泛型T扩展自一个类的实例对象，参数的类型为这个泛型T。这里的new并不是js中用于实例化一个对象的功能，它属于ts的语法，表示这里是一个类这样的类型。
function testDecorator<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {      // 返回扩展后的类
    name = 'man';
    getName() {
      return this.name;
    }
  }
}

class Test3 {
  name: string;
  constructor(name: string) {
    this.name = name
  }
}

const newTest = testDecorator(Test3);

const test3 = new newTest('wang');

console.log(test3.getName());    // 不会标红
