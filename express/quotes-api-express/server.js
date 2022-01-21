const express = require("express"); //require is import for back end
const app = express();  //this var is an instance of the express application
const port = 8000; // port for Api










// this line will always be at the bottom
app.listen( 8000, () => console.log(`Listening on port: ${port}`) );  
// to run file, node server.js