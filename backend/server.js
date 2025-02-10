import connect from './connection.js'; //importing the connection.js file connectToServer
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import testRoutes from './testRoutes.js';
import user from './userRoutes.js';

dotenv.config();
const PORT = process.env.PORT || 5000;



//Create a new express application.
//Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
const app = express();


//Middleware
//Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle.
app.use(cors()); //Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.
app.use(express.json()); //This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

app.use(testRoutes);//use is a method to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application.
app.use(user);

//Connect to MongoDB
//listen is a method that is used to bind and listen the connections on the specified host and port. It is an instance method of the http.Server class.
app.listen(PORT, () => {
    connect.connectToServer();
    console.log(`Server is running on port ${PORT}`);
}
)

//run this on cli --> node server.js