const mongoose = require('mongoose');


const ThingSchema = new mongoose.Schema({
    
    firstName: { 
            type: String,
            required: [true, "Title cannot be left blank!"],
            minlength: [2, "Title must have at least 2 characters"]
        },
    lastName: { 
            type: Number,
            required: [true, "Price cannot be left blank!"],
            min: [0, "Minimum price cannot be less than 0!"],

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