
// 多类型项的数组
const arr: (number | string)[] = [3, 's', 5]




// 每项定义为对象，并且对象属性名确定的数组
const objectArr: { name: string, age: number }[] = [{ name: 'hello', age: 2323 }, { name: 's' }]



// 使用类型别名定义数组项的类型
type User = { name: string, age: number }
const objectArr2: User[] = [
  { name: 'w', age: 344 }
]