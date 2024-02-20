const bcrypt = require('bcryptjs')

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

const comparePassword = async (receivedPassword, passwordHash) => {
    return await bcrypt.compare(receivedPassword, passwordHash)
}

module.exports = { encryptPassword, comparePassword }