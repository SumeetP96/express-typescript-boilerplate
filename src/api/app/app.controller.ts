import { envConfig } from '@config/env';
import { HttpStatus } from '@lib/http-status';
import { jsonReponse } from '@lib/json-response';
import { Request, Response } from 'express';

/**
 * Get service info
 */
const getServiceInfo = (req: Request, res: Response) => {
    const data = {
        message: 'Welcome to Node Express Boilerplate service',

        metaData: {
            serviceName: envConfig.NODE_SERVICE_NAME,
            environment: envConfig.NODE_ENV,
            datetime: new Date(),
        },
    };

    jsonReponse.success(res, data, HttpStatus.OK);
};

/**
 * Get service config
 */
const getConfig = (req: Request, res: Response) => {
    const data = {
        serviceName: envConfig.NODE_SERVICE_NAME,
    };

    jsonReponse.success(res, data, HttpStatus.OK);
};

export default {
    getServiceInfo,
    getConfig,
};
