const MysqlConnection = require('../helpers/mysqlConnection');
const Sequelize = require('sequelize');

const DatosUser = MysqlConnection.define('datosuser', {
    id: {
        type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    usuario: {
        type: Sequelize.STRING(45)
    },
    email: {
        type: Sequelize.STRING(45)
    },
    password: {
        type: Sequelize.STRING(80)
    },
    hash: {
        type: Sequelize.STRING(80)
    },
    permisos: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = DatosUser;
