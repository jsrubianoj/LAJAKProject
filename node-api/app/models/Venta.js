const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Venta extends Model {}

Venta.init({
    id_cliente: DataTypes.STRING,
    nombre_cliente: DataTypes.STRING,
    codigo_producto: DataTypes.STRING,
    nombre_producto: DataTypes.STRING,
    valor: DataTypes.BIGINT
}, {
    sequelize,
    modelName: 'Venta'
})

module.exports = Venta