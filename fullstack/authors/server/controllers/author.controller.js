const { Author } = require('../models/author.model');


module.exports.index = (req, res) => {
    res.json({
        message: "Hello Hello from controller"
    });
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.json({ result: newAuthor })
        })
        .catch(err => {
            res.json({ error: err })
        })

};


module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors =>
            res.json({ result: allAuthors }))
        .catch(err => res.json({ message: "ERROR with find all ===> ", error: err }))
}


module.exports.findOneAuthor = (req, res) => {
    // id in API is _id
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor =>
            res.json({ result: oneAuthor })
        )
        .catch(err => res.json({ message: "ERROR with find one ===> ", error: err }))
}


module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then(prod =>
            res.json({ result: prod }))
        .catch(err => res.json({ message: "ERROR with update ===> ", error: err }));
}


module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteAuthor =>
            res.json({ result: deleteAuthor }))
        .catch(err =>
            res.json({ message: 'ERROR with delete ===> ', error: err }));
}