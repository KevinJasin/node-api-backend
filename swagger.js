const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node API Backend',
            version: '1.0.0',
            description: 'API documentation for the Node API backend'
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3006}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
    apis: ['./routes/*.js'], // 👈 this reads JSDoc comments from your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
