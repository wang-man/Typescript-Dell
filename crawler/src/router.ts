import express, { Request, Response } from 'express'
import Imooc from './imooc';
import Crawler from './crawler';


interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined   // 给对象动态属性添加类型定义的方法
  }
}


const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <form action="/getData" method="post">
      <input type="text" name="password" placeholder="请输入密码" />
      <button type="submit">提交</button>
    </form>
  </body>
  </html>
  `)
})

router.post('/getData', (req: RequestWithBody, res: Response) => {
  console.log(req.body)

  // 慕课网数据爬取...
  // const url = 'https://www.imooc.com/'
  // const filePath = '../data/imooc.json'

  // const crawler = new Crawler(url, filePath)

  // new Imooc(crawler)

  res.send('getData Success');
})


export default router;