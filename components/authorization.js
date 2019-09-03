const Permission = require('../models/Permission')
const Endpoint = require('../models/Endpoint')

module.exports.ensureGranted = (req, res, next) => {
    if (req.user.get('roles') == 'admin') {
        next()
    } else {
        Permission
            .count({
                where: {
                    userId: req.user.get('id')
                },
                include: [
                    {
                        model: Endpoint,
                        where: {
                            path: req.originalUrl,
                            method: req.method
                        }
                    }
                ]
            })
            .then((count) => {
                if (count) {
                    next()
                } else {
                    res.status(403).send("Forbidden")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
}