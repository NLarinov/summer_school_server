const {DataTypes} = require("sequelize");
const {sequelize} = require("./db");



//USER
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    imageId: {type: DataTypes.STRING},
})

//TOKEN
const RefreshToken = sequelize.define('refresh_token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING, allowNull: false},
    deviceId: {type: DataTypes.UUID, allowNull: false}
})

User.hasOne(RefreshToken)
RefreshToken.belongsTo(User)

module.exports = {
    User,
    RefreshToken,
}