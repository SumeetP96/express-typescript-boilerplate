export type NodeEnvType = 'development' | 'production';

export interface EnvInterface {
    NODE_ENV: NodeEnvType;

    PORT: number;

    HOST: string;

    SERVICE_NAME: string;

    JWT_EXPIRATION: string;

    JWT_PUBLIC_SECRET: string;

    JWT_PRIVATE_SECRET: string;

    CLIENT_ORIGIN: string;

    ADMIN_ORIGIN: string;

    MONGO_ATLAS_DEV_URI: string;

    MONGO_ATLAS_PROD_URI: string;
}
