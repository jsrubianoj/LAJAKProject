var mysql  =  require('mysql');

var conexion =  mysql.createConnection({
    host: 'localhost',
    database: 'Vendedores_db',
    user: 'root',
    password:''
});

conexion.connect(function(error){
    if (error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }
});

conexion.end();