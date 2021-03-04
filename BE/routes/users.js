var express = require("express");
var router = express.Router();
const { getMe, register, login, requiredLogin, changeUserProfile } = require("../controllers/userControllers");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(JSON.stringify(res.locals));
});

router.post("/register", register, function (req, res, next) {
  res.send(JSON.stringify(res.locals));
});

router.post("/login", login, function (req, res, next) {
  res.send(JSON.stringify(res.locals));
});

router.get("/me", getMe, (req, res, next) => {
  res.send(JSON.stringify(res.locals));
});

router.post("/me", requiredLogin, changeUserProfile, (req, res, next) => {
  res.json(res.locals);
})

module.exports = router;
