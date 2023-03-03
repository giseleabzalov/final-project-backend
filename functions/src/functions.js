import dbConnect from "./dbConnect.js";
// import { COLLECTION } from "./secrets.js";

// const collectionName = COLLECTION;

// get: all
// export async function getAllDoc(req, res) {
//   const db = dbConnect();
//   const collection = await db
//     .collection()
//     .find({})
//     .limit(10)
//     .toArray()
//     .catch((err) => {
//       res.status(500).send(err);
//       return;
//     });
//   res.send(collection);
// }

// get by occasion

export async function getByCollection(req, res) {
  const db = dbConnect();
  const { occasion } = req.params;
  let filter = occasion ? { occasion: occasion } : {};

  const occasionCocktails = await db
    .collection("All_Cocktails")
    .find({ occasion })
    .toArray()
    .catch((err) => {
      res.status(500).send(err);
      return;
    });
  res.send(occasionCocktails);
}

// get: search
export async function getDoc(req, res) {
  const searchParam = { id: Number(req.params.docId) };

  const db = dbConnect();
  const collection = await db
    .collection()
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
    .collection() // "drinks"
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
