interface Person {
  name: string,
  age: number,
  gender: string
}

class Teacher {
  constructor(private infos: Person) { }

  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.infos[key];
  }
}

const teacher = new Teacher({
  name: 'Man',
  age: 20,
  gender: 'Male'
})

// const info = teacher.getInfo('hello');
const info = teacher.getInfo('name');
console.log(info);
