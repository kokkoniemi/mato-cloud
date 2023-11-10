import fs from 'fs';
import ejs from 'ejs';
import { IncomingMessage, ServerResponse } from "http";
import { sendError, useBody } from 'h3';
import { prisma } from '~/server/db';
import { createError } from "~/server/utils/error";
import { validateCreateLinkRequest } from "~/server/validators/auth";
import { Encrypted, encrypt } from "~/server/utils/security";
import { MailerResponse, send } from '~/server/utils/mail';

export const SOCKET_CLOSED_IP = '127.0.0.1'; // may occur in local development

/**
 * Sends login email to given email address
 */
export default async function linkRequest(req: IncomingMessage, res: ServerResponse): Promise<MailerResponse | void> {
    const body = await useBody<{ email: string }>(req);
    try {
        const { email } = await validateCreateLinkRequest(body);
        const encryptedIp: Encrypted = encrypt(req.ipAddress || SOCKET_CLOSED_IP);
        const encryptedMail: Encrypted = encrypt(email);
        const loginRequest = await prisma.loginRequest.create({
            data: {
                ipHash: encryptedIp.content,
                ipHashIv: encryptedIp.iv,
                emailHash: encryptedMail.content,
                emailHashIv: encryptedMail.iv
            }
        });

        const loginEmail = fs.readFileSync('./server/templates/login-email.ejs', { encoding: 'utf-8' });
        const loginLink = `${process.env.APP_ORIGIN}/login/${loginRequest.id}?u=${email}`;
        const message = ejs.render(loginEmail, { link: loginLink });

        return await send(
            email,
            'Systematicmappingstudy.com login request',
            message
        );
    } catch (e) {
        console.error(e);
        return sendError(res, createError(e));
    }
}
