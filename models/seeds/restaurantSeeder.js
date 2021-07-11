const mongoose = require('mongoose')

const Restaurant = require('../restaurant') // 載入 todo model



mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

const restaurants = require('../../restaurant.json')

db.on('error', () => {
  console.log('mongodb error!')
})


db.once('open', () => {
  console.log('mongodb connected!') 
  
    for (let i = 0; i < 8; i++) {
    Restaurant.create({
      id: restaurants.results[i].id,
      name: restaurants.results[i].name,
      image: restaurants.results[i].image,
      category: restaurants.results[i].category,
      rating: restaurants.results[i].rating,
      location: restaurants.results[i].location,
      google_map: restaurants.results[i].google_map,
      phone: restaurants.results[i].phone,
      description: restaurants.results[i].description
    })
  }

 
  console.log('done')
})