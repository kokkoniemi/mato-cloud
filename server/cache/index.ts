import redis from 'redis';

const cache = global.$cache || redis.createClient({
    url: `redis://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

if (!global.$cache) {
    global.$cache = cache;
}

const getCache = async () => {
    await cache.connect();
    return cache;
};

export { getCache }
