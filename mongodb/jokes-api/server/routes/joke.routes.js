
const JokeController = require('../controllers/joke.controller')
const Joke = require('../models/joke.model')



// API endpoints
module.exports = (app) => {
    // app.get("/api", JokeController.sayHello)
    app.get("/api/jokes", JokeController.findAll)
    app.post("/api/jokes/create", JokeController.createNew)
    app.get("/api/jokes/random" , JokeController.findRandomJoke)
    app.put("/api/jokes/update/:id", JokeController.updateJoke)
    app.get("/api/jokes/view/:id", JokeController.findOne)
    app.delete("/api/jokes/delete/:id", JokeController.delete)
}
