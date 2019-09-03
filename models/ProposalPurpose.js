const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class ProposalPurpose extends Sequelize.Model {}

ProposalPurpose.init({
    name: Sequelize.STRING,
}, {sequelize, modelName: "proposalPurpose"})

module.exports = ProposalPurpose