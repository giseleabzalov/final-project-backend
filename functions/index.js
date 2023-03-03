import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllDoc, postDoc } from "./src/functions.js";

const app = express();
app.use(express.json());
app.use(cors());

// get: root
app.get("/", (req, res) => {
  res.send({ message: "Success" });
});

// get: get all
app.get("/brunch", getAllDoc);

// get: search
// app.get('/search/:search', findDoc);

// post: add
app.post("/drinks", postDoc);

// update

// delete
// app.delete('/delete/:docId', deleteDoc);

export const api = functions.https.onRequest(app);
