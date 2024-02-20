const prisma = require("../db");
const { validateUser } = require("../middlewares/validateUser");
const { validateUpdateUser } = require("../middlewares/updateValUser");
const { encryptPassword } = require("../utils/passwordHash");

const signUp = async (body) => {
    const validateUsers = await validateUser(body);
    if (validateUsers.containErrors) {
        throw new Error(JSON.stringify(validateUsers));
    }
    const user = await prisma.user.create({
        data: {
            ...body,
            birthday: new Date(body.birthday),
            password: await encryptPassword(body.password),
        },

        // User sin exponer el password 
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
    if (!id) {
        throw new Error(
            "To search for a user by ID, please enter the user ID."
        );
    }

    const result = await prisma.user.findUnique({
        where: { id },
        include: {
            images: true,
            videos: true,
            music: true,
            posts: true,
            donations: true,
        },
    });
    if (!id) {
        throw new Error("The user you are looking for does not exist.");
    }

    return result;
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