import { appRoute } from '@api/app/app.routes';
import { swaggerDocument } from '@api/swagger';
import { HttpStatus } from '@lib/http-status';
import { jsonReponse } from '@lib/json-response';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

const app = express();

// Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// App routes
app.use('/app', appRoute);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    jsonReponse.error(res, 'Not Found', HttpStatus.NOT_FOUND);
});

export const api = app;
