const express = require('express');
const sequelize = require('./util/database');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
})

app.get('/', (req, res) => {
    return res.status(200).json('Hello World');
})

app.use('/song', require('./routes/song'));
app.use('/user', require('./routes/user'));


(async () => {
    try {
        await sequelize.sync(
            { force: false }
        );
        console.log("testing");
        app.listen(process.env.EXTERNAL_PORT || 3001);
        } catch (error) {
            console.log(error);
        }
})()