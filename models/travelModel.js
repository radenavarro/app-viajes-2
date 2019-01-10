const MysqlConnection = require('../helpers/mysqlConnection');
const Sequelize = require('sequelize');

const TravelModel = MysqlConnection.define('travels', {
    id: {
        type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    travel: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    active: {
        type: Sequelize.INTEGER(1)
    },
    price: {
        type: Sequelize.INTEGER
    },
    type: {
        type: Sequelize.STRING
    }
});

module.exports = TravelModel;
