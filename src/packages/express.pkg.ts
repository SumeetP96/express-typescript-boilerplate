import express from 'express';

const pkgExpress = express();

pkgExpress.use(express.json());

pkgExpress.use(express.urlencoded({ extended: true }));

export default pkgExpress;
