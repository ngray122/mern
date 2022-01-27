const ThingController = require('../controllers/thing.controller');


// Make sure the mehods in controller match
// Routes or API endpoints that call ===> module.exports.FUNCTION from controller <=== which is the import ThingController

module.exports = (app) => {
    // app.get('/api', ThingController.index);

    // CREATE product
    app.post('/api/things/create', ThingController.createThing)

    // GET ALL thingss
    app.get('/api/things/all', ThingController.findAllThings)

    // GET ONE things
    app.get('/api/things/:id', ThingController.findOneThing)


    // DELETE things
    app.delete('/api/things/delete/:id', ThingController.deleteThing)

    // UPDATE things
    app.put('/api/things/update/:id', ThingController.updateThing)
}