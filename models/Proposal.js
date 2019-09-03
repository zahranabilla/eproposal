const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class Proposal extends Sequelize.Model {}

Proposal.init({
    name: Sequelize.STRING,
    theme: Sequelize.STRING,
    date: Sequelize.DATE,
    place: Sequelize.STRING,
    forms: Sequelize.STRING,
    status: Sequelize.STRING
}, {sequelize, modelName: "proposal"})

module.exports = Proposal