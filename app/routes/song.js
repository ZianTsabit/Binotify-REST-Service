const controller = require('../controllers/song');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

router
    .get('/', authenticateToken, controller.getAllSong)
    .get('/:songId', authenticateToken, controller.getSongById)
    .get('/penyanyi/:penyanyiId', authenticateToken, controller.getSongByPenyanyiId)
    .post('/', authenticateToken, controller.postSong)
    .put('/:songId', authenticateToken, controller.updateSong)
    .delete('/:songId', authenticateToken, controller.deleteSong);

module.exports = router;