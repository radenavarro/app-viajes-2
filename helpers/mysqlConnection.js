const Mysql = require('mysql');
const bdconfig = require('../config');

class mysqlConnection {
    static getConnection(){
        return Mysql.createConnection({
            host: bdconfig.mysql.host,
            user: bdconfig.mysql.user,
            password: bdconfig.mysql.password,
            database: bdconfig.mysql.database
        })
    }
}

module.exports = mysqlConnection;