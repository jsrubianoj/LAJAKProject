const express = require('express');
const app = express();
const sequelize=require('./database/db');
const Product = require('./database/models/Product')

const hostname = '127.0.0.1';
const port = 5000;


//Middleware
app.use(express.urlencoded({extended:true}))//cambiar formato
app.use(express.json())//convertir a json

app.use('/api', require('./routes/productos'))

app.post('/productos', (req, res) =>{
  Product.create(
      req.body
      ).then(product=>{
      res.json(product);
    })
})

app.listen(port,()=>{

  try {
      console.log(`la api esta corriendo por el puerto ${port}`);
      sequelize.sync({ force: false }).then(() => {
          console.log('nos hemos conectado a la base de datos');
      });
  } catch (error) {
      console.log('se ha producido un error', error);
  }

})