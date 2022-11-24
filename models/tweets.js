const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    date: Date,
    username: String,
    firstname : String,
    token : String,
    content: String,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;