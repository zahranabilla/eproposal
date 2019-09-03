const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class ProposalCommittee extends Sequelize.Model {}

ProposalCommittee.init({
    position: Sequelize.STRING,
    name: Sequelize.STRING
}, {sequelize, modelName: "proposalCommittee"})

module.exports = ProposalCommittee