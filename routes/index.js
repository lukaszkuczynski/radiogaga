var express = require('express');
var router = express.Router();
var player_win = require('../windows_player')
var player_debian = require('../debian_player')

/* GET home page. */
router.get('/', function(req, res, next) {
    var stations = [
      {"name": "crema cafe", "gg_id":76},
      {"name": "po polsku", "gg_id":1},
      {"name": "smooth jazz", "gg_id":60},
      {"name": "polski rock", "gg_id":29}
    ]
    res.render('index', { title: 'Radio gaga', stations:stations });
});


router.get('/play_gg_relay/:gg_id', function(req, res, next) {
  player_debian.play_gg_relay(1)
  res.redirect('/')
});

router.get('/stop', function(req, res, next) {
  player_debian.stop()
  res.redirect('/')
});

module.exports = router;
