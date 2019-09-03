const User = require('../models/User')

module.exports.getIndex = (req, res) => {
    User
        .findAll()
        .then((users) => {
            res.render('permission/index', {users: users})
        })
        .catch((error) => {
            throw new Error('Cannot get users')
        })

}