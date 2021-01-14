var express = require("express");
var router = express.Router();
const { forwardRequest } = require("../controllers/listenAPIControllers");

/* GET home page. */
router.get("*", forwardRequest, function (req, res, next) {
  res.send(res.locals);
});

module.exports = router;
