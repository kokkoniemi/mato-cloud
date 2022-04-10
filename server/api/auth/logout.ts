import { IncomingMessage, ServerResponse } from 'http';
import { sendError, setCookie } from 'h3';
import { createError } from '~/server/utils/error';

/**
 * Trash access cookie (create zombie)
 */
export default async function (req: IncomingMessage, res: ServerResponse): Promise<void> {
    try {
        setCookie(
            res,
            'jwt',
            '***',
            {
                httpOnly: true,
                sameSite: 'lax',
                expires: new Date(0),
                maxAge: 0,
                ...(process.env.COOKIES_SECURE === 'true' ? { secure: true } : {})
            }
        );
        return
    } catch (e) {
        console.error(e);
        return sendError(res, createError(e));
    }
}
