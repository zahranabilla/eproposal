const ProposalBackground = require('../models/ProposalBackground')
const sequelize = require('../configs/sequelize')

module.exports.getAjaxData = (req, res) => {
    ProposalBackground
        .findAll({
            where: {
                proposalId: req.query.proposalId
            },
        })
        .then((backgrounds) => {
            res.json(backgrounds)
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports.postRevise = (req, res) => {
    let proposalId = req.body.proposalId
    let backgrounds = req.body.backgrounds

    sequelize.transaction(t => {
        return ProposalBackground
            .destroy({
                where: {
                    proposalId: proposalId
                },
            }, { transaction: t }).then((deleted) => {
                if (deleted) {
                    let value = []
                    backgrounds.forEach(background => {
                        value.push({ proposalId: proposalId, name: background })
                    });
                    return ProposalBackground
                        .bulkCreate(value)
                } else {
                    // res.json({ msg: 'error on deleting' })
                }
            }, { transaction: t }).then(() => {
                return ProposalBackground
                    .findAll({
                        where: {
                            proposalId: proposalId
                        }
                    }, { transaction: t })
            })
    }).then(result => {
        res.redirect('/proposal/id/' + proposalId)
    }).catch(error => {
        console.log(error)
    })
}