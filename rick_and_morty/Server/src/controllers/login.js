const users = require('../utils/users')

function login (req, res) {
    const {email, password} = req.query;

    const user = users.find(user => user.email === email && user.password === password)

    user 
    ? res.status(200).json({ access : true })
    : res.status(200).json({ access: false })

}

module.exports = login;