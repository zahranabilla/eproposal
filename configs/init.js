const listEndpoints = require('express-list-endpoints')

const hash = require('../components/hash')
const Endpoint = require('../models/Endpoint')
const User = require('../models/User')

module.exports.createEndpoints = app => {
    endpoints = listEndpoints(app)

    endpoints.forEach(endpoint => {
        endpoint.methods.forEach(method => {
            let values = {
                path: endpoint.path,
                method: method
            }

            Endpoint
                .findOrCreate({where: values, default: values})
                .then((result) => {})
                .catch((error) => {
                    throw new Error("Endpoint not saved")
                })
        })
    });
}

module.exports.createAdmin = () => {
    let password = hash.getPassword('admin123')
    
    User
        .findOrCreate({
            where: {
                username: 'admin'
            },
            defaults: {
                username: 'admin',
                password: password,
                roles: 'admin'
            }
        })
        .then((user, created) => {
            if (created) {
                console.log('admin created')
            } else {
                console.log('admin existed')
            }
        })
        .catch((error) => {
            console.log(error)
        })
}