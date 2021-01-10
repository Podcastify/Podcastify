const db = require('../models');
const subscriptions = require('../models/subscriptions');
const { Users, Podcasts, Playlists, Episodes, Subscriptions, Records, PlaylistEpisode } = db;

//TODO get user subcriptions
const getUserSubscriptions = async (req, res, next) => {
  const userId = req.jwtData.id;
  let subscriptions
  try {
    subscriptions = await Podcasts.findAll({
      attributes: ['id'],
      include: [
        {
          model: Users,
          as: 'subscribers',
          attributes: [],
          through: {
            attributes: ['podcastId']
          }
        }
      ]
    })
  } catch (err) {
    console.log(err)
    res.locals.error = err;
    return res.status(400).json(res.locals)
  }
  res.locals.data = subscriptions;
  next();
}

//TODO subscribe
const subscribe = async (req, res, next) => {
  const userId = req.jwtData.id;
}


//TODO unsubscribe

module.exports = {
  getUserSubscriptions,
  subscribe
};