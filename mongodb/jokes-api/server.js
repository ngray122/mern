const express = require("express");
const app = express();
const port = 8000;


// connecting to our Mongo db using mongoose from modularized server folder.  Server-folder config-folder config-filename
require("./server/config/config")




app.get("/api/jokes", (req, res) => {
    res.json({ message: "Hello Joke route" });
});









app.listen( port, () => console.log(`Listening on port: ${port}`) );