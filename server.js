// dependencies inclusion 
require('dotenv').config()

const express = require('express')

const app = express()

const mongoose = require('mongoose')

// connect to database
mongoose.connect('mongodb://localhost/suscribers',{ useUnifiedTopology: true })

const db = mongoose.connection

db.on( 'error', (error) => console.error(error))

db.once( 'open', () => console.log('connected to Database'))

app.use(express.json)

const suscribersRouter = require('./routes/suscribers') 










// function to listen  on port 3000

app.listen(3000, () =>  console.log('server started'))



