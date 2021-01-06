//TODO delete a playlist
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

}

module.exports = { addPlaylist, getPlaylists };