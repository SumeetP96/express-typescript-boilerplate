import pkgCors from '@package/cors.pkg';
import pkgExpress from '@package/express.pkg';
import pkgHelmet from '@package/helmet.pkg';
import pkgMorgan from '@package/morgan.pkg';
import express from 'express';

const packages = express();

packages.use(pkgExpress);

packages.use(pkgCors);

packages.use(pkgHelmet);

packages.use(pkgMorgan);

export default packages;
