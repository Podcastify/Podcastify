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

const checkPlaylistOwnership = async (req, res, next) => {
  const userId = req.jwtData.id;
  const { playlistId } = req.params;
  let result;
  try {
    result = await Playlists.count({
      where: {
        id: playlistId,
        userId,
      },
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(500).json(res.locals);
  }
  if (!result) {
    res.locals.errorMessage =
      "Cannot do the operation because this playlist does not belong to you.";
    return res.status(400).json(res.locals);
  }
  next();
};

const getPlaylists = async (req, res, next) => {
  const userId = req.jwtData.id;
  let playlistId = {};
  if (req.params.playlistId) {
    playlistId.id = req.params.playlistId;
  }
  let playlists;
  try {
    playlists = await Playlists.findAll({
      where: {
        userId,
        ...playlistId,
      },
      attributes: ["id", "name"],
      include: {
        model: Episodes,
        attributes: ["id"],
        through: {
          attributes: [],
        },
      },
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(500).json(res.locals);
  }
  res.locals.data = playlists;
  next();
};

const addPlaylist = async (req, res, next) => {
  const { id } = req.jwtData;
  const limit = 1;
  let playlistNumber;
  try {
    playlistNumber = await Playlists.count({
      where: {
        userId: id,
      },
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(500).json(res.locals);
  }
  if (playlistNumber >= limit) {
    res.locals.errorMessage =
      "Number of playlists has reached limit, you may not add another one.";
    return res.json(res.locals);
  }
  const { name } = req.body;
  let newPlaylist;
  try {
    newPlaylist = await Playlists.create({
      ...req.body,
      userId: id,
    });
  } catch (err) {
    res.locals.error = err.errors[0].message;
    return res.status(500).json(res.locals);
  }
  next();
};

const deletePlaylist = async (req, res, next) => {
  const userId = req.jwtData.id;
  const { playlistId } = req.params;
  try {
    const result = await Playlists.destroy({
      where: {
        id: playlistId,
        userId,
      },
    });
    if (result === 0) {
      res.locals.errorMessage = "Playlist does not exist.";
      return res.status(400).json(res.locals);
    }
  } catch (err) {
    res.locals.error = err;
    return res.status(500).json(res.locals);
  }
  next();
};

const editPlaylist = async (req, res, next) => {
  const userId = req.jwtData.id;
  const { playlistId } = req.params;
  const { name } = req.body;
  try {
    const result = await Playlists.update(
      {
        name,
      },
      {
        where: {
          id: playlistId,
          userId,
        },
      }
    );
    if (result == 0) {
      res.locals.errorMessage = "Playlist does not exist.";
      return res.status(400).json(res.locals);
    }
  } catch (err) {
    res.locals.error = err;
    return res.status(500).json(res.locals);
  }
  next();
};

const addEpisodeToPlaylist = async (req, res, next) => {
  const userId = req.jwtData.id;
  const { playlistId } = req.params;
  const { episodeId } = req.params;
  let result;
  try {
    await Episodes.create(
      {
        id: episodeId
      }
    )
  } catch (err) {

  }
  try {
    result = await Playlists.count({
      where: {
        id: playlistId,
        userId,
      },
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(500).json(res.locals);
  }
  if (!result) {
    res.locals.errorMessage = "Playlist does not exist.";
    return res.status(400).json(res.locals);
  }
  const values = { playlistId, episodeId };
  // prevent duplicate episodes in single playlist
  try {
    result = await PlaylistEpisode.count({
      where: {
        ...values,
      },
    });
  } catch (err) { }
  if (result > 0) {
    res.locals.errorMessage = "Duplicate episode in the playlist.";
    return res.status(400).json(res.locals);
  }
  try {
    await PlaylistEpisode.create({
      ...values,
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(500).json(res.locals);
  }
  next();
};

const removeEpisodeFromPlaylist = async (req, res, next) => {
  const userId = req.jwtData.id;
  const playlistId = req.params.playlistId;
  const { episodeId } = req.params;
  try {
    const values = { playlistId, episodeId };
    const result = await PlaylistEpisode.destroy({
      where: {
        ...values,
      },
    });
  } catch (err) {
    res.locals.error = err;
    return res.status(500).json(res.locals);
  }
  next();
};

module.exports = {
  addPlaylist,
  getPlaylists,
  deletePlaylist,
  editPlaylist,
  addEpisodeToPlaylist,
  checkPlaylistOwnership,
  removeEpisodeFromPlaylist,
};
