import cheerio from 'cheerio'
import Crawler from './crawler'

interface CourseData {
  src: string;
  desc: string;
}

interface CourseObj {
  time: string
  data: CourseData[]
}

interface CourseJson {
  [propName: string]: CourseData[]  // 属性名为时间戳，所以是不确定的，因此可以用可变键来表示
}

class Course {
  constructor(private crawler: Crawler) {
    this.getCourseHtml(crawler)
  }

  // 1.拿到爬虫得到的原始html
  async getCourseHtml(crawler: Crawler) {
    const html = await crawler.getRawHtml()

    this.parseHtml(html)
  }

  // 2.解析爬虫给到的html，提取所需数据
  parseHtml(html: string) {
    const $ = cheerio.load(html)
    const courseDomList = $('.course-item')

    const courseList: CourseData[] = []
    courseDomList.each((index, item) => {
      const src = $(item).find('.course-img').attr('src') || ''
      const desc = $(item).find('.course-desc').text()
      courseList.push({
        src,
        desc
      })
    })
    const time = (new Date()).getTime().toString()

    const courseObjData = {      // 每次爬取结果，以时间戳作为键来存储
      time,
      data: courseList
    }

    this.generateContent(courseObjData)
  }

  // 3.生成所需数据格式，给到爬虫
  generateContent(courseData: CourseObj) {
    let fileContent = this.crawler.readFileJson();

    // 2.每次执行此类就爬取结果(增量式)填充到对象中，然后写入文件
    let oneCourseJson: CourseJson = {}
    oneCourseJson[courseData['time']] = courseData['data']
    const newContent = Object.assign({}, fileContent, oneCourseJson)

    this.crawler.generateJson(JSON.stringify(newContent))
  }

}

// Dell-Lee课程数据爬取/////

const url = 'http://www.dell-lee.com/typescript/demo.html'
const filePath = '../data/course.json'

const crawler = new Crawler(url, filePath)

new Course(crawler)
