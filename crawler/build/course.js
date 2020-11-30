"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var crawler_1 = __importDefault(require("./crawler"));
var Course = /** @class */ (function () {
    function Course(crawler) {
        this.crawler = crawler;
        this.getCourseHtml(crawler);
    }
    // 1.拿到爬虫得到的原始html
    Course.prototype.getCourseHtml = function (crawler) {
        return __awaiter(this, void 0, void 0, function () {
            var html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, crawler.getRawHtml()];
                    case 1:
                        html = _a.sent();
                        this.parseHtml(html);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 2.解析爬虫给到的html，提取所需数据
    Course.prototype.parseHtml = function (html) {
        var $ = cheerio_1.default.load(html);
        var courseDomList = $('.course-item');
        var courseList = [];
        courseDomList.each(function (index, item) {
            var src = $(item).find('.course-img').attr('src') || '';
            var desc = $(item).find('.course-desc').text();
            courseList.push({
                src: src,
                desc: desc
            });
        });
        var time = (new Date()).getTime().toString();
        var courseObjData = {
            time: time,
            data: courseList
        };
        this.generateContent(courseObjData);
    };
    // 3.生成所需数据格式，给到爬虫
    Course.prototype.generateContent = function (courseData) {
        var fileContent = this.crawler.readFileJson();
        // 2.每次执行此类就爬取结果(增量式)填充到对象中，然后写入文件
        var oneCourseJson = {};
        oneCourseJson[courseData['time']] = courseData['data'];
        var newContent = Object.assign({}, fileContent, oneCourseJson);
        this.crawler.generateJson(JSON.stringify(newContent));
    };
    return Course;
}());
// Dell-Lee课程数据爬取/////
var url = 'http://www.dell-lee.com/typescript/demo.html';
var filePath = '../data/course.json';
var crawler = new crawler_1.default(url, filePath);
new Course(crawler);
