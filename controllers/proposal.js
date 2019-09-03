const nodemailer = require('nodemailer')
const ejs = require("ejs")

const dotenv = require('dotenv')
dotenv.config()
let env = process.env

const Proposal = require('../models/Proposal')
const ProposalBackground = require('../models/ProposalBackground')
const ProposalPurpose = require('../models/ProposalPurpose')
const ProposalParticipant = require('../models/ProposalParticipant')
const ProposalCommittee = require('../models/ProposalCommittee')
const ProposalSchedule = require('../models/ProposalSchedule')
const ProposalRundown = require('../models/ProposalRundown')
const ProposalBudget = require('../models/ProposalBudget')
const ProposalIncome = require('../models/ProposalIncome')
const Division = require('../models/Division')
const Organization = require('../models/Organization')
const ProposalRevision = require('../models/ProposalRevision')

module.exports.getById = (req, res) => {
    Proposal
        .findOne({
            where: {
                id: req.params.id
            },
        })
        .then((proposal) => {
            res.render('proposal/view', { proposal: proposal })
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports.getAjaxData = (req, res) => {
    Proposal
        .findOne({
            where: {
                id: req.query.id
            },
        })
        .then((proposal) => {
            res.json(proposal)
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports.postPropose = (req, res) => {
    Proposal.update(
        { status: "proposed" },
        { where: { id: req.body.id } }
    ).then((rowsUpdated) => {
        res.json(rowsUpdated)
    })

    sendEmail(req)
}

function sendEmail(req) {
    let association = [
        ProposalBackground,
        ProposalPurpose,
        ProposalParticipant,
        ProposalCommittee,
        ProposalSchedule,
        ProposalRundown,
        {
            model: ProposalBudget,
            include: [Division]
        },
        ProposalIncome,
        Organization
    ]

    Proposal
        .findOne({
            where: {
                id: req.body.id
            },
            include: association
        })
        .then((proposal) => {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: env.EMAIL_SENDER,
                    pass: env.EMAIL_SENDER_PASSWORD
                }
            });
            ejs.renderFile(__dirname + "/../views/proposal/email.ejs", { proposal: proposal }, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    var mailOptions = {
                        from: env.EMAIL_SENDER,
                        to: env.MODE == 'dev' ? env.DEVELOPER_EMAIL : env.ORGANIZATION_COACH_EMAIL,
                        subject: 'Pengajuan Proposal Kegiatan ' + proposal.organization.name,
                        html: data
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });
                }
            });
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports.getAllPending = (req, res) => {
    Proposal
        .findAll({
            where: {
                status: "proposed"
            }
        })
        .then((proposals) => {
            let result = {
                draw: 1,
                recordsTotal: proposals.length,
                recordsFiltered: proposals.length
            }

            let data = []
            if (proposals.length > 1) {
                proposals.forEach(proposal => {
                    data.push([proposal.id, proposal.name, proposal.status])
                })
            } else if (proposals.length == 1) {
                let proposal = proposals[0]
                    data.push([proposal.id, proposal.name, proposal.status])
            }

            result.data = data
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
        })
}


module.exports.getAllRevised = (req, res) => {
    Proposal
        .findAll({
            where: {
                status: "revised"
            }
        })
        .then((proposals) => {
            let result = {
                draw: 1,
                recordsTotal: proposals.length,
                recordsFiltered: proposals.length
            }

            let data = []
            if (proposals.length > 1) {
                proposals.forEach(proposal => {
                    data.push([proposal.id, proposal.name, proposal.status])
                })
            } else if (proposals.length == 1) {
                let proposal = proposals[0]
                    data.push([proposal.id, proposal.name, proposal.status])
            }

            result.data = data
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports.postAjaxRevise = (req, res) => {
    let id = req.body.id
    let revisions = req.body.revisions

    let value = []
    revisions.forEach((revision) => {
        value.push({ proposalId: id, name: revision })
    })

    Proposal.update(
        { status: "revised" },
        { where: { id: id } }
    ).then((rowsUpdated) => {
        return ProposalRevision.destroy({
            where: {
                proposalId: id
            }
        })
    }).then(deleted => {
        return ProposalRevision.bulkCreate(value)
    }).then(() => {
        res.json(1)
    }).catch(error => {
        console.log(error)
    })
}