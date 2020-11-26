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
  // private a: string
  constructor(private a: string) {
    // this.a = a
    console.log(this.a)
    this.getRawHtml()
  }

  async getRawHtml() {
    // console.log(this.a)
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
    const courseInfo = {
      time,
      data: courseList
    }

    this.generateCourseJson(courseInfo)
  }

  // 写入到文件中
  generateCourseJson(newCourseInfo: CourseObj) {
    // 创建文件路径
    const filePath = path.resolve(__dirname, './course.json')

    let fileContent: CourseJson = {}
    // 1.判断是否有该文件，有则放入一个对象
    if (fs.existsSync(filePath)) {
      // 读取文件
      const fileString = fs.readFileSync(filePath, 'utf-8')
      console.log(fileString)
      fileContent = JSON.parse(fileString)
    }
    // 2.每次执行此类就爬取结果(增量式)填充到对象中，然后写入文件
    fileContent[newCourseInfo['time']] = newCourseInfo['data']

    fs.writeFileSync(filePath, JSON.stringify(fileContent))
  }

}

const crawler = new Crawler('1')