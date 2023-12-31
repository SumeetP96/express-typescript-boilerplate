export type NodeEnvType = 'development' | 'production';

export interface EnvConfigInterface {
    NODE_ENV: NodeEnvType;

    NODE_PORT: number;

    NODE_HOST: string;

    NODE_BASE_URL: string;

    NODE_SERVICE_NAME: string;

    AUTH_SALT_ROUNDS: number;

    AUTH_EXPIRATION: number;

    AUTH_CLIENT_SECRET: string;

    AUTH_ADMIN_SECRET: string;

    ADMIN_ORIGIN: string;

    CLIENT_ORIGIN: string;

    MONGO_ATLAS_URI: string;
}

export interface AppConfigInterface {
    name: string;
}

export type RouterHttpMethodType =
    | 'get'
    | 'post'
    | 'put'
    | 'patch'
    | 'delete'
    | 'options';

export type HttpMethodType =
    | RouterHttpMethodType
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'PATCH'
    | 'DELETE'
    | 'OPTIONS';

export interface CorsConfigInterface {
    origins: Array<string>;

    useCredentials: boolean;

    httpMethods: Array<HttpMethodType>;

    allowedHeaders: Array<string>;
}
