const {DataTypes} = require("sequelize");
const sequelize = require("./db");



//USER
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    univ: {type: DataTypes.STRING, allowNull: false},
    grade: {type: DataTypes.STRING, allowNull: false},
    faculty: {type: DataTypes.STRING, allowNull: false},
    refreshToken: {type: DataTypes.STRING, allowNull: false},
})

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    nick: {type: DataTypes.STRING, allowNull: false},
    tags: {type: DataTypes.STRING, allowNull: true},
    univ: {type: DataTypes.STRING, allowNull: true},
    faculty: {type: DataTypes.STRING, allowNull: true},
    grade: {type: DataTypes.STRING, allowNull: true}
})

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
    User,
    Post,
}