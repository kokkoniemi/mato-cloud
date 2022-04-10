import nodemailer from 'nodemailer';

export interface MailerResponse {
    err: Error | undefined;
    info: MailerResponseInfo;
}

interface MailerResponseInfo {
    messageId: string;
    envelope: Record<string, any>;
    accepted: string[];
    rejected: string[];
    pending: string[];
    response: string;
}


const smtpTransport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
});

export const send = async (to: string, subject: string, html: string): Promise<MailerResponse> => {
    // todo: validations
    return await smtpTransport.sendMail({
        from: `"${process.env.MAIL_SENDER_NAME}" <${process.env.MAIL_SENDER_EMAIL}>`,
        to,
        subject,
        html
    });
};
