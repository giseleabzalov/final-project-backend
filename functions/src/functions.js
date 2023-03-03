import dbConnect from "./dbConnect.js";
import { COLLECTION } from "./secrets.js";

const collectionName = COLLECTION;

// get: all
export async function getAllDoc(req, res) {
  const db = dbConnect();
  const collection = await db
    .collection(collectionName)
    .find({})
    .limit(10)
    .toArray()
    .catch((err) => {
      res.status(500).send(err);
      return;
    });
  res.send(collection);
}

// get: search
export async function getDoc(req, res) {
  const searchParam = { id: Number(req.params.docId) };

  const db = dbConnect();
  const collection = await db
    .collection(collectionName)
    .find(searchParam)
    .toArray()
    .catch((err) => {
      res.status(500).send(err);
      return;
    });
  res.send(collection);
}

// post
export async function postDoc(req, res) {
  const newDoc = req.body;
  // { "id":"1", ""}
  const db = dbConnect();
  const collection = await db
    .collection(collectionName) // "drinks"
    .insertOne(newDoc)
    .catch((err) => {
      res.status(500).send(err);
      return;
    });
  res.status(201).send({ message: "New Doc Inserted" });
}

// delete
export async function deleteDoc(req, res) {
  const searchParam = { id: Number(req.params.docId) };

  const db = dbConnect();
  const collection = await db
    .collection(collectionName)
    .deleteOne(searchParam)
    .catch((err) => {
      res.status(500).send(err);
      return;
    });
  res, send(collection);
}
