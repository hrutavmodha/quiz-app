import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
dotenv.config()
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.listen(process.env.PORT, process.env.BACKEND_HOST, () => {
    console.log(`Server is running on ${process.env.BACKEND_HOST}:${process.env.PORT}`)
})