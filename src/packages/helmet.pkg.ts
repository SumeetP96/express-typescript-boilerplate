import express from 'express';
import helmet from 'helmet';

const pkgHelmet = express();

pkgHelmet.use(helmet());

export default pkgHelmet;
