const { Product } = require('../models/product.model');


// module.exports.index = (req, res) => {
//     res.json({
//         message: "Hello Hello from controller"
//     });
// }

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then( newProd => res.json({ newProd: newProd}))
        .catch( err => {
            res.json({error: err})
        })
        
};