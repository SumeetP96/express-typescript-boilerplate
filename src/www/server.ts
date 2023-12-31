import { api } from '@api/api';
import { envConfig } from '@config/env';
import { plugins } from '@plugins/plugins';
import express from 'express';

const app = express();

const bootstrap = () => {
    try {
        app.use(plugins);

        app.use(api);

        app.listen(envConfig.NODE_PORT, () => {
            console.log(`Server running on port 3000`);
        });
    } catch (error) {
        console.log(error);
    }
};

export default bootstrap;
