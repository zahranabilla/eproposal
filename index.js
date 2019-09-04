const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const session = require('express-session')
const passport = require('passport')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
var flash = require('express-flash')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'public')))

// Express Session Middleware
app.use(
    session({
        secret: "keyboard cat",
        resave: true,
        saveUninitialized: true
    })
);

require("./configs/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const sequelize = require('./configs/sequelize')

app.use("*", function (req, res, next) {
    res.locals.user = req.user || null
    next()
})

const organizationRouter = require('./routes/organization')
const userRouter = require('./routes/user')
const permissionRouter = require('./routes/permission')
const proposalRouter = require('./routes/proposal')
const proposalBackgroundRouter = require('./routes/proposalBackground')
const proposalPurposeRouter = require('./routes/proposalPurpose')
const proposalParticipantRouter = require('./routes/proposalParticipant')
const proposalCommitteeRouter = require('./routes/proposalCommittee')
const proposalScheduleRouter = require('./routes/proposalSchedule')
const proposalRundownRouter = require('./routes/proposalRundown')
const proposalBudgetRouter = require('./routes/proposalBudget')
const proposalIncomeRouter = require('./routes/proposalIncome')
const proposalRevisionRouter = require('./routes/proposalRevision')

const Organization = require('./models/Organization')
const User = require('./models/User')
const Endpoint = require('./models/Endpoint')
const Permission = require('./models/Permission')
const Proposal = require('./models/Proposal')
const ProposalBackground = require('./models/ProposalBackground')
const ProposalPurpose = require('./models/ProposalPurpose')
const ProposalParticipant = require('./models/ProposalParticipant')
const ProposalCommittee = require('./models/ProposalCommittee')
const ProposalSchedule = require('./models/ProposalSchedule')
const ProposalRundown = require('./models/ProposalRundown')
const ProposalBudget = require('./models/ProposalBudget')
const Division = require('./models/Division')
const ProposalIncome = require('./models/ProposalIncome')
const ProposalRevision = require('./models/ProposalRevision')

// Models Association
Organization.belongsTo(User)
User.hasMany(Permission)
Permission.belongsTo(Endpoint)
Organization.hasMany(Proposal)
Proposal.hasMany(ProposalBackground)
Proposal.hasMany(ProposalPurpose)
Proposal.hasMany(ProposalParticipant)
Proposal.hasMany(ProposalCommittee)
Proposal.hasMany(ProposalSchedule)
Proposal.hasMany(ProposalRundown)
Proposal.hasMany(ProposalBudget)
ProposalBudget.belongsTo(Division)
Proposal.hasMany(ProposalIncome)
Proposal.belongsTo(Organization)
Proposal.hasMany(ProposalRevision)

app.use('/organization', organizationRouter)
app.use('/user', userRouter)
app.use('/permission', permissionRouter)
app.use('/proposal', proposalRouter)
app.use('/proposal-background', proposalBackgroundRouter)
app.use('/proposal-purpose', proposalPurposeRouter)
app.use('/proposal-participant', proposalParticipantRouter)
app.use('/proposal-committee', proposalCommitteeRouter)
app.use('/proposal-schedule', proposalScheduleRouter)
app.use('/proposal-rundown', proposalRundownRouter)
app.use('/proposal-budget', proposalBudgetRouter)
app.use('/proposal-income', proposalIncomeRouter)
app.use('/proposal-revision', proposalRevisionRouter)

app.get('/', ensureLoggedIn('/user/login'), (req, res) => {
    let user = res.locals.user
    
    if (user.roles == "admin") {
        res.render('admin')
    } else if (user.roles == "coach") {
        res.render('coach')
    } else {
       res.render('index')
    }
})

// 404 Error Handler
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

// 500 Error Handler
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const init = require('./configs/init')

app.listen(3000, () => {
    console.log('server started')
    sequelize
        .authenticate()
        .then(() => {
            console.log('Database connected')
            sequelize.sync()
            init.createEndpoints(app)
            init.createAdmin()
        })
        .catch(() => {
            console.error('Database connection error')
        })
})