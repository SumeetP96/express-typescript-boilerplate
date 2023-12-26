import cors from 'cors';
import express from 'express';

const pkgCors = express();

pkgCors.use(cors());

export default pkgCors;
