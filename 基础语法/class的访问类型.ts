// private(私有的)，protected(受保护的)，public(公共的)， static(静态的) 访问类型
// public 允许在类内部及外部使用使用。默认存在，可省略该声明
// private 只允许在类的内部使用
// protected 允许在类的内部及其子类中使用
// ------以上都是使用this.语法来使用-----
// static 允许被类本身及其子类自己使用，内部外部都不能使用

class Person2 {
  public name = 'man'
  public getName() {
    return this.name
  }

  protected say() {
    console.log('我是人类')
  }

  private age = 20

  public getAge() {
    return this.age               // age可以在类内部使用
  }

  static className = 'person2'
  getClassName() {
    // return className
  }
}

const man = new Person2()

console.log(man.getName())
console.log(man.getAge())
// console.log(man.age)              // age为Person2的私有属性，因此在实例中是访问不到的

class Women extends Person2 {
  wsay() {
    this.say()
    console.log('我是女人')
  }
}

const woman = new Women()
woman.wsay()
// woman.say()

console.log(Person2.className)
console.log(Women.className)
// console.log(woman.className)



