import {
    changeUserProfile,
    getMe,
    login,
    register,
    requiredLogin,
} from 'Controller';
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(JSON.stringify(res.locals));
});

router.post('/register', register, function (req, res, next) {
    res.send(JSON.stringify(res.locals));
});

router.post('/login', login, function (req, res, next) {
    res.send(JSON.stringify(res.locals));
});

router.get('/me', getMe, (req, res, next) => {
    res.send(JSON.stringify(res.locals));
});

router.post('/me', requiredLogin, changeUserProfile, (req, res, next) => {
    res.json(res.locals);
});

export default router;
