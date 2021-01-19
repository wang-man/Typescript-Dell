interface Item {
  name: string
}

// 泛型可以从接口扩展来，也可以从联合类型中扩展，限定这个泛型：

// class DataManager<T extends string | number> {
class DataManager<T extends Item> {
  constructor(private data: T[]) {      // data为每项的类型为这个泛型T的数组

  }

  getItem(index): T {
    return this.data[index]
  }
}

const data = new DataManager([{
  name: 'man'
}])