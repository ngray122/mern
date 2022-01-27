const { Product } = require('../models/product.model');


// module.exports.index = (req, res) => {
//     res.json({
//         message: "Hello Hello from controller"
//     });
// }

module.exports.createProduct = (req, res) => {

    Product.create(req.body)
    
        .then(newProd => {
            // console.log("Helloooooo")
            res.json({ newProd: newProd })
        })
        .catch(err => {
            res.json({ error: err })
        })

};


module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts =>
            res.json({ result: allProducts }))
        .catch(err => res.json({ message: "Something went wrong with fin all", error: err }))
}


module.exports.findOneProduct = (req, res) => {
    // id in API is _id
    Product.findOne({ _id: req.params.id })
        .then(oneProduct =>
            res.json({ result: oneProduct })
        )
        .catch(err => res.json({ message: "Something went wrong with find one", error: err }))
}


module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then(prod =>
            res.json({ result: prod }))
        .catch(err => res.json({ message: "Something went wrong with update ", error: err }));
}


module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteProduct =>
            res.json({ result: deleteProduct }))
        .catch(err =>
            res.json({ message: 'Something went wrong', error: err }));
}