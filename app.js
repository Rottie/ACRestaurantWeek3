//Step 1A require packages used in the project
const express = require('express')
const app = express()
const port = 3000


//Step 2A require express-handlebars here
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

//Step 2B  setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Using static files
app.use(express.static('public'))

//Step 1B routes setting
app.get('/', (req, res) => {
    // past the movie data into 'index' partial template
  res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
    const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)  
    res.render('show', { restaurant: restaurant })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurants,keyword: keyword })
})

//Step 1C start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
