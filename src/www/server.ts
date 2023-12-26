import env from '@config/env';
import packages from '@package/index';
import express from 'express';

const app = express();

const bootstrap = () => {
    try {
        app.use(packages);

        app.get('/', (req, res) => {
            res.json({ message: 'Hello World!', env: env.NODE_ENV });
        });

        app.listen(3000, () => {
            console.log(`Server running on port 3000`);
        });
    } catch (error) {
        console.log(error);
    }
};

export default bootstrap;
