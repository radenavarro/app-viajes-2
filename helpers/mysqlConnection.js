const Mysql = require('mysql');

class mysqlConnection {
    static getConnection(){
        return Mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Pollete456',
            database: 'travels'
        })
    }
}

module.exports = mysqlConnection;