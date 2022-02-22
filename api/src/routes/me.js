import express from 'express';
const router = express.Router();
const {
    addPlaylist,
    getPlaylists,
    deletePlaylist,
    editPlaylist,
    addEpisodeToPlaylist,
    removeEpisodeFromPlaylist,
    checkPlaylistOwnership,
} = require('../controllers/playlistControllers');
const {validator, blockIdData} = require('../utils');
const {getMe} = require('../controllers/userControllers');
const {
    getUserSubscriptions,
    subscribe,
    unsubscribe,
} = require('../controllers/podcastControllers');
const {
    getUserPlayedRecord,
    writeRecord,
} = require('../controllers/recordControllers');

/* GET home page. */
router.get('/', getMe, function (req, res, next) {
    res.locals.ok = true;
    res.json(res.locals);
});

/* playlists */
router.get('/playlist', getPlaylists, function (req, res, next) {
    res.locals.ok = true;
    res.json(res.locals);
});

// GET
router.get(
    '/playlist/:playlistId',
    checkPlaylistOwnership,
    getPlaylists,
    function (req, res, next) {
        res.locals.ok = true;
        res.json(res.locals);
    }
);

// POST data: {name}
router.post(
    '/playlist',
    blockIdData,
    validator(['name']),
    addPlaylist,
    function (req, res, next) {
        res.locals.ok = true;
        res.json(res.locals);
    }
);

// DELETE
router.delete(
    '/playlist/:playlistId',
    checkPlaylistOwnership,
    deletePlaylist,
    function (req, res, next) {
        res.locals.ok = true;
        res.json(res.locals);
    }
);

// PATCH data: {name}
router.patch(
    '/playlist/:playlistId',
    blockIdData,
    validator(['name']),
    checkPlaylistOwnership,
    editPlaylist,
    function (req, res, next) {
        res.locals.ok = true;
        res.json(res.locals);
    }
);

// POST
router.post(
    '/playlist/:playlistId/:episodeId',
    blockIdData,
    checkPlaylistOwnership,
    addEpisodeToPlaylist,
    function (req, res, next) {
        res.locals.ok = true;
        res.json(res.locals);
    }
);

// DELETE
router.delete(
    '/playlist/:playlistId/:episodeId',
    checkPlaylistOwnership,
    removeEpisodeFromPlaylist,
    function (req, res, next) {
        res.locals.ok = true;
        res.json(res.locals);
    }
);

/* subscription */
router.get('/subscription', getUserSubscriptions, (req, res, next) => {
    res.locals.ok = true;
    res.json(res.locals);
});

// POST
router.post('/subscription/:podcastId', subscribe, (req, res, next) => {
    res.locals.ok = true;
    res.json(res.locals);
});

// DELETE
router.delete('/subscription/:podcastId', unsubscribe, (req, res, next) => {
    res.locals.ok = true;
    res.json(res.locals);
});

/* record */
router.get('/record', getUserPlayedRecord, (req, res, next) => {
    res.locals.ok = true;
    res.json(res.locals);
});

// POST data: {progerss = 0}
router.post('/record/:episodeId', writeRecord, (req, res, next) => {
    res.locals.ok = true;
    res.json(res.locals);
});

export default router;
