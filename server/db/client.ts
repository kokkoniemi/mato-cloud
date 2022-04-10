/**
 * Prisma client is served as a singleton
 */
import Prisma from '@prisma/client';

const prisma = global.$dbClient || new Prisma.PrismaClient();

if (!global.$dbClient) {
    global.$dbClient = prisma;
}

declare global {
    var $dbClient: Prisma.PrismaClient
}

export { prisma };
