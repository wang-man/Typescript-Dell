// 引入其他命名空间的方式
/// <reference path='namespace命名空间2.ts' />

namespace Homepage {
  export namespace SubPage {
    export class Test { }
  }
  class Header {
    constructor() {
      const header = document.createElement('header');
      header.innerText = '这是头部';
      document.body.appendChild(header);
    }
  }
  class Main {
    constructor() {
      const main = document.createElement('main');
      main.innerText = '这是主内容';
      document.body.appendChild(main);
    }
  }
  class Footer {
    constructor() {
      const footer = document.createElement('footer');
      footer.innerText = '这是尾部';
      document.body.appendChild(footer);
    }
  }

  export class CreatePage {
    constructor() {
      new Header();
      new Main();
      new Footer();
      new Components.Aside();
    }
  }
}