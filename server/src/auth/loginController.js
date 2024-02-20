const jwt = require('jsonwebtoken');
const prisma = require('../db');
const { comparePassword } = require('../utils/passwordHash');
const { TOKEN_SECRET } = process.env;
const { validateLogin } = require('./validateLogin');


const signIn = async (body, req) => {
    let isValidate = await validateLogin(body);
    const { email, password } = body;

    if (isValidate.containErrors) {
        throw new Error(JSON.stringify(isValidate));
    }

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) {
        throw new Error(
            JSON.stringify({
                containErrors: true,
                message: 'User not found. Please register.',
            })
        );
    }

    const passwordValid = await comparePassword(password, user.password);
    if (!passwordValid) {
        return {
            containErrors: true,
            message: 'Incorrect password, please try again.',
        };
    }

    const token = jwt.sign({ id: user.id }, TOKEN_SECRET, { expiresIn: '2w' });


    // Guardar información del usuario en la sesión
    const userSessionID = req.session.userId = user.id;


    return {
        token,
        user,
        userSessionID,
        ...isValidate,
        containErrors: false,
        message: 'You have successfully logged in, welcome.',
    };
};

const sessionOut = async (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ error: 'Logout error' });
            }

            res.status(200).json({ mensaje: 'Session closed successfully' });
        });
    } else {
        res.status(200).json({ mensaje: 'No active session to close' });
    }
};

module.exports = { signIn, sessionOut };
