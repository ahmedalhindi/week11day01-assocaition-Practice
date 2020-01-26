// setting up connection to MongoDB
const mongoose = require('mongoose')

// connection string
collection = "users"
dbURI = "mongodb://localhost/" +collection
mongoose.connect = (dbURI,
    {useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify:false, useCreateIndex: true})

// initiate a connection
const db = mongoose.connection

// connection error handling
db.on('error', err => console.log(err))
db.once('open', ()=> console.info('Mongoose connected to ' + collection + '//', new Date()))

// exporting our mongoDB connection to be used elsewhere
module.exports = db

