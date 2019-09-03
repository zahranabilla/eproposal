const ProposalPurpose = require('../models/ProposalPurpose')

module.exports.getAjaxData = (req, res) => {
    ProposalPurpose
        .findAll({
            where: {
                proposalId: req.query.proposalId
            },
        })
        .then((purposes) => {
            res.json(purposes)
        })
        .catch((error) => {
            console.log(error)
        })
}