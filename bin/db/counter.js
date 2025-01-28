/*
Author: Chase Quinn
*/

const DataTypes = require('sequelize').DataTypes;
const sequelize = require('./seq').sequelize;

const counter = sequelize.define('counter', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    start: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

const sync = async() => {
    try {
        await counter.sync();
        console.log('Counter table has been synced successfully.');
    }
    catch (error) {
        console.error('Unable to sync counter table:', error);
    }
}

module.exports = {
    counter,
    sync
}