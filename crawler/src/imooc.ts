// 爬取慕课网

import cheerio from 'cheerio'
import Crawler from './crawler'

interface ImoocData {
  title: string
  price: string
  originPrice: string
}

interface ImoocObj {
  type: string
  data: ImoocData[]
}

interface ImoocJson {
  [propName: string]: ImoocData[]  // 属性名为时间戳，所以是不确定的，因此可以用可变键来表示
}

class Imooc {
  constructor(private crawler: Crawler) {
    this.getImoocHtml(crawler)
  }

  // 1.拿到爬虫得到的原始html
  async getImoocHtml(crawler: Crawler) {
    const html = await crawler.getRawHtml()
    this.parseHtml(html)
  }

  // 2.解析爬虫给到的html，提取所需数据
  parseHtml(html: string) {
    const $ = cheerio.load(html)
    const courseDomList = $('.container-types')

    const curseData: ImoocObj[] = []
    courseDomList.each((index, item) => {
      const type = $(item).attr('data-group') || ''
      const lessonItem = $(item).find('.list')


      const courseList: ImoocData[] = []
      lessonItem.each((index, item) => {
        const lessonList = $(item).find('a.item');

        lessonList.each((index, item) => {
          const title = $(item).find('p.title').text() || ''
          const price = $(item).find('.price').text() || ''
          const originPrice = $(item).find('.origin-price').text() || ''

          courseList.push({
            title,
            price,
            originPrice,
          })
        })

      })

      curseData.push({
        type,
        data: courseList
      })
    })

    this.generateContent(curseData)
  }

  // 3.生成所需数据格式，给到爬虫
  generateContent(courseData: ImoocObj[]) {
    let fileContent = this.crawler.readFileJson();

    // 2.每次执行此类就爬取结果(增量式)填充到对象中，然后写入文件
    let oneImoocJson: ImoocJson = {}
    courseData.forEach(item => {
      oneImoocJson[item['type']] = item['data']
    })
    const newContent = Object.assign({}, fileContent, oneImoocJson)

    this.crawler.generateJson(JSON.stringify(newContent))
  }

}

export default Imooc;

// 慕课网数据爬取...
// const url = 'https://www.imooc.com/new/'
// const filePath = '../data/imooc.json'

// const crawler = new Crawler(url, filePath)

// new Imooc(crawler)
