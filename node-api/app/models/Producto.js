const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Producto extends Model {}

Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    codigo: DataTypes.BIGINT,
    cantidad: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Producto'
})

module.exports = Producto