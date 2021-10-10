const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Venta extends Model {}

Venta.init({
    id_cliente: DataTypes.STRING,
    nombre_cliente: DataTypes.STRING,
    valor: DataTypes.BIGINT,
    id_vendedor: DataTypes.STRING,
    nombre_vendedor: DataTypes.STRING,
    fecha: DataTypes.DATE
}, {
    sequelize,
    modelName: 'Venta'
})

module.exports = Venta