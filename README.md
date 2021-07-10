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

2E.使用者可以新增一家餐廳

2F.使用者可以瀏覽一家餐廳的詳細資訊

2G.使用者可以瀏覽全部所有餐廳

2H.使用者可以修改一家餐廳的資訊

2I.使用者可以刪除一家餐廳

3.環境建置
3A.開發環境 Visual Studio Code v1.57.1
3B.執行環境 Node.js v10.15.0
3C.框架 Express.js v4.17.1
3D.模板引擎 Express-handlebars v5.3.2
3E.實用套件 Nodemon v2.0.7
3F.資料庫   MongoDB
3G.映射工具 mongoose 5.13.2 

4.安裝
4A.在終端機輸入指令 Clone 此專案至電腦
git clone https://github.com/Rottie/AC-A3Restaurant.git

4B.進入專案目錄
cd AC-A3Restaurant

4C.	安裝相關套件
npm install express express-handlebars nodemon mongoose

4D.新增種子資料
npm run seed


4E.退出種子資料指令,開始啟動專案
npm run dev

4F.出現以下訊息後，即可在 http://localhost:3000 開始測試使用
Express is listening on localhost:3000
mongodb connected!
