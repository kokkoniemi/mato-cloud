/**
 * Prisma client is served as a singleton
 */
import { PrismaClient } from '@prisma/client';

interface ServerGlobal extends NodeJS.Global {
    $dbClient: PrismaClient;
}

declare const serverGlobal: ServerGlobal;
const client = serverGlobal.$dbClient || new PrismaClient();

if (!serverGlobal.$dbClient) {
    serverGlobal.$dbClient = client;
}

export { client };
