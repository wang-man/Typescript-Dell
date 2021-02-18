// 访问器指的是类或对象中get 、set这样的东西


function nameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(typeof target)
  // descriptor.writable = false
}

class Test5 {
  private _name: string;

  constructor(someName: string) {
    this._name = someName;
  }
  // 访问器
  get name() {
    return this._name;
  }
  // 访问器
  @nameDecorator
  set name(someName: string) {
    this._name = someName;
  }
}

const test5 = new Test5('man');
test5.name = 'wang man';

console.log(test5.name)
