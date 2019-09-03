const ProposalRevision = require('../models/ProposalRevision')

module.exports.getAjaxData = (req, res) => {
    ProposalRevision
        .findAll({
            where: {
                proposalId: req.query.proposalId
            },
        })
        .then((revisions) => {
            res.json(revisions)
        })
        .catch((error) => {
            console.log(error)
        })
}