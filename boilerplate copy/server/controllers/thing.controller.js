const {Thing} = require('../models/thing.model');

// Make sure routes are uncommented in server.js
// module.exports.index = (req, res) => {
//     res.json({
//         message: "Hello Hello from controller"
//     });
// }

module.exports.createThing = (req, res) => {
    Thing.create(req.body)
        .then(newThing => res.json({ result: newThing }))
        .catch(err => {
            res.json({ error: err })
        })

};


module.exports.findAllThings = (req, res) => {
    Thing.find()
        .then(allThings =>
            res.json({ result: allThings }))
        .catch(err => res.json({ message: "Something went wrong with fin all", error: err }))
}


module.exports.findOneThing = (req, res) => {
    // id in API is _id
    Thing.findOne({ _id: req.params.id })
        .then(oneThing =>
            res.json({ result: oneThing })
        )
        .catch(err => res.json({ message: "Something went wrong with find one", error: err }))
}


module.exports.updateThing = (req, res) => {
    Thing.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then(prod =>
            res.json({ result: prod }))
        .catch(err => res.json({ message: "Something went wrong with update ", error: err }));
}


module.exports.deleteThing = (req, res) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(deleteThing =>
            res.json({ result: deleteThing }))
        .catch(err =>
            res.json({ message: 'Something went wrong', error: err }));
}