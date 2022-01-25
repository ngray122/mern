
const JokeController = require('../controllers/joke.controller')
const Joke = require('../models/joke.model')





// app.get("/api/jokes", (req, res) => {
//     res.json({ message: "Hello Joke route" });
// });
module.exports = (app) => {
    app.get("/api", JokeController.sayHello)
    app.get("/api/jokes", JokeController.findAll)
    app.post("/api/jokes/create", JokeController.createNew)
    app.get("/api/jokes/view/:id", JokeController.findOne)
    app.put("/api/jokes/update/:id", JokeController.updateJoke)
    app.delete("/api/jokes/delete/:id", JokeController.delete)
}
