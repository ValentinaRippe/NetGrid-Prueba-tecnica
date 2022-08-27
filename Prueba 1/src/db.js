const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('prueba-1', 'root', 'pass', {
    dialect: 'sqlite',
    host:'./dev.squilite'
})

module.exports = sequelize;