// TODO me/subcription
// TODO me/playlists
// TODO me/record

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.locals.ok = true;
  res.send(JSON.stringify(res.locals))
});

module.exports = router;
