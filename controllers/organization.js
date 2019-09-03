const Organization = require('../models/Organization')
const User = require('../models/User')
const Proposal = require('../models/Proposal')
const ProposalBackground = require('../models/ProposalBackground')
const ProposalPurpose = require('../models/ProposalPurpose')
const ProposalParticipant = require('../models/ProposalParticipant')
const ProposalCommittee = require('../models/ProposalCommittee')
const ProposalSchedule = require('../models/ProposalSchedule')
const ProposalRundown = require('../models/ProposalRundown')
const ProposalBudget = require('../models/ProposalBudget')
const ProposalIncome = require('../models/ProposalIncome')

const hash = require('../components/hash')
const validation = require('../validations/organization')

module.exports.getIndex = (req, res) => {
    Organization
        .findAll()
        .then((organizations) => {
            res.render('organization/index', { organizations: organizations })
        })
        .catch((error) => {
            throw new Error('Organization error')
        })
}

module.exports.getAdd = (req, res) => {
    res.render('organization/add', { errors: {}, body: {} })
}

module.exports.postAdd = (req, res) => {
    let password = hash.getPassword(req.body.password)

    let values = {
        name: req.body.name,
        abbreviation: req.body.abbreviation,
        user: {
            username: req.body.username,
            password: password,
            roles: "organization"
        }
    }

    let association = [{ model: User, where: { username: req.body.username } }]

    Organization
        .findOrCreate({ where: {}, defaults: values, include: association })
        .spread((organization, created) => {
            result = validation.checkExistence(created)
            if (result.error) {
                let data = {
                    errors: result.details,
                    body: {
                        name: req.body.name,
                        abbreviation: req.body.abbreviation,
                        username: req.body.username,
                        password: req.body.password,
                        confirmPassword: req.body.confirmPassword
                    }
                }
                res.render('organization/add', data)
            }

            res.redirect('/organization')
        })
        .catch((error) => {
            throw new Error("Failed to save")
        })
}

module.exports.getPropose = (req, res) => {
    let data = { errors: {}, body: { organizationId: req.params.organizationId } }

    res.render('organization/propose', data)
}

module.exports.postPropose = (req, res) => {
    let association = [
        ProposalBackground,
        ProposalPurpose,
        ProposalParticipant,
        ProposalCommittee,
        ProposalSchedule,
        ProposalRundown,
        ProposalBudget,
        ProposalIncome
    ]

    Proposal
        .create({
            name: req.body.name,
            theme: req.body.theme,
            date: req.body.date,
            place: req.body.place,
            forms: req.body.forms,
            status: "pending", // It should be a constant
            organizationId: req.body.organizationId,
            proposalBackgrounds: getBackgrounds(req),
            proposalPurposes: getPurposes(req),
            proposalParticipants: getParticipants(req),
            proposalCommittees: getCommittees(req),
            proposalSchedules: getSchedules(req),
            proposalRundowns: getRundowns(req),
            proposalBudgets: getBudgets(req),
            proposalIncomes: getIncomes(req)
        },
            { include: association })
        .then((proposal) => {
            res.redirect('/')
        })
        .catch((error) => {
            console.log(error)
        })
}

function getIncomes(req) {
    let incomes = []
    req.body.incomesname.forEach((name, index) => {
        incomes.push({
            name: name,
            quantity: req.body.incomesquantity[index],
            amount: req.body.incomesamount[index],
        })
    })

    return incomes
}

function getBudgets(req) {
    let budgets = []
    req.body.budgetsname.forEach((name, index) => {
        budgets.push({
            name: name,
            quantity: req.body.budgetsquantity[index],
            price: req.body.budgetsprice[index],
            divisionId: req.body.budgetsdivision[index],
        })
    })

    return budgets
}

function getRundowns(req) {
    let rundowns = []
    req.body.rundownsname.forEach((name, index) => {
        rundowns.push({
            name: name,
            start: req.body.rundownsstart[index],
            finish: req.body.rundownsfinish[index],
            notes: req.body.rundownsnotes[index],
            pic: req.body.rundownspic[index]
        })
    })

    return rundowns
}

function getSchedules(req) {
    let schedules = []
    req.body.schedulesname.forEach((name, index) => {
        schedules.push({
            name: name,
            date: req.body.schedulesdate[index],
            pic: req.body.schedulespic[index]
        })
    })

    return schedules
}

function getCommittees(req) {
    let committees = []
    req.body.committeesposition.forEach((position, index) => {
        committees.push({ position: position, name: req.body.committeesname[index] })
    })

    return committees
}

function getBackgrounds(req) {
    let proposalBackgrounds = []
    req.body.backgrounds.forEach((background) => {
        proposalBackgrounds.push({ name: background })
    })

    return proposalBackgrounds
}

function getPurposes(req) {
    let proposalPurposes = []
    req.body.purposes.forEach((purpose) => {
        proposalPurposes.push({ name: purpose })
    })

    return proposalPurposes
}

function getParticipants(req) {
    let participants = []
    req.body.participantsname.forEach((name, index) => {
        participants.push({ name: name, number: req.body.participantsnumber[index] })
    })

    return participants
}

module.exports.getProposals = (req, res) => {
    let user = res.locals.user
    let status = req.query.status

    Organization
        .findOne({
            where: {
                userId: user.id
            },
            include: [
                {
                    model: Proposal,
                    where: {
                        status: status
                    }
                }
            ]
        })
        .then((organization) => {
            let result = {
                draw: 1,
                recordsTotal: 0,
                recordsFiltered: 0
            }
            let data = []

            if (organization) {
                result.recordsTotal = organization.proposals.length
                result.recordsFiltered = organization.proposals.length

                if (organization.proposals.length > 1) {
                    organization.proposals.forEach(proposal => {
                        data.push([proposal.id, proposal.name, proposal.status])
                    })
                } else if (organization.proposals.length == 1) {
                    let proposal = organization.proposals[0]
                    data.push([proposal.id, proposal.name, proposal.status])
                }
            }

            result.data = data
            res.json(result)
        })
        .catch((error) => {
            console.log(error)
        })
}