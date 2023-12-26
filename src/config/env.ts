import { EnvInterface } from '@type/env.type';
import dotenv from 'dotenv';

dotenv.config();

const { env: e } = process;

const env: EnvInterface = {
    NODE_ENV: e.NODE_ENV
        ? (e.NODE_ENV as 'development' | 'production')
        : 'development',

    PORT: Number(e.PORT),

    HOST: e.HOST || 'localhost',

    SERVICE_NAME: e.SERVICE_NAME || 'express-typescript-boilerplate',

    JWT_EXPIRATION: e.JWT_EXPIRATION || '1h',

    JWT_PUBLIC_SECRET: e.JWT_PUBLIC_SECRET || 'public-secret',

    JWT_PRIVATE_SECRET: e.JWT_PRIVATE_SECRET || 'private-secret',

    CLIENT_ORIGIN: e.CLIENT_ORIGIN || '',

    ADMIN_ORIGIN: e.ADMIN_ORIGIN || '',

    MONGO_ATLAS_DEV_URI: e.MONGO_ATLAS_DEV_URI || '',

    MONGO_ATLAS_PROD_URI: e.MONGO_ATLAS_PROD_URI || '',
};

export default env;
