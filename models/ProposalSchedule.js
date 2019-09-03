const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class ProposalSchedule extends Sequelize.Model {}

ProposalSchedule.init({
    name: Sequelize.STRING,
    date: Sequelize.DATEONLY,
    pic: Sequelize.STRING
}, {sequelize, modelName: "proposalSchedule"})

module.exports = ProposalSchedule