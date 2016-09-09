var express = require('express');
var router = express.Router();
var player = require('../windows_player')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Radio gaga' });
});


router.get('/play', function(req, res, next) {
  player.play(1)
  res.redirect('/')
});

module.exports = router;
