const express = require('express')
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
// const authorization = require('../components/authorization')

const router = express.Router()

const proposalBackground = require('../controllers/proposalBackground')

// const loggedIn = ensureLoggedIn('/user/login') 
// const granted = authorization.ensureGranted

router.get('/ajax-get-data', proposalBackground.getAjaxData)

router.post('/revise', proposalBackground.postRevise)

module.exports = router