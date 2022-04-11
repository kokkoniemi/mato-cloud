import { IncomingMessage, ServerResponse } from "http";
import { sendError, useBody, setCookie } from 'h3';
import { createError } from "~/server/utils/error";
import {
    decodeAccessToken,
    decrypt,
    generateAccessToken,
    verifyRefreshToken
} from "~/server/utils/security";
import { validateTokenRefreshRequest } from "~/server/validators/auth";
import { defaultSuccessMessage, DefaultSuccessMessage } from "~/server/utils/api";


export default async function (req: IncomingMessage, res: ServerResponse): Promise<DefaultSuccessMessage | void> {
    const body = await useBody<{ token: string }>(req);
    try {
        const { token } = await validateTokenRefreshRequest(body);
        const accessToken = useCookie('jwt');

        if (typeof accessToken !== 'string') {
            return sendError(res, createError(403));
        }

        const refreshPayload = verifyRefreshToken(token);
        const accessPayload = decodeAccessToken(accessToken);
        const refreshKey = decrypt({ content: refreshPayload.key, iv: refreshPayload.iv });
        const accessKey = decrypt({ content: accessPayload.key, iv: accessPayload.iv });

        if (refreshKey !== accessKey) {
            return sendError(res, createError(403));
        }

        const maxAge = 86400 * 1000; // 1 day

        setCookie(
            res,
            'jwt',
            generateAccessToken({
                eid: accessPayload.eid,
                eiv: accessPayload.eiv,
                key: accessPayload.key,
                iv: accessPayload.iv
            }),
            {
                httpOnly: true,
                sameSite: 'lax',
                expires: new Date(Date.now() + maxAge),
                ...(process.env.COOKIES_SECURE === 'true' ? { secure: true } : {})
            }
        );

        return defaultSuccessMessage;
    } catch (e) {
        console.error(e);
        return sendError(res, createError(e));
    }
}