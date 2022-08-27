const { Model, DataTypes } = require("sequelize")
const sequelize = require('../db')

class Board extends Model { }

Board.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.CHAR,
    },
    stage: {
        allowNull: false,
        defaultValue: 1,
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'board'
})

module.exports = Board;