const express = require('express')  // import express
const db = require('./config/db')   // import db
const logger = require('morgan')    // import logger
const bodyParser = require('body-parser')   // import body-parser

// require('./testing')

// import controller
const usersController = require('./controllers/users_controller')



//  invoke app
const app = express()
// use controller
app.use('/',usersController)

// loding middlewares
app.use(bodyParser.urlencoded({
    extended: true
}))

// setup listening port
app.listen(port = 3001, ()=>{
    console.log('connected to express on port '+ port)
})


