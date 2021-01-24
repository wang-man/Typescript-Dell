class Person1{
  name = 'Dell'
  getName(){
    return this.name
  }
}


class Teacher1 extends Person1 {
  teacherName = 'Lee'
  getName(){
    return super.getName() + this.teacherName     // super代表父类
  }

}


const teacher11 = new Teacher1()

const teacherName = teacher11.getName()
console.log(teacherName)
