const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

const app = express()

const envPath = path.resolve('.env')
dotenv.config({path:envPath})

const API_URL = process.env.API_URL
const API_PORT = process.env.API_PORT
const APP_URL = process.env.APP_URL

app.use(cors({
    origin: APP_URL,
    methods:['POST','GET','OPTIONS'],
    credentials:true
}))
app.use(express.json())

app.options('*', cors())
const routes = require('./routes.js')
app.use('/', routes)

app.listen(API_PORT, ()=>{
    console.log(`Server running at ${API_URL}:${API_PORT}`)
    console.log(`App allowed origin at ${APP_URL}`)
    // console.log(`Serveur en cours d\'execution à l'adresse : ${API_URL}:${API_PORT}`)
})
