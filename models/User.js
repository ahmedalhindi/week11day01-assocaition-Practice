const mongoose = require('mongoose')

// embedded document schema comes first
const TweetSchema = new Schema ({
    tweetText: {
        type: String
    }
},{timestamps: true})

// the top schema which holds sub schema comes last
const UserSchema = new Schema({
    name:{
        type: String,
        default: 'Invalid User'
    },
    tweets: [TweetSchema]
})

// Models referencing singular instance of my model ( User, Tweet) and using 
const TweetModel = mongoose.model('Tweet', TweetSchema)
const UserModel = mongoose.model("User", UserSchema)

module.exports = {
    TweetModel, UserModel
}