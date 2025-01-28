/*
Author: Chase Quinn
*/

const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: './bin/db/ncdb.db'
    }
)

const authenticate = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    sequelize,
    authenticate
}