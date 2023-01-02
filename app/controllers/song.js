const Song = require('../models/song');

exports.getAllSong = (req, res, next) => {
    Song.findAll()
        .then(songs => {
            res.status(200).json({
                songs: songs
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getSongById = (req, res, next) => {
    const songId = req.params.songId;
    Song.findByPk(songId)
        .then(song => {
            if (!song) {
                const error = new Error('Could not find song.');    
                error.statusCode = 404;

                throw error;    
            }   
            res.status(200).json({
                song: song
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }       
            next(err);
        });
}

exports.getSongByPenyanyiId = (req, res, next) => {
    const penyanyiId = req.params.penyanyiId;
    Song.findAll(
        {
            where: {
                penyanyi_id: penyanyiId
            }
        }
    )
        .then(songs => {
            res.status(200).json({
                songs: songs
            });
        }
        )
        .catch(err => {
            console.log(err);
        });
}

exports.postSong = (req, res, next) => {
    const judul = req.body.judul;
    const penyanyi = req.body.penyanyiId;
    const audio_path = req.body.audio_path;
    
    Song.create({
        judul: judul,
        penyanyi_id: penyanyi,
        audio_path: audio_path
    })
        .then(result => {
            console.log('Created Song');
            res.status(201).json({
                message: 'Created Song Successfully',
                song: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.updateSong = (req, res, next) => {
    const songId = req.params.songId;
    const judul = req.body.judul;
    const audio_path = req.body.audio_path;

    Song.findByPk(songId)
        .then(song => {
            if (!song) {
                const error = new Error('Could not find song.');
                error.statusCode = 404;
                throw error;
            }
            song.judul = judul;
            song.audio_path = audio_path;
            return song.save();
        })
        .then(result => {
            console.log('Updated Song');
            res.status(200).json({
                message: 'Song updated!',
                song: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.deleteSong = (req, res, next) => {
    const songId = req.params.songId;
    Song.findByPk(songId)
        .then(song => {
            if (!song) {
                const error = new Error('Could not find song.');
                error.statusCode = 404;
                throw error;
            }
            // Check logged in user
            return song.destroy();
        })
        .then(result => {
            console.log('Deleted Song');
            res.status(200).json({
                message: 'Deleted song.'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}