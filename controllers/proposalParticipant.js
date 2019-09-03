const ProposalParticipant = require('../models/ProposalParticipant')

module.exports.getAjaxData = (req, res) => {
    ProposalParticipant
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