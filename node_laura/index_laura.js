const express = require('express')
const cors = require('cors');
const sequelize = require('../node_laura/database_laura/database_laura');
const Usuario = require('../node_laura/models_laura/Usuario_laura');


const app = express();

// Settings

app.set('port', process.env.PORT || 3000)


//Middlewares

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

//Routes

app.use('/api', require('../node_laura/routes_laura/routes_laura'));

//Static files


//Starting the server
app.listen(app.get('port'), () => {

    console.log(`server on port ${app.get('port')}`);

    sequelize.sync({ force: true }).then(() => {
        console.log('Conexión a base de datos exitosa')
    }).catch((error) => {
        console.log('Conexión a base de datos fallida', error);
    });

})