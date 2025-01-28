/*
Author: Chase Quinn
*/

const DataTypes = require('sequelize').DataTypes;
const sequelize = require('./seq').sequelize;

const counterArchive = sequelize.define('counterArchive', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    target: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    actual: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

const sync = async() => {
    try {
        await counterArchive.sync();
        console.log('Counter table has been synced successfully.');
    }
    catch (error) {
        console.error('Unable to sync counter table:', error);
    }
}

module.exports = {
    counterArchive,
    sync
}