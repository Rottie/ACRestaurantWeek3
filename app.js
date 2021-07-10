const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose') // 載入 mongoose

const Restaurant = require('./models/restaurant') // 載入 Todo model

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

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

app.engine('hbs', exphbs({ defaultLayout: 'main',extname:'.hbs' }))
app.set('view engine', 'hbs')


app.use(express.static('public'))
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(express.urlencoded({ extended: true }))

//I.View all restaurant 
app.get('/', (req, res) => {
    Restaurant.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .then(restaurants => res.render('index', { restaurants })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})



//II.Create new restaurant
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

//II.Create new restaurant
app.post('/restaurants', (req, res) => {
  const name = req.body.name     
  const name_en = req.body.name_en   
   const category = req.body.category 

   const image = req.body.image
   const location = req.body.location  
   const phone = req.body.phone
   const google_map = req.body.google_map  
   const rating = req.body.rating
   const description = req.body.description  


  return Restaurant.create({ name ,name_en,category,image,location,phone,google_map,rating,description})     // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
   
    .catch(error => console.log(error))
})


//III.Read specific data
app.get('/restaurants/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  return Restaurant.findById(id)
    .lean()
    .then((restaurants) => res.render('show', { restaurants }))
    .catch(error => console.log(error))
})




//IV.Update
app.get('/restaurants/:restaurant_id/edit', (req, res) => {
  const id = req.params.restaurant_id
  return Restaurant.findById(id)
    .lean()
    .then((restaurants) => res.render('edit', { restaurants }))
    .catch(error => console.log(error))
})

//IV.Upadte
app.post('/restaurants/:restaurant_id/edit', (req, res) => {
  const id = req.params.restaurant_id
  const name = req.body.name
   const name_en = req.body.name_en   
   const category = req.body.category 

   const image = req.body.image
   const location = req.body.location  
   const phone = req.body.phone
   const google_map = req.body.google_map  
   const rating = req.body.rating
   const description = req.body.description

  return Restaurant.findById(id)
    .then(restaurants => {
      restaurants.name = name
      restaurants.name_en = name_en
      restaurants.category = category
      restaurants.image = image
      restaurants.location = location
      restaurants.phone = phone
      restaurants.google_map = google_map
      restaurants.rating = rating
      restaurants.description = description
      return restaurants.save()
    })
    .then(()=> res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})


//IV.DELETE
app.post('/restaurants/:restaurant_id/delete', (req, res) => {
  const id = req.params.restaurant_id
  return Restaurant.findById(id)
    .then(restaurants => restaurants.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


//V.Searching
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase()
  Restaurant.find()
    .lean()
    .then((restaurants) => {
      restaurants = restaurants.filter((restaurant) =>restaurant.name.toLowerCase().includes(keyword) )
      res.render('index', { restaurants: restaurants, keyword: keyword })
    })
    .catch(error => console.error(error)) // 錯誤處理
})


app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
