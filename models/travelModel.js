const MysqlConnection = require('../helpers/mysqlConnection');

class TravelModel {

    constructor() {
        this.Conn = MysqlConnection.getConnection();
    }

    insert(arrDatos){
        if (arrDatos.length === 4){
            return new Promise((res,rej)=>{
                if(!this.Conn) rej("No se ha podido crear la conexion");
                let SQL = "INSERT INTO travels VALUES( ?, ?, ?, ?, ?, ? )";
                this.Conn.query(SQL, [0, arrDatos[0], arrDatos[1], 1, arrDatos[2], arrDatos[3]], (err,result)=>{
                    if(err) return rej(err);
                    else return res(result);
                })
            })
        } else{
            console.log('Array de datos no válido');
        }
    }

    delete(idViaje){
        return new Promise((res,rej)=>{
            if(!this.Conn) rej("No se ha podido crear la conexion");
            let SQL = 'DELETE FROM travels WHERE id = ' + idViaje;
            this.Conn.query(SQL, (err,result)=>{
                if(err) return rej(err);
                else return res(result);
            })
        })
    }

}

module.exports = TravelModel;