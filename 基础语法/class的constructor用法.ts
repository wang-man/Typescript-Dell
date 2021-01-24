class Car {
  // 传统写法
  // private brand: string
  // constructor(brand: string) {
  //   this.brand = brand
  //   console.log(this.brand)
  // }
  // 等同于：
  // 新式简写法
  constructor(private brand: string) {
    console.log(this.brand)
  }
  getBrand() {
    return this.brand
  }
}

const car = new Car('wey 派')

// class Wey extends Car {
//   carName = 'Lee'
//   getName() {
//     return super.getName() + this.carName     // super代表父类
//   }

// }


// const wey = new Wey()

// const weyName = wey.getName()
// console.log(weyName)
