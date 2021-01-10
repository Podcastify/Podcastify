const db = require('../models');
const { Users, Podcasts, Playlists, Episodes, Subscriptions, Records, PlaylistEpisode } = db;
//TODO get records of the user
const getUserPlayedRecord = async (req, res, next) => {
  const userId = req.jwtData.id;
  let record;
  try {
    record = await Records.findAll(
      {
        where: {
          userId
        },
        attributes: ['episodeId', 'progress']
      }
    )
  } catch (err) {
    res.locals.error = err;
    return res.status(400).json(res.locals);
  }
  res.locals.data = record;
  next();
}

//TODO write to records

module.exports = { getUserPlayedRecord }