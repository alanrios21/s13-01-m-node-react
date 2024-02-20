

async function validateLogin(body) {
    const { email, password } = body;
    console.log("Validating Login");

    if (!email) {
        return {
            containErrors: true,
            message: "This field is required, please enter an e-mail address.",
        };
    }

    if (!password) {
        return {
            containErrors: true,
            message: "This field is required, please enter a password.",
        };
    }

    return {
        containErrors: false,
        message: "You have been successfully validated.",
    };
}



module.exports = { validateLogin };
