const controller = require('../controllers/user');
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
    .get('/', authenticateToken, controller.getUser)
    .get('/musician', authenticateToken, controller.getMusician)
    .get('/musician/:id', authenticateToken, controller.getMusicianById)
    .post('/login', controller.userLogin)
    .post('/register', controller.userRegister);


module.exports = router;