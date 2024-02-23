const prisma = require("../db");
const { validateUser } = require("../middlewares/validateUser");
const { validateUpdateUser } = require("../middlewares/updateValUser");
const { encryptPassword } = require("../utils/passwordHash");

function exclude(obj, keys) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keys.includes(key))
    );
}

const signUp = async (body) => {
    const validateUsers = await validateUser(body);

    if (validateUsers.containErrors) {
        throw new Error(JSON.stringify(validateUsers));
    }

    // Validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(body.email)) {
        throw new Error("The email format is not valid.");
    }

    const user = await prisma.user.create({
        data: {
            ...body,
            birthday: new Date(body.birthday),
            password: await encryptPassword(body.password),
        },
        select: {
            ...Object.keys(body).reduce((acc, key) => {
                if (key !== 'password') {
                    acc[key] = true;
                }
                return acc;
            }, {}),
        },
    });

    return { ...user, ...validateUsers };
};


const getUsers = async () => {
    try {

        const users = await prisma.user.findMany({});

        // Excluir la propiedad 'password' de 'users'
        const usersWithoutPassword = users.map(user => exclude(user, ['password']));

        return usersWithoutPassword;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Error fetching users');
    }

};


const getUserById = async function (id) {
    const idPattern = /^[0-9a-f]{24}$/i;

    if (id) {
        if (!idPattern.test(id)) {
            throw new Error("The ID does not comply with the expected format.");
        }

        const findUser = await prisma.user.findUnique({
            where: { id: id },
            include: {
                images: true,
                videos: true,
                music: true,
                posts: true,
                donations: true,
            },
        });

        if (!findUser) {
            throw new Error("The user you are looking for does not exist.");
        }

        // Excluir la propiedad 'password' del objeto 'findUser'
        const userWithoutPassword = exclude(findUser, ['password']);

        return userWithoutPassword;
    } else {
        throw new Error("To search for a user by ID, please enter a valid user ID.");
    }
};



const UpdateUser = async (id, body) => {
    const resultValidation = await validateUpdateUser(body);

    if (resultValidation.containErrors) {
        throw new Error(JSON.stringify(resultValidation));
    };

    const data = Object.fromEntries(
        Object.entries(body).filter(([key, value]) => value)
    );

    const result = await prisma.user.update({
        where: { id },
        data,

    });
    return { ...result, ...resultValidation };
};


module.exports = { signUp, getUsers, UpdateUser, getUserById };