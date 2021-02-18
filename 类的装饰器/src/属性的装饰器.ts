
function nameDecorator2(target: any, key: string): any {
  target[key] = 'wang'    // target是类的原型，而是不类，因此这里可以通过改写原型来重新为属性赋值
}

class Test6 {
  @nameDecorator2
  name = 'man'
}

const test6 = new Test6();

console.log(test6.name)
