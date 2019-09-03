const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class ProposalRundown extends Sequelize.Model {}

ProposalRundown.init({
    name: Sequelize.STRING,
    start: Sequelize.TIME,
    finish: Sequelize.TIME,
    pic: Sequelize.STRING,
    notes: Sequelize.STRING
}, {sequelize, modelName: "proposalRundown"})

module.exports = ProposalRundown