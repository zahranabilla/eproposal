const ProposalSchedule = require('../models/ProposalSchedule')

module.exports.getAjaxData = (req, res) => {
    ProposalSchedule
        .findAll({
            where: {
                proposalId: req.query.proposalId
            },
        })
        .then((schedules) => {
            res.json(schedules)
        })
        .catch((error) => {
            console.log(error)
        })
}