import mysql from 'mysql'

let connection = mysql.createConnection({
    host: "db-instance.cl2igee8859t.us-east-1.rds.amazonaws.com", //endpoint de la instancia rds de aws
    database: "db_AppActividades", //nombre de la base de datos de MySQL
    user: "ivonne",  //asignado a la instancia
    password: "dbapp2024", //asignado en la instancia 
})

export function connect_SQL(){
    connection.connect(function(err){
        if (err){
            console.log(err)
        }
        else{
            console.log("Conectado a la Base de Datos")
        }
    })
}

export function insertar_usuario(id, nombre, email, passw){
    let instruction_sql = "INSERT INTO Usuario VALUES ("+id+", '"+nombre+"', '"+email+"', '"+passw+"')"
    connection.query(instruction_sql, function(error, resultado){
         if (error){
            console.log(error)
        }
        else{
            console.log("Registro de Usuario Creado Exitosamente!!!")
        }
    })
}