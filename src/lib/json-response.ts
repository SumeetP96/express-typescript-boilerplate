import { Response } from 'express';
import { HttpStatus } from './http-status';

export interface JsonResponse {
    success: <T>(res: Response, data: T, status?: number) => void;

    error: (res: Response, message: string, status?: number) => void;
}

/**
 * Utility functions for sending JSON responses.
 *
 * @example
 * import { jsonReponse } from '@lib/json-response';
 *
 * app.get('/', (req, res) => {
 *    jsonReponse.success(res, HttpStatus.OK, { message: 'Hello World!' });
 * });
 */
export const jsonReponse = {
    /**
     * Sends a successful JSON response with the provided data.
     */
    success: <T>(res: Response, data: T, status = HttpStatus.OK) => {
        return res.status(status).json({ success: true, data });
    },

    /**
     * Sends an error JSON response with the provided error message.
     */
    error: (
        res: Response,
        message: string,
        status = HttpStatus.INTERNAL_SERVER_ERROR,
    ) => {
        res.status(status).json({ success: false, message });
    },
};
