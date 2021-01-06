// TODO me/subcription
// TODO me/playlists
// TODO me/record

var express = require('express');
var router = express.Router();
const { addPlaylist, getPlaylists } = require('../controllers/playlistControllers');
const { getMe } = require('../controllers/userControllers');

/* GET home page. */
router.get('/', getMe, function (req, res, next) {
  res.locals.ok = true;
  res.send(JSON.stringify(res.locals));
});

router.get('/playlist', getPlaylists, function (req, res, next) {
  res.locals.ok = true;
  res.send(JSON.stringify(res.locals));
});

router.post('/playlist', addPlaylist, function (req, res, next) {
  res.locals.ok = true;
  res.send(JSON.stringify(res.locals));
});

router.delete('/playlist/:id', function (req, res, next) {
  res.locals.ok = true;
  res.locals.playlistId = req.params.id;
  res.send(JSON.stringify(res.locals));
})

module.exports = router;
