import dbConnect from "./dbConnect.js";
import { ObjectId } from "mongodb";

const db = dbConnect();

// get
export async function getByCollection(req, res) {
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

// post
export async function addCocktail(req, res) {
  const newCocktail = req.body;

  const collection = await db
    .collection("All_Cocktails")
    .insertOne(newCocktail)
    .catch((err) => {
      res.status(500).send(err);
      return;
    });

  res.status(201).send({ message: "New Cocktail Added" });
}

// update

// delete
export async function deleteCocktail(req, res) {
  const cocktailId = { "_id": new ObjectId(req.params.cocktailId) };

  const occasion = await db
    .collection("All_Cocktails")
    .deleteOne( cocktailId )
    .catch((err) => {
      res.status(500).send(err);
      return;
    });

  res.send(occasion);
}

