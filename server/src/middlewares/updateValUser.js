async function validateUpdateUser(body) {
    const { userName, email } = body;

    if (userName) {
        return { containErrors: true, message: 'The username is unique, it cannot be edited' };
    }

    if (email) {
        return { containErrors: true, message: 'The email cannot be changed, please create a new user' };
    }

    return { containErrors: false, message: "You have successfully updated the registry" }

}

module.exports = { validateUpdateUser };