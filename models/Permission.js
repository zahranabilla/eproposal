const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class Permission extends Sequelize.Model {}

Permission.init({}, {sequelize, modelName: "permission"})

module.exports = Permission