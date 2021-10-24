const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'sql5446415',
    'sql5446415',
    'LradUfq62S',
    { host: 'sql5.freemysqlhosting.net', dialect: 'mysql'}
)

module.exports = sequelize