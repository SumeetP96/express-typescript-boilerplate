import env from '@config/env';
import { ApplicationInterface } from '@type/app.type';

const app: ApplicationInterface = {
    name: env.SERVICE_NAME,

    origins: [env.CLIENT_ORIGIN, env.ADMIN_ORIGIN],
};

export default app;
