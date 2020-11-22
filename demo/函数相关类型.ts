// 同一个函数在使用typescript的三种写法

function add(first: number, second: number): number {
  return first + second
}


const add2: (first: number, second: number)=> number = (first, second)=> {
  return first + second
}

const add3 = (first: number, second: number): number => {
  return first + second
}
