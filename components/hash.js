const bcrypt = require('bcryptjs')

module.exports.getPassword = password => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)

    return hash
}