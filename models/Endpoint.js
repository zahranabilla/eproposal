const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class Endpoint extends Sequelize.Model {}

Endpoint.init({
    path: Sequelize.STRING,
    method: Sequelize.STRING
}, {sequelize, modelName: "endpoint"})

module.exports = Endpoint