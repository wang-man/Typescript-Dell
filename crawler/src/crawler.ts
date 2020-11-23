import fs from 'fs'
import path from 'path'
import superagent from 'superagent'
import cheerio from 'cheerio'

interface Course {
  src: string;
  desc: string;
}

interface CourseObj {
  time: string
  data: Course[]      // 属性名为时间戳，所以是不确定的，因此可以用可变键来表示
}
interface CourseJson {
  [propName: string]: Course[]  // 属性名为时间戳，所以是不确定的，因此可以用可变键来表示
}

class Crawler {
  private url = 'http://www.dell-lee.com/typescript/demo.html'
  constructor() {
    this.getRawHtml()
  }

  async getRawHtml() {
    const html = await superagent.get(this.url)
    this.getCourseInfo(html.text)
  }

  getCourseInfo(html: string) {
    const $ = cheerio.load(html)
    const courseDomList = $('.course-item')

    const courseList: Course[] = []
    courseDomList.each((index, item) => {
      const src = $(item).find('.course-img').attr('src') || ''
      const desc = $(item).find('.course-desc').text()
      courseList.push({
        src,
        desc
      })
    })
    const time = (new Date()).getTime().toString()

    // 每次爬取结果，以时间戳作为键来存储
    const courseInfo: CourseObj = {
      time,
      data: courseList
    }

    this.getCourseJson(courseInfo)
  }

  // 写入到文件中
  getCourseJson(newCourseInfo: CourseObj) {
    // 创建文件路径
    const filePath = path.resolve(__dirname, './course.json')
    let fileContent: CourseJson = {}
    // 判断是否有该文件
    if (fs.existsSync(filePath)) {
      // 读取文件
      const fileString = fs.readFileSync(filePath, 'utf-8')
      console.log(fileString)
      fileContent = JSON.parse(fileString)
    }
    // 增量式填充到对象中
    fileContent[newCourseInfo['time']] = newCourseInfo['data']

    // 写入文件
    fs.writeFileSync(filePath, JSON.stringify(fileContent))
  }

}

const crawler = new Crawler()