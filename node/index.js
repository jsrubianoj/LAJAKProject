const express = require('express');
const app = express();
const sequelize=require('./database/db');


const hostname = '127.0.0.1';
const port = 3306;

app.get('/productos', (req, res) =>{
  res.send([{'nombre':"computador"},{'nombre':"teclado"}])
})

app.listen(port,()=>{
  sequelize.sync({force:true}).then(()=>{
    console.log("Conexión a base de datos exitosa");
  }).catch((error)=>{
    console.log("Se ha producido un error")
  })
  console.log(`API corriendo en http://${hostname}:${port}/`)
});

