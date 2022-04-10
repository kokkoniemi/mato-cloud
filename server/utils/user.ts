import { prisma } from '~/server/db';
import { getCache } from '~/server/cache';
import { User } from '.prisma/client';
import { decrypt, encrypt } from './security';

interface UserCreation {
    email: string;
    confirmEmail?: boolean
}

/**
 * Users are always created with this management function to prevent users with same emails
 * @param userParams User creation parameters
 */
export const createUserIfNotExist = async (userParams: UserCreation) => {
    const cache = await getCache();
    let cachedId = cache.get(userParams.email);

    // refresh cache if user id not found
    if (!cachedId) {
        const allUsers = prisma.user.findMany();
        (await allUsers).forEach(({ id, emailHash, emailHashIv }) => {
            const decrypted = decrypt({ content: emailHash, iv: emailHashIv });
            cache.set(decrypted, id);
            if (decrypted === userParams.email) {
                cachedId = id;
            }
        });
    }

    // user does not exist
    if (!cachedId) {
        const encryptedEmail = encrypt(userParams.email);
        const newUser = await prisma.user.create({
            data: {
                emailHash: encryptedEmail.content,
                emailHashIv: encryptedEmail.iv,
                emailConfirmed: !!userParams.confirmEmail
            }
        })
        cache.set(userParams.email, newUser.id);
    }
}
