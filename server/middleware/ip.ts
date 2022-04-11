import { IncomingMessage, ServerResponse } from 'http'

export default async function setIpMiddleware(req: IncomingMessage, res: ServerResponse) {
    const ipHeaders = [
        'X-Client-IP',
        'X-Forwarded-For',
        'CF-Connecting-IP',
        'Fastly-Client-Ip',
        'True-Client-Ip',
        'X-Real-IP',
        'X-Cluster-Client-IP',
        'X-Forwarded',
        'Forwarded-For',
        'Forwarded'
    ];

    for (let i = 0; i < ipHeaders.length; i++) {
        let headerValue = req.headers[ipHeaders[i]] || req.headers[ipHeaders[i].toLowerCase()];

        if (Array.isArray(headerValue)) {
            headerValue = headerValue[0];
        }

        if (headerValue) {
            req.ipAddress = headerValue;
            return;
        }
    }

    req.ipAddress = req.socket.remoteAddress

    if (!req.ipAddress && process.env.NODE_ENV === 'production') {
        throw new Error('Ip address not accessible');
    }
}

declare module 'http' {
    interface IncomingMessage {
        ipAddress: string
    }
}
