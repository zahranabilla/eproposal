const express = require('express')
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
// const authorization = require('../components/authorization')

const router = express.Router()

const proposalBudget = require('../controllers/proposalBudget')

// const loggedIn = ensureLoggedIn('/user/login') 
// const granted = authorization.ensureGranted

router.get('/ajax-get-data', proposalBudget.getAjaxData)

module.exports = router