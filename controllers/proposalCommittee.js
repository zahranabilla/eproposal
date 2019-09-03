const ProposalCommittee = require('../models/ProposalCommittee')

module.exports.getAjaxData = (req, res) => {
    ProposalCommittee
        .findAll({
            where: {
                proposalId: req.query.proposalId
            },
        })
        .then((committees) => {
            res.json(committees)
        })
        .catch((error) => {
            console.log(error)
        })
}