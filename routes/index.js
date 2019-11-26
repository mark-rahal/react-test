var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/test', function(req, res, next) {
  console.log('test!');
  res.sendStatus(200);
});

module.exports = router;
