# AC-A3Restaurant
A3 打造餐廳作業清單

1.簡介
簡單的餐廳清單，目的是讓使用者查詢並瞭解相關餐廳的資訊

2.專案功能說明
2A.餐廳的簡單資訊
•	照片
•	名稱
•	分類
•	評分

2B.餐廳的詳細資訊
•	類別
•	地址
•	電話
•	描述
•	圖片

2C.搜尋功能
使用者可以透過搜尋餐廳名稱來找到特定的餐廳


2D.其他功能
按下左上角的「我的餐廳清單」會返回首頁


3.環境建置
•	開發環境 Visual Studio Code v1.57.1
•	執行環境 Node.js v10.15.0
•	框架 Express.js v4.17.1
•	模板引擎 Express-handlebars v5.3.2
•	實用套件 Nodemon v2.0.7
• 資料庫   MongoDB
• 映射工具 Mongoose

4.安裝
4A.在終端機輸入指令 Clone 此專案至電腦
git clone https://github.com/Rottie/ACRestaurantWeek2.git

4B.進入專案目錄
cd ACRestaurantWeek2

4C.	安裝相關套件
npm install express express-handlebars nodemon mongoose

4D.新增種子資料
npm run seed


4E.退出種子資料指令,開始啟動專案
npm run dev

4F.出現以下訊息後，即可在 http://localhost:3000 開始測試使用
Express is listening on localhost:3000
mongodb connected!