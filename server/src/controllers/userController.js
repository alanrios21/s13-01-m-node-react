const prisma = require("../db");
const { validateUser } = require("../middlewares/validateUser");
const { validateUpdateUser } = require("../middlewares/updateValUser");
const { encryptPassword } = require("../utils/passwordHash");

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
    return await prisma.user.findMany({});
};


const getUserById = async function (id) {
    const idPattern = /^[0-9a-f]{24}$/i;

    if (id) {
        if (!idPattern.test(id)) {
            throw new Error("The ID does not comply with the expected format.");
        }

        const result = await prisma.user.findUnique({
            where: { id: id },
            include: {
                images: true,
                videos: true,
                music: true,
                posts: true,
                donations: true,
            },
        });

        if (!result) {
            throw new Error("The user you are looking for does not exist.");
        }

        return result;
    } else {
        throw new Error("To search for a user by ID, please enter valid user ID.");
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