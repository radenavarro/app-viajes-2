const Mysql = require('mysql');

class mysqlConnection {
    static getConnection(){
        return Mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'viajes'
        })
    }
    static  getConnectionAmpps(){
        return Mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'mysql',
            database: 'viajes'
        })
    }
}

module.exports = mysqlConnection;