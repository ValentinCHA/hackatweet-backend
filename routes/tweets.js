var express = require('express');
var router = express.Router();
const Tweet = require('../models/tweets');
const { checkBody } = require('../modules/checkBody');

router.post('/newTweet', (req, res) => {
    if (!checkBody(req.body, ['content', "username", "firstname", "token"])) {
      res.json({ result: false, error: 'Missing or empty fields' });
      return;
    }

    const newTweet = new Tweet({
        date: new Date(),
        username: req.body.username,
        firstname : req.body.firstname,
        token : req.body.token,
        content: req.body.content,
    })

    newTweet.save().then(newTweet => {
        res.json({result: true, data: newTweet})
    })
});

router.get('/tweets', (req,res) => {
    Tweet.find()
    .then(data => {
        res.json({tweets : data})
    })
});

module.exports = router;