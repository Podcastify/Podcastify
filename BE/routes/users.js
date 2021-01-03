// TODO users/register
// TODO users/login

var express = require('express');
var router = express.Router();
const { getMe } = require('../controllers/userControllers');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(JSON.stringify(res.locals));
});

router.get('/me', getMe, (req, res, next) => {
  res.send(JSON.stringify(res.locals));
})

module.exports = router;
