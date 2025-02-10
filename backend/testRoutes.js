// filename --> collectionName+Routes.js
import express from "express";
import database from "./connection.js"; //importing the connection.js file getDatabase
import { ObjectId } from "mongodb"; //ObjectId is a class that is used to convert the string into the object id

//Create a new express application.
let testRoutes = express.Router();

//1- retrieve all documents from the collection

//http://localhost:5000/test
//req is the request object, res is the response object
//get is a method to retrieve data from the server
testRoutes.route("/test").get(async (req, res) => {
  let db = database.getDatabase();
  //test is the collection name
  //find({}) is used to retrieve all the documents from the collection
  let data = await db.collection("test").find({}).toArray();
  if (data.length > 0) {
    res.json(data);
  } else {
    throw new Error("No data found - (retrieve all line)");
  }
});

//2- retrieve a single document from the collection

//:id is dynamic
testRoutes.route("/test/:id").get(async (req, res) => {
  let db = database.getDatabase();

  
  let data = await db
    .collection("test")
    .findOne({ _id: new ObjectId(req.params.id) });

  //object.keys is used to return an array of a given object's own enumerable property names
  if (Object.keys(data).length > 0) {
    res.json(data);
  } else {
    throw new Error("No data found - (retrieve one line)");
  }
});

//3- create a document into the collection

testRoutes.route("/test").post(async (req, res) => {
  let db = database.getDatabase();

  let mongoObject = { name: req.body.name, age: req.body.age };
  let data = await db.collection("test").insertOne(mongoObject);

  res.json(data);

  console.log("Data inserted successfully");
});

//4- update a document in the collection
//put is a method to update the data
testRoutes.route("/test/:id").put(async (req, res) => {
  let db = database.getDatabase();

  let mongoObject = { $set: { name: req.body.name, age: req.body.age } };

  let data = await db
    .collection("test")
    .updateOne({ _id: new ObjectId(req.params.id) }, mongoObject);

  res.json(data);

  console.log("Data updated successfully");
});

//5- delete a document from the collection

testRoutes.route("/test/:id").delete(async (req, res) => {
  let db = database.getDatabase();

  let data = await db
    .collection("test")
    .deleteOne({ _id: new ObjectId(req.params.id) });

  res.json(data);

  console.log("Data deleted successfully");
});

export default testRoutes;
