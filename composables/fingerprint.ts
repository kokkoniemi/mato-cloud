
import FingerprintJS from '@fingerprintjs/fingerprintjs'

export const useFingerprint = async () => {
    const fp = await FingerprintJS.load({ monitoring: false });
    return await fp.get();
};
