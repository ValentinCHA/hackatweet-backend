var express = require('express');
var router = express.Router();

router.post('/signup', (req, res) => {
    if (!checkBody(req.body, ['content'])) {
      res.json({ result: false, error: 'Missing or empty fields' });
      return;
    }

});

module.exports = router;