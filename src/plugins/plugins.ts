import { corsPlugin } from '@plugins/cors';
import { expressPlugin } from '@plugins/express';
import { helmetPlugin } from '@plugins/helmet';
import { morganPlugin } from '@plugins/morgan';
import express from 'express';

const app = express();

app.use(expressPlugin);

app.use(corsPlugin);

app.use(helmetPlugin);

app.use(morganPlugin);

export const plugins = app;
