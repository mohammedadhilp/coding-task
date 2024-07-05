import { connectToDatabase } from "../utils/db";

export async function createCategory(data) {
  const db = await connectToDatabase();
  const result = await db.collection("categories").insertOne(data);
  return result.ops[0];
}

export async function getCategories() {
  const db = await connectToDatabase();
  return await db.collection("categories").find().toArray();
}
