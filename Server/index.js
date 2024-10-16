import express from 'express';
import dotenv from 'dotenv'
import connectDb from './config/DbConnect.js';
import router from './routes/user.js';
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
const PORT = process.env.PORT
const app = express()

// Connect To DataBase
connectDb()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', router);

// app.get('/', (req, res) => {
//     res.send('<h1>Hello Welcome To Form Authentication</h1>')
// })
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`)
})