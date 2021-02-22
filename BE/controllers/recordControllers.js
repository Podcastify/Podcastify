const db = require("../models");
const {
  Users,
  Podcasts,
  Playlists,
  Episodes,
  Subscriptions,
  Records,
  PlaylistEpisode,
} = db;

const getUserPlayedRecord = async (req, res, next) => {
  const userId = req.jwtData.id;
  let record;
  try {
    record = await Records.findAll({
      where: {
        userId,
      },
      attributes: ["episodeId", "progress"],
      order: [["updatedAt", "DESC"]],
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(400).json(res.locals);
  }
  res.locals.data = record;
  next();
};

const writeRecord = async (req, res, next) => {
  const userId = req.jwtData.id;
  const { episodeId } = req.params;
  const progress = req.body.progress || 0;
  let record;
  try {
    await Episodes.create(
      {
        id: episodeId
      }
    )
  } catch (err) {

  }
  try {
    record = await Records.findOne({
      where: {
        userId,
        episodeId,
      },
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(400).json(res.locals);
  }
  if (record) {
    try {
      await Records.update(
        {
          progress,
        },
        {
          where: {
            userId,
            episodeId,
          },
        }
      );
    } catch (err) {
      res.locals.error = err;
      return res.status(400).json(res.locals);
    }
  } else {
    try {
      await Records.create({
        userId,
        episodeId,
        progress,
      });
    } catch (err) {
      res.locals.error = err;
      return res.status(400).json(res.locals);
    }
  }
  next();
};

module.exports = { getUserPlayedRecord, writeRecord };
