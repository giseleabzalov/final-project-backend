import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import {
  addCocktail,
  getByCollection,
  deleteCocktail,
  getAllCocktails,
} from "./src/functions.js";

const app = express();
app.use(express.json());
app.use(cors());

// get: root
app.get("/", (req, res) => {
  res.send({ message: "Success" });
});

// get: all

app.get("/collection", getAllCocktails);

// get: get by occasion
app.get("/collection/:occasion", getByCollection);
app.get("/occasion/", getByCollection);

// post: add
app.post("/collection", addCocktail);

// update

// delete
app.delete("/delete/:cocktailId", deleteCocktail);

export const api = functions.https.onRequest(app);

// get: search
// app.get('/search/:search', findDoc);
