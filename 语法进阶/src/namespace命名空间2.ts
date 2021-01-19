namespace Components {
  export class Aside {
    constructor() {
      const aside = document.createElement('aside');
      aside.innerText = '这是其他部分';
      document.body.appendChild(aside);
    }
  }
}