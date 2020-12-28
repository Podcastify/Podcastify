const util = require('util')
const db = require('./models');
const episodes = require('./models/episodes');
const records = require('./models/records');
const { Users, Podcasts, Playlists, Episodes, Subscriptions, Records } = db;

const getMe = async (req, res, next) => {
  const me = await Users.findOne({
    where: {
      username: ''
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

  next();
}