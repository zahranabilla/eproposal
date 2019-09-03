const express = require('express')
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
// const authorization = require('../components/authorization')

const router = express.Router()

const proposal = require('../controllers/proposal')

// const loggedIn = ensureLoggedIn('/user/login') 
// const granted = authorization.ensureGranted

router.get('/id/:id', proposal.getById)

router.post('/propose', proposal.postPropose)

router.get('/all-pending', proposal.getAllPending)

router.get('/all-revised', proposal.getAllRevised)

router.get('/ajax-get-data', proposal.getAjaxData)

router.post('/ajax-revise', proposal.postAjaxRevise)

module.exports = router