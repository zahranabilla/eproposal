const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class ProposalIncome extends Sequelize.Model {

    get total() {
        return this.amount * this.quantity;
    }
}

ProposalIncome.init({
    name: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    amount: Sequelize.INTEGER
}, { sequelize, modelName: "proposalIncome" })

module.exports = ProposalIncome