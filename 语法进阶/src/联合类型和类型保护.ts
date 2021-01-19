interface Bird {
  fly: boolean,
  sing: () => {}
}

interface Dog {
  fly: boolean,
  bark: () => {}
}

// 方式一：类型断言
function trainAnimal(animal: Bird | Dog) {
  console.log(animal.fly);   // 可自动推论出这个肯定存在的属性
  // animal.sing()  // 报出：类型“Bird | Dog”上不存在属性“sing”。类型“Dog”上不存在属性“sing”。

  // 类型断言
  (animal as Bird).sing();
  (animal as Dog).bark()
}

// 方式二，in语法
function trainAnimalSecond(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing()     // sing可被自动推论出存在
  } else {
    animal.bark()
  }
}

// 方式三：最直白的typeof判断
function add(first: string | number, second: string | number) {
  // return first + second   // 报出： 运算符“+”不能应用于类型“string | number”和“string | number”
  if (typeof first === 'string' && typeof second === 'string') {
    return first + second
  }
}

class numObj {
  counter: number = 0;
}

// 方式四：另一个直白的instanceof的方式
function addSecond(first: object | numObj, second: object | numObj) {
  // return first.counter + second.counter;    // 报出：类型“object | numObj”上不存在属性“counter”。类型“object”上不存在属性“counter”。
  if (first instanceof numObj && second instanceof numObj) {
    return first.counter + second.counter
  }
}

