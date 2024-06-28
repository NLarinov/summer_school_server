const {DataTypes} = require("sequelize");
const {sequelize} = require("./db");



//USER
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    refreshToken: {type: DataTypes.STRING, allowNull: false},
})

module.exports = {
    User,
}