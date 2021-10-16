const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database_laura/database_laura');

class Usuario extends Model {}
Usuario.init({
    nombre:DataTypes.STRING,
    estado:DataTypes.STRING,
    rol:DataTypes.STRING

}, {
    sequelize,
    modelName: "Usuario" 
});

module.exports = Usuario;