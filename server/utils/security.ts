import crypto from 'crypto';
import jwt from 'jsonwebtoken';

/**
 * TYPES
 */

export interface Encrypted {
    iv: string;
    content: string;
}

export interface TokenPayload {
    eid: string;
    eiv: string;
    key: string;
    iv: string;
}

/**
 * Utility-functions
 */

const algorithm = 'aes-256-ctr';

export const encrypt = (str: string): Encrypted => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, process.env.SECRET, iv);
    const encrypted = Buffer.concat([cipher.update(str), cipher.final()]);
    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

export const decrypt = (hash: Encrypted): string => {
    const decipher = crypto.createCipheriv(algorithm, process.env.SECRET, Buffer.from(hash.iv, 'hex'));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrypted.toString();
};

export const randomHash = (length: number): string => {
    return crypto.randomBytes(length).toString('hex');
};


export const generateAccessToken = (payload: Record<string, any>): string => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 60 });
}

export const generateRefreshToken = (payload: Record<string, any>): any => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: 86400 });
}

export const verifyRefreshToken = (token: string): TokenPayload => {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
}

export const decodeAccessToken = (token: string): TokenPayload => {
    return jwt.decode(token, process.env.ACCESS_TOKEN_SECRET);
}
