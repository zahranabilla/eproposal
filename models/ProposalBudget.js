const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class ProposalBudget extends Sequelize.Model {
    
    get total() {
        return this.price * this.quantity;
    }
}

ProposalBudget.init({
    name: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    price: Sequelize.INTEGER
}, { sequelize, modelName: "proposalBudget" })

module.exports = ProposalBudget