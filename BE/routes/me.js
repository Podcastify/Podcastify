// TODO me/subcription
// TODO me/playlists
// TODO me/record

var express = require('express');
var router = express.Router();
const { addPlaylist, getPlaylists, deletePlaylist, editPlaylist } = require('../controllers/playlistControllers');
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

router.delete('/playlist/:id', deletePlaylist, function (req, res, next) {
  res.locals.ok = true;
  res.send(JSON.stringify(res.locals));
})

router.post('/playlist/:id', editPlaylist, function (req, res, next) {
  res.locals.ok = true;
  res.send(JSON.stringify(res.locals));
})

module.exports = router;
