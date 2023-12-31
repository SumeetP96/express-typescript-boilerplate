import { EnvConfigInterface, NodeEnvType } from '@type/config';
import dotenv from 'dotenv';

dotenv.config();

const { env: e } = process;

export const envConfig: EnvConfigInterface = {
    // Environment
    NODE_ENV: e.NODE_ENV ? (e.NODE_ENV as NodeEnvType) : 'development',

    // Port on which this service will run
    NODE_PORT: Number(e.NODE_PORT),

    // Address on which this service will run
    NODE_HOST: e.NODE_HOST || 'localhost',

    // Name of this service
    NODE_SERVICE_NAME: e.NODE_SERVICE_NAME || 'express-typescript-boilerplate',

    // Auth salt rounds
    AUTH_SALT_ROUNDS: Number(e.AUTH_SALT_ROUNDS) || 10,

    // Auth expiration time
    AUTH_EXPIRATION: Number(e.AUTH_EXPIRATION) || 3600000,

    // Auth public secret
    AUTH_ADMIN_SECRET: e.AUTH_ADMIN_SECRET || 'very-secret-admin-secret',

    // JWT private secret for Admin
    AUTH_CLIENT_SECRET: e.AUTH_CLIENT_SECRET || 'very-secret-client-secret',

    // Origin of admin facing client
    ADMIN_ORIGIN: e.ADMIN_ORIGIN || 'http://localhost:5173',

    // Origin of customer facing client
    CLIENT_ORIGIN: e.CLIENT_ORIGIN || 'http://localhost:5174',

    // MongoDB Atlas URI
    MONGO_ATLAS_URI: e.MONGO_ATLAS_URI || '',
};
