const express = require("express"); //require is import for back end
const app = express();  //this var is an instance of the express application
const port = 8000; // port for Api

// 

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


let quotes = [
    {content: "It is not the mountains ahead that will wear you our, it's the pebble in your shoe", author: "Muhammad Ali",},
    {content: "You attract ehat you vibrate", author: "Fritz",},
    {content: "Fall down, get up", author: "Muhammad Ali",}
]


// this is an api endpoint
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello World" });
});


// get request to get all the quotes
app.get("/api/quotes", (req, res) => {
    res.json({count: quotes.length, results: quotes})
})


// get one quote by id
app.get("/api/quotes/:idx", (req, res) => {
    res.json({results: quotes[req.params.idx]})
})


// add a new quote
app.post("/api/quotes", (req, res) => {
    console.log('req.body', req.body)
    res.json({count: quotes.length, results: quotes})
})


// update a quote
app.put("/api/quotes/:idx", (req,res) => {
    // two parts to a put request.   Whoch thing we waant o update(idc anf what data we wnant to use to update it with req.body)
    quotes[req.params.idx] = req.body
    res.json({count: quotes.length, results: quotes})

})


// delete
app.delete("/api/quotes/:idx", (req,res) => {
    // you can use splice the index out

    quotes.splice(req.params.idx, 1)
    res.json({count: quotes.length, results: quotes})

})




// this line will always be at the bottom
app.listen( port, () => console.log(`Listening on port: ${port}`) );  
// to run file, node server.js