const MysqlConnection = require('../helpers/mysqlConnection');

class UserModel {
    
    constructor(){
        this.Conn = MysqlConnection.getConnection();
    }

    insert(user) {
        return new Promise((res,rej)=>{
            if(!this.Conn) rej("No se ha podido crear la conexion");
            let SQL = 'INSERT INTO datosuser SET ?';
            this.Conn.query(SQL, [user], (err,result)=>{
                if(err) return rej(err);
                else return res(result);
            })
        })
    }

    getUserByEmail(email){
        return new Promise((res, rej)=>{
            if(!this.Conn) rej("No se ha podido crear la conexión");
            let SQL = 'SELECT * from datosuser where email="'+ email +'"';
            this.Conn.query(SQL,(err, result)=>{
                if(err) return rej(err);
                else return res(result);
            })
        })
    }

    /**
     * Método que obtiene todos los datos de un usuario a partir del nombre
     * @param username
     * @returns {Promise<any>}
     */
    getUserByUserName(username){
        return new Promise((res, rej)=>{
            if(!this.Conn) rej ("No se ha podido crear la conexión");
            let SQL = 'SELECT * from datosuser where usuario="'+username+'"';
            this.Conn.query(SQL,(error, result)=>{
                if(error) return rej(error);
                else return res(result);
            })
        })
    }

    /**
     * Método que obtiene todos los valores de la tabla travels
     * @returns {Promise<any>}
     */
    getAllTravels(){
        return new Promise((res, rej)=>{
            if (!this.Conn) rej("No se ha podido crear la conexión");
            let SQL = 'SELECT * FROM travels';
            this.Conn.query(SQL, (err, resul)=>{
                if (err) return rej(err);
                else return res(resul);
            })
        })
    }

    /**
     * Método que obtiene permisos de un usuario a partir de su id
     * @param userId
     * @returns {Promise<any>}
     */
    getUserGrants(userId){
        return new Promise((res, rej)=>{
            if (!this.Conn) rej("No se ha podido crear la conexión");
            let SQL = 'SELECT permisos FROM datosuser WHERE id = ' + userId;
            this.Conn.query(SQL, (err, resul)=>{
                if (err) return rej(err);
                else return res(resul);
            })
        })
    }
}
module.exports = UserModel;