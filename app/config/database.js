require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, // perubahan constanta database
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: false
    }
);

sequelize.authenticate()
    .then(() => console.log(' Database connected using environment variables.'))
    .catch(err => console.error(' Database connection error:', err));

module.exports = sequelize;