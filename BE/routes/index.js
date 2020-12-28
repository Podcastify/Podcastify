var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const result = JSON.stringify(res.locals)
  res.send(result);
  console.log(result);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
