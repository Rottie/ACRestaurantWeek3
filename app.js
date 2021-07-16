const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose') 

const Restaurant = require('./models/restaurant') 

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true }) 

// 取得資料庫連線狀態
const db = mongoose.connection

// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})



const exphbs = require('express-handlebars')
const methodOverride = require('method-override') 
// 設定每一筆請求都會透過 methodOverride 進行前置處理

// 引用路由器
const routes = require('./routes')


app.engine('hbs', exphbs({ defaultLayout: 'main',extname:'.hbs' }))
app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.static('public'))
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(express.urlencoded({ extended: true }))





// 將 request 導入路由器
app.use(routes)







app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
