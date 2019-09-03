const express = require('express')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const authorization = require('../components/authorization')

const router = express.Router()

const organization = require('../controllers/organization')

const validation = require('../validations/organization')
const loggedIn = ensureLoggedIn('/user/login') 
const granted = authorization.ensureGranted

router.get('/', loggedIn, granted, organization.getIndex)

router.get('/add', loggedIn, granted, organization.getAdd)

router.post('/add', loggedIn, granted, validation.add, organization.postAdd)

router.get('/propose/:organizationId', loggedIn, organization.getPropose)

router.post('/propose', loggedIn, organization.postPropose)

router.get('/get-proposals', organization.getProposals)

module.exports = router