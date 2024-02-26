const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'RoundPeople API Documentation',
            version: '1.0.0',
            description: 'RoundPeople API Documentation',
        },
        security: [
            {
                sessionAuth: [],
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;