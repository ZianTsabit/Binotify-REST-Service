const Sequalize = require('sequelize');

const sequelize = new Sequalize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        dialect: 'postgres'
    }
)

module.exports = sequelize;