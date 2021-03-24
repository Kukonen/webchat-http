const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('Users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING},
})

const Messages = sequelize.define('Messages', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.STRING, unique: true},
    login: {type: DataTypes.STRING},
    message: {type: DataTypes.STRING},
})

Messages.hasOne(Users)
Users.belongsTo(Messages)