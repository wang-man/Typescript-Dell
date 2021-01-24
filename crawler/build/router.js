"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    res.send("\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n  </head>\n  <body>\n    <form action=\"/getData\" method=\"post\">\n      <input type=\"text\" name=\"password\" placeholder=\"\u8BF7\u8F93\u5165\u5BC6\u7801\" />\n      <button type=\"submit\">\u63D0\u4EA4</button>\n    </form>\n  </body>\n  </html>\n  ");
});
router.post('/getData', function (req, res) {
    console.log(req.body);
    // 慕课网数据爬取...
    // const url = 'https://www.imooc.com/'
    // const filePath = '../data/imooc.json'
    // const crawler = new Crawler(url, filePath)
    // new Imooc(crawler)
    res.send('getData Success');
});
exports.default = router;
