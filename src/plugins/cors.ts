import corsConfig from '@config/cors';
import cors from 'cors';
import express from 'express';

const corsPlugin = express();

corsPlugin.use(
    cors({
        // Allowed origins
        origin: corsConfig.origins,

        // Allow cookies
        credentials: corsConfig.useCredentials,

        // Allowed HTTP methods
        methods: corsConfig.httpMethods,

        // Allowed headers
        allowedHeaders: corsConfig.allowedHeaders,
    }),
);

export { corsPlugin };
