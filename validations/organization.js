const validator = require('validator');

module.exports.add = (req, res, next) => {
    result = validateAdd(req)
    if (result.error) {
        let data = {
            errors: result.details,
            body: {
                name: req.body.name,
                abbreviation: req.body.abbreviation,
                username: req.body.username,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword
            }
        }
        res.render('organization/add', data)
    } else {
        next()
    }
}

function validateAdd(req) {
    var result = {
        error: 0,
        details: {}
    }

    if (validator.isEmpty(req.body.name)) {
        result.error = 1
        result.details.name = "Nama tidak boleh kosong"
    }

    if (validator.isEmpty(req.body.confirmPassword)) {
        result.error = 1
        result.details.confirmPassword = "Konfirmasi Password tidak boleh kosong"
    }

    let password = validator.isEmpty(req.body.password)
    let confirmPassword = validator.isEmpty(req.body.confirmPassword)

    if (password == 0 && confirmPassword == 0) {
        if (req.body.password !== req.body.confirmPassword) {
            result.error = 1
            result.details.confirmPassword = "Password tidak sama"
        }
    }

    if (req.body.password.length < 6) {
        result.error = 1
        result.details.password = "Password minimal 6 karakter"
    }

    if (req.body.username.length < 3) {
        result.error = 1
        result.details.username = "Username minimal 3 karakter"
    }

    return result
}

module.exports.checkExistence = created => {
    var result = {
        error: 0,
        details: {}
    }

    if (!created) {
        result.error = 1
        result.details.username = "Username sudah dipakai"
    }

    return result
}