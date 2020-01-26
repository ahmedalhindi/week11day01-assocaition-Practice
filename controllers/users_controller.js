// import router
const router = require('express').Router()
// import models
const {UserModel, TweetModel} = require('../models/User')


// define router paths
router.get('/users', (req, res => {
    res.send(console.log(req.originalUrl))
}))

module.exports = router