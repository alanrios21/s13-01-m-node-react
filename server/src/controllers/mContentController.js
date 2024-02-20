const prisma = require("../db");

const createMultimediaContent = async (data) => {
    return prisma.multimediaContent.create({
        data,
    });
};

module.exports = createMultimediaContent;
