const express = require('express')
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
// const authorization = require('../components/authorization')

const router = express.Router()

const proposalSchedule = require('../controllers/proposalSchedule')

// const loggedIn = ensureLoggedIn('/user/login') 
// const granted = authorization.ensureGranted

router.get('/ajax-get-data', proposalSchedule.getAjaxData)

module.exports = router