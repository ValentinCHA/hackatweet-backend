const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    date: Date,
    name : String,
    tweetName: String,
    title : String,
    content: String,
    canDelete: String,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;