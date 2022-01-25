// Controller needs to talk to the model(the code that represnts the DB table)

const Joke = require('../models/joke.model');


module.exports.sayHello = (req, res) => {
    res.json({ msg: "hello from mongoose modularizedddddd" })

}


module.exports.findAll = (req, res) => {
    Joke.find()
        .then(allJokes =>
            res.json({ result: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}



module.exports.findOne = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke =>
            res.json({ result: oneJoke }))
        .catch(err =>
            res.json({ message: 'Something went wrong', error: err }));
}


module.exports.createNew = (req, res) => {
    console.log("**********", req.body);
    Joke.create(req.body)

        .then(newJoke => {
            console.log("**********", req.body);

            res.json({ result: newJoke })
            console.log(result)
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body,
        { new: true, runValidators: true })
        .then(updatedJoke => {
            console.log("HEELLOOOO")
            res.json({ result: updatedJoke })
            console.log(`result: ${updatedJoke}`)
        })
        .catch(err =>
            res.json({ message: 'Something went wrong', error: err }));
}




module.exports.delete = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deleteJoke =>
            res.json({ result: deleteJoke }))
        .catch(err =>
            res.json({ message: 'Something went wrong', error: err }));
}