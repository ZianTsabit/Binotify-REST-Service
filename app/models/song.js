const Sequalize = require('sequelize');

const db = require('../util/database');

const Song = db.define('song', {
    song_id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    judul: {    
        type: Sequalize.STRING,
        allowNull: false,
        unique:true
    },
    penyanyi_id: {
        type: Sequalize.INTEGER,
        allowNull: false
    },
    audio_path: {
        type: Sequalize.STRING,
        allowNull: false
    }
},
{
    createdAt: false,
    updatedAt: false
});

module.exports = Song;