const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    
    title: { 
        type: String,
            required: [true, "Title cannot be left blank"]
        },
    price: { type: Number,
            required: [true, "Price cannot be left blank"]
        },
    description: {type: String,
            required: [true, "Description cannot be left blank"]
        }
}, { timestamps: true });


// const Product = mongoose.model('Product', ProductSchema);
// module.exports = Product
module.exports.Product = mongoose.model('Product', ProductSchema);