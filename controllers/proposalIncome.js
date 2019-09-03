const ProposalIncome = require('../models/ProposalIncome')

module.exports.getAjaxData = (req, res) => {
    ProposalIncome
        .findAll({
            where: {
                proposalId: req.query.proposalId
            },
        })
        .then((incomes) => {
            res.json(incomes)
        })
        .catch((error) => {
            console.log(error)
        })
}