// setting up connection to MongoDB
const mongoose = require('mongoose')

// connection string
const dbName = "users"
dbURI = "mongodb://localhost/" + dbName

mongoose.connect(dbURI,
    {useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify:false, useCreateIndex: true})

// initiate a connection
const db = mongoose.connection

// connection error handling
db.on('error', err => console.log(err))
db.once('open', ()=> console.info('Mongoose connected to \"' + dbName +'\" database'+ ' //', new Date()))

// exporting our mongoDB connection to be used elsewhere
module.exports = db

