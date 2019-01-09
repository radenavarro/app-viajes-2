const Sequelize = require('sequelize');
// const Mysql = require('mysql');
const ConnConfig = require('../config');

const SequelizeConn = new Sequelize(ConnConfig.configBD.database, ConnConfig.configBD.user, ConnConfig.configBD.password, {
    host: ConnConfig.configBD.host,
    dialect: ConnConfig.configBD.dialect,
    port: ConnConfig.configBD.port
});

module.exports = SequelizeConn;

// class mysqlConnection {
//     static getConnection(){
//         return Mysql.createConnection({
//             host: bdconfig.mysql.host,
//             user: bdconfig.mysql.user,
//             password: bdconfig.mysql.password,
//             database: bdconfig.mysql.database
//         })
//     }
// }
//
// module.exports = mysqlConnection;
