const ProductController = require('../controllers/product.controller');



// Routes or API endpoints that call ===> module.exports.FUNCTION from controller <=== which is the import ProductController

module.exports = (app) => {
    // app.get('/api', ProductController.index);
    app.post('/api/product/create', ProductController.createProduct)
}