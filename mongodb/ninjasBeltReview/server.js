
const express = require('express'); //import express

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const app= express(); //initialize express
const port = 8000; //specify port


// connecting to our Mongo db using mongoose from modularized server folder.  Server-folder config-folder config filename
require("./server/config/config")


// app.get("/api/hello", (req, res)=> {
//     res.json({msg: "Hello Mongoose"})
// })
require("./server/routes/ninja.routes")(app)




app.listen(port, () => console.log(`Listening on port: ${port}`))