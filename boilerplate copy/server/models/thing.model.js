const mongoose = require('mongoose');


const ThingSchema = new mongoose.Schema({
    
    firstName: { 
            type: String,
            required: [true, "firstName be left blank!"],
            minlength: [2, "Title must have at least 2 characters"]
        },
    lastName: { 
            type: String,
            required: [true, "lastName cannot be left blank!"],
            minlength: [2, "ln must have at least 2 characters"],

        },
    description: {
            type: String,
            required: [true, "Description cannot be left blank!"],
            minlength: [3, "Description must have at least 2 characters!"]
        }
}, { timestamps: true });


// const Product = mongoose.model('Product', ProductSchema);
// module.exports = Product
module.exports.Thing = mongoose.model('Thing', ThingSchema);