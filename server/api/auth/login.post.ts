import { IncomingMessage, ServerResponse } from "http";
import { sendError, useBody, setCookie } from 'h3';
import { isBefore, sub } from 'date-fns';
import { createError } from "~/server/utils/error";
import { decrypt, encrypt, generateAccessToken, generateRefreshToken, randomHash } from "~/server/utils/security";
import { validateLoginRequest } from "~/server/validators/auth";
import { prisma } from '~/server/db';
import { createUserIfNotExist } from "~/server/utils/user";

interface SuccessResponse {
    token: string;
}

export default async function (req: IncomingMessage, res: ServerResponse): Promise<SuccessResponse | void> {
    const body = await useBody<{ email: string, loginHash: string, fingerprint: string }>(req);
    try {
        const { email, loginHash, fingerprint } = await validateLoginRequest(body);
        const loginRequest = await prisma.loginRequest.findUnique({ where: { id: loginHash } });
        if (loginRequest === null) {
            return sendError(res, createError(403));
        }

        const lrEmail = decrypt({
            content: loginRequest.emailHash,
            iv: loginRequest.emailHashIv
        });
        const lrIp = decrypt({
            content: loginRequest.ipHash,
            iv: loginRequest.ipHashIv
        });
        const lrDate = new Date(loginRequest.createdAt);
        const tenMinutesAgo = sub(new Date(), { minutes: 10 });

        if (email !== lrEmail || req.ipAddress !== lrIp || isBefore(lrDate, tenMinutesAgo)) {
            return sendError(res, createError(403));
        }

        await createUserIfNotExist({ email, confirmEmail: true })
        await prisma.loginRequest.delete({ where: { id: loginHash } });

        const sharedKey = randomHash(10);
        const accessShared = encrypt(sharedKey);
        const refreshShared = encrypt(sharedKey);
        const maxAge = 86400 * 1000; // 1 day

        setCookie(
            res,
            'jwt',
            generateAccessToken({
                eid: loginRequest.emailHash,
                eiv: loginRequest.emailHashIv,
                key: accessShared.content,
                iv: accessShared.iv
            }),
            {
                httpOnly: true,
                sameSite: 'lax',
                expires: new Date(Date.now() + maxAge),
                ...(process.env.COOKIES_SECURE === 'true' ? { secure: true } : {})
            }
        );

        return {
            token: generateRefreshToken({
                key: refreshShared.content,
                iv: refreshShared.iv
            })
        };
    } catch (e) {
        console.error(e);
        return sendError(res, createError(e));
    }
}