import { envConfig } from '@config/env';
import { CorsConfigInterface } from '@type/config';

const corsConfig: CorsConfigInterface = {
    httpMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],

    origins: [envConfig.CLIENT_ORIGIN, envConfig.ADMIN_ORIGIN],

    useCredentials: true,

    allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsConfig;
