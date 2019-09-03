const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class ProposalParticipant extends Sequelize.Model {}

ProposalParticipant.init({
    name: Sequelize.STRING,
    number: Sequelize.INTEGER
}, {sequelize, modelName: "proposalParticipant"})

module.exports = ProposalParticipant