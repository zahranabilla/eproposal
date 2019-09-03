const express = require('express')
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
// const authorization = require('../components/authorization')

const router = express.Router()

const proposalRevision = require('../controllers/proposalRevision')

// const loggedIn = ensureLoggedIn('/user/login') 
// const granted = authorization.ensureGranted

router.get('/ajax-get-data', proposalRevision.getAjaxData)

module.exports = router