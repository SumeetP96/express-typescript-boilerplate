import express from 'express';
import morgan from 'morgan';

const pkgMorgan = express();

pkgMorgan.use(morgan('combined'));

export default pkgMorgan;
