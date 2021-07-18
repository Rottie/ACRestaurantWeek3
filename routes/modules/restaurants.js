const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')



//I.Create new restaurant
router.get('/new', (req, res) => {
  return res.render('new')
})

//I.Create new restaurant
router.post('/', (req, res) => {
  const name = req.body.name
   const category = req.body.category 
   const image = req.body.image
   const location = req.body.location  
   const phone = req.body.phone
   const google_map = req.body.google_map  
   const rating = req.body.rating
   const description = req.body.description  

  return Restaurant.create({ name ,category,image,location,phone,google_map,rating,description})     // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁

    .catch(error => console.log(error))
})

//II.Read specific data
router.get('/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  return Restaurant.findById(id)
    .lean()
    .then((restaurants) => res.render('show', { restaurants }))
    .catch(error => console.log(error))
})

//III.Update
router.get('/:restaurant_id/edit', (req, res) => {
  const id = req.params.restaurant_id
  return Restaurant.findById(id)
    .lean()
    .then((restaurants) => res.render('edit', { restaurants }))
    .catch(error => console.log(error))
})

//IV.Upadte
router.put('/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  const name = req.body.name
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
router.delete('/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  return Restaurant.findById(id)
    .then(restaurants => restaurants.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router