// const util = require('util')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models");
const { Users, Podcasts, Playlists, Episodes, Subscriptions, Records } = db;
const saltRounds = 10;

const register = async (req, res, next) => {
  let { username, password } = req.body;
  if (!username || !password) {
    res.locals.errorMessage = "Username, password are required";
    return res.status(400).send(JSON.stringify(res.locals));
  }
  const hash = bcrypt.hashSync(password, saltRounds);
  username = username.toLowerCase();
  let newUser;
  try {
    newUser = await Users.create({
      username,
      password: hash,
    });
  } catch (err) {
    res.locals.error = err.errors[0].message; //FIXME catch err
    return res.status(500).send(JSON.stringify(res.locals));
  }
  const token = jwt.sign(
    { id: newUser.id, username: newUser.username },
    res.app.locals.secret
  );
  res.locals.token = token;
  res.locals.ok = true;
  next();
};

const login = async (req, res, next) => {
  const handleInvalidInputs = () => {
    res.locals.errorMessage =
      "Invalid inputs, please check your username or password again.";
    res.status(400).send(JSON.stringify(res.locals));
  };
  let { username, password } = req.body;
  if (!username || !password) {
    res.locals.errorMessage = "Username, password are required";
    return res.status(400).send(JSON.stringify(res.locals));
  }
  username = username.toLowerCase();
  let user;
  try {
    user = await Users.findOne(
      {
        where: {
          username,
        },
      },
      {
        raw: true,
      }
    );
  } catch (err) {
    res.locals.error = err.errors[0].message; //FIXME catch err
    return res.status(500).send(JSON.stringify(res.locals));
  }
  if (!user) return handleInvalidInputs();
  if (!bcrypt.compareSync(password, user.password))
    return handleInvalidInputs();

  const token = jwt.sign(
    { id: user.id, username: user.username },
    res.app.locals.secret
  );
  res.locals.token = token;
  res.locals.ok = true;
  next();
};

const requiredLogin = async (req, res, next) => {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.replace("Bearer ", "");
  let jwtData;
  try {
    jwtData = jwt.verify(token, res.app.locals.secret);
  } catch (error) {
    res.locals.errorMessage = "Required a valid token.";
    return res.status(401).send(JSON.stringify(res.locals));
  }

  req.jwtData = jwtData;
  next();
};

const getMe = async (req, res, next) => {
  try {
    const me = await Users.findOne({
      where: {
        username: req.jwtData.username,
      },
      attributes: ["username", "email", "isAdmin"],
      include: [
        {
          model: Podcasts,
          as: "subscriptions",
          attributes: ["id"],
          through: {
            attributes: [],
          },
        },
        {
          model: Playlists,
          as: "playlists",
          attributes: ["id", "name"],
          include: {
            model: Episodes,
            attributes: ["id"],
            through: {
              attributes: [],
            },
          },
        },
        {
          model: Records,
          as: "playedRecords",
          attributes: ["episodeId", "progress"],
        },
      ],
      order: [[{ model: Records, as: "playedRecords" }, "updatedAt", "DESC"]],
    });
    if (!me || !me.username) return next();
    res.locals.data = me;
    res.locals.ok = true;
  } catch (error) {
    res.locals.errorMessage = "Server failure. Please try again later.";
    res.status(500).send(JSON.stringify(res.locals));
  }
  next();
};

const getUserByUsername = async (req, res, next) => {
  next();
};

const changeUserProfile = async (req, res, next) => {
  const handleInvalidInputs = () => {
    res.locals.errorMessage =
      "Invalid inputs, please check your password again.";
    res.status(400).send(JSON.stringify(res.locals));
  };
  let { password, newPassword, ...rest } = req.body;
  let { username } = req.jwtData;
  username = username.toLowerCase();
  let user;
  try {
    user = await Users.findOne(
      {
        where: {
          username,
        },
      },
      {
        raw: true,
      }
    );
  } catch (err) {
    res.locals.error = err.errors[0].message;
    return res.status(500).send(JSON.stringify(res.locals));
  }
  if (!user) return handleInvalidInputs();
  if (!bcrypt.compareSync(password, user.password))
    return handleInvalidInputs();
  try {
    const hash = bcrypt.hashSync(newPassword, saltRounds);
    await Users.update(
      { password: hash },
      {
        where: {
          username,
        }
      }
    )
  } catch (err) {
    res.locals.error = err;
    return res.status(500).json(res.locals);
  }
  res.locals.ok = true;
  next();
} 

const userControllers = {
  getMe,
  requiredLogin,
  getUserByUsername,
  register,
  login,
  changeUserProfile
};

module.exports = userControllers;
