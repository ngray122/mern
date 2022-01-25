// import to allow us to make a table
const mongoose = require('mongoose');


// id gets auto generated, new mongoose.Schema({}) allows us to create new jokes
const JokeSchema = new mongoose.Schema({
    setup: { 
        type: String,
        required: [true, "Text is required"],
        minlength: [10, "Minimum must be 2 characters"]
    },
    punchline: { 
        type: String,
        required: [true, "Text is required"],
        minlength: [3, "Minimum must be 2 characters"]
    }
}, { timestamps: true});



// creating a table named Joke.  This var will be available in other files as "Joke"
const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;