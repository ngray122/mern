const { Product } = require('../models/product.model');


// module.exports.index = (req, res) => {
//     res.json({
//         message: "Hello Hello from controller"
//     });
// }

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProd => res.json({ newProd: newProd }))
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
    // id in API is 
    Product.findOne({_id: req.params.id})
        .then(oneProduct =>
            res.json({result: oneProduct})
        )
        .catch(err => res.json({ message: "Something went wrong with find one", error: err }))
}