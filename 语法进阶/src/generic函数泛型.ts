// 泛型，泛指的类型，也就是不明确的类型，同指定具体的类型相对

// function join(first: string | number, second: string | number) {
//   return `${first}${second}`
// }
// join('1', 2)   // 可传不同类型

// 基本用法
function join<T>(first: T, second: T) {
  return `${first}${second}`
}
// join('1', 2)   // 报错
join(2, 2)
join('a', 'b')
// join<number>('a', 'b')   // 报错。明确指定了传入类型，就要遵守
join<number>(1, 1)


// 更多用法：多个泛型、泛型数组、返回也可以指定为泛型
function joinTwo<T, P>(first: T, second: P[]): T {
  // return first + second  // 报错，因为结果不能保证是类型T
  return first
}

joinTwo<number, string>(1, ['a'])   // string而不是string[]
