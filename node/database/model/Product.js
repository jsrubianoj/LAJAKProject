const{Model,Datatypes}=require('sequelize');
const sequelize=require('../db');

class Product extends Model {}
Product.init({
    name:Datatypes.STRING(50),
    valor:Datatypes.DOUBLE,
    peso:Datatypes.FLOAT,
    stock:DataTypes.INTEGER,
    category:Datatypes.STRING,
    description:Datatypes.TEXT
},{
    sequelize,
    modelName:"Product"
});

module.exports = Product;