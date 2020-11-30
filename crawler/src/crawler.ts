import fs from 'fs'
import path from 'path'
import superagent from 'superagent'

export default class Crawler {
  constructor(private url: string, private filePath: string) {
  }

  // 1. 爬取原始html
  async getRawHtml() {
    const html = await superagent.get(this.url)
    return html.text
  }


  // 2.读取可能已存文件内容
  readFileJson() {
    // 创建文件路径
    const filePath = path.resolve(__dirname, this.filePath)

    let fileContent = {}
    // 1.判断是否有该文件，有则放入一个对象
    if (fs.existsSync(filePath)) {
      // 读取文件
      const fileString = fs.readFileSync(filePath, 'utf-8')
      fileContent = JSON.parse(fileString)
    }
    return fileContent
  }

  // 3.将业务对象解析后的结果写入到文件中
  generateJson(crawlerData: string) {
    const filePath = path.resolve(__dirname, this.filePath)

    fs.writeFileSync(filePath, crawlerData)
  }

}
