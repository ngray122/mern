const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema({
    
    name: { 
            type: String,
            required: [true, "Author cannot be left blank!"],
            minlength: [3, "Author must have at least 3 characters!"]
        },

}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);

// const Author = mongoose.model('Author', AuthorSchema);
// module.exports = Product
// module.exports.Author = mongoose.model('Product', ProductSchema);