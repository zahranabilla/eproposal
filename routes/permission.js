const express = require('express')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const authorization = require('../components/authorization')

const router = express.Router()

const permission = require('../controllers/permission')

const validation = require('../validations/organization')

router.get('/', ensureLoggedIn('/user/login'), authorization.ensureGranted, permission.getIndex)

module.exports = router