import express, { request, response, Response } from 'express';
import bodyParser from 'body-parser';
import router from './router';
const app = express();


app.listen(7001, () => {
  console.log('express 服务启动成功')
})

//对body-parser进行配置----要放在router上面
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router);
