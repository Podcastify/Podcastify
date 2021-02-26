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

const getUserSubscriptions = async (req, res, next) => {
  const userId = req.jwtData.id;
  let subscriptions;
  try {
    subscriptions = await Podcasts.findAll({
      attributes: ["id"],
      include: [
        {
          where: {
            id: userId,
          },
          model: Users,
          as: "subscribers",
          attributes: [],
          through: {
            attributes: ["podcastId"],
          },
        },
      ],
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(400).json(res.locals);
  }
  res.locals.data = subscriptions;
  next();
};

//TODO minor issue: prevent duplicated rows
const subscribe = async (req, res, next) => {
  const userId = req.jwtData.id;
  const { podcastId } = req.params;
  try {
    await Podcasts.create(
      {
        id: podcastId
      }
    )
  } catch (err) {

  }
  try {
    const result = await Podcasts.create({
      id: podcastId,
    });
  } catch (err) { }
  try {
    const result = await Subscriptions.create({
      userId,
      podcastId,
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(400).json(res.locals);
  }
  next();
};

const unsubscribe = async (req, res, next) => {
  const userId = req.jwtData.id;
  const { podcastId } = req.params;
  try {
    const result = await Subscriptions.destroy({
      where: {
        userId,
        podcastId,
      },
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(400).json(res.locals);
  }
  next();
};

module.exports = {
  getUserSubscriptions,
  subscribe,
  unsubscribe,
};
