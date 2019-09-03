const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class ProposalRevision extends Sequelize.Model {}

ProposalRevision.init({
    name: Sequelize.STRING,
    proposalId: Sequelize.INTEGER
}, {sequelize, modelName: "proposalRevision"})

module.exports = ProposalRevision