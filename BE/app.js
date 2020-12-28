var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var logger = require('morgan');
const flash = require('connect-flash');
const listenKey = process.env._listenKey;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const listenAPIRouter = require('./routes/listenAPI');

var app = express();

const init = (req, res, next) => {
  res.locals.ok = false;
  app.locals.listenKey = listenKey;
  next();
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(init)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/listenAPI', listenAPIRouter);

app.listen(process.env._port, () => {
  console.log(`listening to ${process.env._port}`)
})

module.exports = app;
