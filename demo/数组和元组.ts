
// 多类型项的数组
const arr: (number | string)[] = [3, 's', 5]




// 每项定义为对象，并且对象属性名确定的数组
const objectArr: { name: string, age: number }[] = [{ name: 'hello', age: 2323 }]



// 使用类型别名定义数组项的类型
type User = { name: string, age: number }
const objectArr2: User[] = [
  { name: 'w', age: 344 }
]


// 元组 tuple-----------更为严格的数组，固定数组每项类型及数组长度
const teacherInfo: [string, string, number] = ['dell', 'male', 20]

// 嵌套的元组，注意与数组的区别
const teacheList: [string, string, number][] = [
  ['dell', 'male', 18],
  ['man', 'male', 20],
]
