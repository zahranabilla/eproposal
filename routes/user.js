const express = require('express')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const authorization = require('../components/authorization')

const router = express.Router()

const user = require('../controllers/user')

const ensureGranted = authorization.ensureGranted

const loggedIn = ensureLoggedIn('/user/login')

router.get('/', user.getIndex)

router.get('/login', user.getLogin)

router.post('/login', user.postLogin)

router.get('/logout', loggedIn, user.getLogout)

router.get('/assign-endpoints/:userId', loggedIn, ensureGranted, user.getAssignEndpoints)

router.post('/assign-endpoints', loggedIn, ensureGranted, user.postAssignEndpoints)

router.get('/add', user.getAdd)

router.post('/add', user.postAdd)

module.exports = router