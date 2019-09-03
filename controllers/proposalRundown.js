const ProposalRundown = require('../models/ProposalRundown')

module.exports.getAjaxData = (req, res) => {
    ProposalRundown
        .findAll({
            where: {
                proposalId: req.query.proposalId
            },
        })
        .then((rundowns) => {
            res.json(rundowns)
        })
        .catch((error) => {
            console.log(error)
        })
}