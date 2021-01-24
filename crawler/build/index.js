"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
app.listen(7001, function () {
    console.log('express 服务启动成功');
});
//对body-parser进行配置----要放在router上面
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(router_1.default);
