import express from 'express';
import {join} from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';

import {API_PORT, PODCASTIFY_SECRET, LISTEN_KEY} from './constants/index.js';
import {requiredLogin} from './controllers/userControllers.js';

import meRouter from './routes/me.js';
import usersRouter from './routes/users.js';
import listenAPIRouter from './routes/listenAPI.js';

var app = express();

const init = (req, res, next) => {
    res.locals.ok = false;
    app.locals.listenKey = LISTEN_KEY;
    app.locals.secret = PODCASTIFY_SECRET;
    next();
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));
app.use(init);
app.options('*', cors()); // include before other routes

app.use('/me', requiredLogin, meRouter);
app.use('/users', usersRouter);
app.use('/listenAPI', listenAPIRouter);

app.listen(API_PORT, () => {
    console.log(`listening to ${API_PORT}`);
});

export default app;
