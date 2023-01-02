require('dotenv').config();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.getUser = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json({
                users: users
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getMusician = (req, res, next) => {
    User.findAll({ where: { isAdmin: false } })
        .then(users => {
            res.status(200).json({
                users: users
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getMusicianById = (req, res, next) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(user => {
            res.status(200).json({
                user: user
            });
        })
        .catch(err => {
            console.log(err);
        });
}


exports.userLogin = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ where: { username: username } })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Cannot find user'
                });
            }
            bcrypt.compare(password, user.password, (err, result) => {
                console.log(result);
                if (!result) {
                    return res.status(401).json({
                        message: 'Password incorrect'
                    });
                }
                if (result) {
                    const token = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET);
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token,
                        user_id: user.user_id,
                        username: user.username,
                        role : user.isAdmin
                    });
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
    );
}
       
exports.userRegister = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
        .then(async user => {
            if (user) {
                return res.status(409).json({
                    message: 'Email already registered'
                });
            } else {
                User.findOne({ where: { username: req.body.username } })
                    .then(async user => {
                        if (user) { 
                            return res.status(409).json({
                                message: 'Username already exists'
                            });
                        } else {
                            const salt =  await bcrypt.genSalt();
                            await bcrypt.hash(req.body.password, salt, (err, hash) => {
                                console.log(hash);
                                if (err) {
                                    return res.status(500).json({
                                        error: err
                                    });
                                } else {
                                    const user = new User({
                                        username: req.body.username,
                                        password: hash,
                                        email: req.body.email,
                                        name: req.body.name,
                                        isAdmin: false
                                    });
                                    user.save()
                                        .then(result => {
                                            res.status(201).json({
                                                message: 'User created',
                                                user_id: result.user_id,
                                                email: result.email
                                            });
                                        })
                                        .catch(err => {
                                            console.log(err);
                                            res.status(500).json({
                                                error: err
                                            });
                                        }
                                    );
                                }
                            });
                }
            });
        }   
    });
}

