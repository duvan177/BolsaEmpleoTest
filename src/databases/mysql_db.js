const mysql = require('mysql2/promise')
require('dotenv').config()
//Creamos clase encargada de conectar a la base de datos MYSQL o MARIADB
class DB {
    constructor(){
        //Verificamos la existencia de alguna instancia en la base de datos
        if(!DB.instancia){
            DB.instancia = this;
            //Agregamos los parametros de conexion
            this.connection =  mysql.createPool({
             
                host: process.env.HOST_DB,    //host local
                port: process.env.PORT_DB,
                user:process.env.USER_DB,     //usuario de base de datos
                password: process.env.PASSWORD_DB,         //contraseña usuario db
                database: process.env.DATABASE, //schema o base de datos

                waitForConnections: true,
                connectionLimit: 100,//definicion de limites de conexion
                queueLimit: 0,
                multipleStatements:true // para poder sentenciar varios querys al tiempo
            });
            //conectamos y manejamos la conexion con throw
            // this.connection.connect((err) => {
            //     if (err) throw err;    
            //     //console.log('Fallo la cone!');
            // });
            //console.log('Entro a conectar!!');
        }
        //si existe la instancia que retorne la misma
        //console.log('Encontro una instancia de cone');
        return DB.instancia;
    }
}
//creamos una instancia de la clase
const instancia = new DB();
//Por seguridad  por medio del freeze congelamos los parametros de cada instancia para evitar la inyeccion sql
Object.freeze(instancia);
//Hacemos visible el modulo
module.exports = instancia;