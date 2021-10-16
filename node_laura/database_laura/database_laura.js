const {Sequelize} = require('sequelize');

const {database} = require('../config_laura');

const sequelize = new Sequelize(
    database.database, 
    database.username,
    database.password,
    {host: database.host, dialect: "mysql"}
);

module.exports = sequelize;