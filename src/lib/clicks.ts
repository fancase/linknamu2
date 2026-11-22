import { getDb, isMongoConfigured } from "@/lib/mongodb";

type ClickDocument = {
  _id: string;
  count: number;
};

async function getCollection() {
  const db = await getDb();
  return db.collection<ClickDocument>("clicks");
}

/** 집계를 읽을 수 없으면 null을 반환해 페이지는 계속 표시되게 합니다. */
export async function getClickCounts(): Promise<Record<string, number> | null> {
  if (!isMongoConfigured()) return null;

  try {
    const collection = await getCollection();
    const documents = await collection.find().toArray();
    return Object.fromEntries(documents.map((doc) => [doc._id, doc.count]));
  } catch (error) {
    console.error("클릭 수 조회 실패", error);
    return null;
  }
}

export async function incrementClick(linkId: string) {
  const collection = await getCollection();
  await collection.updateOne(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true },
  );
}
