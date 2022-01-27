const AuthorController = require('../controllers/author.controller');



// Routes or API endpoints that call ===> module.exports.FUNCTION from controller <=== which is the import ProductController

module.exports = (app) => {
    // app.get(  Test);
    app.get('/api/hello', AuthorController.index)

    // CREATE 
    app.post('/api/author/create', AuthorController.createAuthor)

    // GET ALL s
    app.get('/api/author/all', AuthorController.findAllAuthors)

    // GET ONE 
    app.get('/api/author/:id', AuthorController.findOneAuthor)


    // DELETE 
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor)

    // UPDATE 
    app.put('/api/author/update/:id', AuthorController.updateAuthor)
}