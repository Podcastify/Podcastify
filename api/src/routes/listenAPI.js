import {Router} from 'express';
const router = Router();
import {forwardRequest} from '../controllers/listenAPIControllers';

/* GET home page. */
router.get('*', forwardRequest, function (req, res, next) {
    res.send(res.locals);
});

export default router;
