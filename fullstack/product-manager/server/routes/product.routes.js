const ProductController = require('../controllers/product.controller');



// Routes or API endpoints that call ===> module.exports.FUNCTION from controller <=== which is the import ProductController

module.exports = (app) => {
    // app.get('/api', ProductController.index);

    // CREATE product
    app.post('/api/product/create', ProductController.createProduct)

    // GET ALL products
    app.get('/api/product/all', ProductController.findAllProducts)

    // GET ONE product
    app.get('/api/product/:id', ProductController.findOneProduct)
}