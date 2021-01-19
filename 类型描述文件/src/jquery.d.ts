
// // 定义全局函数
// declare function $(params: () => void): void

// declare function $(params: string): { html: (params: string) => void }

// // 定义命名空间的形式
// declare namespace $ {
//   namespace fn {
//     class init { }
//   }
// }


// 通过module的方式定义类型

declare module 'jquery' {
  function $(params: () => void): void
  function $(params: string): { html: (params: string) => void }
  namespace $ {
    namespace fn {
      class init { }
    }
  }

  export = $;
}