const ProposalBudget = require('../models/ProposalBudget')
const Division = require('../models/Division')

module.exports.getAjaxData = (req, res) => {
    ProposalBudget
        .findAll({
            where: {
                proposalId: req.query.proposalId
            },
            include: [Division]
        })
        .then((budgets) => {
            res.json(budgets)
        })
        .catch((error) => {
            console.log(error)
        })
}