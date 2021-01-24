interface Person {
  name: string,
  age?:number
}


// 多个地方如果是相同的类型注解，我们可以写一个接口用来代替使用。说白了，接口就是类型注解，只是为了方便读写

const getpersonName = (person: Person) =>{
  console.log(person.name)
}

const setpersonName = (person: Person, name: string) =>{
  person.name = name
}

const person = {
  name: 'hello',
  sex: 'M'      // 接口中未指定的字段
}

  // 字面量，强校验
// getpersonName({
//   name: 'hello',
//   sex: 'M'
// })



// 对象，不强校验
setpersonName(person, 'world')

// 接口也可以继承
interface Teacher extends Person {
  teach(): string
}
const getTeacher = (Teacher) =>{
  console.log(Teacher.teach())
}

const teacher ={
  name: 'dell',
  teach(){
    return 'ts'
  }
}

getTeacher(teacher)
