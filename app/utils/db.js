import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb+srv://mohdadhil215:Y2jLO0EQDblIL5jp@cluster0.3bbe9pp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

let db;

export async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("ecom");
  }
  return db;
}
