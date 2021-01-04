// TODO 登入
// TODO 註冊


// const util = require('util')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models');
const { Users, Podcasts, Playlists, Episodes, Subscriptions, Records } = db;
const saltRounds = 10;

const register = async (req, res, next) => {
  // console.log(req.body)
  const { username, password } = req.body;
  if (!username || !password) {
    res.locals.errorMessage = 'Username, password are required'
    return res.status(400).send(JSON.stringify(res.locals))
  }
  const hash = bcrypt.hashSync(password, saltRounds)

  try {
    const newUser = await Users.create(
      {
        username,
        password: hash
      }
    )

    const token = jwt.sign({ id: newUser.id, username: newUser.username }, res.app.locals.secret);
    res.locals.token = token;
    res.locals.ok = true;
  } catch (err) {
    res.locals.error = err.errors[0].message;
    return res.status(500).send(JSON.stringify(res.locals))
  }
  next();
}

const login = async (req, res, next) => {
  const handleInvalidInputs = () => {
    res.locals.errorMessage = 'Invalid inputs, please check your username or password again.'
    res.status(400).send(JSON.stringify(res.locals));
  }

  const { username, password } = req.body;
  if (!username || !password) {
    res.locals.errorMessage = 'Username, password are required'
    return res.status(400).send(JSON.stringify(res.locals))
  }
  try {
    const user = await Users.findOne(
      {
        where: {
          username
        }
      },
      {
        raw: true,
      }
    )
    if (!user) return handleInvalidInputs();
    if (!bcrypt.compareSync(password, user.password)) return handleInvalidInputs()

    const token = jwt.sign({ id: user.id, username: user.username }, res.app.locals.secret);
    res.locals.token = token;
    res.locals.ok = true;
  } catch (err) {
    res.locals.error = err.errors[0].message;
    return res.status(500).send(JSON.stringify(res.locals))
  }
  next()
}

const requiredLogin = async (req, res, next) => {
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.replace('Bearer ', '');
  let jwtData;
  console.log('secret:', res.app.locals.secret);
  console.log({ token, authHeader });

  try {
    jwtData = jwt.verify(token, res.app.locals.secret);
  } catch (error) {
    res.locals.errorMessage = 'Required a valid token.'
    return res.status(401).send(JSON.stringify(res.locals))
  }

  req.jwtData = jwtData;
  next();
}

const getMe = async (req, res, next) => {
  try {
    const me = await Users.findOne({
      where: {
        username: 'john'
      },
      attributes: ['username', 'email', 'isAdmin'],
      include: [
        {
          model: Podcasts,
          as: 'subscriptions',
          attributes: ['id'],
          through: {
            attributes: []
          }
        },
        {
          model: Playlists,
          attributes: ['id', 'name'],
          include: {
            model: Episodes,
            attributes: ['id'],
            through: {
              attributes: []
            }
          }
        },
        {
          model: Records,
          as: 'playedRecords',
          attributes: ['episodeId', 'progress']
        }
      ]
    })
    if (!me || !me.username) return next();
    res.locals.data = me;
    res.locals.ok = true;
  } catch (error) {
    // console.log(error);
    // res.locals.error = error;
    res.locals.errorMessage = 'Server failure. Please try again later.'
    res.status(500).send(JSON.stringify(res.locals));
  }
  next();
}

const getUserByUsername = async (req, res, next) => {
  next()
}

const userControllers = { getMe, requiredLogin, getUserByUsername, register, login }

module.exports = userControllers
