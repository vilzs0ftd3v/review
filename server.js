//import express
const express = require('express')
const bodyParser = require('body-parser')

//use express
const app = express()


/* middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//routes
const viewersRoutes = require('./routes/Viewers')

app.use('/viewers',viewersRoutes)
//define port
const port = 3000
//app listen to port

//to check the app is running on the given port
app.listen(port,() => { 
    console.log("Listening on: ",port)
})