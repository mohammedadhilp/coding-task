import { connectToDatabase } from "../utils/db";

export async function createProduct(data) {
  const db = await connectToDatabase();
  const result = await db.collection("products").insertOne({
    ...data,
    imageUrl: data.imageUrl || null,
  });
  return result.ops[0];
}

export async function getProducts({ sort, category }) {
  const db = await connectToDatabase();
  const query = category ? { category } : {};
  const options = sort ? { sort: { price: sort === "asc" ? 1 : -1 } } : {};
  return await db.collection("products").find(query, options).toArray();
}
