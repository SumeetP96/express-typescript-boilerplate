import { HttpStatus } from '@lib/http-status';
import { swaggerDoc } from '@lib/swagger-doc';

/**
 * Swagger documentation for the app routes
 */
export const appDocs = {
    '/app': swaggerDoc({
        method: 'get',
        description: 'Greets the user with a friendly message',
        responses: [
            {
                code: HttpStatus.OK,
                description: 'A list of apps.',
                properties: {
                    message: { type: 'string' },
                },
            },
        ],
    }),

    '/app/config': swaggerDoc({
        method: 'get',
        description: 'Get service config.',
        responses: [
            {
                code: HttpStatus.OK,
                description: 'A list of apps.',
                properties: {
                    serviceName: { type: 'string' },
                    datetime: { type: 'string' },
                    environment: { type: 'string' },
                },
            },
        ],
    }),
};
