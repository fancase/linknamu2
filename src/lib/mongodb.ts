import { MongoClient } from "mongodb";

const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

export function isMongoConfigured() {
  return Boolean(process.env.MONGO_URI);
}

export async function getDb() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI is not set");

  // 서버리스 환경과 개발 서버 재시작에서 연결을 재사용합니다.
  if (!globalForMongo.mongoClientPromise) {
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 3000 });
    globalForMongo.mongoClientPromise = client.connect().catch((error) => {
      globalForMongo.mongoClientPromise = undefined;
      throw error;
    });
  }

  const client = await globalForMongo.mongoClientPromise;
  return client.db(process.env.MONGODB_DB ?? "linknamu");
}
