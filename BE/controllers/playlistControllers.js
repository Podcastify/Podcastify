//TODO change playlist name
//TODO add episode to playlist
//TODO remove episode from playlist

const db = require('../models');
const { Users, Podcasts, Playlists, Episodes, Subscriptions, Records } = db;

const addPlaylist = async (req, res, next) => {
  const { id } = req.jwtData;
  const limit = 1;
  let playlistNumber;
  try {
    playlistNumber = await Playlists.count(
      {
        where: {
          userId: id
        }
      }
    )
  } catch (err) {
    res.locals.error = err;
    return res.status(500).send(JSON.stringify(res.locals))
  }
  if (playlistNumber >= limit) {
    res.locals.errorMessage =
      'Number of playlists has reached limit, you may not add another one.';
    return res.send(JSON.stringify(res.locals))
  }
  const { name } = req.body;
  let newPlaylist;
  try {
    newPlaylist = await Playlists.create(
      {
        name,
        userId: id
      }
    )
  } catch (err) {
    res.locals.error = err.errors[0].message; //FIXME catch err
    return res.status(500).send(JSON.stringify(res.locals))
  }
  next();
}

const getPlaylists = async (req, res, next) => {
  const { id } = req.jwtData;
  let playlists;
  try {
    playlists = await Playlists.findAll(
      {
        where: {
          userId: id
        },
        attributes: ['id', 'name'],
        include: {
          model: Episodes,
          attributes: ['id'],
          through: {
            attributes: []
          }
        }
      }
    )
  } catch (err) {
    res.locals.error = err;
    return res.status(500).send(JSON.stringify(res.locals))
  }
  res.locals.data = playlists;
  next();
}

const deletePlaylist = async (req, res, next) => {
  const userId = req.jwtData.id;
  const playlistId = req.params.id;
  try {
    const result = await Playlists.destroy(
      {
        where: {
          id: playlistId,
          userId
        }
      }
    )
    if (result === 0) {
      res.locals.errorMessage = 'Cannot delete this playlist because you do not own it or it does not exist.';
      return res.status(400).send(JSON.stringify(res.locals));
    }
  } catch (err) {
    console.log(err)
    res.locals.error = err;
    return res.status(500).send(JSON.stringify(res.locals));
  }
  next();
}

module.exports = { addPlaylist, getPlaylists, deletePlaylist };