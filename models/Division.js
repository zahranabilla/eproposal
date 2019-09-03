const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class Division extends Sequelize.Model {}

Division.init({
    name: Sequelize.STRING
}, {sequelize, modelName: "division"})

module.exports = Division