const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class Organization extends Sequelize.Model {}

Organization.init({
    name: Sequelize.STRING,
    abbreviation: Sequelize.STRING
}, {sequelize, modelName: "organization"})

module.exports = Organization