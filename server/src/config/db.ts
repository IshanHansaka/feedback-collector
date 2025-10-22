import mongoose from 'mongoose';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalCache = global as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

if (!globalCache.mongooseCache) {
  globalCache.mongooseCache = { conn: null, promise: null };
}

export const connectDB = async (): Promise<typeof mongoose> => {
  if (globalCache.mongooseCache!.conn) {
    console.log('Using existing MongoDB connection');
    return globalCache.mongooseCache!.conn;
  }

  if (!globalCache.mongooseCache!.promise) {
    globalCache.mongooseCache!.promise = mongoose
      .connect(process.env.MONGO_URI!, {
        maxPoolSize: 10,
      })
      .then((mongooseInstance) => {
        console.log('New MongoDB connection established');
        return mongooseInstance;
      })
      .catch((err) => {
        console.error('MongoDB connection error:', err);
        throw err;
      });
  }

  globalCache.mongooseCache!.conn = await globalCache.mongooseCache!.promise;
  return globalCache.mongooseCache!.conn;
};
