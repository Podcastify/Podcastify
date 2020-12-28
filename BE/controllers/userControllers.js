const util = require('util')
const db = require('../models');
const { Users, Podcasts, Playlists, Episodes, Subscriptions, Records } = db;

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
    console.log(error);
    res.locals.error = error;
  }
  next();
}

const getUserByUsername = async (req, res, next) => {
  next()
}

const userControllers = { getMe }

module.exports = userControllers
