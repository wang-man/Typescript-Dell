function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(key);
  console.log(descriptor);
  descriptor.value = function () {
    return '改写被装饰的方法'
  }

}

class Test4 {
  name: string;
  constructor(name: string) {
    this.name = name
  }

  // 普通方法装饰器
  @getNameDecorator
  getName() {
    return this.name;
  }
}

const test4 = new Test4('man');

console.log(test4.getName());
