import { appRoute } from '@api/app/app.routes';
import { HttpStatus } from '@lib/http-status';
import { jsonReponse } from '@lib/json-response';
import express from 'express';

const app = express();

app.use('/app', appRoute);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    jsonReponse.error(res, 'Not Found', HttpStatus.NOT_FOUND);
});

export const api = app;
