
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

//dotenv.config is used to read the .env file and assign the values to process.env
dotenv.config();



//MongoDB Connection
// uri short for uniform resource identifier is a string of characters that unambiguously identifies a particular resource.

const MONGO_URI = Process.env.MONGO_URI || "";
const PORT = Process.env.PORT || 5000;

const CLIENT = new MongoClient(MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


let database;

//Connect to MongoDB
//module.exports is a special object which is included in every JS file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.
module.exports = {
    connectToServer: () => {
        database = CLIENT.db("merndb");

    },
    getDatabase: () => {
        return database;
    }
}