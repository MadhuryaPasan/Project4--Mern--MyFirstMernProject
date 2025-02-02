import connect from './connection.js';
import express from 'express';
import cors from 'cors';



//Create a new express application.
//Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
const app = express();


//Middleware
//Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle.
app.use(cors()); //Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.
app.use(express.json()); //This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
