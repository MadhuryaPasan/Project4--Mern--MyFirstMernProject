import express from "express";
import database from "./connection.js";
import { ObjectId } from "mongodb";

let userRoutes = express.Router();

//1- retrieve all documents from the collection

//http://localhost:5000/user

userRoutes.route("/user").get(async (req, res) => {
  let db = database.getDatabase();

  let data = await db.collection("user").find({}).toArray();
  if (data.length > 0) {
    res.json(data);
  } else {
    throw new Error("No data found - (retrieve all line)");
  }
});

//2- retrieve a single document from the collection

//:id is dynamic
userRoutes.route("/user/:id").get(async (req, res) => {
  let db = database.getDatabase();

  let data = await db
    .collection("user")
    .findOne({ _id: new ObjectId(req.params.id) });

  if (Object.keys(data).length > 0) {
    res.json(data);
  } else {
    throw new Error("No data found - (retrieve one line)");
  }
});

//3- create a document into the collection

userRoutes.route("/user").post(async (req, res) => {
  let db = database.getDatabase();

  let mongoObject = {
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
    joinDate: new Date(),
    posts: [],
  };
  let data = await db.collection("user").insertOne(mongoObject);

  res.json(data);

  console.log("Data inserted successfully");
});

//4- update a document in the collectiona
userRoutes.route("/user/:id").put(async (req, res) => {
  let db = database.getDatabase();

  let mongoObject = {
    $set: { name: req.body.name, email: req.body.email, pass: req.body.pass , joinDate: req.body.joinDate, posts: req.body.posts },
  };

  let data = await db
    .collection("user")
    .updateOne({ _id: new ObjectId(req.params.id) }, mongoObject);

  res.json(data);

  console.log("Data updated successfully");
});

userRoutes.route("/user/:id").delete(async (req, res) => {
  let db = database.getDatabase();

  let data = await db
    .collection("user")
    .deleteOne({ _id: new ObjectId(req.params.id) });

  res.json(data);

  console.log("Data deleted successfully");
});

export default userRoutes;
