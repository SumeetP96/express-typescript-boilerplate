import app from '@config/app';
import { NextFunction, Request, Response } from 'express';

export default function corsMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (!app.origins.length) {
        next();
    }

    const origin = req.get('origin');

    // Check if the origin is in whitelist
    if (origin && app.origins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);

        res.header(
            'Access-Control-Allow-Methods',
            'GET, HEAD, PUT, PATCH, POST, DELETE',
        );

        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Bypass-Res-Enc, X-Res-Enc-Bypass-Key',
        );

        // Check if it's a preflight request
        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }
    }

    next();
}
