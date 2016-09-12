var express = require('express');
var router = express.Router();
var player_win = require('../windows_player')
var player_debian = require('../debian_player')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Radio gaga' });
});


router.get('/play_windows', function(req, res, next) {
  player_win.play(1)
  res.redirect('/')
});

router.get('/play_debian', function(req, res, next) {
  player_debian.play(1)
  res.redirect('/')
});

router.get('/stop', function(req, res, next) {
  player_debian.stop()
  res.redirect('/')
});

module.exports = router;
