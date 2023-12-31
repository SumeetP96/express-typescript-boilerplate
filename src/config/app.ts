import { envConfig } from '@config/env';
import { AppConfigInterface } from '@type/config';

const appConfig: AppConfigInterface = {
    name: envConfig.NODE_SERVICE_NAME,
};

export default appConfig;
