import { envConfig } from '@config/env';
import { appDocs } from './app/app.swagger';

export const swaggerDocument = {
    openapi: '3.0.0',

    info: {
        title: 'Node Express Boilerplate API with Swagger',
        version: '1.0.0',
        description: 'A simple Express API',
    },

    servers: [
        {
            url: envConfig.NODE_BASE_URL,
        },
    ],

    paths: Object.assign({}, appDocs),
};
