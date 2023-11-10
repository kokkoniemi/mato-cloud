import redis from 'redis';

const cache = global.$cache || redis.createClient({
    url: `redis://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

var cacheConnected = false;

if (!global.$cache) {
    global.$cache = cache;
}

const getCache = async () => {
    if (!cacheConnected) {
        await cache.connect();
        cacheConnected = true;
    }

    return cache;
};

export { getCache }
