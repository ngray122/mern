const express = require("express");

const app = express();//instance of exptess
const port = 8000; // port


//NEED for create
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// connecting to our Mongo db using mongoose from modularized server folder.  
//Server-folder config-folder config-filename
require("./server/config/config")

//express routes
//importing (app) from (app.get)
require('./server/routes/joke.routes')(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );