const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class ProposalBackground extends Sequelize.Model {}

ProposalBackground.init({
    name: Sequelize.STRING,
    proposalId: Sequelize.INTEGER
}, {sequelize, modelName: "proposalBackground"})

module.exports = ProposalBackground