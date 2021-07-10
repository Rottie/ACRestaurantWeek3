const mongoose = require('mongoose')

const Restaurant = require('../restaurant') // 載入 todo model



mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('鏈接成功!') 
  
    Restaurant.create(
      {name:'Subway 赛百味',
      name_en: 'Subway',
      category: '美國料理',
      image: "https://www.sinoquebec.com/data/attachment/forum/201712/28/110601vmevtfefdfsmff0v.jpg",
      location: "台北市中山區林森北路 107 巷 8 號",
      phone: " 02 2521 2813",
      google_map: "https://goo.gl/maps/cUJEmFSRKyH2",
      rating: 4,
      description: "健康漢堡，飲料"
    },
    {name:'MC Donald 麥當勞',
      name_en: 'MC Donald',
      category: '英國料理',
      image: "https://doqvf81n9htmm.cloudfront.net/data/crop_article/104704/shutterstock_1181606473.jpg_1140x855.jpg",
      location: "新北市中山區林森北路 107 巷 8 號",
      phone: " 02 2521 2813",
      google_map: "https://goo.gl/maps/cUJEmFSRKyH2",
      rating: 5,
      description: "好吃薯條 漢堡"
    },
     {name:'Sushi爭鮮壽司',
      name_en: 'Sushi King Express',
      category: '日本料理',
      image: "https://images.zi.org.tw/baliman/2021/04/24212350/1619270630-cddf2f51189ad516382f3cd40c98692e.jpg",
      location: "新竹市中山區林森北路 107 巷 8 號",
      phone: " 02 2521 2823",
      google_map: "https://goo.gl/maps/cUJEmFSRKyH2",
      rating: 4.5,
      description: "好吃薯條 漢堡"
    }
    )

 
  console.log('done')
})