const passport = require('passport')
const hash = require('../components/hash')

const Endpoint = require('../models/Endpoint')
const Permission = require('../models/Permission')
const User = require('../models/User')


module.exports.getLogin = (req, res) => {
    res.render('user/login')
}

module.exports.postLogin = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/user/login',
        failureFlash: true,
    })(req, res, next)
}

module.exports.getLogout = (req, res) => {
    req.logout()
    res.redirect('/')
}

module.exports.getAssignEndpoints = (req, res) => {
    let data = {}
    let userId = req.params.userId
    data.userId = userId

    Endpoint
        .findAll({
            order: [['path', 'ASC'], ['method', 'ASC']]
        })
        .then((endpoints) => {
            data.endpoints = endpoints
            return Permission
                .findAll({
                    where: {
                        userId: userId
                    }
                })
        })
        .then((permissions) => {
            data.endpoints.forEach(endpoint => {
                permissions.forEach(permission => {
                    if (endpoint.id == permission.endpointId) {
                        endpoint.checked = "checked"
                    }
                })
            })
            res.render('user/assign-endpoints', data)
        })
        .catch((error) => {
            throw new Error("Enpoints error")
        })
}

module.exports.postAssignEndpoints = (req, res) => {
    let userId = req.body.userId
    let endpoints = req.body.endpoints

    endpoints.forEach(endpoint => {
        let values = { userId: userId, endpointId: endpoint }
        Permission
            .findOrCreate({ where: values, defaults: values })
            .then((result, created) => {
                res.redirect('/permission')
            })
            .catch((error) => {
                console.log(error)
            })
    })
}

module.exports.getIndex = (req, res) => {
    User
        .findAll()
        .then((users) => {
            res.render('user/index', { users: users })
        })
        .catch((error) => {
            throw new Error('Users error')
        })
}

module.exports.getAdd = (req, res) => {
    res.render('user/add', { errors: {}, body: {} })
}

module.exports.postAdd = (req, res) => {
    let password = hash.getPassword(req.body.password)
    let username = req.body.username
    let roles = req.body.roles

    let values = { username: username, password: password, roles, roles }
    
    User
        .findOrCreate({ where: {username: username}, defaults: values })
        .then((result, created) => {
            res.redirect('/')
        })
        .catch((error) => {
            console.log(error)
        })
}

