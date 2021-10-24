const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('postgres://uetdnaggqgllca:78d30fcfbb073500648b938c1adf6f3ccaf3fd525b19f68c1915593a276e4b34@ec2-52-3-79-87.compute-1.amazonaws.com:5432/d8u50uu3sbcjoe')

module.exports = sequelize