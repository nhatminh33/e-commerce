const express = require('express')
const app = express()
const { dbConnect } = require('./utiles/db')

const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()


//truy cập fe 
app.use(cors({
    origin : ['http://localhost:3000'], // Chỉ cho phép frontend từ domain này gọi API
    credentials : true // Cho phép gửi credentials (cookies, headers)
}))
app.use(bodyParser.json()) // Parse JSON body (email, password)
app.use(cookieParser()) // Parse cookies nếu có


app.use('/api',require('./routes/authRoutes'))
app.use('/api',require('./routes/dashboard/categoryRoutes'))
app.use('/api',require('./routes/dashboard/productRoutes'))
app.use('/api',require('./routes/dashboard/sellerRoutes'))


app.get('/', (req, res) => res.send('Hello Server'))
const port = process.env.PORT
dbConnect()
app.listen(port, () => console.log(`server running in port ${port}`))