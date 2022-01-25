const express = require("express");
// alloes us to share our api onfo with react
const cors= require('cors')

const app = express();//instance of exptess
const port = 8000; // port


//NEED for create and update
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


// connecting to our Mongo db using mongoose from modularized server folder.  
//Server-folder config-folder config-filename
require("./server/config/config")



//express routes
//importing (app) from (app.get) Keep routes at the bottom
require('./server/routes/joke.routes')(app)



app.listen( port, () => console.log(`Listening on port: ${port}`) );