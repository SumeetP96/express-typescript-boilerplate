import { envConfig } from '@config/env';
import { HttpStatus } from '@lib/http-status';
import { jsonReponse } from '@lib/json-response';
import { Request, Response } from 'express';

/**
 * Get service info
 */
const showGreeting = (req: Request, res: Response) => {
    const data = {
        message: 'Welcome to Node Express Boilerplate service',
    };

    jsonReponse.success(res, data, HttpStatus.OK);
};

/**
 * Get service config
 */
const getConfig = (req: Request, res: Response) => {
    const data = {
        serviceName: envConfig.NODE_SERVICE_NAME,
        datetime: new Date(),
        environment: envConfig.NODE_ENV,
    };

    jsonReponse.success(res, data, HttpStatus.OK);
};

export default {
    showGreeting,
    getConfig,
};
