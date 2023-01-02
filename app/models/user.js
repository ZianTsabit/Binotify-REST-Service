const Sequalize = require('sequelize');

const db = require('../util/database');

const User = db.define('user', {
    user_id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {    
        type: Sequalize.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: Sequalize.STRING,
        allowNull: false
    },
    username: {
        type: Sequalize.STRING,
        allowNull: false,
        unique:true
    },
    name:{
        type: Sequalize.STRING,
        allowNull: false,
        unique:true
    },
    isAdmin:{
        type: Sequalize.BOOLEAN,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false
});

module.exports = User;