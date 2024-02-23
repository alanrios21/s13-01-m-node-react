const prisma = require("../db");

async function validateUser(body) {
    const requiredFields = [

        { field: "firstName", message: "This field is required, please enter First Name." },
        { field: "lastName", message: "This field is required, please enter Last Name." },
        { field: "email", message: "This field is required, please enter an e-mail address." },
        { field: "country", message: "This field is required, please enter Country." },
        { field: "province", message: "This field is required, please enter Province." },
        { field: "password", message: "This field is required, please enter a password." },
        { field: "phone", message: "This field is required, please enter a phone number." },
        { field: "birthday", message: "This field is required, please enter a birthday." },
    ];

    const missingField = requiredFields.find((field) => !body[field.field]);
    if (missingField) {
        return {
            containErrors: true,
            message: missingField.message,
        };
    }

    const existingUser = await prisma.user.findFirst({
        where: { email: body.email, },
    });
    if (existingUser) {
        if (existingUser.email === body.email) {
            return {
                containErrors: true,
                message: "E-mail already exists. Please enter a valid e-mail address.",
            };
        }
    };

    return {
        containErrors: false,
        message: "You have successfully registered, thanks.",
    };
}

module.exports = { validateUser };