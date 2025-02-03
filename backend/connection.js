import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

//dotenv.config is used to read the .env file and assign the values to process.env
dotenv.config();

//MongoDB Connection
// uri short for uniform resource identifier is a string of characters that unambiguously identifies a particular resource.

const MONGO_URI = process.env.MONGO_URI || "";

const CLIENT = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let database;

//Connect to MongoDB
//module.exports is a special object which is included in every JS file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.

//****  not working because this is common js syntax
// module.exports = {
//     connectToServer: () => {
//         database = CLIENT.db("merndb"); // database name

//     },
//     getDatabase: () => {
//         return database;
//     }
// }

const connectToServer = () => {
  database = CLIENT.db("merndb"); // database name
};

const getDatabase = () => database;

export default { connectToServer, getDatabase };
