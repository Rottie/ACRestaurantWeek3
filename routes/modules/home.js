// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Restaurant = require('../../models/restaurant')



//I.View all restaurant 
router.get('/', (req, res) => {
    Restaurant.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
      .sort({ _id: 'asc' }) // desc

    .then(restaurants => res.render('index', { restaurants })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})

//V.Searching
router.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase()
  Restaurant.find()
    .lean()
    .then((restaurants) => {
      restaurants = restaurants.filter((restaurant) =>restaurant.name.toLowerCase().includes(keyword) )
      res.render('index', { restaurants: restaurants, keyword: keyword })
    })
    .catch(error => console.error(error)) // 錯誤處理
})

// 匯出路由模組
module.exports = router
