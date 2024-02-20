const swaggerJsdoc = require('swagger-jsdoc');

const options = {

    definition: {
        openapi: '3.0.0',
        info: {
            title: 'RoundPeople API Documentation',
            version: '1.0.0',
            description: 'RoundPeople API Documentation',
        },

    },
    apis: ['./src/routes/*.js'], // Rutas de tu proyecto
};

const specs = swaggerJsdoc(options);


module.exports = specs;